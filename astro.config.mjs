import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { readFileSync } from 'node:fs';

const catalog = JSON.parse(readFileSync(new URL('./content-manifest.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: 'https://learn.arietids.net',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: 'ignore', throwOnError: false }]],
      smartypants: false,
    }),
  },
  integrations: [starlight({
    title: 'Arietids Learn',
    description: '交大课程学习笔记：按章节阅读详版与速览，配合交互演示复习数学、物理与计算机基础。',
    defaultLocale: 'root',
    locales: { root: { label: '简体中文', lang: 'zh-CN' } },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ArietidsZ/Arietids_Learn' }],
    customCss: ['katex/dist/katex.min.css', './src/styles/custom.css'],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    lastUpdated: false,
    credits: false,
    pagination: true,
    sidebar: [
      { label: '课程总览', link: '/' },
      ...catalog.courses.map((course) => ({
        label: course.title,
        collapsed: true,
        items: [
          { label: '课程目录', link: `/courses/${course.id}/` },
          ...course.notes.map((note) => ({ label: note.shortTitle, link: `/${note.slug}/` })),
        ],
      })),
      { label: '交互演示', link: '/explore/' },
      { label: '下载与分享', link: '/resources/' },
      { label: '关于与纠错', link: '/about/' },
    ],
    head: [
      { tag: 'meta', attrs: { name: 'theme-color', content: '#153a43' } },
    ],
  })],
});
