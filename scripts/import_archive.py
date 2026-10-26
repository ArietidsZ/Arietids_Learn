"""Export the selected course notes; never modify the source archive."""
from pathlib import Path
import argparse
import hashlib
import html
import json
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
COURSES = [
    dict(id="analysis-1", title="数学分析 I", code="ANALYSIS I", folder="数学分析 I/Summary", pattern="MA C*.md", coverage="第 5–8 章：不定积分、定积分、广义积分与数项级数", summary="从积分方法到收敛判别。"),
    dict(id="analysis-2", title="数学分析 II", code="ANALYSIS II", folder="数学分析 II", pattern="MA_C*.md", coverage="第 12–15 章：曲线与曲面积分、函数项级数和 Fourier 级数", summary="沿曲线、曲面积分，理解函数展开。"),
    dict(id="linear-algebra", title="线性代数", code="LINEAR ALGEBRA", folder="线性代数/Summary", pattern="LA C*.md", coverage="矩阵、行列式、向量空间、特征值、Jordan 标准形与二次型", summary="把矩阵运算与空间结构联系起来。"),
    dict(id="physics", title="大学物理", code="PHYSICS", folder="大学物理", pattern="PH_C*.md", coverage="第 1–10 章：力学、相对论、振动与波、气体动理论及热力学", summary="梳理物理模型、适用条件和计算方法。"),
    dict(id="programming", title="程序设计", code="PROGRAMMING", folder="程序设计/Summary", pattern="FP C*.md", coverage="第 1–10、12、14 章：C++ 基础、函数、数组、指针、类、继承与输入输出", summary="用概念、代码与例题回看 C++ 基础。"),
    dict(id="data-structures", title="数据结构", code="DATA STRUCTURES", folder="数据结构", pattern="DS_C*.md", coverage="第 0–7 章：绪论、线性表、栈与队列、树、图、查找和排序", summary="从数据组织到操作过程与复杂度。"),
    dict(id="discrete-math", title="离散数学", code="DISCRETE MATHEMATICS", folder="离散数学", pattern="DM_C*.md", coverage="图论、数理逻辑、集合、关系、函数与基数", summary="整理定义、证明方法与反例。"),
]
DEMO_SOURCES = [
    ("avl", "数据结构/AVL旋转可视化.html", "AVL 旋转与删除回溯", "data-structures", "观察失衡节点、旋转过程与删除后的回溯。"),
    ("b-trees", "数据结构/B树与B+树-可视化.html", "B 树与 B+ 树", "data-structures", "比较节点结构，观察插入与分裂。"),
    ("binary-trees", "数据结构/二叉树构造与基本操作可视化.html", "二叉树构造与基本操作", "data-structures", "用具体树形理解构造、遍历和基本操作。"),
    ("ds-methods", "数据结构/数据结构作业复习资料.html", "数据结构题目方法复习", "data-structures", "按题目类型回顾数据结构的解题方法。"),
    ("cantor", "离散数学/Visualizations/cantor-uncountable-visual.html", "不可数集合与 Cantor 定理", "discrete-math", "逐步观察对角线论证。"),
    ("schroder-bernstein", "离散数学/Visualizations/schroder-bernstein-visual.html", "Schröder–Bernstein 定理", "discrete-math", "通过映射和链理解等势证明。"),
    ("function-spaces", "离散数学/Visualizations/DM_N608_function_space_visual.html", "函数空间的等势", "discrete-math", "探索函数集合之间的对应关系。"),
    ("edge-partition", "离散数学/Visualizations/edge_partition_counterexample_visual.html", "无桥图与边集二分：反例", "discrete-math", "用反例检验关于图的划分的直觉。"),
]


def natural(value):
    return [int(s) if s.isdigit() else s.lower() for s in re.split(r"(\d+)", value)]


def clean_markdown(text):
    # Hidden working notes must not be shipped in HTML or Markdown downloads.
    text = re.sub(r"<textarea\b[^>]*>.*?</textarea>", "", text, flags=re.S | re.I)
    # Keep source/page references, omit editing and generation comments.
    text = re.sub(r"<!--(.*?)-->", lambda m: m.group(0) if re.match(r"\s*src:", m[1]) else "", text, flags=re.S)
    pieces = re.split(r"(^\s*```[^\n]*\n.*?^\s*```\s*$)", text, flags=re.M | re.S)
    for i in range(0, len(pieces), 2):
        s = pieces[i]
        s = re.sub(r"(?<!\\)\\\[(.*?)\\\]", lambda m: "\n\n$$\n" + m[1].strip() + "\n$$\n\n", s, flags=re.S)
        s = re.sub(r"(?<!\\)\\\((.*?)\\\)", lambda m: "$" + m[1] + "$", s, flags=re.S)
        def display_math(match):
            prefix = s[s.rfind('\n', 0, match.start()) + 1:match.start()]
            indent = prefix if not prefix.strip() else ''
            formula = match[1].strip()
            block = '$$\n' + indent + formula + '\n' + indent + '$$\n' + indent
            return block if not prefix.strip() else '\n\n' + block + '\n\n'
        s = re.sub(r"(?<!\\)\$\$(.*?)\$\$", display_math, s, flags=re.S)
        pieces[i] = s
    return re.sub(r"\n{4,}", "\n\n\n", "".join(pieces)).strip() + "\n"


def frontmatter(title, description, **extra):
    data = dict(title=title, description=description, **extra)
    return "---\n" + "\n".join(f"{key}: {json.dumps(value, ensure_ascii=False)}" for key, value in data.items()) + "\n---\n\n"


def write(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)


def export(source):
    docs = ROOT / "src/content/docs"
    public = ROOT / "public"
    manifest = dict(released="2026-10-26", courses=[], demos=[])
    for course in COURSES:
        info = {k: course[k] for k in ["id", "title", "code", "coverage", "summary"]}
        info["notes"] = []
        for path in sorted((source / course["folder"]).glob(course["pattern"]), key=lambda p: natural(p.name)):
            raw = path.read_text()
            text = clean_markdown(raw)
            heading = re.search(r"^# (.+)$", text, re.M)
            if not heading:
                raise ValueError(f"Missing heading: {path.name}")
            title = re.sub(r"<!--.*?-->", "", heading[1]).strip()
            title = re.sub(r"\s*[-—·：:]?\s*知识集锦\s*$", "", title).strip()
            text = text[:heading.start()] + text[heading.end():]
            code = re.search(r"C(\d+(?:[SH]\d+)?)", path.stem)[1]
            quick = path.stem.endswith("T")
            page = "chapter-" + code.lower().zfill(2) + ("-quick" if quick else "")
            slug = f"courses/{course['id']}/{page}"
            short = re.sub(r"^(?:数据结构[ ·]*|大学物理\s*|线性代数\s*)", "", title)
            short = re.sub(r"[（(].*?速览.*?[）)]|[ ·—]*速览版?$", "", short).strip()
            if course['id'] == 'discrete-math':
                short = {"1": "图论", "2": "数理逻辑", "3": "集合、关系、函数与基数"}[code]
                title = "离散数学 · " + short + (" · 速览" if quick else "")
            if quick:
                short += " · 速览"
            download = f"/downloads/{course['id']}/{page}.md"
            note = dict(title=title, shortTitle=short, slug=slug, quick=quick, code=code, source=str(path.relative_to(source)), sourceSha256=hashlib.sha256(raw.encode()).hexdigest(), download=download)
            info['notes'].append(note)
            note['_body'] = text.strip()
        for note in info['notes']:
            other = next((n for n in info['notes'] if n['code'] == note['code'] and n['quick'] != note['quick']), None)
            links = f'<a href="/courses/{course["id"]}/">{course["title"]}目录</a>'
            if other:
                links += f'<a href="/{other["slug"]}/">阅读{"详版" if note["quick"] else "速览"}</a>'
            links += f'<a href="{note["download"]}" download>下载 Markdown</a>'
            body = note.pop('_body')
            write(docs / (note['slug'] + '.md'), frontmatter(note['title'], f"{course['title']}课程笔记：{note['title']}。") + f'<div class="note-meta">{links}</div>\n\n' + body + '\n')
            write(public / note['download'].lstrip('/'), f"# {note['title']}\n\n> Arietids Learn · 个人课程复习笔记\n> 在线阅读：https://learn.arietids.net/{note['slug']}/\n\n" + body + '\n')
        manifest['courses'].append(info)

    for identifier, relative, title, course_id, description in DEMO_SOURCES:
        raw = (source / relative).read_text()
        # Standalone demos retain their original logic and styling.
        raw = re.sub(r"<!--.*?-->", "", raw, flags=re.S)
        if '<meta name="viewport"' not in raw and "<meta name='viewport'" not in raw:
            raw = raw.replace('</head>', '<meta name="viewport" content="width=device-width,initial-scale=1"></head>')
        back = '<div style="padding:10px 16px;background:#153a43;color:#fff;font:14px/1.6 system-ui"><a style="color:#fff;text-decoration:none" href="/explore/">← Arietids Learn · 交互演示目录</a></div>'
        raw = re.sub(r'(<body\b[^>]*>)', r'\1' + back, raw, count=1, flags=re.I)
        write(public / f'demos/{identifier}.html', raw)
        manifest['demos'].append(dict(id=identifier, title=title, course=course_id, description=description, url=f'/demos/{identifier}.html', source=relative))

    for course in manifest['courses']:
        body = frontmatter(course['title'], course['coverage'])
        body += f"{course['summary']}\n\n**覆盖范围：** {course['coverage']}。\n\n"
        body += "按章节阅读；有速览的章节可在两种版本之间切换。\n\n"
        body += "| 章节 | 详版 | 速览 |\n| --- | --- | --- |\n"
        for note in (n for n in course['notes'] if not n['quick']):
            quick = next((n for n in course['notes'] if n['code'] == note['code'] and n['quick']), None)
            body += f"| {note['shortTitle'].replace('|', '／')} | [阅读]({ '/' + note['slug'] + '/'}) | " + (f"[阅读](/{'%s' % quick['slug']}/)" if quick else "—") + " |\n"
        demos = [d for d in manifest['demos'] if d['course'] == course['id']]
        if demos:
            body += "\n## 交互演示\n\n" + '\n'.join(f"- [{d['title']}]({d['url']})：{d['description']}" for d in demos) + '\n'
        body += f"\n## 离线阅读\n\n[下载本课程笔记包（ZIP）](/downloads/{course['id']}.zip)，内含本站的 Markdown 笔记" + ("与 HTML 演示" if demos else "") + "。\n\n更多校内资料可前往[传承·交大](https://share.dyweb.sjtu.cn/)，需要交大账号登录。\n"
        write(docs / f'courses/{course["id"]}/index.md', body)
        with zipfile.ZipFile(public / f'downloads/{course["id"]}.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
            archive.writestr('README.txt', f"{course['title']} · Arietids Learn\n\n覆盖范围：{course['coverage']}\n在线目录：https://learn.arietids.net/courses/{course['id']}/\n\n这是个人课程复习笔记。内容可能存在疏漏，请以课程正式要求为准。\nMarkdown 可用 Obsidian 或其他支持数学公式的阅读器打开。\nHTML 演示可用浏览器直接打开。\n\n来源标记随笔记保留。第三方引文、题目和课件内容的权利属于原作者。\n本资料包不包含原教材、原课件或试卷。\n")
            for note in course['notes']:
                p = public / note['download'].lstrip('/')
                archive.write(p, 'notes/' + p.name)
            for demo in demos:
                p = public / demo['url'].lstrip('/')
                offline = p.read_text().replace('href="/explore/"', 'href="https://learn.arietids.net/explore/"')
                archive.writestr('demos/' + p.name, offline)

    count = sum(len(c['notes']) for c in manifest['courses'])
    home = frontmatter('课程笔记', 'Arietids 的交大课程复习笔记、章节速览与交互演示。', template='splash', hero={"title": "课程笔记与交互演示", "tagline": "数学、物理与计算机基础的课程笔记。按章节梳理，用速览回顾，也用交互演示看清过程。", "actions": [{"text": "浏览课程", "link": "#课程目录", "icon": "right-arrow"}, {"text": "交互演示", "link": "/explore/", "variant": "secondary"}]})
    home += f'<p class="stats">{len(manifest["courses"])} 门课程 · {count} 份笔记 · {len(manifest["demos"])} 个交互页面</p>\n\n## 课程目录\n\n<div class="course-grid">\n'
    for c in manifest['courses']:
        home += f'<a class="course-card" href="/courses/{c["id"]}/"><span class="course-code">{c["code"]}</span><strong>{c["title"]}</strong><span>{c["summary"]}</span><small>{len(c["notes"])} 份笔记 · {html.escape(c["coverage"])}</small></a>\n'
    home += '</div>\n\n## 从这里开始\n\n- **系统复习**：从课程目录进入详版，沿章节阅读定义、推导和例题。\n- **考前回顾**：选择速览，遇到不熟悉的结论再回到详版。\n- **理解过程**：打开树结构、集合与证明相关的交互演示。\n\n笔记来自个人学习整理，覆盖范围以各课程目录为准。发现错误，欢迎[提出纠正](/about/#纠错)。\n'
    write(docs / 'index.md', home)
    explore = frontmatter('交互演示', '用树结构和离散数学交互页面观察操作过程、映射和反例。') + '选择一个主题，在独立页面中操作和观察。\n'
    for course in manifest['courses']:
        ds = [d for d in manifest['demos'] if d['course'] == course['id']]
        if not ds:
            continue
        explore += f'\n## {course["title"]}\n\n<div class="course-grid">\n'
        for d in ds:
            explore += f'<a class="course-card" href="{d["url"]}"><strong>{html.escape(d["title"])}</strong><span>{d["description"]}</span><small>打开演示 →</small></a>\n'
        explore += '</div>\n'
    write(docs / 'explore.md', explore)
    resources = frontmatter('下载与分享', '下载课程笔记的 Markdown 与交互演示，或前往传承·交大查看校内资料。')
    resources += '## 本站笔记\n\n各课程包与网站阅读内容对应，包含 Markdown；有交互演示的课程同时包含 HTML。可用 Obsidian 阅读 Markdown，用浏览器打开 HTML。\n\n| 课程 | 内容 | 下载 |\n| --- | --- | --- |\n'
    for c in manifest['courses']:
        resources += f'| {c["title"]} | {len(c["notes"])} 份笔记 | [ZIP](/downloads/{c["id"]}.zip) |\n'
    resources += '\n## 校内课程资料\n\n[前往传承·交大](https://share.dyweb.sjtu.cn/)\n\n传承·交大提供校内课程资料共享，需要登录；资料兑换和下载按平台规则进行。目前此处提供平台入口，本站笔记尚未建立对应的传承资料条目。\n\n## 使用说明\n\n本站提供个人复习整理。课程范围、作业要求与考试安排以课程正式通知为准。原教材、教师课件和试卷不包含在上述下载包内。\n\n引用本站整理时请注明页面链接。第三方引文、题目和课件内容的权利属于原作者；如需转载或改编整份资料，请先联系确认范围。\n'
    write(docs / 'resources.md', resources)
    write(ROOT / 'content-manifest.json', json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print(f'Exported {count} notes, {len(manifest["courses"])} courses, {len(manifest["demos"])} demos. Source files unchanged.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', type=Path, required=True)
    args = parser.parse_args()
    export(args.source.resolve())
