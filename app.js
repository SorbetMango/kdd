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
  const href = e => `wydarzenie/${encodeURIComponent(e.id)}.html`;
  const img = p => p || "";
  const wide = e => img(e.image || e.backdrop || e.poster);
  // kadrowanie zdjęcia w sekcji głównej (ustawiane w panelu): osobno komputer (d) i telefon (m), w procentach
  const focus = e => { const f = e.focus || {}, s = [];
    for (const k of ["d", "m"]) if (f[k]) { s.push(`--f${k}:${+f[k][0]}% ${+f[k][1]}%`); if (f[k][2] > 100) s.push(`--fz${k}:${f[k][2] / 100}`); }
    return s.length ? ` style="${s.join(";")}"` : ""; };
  // wymiary zdjęć i miniatury z data/images.js (tworzy je tools/build.py); bez tego pliku strona używa pełnych zdjęć
  const IMGS = window.IMGS || {};
  // <img> z wymiarami; small = miniatura (kafelki, listy, katalog)
  const pic = (p, { small = false, alt = "", lazy = true, cls = "" } = {}) => {
    if (!p) return "";
    const m = IMGS[p] || [], src = small && m[2] ? m[2] : p, w = small && m[2] ? m[3] : m[0], h = small && m[2] ? m[4] : m[1];
    return `<img src="${esc(src)}" alt="${esc(alt)}"${w ? ` width="${w}" height="${h}"` : ""}${lazy ? ' loading="lazy"' : ""}${cls ? ` class="${cls}"` : ""}>`;
  };
  const $ = s => document.querySelector(s);
  // własny kolor akcentu wydarzenia (pola accent / accent2 w danych, ustawiane w panelu)
  const HEX = /^#[0-9a-f]{6}$/i;
  const accentStyle = e => ["accent", "accent2"].filter(k => HEX.test(e[k] || "")).map(k => `--${k}:${e[k]}`).join(";");
  const applyAccent = e => ["accent", "accent2"].forEach(k => HEX.test(e[k] || "") ? document.documentElement.style.setProperty("--" + k, e[k]) : document.documentElement.style.removeProperty("--" + k));
  const page = document.body.dataset.page;

  /* ---------- menu i stopka ---------- */
  const nav = [["index.html", "Start", "home", "nav-start"], ["wydarzenia.html", "Wydarzenia", "events"], ["filmy.html", "Filmy", "films"], ["o-klubie.html", "O klubie", "about"], ["index.html#dolacz", "Dołącz", "", "nav-join"]];
  const skipTo = location.pathname + location.search + "#tresc";   // pełna ścieżka, bo strony wydarzeń mają <base href="../">
  $("#header").outerHTML = `<a class="skip" href="${esc(skipTo)}">Przejdź do treści</a><header class="top"><a class="brand" href="index.html"><img src="img/logo.png" alt="" width="177" height="240">Kino z Dianą Dąbrowską</a><nav>${
    nav.map(([u, t, k, c]) => `<a href="${u}" class="${[k === page ? "on" : "", c || ""].join(" ").trim()}">${t}</a>`).join("")}</nav></header>`;
  const main = $("#tresc"); if (main) main.tabIndex = -1;   // link „przejdź do treści” przenosi tu fokus klawiatury
  const top = $(".top"), onScroll = () => top.classList.toggle("solid", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const social = [["Grupa na Facebooku", S.links.facebookGroup], ["Fanpage Diany", S.links.facebookPage], ["Instagram", S.links.instagram], ["Kanał WhatsApp", S.links.whatsapp]]
    .filter(l => l[1] && l[1] !== "#");
  $("#footer").outerHTML = `<img class="kdz" src="img/kedziorek.webp" alt="" aria-hidden="true" width="464" height="520"><footer class="foot"><div class="wordmark" aria-hidden="true">${esc(S.name)}</div><div class="foot-cols">
    <div><b>${esc(S.name)}</b><br>Cykl spotkań filmowych z dyskusją.<br>Spotykamy się w: <a href="${S.venue.url}" target="_blank" rel="noopener">${esc(S.venue.name)}, ${esc(S.venue.city)}</a></div>
    <div>${social.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`).join(" · ")}</div>
    <div>Plakaty i kadry: <a href="https://www.themoviedb.org" target="_blank" rel="noopener">TMDB</a>. Serwis korzysta z API TMDB, ale nie jest przez TMDB wspierany ani certyfikowany.</div>
  </div></footer>`;
  // strona główna: stopka stoi nad sekcją „Dołącz do nas”, która zamyka stronę
  { const join = document.getElementById("dolacz"), foot = document.querySelector("footer.foot"); if (join && foot) foot.after(join); }

  const ticket = (e, label) => `<a class="btn cta" href="${esc(e.ticketUrl || S.venue.url)}" target="_blank" rel="noopener">${label} <span aria-hidden="true">→</span></a>`;

  /* ---------- liczby: spotkań, filmów, od kiedy (strona główna i „O klubie”) ---------- */
  function renderStats() {
    // liczby liczone z danych
    const films = new Set(ALL.map(e => e.film.title)).size, first = ALL[ALL.length - 1];
    $("#stats").innerHTML = `<div><b data-count="${Math.max(...ALL.map(e => e.number))}">${Math.max(...ALL.map(e => e.number))}</b><span>spotkań</span></div>
      <div><b data-count="${films}">${films}</b><span>filmów</span></div><div><b>${first.date.slice(0, 4)}</b><span>działamy od</span></div>`;
    // licznik: „spotkań” i „filmów” naliczają się od zera, gdy liczby pojawią się na ekranie (bez animacji przy ograniczonych animacjach)
    const counters = document.querySelectorAll("#stats [data-count]");
    if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach(el => { el.textContent = "0"; });
      const run = el => {
        const to = +el.dataset.count, t0 = performance.now(), dur = 7100;   // czas liczenia w ms (7,1 s = 10 s skrócone o 29%)
        const tick = now => { const k = Math.min(1, (now - t0) / dur); el.textContent = k < 1 ? Math.round(to * (1 - Math.pow(1 - k, 2))) : to; if (k < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      };
      const io = new IntersectionObserver(list => list.forEach(en => { if (en.isIntersecting) { io.unobserve(en.target); run(en.target); } }), { threshold: 0.6 });
      counters.forEach(el => io.observe(el));
    }
  }

  /* ---------- START ---------- */
  if (page === "home") {
    const upcoming = ALL.filter(isUpcoming).sort((a, b) => startOf(a) - startOf(b));
    const past = ALL.filter(e => !isUpcoming(e));
    // sekcja główna: wszystkie nadchodzące wydarzenia obok siebie, przesuwane w bok (strzałki, palec, gładzik)
    const slides = upcoming.length ? upcoming : [ALL[0]];
    const bannerText = e => e.description ? e.description.split("\n")[0] : e.note || "";
    $("#hero").innerHTML = `<div class="hero-wrap"><div class="hero-rail">${slides.map((f, i) => `<section class="hero" style="${accentStyle(f)}"><div class="hero-text">
        ${f.badge ? `<div class="badge">${esc(f.badge)}</div><br>` : ""}
        <div class="eyebrow">${esc(f.series || S.venue.name)} <span class="muted">| ${esc(S.venue.city)}</span></div>
        <h1>Kino z Dianą<br>Dąbrowską <span class="no">#${f.number}</span></h1></div>
      <figure class="hero-still"${focus(f)}><div class="hs-img">${pic(wide(f), { lazy: i > 0 })}</div><figcaption>${esc(f.film.title)}<small>reż. ${esc(f.film.director)}</small></figcaption></figure>
      <div class="hero-meta"><div class="meta"><a class="btn" href="${href(f)}">Szczegóły</a>
        <span class="btn static">${fmtShort(f.date)}${f.time ? " o " + f.time : ""}</span>${isUpcoming(f) ? ticket(f, "Kup bilet") : ""}</div></div></section>`).join("")}</div>
      ${slides.length > 1 ? `<button class="hero-nav prev" type="button" aria-label="Poprzednie wydarzenie" hidden><span aria-hidden="true">←</span></button>
      <button class="hero-nav next" type="button" aria-label="Następne wydarzenie"><span aria-hidden="true">→</span></button>
      <div class="hero-dots" aria-hidden="true">${slides.map(() => "<i></i>").join("")}</div>` : ""}</div>
      <div class="banner" hidden></div>`;
    {
      const rail = $(".hero-rail"), ban = $("#hero .banner");
      let cur = -1;
      const setActive = i => {
        i = Math.max(0, Math.min(slides.length - 1, i));
        if (i === cur) return;
        cur = i; applyAccent(slides[i]);
        const t = bannerText(slides[i]); ban.textContent = t; ban.hidden = !t; fitBanner();
        if (slides.length > 1) {
          $(".hero-nav.prev").hidden = i === 0; $(".hero-nav.next").hidden = i === slides.length - 1;
          document.querySelectorAll(".hero-dots i").forEach((d, k) => d.classList.toggle("on", k === i));
        }
      };
      // żółty pasek ma być widoczny bez przewijania: sekcja główna jest niższa o jego wysokość
      function fitBanner() { $("#hero").style.setProperty("--ban", ban.hidden ? "0px" : ban.offsetHeight + "px"); }
      addEventListener("resize", fitBanner);
      setActive(0);
      if (slides.length > 1) {
        rail.addEventListener("scroll", () => setActive(Math.round(rail.scrollLeft / rail.clientWidth)), { passive: true });
        const go = d => rail.scrollTo({ left: (cur + d) * rail.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        $(".hero-nav.prev").onclick = () => go(-1); $(".hero-nav.next").onclick = () => go(1);
      }
    }

    renderStats();

    $("#upcoming").innerHTML = upcoming.length ? upcoming.map(e => `<a class="up" href="${href(e)}">${pic(wide(e))}
        <div class="up-date"><b>${D(e.date).getDate()}</b><span>${mon(e.date)}</span></div>
        <div class="up-body"><span class="num">#${e.number}</span>${e.badge ? `<span class="badge">${esc(e.badge)}</span>` : ""}
          <h3>${esc(e.film.title)}</h3><div class="dir">reż. ${esc(e.film.director)}${e.time ? " · godz. " + e.time : ""}</div></div></a>`).join("")
      : `<p class="muted">Kolejne spotkanie wkrótce — zapisz się na newsletter, żeby nie przegapić.</p>`;

    const dl = $("#diana-links");
    // przyciski pod kartą Diany: ikona + krótka nazwa; „Grupa” pojawi się, gdy w data/site.js będzie link do grupy
    const ICON = {
      fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22z"/></svg>',
      ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>',
      grp: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2z"/><circle cx="17" cy="9" r="2.7"/><path d="M16.4 13.9c3 .1 5.1 2.4 5.1 5.4V20h-4.2c0-2.3-.4-4.3-.9-6.1z"/></g></svg>'
    };
    const ok = u => u && u !== "#";
    if (dl) dl.innerHTML = [["Fanpage", S.links.facebookPage, "fb"], ["Instagram", S.links.instagram, "ig"], ["Grupa", S.links.facebookGroup, "grp"]].filter(x => ok(x[1]))
      .map(([t, u, ic]) => `<a class="btn ico" href="${u}" target="_blank" rel="noopener">${ICON[ic]}${t}</a>`).join("");

    $("#past").innerHTML = past.slice(0, 16).map(e => `<a class="tile" href="${href(e)}">${pic(wide(e), { small: true })}
      <span class="t-num">#${e.number}</span><div class="t-body"><div class="t-date">${fmt(e.date)}</div><h3>${esc(e.film.title)}</h3><div class="dir">${esc(e.film.director)}</div></div></a>`).join("");

    const form = $("#nl"); if (S.newsletterAction !== "#") form.action = S.newsletterAction;
    form.addEventListener("submit", ev => { if (form.getAttribute("action") === "#") { ev.preventDefault(); alert("Newsletter jeszcze nie jest podpięty — ustaw newsletterAction w data/site.js"); } });
    $("#links").innerHTML = (social.length ? social : [["Kino Charlie", S.venue.url]]).map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}<span aria-hidden="true">→</span></a>`).join("");
  }

  /* ---------- O KLUBIE ---------- */
  if (page === "about") {
    renderStats();
    const btns = (social.length ? social : [["Kino Charlie", S.venue.url]]).map(([t, u]) => `<a class="btn" href="${u}" target="_blank" rel="noopener">${t}</a>`).join("");
    document.querySelectorAll("[data-social]").forEach(el => { el.innerHTML = btns; });
  }

  /* ---------- WYDARZENIA: lista pogrupowana latami ---------- */
  if (page === "events") {
    const years = [...new Set(ALL.map(e => e.date.slice(0, 4)))];
    let mode = "all", year = "", q = "";
    $("#count").textContent = ALL.length + " spotkań · " + years[years.length - 1] + "–" + years[0];
    $("#chips").innerHTML = [["all", "Wszystkie"], ["up", "Nadchodzące"], ["past", "Archiwum"]].map(([m, t]) => `<button class="chip${m === "all" ? " on" : ""}" data-m="${m}" aria-pressed="${m === "all"}">${t}</button>`).join("")
      + `<span class="sep"></span>` + years.map(y => `<button class="chip" data-y="${y}" aria-pressed="false">${y}</button>`).join("");
    const row = e => `<a class="row${isUpcoming(e) ? " upc" : ""}" href="${href(e)}"><span class="r-num">#${e.number}</span><span class="r-date">${D(e.date).getDate()} ${mon(e.date)}</span>
      <span class="r-main"><b>${esc(e.film.title)}</b><i>${esc(e.film.director)}${e.note ? " · " + esc(e.note) : ""}</i></span>
      <span class="r-tags">${isUpcoming(e) ? '<span class="tag">wkrótce</span>' : ""}${e.badge ? `<span class="tag">${esc(e.badge)}</span>` : ""}${e.series ? `<span class="tag past">${esc(e.series)}</span>` : ""}</span>
      <span class="r-thumb">${pic(wide(e), { small: true })}</span></a>`;
    const draw = () => {
      const l = ALL.filter(e => (mode === "all" || (mode === "up" ? isUpcoming(e) : !isUpcoming(e))) && (!year || e.date.startsWith(year)) &&
        (e.film.title + " " + e.film.director + " #" + e.number + " " + (e.series || "") + " " + (e.note || "")).toLowerCase().includes(q));
      const by = {}; l.forEach(e => (by[e.date.slice(0, 4)] = by[e.date.slice(0, 4)] || []).push(e));
      $("#list").innerHTML = l.length ? Object.keys(by).sort().reverse().map(y => `<div class="year"><h2>${y}<small>${by[y].length} spotkań</small></h2><div>${by[y].map(row).join("")}</div></div>`).join("")
        : '<p class="empty">Brak wyników.</p>';
    };
    $("#chips").onclick = ev => {
      const b = ev.target.closest(".chip"); if (!b) return;
      if (b.dataset.m) mode = b.dataset.m;
      else year = year === b.dataset.y ? "" : b.dataset.y;
      document.querySelectorAll("#chips .chip").forEach(x => { const on = x.dataset.m ? x.dataset.m === mode : x.dataset.y === year; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
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
    const STEP = 48;            // tyle plakatów naraz; reszta po kliknięciu „Pokaż więcej”
    let q = "", sort = "title", limit = STEP;
    const more = document.createElement("div"); more.className = "more-wrap"; $("#list").after(more);
    more.onclick = ev => { if (!ev.target.closest("button")) return; const first = limit; limit += STEP; draw(); const a = $("#list").children[first]; if (a) a.focus({ preventScroll: true }); };
    const draw = () => {
      const films = groups.filter(l => (l[0].film.title + " " + l[0].film.director).toLowerCase().includes(q)).sort(sorters[sort]);
      $("#count").textContent = films.length + " filmów";
      const left = films.length - limit;
      more.innerHTML = left > 0 ? `<button class="btn">Pokaż więcej <span class="muted">(${Math.min(STEP, left)} z ${left})</span></button>` : "";
      $("#list").innerHTML = films.slice(0, limit).map(l => {
        const f = l[0].film, src = img((l.find(e => e.poster) || {}).poster);
        return `<a class="fcard" href="${href(l[0])}"><div class="poster-box">${src ? pic(src, { small: true, alt: "Plakat: " + f.title }) : `<span>${esc(f.title)}</span>`}</div>
          <h3>${esc(f.title)}</h3><div class="dir">${esc(f.director)}</div><div class="date">${l.map(e => "#" + e.number + " · " + fmt(e.date)).join("<br>")}</div></a>`;
      }).join("");
    };
    $("#q").oninput = ev => { q = ev.target.value.toLowerCase(); limit = STEP; draw(); };
    $("#sort").onchange = ev => { sort = ev.target.value; limit = STEP; draw(); };
    draw();
  }

  /* ---------- STRONA WYDARZENIA ---------- */
  if (page === "event") {
    // każde wydarzenie ma własną stronę wydarzenie/<id>.html (tworzy ją tools/build.py);
    // stare linki wydarzenie.html?id=… przekierowujemy na nią
    const id = document.body.dataset.id || new URLSearchParams(location.search).get("id");
    const i = Math.max(0, ALL.findIndex(x => x.id === id)), e = ALL[i], up = isUpcoming(e), f = e.film, src = wide(e);
    if (!document.body.dataset.id) { location.replace(href(e)); return; }
    const newer = ALL[i - 1], older = ALL[i + 1];
    const facts = [["Data", fmt(e.date) + (e.time ? ", godz. " + e.time : "")],
      ["Miejsce", `<a href="${S.venue.url}" target="_blank" rel="noopener">${esc(e.venue || S.venue.name)}, ${esc(e.city || S.venue.city)}</a>`, 1],
      ["Cykl", e.series], ["Format", e.format], ["Dodatkowo", e.note],
      ["Film", [f.genre, f.original, f.country, f.year].filter(Boolean).join(" · ")], ["Reżyseria", f.director], ["Scenariusz", f.screenplay],
      ["Zdjęcia", f.cinematography], ["Muzyka", f.music], ["Obsada", f.cast], ["Czas trwania", f.runtime], ["Dystrybutor", f.distributor]]
      .filter(r => r[1]).map(r => `<div><dt>${r[0]}</dt><dd>${r[2] ? r[1] : esc(r[1])}</dd></div>`).join("");
    applyAccent(e);
    $("#event").innerHTML = `<section class="hero ev${up ? " live" : ""}"><div class="hero-text">
        ${e.badge ? `<div class="badge">${esc(e.badge)}</div><br>` : ""}
        <div class="eyebrow">Spotkanie #${e.number} <span class="tag ${up ? "" : "past"}" style="margin-left:.6rem">${up ? "nadchodzące" : "archiwum"}</span></div>
        <h1>${esc(f.title)}</h1><div class="lede">reż. ${esc(f.director)}</div></div>
      <figure class="hero-still"${focus(e)}><div class="hs-img">${pic(src, { lazy: false })}</div></figure>
      <div class="hero-meta"><div class="meta"><span class="btn static">${fmt(e.date)}${e.time ? " · " + e.time : ""}</span>${up ? ticket(e, "Kup bilet") : ""}</div></div></section>
      ${e.description ? `<section class="prose"><h2>O wydarzeniu</h2>${paras(e.description)}</section>` : ""}
      <section class="ev-body${e.poster ? "" : " noposter"}"><dl class="facts">${facts}</dl>${e.poster ? pic(e.poster, { alt: "Plakat: " + f.title, cls: "ev-poster" }) : ""}</section>
      ${e.summary ? `<section class="prose"><h2>Po spotkaniu</h2>${paras(e.summary)}</section>` : ""}
      ${e.gallery && e.gallery.length ? `<section><h2 style="margin-bottom:1.5rem">Galeria</h2><div class="gallery">${e.gallery.map(g => pic(g, { small: true })).join("")}</div></section>` : ""}
      <nav class="pn">${older ? `<a href="${href(older)}"><small>← Poprzednie · #${older.number}</small><b>${esc(older.film.title)}</b></a>` : "<span></span>"}
        ${newer ? `<a href="${href(newer)}"><small>Następne · #${newer.number} →</small><b>${esc(newer.film.title)}</b></a>` : "<span></span>"}</nav>`;
  }
})();
