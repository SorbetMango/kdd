/* Skrypt strony — dane z data/events.js i data/site.js */
(function () {
  const S = window.SITE;
  const ALL = window.EVENTS.slice().sort((a, b) => b.date.localeCompare(a.date) || b.number - a.number);
  const now = new Date();
  // Początek wydarzenia (czas lokalny odwiedzającego). Bez godziny: wydarzenie trwa do końca dnia.
  const startOf = e => { const m = /^(\d{1,2}):(\d{2})$/.exec(e.time || ""); return new Date(e.date + "T" + (m ? m[1].padStart(2, "0") + ":" + m[2] : "23:59") + ":00"); };
  const isUpcoming = e => startOf(e) > new Date();      // po godzinie rozpoczęcia wydarzenie ustępuje następnemu
  const D = d => new Date(d + "T12:00:00");
  const fmt = d => D(d).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
  const fmtShort = d => D(d).toLocaleDateString("pl-PL", { day: "numeric", month: "long" });
  const mon = d => D(d).toLocaleDateString("pl-PL", { month: "short" }).replace(".", "");
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const paras = t => esc(t).split(/\n\s*\n/).map(p => `<p>${p}</p>`).join("");
  const href = e => `wydarzenie.html?id=${encodeURIComponent(e.id)}`;
  const img = p => p || "";
  const wide = e => img(e.image || e.backdrop || e.poster);
  const $ = s => document.querySelector(s);
  const page = document.body.dataset.page;

  /* ---------- menu i stopka ---------- */
  const nav = [["index.html", "Start", "home"], ["wydarzenia.html", "Wydarzenia", "events"], ["filmy.html", "Filmy", "films"], ["index.html#dolacz", "Dołącz", ""]];
  $("#header").outerHTML = `<header class="top"><a class="brand" href="index.html"><img src="img/logo.png" alt="" width="177" height="240">Kino z Dianą</a><nav>${
    nav.map(([u, t, k]) => `<a href="${u}" class="${k === page ? "on" : ""}">${t}</a>`).join("")}</nav></header>`;
  const top = $(".top"), onScroll = () => top.classList.toggle("solid", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const social = [["Grupa na Facebooku", S.links.facebookGroup], ["Fanpage Diany", S.links.facebookPage], ["Instagram", S.links.instagram], ["Kanał WhatsApp", S.links.whatsapp]]
    .filter(l => l[1] && l[1] !== "#");
  $("#footer").outerHTML = `<footer class="foot"><div class="wordmark" aria-hidden="true">${esc(S.name)}</div><div class="foot-cols">
    <div><b>${esc(S.name)}</b><br>Cykl spotkań filmowych z dyskusją.<br>Spotykamy się w: <a href="${S.venue.url}" target="_blank" rel="noopener">${esc(S.venue.name)}, ${esc(S.venue.city)}</a></div>
    <div>${social.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`).join(" · ")}</div>
    <div>Plakaty i kadry: <a href="https://www.themoviedb.org" target="_blank" rel="noopener">TMDB</a>. Serwis korzysta z API TMDB, ale nie jest przez TMDB wspierany ani certyfikowany.</div>
  </div></footer>`;

  const ticket = (e, label) => `<a class="btn cta" href="${esc(e.ticketUrl || S.venue.url)}" target="_blank" rel="noopener">${label} <span aria-hidden="true">→</span></a>`;

  /* ---------- START ---------- */
  if (page === "home") {
    const upcoming = ALL.filter(isUpcoming).sort((a, b) => startOf(a) - startOf(b));
    const past = ALL.filter(e => !isUpcoming(e));
    const f = upcoming[0] || ALL[0], src = wide(f);

    $("#hero").innerHTML = `<section class="hero"><div class="hero-text">
        ${f.badge ? `<div class="badge">${esc(f.badge)}</div><br>` : ""}
        <div class="eyebrow">${esc(f.series || S.venue.name)} <span class="muted">| ${esc(S.venue.city)}</span></div>
        <h1>Kino z Dianą<br>Dąbrowską <span class="no">#${f.number}</span></h1></div>
      <figure class="hero-still">${src ? `<img src="${esc(src)}" alt="">` : ""}<figcaption>${esc(f.film.title)}<small>reż. ${esc(f.film.director)}</small></figcaption></figure>
      <div class="hero-meta"><div class="meta"><span class="btn static">${fmtShort(f.date)}${f.time ? " o " + f.time : ""}</span>
        <a class="btn" href="${href(f)}">Szczegóły</a>${isUpcoming(f) ? ticket(f, "Kup bilet") : ""}</div>
        <div class="sub">${esc(f.format || "Film + dyskusja")}</div></div></section>
      ${f.description ? `<div class="banner">${esc(f.description.split("\n")[0])}</div>` : f.note ? `<div class="banner">${esc(f.note)}</div>` : ""}`;

    // liczby liczone z danych
    const films = new Set(ALL.map(e => e.film.title)).size, first = ALL[ALL.length - 1];
    $("#stats").innerHTML = `<div><b>${Math.max(...ALL.map(e => e.number))}</b><span>spotkań</span></div>
      <div><b>${films}</b><span>filmów</span></div><div><b>${first.date.slice(0, 4)}</b><span>działamy od</span></div>`;

    $("#upcoming").innerHTML = upcoming.length ? upcoming.map(e => `<a class="up" href="${href(e)}">${wide(e) ? `<img src="${esc(wide(e))}" alt="" loading="lazy">` : ""}
        <div class="up-date"><b>${D(e.date).getDate()}</b><span>${mon(e.date)}</span></div>
        <div class="up-body"><span class="num">#${e.number}</span>${e.badge ? `<span class="badge">${esc(e.badge)}</span>` : ""}
          <h3>${esc(e.film.title)}</h3><div class="dir">reż. ${esc(e.film.director)}${e.time ? " · godz. " + e.time : ""}</div></div></a>`).join("")
      : `<p class="muted">Kolejne spotkanie wkrótce — zapisz się na newsletter, żeby nie przegapić.</p>`;

    const titles = past.slice(0, 16).map(e => esc(e.film.title)).join("<i>✦</i>") + "<i>✦</i>";
    $("#ticker").innerHTML = `<div class="track">${titles}${titles}</div>`;

    $("#past").innerHTML = past.slice(0, 16).map(e => `<a class="tile" href="${href(e)}">${wide(e) ? `<img src="${esc(wide(e))}" alt="" loading="lazy">` : ""}
      <span class="t-num">#${e.number}</span><div class="t-body"><div class="t-date">${fmt(e.date)}</div><h3>${esc(e.film.title)}</h3><div class="dir">${esc(e.film.director)}</div></div></a>`).join("");

    const form = $("#nl"); if (S.newsletterAction !== "#") form.action = S.newsletterAction;
    form.addEventListener("submit", ev => { if (form.getAttribute("action") === "#") { ev.preventDefault(); alert("Newsletter jeszcze nie jest podpięty — ustaw newsletterAction w data/site.js"); } });
    $("#links").innerHTML = (social.length ? social : [["Kino Charlie", S.venue.url]]).map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}<span aria-hidden="true">→</span></a>`).join("");
  }

  /* ---------- WYDARZENIA: lista pogrupowana latami ---------- */
  if (page === "events") {
    const years = [...new Set(ALL.map(e => e.date.slice(0, 4)))];
    let mode = "all", year = "", q = "";
    $("#count").textContent = ALL.length + " spotkań · " + years[years.length - 1] + "–" + years[0];
    $("#chips").innerHTML = [["all", "Wszystkie"], ["up", "Nadchodzące"], ["past", "Archiwum"]].map(([m, t]) => `<button class="chip${m === "all" ? " on" : ""}" data-m="${m}">${t}</button>`).join("")
      + `<span class="sep"></span>` + years.map(y => `<button class="chip" data-y="${y}">${y}</button>`).join("");
    const row = e => `<a class="row${isUpcoming(e) ? " upc" : ""}" href="${href(e)}"><span class="r-num">#${e.number}</span><span class="r-date">${D(e.date).getDate()} ${mon(e.date)}</span>
      <span class="r-main"><b>${esc(e.film.title)}</b><i>${esc(e.film.director)}${e.note ? " · " + esc(e.note) : ""}</i></span>
      <span class="r-tags">${isUpcoming(e) ? '<span class="tag">wkrótce</span>' : ""}${e.badge ? `<span class="tag">${esc(e.badge)}</span>` : ""}${e.series ? `<span class="tag past">${esc(e.series)}</span>` : ""}</span>
      <span class="r-thumb">${wide(e) ? `<img src="${esc(wide(e))}" alt="" loading="lazy">` : ""}</span></a>`;
    const draw = () => {
      const l = ALL.filter(e => (mode === "all" || (mode === "up" ? isUpcoming(e) : !isUpcoming(e))) && (!year || e.date.startsWith(year)) &&
        (e.film.title + " " + e.film.director + " #" + e.number + " " + (e.series || "") + " " + (e.note || "")).toLowerCase().includes(q));
      const by = {}; l.forEach(e => (by[e.date.slice(0, 4)] = by[e.date.slice(0, 4)] || []).push(e));
      $("#list").innerHTML = l.length ? Object.keys(by).sort().reverse().map(y => `<div class="year"><h2>${y}<small>${by[y].length} spotkań</small></h2><div>${by[y].map(row).join("")}</div></div>`).join("")
        : '<p class="empty">Brak wyników.</p>';
    };
    $("#chips").onclick = ev => {
      const b = ev.target.closest(".chip"); if (!b) return;
      if (b.dataset.m) { mode = b.dataset.m; document.querySelectorAll("[data-m]").forEach(x => x.classList.toggle("on", x === b)); }
      else { year = year === b.dataset.y ? "" : b.dataset.y; document.querySelectorAll("[data-y]").forEach(x => x.classList.toggle("on", x.dataset.y === year)); }
      draw();
    };
    $("#q").oninput = ev => { q = ev.target.value.toLowerCase(); draw(); };
    draw();
  }

  /* ---------- FILMY ---------- */
  if (page === "films") {
    const by = {}; ALL.forEach(e => (by[e.film.title] = by[e.film.title] || []).push(e));
    const groups = Object.values(by), pl = (a, b) => a.localeCompare(b, "pl");
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
        const f = l[0].film, src = img((l.find(e => e.poster) || {}).poster);
        return `<a class="fcard" href="${href(l[0])}"><div class="poster-box">${src ? `<img src="${esc(src)}" alt="Plakat: ${esc(f.title)}" loading="lazy">` : `<span>${esc(f.title)}</span>`}</div>
          <h3>${esc(f.title)}</h3><div class="dir">${esc(f.director)}</div><div class="date">${l.map(e => "#" + e.number + " · " + fmt(e.date)).join("<br>")}</div></a>`;
      }).join("");
    };
    $("#q").oninput = ev => { q = ev.target.value.toLowerCase(); draw(); };
    $("#sort").onchange = ev => { sort = ev.target.value; draw(); };
    draw();
  }

  /* ---------- STRONA WYDARZENIA ---------- */
  if (page === "event") {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, ALL.findIndex(x => x.id === id)), e = ALL[i], up = isUpcoming(e), f = e.film, src = wide(e);
    const newer = ALL[i - 1], older = ALL[i + 1];
    document.title = `${f.title} — Kino z Dianą #${e.number}`;
    const setMeta = (sel, v) => { const m = document.querySelector(sel); if (m) m.setAttribute(sel.includes("canonical") ? "href" : "content", v); };
    const desc = (e.description || `${fmt(e.date)} · ${S.venue.name}, ${S.venue.city}. Film + dyskusja.`).split("\n")[0];
    const url = new URL(location.href); url.search = "?id=" + encodeURIComponent(e.id);
    setMeta('meta[name="description"]', desc); setMeta('meta[property="og:title"]', document.title); setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:url"]', url.href); setMeta('link[rel="canonical"]', url.href);
    if (e.image || e.backdrop || e.poster) setMeta('meta[property="og:image"]', new URL(e.image || e.backdrop || e.poster, location.href).href);
    const facts = [["Data", fmt(e.date) + (e.time ? ", godz. " + e.time : "")],
      ["Miejsce", `<a href="${S.venue.url}" target="_blank" rel="noopener">${esc(e.venue || S.venue.name)}, ${esc(e.city || S.venue.city)}</a>`, 1],
      ["Cykl", e.series], ["Format", e.format], ["Dodatkowo", e.note],
      ["Film", [f.genre, f.original, f.country, f.year].filter(Boolean).join(" · ")], ["Reżyseria", f.director], ["Scenariusz", f.screenplay],
      ["Zdjęcia", f.cinematography], ["Muzyka", f.music], ["Obsada", f.cast], ["Czas trwania", f.runtime], ["Dystrybutor", f.distributor]]
      .filter(r => r[1]).map(r => `<div><dt>${r[0]}</dt><dd>${r[2] ? r[1] : esc(r[1])}</dd></div>`).join("");
    $("#event").innerHTML = `<section class="hero ev${up ? " live" : ""}"><div class="hero-text">
        ${e.badge ? `<div class="badge">${esc(e.badge)}</div><br>` : ""}
        <div class="eyebrow">Spotkanie #${e.number} <span class="tag ${up ? "" : "past"}" style="margin-left:.6rem">${up ? "nadchodzące" : "archiwum"}</span></div>
        <h1>${esc(f.title)}</h1><div class="lede">reż. ${esc(f.director)}</div></div>
      <figure class="hero-still">${src ? `<img src="${esc(src)}" alt="">` : ""}</figure>
      <div class="hero-meta"><div class="meta"><span class="btn static">${fmt(e.date)}${e.time ? " · " + e.time : ""}</span>${up ? ticket(e, "Kup bilet") : ""}</div></div></section>
      ${e.description ? `<section class="prose"><h2>O wydarzeniu</h2>${paras(e.description)}</section>` : ""}
      <section class="ev-body${e.poster ? "" : " noposter"}"><dl class="facts">${facts}</dl>${e.poster ? `<img class="ev-poster" src="${esc(img(e.poster))}" alt="Plakat: ${esc(f.title)}">` : ""}</section>
      ${e.summary ? `<section class="prose"><h2>Po spotkaniu</h2>${paras(e.summary)}</section>` : ""}
      ${e.gallery && e.gallery.length ? `<section><h2 style="margin-bottom:1.5rem">Galeria</h2><div class="gallery">${e.gallery.map(g => `<img src="${esc(img(g))}" alt="" loading="lazy">`).join("")}</div></section>` : ""}
      <nav class="pn">${older ? `<a href="${href(older)}"><small>← Poprzednie · #${older.number}</small><b>${esc(older.film.title)}</b></a>` : "<span></span>"}
        ${newer ? `<a href="${href(newer)}"><small>Następne · #${newer.number} →</small><b>${esc(newer.film.title)}</b></a>` : "<span></span>"}</nav>`;
  }
})();
