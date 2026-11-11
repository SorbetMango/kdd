"""Buduje pliki pochodne strony z data/events.js i data/site.js.

Uruchomienie:  python tools/build.py   (panel robi to sam przy zapisie, usuwaniu i publikacji)

Co powstaje:
  img/min/…               miniatury zdjęć (kafelki, lista, katalog filmów) — mniej danych na telefonie
  data/images.js          wymiary zdjęć i adresy miniatur (window.IMGS)
  wydarzenie/<id>.html    osobna strona każdego wydarzenia z gotowym tytułem, opisem i kadrem (podglądy linków)
  sitemap.xml, robots.txt, 404.html
Pliki są zapisywane tylko wtedy, gdy ich treść się zmieniła. Miniatury wymagają biblioteki Pillow (bez niej strona używa pełnych zdjęć).
"""
import html, json, os, re, sys

ROOT = os.environ.get("KDD_ROOT") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDE_W, POSTER_W = 640, 360          # szerokość miniatur: kadry i plakaty
MONTHS = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
e_ = lambda s: html.escape(str(s or ""), quote=True)


def p(*parts):
    return os.path.join(ROOT, *parts)


def write_if_changed(path, content, binary=False):
    mode = "rb" if binary else "r"
    if os.path.exists(path):
        old = open(path, mode, **({} if binary else {"encoding": "utf-8"})).read()
        if old == content:
            return False
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb" if binary else "w", **({} if binary else {"encoding": "utf-8", "newline": "\n"})) as f:
        f.write(content)
    return True


def load_events():
    text = open(p("data", "events.js"), encoding="utf-8").read()
    return json.loads(text.split("window.EVENTS = ", 1)[1].rstrip().rstrip(";"))


def site_info():
    text = open(p("data", "site.js"), encoding="utf-8").read()
    get = lambda key: (re.search(key + r'\s*:\s*"([^"]*)"', text) or [None, ""])[1]
    url = get("url") or "https://sorbetmango.github.io/kdd/"
    return {"url": url if url.endswith("/") else url + "/", "name": get("name"), "venue": get(r"venue:\s*\{\s*name"), "city": get("city")}


def version():
    m = re.search(r"\?v=(\w+)", open(p("index.html"), encoding="utf-8").read())
    return m.group(1) if m else "1"


def wide(e):
    return e.get("image") or e.get("backdrop") or e.get("poster") or ""


# ---------- miniatury i wymiary ----------
def thumb_name(rel):
    return "img/min/" + rel[len("img/"):].replace("/", "-").rsplit(".", 1)[0] + ".jpg"


def build_images(events):
    try:
        from PIL import Image
    except ImportError:
        print("Brak biblioteki Pillow — pomijam miniatury (pip install pillow).")
        return {}
    kinds = {}
    for e in events:
        for path, kind in [(e.get("image"), "wide"), (e.get("backdrop"), "wide"), (e.get("poster"), "poster"), *[(g, "wide") for g in e.get("gallery") or []]]:
            if isinstance(path, str) and path.startswith("img/") and ".." not in path:
                kinds.setdefault(path, kind)
    manifest, made = {}, 0
    for rel, kind in sorted(kinds.items()):
        src = p(*rel.split("/"))
        if not os.path.isfile(src):
            continue
        try:
            im = Image.open(src)
            w, h = im.size
        except Exception:
            continue
        entry = [w, h]
        target_w = WIDE_W if kind == "wide" else POSTER_W
        if w > target_w * 1.15:
            t_rel = thumb_name(rel)
            t_abs = p(*t_rel.split("/"))
            th = round(h * target_w / w)
            if not os.path.exists(t_abs) or os.path.getmtime(t_abs) < os.path.getmtime(src):
                os.makedirs(os.path.dirname(t_abs), exist_ok=True)
                im.convert("RGB").resize((target_w, th), Image.LANCZOS).save(t_abs, "JPEG", quality=80, optimize=True, progressive=True)
                made += 1
            entry += [t_rel, target_w, th]
        manifest[rel] = entry
    # usuń miniatury, których nic już nie używa (np. po usunięciu wydarzenia)
    used = {v[2] for v in manifest.values() if len(v) > 2}
    folder = p("img", "min")
    removed = 0
    if os.path.isdir(folder):
        for f in os.listdir(folder):
            if "img/min/" + f not in used:
                os.remove(os.path.join(folder, f))
                removed += 1
    js = "/* Plik tworzony automatycznie przez tools/build.py — nie edytuj ręcznie.\n   ścieżka: [szerokość, wysokość, miniatura, szer. miniatury, wys. miniatury] */\nwindow.IMGS = " + json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + ";\n"
    write_if_changed(p("data", "images.js"), js)
    print(f"Zdjęcia: {len(manifest)}, nowe miniatury: {made}, usunięte: {removed}")
    return manifest


# ---------- strony wydarzeń ----------
def fmt_date(d):
    y, m, day = d.split("-")
    return f"{int(day)} {MONTHS[int(m) - 1]} {y}"


def head(title, desc, url, image, img_size, v, base, extra=""):
    size = f'<meta property="og:image:width" content="{img_size[0]}"><meta property="og:image:height" content="{img_size[1]}">' if img_size else ""
    return f"""<!doctype html><html lang="pl"><head><meta charset="utf-8"><base href="{e_(base)}"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preload" href="fonts/antonio-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="fonts.css?v={v}">
<link rel="stylesheet" href="style.css?v={v}">
<title>{e_(title)}</title>
<meta name="description" content="{e_(desc)}">
<link rel="icon" href="favicon.ico" sizes="48x48"><link rel="icon" href="favicon-32.png" type="image/png" sizes="32x32"><link rel="icon" href="favicon-48.png" type="image/png" sizes="48x48"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#0a0a0a">
<meta property="og:type" content="website"><meta property="og:site_name" content="Kino z Dianą Dąbrowską"><meta property="og:locale" content="pl_PL">
<meta property="og:title" content="{e_(title)}"><meta property="og:description" content="{e_(desc)}">
<meta property="og:url" content="{e_(url)}"><meta property="og:image" content="{e_(image)}">{size}
<meta name="twitter:card" content="summary_large_image">{f'<link rel="canonical" href="{e_(url)}">' if url else ""}{extra}</head>
"""


SCRIPTS = '<script src="data/site.js?v={v}"></script><script src="data/events.js?v={v}"></script><script src="data/images.js?v={v}"></script><script src="app.js?v={v}"></script>'


def build_pages(events, site, manifest):
    v, base = version(), site["url"]
    ids = set()
    for e in events:
        f, eid = e["film"], e["id"]
        if not re.fullmatch(r"[a-z0-9-]+", eid):
            print("Pomijam wydarzenie o nieprawidłowym id:", eid)
            continue
        ids.add(eid)
        title = f"{f['title']} (#{e['number']}) — Kino z Dianą Dąbrowską"
        desc = (e.get("description") or f"{fmt_date(e['date'])} · {site['venue']}, {site['city']}. Film + dyskusja.").split("\n")[0]
        url = base + f"wydarzenie/{eid}.html"
        img = wide(e)
        image = base + img if img else base + "img/og.jpg"
        size = manifest.get(img, [])[:2] if img else [1200, 630]
        body_text = "".join(f"<p>{e_(x)}</p>" for x in re.split(r"\n\s*\n", e.get("description") or "") if x.strip())
        html_ = head(title, desc, url, image, size, v, "../") + f"""<body data-page="event" data-id="{eid}"><div id="header"></div><main id="tresc"><div id="event"><section class="page-head ev-pre">
<h1>{e_(f['title'])}</h1><p>Spotkanie #{e['number']} · {fmt_date(e['date'])}{(' · ' + e_(e['time'])) if e.get('time') else ''} · {e_(e.get('venue') or site['venue'])}, {e_(e.get('city') or site['city'])}</p><p>reż. {e_(f.get('director'))}</p>{body_text}
</section></div></main>
<div id="footer"></div>{SCRIPTS.format(v=v)}</body></html>
"""
        write_if_changed(p("wydarzenie", eid + ".html"), html_)
    folder = p("wydarzenie")
    for fname in os.listdir(folder):
        if fname.endswith(".html") and fname[:-5] not in ids:
            os.remove(os.path.join(folder, fname))
    # mapa strony, robots.txt, strona 404
    urls = [base, base + "wydarzenia.html", base + "filmy.html"] + [base + f"wydarzenie/{i}.html" for i in sorted(ids)]
    write_if_changed(p("sitemap.xml"), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                     + "".join(f"  <url><loc>{e_(u)}</loc></url>\n" for u in urls) + "</urlset>\n")
    write_if_changed(p("robots.txt"), f"User-agent: *\nAllow: /\n\nSitemap: {base}sitemap.xml\n")
    nf = head("Nie ma takiej strony — Kino z Dianą Dąbrowską", "Ta strona nie istnieje. Zobacz najbliższe spotkanie i archiwum Kina z Dianą Dąbrowską.", "",
              base + "img/og.jpg", [1200, 630], v, base, '<meta name="robots" content="noindex">')
    nf += f"""<body data-page="404"><div id="header"></div><main id="tresc"><section class="page-head nf"><h1>Ups, 404</h1>
<p class="count">Tej strony nie ma — może link się zmienił albo zawiera literówkę.</p>
<div class="meta"><a class="btn cta" href="./">Najbliższe spotkanie <span aria-hidden="true">→</span></a><a class="btn" href="wydarzenia.html">Wszystkie wydarzenia</a><a class="btn" href="filmy.html">Filmy</a></div></section></main>
<div id="footer"></div>{SCRIPTS.format(v=v)}</body></html>
"""
    write_if_changed(p("404.html"), nf)
    print(f"Strony wydarzeń: {len(ids)}, mapa strony: {len(urls)} adresów")


def build():
    events, site = load_events(), site_info()
    manifest = build_images(events)
    build_pages(events, site, manifest)


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    build()
