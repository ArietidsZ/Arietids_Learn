import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';

const root = resolve('dist');
const files = (dir) => readdirSync(dir).flatMap((name) => {
  const file = join(dir, name);
  return statSync(file).isDirectory() ? files(file) : [file];
});
const html = files(root).filter((file) => file.endsWith('.html'));
const errors = [];
for (const file of html) {
  const text = readFileSync(file, 'utf8');
  if (/class="katex-error"/.test(text)) errors.push(`${relative(root, file)}: math render error`);
  if (/\/Users\/|file:\/\//.test(text)) errors.push(`${relative(root, file)}: local path`);
  if (!file.includes('/demos/') && /<textarea\b/.test(text)) errors.push(`${relative(root, file)}: hidden working text`);
  // Astro emits /404/ as canonical metadata while the actual error page is /404.html.
  const navigation = text.replace(/<link\b[^>]*\brel="canonical"[^>]*>/g, '');
  for (const match of navigation.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
    let url = match[1].replace(/^https:\/\/learn\.arietids\.net/, '').split('?')[0];
    if (/^(?:[a-z]+:|\/\/)/i.test(url) || !url) continue;
    try { url = decodeURIComponent(url); } catch { continue; }
    const target = url.startsWith('/') ? resolve(root, '.' + url) : resolve(dirname(file), url);
    if (!existsSync(target) && !existsSync(join(target, 'index.html'))) errors.push(`${relative(root, file)}: missing ${url}`);
  }
}
if (!existsSync(join(root, 'pagefind/pagefind.js'))) errors.push('Missing search index');
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}
console.log(`Build audit passed: ${html.length} HTML pages; local links, math output, downloads and search index checked.`);
