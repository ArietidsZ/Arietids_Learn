import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { readFileSync } from 'node:fs';
import { learnTypography } from './integrations/typography.mjs';

const catalog = JSON.parse(readFileSync(new URL('./content-manifest.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: 'https://learn.arietids.net',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      // The notes' own HTML (links, details, cards) is parsed before typesetting, so the
      // typesetter sees whole elements rather than strings.
      rehypePlugins: [[rehypeKatex, { strict: 'ignore', throwOnError: false }], rehypeRaw, learnTypography],
      smartypants: false,
    }),
  },
  integrations: [starlight({
    title: 'Arietids Learn',
    description: '交大课程学习笔记：按章节阅读详版与速览，配合交互演示复习数学、物理与计算机基础。',
    defaultLocale: 'root',
    locales: { root: { label: '简体中文', lang: 'zh-CN' } },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ArietidsZ/Arietids_Learn' }],
    customCss: [
      'katex/dist/katex.min.css',
      './src/styles/tokens.css',
      './src/styles/chrome.css',
      './src/styles/content.css',
      './src/styles/pages.css',
    ],
    components: {
      SiteTitle: './src/components/SiteTitle.astro',
      PageTitle: './src/components/PageTitle.astro',
      TableOfContents: './src/components/TableOfContents.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      Footer: './src/components/Footer.astro',
      Search: './src/components/Search.astro',
      MarkdownContent: './src/components/MarkdownContent.astro',
    },
    routeMiddleware: './src/route-data.ts',
    expressiveCode: {
      styleOverrides: {
        borderRadius: 'var(--r-control)',
        borderWidth: 'var(--hairline)',
        borderColor: 'var(--line)',
        codeFontSize: '0.875rem',
        codeLineHeight: '1.7',
        codePaddingBlock: '0.875rem',
        codePaddingInline: '1.125rem',
        frames: { frameBoxShadowCssValue: 'none' },
      },
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    lastUpdated: false,
    credits: false,
    pagination: true,
    // Each chapter is listed once, by its detailed note; on a quick page the sidebar follows the
    // quick versions (src/route-data.ts), and the switch under the title changes version.
    sidebar: [
      { label: '课程总览', link: '/' },
      ...catalog.courses.map((course) => ({
        label: course.title,
        collapsed: true,
        items: [
          { label: '课程目录', link: `/courses/${course.id}/` },
          ...course.notes.filter((note) => !note.quick).map((note) => ({ label: note.shortTitle, link: `/${note.slug}/` })),
        ],
      })),
      { label: '交互演示', link: '/explore/' },
      { label: '下载与分享', link: '/resources/' },
      { label: '关于与纠错', link: '/about/' },
    ],
    head: [
      // The page colour of each theme, for the browser's own bars.
      { tag: 'meta', attrs: { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#070c19' } },
      { tag: 'meta', attrs: { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#faf6ef' } },
    ],
  })],
});
