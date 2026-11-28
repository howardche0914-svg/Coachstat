"""Build stock-agent/index.html from the pieces in stock-agent/src.

Usage:  python3 stock-agent/build.py
Edit the files in src/, then run this to regenerate index.html.
"""
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "src"
# Script order matters: translations and content first, the app last.
SCRIPTS = ["i18n.js", "lessons.js", "lessons2.js",
           "lang_es.js", "lang_fr.js", "lang_hi.js", "lang_ar.js", "lang_bn.js", "lang_world.js", "i18n_markets.js", "i18n_extra.js", "plus_i18n.js", "plus.js", "cloud.js", "guide.js", "app.js"]

def read(name):
    return (SRC / name).read_text(encoding="utf-8")

style = read("style.css").rstrip()
style = style[: -len("</style>")] + read("extra.css") + "</style>\n"
scripts = "\n".join(read(n) for n in SCRIPTS if (SRC / n).exists())
page = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>StockPilot AI</title>\n'
        + style + "</head>\n" + read("body.html") + '\n<script>\n"use strict";\n' + scripts
        + "</script>\n</body>\n</html>\n")
(HERE / "index.html").write_text(page, encoding="utf-8")
print(f"built index.html ({len(page):,} characters)")
