(function () {
  const S = window.SITE, ALL = window.EVENTS.slice().sort((a, b) => b.date.localeCompare(a.date));
  const today = new Date().toISOString().slice(0, 10);
  const isUpcoming = e => e.date >= today;
  const fmt = d => new Date(d + "T12:00:00").toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
  const fmtShort = d => new Date(d + "T12:00:00").toLocaleDateString("pl-PL", { day: "numeric", month: "long" });
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const paras = t => esc(t).split(/\n\s*\n/).map(p => `<p>${p}</p>`).join("");
  const href = e => `wydarzenie.html?id=${encodeURIComponent(e.id)}`;
  const $ = s => document.querySelector(s);

  /* ---------- shared header / footer ---------- */
  const page = document.body.dataset.page;
  const nav = [["index.html", "Start", "home"], ["wydarzenia.html", "Wydarzenia", "events"], ["filmy.html", "Filmy", "films"], ["index.html#dolacz", "Dołącz", ""]];
  $("#header").outerHTML = `<header class="site"><div class="wrap"><a class="brand" href="index.html">Kino z Dianą</a><nav>${
    nav.map(([u, t, k]) => `<a href="${u}" class="${k === page ? "on" : ""}">${t}</a>`).join("")}</nav></div></header>`;
  $("#footer").outerHTML = `<footer><div class="wrap">
    <div><b style="color:var(--fg)">${esc(S.name)}</b><br>Cykl spotkań filmowych z dyskusją.</div>
    <div style="max-width:420px;font-size:13px">Plakaty i kadry: <a href="https://www.themoviedb.org" target="_blank" rel="noopener">TMDB</a>. Serwis korzysta z API TMDB, ale nie jest przez TMDB wspierany ani certyfikowany.</div>
    <div>Spotykamy się w: <a href="${S.venue.url}" target="_blank" rel="noopener">${esc(S.venue.name)}, ${esc(S.venue.city)}</a><br>
      <a href="${S.links.facebookGroup}">Grupa na Facebooku</a> · <a href="${S.links.facebookPage}">Fanpage Diany</a> · <a href="${S.links.instagram}">Instagram</a></div>
  </div></footer>`;

  /* ---------- builders ---------- */
  const thumb = e => `<div class="thumb">${e.backdrop || e.image || e.poster ? `<img src="${esc(e.backdrop || e.image || e.poster)}" alt="" loading="lazy">` : ""}<span class="num">#${e.number}</span></div>`;
  const card = e => `<a class="card" href="${href(e)}">${thumb(e)}<div class="body">
    <div class="date">${fmt(e.date)}${isUpcoming(e) ? '<span class="tag">wkrótce</span>' : ""}</div>${e.badge ? `<div class="badge">${esc(e.badge)}</div>` : ""}
    <h3>${esc(e.film.title)}</h3><div class="dir">${esc(e.film.director)}${e.film.year ? ", " + e.film.year : ""}</div></div></a>`;
  const still = e => { const src = e.image || e.backdrop || e.poster;
    return `<div class="still">${src ? `<img src="${esc(src)}" alt="">` : ""}<div class="film-title">${esc(e.film.title)}<small>reż. ${esc(e.film.director)}</small></div></div>`; };

  /* ---------- HOME ---------- */
  if (page === "home") {
    const upcoming = ALL.filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));
    const featured = upcoming[0] || ALL[0];
    $("#hero").innerHTML = `<div class="wrap hero"><div class="hero-text">
      ${featured.badge ? `<div class="badge big">${esc(featured.badge)}</div>` : ""}<div class="eyebrow">${esc(featured.series || S.venue.name)} <span class="muted">| ${esc(S.venue.city)}</span></div>
      <h1 style="margin-top:22px">Kino z Dianą Dąbrowską <br>#${featured.number}</h1></div>
      ${still(featured)}
      <div class="hero-meta"><div class="meta"><span class="btn ghost static">${fmtShort(featured.date)}${featured.time ? " o " + featured.time : ""}</span>
      <a class="btn ghost" href="${href(featured)}">Szczegóły</a>
      ${isUpcoming(featured) ? `<a class="pill cta" href="${esc(featured.ticketUrl || S.venue.url)}" target="_blank" rel="noopener">Kup bilet <span aria-hidden="true">→</span></a>` : ""}</div>
      <div class="sub">${esc(featured.format || "Film + dyskusja")}</div></div></div>
      ${featured.description ? `<div class="banner">${esc(featured.description.split("\n")[0])}</div>` : featured.note ? `<div class="banner">${esc(featured.note)}</div>` : ""}`;

    $("#upcoming").innerHTML = upcoming.length ? upcoming.map(card).join("") : `<p class="muted">Kolejne spotkanie wkrótce — zapisz się na newsletter, żeby nie przegapić.</p>`;
    $("#past").innerHTML = ALL.filter(e => !isUpcoming(e)).slice(0, 8).map(card).join("");

    const f = $("#nl"); if (S.newsletterAction !== "#") f.action = S.newsletterAction;
    f.addEventListener("submit", ev => { if (f.action.endsWith("#")) { ev.preventDefault(); alert("Newsletter jeszcze nie jest podpięty — ustaw newsletterAction w data/site.js"); } });
    $("#social").innerHTML = [["Grupa na Facebooku", S.links.facebookGroup], ["Fanpage Diany", S.links.facebookPage], ["Instagram", S.links.instagram], ["Kanał WhatsApp", S.links.whatsapp]]
      .map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`).join("");
  }

  /* ---------- EVENTS CATALOG ---------- */
  if (page === "events") {
    let mode = "all", q = "";
    const draw = () => {
      const l = ALL.filter(e => (mode === "all" || (mode === "up" ? isUpcoming(e) : !isUpcoming(e))) &&
        (e.film.title + " " + e.film.director + " " + e.number + " " + (e.series || "") + " " + (e.note || "")).toLowerCase().includes(q));
      $("#list").innerHTML = l.length ? l.map(card).join("") : '<p class="muted">Brak wyników.</p>';
    };
    document.querySelectorAll(".filters button").forEach(b => b.onclick = () => {
      document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on")); b.classList.add("on"); mode = b.dataset.m; draw();
    });
    $("#q").oninput = e => { q = e.target.value.toLowerCase(); draw(); };
    draw();
  }

  /* ---------- FILMS CATALOG ---------- */
  if (page === "films") {
    const by = {};
    ALL.forEach(e => (by[e.film.title] = by[e.film.title] || []).push(e));
    const groups = Object.values(by);
    const pl = (a, b) => a.localeCompare(b, "pl");
    const surname = g => { const d = g[0].film.director.split(/,|&/)[0].trim().split(/\s+/); return d[d.length - 1]; };
    const sorters = {
      title: (a, b) => pl(a[0].film.title, b[0].film.title),
      dateNew: (a, b) => b[0].date.localeCompare(a[0].date),
      dateOld: (a, b) => a[a.length - 1].date.localeCompare(b[b.length - 1].date),
      director: (a, b) => pl(surname(a), surname(b)) || pl(a[0].film.title, b[0].film.title)
    };
    let q = "", sort = "title";
    const draw = () => {
      const films = groups.filter(l => (l[0].film.title + " " + l[0].film.director).toLowerCase().includes(q)).sort(sorters[sort]);
      $("#count").textContent = films.length + " filmów";
      $("#list").innerHTML = films.map(l => {
        const f = l[0].film, src = (l.find(e => e.poster) || {}).poster;
        return `<a class="fcard" href="${href(l[0])}">
          <div class="poster-box">${src ? `<img src="${esc(src)}" alt="Plakat: ${esc(f.title)}" loading="lazy">` : `<span>${esc(f.title)}</span>`}</div>
          <h3>${esc(f.title)}</h3><div class="dir">${esc(f.director)}</div>
          <div class="date">${l.map(e => "#" + e.number + " · " + fmt(e.date)).join("<br>")}</div></a>`;
      }).join("");
    };
    $("#q").oninput = e => { q = e.target.value.toLowerCase(); draw(); };
    $("#sort").onchange = e => { sort = e.target.value; draw(); };
    draw();
  }

  /* ---------- SINGLE EVENT ---------- */
  if (page === "event") {
    const id = new URLSearchParams(location.search).get("id");
    const e = ALL.find(x => x.id === id) || ALL[0], up = isUpcoming(e), f = e.film;
    document.title = `${f.title} — Kino z Dianą #${e.number}`;
    $("#event").innerHTML = `<div class="wrap ev-head"><div>
      ${e.badge ? `<div class="badge big">${esc(e.badge)}</div>` : ""}<div class="eyebrow">Spotkanie #${e.number}<span class="tag ${up ? "" : "past"}">${up ? "nadchodzące" : "archiwum"}</span></div>
      <h1 style="font-size:clamp(44px,7vw,88px);margin-top:18px">${esc(f.title)}</h1>
      <dl class="facts">
        <dt>Data</dt><dd>${fmt(e.date)}${e.time ? ", godz. " + e.time : ""}</dd>
        <dt>Miejsce</dt><dd><a href="${S.venue.url}" target="_blank" rel="noopener">${esc(e.venue || S.venue.name)}, ${esc(e.city || S.venue.city)}</a></dd>
        ${e.series ? `<dt>Cykl</dt><dd>${esc(e.series)}</dd>` : ""}<dt>Format</dt><dd>${esc(e.format)}</dd>${e.note ? `<dt>Dodatkowo</dt><dd>${esc(e.note)}</dd>` : ""}
        ${[["Film", [f.genre, f.original, f.country, f.year].filter(Boolean).join(" · ")], ["Reżyseria", f.director], ["Scenariusz", f.screenplay], ["Zdjęcia", f.cinematography],
           ["Muzyka", f.music], ["Obsada", f.cast], ["Czas trwania", f.runtime], ["Dystrybutor", f.distributor]]
           .filter(r => r[1]).map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join("")}</dl>
      ${up ? `<a class="btn" href="${esc(e.ticketUrl || S.venue.url)}" target="_blank" rel="noopener">Kup bilet w ${esc(S.venue.name)}</a>` : ""}
    </div>${still(e)}</div>
    ${e.description ? `<section><div class="wrap prose"><h2>O wydarzeniu</h2>${paras(e.description)}</div></section>` : ""}
    ${e.summary ? `<section><div class="wrap prose"><h2>Po spotkaniu</h2>${paras(e.summary)}</div></section>` : ""}
    ${e.gallery && e.gallery.length ? `<section><div class="wrap"><h2>Galeria</h2><div class="gallery">${e.gallery.map(g => `<img src="${esc(g)}" alt="" loading="lazy">`).join("")}</div></div></section>` : ""}`;
  }
})();
