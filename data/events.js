/*
  ============================================================
  BAZA WYDARZEŃ — tu dodajesz nowe spotkania.
  Skopiuj jeden blok { ... } , wklej na początek listy, zmień dane.
  Strona sama ustali, czy wydarzenie jest "nadchodzące" czy "archiwalne"
  (na podstawie daty), i ukryje/pokaże przycisk biletów.

  Pola:
    id          – krótki adres, np. "214-slodkie-zycie" (bez polskich znaków i spacji)
    number      – numer spotkania
    date        – RRRR-MM-DD
    time        – "18:30"
    film        – { title, director } (opcjonalnie: original, year, country, runtime, genre, screenplay, cinematography, music, cast, distributor)
    badge       – wyróżnik na kafelku i w nagłówku, np. "Przedpremiera", "Gość specjalny", "Premiera" (opcjonalnie)
    series      – nazwa cyklu/przeglądu (opcjonalnie)
    note        – goście, dodatkowe informacje (opcjonalnie)
    venue/city  – tylko jeśli spotkanie jest poza Kinem Charlie
    time        – godzina, np. "18:30". Dla minionych wydarzeń zostaw "". Dla przyszłych wpisz godzinę; "??:??" = placeholder do uzupełnienia
    description – opis wydarzenia (akapity oddzielaj pustą linią)
    ticketUrl   – link do biletów (zostaw "" jeśli jeszcze nie ma)
    image       – ścieżka do plakatu/kadru, np. "img/214.jpg" (opcjonalnie)
    summary     – podsumowanie po wydarzeniu (opcjonalnie)
    gallery     – lista zdjęć z wydarzenia (opcjonalnie)
  ============================================================
*/
window.EVENTS = [
 {
  "id": "226-najlepsza-owsianka-na-swiecie",
  "number": 226,
  "date": "2026-11-17",
  "time": "19:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Najlepsza owsianka na świecie",
   "director": "Constantine Costi",
   "year": 2025,
   "original": "The Golden Spurtle"
  },
  "description": "",
  "ticketUrl": "https://www.charlie.pl/index.php?i=film&id=1791304778",
  "image": "img/226-20261111233219.jpg",
  "summary": "",
  "gallery": [],
  "poster": "img/226-plakat-20261111235511.jpg",
  "backdrop": "img/tmdb/gKW9lQc8418OyyAXLKE0qGuh5Or.jpg"
 },
 {
  "id": "225-przez-sciane",
  "number": 225,
  "date": "2026-11-11",
  "time": "19:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Przez ścianę",
   "director": "Maciej Sobieszczański",
   "year": 2026,
   "genre": "melodramat",
   "country": "Polska",
   "runtime": "120 min",
   "screenplay": "Maciej Sobieszczański",
   "music": "Mary Komasa, Antoni Łazarkiewicz",
   "cinematography": "Jolanta Dylewska",
   "cast": "Maria Dębska, Jakub Gierszał, Agnieszka Grochowska, Arkadiusz Jakubik, Julian Świeżewski",
   "distributor": "Kino Świat"
  },
  "description": "Po seansie rozmowa z reżyserem Maciejem Sobieszczańskim, Marią Dębską – odtwórczynią głównej roli – oraz Jolantą Dylewską, autorką zdjęć.",
  "ticketUrl": "https://bilety.charlie.pl/MSI/Default.aspx?event_id=95944&typetran=0&returnlink=%7e%2fmvc%2fpl%3fsort%3dName%26date%3d2026-11-11",
  "image": "img/225.jpg",
  "summary": "",
  "gallery": [],
  "badge": "Przedpremiera",
  "poster": "img/tmdb/dUSK2uIn52ymmAME9aWj8hO4JIv.jpg"
 },
 {
  "id": "224-skrzypek-na-dachu",
  "number": 224,
  "date": "2026-11-03",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Skrzypek na dachu",
   "director": "Norman Jewison",
   "year": 1971,
   "original": "Fiddler on the Roof"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/95lSu2udEN4IeK21X6Je9UPBuJM.jpg",
  "backdrop": "img/tmdb/n1pItGYLcgAh7c0ewjWeXKTjXFT.jpg"
 },
 {
  "id": "223-milosc-smierc-i-dojrzewanie-w-camp-miasma",
  "number": 223,
  "date": "2026-11-02",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Miłość, śmierć i dojrzewanie w Camp Miasma",
   "director": "Jane Schoenbrun",
   "year": 2026,
   "original": "Teenage Sex and Death at Camp Miasma"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/jwbVm2KTB5KOLauXkmJAegzZnhg.jpg",
  "backdrop": "img/tmdb/c3N1tHx6cKmhbv7Gt8M4cwHWPUZ.jpg"
 },
 {
  "id": "222-halloween-2026-inni-suspiria",
  "number": 222,
  "date": "2026-10-30",
  "time": "19:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Halloween 2026: Inni + Suspiria",
   "director": "Alejandro Amenábar, Dario Argento"
  },
  "note": "Mini-maraton: „Inni” (19:00) · „Suspiria” (21:45)",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "221-zobaczysz-wszystko",
  "number": 221,
  "date": "2026-10-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zobaczysz wszystko",
   "director": "Nathan Fielder, Lance Oppenheim",
   "year": 2026,
   "original": "You Can See Everything"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/jIW5nxjWLcfZvYBLNTiGi5me3Vw.jpg",
  "backdrop": "img/tmdb/nhIL3O4W9h5V5JbNQm7yjoDk3So.jpg"
 },
 {
  "id": "220-bez-znieczulenia",
  "number": 220,
  "date": "2026-10-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bez znieczulenia",
   "director": "Andrzej Wajda",
   "year": 1978
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bxS0z1Ji4VVWZthMZpooi0Fcviu.jpg",
  "backdrop": "img/tmdb/3d7Zh7ZGk1TbiUA3ZGKyS3qCpBi.jpg"
 },
 {
  "id": "219-la-perra",
  "number": 219,
  "date": "2026-10-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "La Perra",
   "director": "Dominga Sotomayor",
   "year": 2026
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/iNGVCYuASeogHROGpWo5dugWii2.jpg",
  "backdrop": "img/tmdb/39bNBSNYpGfrN4eac6ZIn6v5rnt.jpg"
 },
 {
  "id": "218-primetime",
  "number": 218,
  "date": "2026-10-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Primetime",
   "director": "Lance Oppenheim",
   "year": 2026
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lmrulvLbmaejTix1YaMxo1oGhH1.jpg",
  "backdrop": "img/tmdb/sEsMwSDUWGIx9EfNxzM6KzVSsSQ.jpg"
 },
 {
  "id": "217-powiedz-mi-co-czujesz",
  "number": 217,
  "date": "2026-10-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Powiedz mi, co czujesz",
   "director": "Łukasz Ronduda",
   "year": 2026
  },
  "note": "gościni: psychoterapeutka Anna Połczyńska",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5gFCerIKWIqXx7Lom1ioCr4wYNq.jpg",
  "backdrop": "img/tmdb/OYikwyUKEWvjlsMIOjpxgqrPIL.jpg"
 },
 {
  "id": "216-roza",
  "number": 216,
  "date": "2026-10-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Róża",
   "director": "Markus Schleinzer"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "215-opetanie",
  "number": 215,
  "date": "2026-09-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Opętanie",
   "director": "Andrzej Żuławski",
   "year": 1981,
   "original": "Possession"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/A9bnRn05riOKWftvQlLKa2gl51n.jpg",
  "backdrop": "img/tmdb/zfw3fcF7d4KcWYEvps4zUfl303b.jpg"
 },
 {
  "id": "214-slodkie-zycie",
  "number": 214,
  "date": "2026-09-18",
  "time": "18:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Słodkie życie",
   "director": "Federico Fellini",
   "year": 1960,
   "original": "La dolce vita"
  },
  "description": "Jeden z najbardziej kultowych filmów wszech czasów — na dużym ekranie!\n\nRzymska noc, paparazzi, fontanna di Trevi i Marcello Mastroianni w roli dziennikarza dryfującego przez świat luksusu i pustki. Przed seansem wprowadzenie Diany Dąbrowskiej, po seansie wspólna dyskusja.",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bT6bICAhQLY40Hrs7Lq2fnwNLsf.jpg",
  "backdrop": "img/tmdb/eN2NdMeJLNzLYzWIEEoaGzZAsiD.jpg"
 },
 {
  "id": "213-krajobraz-po-bitwie",
  "number": 213,
  "date": "2026-09-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Krajobraz po bitwie",
   "director": "Andrzej Wajda",
   "year": 1970
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/wwGdrHFJTIefv5RjyDbrrVz9Meo.jpg",
  "backdrop": "img/tmdb/fxXkKpMVPSJSdciQStPEEdC0nnj.jpg"
 },
 {
  "id": "212-historie-rownolegle",
  "number": 212,
  "date": "2026-09-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Historie równoległe",
   "director": "Asghar Farhadi",
   "year": 2026,
   "original": "Histoires parallèles"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/XP6dUiugY6floj9HFhpigphjF6.jpg",
  "backdrop": "img/tmdb/hKWoyatPgWzRMwVU7iBBExHw9n7.jpg"
 },
 {
  "id": "211-absolwent",
  "number": 211,
  "date": "2026-08-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Absolwent",
   "director": "Mike Nichols",
   "year": 1967,
   "original": "The Graduate"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5YMfBptA2V6SsAoQCIU4ZQ9Hw2k.jpg",
  "backdrop": "img/tmdb/lIY8ZTp6OJTAMfiorDGsPsJ5LT.jpg"
 },
 {
  "id": "210-glos-z-ksiezyca-la-fellinette",
  "number": 210,
  "date": "2026-08-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Głos (z) Księżyca + La Fellinette",
   "director": "Federico Fellini, Francesca Fabbri Fellini",
   "year": 1990,
   "original": "La voce della luna"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/3HYoExYEcjih6lNxpPGd7WoqqZB.jpg",
  "backdrop": "img/tmdb/cq6So4kDrMRQQS284qLxrTwy69d.jpg"
 },
 {
  "id": "209-frances-ha",
  "number": 209,
  "date": "2026-08-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Frances Ha",
   "director": "Noah Baumbach",
   "year": 2013
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/l2VsgAk6VpGJZU18c9IxCvmW8Uw.jpg",
  "backdrop": "img/tmdb/oUVd42KgJWW6YnZLfzI7SDTdcPL.jpg"
 },
 {
  "id": "208-gorzkie-swieta",
  "number": 208,
  "date": "2026-08-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Gorzkie święta",
   "director": "Pedro Almodovar",
   "year": 2026,
   "original": "Amarga Navidad"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ji29dXqoeIsQiVnXAkzI4nzxMjr.jpg",
  "backdrop": "img/tmdb/ppLv2F7dhvI3wxaEoOP1E0OyBPP.jpg"
 },
 {
  "id": "207-ghost-in-the-shell",
  "number": 207,
  "date": "2026-08-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Ghost in the Shell",
   "director": "Mamoru Oshii",
   "year": 1995,
   "original": "GHOST IN THE SHELL / 攻殻機動隊"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/q9iCq0NAvOV8lMjAwTokIw1rI63.jpg",
  "backdrop": "img/tmdb/jIpagj2Dud9g3ZVJFvaWikEWsYz.jpg"
 },
 {
  "id": "206-chungking-express",
  "number": 206,
  "date": "2026-08-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chungking Express",
   "director": "Wong Kar Wai",
   "year": 1994,
   "original": "重慶森林"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/fv0KUkKoEr1P6Z0lltVyWwtFg5e.jpg",
  "backdrop": "img/tmdb/8e6avmXiqurj5LHkmdHBq6rc5jm.jpg"
 },
 {
  "id": "205-przeklenstwa-niewinnosci",
  "number": 205,
  "date": "2026-07-31",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Przekleństwa niewinności",
   "director": "Sofia Coppola",
   "year": 2000,
   "original": "The Virgin Suicides"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/1NCQtXPQnaHRjOZVmktA9BSM35F.jpg",
  "backdrop": "img/tmdb/6b6UpsOXmjO8mJKYsGTG9HW49CN.jpg"
 },
 {
  "id": "204-odyseja",
  "number": 204,
  "date": "2026-07-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Odyseja",
   "director": "Christopher Nolan",
   "year": 2026,
   "original": "The Odyssey"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/1g2v4Gg8kVe6P1p5Tz5IA69BPBN.jpg",
  "backdrop": "img/tmdb/nVBzWBqHTB3XD0iqWiJLfKLo5fq.jpg"
 },
 {
  "id": "203-milczenie-owiec",
  "number": 203,
  "date": "2026-07-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Milczenie owiec",
   "director": "Jonathan Demme",
   "year": 1991,
   "original": "The Silence of the Lambs"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/qWG1nSFlp4oNwSSTCPk3Q3n4FlD.jpg",
  "backdrop": "img/tmdb/mbOx1wxMLikzwWUO9TKAcFIy6op.jpg"
 },
 {
  "id": "202-giulietta-i-duchy",
  "number": 202,
  "date": "2026-07-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Giulietta i duchy",
   "director": "Federico Fellini"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "201-following",
  "number": 201,
  "date": "2026-07-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Following",
   "director": "Christopher Nolan",
   "year": 1999
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/pZnfUffNIkeHB1gi2Lr31VNEIl.jpg",
  "backdrop": "img/tmdb/yf5I5VHllK4h5VdbxHfQ40RBTe8.jpg"
 },
 {
  "id": "200-slodkie-zycie",
  "number": 200,
  "date": "2026-07-05",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Słodkie życie",
   "director": "Federico Fellini",
   "year": 1960,
   "original": "La dolce vita"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bT6bICAhQLY40Hrs7Lq2fnwNLsf.jpg",
  "backdrop": "img/tmdb/eN2NdMeJLNzLYzWIEEoaGzZAsiD.jpg"
 },
 {
  "id": "199-powiekszenie",
  "number": 199,
  "date": "2026-07-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Powiększenie",
   "director": "Michelangelo Antonioni",
   "year": 1966,
   "original": "Blow-Up"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/dXX3V7gFdlPquWfwXLZhCNVuQgM.jpg",
  "backdrop": "img/tmdb/rWtRkNGkg05rET8taCA96c7heLb.jpg"
 },
 {
  "id": "198-noce-cabirii",
  "number": 198,
  "date": "2026-06-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Noce Cabirii",
   "director": "Federico Fellini",
   "year": 1957,
   "original": "Le notti di Cabiria"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ezDW37MA8aZlOgJYO4mysjc949J.jpg",
  "backdrop": "img/tmdb/9yepEBnQNcKzWWyHdUiX8Mnqc6U.jpg"
 },
 {
  "id": "197-podwojne-zycie-weroniki",
  "number": 197,
  "date": "2026-06-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Podwójne życie Weroniki",
   "director": "Krzysztof Kieślowski",
   "year": 1991,
   "original": "La Double Vie de Véronique"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bOQW3ygF5absQ0yWVSnNOdnF82p.jpg",
  "backdrop": "img/tmdb/vjsFyeCf5W5rxCFpS9MIAEZJkIG.jpg"
 },
 {
  "id": "196-rozmowa",
  "number": 196,
  "date": "2026-06-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rozmowa",
   "director": "Francis Ford Coppola"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "195-zawiescie-czerwone-latarnie",
  "number": 195,
  "date": "2026-06-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zawieście czerwone latarnie",
   "director": "Yimou Zhang",
   "year": 1991,
   "original": "大红灯笼高高挂"
  },
  "note": "gościni: Justyna Braszka",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hlbkj4NNvAG5N23kUBUTM1yFXPF.jpg",
  "backdrop": "img/tmdb/9UCHfC9tYojD4mMVBm0boyzYEQq.jpg"
 },
 {
  "id": "194-osiem-i-pol",
  "number": 194,
  "date": "2026-06-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Osiem i pół",
   "director": "Federico Fellini",
   "year": 1963,
   "original": "8½"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/3Z3AOSArxx2Isfx9T2lmWVaTl3h.jpg",
  "backdrop": "img/tmdb/y2FNZLHynsevBnVTocGW6c3pQpr.jpg"
 },
 {
  "id": "193-czlowiek-z-marmuru",
  "number": 193,
  "date": "2026-06-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Człowiek z marmuru",
   "director": "Andrzej Wajda",
   "year": 1977
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/iCAc0Eyxa1Gd3DqsoxfD3Pvl0re.jpg",
  "backdrop": "img/tmdb/36zif7dloaMlMUzrIW5xf1ymqV2.jpg"
 },
 {
  "id": "192-fight-club",
  "number": 192,
  "date": "2026-06-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Fight Club",
   "director": "David Fincher",
   "year": 1999
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/efBb4gjjKneUoBVgfFOUu2OwihS.jpg",
  "backdrop": "img/tmdb/c6OLXfKAk5BKeR6broC8pYiCquX.jpg"
 },
 {
  "id": "191-fatherland",
  "number": 191,
  "date": "2026-06-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Fatherland",
   "director": "Paweł Pawlikowski",
   "year": 2026,
   "original": "Ojczyzna"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/oNejN1l69nBF8LdQwy5FkAQZT44.jpg",
  "backdrop": "img/tmdb/zKoBjLggS4v22a9ZiCvmLaZrht7.jpg"
 },
 {
  "id": "190-mikey-i-nicky",
  "number": 190,
  "date": "2026-06-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Mikey i Nicky",
   "director": "Elaine May",
   "year": 1976,
   "original": "Mikey and Nicky"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/1NIuTzOIFSTeOB1LYKwX10jE88o.jpg",
  "backdrop": "img/tmdb/pzST8cae4CTsfj0nPP63YOdPLiO.jpg"
 },
 {
  "id": "189-drugie-zycie",
  "number": 189,
  "date": "2026-05-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Drugie życie",
   "director": "Maryam Touzani"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "188-father-mother",
  "number": 188,
  "date": "2026-05-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Father Mother...",
   "director": "Jim Jarmush"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "187-milczaca-przyjaciolka",
  "number": 187,
  "date": "2026-05-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Milcząca przyjaciółka",
   "director": "Ildiko Enyedi",
   "year": 2026,
   "original": "Silent Friend"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bUUd6D7E0DuzxwSo4qnu136LW5v.jpg",
  "backdrop": "img/tmdb/iOIc1rD53iF5D5y5pVGEs8uUTVc.jpg"
 },
 {
  "id": "186-pieknosc-dnia",
  "number": 186,
  "date": "2026-05-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Piękność dnia",
   "director": "Luis Buñuel",
   "year": 1967,
   "original": "Belle de jour"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/wKkMUNBcgBqrPLnb3o7IMFpJY86.jpg",
  "backdrop": "img/tmdb/9fJPLvrUV32MzpfDwXk7cOnj8hM.jpg"
 },
 {
  "id": "185-wpatrujac-sie-w-slonce",
  "number": 185,
  "date": "2026-05-21",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wpatrując się w słońce",
   "director": "Mascha Schilinski",
   "year": 2025,
   "original": "In die Sonne schauen"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mUjt92SzZtbcPMyI9CEu54MbPUy.jpg",
  "backdrop": "img/tmdb/cXr5YOMJKZBkokgNogHjEyFZLc6.jpg"
 },
 {
  "id": "184-znaki-pana-sliwki",
  "number": 184,
  "date": "2026-05-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Znaki Pana Śliwki",
   "director": "Urszula Morga, Bartosz Mikołajczyk",
   "year": 2026
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/itOZvCQjANQno1G0aoT9RisF3Et.jpg"
 },
 {
  "id": "183-niewinni-czarodzieje",
  "number": 183,
  "date": "2026-05-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Niewinni czarodzieje",
   "director": "Andrzej Wajda",
   "year": 1960
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hQRD3Gh69SR5izkp8V1W3wHZV8B.jpg",
  "backdrop": "img/tmdb/yVywZerF7Blnq4lZcGTl9OtRvEr.jpg"
 },
 {
  "id": "182-rambo-pierwsza-krew",
  "number": 182,
  "date": "2026-05-09",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rambo: Pierwsza krew",
   "director": "Ted Kotcheff",
   "year": 1982,
   "original": "First Blood"
  },
  "note": "spotkanie z Michałem Flidrzyńskim, autorem kanału „Podróże 24 klatki na sekundę”",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/4yTVoQUqlNNcILR7ZvCfiOCkam9.jpg",
  "backdrop": "img/tmdb/hCxxOJojCUFyuahDx167glJgp7E.jpg"
 },
 {
  "id": "181-viridiana",
  "number": 181,
  "date": "2026-05-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Viridiana",
   "director": "Luis Buñuel",
   "year": 1962
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5OXS3pjaCd4RvQ3FqQzBqkSc0kM.jpg",
  "backdrop": "img/tmdb/2QGuTuyxwCCER9iwSeONW8BAxce.jpg"
 },
 {
  "id": "180-kokuho",
  "number": 180,
  "date": "2026-04-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kokuho",
   "director": "Sang-il Lee",
   "year": 2025,
   "original": "国宝"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/aYpgOnuTzjo8xSGThQ7STvN7EKd.jpg",
  "backdrop": "img/tmdb/3C8yAIuXlH4BGCpTwEetIv0VBt8.jpg"
 },
 {
  "id": "179-rzeczy-niezbedne",
  "number": 179,
  "date": "2026-04-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rzeczy niezbędne",
   "director": "Kamila Tarabura",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/cbZH3TslPhbgWiRECnfBH6qJTIq.jpg",
  "backdrop": "img/tmdb/3NmFPaM2bherjQhqXMaFZQs4rpu.jpg"
 },
 {
  "id": "178-wolnosc-po-wlosku",
  "number": 178,
  "date": "2026-04-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wolność po włosku",
   "director": "Mario Martone",
   "year": 2025,
   "original": "Fuori"
  },
  "series": "Cinema Italia Oggi",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gxSkBOfTEOX2f6KhqMFSXf24nMo.jpg",
  "backdrop": "img/tmdb/k9Oe0KXL1qYnEddxr1WR4VkB8eW.jpg"
 },
 {
  "id": "177-razem-czy-osobno",
  "number": 177,
  "date": "2026-04-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Razem czy osobno",
   "director": "Massimiliano Bruno",
   "year": 2026,
   "original": "2 cuori e 2 capanne"
  },
  "series": "Cinema Italia Oggi",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lcHTFRzgUycujPjEFTiqJoUptse.jpg",
  "backdrop": "img/tmdb/mBo1uTuTnc1aim8QIWwIQu4LM8c.jpg"
 },
 {
  "id": "176-miasta-na-rowninie",
  "number": 176,
  "date": "2026-04-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Miasta na równinie",
   "director": "Francesco Sossai"
  },
  "series": "Cinema Italia Oggi",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "175-trener-tenisa",
  "number": 175,
  "date": "2026-04-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Trener tenisa",
   "director": "Andrea Di Stefano"
  },
  "series": "Cinema Italia Oggi",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "174-wesele",
  "number": 174,
  "date": "2026-04-16",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wesele",
   "director": "Andrzej Wajda",
   "year": 1973
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/8lF6C6i4z411K051D8GYHGaIVcs.jpg",
  "backdrop": "img/tmdb/3uT2LA3EkfgzErJlRo335ZJ5ue3.jpg"
 },
 {
  "id": "173-chronologia-wody",
  "number": 173,
  "date": "2026-04-15",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chronologia wody",
   "director": "Kristen Stewart",
   "year": 2025,
   "original": "The Chronology of Water"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vjm7DEI8LaWtmM33CmJdoeiN9PA.jpg",
  "backdrop": "img/tmdb/vTiI8auKiV8KnewOqySCZkXB19t.jpg"
 },
 {
  "id": "172-dyrygent",
  "number": 172,
  "date": "2026-04-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dyrygent",
   "director": "Ondřej Provazník",
   "year": 2025,
   "original": "Sbormistr"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/fWEpJzsjmUoNDJ2jUhQHIvrdIOQ.jpg",
  "backdrop": "img/tmdb/ryet6I5rQHwfxyoSuV97FBWnq0H.jpg"
 },
 {
  "id": "171-nagi-instynkt",
  "number": 171,
  "date": "2026-04-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Nagi instynkt",
   "director": "Paul Verhoeven",
   "year": 1992,
   "original": "Basic Instinct"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/2pEoNjsW3SI9J60MFfrbxPN8E7s.jpg",
  "backdrop": "img/tmdb/7FRraud59N3s10bbf9bfYjvwx3v.jpg"
 },
 {
  "id": "170-dziecko-z-pylu",
  "number": 170,
  "date": "2026-04-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dziecko z pyłu",
   "director": "Weronika Mliczewska",
   "year": 2026
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mG7PSpF6sKxhxROmEGpPGTGGst.jpg",
  "backdrop": "img/tmdb/1F9eXHH8AZRVKSBIMpYWxWyjCNW.jpg"
 },
 {
  "id": "169-drama",
  "number": 169,
  "date": "2026-04-09",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Drama",
   "director": "Kristoffer Borgli",
   "year": 2026,
   "original": "The Drama"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hLh6Ivz2Iyl0dr1QGN11GMiFYIh.jpg",
  "backdrop": "img/tmdb/1oKLEA9JOhvaBwLpqjROisvWMy7.jpg"
 },
 {
  "id": "168-pan-nikt-kontra-putin",
  "number": 168,
  "date": "2026-03-31",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Pan Nikt kontra Putin",
   "director": "David Borenstein, Pavel Talankin",
   "year": 2025,
   "original": "Mr. Nobody mod Putin"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vxvYpq92BRYlsJmSroswNoiDbnR.jpg",
  "backdrop": "img/tmdb/3A0dDfZq5WxdDGt8qzmhFXqVZxJ.jpg"
 },
 {
  "id": "167-testament-ann-lee",
  "number": 167,
  "date": "2026-03-29",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Testament Ann Lee",
   "director": "Mona Fastvold",
   "year": 2025,
   "original": "The Testament of Ann Lee"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hBGg3IGRM7LM6ydMmDrl8mEx33Y.jpg",
  "backdrop": "img/tmdb/jZNR5onRZijwyGr5iWbs3J9QcYr.jpg"
 },
 {
  "id": "166-sny-pelne-dymu",
  "number": 166,
  "date": "2026-03-28",
  "time": "18:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Sny pełne dymu",
   "director": "Dorota Kędzierzawska",
   "year": 2025
  },
  "note": "po seansie spotkanie z reżyserką, Krzysztofem Globiszem i Żanetą Łabudzką",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/6ErjMkENe8taPO0e4tc6JYhKogP.jpg",
  "backdrop": "img/tmdb/khHlEA1Xeayf3GQtWmGOm6izv8m.jpg"
 },
 {
  "id": "165-kobiety-na-skraju-zalamania-nerwowego",
  "number": 165,
  "date": "2026-03-28",
  "time": "15:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kobiety na skraju załamania nerwowego",
   "director": "Pedro Almodovar",
   "year": 1988,
   "original": "Mujeres al borde de un ataque de nervios"
  },
  "series": "Tydzień kina hiszpańskiego",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/zrVO3z5BfS3zRcra7JonUrgvPGV.jpg",
  "backdrop": "img/tmdb/eRzwmzyz4sSq2QqjXWehWNkU0Us.jpg"
 },
 {
  "id": "164-milosc-ktora-zostaje",
  "number": 164,
  "date": "2026-03-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Miłość, która zostaje",
   "director": "Hlynur Pálmason",
   "year": 2025,
   "original": "Ástin sem eftir er"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gveoShAALiQfdINESmjmsPGb0IC.jpg",
  "backdrop": "img/tmdb/7xWTnediis2NYgZTq7ZndvI9JgW.jpg"
 },
 {
  "id": "163-sorry-baby",
  "number": 163,
  "date": "2026-03-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Sorry Baby",
   "director": "Eva Victor",
   "year": 2025,
   "original": "Sorry, Baby"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ouNdnr4RkjQhek1n2dlW7Ef0XsY.jpg",
  "backdrop": "img/tmdb/nVHEjkA8vuEGJLfNUOmVW5md6yn.jpg"
 },
 {
  "id": "162-znikniecie",
  "number": 162,
  "date": "2026-03-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zniknięcie",
   "director": "George Sluizer",
   "year": 1988,
   "original": "Spoorloos"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mhjbVeMb3nEw4H2VWakU62BRhsu.jpg",
  "backdrop": "img/tmdb/gcXbxHjkUwLV4HrE2oJcbP7UGTA.jpg"
 },
 {
  "id": "161-panna-mloda",
  "number": 161,
  "date": "2026-03-21",
  "time": "19:40",
  "format": "Film + dyskusja",
  "film": {
   "title": "Panna młoda!",
   "director": "Maggie Gyllenhall"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "160-romeria",
  "number": 160,
  "date": "2026-03-20",
  "time": "19:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Romería",
   "director": "Carla Simón",
   "year": 2025
  },
  "series": "Tydzień kina hiszpańskiego",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/9mkLV32jOUXhC8uQaw7zV9ymm8Y.jpg",
  "backdrop": "img/tmdb/iwma2WVMn1IWS9cT0CpvOYTBTHe.jpg"
 },
 {
  "id": "159-popiol-i-diament",
  "number": 159,
  "date": "2026-03-19",
  "time": "18:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Popiół i diament",
   "director": "Andrzej Wajda",
   "year": 1958
  },
  "series": "Wajda Re-Wizje",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/66yNLyK66WgySI7sZLXUfa7NRHp.jpg",
  "backdrop": "img/tmdb/1QlZ3Kge4bCH01V3VibxckeVIiu.jpg"
 },
 {
  "id": "158-jedna-bitwa-po-drugiej",
  "number": 158,
  "date": "2026-03-16",
  "time": "18:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Jedna bitwa po drugiej",
   "director": "Paul Thomas Anderson",
   "year": 2025,
   "original": "One Battle After Another"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/iOyZtndmwT80IRt1esLpisXPDy.jpg",
  "backdrop": "img/tmdb/hiazLNa1UXuX35OTnMQRKOx3eTk.jpg"
 },
 {
  "id": "157-trzy-kolory-niebieski",
  "number": 157,
  "date": "2026-03-13",
  "time": "19:00",
  "format": "Film + dyskusja",
  "film": {
   "title": "Trzy kolory: Niebieski",
   "director": "Krzysztof Kieślowski",
   "year": 1993,
   "original": "Trois couleurs : Bleu"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/w3Cfipmxo5W58t57iOlPSKrPNda.jpg",
  "backdrop": "img/tmdb/pXvYw0QOPbHJVvwGbZfrSNY2vnB.jpg"
 },
 {
  "id": "156-oldboy",
  "number": 156,
  "date": "2026-03-11",
  "time": "18:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Oldboy",
   "director": "Park Chan-wook",
   "year": 2003,
   "original": "올드보이"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
  "backdrop": "img/tmdb/rwf5SUTiEsmfkXAgy15R0UtJUtv.jpg"
 },
 {
  "id": "155-goodboy",
  "number": 155,
  "date": "2026-03-10",
  "time": "18:30",
  "format": "Film + dyskusja",
  "film": {
   "title": "Goodboy",
   "director": "Jan Komasa"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "154-kopnelabym-cie-gdybym-mogla",
  "number": 154,
  "date": "2026-03-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kopnęłabym cię, gdybym mogła",
   "director": "Mary Bronstein",
   "year": 2025,
   "original": "If I Had Legs I'd Kick You"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/7HlgL8DkEBs9lsQ0WhARCBeLeEb.jpg",
  "backdrop": "img/tmdb/eLVKuHGx9k8JgLk5JINQDmh9tRH.jpg"
 },
 {
  "id": "153-tajny-agent",
  "number": 153,
  "date": "2026-02-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Tajny agent",
   "director": "Kleber Mendonça Filho"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "152-bez-wyjscia",
  "number": 152,
  "date": "2026-02-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bez wyjścia",
   "director": "Park Chan-wook"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "151-wartosc-sentymentalna",
  "number": 151,
  "date": "2026-02-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wartość sentymentalna",
   "director": "Joachim Trier",
   "year": 2025,
   "original": "Affeksjonsverdi"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/7usTJBFqp8bY0vEWwMYwPtiWnb6.jpg",
  "backdrop": "img/tmdb/mDIMSMXFkOXUyQ2lnmeBu6kDUCH.jpg"
 },
 {
  "id": "150-kill-bill",
  "number": 150,
  "date": "2026-02-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kill Bill",
   "director": "Quentin Tarantino",
   "year": 2003,
   "original": "Kill Bill: Vol. 1"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
  "backdrop": "img/tmdb/iffzIhuLAO38Po6sh1s6ZEVwlNL.jpg"
 },
 {
  "id": "149-najwazniejsze-to-kochac",
  "number": 149,
  "date": "2026-02-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Najważniejsze to kochać",
   "director": "Andrzej Żuławski",
   "year": 1975,
   "original": "L'Important c'est d'aimer"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vYqTNt1M73svh2pXrTOPuIiKeaP.jpg",
  "backdrop": "img/tmdb/jqj5GL6OT1QWM6EASYjm3rbR50W.jpg"
 },
 {
  "id": "148-wichrowe-wzgorza",
  "number": 148,
  "date": "2026-02-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wichrowe wzgórza",
   "director": "Emerald Fennell",
   "year": 2026,
   "original": "“Wuthering Heights”"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/7TBO4qM8dDl3PkR6zRzKWOXBKW7.jpg",
  "backdrop": "img/tmdb/nHKscpZcAPkh97OsJJjyE5yaVE0.jpg"
 },
 {
  "id": "147-delicatessen",
  "number": 147,
  "date": "2026-02-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Delicatessen",
   "director": "Jean-Pierre Jeunet, Marc Caro",
   "year": 1991
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/oPlGvJFhDRYC5XrX2oqiwxTOoE8.jpg",
  "backdrop": "img/tmdb/A3qvUUd36LUF5sfPYOHEd3ahDp2.jpg"
 },
 {
  "id": "146-lsnienie",
  "number": 146,
  "date": "2026-02-03",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Lśnienie",
   "director": "Stanley Kubrick",
   "year": 1980,
   "original": "The Shining"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lMniGq1BYnHOdhEiLOQxGYAKATC.jpg",
  "backdrop": "img/tmdb/AdKA2F1SzYPhSZdEbjH1Zh75UVQ.jpg"
 },
 {
  "id": "145-niedziele",
  "number": 145,
  "date": "2026-02-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Niedziele",
   "director": "Alauda Ruiz de Azúa",
   "year": 2025,
   "original": "Los domingos"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/o7R30uSLHx8V5TYHmvRFXjoUQlG.jpg",
  "backdrop": "img/tmdb/jVwvhKpw6a7c7JmHhMykKAn7buQ.jpg"
 },
 {
  "id": "144-wielki-blekit",
  "number": 144,
  "date": "2026-01-31",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wielki błękit",
   "director": "Luc Besson",
   "year": 1988,
   "original": "Le Grand Bleu"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/8eB0wNCJ3lZV7zmoPl5YH4pl43X.jpg",
  "backdrop": "img/tmdb/1J28PJOkusMN5Ab9Q3oF310e11k.jpg"
 },
 {
  "id": "143-la-grazia",
  "number": 143,
  "date": "2026-01-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "La grazia",
   "director": "Paolo Sorrentino",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/g8x2zmPvlmYobahJRb7enPDa1ZU.jpg",
  "backdrop": "img/tmdb/baIjN7xPyw2In1CuHACTgzcsF20.jpg"
 },
 {
  "id": "142-hamnet",
  "number": 142,
  "date": "2026-01-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Hamnet",
   "director": "Chloé Zhao",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vbeyOZm2bvBXcbgPD3v6o94epPX.jpg",
  "backdrop": "img/tmdb/73BClq9FOcrWrutnpiqhCNEWEwJ.jpg"
 },
 {
  "id": "141-mala-amelia",
  "number": 141,
  "date": "2026-01-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Mała Amelia",
   "director": "Maïlys Vallade, Liane-Cho Han Jin Kuang",
   "year": 2025,
   "original": "Amélie et la métaphysique des tubes"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/xx9cOvV8EuVkU65QNlNQwF6b8OF.jpg",
  "backdrop": "img/tmdb/2WCpiFmRqXyu5y7WoZjEa3CJbiI.jpg"
 },
 {
  "id": "140-wysokie-i-niskie-tony",
  "number": 140,
  "date": "2026-01-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wysokie i niskie tony",
   "director": "Emmanuel Courcol",
   "year": 2024,
   "original": "En fanfare"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/livUPZpqAZMYaK9ndiPWMnHTJ1g.jpg",
  "backdrop": "img/tmdb/fIbr7oWorx5rOzdjOiIFtfFUXzp.jpg"
 },
 {
  "id": "139-glos-hind-rajab",
  "number": 139,
  "date": "2026-01-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Głos Hind Rajab",
   "director": "Kaouther Ben Hania",
   "year": 2025,
   "original": "صوت هند رجب"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/cNGEWPfE3vUGPz6yzFHeI2loVm3.jpg",
  "backdrop": "img/tmdb/nBraEAWIC4DMf5lybx8fNiidtW3.jpg"
 },
 {
  "id": "138-wielki-marty",
  "number": 138,
  "date": "2026-01-09",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wielki Marty",
   "director": "Josh Safdie",
   "year": 2025,
   "original": "Marty Supreme"
  },
  "note": "spotkanie z graczem i pasjonatem tenisa stołowego, Adamem Rurarzem",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/owy4NDDpDL0akInVTYjS8RFBDrY.jpg",
  "backdrop": "img/tmdb/6h7w8R4BA7vubEmEEW5vYEjuoz6.jpg"
 },
 {
  "id": "137-left-handed-girl-to-byla-reka-diabla",
  "number": 137,
  "date": "2025-12-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Left-Handed Girl. To była ręka… diabła!",
   "director": "Shih-Ching Tsou",
   "year": 2025,
   "original": "左撇子女孩"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/19v1ixdwQx3QXi82gsvoZ3BLypm.jpg",
  "backdrop": "img/tmdb/xqft4oJyMATznCFFLpTlQPiSr8N.jpg"
 },
 {
  "id": "136-21-x-nowy-jork",
  "number": 136,
  "date": "2025-12-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "21 x Nowy Jork",
   "director": "Piotr Stasik",
   "year": 2016
  },
  "note": "spotkanie z reżyserem filmu i montażystką Dorotą Wardęszkiewicz (projekcja 🎥 w ramach specjalnych pokazów PISF x MDAG)",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/pKNEJsod4j0f8N4vpHmEaCUoBE2.jpg",
  "backdrop": "img/tmdb/b50ohkF2PTlrEqCfwnoQOak1rd5.jpg"
 },
 {
  "id": "135-siedmiu-samurajow",
  "number": 135,
  "date": "2025-12-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Siedmiu samurajów",
   "director": "Akira Kurosawa",
   "year": 1954,
   "original": "七人の侍"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/kdkFcdjX0ZYW54RyYWx3SWZ45KE.jpg",
  "backdrop": "img/tmdb/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg"
 },
 {
  "id": "134-zgin-kochanie",
  "number": 134,
  "date": "2025-12-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zgiń, kochanie",
   "director": "Lynne Ramsay",
   "year": 2025,
   "original": "Die My Love"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/4nAi0kq1ZVdNbp08YMvuyq1rtmu.jpg",
  "backdrop": "img/tmdb/dEkFlZzj2cb5F7SShvqkL54E4lr.jpg"
 },
 {
  "id": "133-blysk-diamentu-smierci",
  "number": 133,
  "date": "2025-12-09",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Błysk diamentu śmierci",
   "director": "Hélène Cattet, Bruno Forzani",
   "year": 2025,
   "original": "Reflet dans un diamant mort"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/52s0VKi9eicy6V16H7VL73iqzYx.jpg",
  "backdrop": "img/tmdb/AePlQ3osZShJmbNj8tzQ3NoMTQF.jpg"
 },
 {
  "id": "132-eleonor-wspaniala",
  "number": 132,
  "date": "2025-12-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Eleonor Wspaniała",
   "director": "Scarlett Johansson"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "131-tron-we-krwi",
  "number": 131,
  "date": "2025-12-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Tron we krwi",
   "director": "Akira Kurosawa",
   "year": 1957,
   "original": "蜘蛛巣城"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/o5YQcxjawmrb0zQbmlY4jDB39g5.jpg",
  "backdrop": "img/tmdb/rohRr9XqTRF8YwLMGAnTprg3GnL.jpg"
 },
 {
  "id": "130-do-utraty-tchu-nowa-fala",
  "number": 130,
  "date": "2025-12-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Do utraty tchu + Nowa Fala",
   "director": "Jean-Luc Godard, Richard Linklater",
   "year": 1960,
   "original": "À bout de souffle"
  },
  "series": "Specjalny Double Feature na 130 lat kina",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/h9TfhwNJuqyci2AXxr4O8dizsDt.jpg",
  "backdrop": "img/tmdb/4WGuyWf1f94CsEeVIIqDKGw5rmO.jpg"
 },
 {
  "id": "129-dom-dobry",
  "number": 129,
  "date": "2025-12-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dom dobry",
   "director": "Wojtek Smarzowski",
   "year": 2025
  },
  "note": "spotkanie z aktorem Tomaszem Schuchardtem",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ezLtPFCzGYYvCp6NPxIBKI43tDs.jpg",
  "backdrop": "img/tmdb/qoUVkstQfGZlKlKdYC0T98kNrek.jpg"
 },
 {
  "id": "128-lowca-jeleni",
  "number": 128,
  "date": "2025-11-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Łowca Jeleni",
   "director": "Michael Cimino",
   "year": 1978,
   "original": "The Deer Hunter"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/35ebwxRGHRcTKyC39pXufBsD4te.jpg",
  "backdrop": "img/tmdb/a5zBQfXmLk3qqRYF7AioWpiAxk2.jpg"
 },
 {
  "id": "127-dzwieki-milosci",
  "number": 127,
  "date": "2025-11-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dźwięki miłości",
   "director": "Eva Libertad",
   "year": 2025,
   "original": "Sorda"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hfBwdvdp11wiMqdipxIY4dOzBUC.jpg",
  "backdrop": "img/tmdb/AfHILoD0FowwIhG2zlM57V0ogmy.jpg"
 },
 {
  "id": "126-ministranci",
  "number": 126,
  "date": "2025-11-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Ministranci",
   "director": "Piotr Domalewski",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5s5ucjU72GyNf3kiQlmP4OlvdqD.jpg",
  "backdrop": "img/tmdb/hCiqaS1w1tS7Ag2W1AC7R5MiDJC.jpg"
 },
 {
  "id": "125-rocky-horror-picture-show",
  "number": 125,
  "date": "2025-10-31",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rocky Horror Picture Show",
   "director": "Jim Sharman",
   "year": 1975,
   "original": "The Rocky Horror Picture Show"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/wRXCl9mgeme0GKq24DTW5DRW0O6.jpg",
  "backdrop": "img/tmdb/54aVU7tnvDKkX6ibzFg6ke03BV.jpg"
 },
 {
  "id": "124-zycie-dla-poczatkujacych",
  "number": 124,
  "date": "2025-10-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Życie dla początkujących",
   "director": "Paweł Podolski",
   "year": 2025
  },
  "note": "goście spotkania: reżyser Paweł Podolski i scenarzystka Lynn Kucharczyk",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/esQI5U8BuktW5mkarRiOz0jyER0.jpg",
  "backdrop": "img/tmdb/aChKg558GF3h5LAF2DDoRpC8nEM.jpg"
 },
 {
  "id": "123-smashing-machine",
  "number": 123,
  "date": "2025-10-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Smashing Machine",
   "director": "Benny Safdie",
   "year": 2025,
   "original": "The Smashing Machine"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/7Ws1LenBwDkIx70sDZ2mQaZQEQA.jpg",
  "backdrop": "img/tmdb/hTCr9dDf0EcBGZSUaY0YCeBjBr5.jpg"
 },
 {
  "id": "122-kontinental-25",
  "number": 122,
  "date": "2025-10-21",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kontinental '25",
   "director": "Radu Jude",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/9NMekIITIoYAHmyYA0iPEQYNZ7e.jpg",
  "backdrop": "img/tmdb/1FOSov1BN00fJAWl3fF91Bihykr.jpg"
 },
 {
  "id": "121-harry-angel",
  "number": 121,
  "date": "2025-10-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Harry Angel",
   "director": "Alan Parker",
   "year": 1987,
   "original": "Angel Heart"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/thQOrwijbmSvhyaoXTh05IPdT8F.jpg",
  "backdrop": "img/tmdb/viDonz5uLmengw9RUAh3Rf65dQG.jpg"
 },
 {
  "id": "120-po-polowaniu",
  "number": 120,
  "date": "2025-10-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Po polowaniu",
   "director": "Luca Guadagnino",
   "year": 2025,
   "original": "After the Hunt"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/uMSibITWxOp33VhGdwwxYP952hA.jpg",
  "backdrop": "img/tmdb/8jHvHZPiw6h3Xfy0cv3m7H40O8e.jpg"
 },
 {
  "id": "119-chopin-chopin",
  "number": 119,
  "date": "2025-10-05",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chopin, Chopin",
   "director": "Michał Kwieciński",
   "year": 2025,
   "original": "Chopin, Chopin!"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/f4cLh2vVzKH8WCbplPFo6aCMpRC.jpg",
  "backdrop": "img/tmdb/wSM9pIhulPQpKZ26HYkwkYvy6OF.jpg"
 },
 {
  "id": "118-droga-do-vermiglio",
  "number": 118,
  "date": "2025-09-30",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Droga do Vermiglio",
   "director": "Maura Delpero",
   "year": 2024,
   "original": "Vermiglio"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/6buo5I8pAEIXIa8r9oPna9viNZ3.jpg",
  "backdrop": "img/tmdb/fYepNPcgAYHQRMNZW95oOykLRgQ.jpg"
 },
 {
  "id": "117-gentleman-z-rewolwerem",
  "number": 117,
  "date": "2025-09-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Gentleman z rewolwerem",
   "director": "David Lowery",
   "year": 2018,
   "original": "The Old Man & the Gun"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/m2I2l1NYk5KCw4WHNkK5Uk9u4Ah.jpg",
  "backdrop": "img/tmdb/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg"
 },
 {
  "id": "116-lot-nad-kukulczym-gniazdem",
  "number": 116,
  "date": "2025-09-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Lot nad kukułczym gniazdem",
   "director": "Milos Forman",
   "year": 1975,
   "original": "One Flew Over the Cuckoo's Nest"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/3ICRZ5DOBwapO25lphA8yiCWi4v.jpg",
  "backdrop": "img/tmdb/uA8eSNAUUUyfHNIrG4h0zHxzt9W.jpg"
 },
 {
  "id": "115-wielka-odwazna-piekna-podroz",
  "number": 115,
  "date": "2025-09-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wielka, odważna, piękna podróż",
   "director": "Kogonada",
   "year": 2025,
   "original": "A Big Bold Beautiful Journey"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/O31t5icu7Qn7EgpKhfGPFYavo4.jpg",
  "backdrop": "img/tmdb/2ha0wAOqrUcLScStWQcgeOOXapQ.jpg"
 },
 {
  "id": "114-sirat",
  "number": 114,
  "date": "2025-09-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Sirat",
   "director": "Oliver Laxe",
   "year": 2025,
   "original": "Sirāt"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/edcxhFv2S8oD2fsZTNUK1xvJvzE.jpg",
  "backdrop": "img/tmdb/kOUV5WbisWMg56d8eB45ZHEVxYq.jpg"
 },
 {
  "id": "113-cinema-paradiso",
  "number": 113,
  "date": "2025-09-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Cinema Paradiso",
   "director": "Giuseppe Tornatore",
   "year": 1988,
   "original": "Nuovo Cinema Paradiso"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/3hcXpztAe9L6VLpDGwohS01ZSxw.jpg",
  "backdrop": "img/tmdb/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg"
 },
 {
  "id": "112-eddington",
  "number": 112,
  "date": "2025-09-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Eddington",
   "director": "Ari Aster",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/AlNC8hQxj6RUZYqlWoHJ32kImmv.jpg",
  "backdrop": "img/tmdb/znr3SYHph3FtTLpcFTeuMAAJ5mP.jpg"
 },
 {
  "id": "111-czlowiek-slon",
  "number": 111,
  "date": "2025-08-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Człowiek słoń",
   "director": "David Lynch",
   "year": 1980,
   "original": "The Elephant Man"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/qxjlkIADVx8MvtzNXVCtrrYocAV.jpg",
  "backdrop": "img/tmdb/6huSptAsqYg3wbsi1jbMognSgmp.jpg"
 },
 {
  "id": "110-amadeusz",
  "number": 110,
  "date": "2025-08-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Amadeusz",
   "director": "Milos Forman",
   "year": 1984,
   "original": "Amadeus"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/beXwEAVjKAxSyPbYjU31I65td7l.jpg",
  "backdrop": "img/tmdb/rnQyWw68dPHPRtvSWMtLSueXf05.jpg"
 },
 {
  "id": "109-paw-zwyczajny",
  "number": 109,
  "date": "2025-08-21",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Paw zwyczajny",
   "director": "Bernhard Wenger",
   "year": 2025,
   "original": "Pfau - Bin ich echt?"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/pSnl2HbYczT0CvBdHi2fgqKxUE3.jpg",
  "backdrop": "img/tmdb/tqVecLU8um6HDk5KFESBC1Md6dk.jpg"
 },
 {
  "id": "108-boska-sarah-bernhardt",
  "number": 108,
  "date": "2025-08-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Boska Sarah Bernhardt",
   "director": "Guillaume Nicloux"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "107-trzy-kolory-czerwony",
  "number": 107,
  "date": "2025-08-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Trzy kolory: Czerwony",
   "director": "Krzysztof Kieślowski",
   "year": 1994,
   "original": "Trois couleurs : Rouge"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bY9cfsIlhBsI2jEw38QFZldOssl.jpg",
  "backdrop": "img/tmdb/xkk7cqXFzY4aCCG5AYWZCFQFbIX.jpg"
 },
 {
  "id": "106-piknik-pod-wiszaca-skala",
  "number": 106,
  "date": "2025-07-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Piknik pod wiszącą skałą",
   "director": "Peter Weir",
   "year": 1975,
   "original": "Picnic at Hanging Rock"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gyDWfBqvFc837EcPLX3Nt3igGZ0.jpg",
  "backdrop": "img/tmdb/41Mlaj6wfjlF4wQaVH0tjfDXvMi.jpg"
 },
 {
  "id": "105-wielkie-piekno",
  "number": 105,
  "date": "2025-07-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wielkie piękno",
   "director": "Paolo Sorrentino",
   "year": 2013,
   "original": "La grande bellezza"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lH1muJBfCP4vRZoWdsuswFoGzpH.jpg",
  "backdrop": "img/tmdb/4T5d7KGrpx3BTDq9IKm6KpMeeNp.jpg"
 },
 {
  "id": "104-dominion",
  "number": 104,
  "date": "2025-07-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dominion",
   "director": "Steven Bernstein"
  },
  "note": "goście: producent i polski dystrybutor filmu Jacek Szumlas (Solopan Polska) oraz literaturoznawca, pisarz i tłumacz, Maciej Świerkocki. Spotkanie zrealizowane we współpracy z Dom Literatury w Łodzi",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "103-brzydka-siostra",
  "number": 103,
  "date": "2025-06-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Brzydka siostra",
   "director": "Emilie Blichfeldt",
   "year": 2025,
   "original": "Den stygge stesøsteren"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/57L0gexJHK5QD7h8ors8PIzvRov.jpg",
  "backdrop": "img/tmdb/kG8bBajeSTUxJGmS47WujcraZUk.jpg"
 },
 {
  "id": "102-materialisci",
  "number": 102,
  "date": "2025-06-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Materialiści",
   "director": "Celine Song",
   "year": 2025,
   "original": "Materialists"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/eDo0pNruy0Qgj6BdTyHIR4cxHY8.jpg",
  "backdrop": "img/tmdb/lqwwGkwJHtz9QgKtz4zeY19YgDg.jpg"
 },
 {
  "id": "101-skok-na-kasyno",
  "number": 101,
  "date": "2025-06-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Skok na kasyno",
   "director": "Henri Verneuil"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "100-paryz-teksas",
  "number": 100,
  "date": "2025-05-16",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Paryż, Teksas",
   "director": "Wim Wenders",
   "year": 1984,
   "original": "Paris, Texas"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vMr6XqmQ8JLdIdE1V2bu0AugYG.jpg",
  "backdrop": "img/tmdb/fWrq3u16gaBJ6nYNWcR3XaOhQPq.jpg"
 },
 {
  "id": "99-chlopcy-z-ferajny",
  "number": 99,
  "date": "2025-05-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chłopcy z Ferajny",
   "director": "Martin Scorsese",
   "year": 1990,
   "original": "GoodFellas"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/m9taboMOrt6h7sTLkGfOBSqp3qr.jpg",
  "backdrop": "img/tmdb/gILte6Zd7m1YneIr6MVhh30S9pr.jpg"
 },
 {
  "id": "98-portret-kobiety-w-ogniu",
  "number": 98,
  "date": "2025-05-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Portret kobiety w ogniu",
   "director": "Céline Sciamma",
   "year": 2019,
   "original": "Portrait de la jeune fille en feu"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ezwsV3AUa8l9XPWqIAL73wMO0o6.jpg",
  "backdrop": "img/tmdb/ivJ5UzT6IzucLVfbZwCCwiJJoBz.jpg"
 },
 {
  "id": "97-twin-peaks-fire-walk-with-me",
  "number": 97,
  "date": "2025-04-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Twin Peaks: Fire Walk With Me",
   "director": "David Lynch",
   "year": 1992,
   "original": "Twin Peaks: Fire Walk with Me"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bpBUViLSzwdYToJ97Y9MzSn8ivL.jpg",
  "backdrop": "img/tmdb/amGU1FpELmenVvNmPShW58Orepy.jpg"
 },
 {
  "id": "96-utrata-rownowagi",
  "number": 96,
  "date": "2025-04-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Utrata równowagi",
   "director": "Korek Bojanowski",
   "year": 2025
  },
  "note": "spotkanie z twórcami",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/umQRIH49c6qxZEpHJzTNTKJcV6U.jpg",
  "backdrop": "img/tmdb/c5kvWWzbZvCPFdA56fXpQjKCQ0d.jpg"
 },
 {
  "id": "95-glowa-do-wycierania",
  "number": 95,
  "date": "2025-04-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Głowa do wycierania",
   "director": "David Lynch",
   "year": 1977,
   "original": "Eraserhead"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/u5TI2vpGySYIB7was52m6baReRP.jpg",
  "backdrop": "img/tmdb/ApB0mF2d5Oqioi3yxjuogiotSLI.jpg"
 },
 {
  "id": "94-zagubiona-autostrada",
  "number": 94,
  "date": "2025-04-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zagubiona autostrada",
   "director": "David Lynch",
   "year": 1997,
   "original": "Lost Highway"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/IfGigGaTdzt4bFETTusjbiBrbA.jpg",
  "backdrop": "img/tmdb/hGnJhGSeyWlerHcLNnD06sbX5wU.jpg"
 },
 {
  "id": "93-the-last-showgirl",
  "number": 93,
  "date": "2025-03-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "The Last Showgirl",
   "director": "Gia Coppola",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lNhuLz4brOeltuvfuKGk6lHYstY.jpg",
  "backdrop": "img/tmdb/sfhhJmKJBidavKSnCd8ZIMFOOup.jpg"
 },
 {
  "id": "92-queer",
  "number": 92,
  "date": "2025-03-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Queer",
   "director": "Luca Guadagnino",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/zByLzbY1mrrtQneE8aIT1Yd2tYX.jpg",
  "backdrop": "img/tmdb/7bUYzlDz8eel1BVL1Y0YcF9NQmd.jpg"
 },
 {
  "id": "91-diva-futura",
  "number": 91,
  "date": "2025-03-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Diva Futura",
   "director": "Giulia Steigerwalt",
   "year": 2025
  },
  "note": "pokaz w ramach przeglądu Cinema Italia Oggi 2025",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/qLfdMy5LmUlkqgm3jvgVvIbvQWO.jpg",
  "backdrop": "img/tmdb/g8RddI0QqS9ufDDBvQddZSacgP6.jpg"
 },
 {
  "id": "90-diamenty",
  "number": 90,
  "date": "2025-03-21",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Diamenty",
   "director": "Ferzan Ozpetek",
   "year": 2024,
   "original": "Diamanti"
  },
  "note": "pokaz w ramach przeglądu Cinema Italia Oggi 2025",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/go0IdqMLj3KyJHClxSMbputDWs3.jpg",
  "backdrop": "img/tmdb/pbcKKVPlySkjr1oMCQyNKZBoI5A.jpg"
 },
 {
  "id": "89-listy-sycylijskie",
  "number": 89,
  "date": "2025-03-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Listy sycylijskie",
   "director": "Fabio Grassadonia, Antonio Piazza",
   "year": 2024,
   "original": "Iddu - L'ultimo padrino"
  },
  "note": "pokaz w ramach przeglądu Cinema Italia Oggi 2025 · Istituto Italiano Cultura di Varsavia",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/6LO6e2zcdr61qYgBH65gXXmbfhG.jpg",
  "backdrop": "img/tmdb/a4aFQpXV6hfRW4ZEjghVCVArXnu.jpg"
 },
 {
  "id": "88-amelia",
  "number": 88,
  "date": "2025-03-15",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Amelia",
   "director": "Jean-Pierre Jeunet"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "87-mickey-17",
  "number": 87,
  "date": "2025-03-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Mickey 17",
   "director": "Bong Joon-ho",
   "year": 2025
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/v6iybquMIiEytGfdib2K8wOSLoR.jpg",
  "backdrop": "img/tmdb/9PRKAdrDvAdCfg3EcApLTfzGsEt.jpg"
 },
 {
  "id": "86-jak-zostalam-perliczka",
  "number": 86,
  "date": "2025-03-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Jak zostałam perliczką",
   "director": "Rungano Nyoni",
   "year": 2024,
   "original": "On Becoming a Guinea Fowl"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5bSUiaanrl6NazAGFENELlu6j20.jpg",
  "backdrop": "img/tmdb/f2sHokGVEOcJI1Fkgdf21XYhok.jpg"
 },
 {
  "id": "85-bogini-partenope",
  "number": 85,
  "date": "2025-03-09",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bogini Partenope",
   "director": "Paolo Sorrentino",
   "year": 2024,
   "original": "Parthenope"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/e791oEcql3kxrJycSLqhpQgZ6DC.jpg",
  "backdrop": "img/tmdb/fBUaeRfD2mu6T9vNZ1IR3yhccdP.jpg"
 },
 {
  "id": "84-siedem",
  "number": 84,
  "date": "2025-02-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Siedem",
   "director": "David Fincher"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "83-apetyt-na-wiecej-la-cocina",
  "number": 83,
  "date": "2025-02-16",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Apetyt na więcej. La Cocina",
   "director": "Alonso Ruizpalacios",
   "year": 2024,
   "original": "La cocina"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lzPnV47oaw6VCTreQG8eLZ55Vny.jpg",
  "backdrop": "img/tmdb/2yvzBVtMGCtw1Em9a7W1fxuTzIU.jpg"
 },
 {
  "id": "82-dobrzy-nieznajomi",
  "number": 82,
  "date": "2025-02-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dobrzy nieznajomi",
   "director": "Andrew Haigh",
   "year": 2023,
   "original": "All of Us Strangers"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mcqozDUCQXkBmogrXk0R32GJQ35.jpg",
  "backdrop": "img/tmdb/8yjHiSuSEhzR916LcIecuQ8tETG.jpg"
 },
 {
  "id": "81-nieprzyjaciel",
  "number": 81,
  "date": "2025-02-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Nieprzyjaciel",
   "director": "Michał Krzywicki",
   "year": 2025
  },
  "note": "po filmie spotkanie z reżyserem",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/VlrXMrKWg9W2MW7P31PMcPXywl.jpg",
  "backdrop": "img/tmdb/jY4oR0wCENlkTkpo16oJCtBTUoE.jpg"
 },
 {
  "id": "80-jutro-o-swicie",
  "number": 80,
  "date": "2025-02-02",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Jutro o świcie",
   "director": "Rúnar Rúnarsson",
   "year": 2024,
   "original": "Ljósbrot"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gIt4PG4ZJJ1ZiduqExGKKvDwvvf.jpg",
  "backdrop": "img/tmdb/A5ExfKwefjBy17qlbpHMt1zG3Uu.jpg"
 },
 {
  "id": "79-sebastian",
  "number": 79,
  "date": "2025-01-29",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Sebastian",
   "director": "Mikko Mäkelä",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/22JTGme2MLETmvhHQdiKP78S5Qf.jpg",
  "backdrop": "img/tmdb/kEvBFfqCtJvtvwZcrprAT3dSvij.jpg"
 },
 {
  "id": "78-babygirl",
  "number": 78,
  "date": "2025-01-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Babygirl",
   "director": "Halina Reijn",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ilwO6elz3mLV9CToT7C8pjVeKX0.jpg",
  "backdrop": "img/tmdb/s7vWRjcfRVMW8tBIxhC3UhKxRoo.jpg"
 },
 {
  "id": "77-nasienie-swietej-figi",
  "number": 77,
  "date": "2025-01-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Nasienie świętej figi",
   "director": "Mohammad Rasoulof",
   "year": 2024,
   "original": "Les Graines du figuier sauvage"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lIz9bjOxU6qwmzkWKzROiPKkcnr.jpg",
  "backdrop": "img/tmdb/zqZzYVE4DWv92xrYSCEELPcLnUP.jpg"
 },
 {
  "id": "76-flow",
  "number": 76,
  "date": "2025-01-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Flow",
   "director": "Gints Zilbalodis",
   "year": 2024,
   "original": "Straume"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/z2sG41PxfL1hnL1mHbxzSREUtOf.jpg",
  "backdrop": "img/tmdb/pZfpUMEJzw9BZHtXuZzzOrRxtMa.jpg"
 },
 {
  "id": "75-the-brutalist",
  "number": 75,
  "date": "2025-01-16",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "The Brutalist",
   "director": "Brady Corbet",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/ev9eAFOgQJiWDJqogk2fswJYGpr.jpg",
  "backdrop": "img/tmdb/hmZnqijPaaACjenDkrbWcCmcADI.jpg"
 },
 {
  "id": "74-the-outrun",
  "number": 74,
  "date": "2025-01-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "The Outrun",
   "director": "Nora Fingscheidt",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/jUOT5yRVUsZxMU9mmBniBu4txc2.jpg",
  "backdrop": "img/tmdb/8xTvH93bQl0AxMMeVkrlao2bMui.jpg"
 },
 {
  "id": "73-balkoniary",
  "number": 73,
  "date": "2025-01-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Balkoniary",
   "director": "Noemi Merlant"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "72-slony-karmel",
  "number": 72,
  "date": "2024-12-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Słony karmel",
   "director": "Michał Węgrzyn",
   "year": 2024
  },
  "note": "spotkanie z reżyserem filmu",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/1fy3y7QBsaZDJiMxqqOYXwEU6tj.jpg",
  "backdrop": "img/tmdb/lIxhy2caDyfdivHA2ykcQALeWBd.jpg"
 },
 {
  "id": "71-kiedy-nadchodzi-jesien",
  "number": 71,
  "date": "2024-12-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kiedy nadchodzi jesień",
   "director": "Francois Ozon",
   "year": 2024,
   "original": "Quand vient l'automne"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/zEhKOyBjwIVAulYMBge09p7zIFy.jpg",
  "backdrop": "img/tmdb/z3zeYgp8P8SqTypwatOHINDCnHM.jpg"
 },
 {
  "id": "70-woyzeck",
  "number": 70,
  "date": "2024-12-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Woyzeck",
   "director": "Werner Herzog",
   "year": 1979
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/8O2PuxOdBVJSeU6kjP7ukZgA26n.jpg",
  "backdrop": "img/tmdb/7J9mhvkKH6kvjshBNNcEJungJvG.jpg"
 },
 {
  "id": "69-drzewa-milcza",
  "number": 69,
  "date": "2024-12-05",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Drzewa milczą",
   "director": "Agnieszka Zwiefka",
   "year": 2024
  },
  "note": "spotkanie z reżyserką po pokazie",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bUFaBoAzhxYyO1LvHotDHQovUX8.jpg",
  "backdrop": "img/tmdb/jnmgp5OMgo8npwZHnjM4NI487Eb.jpg"
 },
 {
  "id": "68-crossing",
  "number": 68,
  "date": "2024-11-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Crossing",
   "director": "Levan Akin",
   "year": 2024,
   "original": "გადასვლა"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/iJa6e7BjWBlBQyWsUYLTeogeemd.jpg",
  "backdrop": "img/tmdb/gZmX1yjRKXFfRO7jjnLn6VuKycT.jpg"
 },
 {
  "id": "67-rok-z-zycia-kraju",
  "number": 67,
  "date": "2024-11-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rok z życia kraju",
   "director": "Tomasz Wolski",
   "year": 2024
  },
  "note": "spotkanie z reżyserem",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/8UcqDflu0bzvxgKGZO6Vdffy1YW.jpg",
  "backdrop": "img/tmdb/ohZyQuLhFF06fhzVgaB4Q67k7k6.jpg"
 },
 {
  "id": "66-anora",
  "number": 66,
  "date": "2024-11-22",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Anora",
   "director": "Sean Baker",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/v1W88wf5jjMIh3XPluUjWGWHQ0S.jpg",
  "backdrop": "img/tmdb/88nIQnyDyYfEpR7s9hwbfhJuxK9.jpg"
 },
 {
  "id": "65-dziewczyna-z-igla",
  "number": 65,
  "date": "2024-11-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dziewczyna z igłą",
   "director": "Magnus von Horn",
   "year": 2024,
   "original": "Pigen med nålen"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/o0Q7YNGvEXTzjoR8JxvqsPLZrie.jpg",
  "backdrop": "img/tmdb/uwACVNL5OpiI3oT72DVGxnU4SRV.jpg"
 },
 {
  "id": "64-zla-nie-ma",
  "number": 64,
  "date": "2024-11-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zła nie ma",
   "director": "Ryûsuke Hamaguchi",
   "year": 2023,
   "original": "悪は存在しない"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/vtVHflysU5heeNhLWvT9qmlVfm3.jpg",
  "backdrop": "img/tmdb/dojVTVK4H2Q0tx2A9NJSnI79OPm.jpg"
 },
 {
  "id": "63-pod-skora",
  "number": 63,
  "date": "2024-11-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Pod skórą",
   "director": "Jonathan Glazer",
   "year": 2014,
   "original": "Under the Skin"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bJCAp9bhuTOmbiZ1GludILnZi3d.jpg",
  "backdrop": "img/tmdb/eS5OdKN3kRZXQbWRSSCJ4Gh0z26.jpg"
 },
 {
  "id": "62-wszystko-ma-zyc",
  "number": 62,
  "date": "2024-10-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wszystko ma żyć",
   "director": "Tetyana Dorodnitsyna"
  },
  "note": "spotkanie z producentką Anną Bławut i autorem muzyki Jackiem Bławutem",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "61-nieumarli",
  "number": 61,
  "date": "2024-10-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Nieumarli",
   "director": "Thea Hvistendahl",
   "year": 2024,
   "original": "Håndtering av udøde"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/aYWF714Cn7WD3ZNng9Pun25xEK1.jpg",
  "backdrop": "img/tmdb/c2Gd2QwQx7IITMUoJgcckqMniqd.jpg"
 },
 {
  "id": "60-megalopolis",
  "number": 60,
  "date": "2024-10-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Megalopolis",
   "director": "Francis Ford Coppola",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/doVWgLdNyK36nEyyZgVsEWFCO1e.jpg",
  "backdrop": "img/tmdb/1DHbZ1XRvdeXbD2P7W1OJbxqN9b.jpg"
 },
 {
  "id": "59-wanda-rutkiewicz-ostatnia-wyprawa",
  "number": 59,
  "date": "2024-10-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wanda Rutkiewicz. Ostatnia wyprawa",
   "director": "Eliza Kubarska",
   "year": 2024,
   "original": "Ostatnia wyprawa"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/4GqhKlepi1KUnFMv3m6n7uNaXaZ.jpg",
  "backdrop": "img/tmdb/vUmZyMUC2u6AnUhVU0jEinKPP74.jpg"
 },
 {
  "id": "58-wybraniec",
  "number": 58,
  "date": "2024-10-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wybraniec",
   "director": "Ali Abbasi",
   "year": 2024,
   "original": "The Apprentice"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/khp7PZ6g1PJHw5XWdML2zhqdPGO.jpg",
  "backdrop": "img/tmdb/kv9xVrxfLpudBLyYf1QvLCpUQuy.jpg"
 },
 {
  "id": "57-kulej-dwie-strony-medalu",
  "number": 57,
  "date": "2024-10-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kulej. Dwie strony medalu",
   "director": "Xavery Żuławski"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "56-rysopis-znaleziony-po-latach",
  "number": 56,
  "date": "2024-10-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rysopis znaleziony po latach",
   "director": "Sławomir Rogowski, Stanisław Zawiśliński"
  },
  "note": "spotkanie z gośćmi współprowadzone z Elżbietą Czarnecką",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "55-wspomnienia-plonacego-ciala",
  "number": 55,
  "date": "2024-10-02",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wspomnienia płonącego ciała",
   "director": "Antonella Sudasassi Furniss",
   "year": 2024,
   "original": "Memorias de un cuerpo que arde"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/oNW81ZU8j0nTTbkGMTf8MjcCGT4.jpg",
  "backdrop": "img/tmdb/2jLTKV8M4m3ry6JQQ5fnqePr2vc.jpg"
 },
 {
  "id": "54-w-zawieszeniu-in-limbo",
  "number": 54,
  "date": "2024-10-01",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "W zawieszeniu/In Limbo",
   "director": "Alina Maksimenko",
   "year": 2024,
   "original": "W zawieszeniu"
  },
  "note": "spotkanie z reżyserką i producentem filmu Filipem Marczewskim dzięki Wajda School & Studio",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/kRT03zIxNa97lQHbqLMA9Ycud4e.jpg"
 },
 {
  "id": "53-druzyna-a-a",
  "number": 53,
  "date": "2024-09-21",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Drużyna A(A)",
   "director": "Daniel Jaroszek",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/sMNjsStz465QjWDcCx7mgphqLcA.jpg",
  "backdrop": "img/tmdb/oOoz4Ev0FaohSQGbskiN7uTEA8l.jpg"
 },
 {
  "id": "52-nie-obiecujcie-sobie-zbyt-wiele-po-koncu-swiata",
  "number": 52,
  "date": "2024-09-20",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Nie obiecujcie sobie zbyt wiele po końcu świata",
   "director": "Radu Jude",
   "year": 2023,
   "original": "Nu Aștepta Prea Mult de la Sfârșitul Lumii"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/dX1XWD9whv1NUrc0i4NeFM6BPLH.jpg",
  "backdrop": "img/tmdb/9j7bPqtsbIzhMwVYD6deKsGhzys.jpg"
 },
 {
  "id": "51-marcello-mio",
  "number": 51,
  "date": "2024-09-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Marcello Mio",
   "director": "Christophe Honoré",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/xQ5v2jqjPBt6T71OIBnTFkDXUz4.jpg",
  "backdrop": "img/tmdb/aCA4sHUWU8qaGXCw3TVD2qzzQXW.jpg"
 },
 {
  "id": "50-another-end",
  "number": 50,
  "date": "2024-09-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Another End",
   "director": "Piero Messina",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/fuWWd7pQYGv21av3HonQg6oCkZL.jpg",
  "backdrop": "img/tmdb/jxvkfgYvAHn0ps874wgCirRfCyT.jpg"
 },
 {
  "id": "49-armand",
  "number": 49,
  "date": "2024-09-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Armand",
   "director": "Halfdan Ullmann Tøndel",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/6Pz3dRdvx9ZqNmYcVLDnBWvoBWk.jpg",
  "backdrop": "img/tmdb/yC26uOPaXcyAj44nXsw4jGIuHSj.jpg"
 },
 {
  "id": "48-wytlumaczenie-wszystkiego",
  "number": 48,
  "date": "2024-09-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wytłumaczenie wszystkiego",
   "director": "Gabor Reisz",
   "year": 2023,
   "original": "Magyarázat mindenre"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/uibYY7Awev2U5xAJeEKQbQNEDBK.jpg",
  "backdrop": "img/tmdb/feWZmzNPLrJo0cBy5ORlGeMkaJy.jpg"
 },
 {
  "id": "47-bestia",
  "number": 47,
  "date": "2024-09-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bestia",
   "director": "Bertrand Bonello"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "46-substancja",
  "number": 46,
  "date": "2024-09-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Substancja",
   "director": "Coralie Fargeat",
   "year": 2024,
   "original": "The Substance"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/eDghsNBgWC5AtJ3BQ5ghQXKqXUC.jpg",
  "backdrop": "img/tmdb/bVSOgrxasVJF6V71T7v2KfBRSzu.jpg"
 },
 {
  "id": "45-love-lies-bleeding",
  "number": 45,
  "date": "2024-07-29",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Love Lies Bleeding",
   "director": "Rose Glass",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/xImj8RLe39YK0lyVu9kXv7ApN8p.jpg",
  "backdrop": "img/tmdb/oMiKHO3H5RixfLsiU5Vumhlp5sj.jpg"
 },
 {
  "id": "44-kolacja-pozegnalna",
  "number": 44,
  "date": "2024-04-30",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kolacja pożegnalna",
   "director": "Lukas Nathrath",
   "year": 2023,
   "original": "Letzter Abend"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/xMbHojdJ0j1Ubt8Q5DMpsGMxZuh.jpg",
  "backdrop": "img/tmdb/b2dw2MNaG2y7ZTS4tOLp8kkCQaX.jpg"
 },
 {
  "id": "43-powoli",
  "number": 43,
  "date": "2024-04-29",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Powoli",
   "director": "Marija Kavtaradze",
   "year": 2023,
   "original": "Tu man nieko neprimeni"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/nyPEiaebagByy40uMqKEHUBarAT.jpg",
  "backdrop": "img/tmdb/rJ9fsSZy006YB8Ahk4CKkdea5EK.jpg"
 },
 {
  "id": "42-challengers",
  "number": 42,
  "date": "2024-04-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Challengers",
   "director": "Luca Guadagnino",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/lMdeHo0AXXTkMJtYZrq5h634FdL.jpg",
  "backdrop": "img/tmdb/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg"
 },
 {
  "id": "41-jutro-bedzie-nasze",
  "number": 41,
  "date": "2024-04-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Jutro będzie nasze",
   "director": "Paola Cortellesi",
   "year": 2023,
   "original": "C'è ancora domani"
  },
  "note": "projekcja w ramach przeglądu Cinema Italia Oggi · gościni: prof. Monika Talarczyk",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/hc9SHN0vB6iyr6MBYI6bKrpDHvJ.jpg",
  "backdrop": "img/tmdb/fNXUCk54vGcoKr34olN14ohUSFY.jpg"
 },
 {
  "id": "40-wyrok",
  "number": 40,
  "date": "2024-04-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Wyrok",
   "director": "Marwan Mokbel"
  },
  "note": "projekcja w ramach LGBT · Film Festival Poland",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "39-the-old-oak",
  "number": 39,
  "date": "2024-04-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "The Old Oak",
   "director": "Ken Loach",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/xN293BKB0MDqpILmLCtGGYxQXKW.jpg",
  "backdrop": "img/tmdb/H8YE8DDrnvr869RgCqLvhfcUFM.jpg"
 },
 {
  "id": "38-civil-war",
  "number": 38,
  "date": "2024-04-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Civil War",
   "director": "Alex Garland",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/5uweuHASCFJRleFvCR9N94wRqjg.jpg",
  "backdrop": "img/tmdb/t2SXZ7KLriaLyf5QT8Iar6fSOGp.jpg"
 },
 {
  "id": "37-anselm",
  "number": 37,
  "date": "2024-04-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Anselm",
   "director": "Wim Wenders",
   "year": 2023,
   "original": "Anselm – Das Rauschen der Zeit"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/x8xM4vt4gWiklB3Jnz3dITaR09o.jpg",
  "backdrop": "img/tmdb/uXkyaqoc8wgujotPCeUARrqVdOv.jpg"
 },
 {
  "id": "36-rosalie",
  "number": 36,
  "date": "2024-04-05",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Rosalie",
   "director": "Stephanie di Giusto",
   "year": 2024
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/miEXp9GcK8bCnsNN1njOzAzYDMa.jpg",
  "backdrop": "img/tmdb/nEvqsqcZ7NZIFtkxKXJvD2cLwaT.jpg"
 },
 {
  "id": "35-orlando-moja-polityczna-biografia",
  "number": 35,
  "date": "2024-03-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Orlando – moja polityczna biografia",
   "director": "Paul B. Preciado",
   "year": 2023,
   "original": "Orlando, ma biographie politique"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/bNkOnohGRN2hXjYmSeSlTvf2IpV.jpg",
  "backdrop": "img/tmdb/jECOPYK7aJhJsXUGcL74SRS4Rtg.jpg"
 },
 {
  "id": "34-na-samym-dnie",
  "number": 34,
  "date": "2024-03-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Na samym dnie",
   "director": "Jerzy Skolimowski",
   "year": 1971,
   "original": "Deep End"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/nEhFiGGO5QLrsrZgA7PetiFxrjT.jpg",
  "backdrop": "img/tmdb/zZ0bs8rPbd0FppyJq5ukaATh745.jpg"
 },
 {
  "id": "33-pamiec",
  "number": 33,
  "date": "2024-03-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Pamięć",
   "director": "Michel Franco"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "32-bekart",
  "number": 32,
  "date": "2024-03-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bękart",
   "director": "Nikolaj Arcel",
   "year": 2023,
   "original": "Bastarden"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/VFl6STJnUXdTxUlVv6693ccSDM.jpg",
  "backdrop": "img/tmdb/pERcOAR1Teg4sLDDqRXj1TBjVsn.jpg"
 },
 {
  "id": "31-oppenheimer",
  "number": 31,
  "date": "2024-03-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Oppenheimer",
   "director": "Christopher Nolan",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gBrW3l0GsN7fvrn6A7ofaw90qj4.jpg",
  "backdrop": "img/tmdb/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg"
 },
 {
  "id": "30-mur",
  "number": 30,
  "date": "2024-03-03",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Mur",
   "director": "Kasia Smutniak",
   "year": 2023
  },
  "note": "gościni: aktorka i reżyserka Kasia Smutniak, aktywista Mariusz Kurnyta alias „Człowiek lasu”",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mJz34dlWo4cas2XLjZqOnzm9twf.jpg",
  "backdrop": "img/tmdb/uDDhJHLPDQk46wnpHLGFvd8rA77.jpg"
 },
 {
  "id": "29-zegnajcie-laleczki",
  "number": 29,
  "date": "2024-03-02",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Żegnajcie laleczki",
   "director": "Ethan Coen",
   "year": 2024,
   "original": "Drive-Away Dolls"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/zXTeqBAxuTIeOzj2AdieqrdZimG.jpg",
  "backdrop": "img/tmdb/thFSP3fBwqBYUZUyIAmaHuwNkvB.jpg"
 },
 {
  "id": "28-biala-odwaga",
  "number": 28,
  "date": "2024-02-25",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Biała odwaga",
   "director": "Marcin Koszałka",
   "year": 2024
  },
  "note": "goście: reżyser, scenarzysta i operator Marcin Koszałka i aktor Adam Woronowicz",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/aL1geO7bgA35ROAPzurb7jwPUmJ.jpg",
  "backdrop": "img/tmdb/bFDmcYlIWArl0Bw6MkdEOGKT9jM.jpg"
 },
 {
  "id": "27-perfect-days",
  "number": 27,
  "date": "2024-02-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Perfect Days",
   "director": "Wim Wenders",
   "year": 2023,
   "original": "PERFECT DAYS"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/q8ijYu3YqbxBvEGXoVYAIQqEzN7.jpg",
  "backdrop": "img/tmdb/7WBIaphEm09Z8WFBo85kWGxYYkk.jpg"
 },
 {
  "id": "26-20-dni-w-mariupolu",
  "number": 26,
  "date": "2024-02-24",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "20 dni w Mariupolu",
   "director": "Mstyslav Chernov",
   "year": 2023,
   "original": "20 Days in Mariupol"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/zIRp1IeuPh4GgqFCH3y0DQuY9xP.jpg",
  "backdrop": "img/tmdb/986n9SAXsuxpPJzFAWK3azPknX0.jpg"
 },
 {
  "id": "25-cztery-corki",
  "number": 25,
  "date": "2024-02-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Cztery córki",
   "director": "Kaouther Ben Hania",
   "year": 2023,
   "original": "Les Filles d'Olfa"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/pEP7n1xxaDTlRIz2dk1VG4XnaVq.jpg",
  "backdrop": "img/tmdb/k7bPM2CFFpJfGgSmY1B9EG9xmnI.jpg"
 },
 {
  "id": "24-pokoj-nauczycielski",
  "number": 24,
  "date": "2024-02-18",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Pokój nauczycielski",
   "director": "Ilker Çatak",
   "year": 2023,
   "original": "Das Lehrerzimmer"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/jL2KByrqyBgYT1CaFuuLHTvxrtI.jpg",
  "backdrop": "img/tmdb/7RxhC2ntrglVl1nkKjAgNoO0XP.jpg"
 },
 {
  "id": "23-monster",
  "number": 23,
  "date": "2024-02-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Monster",
   "director": "Hirokazu Koreeda"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "22-strefa-interesow",
  "number": 22,
  "date": "2024-02-11",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Strefa interesów",
   "director": "Jonathan Glazer",
   "year": 2023,
   "original": "The Zone of Interest"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/mjPOHmLivqBN9Aj1VDDrv5SOoIo.jpg",
  "backdrop": "img/tmdb/pnTSOKcYnvdpQNQElAtJM1rWOxH.jpg"
 },
 {
  "id": "21-priscilla",
  "number": 21,
  "date": "2024-02-04",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Priscilla",
   "director": "Sofia Coppola",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/dANYVEFmYdV4R6MjL4whzx8tlBD.jpg",
  "backdrop": "img/tmdb/zz219ZRGo0vVIzvKttjx5nXOc2N.jpg"
 },
 {
  "id": "20-anatomia-upadku",
  "number": 20,
  "date": "2024-02-03",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Anatomia upadku",
   "director": "Justine Triet",
   "year": 2023,
   "original": "Anatomie d'une chute"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/w0lVbJFCYA5Nz8rdpBIHHnZi7Xq.jpg",
  "backdrop": "img/tmdb/lDVl2jf6VB8ODl1olZ6FLvOV1gX.jpg"
 },
 {
  "id": "19-opadajace-liscie",
  "number": 19,
  "date": "2024-02-02",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Opadające liście",
   "director": "Aki Kaurismäki",
   "year": 2023,
   "original": "Kuolleet lehdet"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/quW2QT1QksPjmM9c8mU2Ty0GO9V.jpg",
  "backdrop": "img/tmdb/cru4rjGcdHGhnPyjNXvW82jOrif.jpg"
 },
 {
  "id": "18-bracia-ze-stali",
  "number": 18,
  "date": "2024-01-26",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Bracia ze stali",
   "director": "Sean Durkin",
   "year": 2023,
   "original": "The Iron Claw"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/9Ob9SxZuOUdQS51v8EOtGbt0eq2.jpg",
  "backdrop": "img/tmdb/mTJgBqtRNOMox06T40q6AyXfhGP.jpg"
 },
 {
  "id": "17-chlopiec-i-czapla",
  "number": 17,
  "date": "2024-01-14",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chłopiec i czapla",
   "director": "Hayao Mizayaki"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "16-biedne-istoty",
  "number": 16,
  "date": "2024-01-13",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Biedne istoty",
   "director": "Jorgos Lanthimos"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "15-pies-i-robot",
  "number": 15,
  "date": "2024-01-07",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Pies i robot",
   "director": "Pablo Berger",
   "year": 2023,
   "original": "Robot Dreams"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/2UL8aZu39AzY9tde2mzGAYk9XBO.jpg",
  "backdrop": "img/tmdb/hIeEpk2w1dnC9ly9ZJwwbunH2Cx.jpg"
 },
 {
  "id": "14-club-zero",
  "number": 14,
  "date": "2024-01-05",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Club Zero",
   "director": "Jessica Hausner",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/enWQEt3smRftRY1VGHsElZ8xZFu.jpg",
  "backdrop": "img/tmdb/z0cYoSjZ1sH9oKBDhJeQxlxIYh.jpg"
 },
 {
  "id": "13-opetanie",
  "number": 13,
  "date": "2023-12-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Opętanie",
   "director": "Andrzej Żuławski",
   "year": 1981,
   "original": "Possession"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/A9bnRn05riOKWftvQlLKa2gl51n.jpg",
  "backdrop": "img/tmdb/zfw3fcF7d4KcWYEvps4zUfl303b.jpg"
 },
 {
  "id": "12-skad-dokad",
  "number": 12,
  "date": "2023-11-23",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Skąd dokąd",
   "director": "Maciej Hamela"
  },
  "note": "gość: montażysta Piotr Ogiński",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "11-dogman",
  "number": 11,
  "date": "2023-11-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Dogman",
   "director": "Luc Besson",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/fXAjAflHPKJbLYwuIJC9APaq9A9.jpg",
  "backdrop": "img/tmdb/nvW0QfRJ7ga9TK8DKwBfAPA8ywP.jpg"
 },
 {
  "id": "10-how-to-have-sex",
  "number": 10,
  "date": "2023-11-10",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "How to have sex",
   "director": "Molly Manning Walker",
   "year": 2023,
   "original": "How to Have Sex"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/6d8dUjZFqlfe9IpbQ0u9eBdmyMv.jpg",
  "backdrop": "img/tmdb/akvlTeB0LiNzw9U9YCAB8wwb5Qo.jpg"
 },
 {
  "id": "9-porwany",
  "number": 9,
  "date": "2023-11-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Porwany",
   "director": "Marco Bellocchio"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "8-fin-del-mundo",
  "number": 8,
  "date": "2023-10-30",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Fin del Mundo",
   "director": "Piotr Dumała",
   "year": 2024,
   "original": "Fin del mundo?"
  },
  "note": "gość: reżyser Piotr Dumała",
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/46qHoYSNgzsQvDD9jvhtZmzFmYy.jpg",
  "backdrop": "img/tmdb/lZ7g2Nh8Vc5CRPsTR5gWBvxoh8j.jpg"
 },
 {
  "id": "7-zabojca",
  "number": 7,
  "date": "2023-10-27",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Zabójca",
   "director": "David Fincher"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "6-chlopi",
  "number": 6,
  "date": "2023-10-12",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chłopi",
   "director": "DK Welchman & Hugh Welchman",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/wMkXVCDdQDWAV8dTZKUO1O3T8Mq.jpg",
  "backdrop": "img/tmdb/6U6F2OnHTLs1Pxk8ZVDCRbd3a76.jpg"
 },
 {
  "id": "5-disco-boy",
  "number": 5,
  "date": "2023-10-06",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Disco Boy",
   "director": "Giacomo Abbruzzese",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/gY8GcuoVbtOc6ziAXX5wm0k9vgO.jpg",
  "backdrop": "img/tmdb/fGVLgcajve9IoLxvFlkn8aFFMVE.jpg"
 },
 {
  "id": "4-turkusowa-sukienka",
  "number": 4,
  "date": "2023-09-08",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Turkusowa sukienka",
   "director": "Maryam Touzani"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": []
 },
 {
  "id": "3-kochanica-krola",
  "number": 3,
  "date": "2023-08-19",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Kochanica króla",
   "director": "Maïwenn",
   "year": 2023,
   "original": "Jeanne du Barry"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/csOM9ekSPUjCjHVvsjYd0jFaaL9.jpg",
  "backdrop": "img/tmdb/5BFpmELJKE5cZxtOpGJYAdIRybF.jpg"
 },
 {
  "id": "2-barbie",
  "number": 2,
  "date": "2023-07-28",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Barbie",
   "director": "Greta Gerwig",
   "year": 2023
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  "backdrop": "img/tmdb/1esAE8sLJRWWFsLLeh5r3g2WanI.jpg"
 },
 {
  "id": "1-chlopiec-z-niebios",
  "number": 1,
  "date": "2023-06-17",
  "time": "",
  "format": "Film + dyskusja",
  "film": {
   "title": "Chłopiec z niebios",
   "director": "Tarik Saleh",
   "year": 2022,
   "original": "La Conspiration du Caire"
  },
  "description": "",
  "ticketUrl": "",
  "image": "",
  "summary": "",
  "gallery": [],
  "poster": "img/tmdb/cu5nSvzZBBas18tHj9mWKstPcaw.jpg",
  "backdrop": "img/tmdb/5pUJhaYpDdmOiyMvCh3G1R6G1wi.jpg"
 }
];
