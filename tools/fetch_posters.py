"""Pobiera plakaty i kadry z TMDB i zapisuje ich adresy w data/events.js.

Klucz API: ustaw zmienną TMDB_API_KEY albo wpisz w pliku tools/.env linię:
    TMDB_API_KEY=twoj_klucz   (to może być klucz v3 lub "API Read Access Token" v4)
Uruchomienie:  python tools/fetch_posters.py
Obrazki są zapisywane w img/tmdb/. Wydarzenia, które już mają "poster", są pomijane (dodaj --force, by odświeżyć).
"""
import json, os, re, sys, unicodedata, urllib.parse, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EV = os.path.join(ROOT, "data", "events.js")
CACHE = os.path.join(ROOT, "tools", "tmdb_cache.json")
IMG = "https://image.tmdb.org/t/p/"

key = os.environ.get("TMDB_API_KEY", "")
envf = os.path.join(ROOT, "tools", ".env")
if not key and os.path.exists(envf):
    for l in open(envf, encoding="utf-8"):
        if l.startswith("TMDB_API_KEY="): key = l.split("=", 1)[1].strip()
kf = os.path.join(ROOT, "tools", "KLUCZ_TMDB.txt")
if not key and os.path.exists(kf):
    for l in open(kf, encoding="utf-8-sig"):
        l = l.strip()
        if l and not l.startswith("#"): key = l; break
if not key or key.startswith("WKLEJ"): sys.exit("Brak klucza: otworz tools/KLUCZ_TMDB.txt, wklej klucz i zapisz plik.")

def api(path, **params):
    headers = {}
    if len(key) > 40: headers["Authorization"] = "Bearer " + key   # token v4
    else: params["api_key"] = key
    url = "https://api.themoviedb.org/3" + path + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=20) as r:
        return json.load(r)

def norm(s):
    s = unicodedata.normalize("NFKD", s.lower().replace("ł", "l")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9 ]+", " ", s).split()

def director_match(want, crew):
    names = [set(norm(c["name"])) for c in crew if c.get("job") == "Director"]
    for w in re.split(r",|&", want):
        ws = set(norm(w))
        if ws and any(ws & n and len(ws & n) >= min(2, len(ws)) for n in names): return True
    return False

cache = json.load(open(CACHE, encoding="utf-8")) if os.path.exists(CACHE) else {}
txt = open(EV, encoding="utf-8").read()
head, body = txt.split("window.EVENTS = ", 1)
events = json.loads(body.rstrip().rstrip(";"))
force = "--force" in sys.argv

def find(title, director):
    k = title + "|" + director
    if k in cache: return cache[k]
    res = None
    for lang in ("pl-PL", "en-US"):
        for c in api("/search/movie", query=title, language=lang).get("results", [])[:6]:
            if director_match(director, api(f"/movie/{c['id']}/credits").get("crew", [])):
                res = dict(id=c["id"], year=(c.get("release_date") or "")[:4], original=c.get("original_title", ""),
                           poster=c.get("poster_path"), backdrop=c.get("backdrop_path")); break
        if res: break
    cache[k] = res
    return res

missing = []
for e in events:
    if e.get("poster") and not force: continue
    f = e["film"]
    title = f["title"].split(" + ")[0]
    director = f["director"].split(",")[0] if " + " in f["title"] else f["director"]
    try: r = find(title, director)
    except Exception as ex: print("błąd", e["number"], ex); continue
    if not r or not r["poster"]: missing.append(f"#{e['number']} {f['title']}"); continue
    e["poster"] = IMG + "w780" + r["poster"]
    if r["backdrop"]: e["backdrop"] = IMG + "w1280" + r["backdrop"]
    if r["year"]: f["year"] = int(r["year"])
    if r["original"] and r["original"] != f["title"]: f.setdefault("original", r["original"])
    print("ok", e["number"], f["title"])

# --- zapisz obrazki lokalnie (img/tmdb/), żeby strona nie ładowała ich z TMDB ---
IMGDIR = os.path.join(ROOT, "img", "tmdb"); os.makedirs(IMGDIR, exist_ok=True)
def localize(url):
    if not url or not url.startswith("http"): return url
    name = url.rsplit("/", 1)[1]
    path = os.path.join(IMGDIR, name)
    if not os.path.exists(path):
        req = urllib.request.Request(url, headers={"User-Agent": "kino-z-diana-site"})
        with urllib.request.urlopen(req, timeout=30) as r, open(path, "wb") as out: out.write(r.read())
    return "img/tmdb/" + name
for e in events:
    for fld in ("poster", "backdrop"):
        try:
            if e.get(fld): e[fld] = localize(e[fld])
        except Exception as ex: print("nie pobrano", e["number"], fld, ex)

open(CACHE, "w", encoding="utf-8").write(json.dumps(cache, ensure_ascii=False))
open(EV, "w", encoding="utf-8").write(head + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=1) + ";\n")
print("\nNie znaleziono:", *missing, sep="\n  ") if missing else print("\nWszystko znalezione.")
