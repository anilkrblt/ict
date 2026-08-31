#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ICT Okuyucu — üretici.

Bu klasördeki tüm *.md dosyalarını okur, tek bir `index.html` üretir.
Yeni bir doküman eklemek için: .md dosyasını bu klasöre koy, sonra:

    python3 build.py

Dosya adı kalıbı (sıralama ve etiket için):  ict-<ay>-<yil>-....md
Örn: ict-kasim-2016-eleme-notlari.md  ->  "Kasım 2016"
Kalıba uymayan dosyalar da çalışır; etiket H1 başlığından türetilir.
"""

import html
import json
import os
import re
import sys
import unicodedata
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "index.html")

AYLAR = {
    "ocak": (1, "Ocak"), "subat": (2, "Şubat"), "şubat": (2, "Şubat"),
    "mart": (3, "Mart"), "nisan": (4, "Nisan"), "mayis": (5, "Mayıs"),
    "mayıs": (5, "Mayıs"), "haziran": (6, "Haziran"), "temmuz": (7, "Temmuz"),
    "agustos": (8, "Ağustos"), "ağustos": (8, "Ağustos"),
    "eylul": (9, "Eylül"), "eylül": (9, "Eylül"),
    "ekim": (10, "Ekim"), "kasim": (11, "Kasım"), "kasım": (11, "Kasım"),
    "aralik": (12, "Aralık"), "aralık": (12, "Aralık"),
}

TR_MAP = str.maketrans({
    "ı": "i", "İ": "i", "ş": "s", "Ş": "s", "ğ": "g", "Ğ": "g",
    "ü": "u", "Ü": "u", "ö": "o", "Ö": "o", "ç": "c", "Ç": "c",
})


def slugify(text, fallback="bolum"):
    t = text.translate(TR_MAP).lower()
    t = unicodedata.normalize("NFKD", t)
    t = "".join(c for c in t if not unicodedata.combining(c))
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t or fallback


def esc(t):
    return html.escape(t, quote=False)


def inline(t):
    """Satır içi markdown -> HTML."""
    t = esc(t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\*\w])\*([^*\n]+)\*(?!\*)", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)",
               r'<a href="\2" target="_blank" rel="noopener">\1</a>', t)
    return t


def split_row(line):
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    return [c.strip() for c in line.split("|")]


class Renderer:
    def __init__(self, id_prefix=""):
        self.id_prefix = id_prefix
        self.used_ids = {}
        self.toc = []

    def make_id(self, text):
        base = slugify(text)
        n = self.used_ids.get(base, 0)
        self.used_ids[base] = n + 1
        return base if n == 0 else "%s-%d" % (base, n + 1)

    def render(self, lines):
        out = []
        i = 0
        n = len(lines)
        while i < n:
            raw = lines[i]
            s = raw.strip()

            if not s:
                i += 1
                continue

            # --- yatay çizgi ---
            if re.fullmatch(r"(-{3,}|\*{3,}|_{3,})", s):
                out.append("<hr>")
                i += 1
                continue

            # --- başlık ---
            m = re.match(r"^(#{1,6})\s+(.*)$", s)
            if m:
                lvl = len(m.group(1))
                text = m.group(2).strip()
                if lvl == 3 and text == "Bölüm sonu — kendini sınama":
                    j = i + 1
                    while j < n and not lines[j].strip():
                        j += 1
                    items = []
                    while j < n:
                        mi = re.match(r"^[-*+]\s+(.*)$", lines[j].strip())
                        if not mi:
                            break
                        parts = [mi.group(1)]
                        j += 1
                        while j < n and lines[j].strip() and lines[j][:1] in (" ", "\t"):
                            parts.append(lines[j].strip())
                            j += 1
                        items.append(" ".join(parts))
                    if items:
                        out.append(
                            '<details class="chapter-check">'
                            '<summary><span>Bölüm sonu — kendini sınama</span>'
                            '<small>%d madde</small></summary><ul>%s</ul></details>'
                            % (len(items), "".join("<li>%s</li>" % inline(item) for item in items))
                        )
                        i = j
                        continue
                hid = self.make_id(text)
                dom_id = "%s--%s" % (self.id_prefix, hid) if self.id_prefix else hid
                self.toc.append({"id": hid, "level": lvl, "text": text})
                out.append('<h%d id="%s" data-section-id="%s" class="anchored">%s'
                           '<a class="anchor" href="#%s" aria-label="Bu bölüme bağlantı">#</a>'
                           "</h%d>" % (lvl, dom_id, hid, inline(text), hid, lvl))
                i += 1
                continue

            # --- tablo ---
            if s.startswith("|") and i + 1 < n and re.match(r"^\|[\s:\-|]+\|?$", lines[i + 1].strip()):
                head = split_row(s)
                aligns = []
                for c in split_row(lines[i + 1]):
                    left, right = c.startswith(":"), c.endswith(":")
                    aligns.append("center" if left and right else "right" if right else "left")
                i += 2
                body = []
                while i < n and lines[i].strip().startswith("|"):
                    body.append(split_row(lines[i]))
                    i += 1
                t = ['<div class="table-wrap" role="region" tabindex="0" '
                     'aria-label="Tablo; dar ekranda yatay kaydırılabilir"><table><thead><tr>']
                for idx, c in enumerate(head):
                    a = aligns[idx] if idx < len(aligns) else "left"
                    t.append('<th style="text-align:%s">%s</th>' % (a, inline(c)))
                t.append("</tr></thead><tbody>")
                for row in body:
                    t.append("<tr>")
                    for idx, c in enumerate(row):
                        a = aligns[idx] if idx < len(aligns) else "left"
                        t.append('<td style="text-align:%s">%s</td>' % (a, inline(c)))
                    t.append("</tr>")
                t.append("</tbody></table></div>")
                out.append("".join(t))
                continue

            # --- ::: ders / ::: eleme konteyneri ---
            mcon = re.match(r"^:::\s*(\w+)\s*$", s)
            if mcon:
                kind = mcon.group(1).lower()
                i += 1
                buf = []
                depth = 1
                while i < n:
                    ls = lines[i].strip()
                    if re.match(r"^:::\s*\w+\s*$", ls):
                        depth += 1
                    elif ls == ":::":
                        depth -= 1
                        if depth == 0:
                            i += 1
                            break
                    buf.append(lines[i])
                    i += 1
                inner = Renderer(self.id_prefix)
                inner.used_ids = self.used_ids
                html_in = inner.render(buf)
                self.toc.extend(inner.toc)
                out.append('<div class="block block-%s">%s</div>' % (kind, html_in))
                continue

            # --- alıntı ---
            if s.startswith(">"):
                buf = []
                while i < n and lines[i].strip().startswith(">"):
                    buf.append(re.sub(r"^\s*>\s?", "", lines[i]))
                    i += 1
                inner = Renderer(self.id_prefix)
                inner.used_ids = self.used_ids
                out.append("<blockquote>%s</blockquote>" % inner.render(buf))
                continue

            # --- kod bloğu ---
            if s.startswith("```"):
                i += 1
                buf = []
                while i < n and not lines[i].strip().startswith("```"):
                    buf.append(lines[i])
                    i += 1
                i += 1
                out.append("<pre><code>%s</code></pre>" % esc("\n".join(buf)))
                continue

            # --- listeler ---
            ul = re.match(r"^[-*+]\s+(.*)$", s)
            ol = re.match(r"^\d+[.)]\s+(.*)$", s)
            if ul or ol:
                tag = "ol" if ol else "ul"
                items = []
                pat = r"^\d+[.)]\s+(.*)$" if ol else r"^[-*+]\s+(.*)$"
                while i < n:
                    ls = lines[i].strip()
                    m2 = re.match(pat, ls)
                    if m2:
                        items.append([m2.group(1)])
                        i += 1
                    elif ls and not re.match(r"^(#{1,6}\s|>|\||```|-{3,})", ls) \
                            and not re.match(r"^[-*+]\s+", ls) and not re.match(r"^\d+[.)]\s+", ls) \
                            and items and lines[i][:1] in (" ", "\t"):
                        items[-1].append(ls)
                        i += 1
                    else:
                        break
                out.append("<%s>%s</%s>" % (
                    tag,
                    "".join("<li>%s</li>" % inline(" ".join(it)) for it in items),
                    tag,
                ))
                continue

            # --- paragraf ---
            buf = [s]
            i += 1
            while i < n:
                ls = lines[i].strip()
                if not ls or re.match(r"^(#{1,6}\s|>|\||```|-{3,}|\*{3,})", ls) \
                        or re.match(r"^[-*+]\s+", ls) or re.match(r"^\d+[.)]\s+", ls):
                    break
                buf.append(ls)
                i += 1
            out.append("<p>%s</p>" % inline(" ".join(buf)))

        return "\n".join(out)


def parse_doc(path):
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read().replace("\r\n", "\n").replace("\r", "\n")
    lines = raw.split("\n")

    title, subtitle = None, None
    idx = 0
    while idx < len(lines) and not lines[idx].strip():
        idx += 1
    if idx < len(lines):
        m = re.match(r"^#\s+(.*)$", lines[idx].strip())
        if m:
            title = m.group(1).strip()
            idx += 1
            while idx < len(lines) and not lines[idx].strip():
                idx += 1
            if idx < len(lines):
                m2 = re.match(r"^##\s+(.*)$", lines[idx].strip())
                if m2:
                    subtitle = m2.group(1).strip()
                    idx += 1
    body_lines = lines[idx:]
    while body_lines and (not body_lines[0].strip()
                          or re.fullmatch(r"(-{3,}|\*{3,})", body_lines[0].strip())):
        body_lines.pop(0)

    fname = os.path.basename(path)
    stem = os.path.splitext(fname)[0]
    doc_slug = slugify(stem)
    label, order = None, (9999, 99)
    m = re.search(r"-(" + "|".join(AYLAR.keys()) + r")-((?:19|20)\d{2})", stem, re.IGNORECASE)
    if m:
        num, pretty = AYLAR[m.group(1).lower()]
        year = int(m.group(2))
        label = "%s %d" % (pretty, year)
        order = (year, num)
    if not label:
        label = title or stem

    r = Renderer(doc_slug)
    body_html = r.render(body_lines)

    words = len(re.findall(r"\w+", raw, flags=re.UNICODE))
    return {
        "file": fname,
        "slug": doc_slug,
        "label": label,
        "title": title or stem,
        "subtitle": subtitle or "",
        "order": order,
        "html": body_html,
        "toc": r.toc,
        "words": words,
        "minutes": max(1, round(words / 190)),
        "mtime": datetime.fromtimestamp(os.path.getmtime(path)).strftime("%d.%m.%Y"),
    }


def build():
    src_dir = os.path.join(HERE, "ciktilar")
    if not os.path.isdir(src_dir):
        src_dir = HERE
    SKIP = {"readme", "yonerge", "yönerge", "notes", "todo"}
    md_files = sorted(
        os.path.join(src_dir, f) for f in os.listdir(src_dir)
        if f.lower().endswith(".md")
        and os.path.splitext(f)[0].strip().lower() not in SKIP
    )
    if not md_files:
        print("Bu klasörde .md dosyası yok.", file=sys.stderr)
        return 1

    docs = [parse_doc(p) for p in md_files]
    docs.sort(key=lambda d: (d["order"], d["label"]))

    sections = []
    for di, d in enumerate(docs):
        sections.append(
            '<article class="doc" id="doc-%s" data-index="%d" hidden>\n'
            '  <header class="doc-head">\n'
            '    <div class="doc-kicker">%s</div>\n'
            '    <h1 class="doc-title">%s</h1>\n'
            '    %s\n'
            '    <div class="doc-meta"><span>%s kelime</span><span>~%d dk okuma</span>'
            '<span>%s</span><span class="mono">%s</span></div>\n'
            "  </header>\n"
            '  <div class="doc-body">%s</div>\n'
            "</article>"
            % (
                d["slug"], di, esc(d["label"]), esc(d["title"]),
                ('<p class="doc-sub">%s</p>' % esc(d["subtitle"])) if d["subtitle"] else "",
                format(d["words"], ",d").replace(",", "."), d["minutes"],
                d["mtime"], esc(d["file"]), d["html"],
            )
        )

    docs_meta = [
        {"slug": d["slug"], "label": d["label"], "title": d["title"],
         "subtitle": d["subtitle"], "minutes": d["minutes"], "toc": d["toc"]}
        for d in docs
    ]

    tpl_path = os.path.join(HERE, "template.html")
    with open(tpl_path, "r", encoding="utf-8") as f:
        tpl = f.read()

    out = tpl.replace("/*__DOCS_JSON__*/null",
                      json.dumps(docs_meta, ensure_ascii=False))
    out = out.replace("<!--__SECTIONS__-->", "\n".join(sections))
    out = out.replace("<!--__BUILT__-->",
                      datetime.now().strftime("%d.%m.%Y %H:%M"))

    with open(OUT, "w", encoding="utf-8") as f:
        f.write(out)

    print("index.html üretildi — %d doküman:" % len(docs))
    for d in docs:
        print("  • %-14s %s (%d başlık, ~%d dk)"
              % (d["label"], d["file"], len(d["toc"]), d["minutes"]))
    return 0


if __name__ == "__main__":
    sys.exit(build())
