"""Fail before publishing if the export contains private paths or hidden working text."""
from pathlib import Path
import json
import re
import zipfile

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / 'content-manifest.json').read_text())
issues = []
patterns = {
    'local filesystem path': r'/Users/|/home/(?:user|arietids)|file://',
    'hidden working text': r'<textarea\b|display\s*:\s*none',
    'credential': r'(?i)(?:sk-[A-Za-z0-9]{24,}|gh[pousr]_[A-Za-z0-9]{24,}|-----BEGIN .*PRIVATE KEY-----)',
    'private email': r'(?i)[A-Z0-9._%+-]+@(?:gmail|qq|163|outlook|hotmail)\.com',
}
for folder in ['src/content/docs', 'public/downloads']:
    for path in (root / folder).rglob('*.md'):
        text = path.read_text()
        for name, pattern in patterns.items():
            if re.search(pattern, text):
                issues.append(f'{path.relative_to(root)}: {name}')
for path in (root / 'public/demos').glob('*.html'):
    text = path.read_text()
    for name in ['local filesystem path', 'credential', 'private email']:
        if re.search(patterns[name], text):
            issues.append(f'{path.name}: {name}')
    if re.search(r'<script[^>]+src=["\x27]https?://', text):
        issues.append(f'{path.name}: externally loaded script')
for course in manifest['courses']:
    archive = root / f'public/downloads/{course["id"]}.zip'
    with zipfile.ZipFile(archive) as z:
        if z.testzip():
            issues.append(f'{archive.name}: invalid archive')
        for name in z.namelist():
            if not name.endswith(('.md', '.html', '.txt')) or '..' in Path(name).parts:
                issues.append(f'{archive.name}: unexpected file {name}')
            if name.endswith('.md'):
                text = z.read(name).decode()
                for label, pattern in patterns.items():
                    if re.search(pattern, text):
                        issues.append(f'{archive.name}/{name}: {label}')
if issues:
    raise SystemExit('\n'.join(issues))
print(f'Content audit passed: {sum(len(c["notes"]) for c in manifest["courses"])} notes, {len(manifest["demos"])} demos, {len(manifest["courses"])} ZIP files.')
