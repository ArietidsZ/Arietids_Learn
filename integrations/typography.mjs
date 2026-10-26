/**
 * Note typesetting at build time, so pages need no script to look finished:
 *
 *  - Chinese headings break only between phrases (src/lib/typeset.ts), at <wbr> hints;
 *  - a formula is read once: KaTeX writes each one three times (MathML, the TeX source and the
 *    visual layout), so search excerpts, the outline and heading anchors read "AAA" for A. Pagefind
 *    skips the source and the layout, and in headings both are handed on as finished HTML, which
 *    the outline's text collector skips;
 *  - source marks such as "[来源：p3，定义]" keep their text but are set small and quiet
 *    (.src-ref), so the reasoning reads first and the reference stays at hand;
 *  - the links the importer writes at the top of each note are dropped, because the page title
 *    carries them as a course link, a version switch and a download (components/PageTitle.astro);
 *  - on a course's index page the opening line becomes its lede, and the chapter table's "阅读"
 *    links are named for their column (详版, 速览);
 *  - the home page's line of figures ("7 门课程 · 82 份笔记 · …") is set as figures.
 *
 * Heading ids are fixed first, by Astro's own id pass over the untouched headings, so no change
 * here moves an anchor. Pages are told apart by their path under src/content/docs, which the
 * importer controls.
 */
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { toHtml } from 'hast-util-to-html';
import { segments } from '../src/lib/typeset.ts';

const HAS_HAN = /\p{Script=Han}/u;
const SOURCE = /\[来源[：:][^\]\n]*\]/g;
/** Elements whose text is code, math or a title: no source marks are looked for inside. */
const OPAQUE = new Set(['pre', 'code', 'kbd', 'samp', 'script', 'style', 'svg', 'math', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const el = (tagName, properties = {}, children = []) => ({ type: 'element', tagName, properties, children });
const txt = (value) => ({ type: 'text', value });
const classes = (node) => [node.properties?.className ?? []].flat().map(String);
const hasClass = (node, name) => node.type === 'element' && classes(node).includes(name);
const addClass = (node, name) => (node.properties = { ...node.properties, className: [...classes(node), name] });
const text = (node) => (node.type === 'text' ? node.value : (node.children ?? []).map(text).join(''));
const elements = (node) => (node.children ?? []).filter((c) => c.type === 'element');

/** The page's path under src/content/docs, without extension or a trailing "/index". */
function pageOf(file) {
  const path = String(file.path ?? file.history?.[0] ?? '').replaceAll('\\', '/');
  const m = path.match(/src\/content\/docs\/(.+)\.mdx?$/);
  return m ? m[1].replace(/(^|\/)index$/, '') || 'index' : '';
}

/** Replace each child for which `make` returns nodes. */
function splice(parent, make) {
  const out = [];
  let changed = false;
  for (const child of parent.children ?? []) {
    const made = make(child);
    if (made) (changed = true), out.push(...made);
    else out.push(child);
  }
  if (changed) parent.children = out;
}

/**
 * A heading's Han text, split at phrase boundaries with <wbr>. Runs that must not break (a number
 * and its measure word, a hyphenated compound) are held in a no-break span; the text itself, ordinary
 * spaces included, is left exactly as written.
 */
function setHeading(node) {
  splice(node, (child) => {
    if (child.type === 'element') {
      if (!hasClass(child, 'katex')) setHeading(child);
      return null;
    }
    if (child.type !== 'text' || !HAS_HAN.test(child.value)) return null;
    return segments(child.value).map((s) => {
      if (s.kind === 'wbr') return el('wbr');
      const value = s.text.replaceAll(' ', ' ');
      return s.kind === 'nobr' || value !== s.text ? el('span', { className: ['nobr'] }, [txt(value)]) : txt(value);
    });
  });
}

/** KaTeX's visual layout and TeX source stay out of the search index; the MathML is indexed. */
function indexMathOnce(node) {
  for (const child of elements(node)) {
    if (hasClass(child, 'katex-html') || child.tagName === 'annotation') {
      child.properties = { ...child.properties, dataPagefindIgnore: '' };
      continue;
    }
    indexMathOnce(child);
  }
}

/**
 * In a heading, the TeX source and the visual layout of each formula become finished HTML, which
 * the heading text collector (outline, anchor label) skips and the page receives unchanged.
 */
function readMathOnce(heading) {
  const asHtml = (n) => {
    const value = toHtml(n);
    // The collector skips only HTML on a single line.
    return value.includes('\n') ? null : [{ type: 'raw', value }];
  };
  const visit = (n) =>
    splice(n, (c) => {
      if (c.type !== 'element') return null;
      if (hasClass(c, 'katex-html') || c.tagName === 'annotation') return asHtml(c);
      visit(c);
      return null;
    });
  visit(heading);
}

/** Source marks in running text become quiet spans; their text is unchanged. */
function setSources(node) {
  if (node.type !== 'element' && node.type !== 'root') return;
  if (node.type === 'element' && (OPAQUE.has(node.tagName) || hasClass(node, 'katex'))) return;
  splice(node, (child) => {
    if (child.type !== 'text') {
      setSources(child);
      return null;
    }
    if (!child.value.includes('[来源')) return null;
    const out = [];
    let last = 0;
    for (const m of child.value.matchAll(SOURCE)) {
      if (m.index > last) out.push(txt(child.value.slice(last, m.index)));
      out.push(el('span', { className: ['src-ref'] }, [txt(m[0])]));
      last = m.index + m[0].length;
    }
    if (!out.length) return null;
    if (last < child.value.length) out.push(txt(child.value.slice(last)));
    return out;
  });
}

/** A course index: the lede, the quiet lines under it, and named version links in the table. */
function setCourseIndex(tree) {
  const blocks = elements(tree);
  const table = blocks.find((n) => n.tagName === 'table');
  const before = table ? blocks.slice(0, blocks.indexOf(table)) : blocks;
  const paragraphs = before.filter((n) => n.tagName === 'p');
  if (paragraphs[0]) addClass(paragraphs[0], 'lede');
  for (const p of paragraphs.slice(1)) addClass(p, 'course-meta');
  if (!table) return;
  addClass(table, 'chapters');
  const head = table.children.find((n) => n.tagName === 'thead');
  const body = table.children.find((n) => n.tagName === 'tbody');
  const headers = head ? elements(elements(head)[0] ?? { children: [] }).map((th) => text(th).trim()) : [];
  for (const row of body ? elements(body) : []) {
    const cells = elements(row);
    const chapter = text(cells[0] ?? txt('')).trim();
    cells.forEach((cell, i) => {
      if (i === 0) return;
      const links = elements(cell).filter((n) => n.tagName === 'a');
      if (links.length === 1 && text(links[0]).trim() === '阅读' && headers[i]) {
        links[0].children = [txt(headers[i])];
        // The name starts with the visible label, then says which chapter it opens.
        links[0].properties = { ...links[0].properties, className: ['pill'], ariaLabel: `${headers[i]} · ${chapter}` };
      } else if (text(cell).trim() === '—') {
        addClass(cell, 'none');
        cell.children = [el('span', { ariaHidden: 'true' }, [txt('—')]), el('span', { className: ['sr-only'] }, [txt('无')])];
      }
    });
  }
}

/** "7 门课程 · 82 份笔记 · 8 个交互页面" → figures: a numeral over its unit. */
function setFigures(tree) {
  for (const p of elements(tree)) {
    if (p.tagName !== 'p' || !hasClass(p, 'stats')) continue;
    const parts = text(p).split('·').map((s) => s.trim().match(/^(\d+)\s*(.+)$/));
    if (!parts.length || parts.some((m) => !m)) continue;
    addClass(p, 'figures');
    p.children = parts.flatMap((m, i) => [
      ...(i ? [txt(' ')] : []),
      el('span', { className: ['figure'] }, [el('span', { className: ['figure-num'] }, [txt(m[1])]), el('span', { className: ['figure-unit'] }, [txt(m[2])])]),
    ]);
  }
}

export function learnTypography() {
  const fixIds = rehypeHeadingIds();
  return (tree, file) => {
    fixIds(tree, file);
    const page = pageOf(file);
    if (/^courses\/[^/]+\/chapter-/.test(page)) {
      tree.children = tree.children.filter((n) => !hasClass(n, 'note-meta'));
    }
    if (/^courses\/[^/]+$/.test(page)) setCourseIndex(tree);
    if (page === 'index') setFigures(tree);

    indexMathOnce(tree);
    const visit = (node) => {
      for (const child of elements(node)) {
        if (/^h[1-6]$/.test(child.tagName)) {
          setHeading(child);
          readMathOnce(child);
        } else visit(child);
      }
    };
    visit(tree);
    setSources(tree);
  };
}
