"""Panel do dodawania i edycji wydarzeń (działa lokalnie na Twoim komputerze).

Uruchomienie: dwuklik na uruchom_panel.bat albo:  python tools/panel.py
Panel słucha tylko na 127.0.0.1 (niedostępny z sieci). Klucz TMDB: tools/KLUCZ_TMDB.txt.
Używa tylko biblioteki standardowej Pythona (opcjonalnie Pillow do zmniejszania własnych zdjęć).
"""
import base64, io, json, os, re, subprocess, sys, time, unicodedata, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.environ.get("KDD_ROOT") or os.path.dirname(HERE)
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8125
EV = os.path.join(ROOT, "data", "events.js")
TMDB_IMG = "https://image.tmdb.org/t/p/"
FIELDS = ("number", "date", "time", "format", "series", "badge", "note", "description", "ticketUrl", "summary")

COUNTRIES = {"PL": "Polska", "US": "USA", "GB": "Wielka Brytania", "FR": "Francja", "DE": "Niemcy", "IT": "Włochy", "ES": "Hiszpania",
             "JP": "Japonia", "KR": "Korea Południowa", "CN": "Chiny", "HK": "Hongkong", "RU": "Rosja", "SE": "Szwecja", "DK": "Dania",
             "NO": "Norwegia", "FI": "Finlandia", "NL": "Holandia", "BE": "Belgia", "CZ": "Czechy", "AT": "Austria", "CH": "Szwajcaria",
             "IE": "Irlandia", "CA": "Kanada", "AU": "Australia", "BR": "Brazylia", "MX": "Meksyk", "AR": "Argentyna", "IN": "Indie",
             "IR": "Iran", "TR": "Turcja", "GR": "Grecja", "HU": "Węgry", "UA": "Ukraina", "IL": "Izrael", "PT": "Portugalia",
             "RO": "Rumunia", "IS": "Islandia", "LT": "Litwa", "LV": "Łotwa", "EE": "Estonia", "GE": "Gruzja", "TW": "Tajwan", "TH": "Tajlandia"}


# ---------- klucz i TMDB ----------
def tmdb_key():
    k = os.environ.get("TMDB_API_KEY", "")
    f = os.path.join(HERE, "KLUCZ_TMDB.txt")
    if not k and os.path.exists(f):
        for line in open(f, encoding="utf-8-sig"):
            line = line.strip()
            if line and not line.startswith("#"):
                k = line
                break
    if not k or k.startswith("WKLEJ"):
        raise RuntimeError("Brak klucza TMDB. Otwórz tools/KLUCZ_TMDB.txt, wklej klucz i zapisz plik.")
    return k


def tmdb(path, **params):
    key, headers = tmdb_key(), {"User-Agent": "kdd-panel"}
    if len(key) > 40:
        headers["Authorization"] = "Bearer " + key
    else:
        params["api_key"] = key
    url = "https://api.themoviedb.org/3" + path + "?" + urllib.parse.urlencode(params)
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=20) as r:
                return json.load(r)
        except Exception:
            if attempt == 2:
                raise
            time.sleep(0.7)


def norm(s):
    s = unicodedata.normalize("NFKD", (s or "").lower().replace("ł", "l")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9 ]+", " ", s).split()


def slug(s):
    s = unicodedata.normalize("NFKD", (s or "").lower().replace("ł", "l")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:50]


def movie_full(mid):
    return tmdb(f"/movie/{mid}", language="pl-PL", append_to_response="credits,images", include_image_language="pl,en,null")


def directors(m):
    return [c["name"] for c in m.get("credits", {}).get("crew", []) if c.get("job") == "Director"]


def search(q, year, director):
    params = {"query": q, "language": "pl-PL"}
    if year:
        params["year"] = year
    res = tmdb("/search/movie", **params).get("results", [])
    if not res and year:
        res = tmdb("/search/movie", query=q, language="pl-PL").get("results", [])
    res = res[:8]
    with ThreadPoolExecutor(6) as ex:
        full = list(ex.map(lambda r: movie_full(r["id"]), res))
    out = []
    for m in full:
        d = directors(m)
        match = bool(director) and any(set(norm(director)) & set(norm(x)) for x in d)
        out.append({"id": m["id"], "title": m.get("title"), "original": m.get("original_title"), "year": (m.get("release_date") or "")[:4],
                    "director": ", ".join(d), "poster": m.get("poster_path"), "match": match})
    out.sort(key=lambda x: not x["match"])
    return out


def movie_details(mid):
    m = movie_full(mid)
    crew = m.get("credits", {}).get("crew", [])
    names = lambda jobs, n=3: ", ".join(dict.fromkeys(c["name"] for c in crew if c.get("job") in jobs))[:200] if n else ""
    uniq = lambda jobs, n: ", ".join(list(dict.fromkeys(c["name"] for c in crew if c.get("job") in jobs))[:n])
    year = (m.get("release_date") or "")[:4]
    film = {
        "title": m.get("title") or m.get("original_title"),
        "original": m.get("original_title") if m.get("original_title") != m.get("title") else "",
        "director": ", ".join(directors(m)),
        "year": int(year) if year.isdigit() else "",
        "country": ", ".join(COUNTRIES.get(c["iso_3166_1"], c.get("name", "")) for c in m.get("production_countries", [])[:2]),
        "runtime": f"{m['runtime']} min" if m.get("runtime") else "",
        "genre": ", ".join(g["name"].lower() for g in m.get("genres", [])[:2]),
        "screenplay": uniq({"Screenplay", "Writer", "Story"}, 3),
        "cinematography": uniq({"Director of Photography"}, 2),
        "music": uniq({"Original Music Composer", "Music"}, 2),
        "cast": ", ".join(c["name"] for c in m.get("credits", {}).get("cast", [])[:5]),
        "distributor": "",
    }
    imgs = m.get("images", {})
    pick = lambda arr, n: [{"path": i["file_path"], "w": i["width"], "h": i["height"]} for i in sorted(arr, key=lambda i: -(i.get("vote_average") or 0))[:n]]
    return {"film": film, "overview": m.get("overview", ""), "backdrops": pick(imgs.get("backdrops", []), 18), "posters": pick(imgs.get("posters", []), 8),
            "poster_default": m.get("poster_path"), "backdrop_default": m.get("backdrop_path")}


# ---------- dane wydarzeń ----------
def load():
    text = open(EV, encoding="utf-8").read()
    head, body = text.split("window.EVENTS = ", 1)
    return head, json.loads(body.rstrip().rstrip(";"))


def write(head, events):
    events.sort(key=lambda e: -int(e["number"]))
    tmp = EV + ".tmp"
    open(tmp, "w", encoding="utf-8").write(head + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=1) + ";\n")
    os.replace(tmp, EV)


def summary(e):
    return {"id": e["id"], "number": e["number"], "title": e["film"]["title"], "director": e["film"].get("director", ""), "date": e["date"], "time": e.get("time", ""),
            "image": e.get("image") or e.get("backdrop") or e.get("poster") or ""}


def download(path, size):
    if not re.fullmatch(r"/[A-Za-z0-9_\-]+\.(jpg|png)", path or ""):
        raise ValueError("Nieprawidłowa ścieżka obrazu TMDB")
    folder = os.path.join(ROOT, "img", "tmdb")
    os.makedirs(folder, exist_ok=True)
    dest = os.path.join(folder, path[1:])
    req = urllib.request.Request(TMDB_IMG + size + path, headers={"User-Agent": "kdd-panel"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    open(dest, "wb").write(data)
    return "img/tmdb/" + path[1:]


def save_upload(name, b64, number):
    data = base64.b64decode(b64.split(",")[-1])
    stamp = time.strftime("%Y%m%d%H%M%S")
    try:
        from PIL import Image
        im = Image.open(io.BytesIO(data)).convert("RGB")
        if im.width > 2400:
            im = im.resize((2400, round(im.height * 2400 / im.width)))
        rel = f"img/{number}-{stamp}.jpg"
        im.save(os.path.join(ROOT, rel), "JPEG", quality=86, optimize=True)
    except ImportError:
        ext = os.path.splitext(name)[1].lower()
        if ext not in (".jpg", ".jpeg", ".png", ".webp"):
            raise ValueError("Dozwolone formaty: jpg, png, webp")
        rel = f"img/{number}-{stamp}{ext}"
        open(os.path.join(ROOT, rel), "wb").write(data)
    return rel


def do_save(p):
    head, events = load()
    ev, is_new = p["event"], bool(p.get("isNew"))
    film = {k: v for k, v in (ev.get("film") or {}).items() if v not in ("", None)}
    if not film.get("title"):
        raise ValueError("Podaj tytuł filmu.")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", ev.get("date", "")):
        raise ValueError("Podaj datę wydarzenia.")
    if ev.get("time") and not re.fullmatch(r"\d{1,2}:\d{2}", ev["time"]):
        raise ValueError("Godzina ma mieć postać 19:00.")
    if film.get("year") not in (None, ""):
        film["year"] = int(film["year"])
    number = int(ev["number"])
    if is_new:
        if any(e["number"] == number for e in events):
            raise ValueError(f"Wydarzenie numer {number} już istnieje.")
        cur = {"id": f"{number}-{slug(film['title'])}", "number": number, "format": "Film + dyskusja", "description": "", "ticketUrl": "",
               "image": "", "summary": "", "gallery": []}
        events.append(cur)
    else:
        cur = next((e for e in events if e["id"] == ev["id"]), None)
        if not cur:
            raise ValueError("Nie znaleziono wydarzenia do edycji.")
    cur["film"] = film
    cur["number"] = number
    for k in FIELDS:
        if k in ev:
            v = ev[k]
            if k == "number":
                continue
            if v in ("", None):
                cur.pop(k, None) if k in ("series", "badge", "note", "time") else cur.__setitem__(k, "")
            else:
                cur[k] = v
    tm, hero = p.get("tmdb") or {}, p.get("hero", "keep")
    if tm.get("poster"):
        cur["poster"] = download(tm["poster"], "w780")
    if hero == "tmdb" and tm.get("backdrop"):
        cur["backdrop"] = download(tm["backdrop"], "w1280")
        cur["image"] = ""
    elif hero == "upload" and p.get("upload"):
        cur["image"] = save_upload(p["upload"]["name"], p["upload"]["data"], number)
    write(head, events)
    return {"id": cur["id"], "summary": summary(cur)}


# ---------- git ----------
def git(*args):
    r = subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, encoding="utf-8", env={**os.environ, "GIT_TERMINAL_PROMPT": "0"})
    return r.returncode, (r.stdout + r.stderr).strip()


def bump_versions():
    stamp = time.strftime("%Y%m%d%H%M%S")
    for f in os.listdir(ROOT):
        if f.endswith(".html"):
            path = os.path.join(ROOT, f)
            t = open(path, encoding="utf-8").read()
            n = re.sub(r"\?v=\w+", "?v=" + stamp, t)
            if n != t:
                open(path, "w", encoding="utf-8").write(n)


def do_publish(message):
    code, status = git("status", "--short")
    if not status:
        return {"ok": True, "text": "Nie ma nic nowego do opublikowania."}
    bump_versions()
    git("add", "-A")
    code, out = git("commit", "-m", message or "Aktualizacja wydarzeń z panelu")
    if code:
        return {"ok": False, "text": "Zapis w git nie powiódł się:\n" + out}
    code, out = git("push", "origin", "HEAD")
    if code:
        return {"ok": False, "text": "Wysyłanie na GitHuba nie powiodło się (zmiany są zapisane lokalnie):\n" + out}
    return {"ok": True, "text": "Wysłano na GitHuba. Strona odświeży się w ciągu około minuty."}


# ---------- serwer ----------
STATIC_OK = re.compile(r"^/(img/|fonts/|fonts\.css$)")


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def _host_ok(self):
        return self.headers.get("Host", "") in (f"127.0.0.1:{PORT}", f"localhost:{PORT}")

    def _send(self, code, body, ctype="application/json; charset=utf-8"):
        if isinstance(body, (dict, list)):
            body = json.dumps(body, ensure_ascii=False).encode("utf-8")
        elif isinstance(body, str):
            body = body.encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if not self._host_ok():
            return self._send(403, {"error": "forbidden"})
        u = urllib.parse.urlparse(self.path)
        q = {k: v[0] for k, v in urllib.parse.parse_qs(u.query).items()}
        try:
            if u.path == "/":
                return self._send(200, open(os.path.join(HERE, "panel", "index.html"), "rb").read(), "text/html; charset=utf-8")
            if u.path == "/api/events":
                _, ev = load()
                return self._send(200, {"events": [summary(e) for e in ev], "nextNumber": max(e["number"] for e in ev) + 1})
            if u.path == "/api/event":
                _, ev = load()
                return self._send(200, next(e for e in ev if e["id"] == q["id"]))
            if u.path == "/api/search":
                return self._send(200, {"results": search(q.get("q", ""), q.get("year", ""), q.get("director", ""))})
            if u.path == "/api/movie":
                return self._send(200, movie_details(int(q["id"])))
            if u.path == "/api/status":
                _, st = git("status", "--short")
                return self._send(200, {"changes": len([l for l in st.splitlines() if l.strip()])})
            if STATIC_OK.match(u.path):
                path = os.path.normpath(os.path.join(ROOT, u.path.lstrip("/")))
                if path.startswith(ROOT) and os.path.isfile(path):
                    ctype = {".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".css": "text/css", ".woff2": "font/woff2"}.get(os.path.splitext(path)[1], "application/octet-stream")
                    return self._send(200, open(path, "rb").read(), ctype)
            return self._send(404, {"error": "nie znaleziono"})
        except Exception as e:
            return self._send(500, {"error": str(e)})

    def do_POST(self):
        if not self._host_ok() or self.headers.get("X-Panel") != "1":
            return self._send(403, {"error": "forbidden"})
        try:
            n = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(n) or b"{}")
            if self.path == "/api/save":
                return self._send(200, do_save(body))
            if self.path == "/api/publish":
                return self._send(200, do_publish(body.get("message")))
            return self._send(404, {"error": "nie znaleziono"})
        except (ValueError, KeyError) as e:
            return self._send(400, {"error": str(e)})
        except Exception as e:
            return self._send(500, {"error": str(e)})


if __name__ == "__main__":
    print(f"Panel wydarzeń: http://127.0.0.1:{PORT}  (zamknij to okno, żeby zatrzymać)")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
