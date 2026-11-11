"""Lokalny podgląd strony. Wyłącza pamięć podręczną przeglądarki, żeby zawsze było widać świeże zmiany."""
import http.server, os, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8123

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

http.server.ThreadingHTTPServer(("", PORT), Handler).serve_forever()
