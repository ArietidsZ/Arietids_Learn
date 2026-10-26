import { readFile, readdir, rm } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import * as pagefind from 'pagefind';
import rehypeRaw from 'rehype-raw';
import { toHtml } from 'hast-util-to-html';

// Pagefind 1.5 uses ICU for queries but another dictionary while indexing.
// Align only the index input; published HTML and downloadable notes stay untouched.
// https://github.com/Pagefind/pagefind/issues/1237
const root = resolve('dist');
const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' });
const parse = rehypeRaw();
const opaque = new Set(['head', 'script', 'style', 'svg']);
const segment = (text) => text.replace(/\p{Script=Han}+/gu,
  (run) => [...segmenter.segment(run)].map(({ segment }) => segment).join('\u200b'));

function alignText(node, inContent = false) {
  if (node.type === 'element') {
    if (opaque.has(node.tagName) || 'dataPagefindIgnore' in node.properties) return;
    inContent ||= 'dataPagefindBody' in node.properties;
  }
  if (inContent && node.type === 'text') node.value = segment(node.value);
  for (const child of node.children ?? []) alignText(child, inContent);
}

function mainContent(node) {
  if (node.type === 'element' && 'dataPagefindBody' in node.properties) return node;
  for (const child of node.children ?? []) {
    const main = mainContent(child);
    if (main) return main;
  }
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

function checked(result) {
  if (result.errors.length) throw new Error(result.errors.join('\n'));
  return result;
}

try {
  const { index } = checked(await pagefind.createIndex());
  let count = 0;
  for await (const file of htmlFiles(root)) {
    const html = await readFile(file, 'utf8');
    if (!html.includes('data-pagefind-body')) continue;
    const tree = parse({ type: 'root', children: [{ type: 'raw', value: html }] });
    const main = mainContent(tree);
    if (!main) throw new Error(`Missing search body: ${file}`);
    alignText(main);
    // rehype-raw parses a fragment; restore the language-bearing document wrapper explicitly.
    const content = `<!doctype html><html lang="zh-CN"><body>${toHtml(main)}</body></html>`;
    checked(await index.addHTMLFile({ sourcePath: relative(root, file), content }));
    count++;
  }
  // Only replace generated files after all documents have been indexed successfully.
  const { files } = checked(await index.getFiles());
  const metadata = JSON.parse(Buffer.from(files.find((file) => file.path === 'pagefind-entry.json')?.content ?? '').toString());
  if (metadata.languages['zh-cn']?.page_count !== count || count === 0) throw new Error('Incomplete Chinese search index');
  await rm(join(root, 'pagefind'), { recursive: true, force: true });
  checked(await index.writeFiles({ outputPath: join(root, 'pagefind') }));
  console.log(`Chinese search index: ${count} pages; published HTML unchanged.`);
} finally {
  await pagefind.close();
}
