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

## 纠错

请通过 [GitHub Issues](https://github.com/ArietidsZ/Arietids_Learn/issues) 提供页面链接、具体位置及建议。涉及内容权利的问题也可在此说明。
