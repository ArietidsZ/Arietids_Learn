# Arietids Learn

面向交大学弟学妹的个人课程复习笔记。

[在线阅读](https://learn.arietids.net/) · [交互演示](https://learn.arietids.net/explore/) · [下载](https://learn.arietids.net/resources/)

首批收录 7 门课程、82 份详版或速览笔记、8 个 HTML 交互页面。课程目录列出实际覆盖的章节；这不是完整教材。

| 课程 | 笔记数 |
| --- | ---: |
| 数学分析 I | 4 |
| 数学分析 II | 8 |
| 线性代数 | 16 |
| 大学物理 | 20 |
| 程序设计 | 12 |
| 数据结构 | 16 |
| 离散数学 | 6 |

## 阅读与分享

网站支持中文全文搜索、章节导航、公式、详版与速览切换、Markdown 下载及按课程打包下载。HTML 演示也包含在相应课程的 ZIP 中，可用浏览器离线打开。

校内大文件资料可通过[传承·交大](https://share.dyweb.sjtu.cn/)分享。本站目前提供平台入口，尚无对应的已上传资料条目。上传前需要确认资料的分享权限，并遵守平台规则。

本站保留笔记中的来源标记。教材、课件、题目及引文的权利属于原作者。仓库不包含原教材、原课件、试卷或个人提交记录；公开访问不代表对第三方材料重新授权。

## 本地运行

需要 Node.js 24 和 Python 3（内容及 ZIP 检查使用标准库）。

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

开发使用 `npm run dev`。搜索索引在生产构建时生成，测试搜索时使用 `npm run preview`。

## 内容维护

- 页面：`src/content/docs/`。
- 下载副本与演示：`public/downloads/`、`public/demos/`。
- 课程及来源记录：`content-manifest.json`；包括来源相对路径与 SHA-256。
- 从本机课程归档重新导出：`python3 scripts/import_archive.py --source /path/to/archive`。脚本只读白名单中的章节笔记与演示，不修改原稿。重新导出会覆盖生成的页面及下载副本。
- 修订正文时同步修改 Markdown 下载和 ZIP；原稿维护者可修改原稿后重新导出。发布前运行上述检查。

构建会检查发布副本中的本机路径、隐藏工作文本、凭据模式、下载包内容、公式渲染错误、站内链接和搜索索引。自动检查不能代替对数学结论的审阅。

## 架构与发布

使用 Astro + Starlight 静态生成，KaTeX 在构建时排版公式，Pagefind 在浏览器中搜索。所有字体与搜索资源随站点部署，不需要数据库、登录服务或搜索 API。演示保留独立 HTML，避免重复实现现有交互。

Vercel 项目 `arietids-learn` 连接本仓库，生产分支为 `main`，构建命令为 `npm run build`，产物为 `dist/`。域名为 `learn.arietids.net`。Vercel 配置及凭据不提交到仓库。

简化选择：课程阅读由 Markdown 生成；全文检索使用 Starlight 内置 Pagefind；下载使用静态文件。验证这些流程后，不另加 CMS、服务器、数据库或第二套搜索。导航和正文在关闭 JavaScript 后仍应可读，交互演示及搜索需要 JavaScript。

## 视觉与排版

视觉与 [arietids.net](https://arietids.net/) 和[博客](https://blog.arietids.net/)一致：深色墨蓝、浅色纸色，强调色为青绿。沿用 Starlight 的导航、搜索和主题控件，在 `src/components/` 中定制标题与外观；样式在 `src/styles/` 中按层覆盖：

- `tokens.css`：颜色、细线、阴影、材质、圆角、动效和字号；Starlight 的 `--sl-*` 变量由这些变量推出。
- `chrome.css`：页眉、侧栏、目录、搜索、上一页/下一页和页面过渡。
- `content.css`：正文、标题区、代码、折叠块、表格和公式。
- `pages.css`：首页、课程卡片、课程目录、下载页、404 和打印。

正文用读者设备自带的字体（Apple 设备上为 SF 与苹方）。页眉的字样是 Fraunces 的轮廓路径，不需要下载字体。

构建时的排版在 `integrations/typography.mjs`：

- 中文标题在词组之间换行（`src/lib/typeset.ts`）。
- “[来源：…]” 标记保留原文，以小字弱化显示。
- 公式在搜索摘要、目录和标题锚点中只读一次；标题 id 先由 Astro 按原文算出，排版不会改变任何锚点。
- 课程目录页的“阅读”链接按列命名为“详版”“速览”。

标题区由 `src/components/PageTitle.astro` 生成：课程返回链接、章节名、详版/速览切换和 Markdown 下载。导入脚本写在笔记开头的链接行在构建时去掉。侧栏每章只列一次；在速览页中，本课程的章节链接和上一页/下一页都指向速览版（`src/route-data.ts`）。

交互演示顶部的返回条由 `scripts/import_archive.py` 的 `DEMO_BAR` 注入，同时写入课程 ZIP。

`scripts/build-search.mjs` 使用 Pagefind 原生 Node API，在索引输入中对齐中文分词，修复“洛伦兹”“绪论”等查询漏检。这个步骤不改动发布的 HTML 或下载笔记，也不替换浏览器中的搜索组件。索引页数与输入页数不符时构建会失败。

宽公式只有在实际溢出时才加入键盘焦点，可用方向键横向滚动；打印始终使用白底黑字。减少动态效果的系统设置会关闭页面动效。

维护时注意：

- 选择器以标签或类名结尾，不要只用 `:is()`、`:not()`、`::selection` 或 `::backdrop`。长章节有三万多个元素，这类选择器会对每个元素逐一尝试。
- 构建使用 Astro 原生 `--force` 刷新内容缓存，确保排版插件的修改在本地和 Vercel 都生效，无需手动删除缓存。开发时修改排版插件后，可用 `npm run dev -- --force` 重启。

## 纠错

请通过 [GitHub Issues](https://github.com/ArietidsZ/Arietids_Learn/issues) 提供页面链接、具体位置及建议。涉及内容权利的问题也可在此说明。
