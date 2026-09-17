/* Personal site — language toggle, theme toggle and the command bar.
   No build step: this file ships as-is, and is shared by the index and every
   page under projects/. Pages one level down set data-root="../" on <html>. */
(function () {
  "use strict";

  /* Every project mirrors an entry in content/projects/ on the sister repo
     (github.com/RAGNAROS-HS/Mushin). Order follows Hugo weight, then date. */
  var PROJECTS = [
    { slug: "stumberg",        name: "Stumberg",       status: "discontinued" },
    { slug: "simurgh",         name: "Simurgh",        status: "complete" },
    { slug: "zamin",           name: "Zamin",          status: "active" },
    { slug: "halghe",          name: "Jadid Halghe",   status: "active" },
    { slug: "tosach",          name: "Tosach",         status: "limbo" },
    { slug: "goswin",          name: "Goswin",         status: "active" },
    { slug: "mushin",          name: "Mushin",         status: "active" },
    { slug: "himantes",        name: "Himantes",       status: "abandoned" },
    { slug: "bachelor-thesis", name: "Bachelor Thesis", status: "complete" }
  ];

  var STRINGS = {
    en: {
      n1: "whoami", n2: "timeline", n3: "projects", cv: "resume", cvfile: "pdfs/CV2_0.pdf",
      role: "infrastructure engineering",
      hint: "type `help`",
      bio: "Two years of IT and information security operations, moving into infrastructure engineering. Identity lifecycle, disaster recovery testing and incident response in production, plus self-hosted Linux infrastructure I provision, harden and run myself. MSc AI student preparing for LFCS and CKA, drawn to systems that report healthy while quietly producing degraded output.",
      b1: "work/", b2: "education/", b3: "certs/", b4: "languages/", b5: "infra/",
      r1: "Data, Automation & AI Intern",
      r2: "AI Team",
      r3: "Information Security Intern",
      r4: "IT Intern",
      r5: "Shop Assistant",
      r6: "Housekeeper",
      w1: "apr 2026 – present", w2: "feb 2026 – present",
      w3: "jun 2025 – jul 2025", w4: "jun 2024 – may 2025",
      w5: "jan 2024 – jun 2024", w6: "jul 2023 – aug 2023",
      e1: "MSc Artificial Intelligence", e2: "BSc Computer Science", e3: "Secondary school",
      em1: "AI for Health · VU / UvA", em3: "K. I. Gałczyński School · Olsztyn, PL",
      ew: "in progress", ew2: "completed",
      c1: "LFCS", c2: "CKA", cw: "preparing",
      c3: "UAV Operator Certificate", c4: "Motorboat Helmsman", c5: "WOPR 2nd Degree Lifeguard",
      l1: "Polish", l2: "English", l3: "German",
      lw1: "native", lw2: "Cambridge C2, grade A", lw3: "DSD Stufe II, C1",
      i1: "Self-hosted Linux infrastructure", iw: "provision · harden · maintain",
      entries: "entries",
      /* project one-liners, mirroring each page's summary */
      p1: "Personal AI agent — LangGraph, four modes, persistent threads",
      p2: "Chess impossibility recognition using a ResNet-20",
      p3: "Back to basics: ML algorithms written from scratch",
      p4: "Teaching RL agents to dominate an agar.io clone",
      p5: "Scene text recognition with a CRNN",
      p6: "n8n workflow automation, kept off GitHub",
      p7: "This very website",
      p8: "Pokémon type classifier and generator",
      p9: "Detecting collapsed buildings with UNET++",
      back: "back to projects"
    },
    pl: {
      n1: "o-mnie", n2: "kariera", n3: "projekty", cv: "cv", cvfile: "pdfs/CVPOL2_0.pdf",
      role: "inżynieria infrastruktury",
      hint: "wpisz `help`",
      bio: "Dwa lata doświadczenia w IT i bezpieczeństwie informacji, obecnie w kierunku inżynierii infrastruktury. Zarządzanie cyklem życia tożsamości, testy odtwarzania po awarii i obsługa incydentów na środowiskach produkcyjnych, a do tego własna infrastruktura na Linuksie, którą sam stawiam, utwardzam i utrzymuję. Student studiów magisterskich ze sztucznej inteligencji, przygotowujący się do LFCS i CKA.",
      b1: "praca/", b2: "edukacja/", b3: "certyfikaty/", b4: "języki/", b5: "infrastruktura/",
      r1: "Stażysta ds. danych, automatyzacji i AI",
      r2: "Zespół AI",
      r3: "Stażysta ds. bezpieczeństwa informacji",
      r4: "Stażysta IT",
      r5: "Pracownik sklepu",
      r6: "Pracownik obsługi hotelowej",
      w1: "kwiecień 2026 – obecnie", w2: "luty 2026 – obecnie",
      w3: "czerwiec 2025 – lipiec 2025", w4: "czerwiec 2024 – maj 2025",
      w5: "styczeń 2024 – czerwiec 2024", w6: "lipiec 2023 – sierpień 2023",
      e1: "Magister sztucznej inteligencji", e2: "Licencjat z informatyki", e3: "Liceum",
      em1: "AI for Health · VU / UvA", em3: "Szkoła im. K. I. Gałczyńskiego · Olsztyn",
      ew: "w toku", ew2: "ukończone",
      c1: "LFCS", c2: "CKA", cw: "w przygotowaniu",
      c3: "Świadectwo operatora BSP", c4: "Sternik motorowodny", c5: "Ratownik WOPR II stopnia",
      l1: "polski", l2: "angielski", l3: "niemiecki",
      lw1: "ojczysty", lw2: "Cambridge C2, ocena A", lw3: "DSD Stufe II, C1",
      i1: "Własna infrastruktura na Linuksie", iw: "stawiam · utwardzam · utrzymuję",
      entries: "pozycji",
      p1: "Osobisty agent AI — LangGraph, cztery tryby, trwałe wątki",
      p2: "Rozpoznawanie niemożliwych pozycji szachowych siecią ResNet-20",
      p3: "Powrót do podstaw: algorytmy ML pisane od zera",
      p4: "Uczenie agentów RL gry w klona agar.io",
      p5: "Rozpoznawanie tekstu w scenach przy pomocy CRNN",
      p6: "Automatyzacje n8n, trzymane poza GitHubem",
      p7: "Ta właśnie strona",
      p8: "Klasyfikator i generator typów Pokémon",
      p9: "Wykrywanie zawalonych budynków siecią UNET++",
      back: "wróć do projektów"
    }
  };

  var SECTIONS = ["whoami", "timeline", "projects"];
  var MAX_OUT_LINES = 40;

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* "" on the index, "../" on a project page. */
  var ROOT = document.documentElement.getAttribute("data-root") || "";

  var langButtons = document.querySelectorAll(".lang");
  var themeButton = document.getElementById("theme-toggle");
  var countEl = document.getElementById("projects-count");
  var cvLink = document.getElementById("cv-link");
  var outEl = document.getElementById("console-out");
  var inputEl = document.getElementById("console-input");

  var lang = STRINGS[store.get("hsk.lang")] ? store.get("hsk.lang") : "en";
  var theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  var out = [];

  /* ------------------------------------------------------------- language */

  function applyLang() {
    var t = STRINGS[lang];

    document.documentElement.lang = lang;

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var v = t[el.getAttribute("data-i18n")];
      if (v !== undefined) el.textContent = v;
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function (el) {
      var v = t[el.getAttribute("data-i18n-placeholder")];
      if (v !== undefined) el.placeholder = v;
    });

    if (cvLink && t.cvfile) cvLink.href = ROOT + t.cvfile;

    if (countEl) {
      countEl.textContent =
        document.querySelectorAll("#projects-grid .card").length + " " + t.entries;
    }

    Array.prototype.forEach.call(langButtons, function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setLang(next) {
    if (!STRINGS[next]) return;
    lang = next;
    store.set("hsk.lang", next);
    applyLang();
  }

  /* ---------------------------------------------------------------- theme */

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    if (themeButton) themeButton.textContent = theme === "dark" ? "[light]" : "[dark]";
  }

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    store.set("hsk.theme", theme);
    applyTheme();
    return theme;
  }

  /* -------------------------------------------------------------- console */

  function render() {
    if (!outEl) return;
    outEl.hidden = out.length === 0;
    outEl.textContent = "";
    out.forEach(function (line) {
      var d = document.createElement("div");
      d.textContent = line;
      outEl.appendChild(d);
    });
    outEl.scrollTop = outEl.scrollHeight;
  }

  function push(echo, lines) {
    out = out.concat(["$ " + echo]).concat(lines).slice(-MAX_OUT_LINES);
    render();
  }

  function goTo(id) {
    var el = document.getElementById(id);
    if (!el) {
      /* Not on this page — jump to the index anchor instead. */
      window.location.href = ROOT + "index.html#" + id;
      return;
    }
    var top = el.getBoundingClientRect().top + window.pageYOffset - 44;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function findProject(arg) {
    var q = arg.replace(/\/$/, "");
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].slug === q) return PROJECTS[i];
    }
    return null;
  }

  function run(raw) {
    var line = raw.trim();
    if (!line) return;

    var parts = line.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var arg = (parts[1] || "").toLowerCase();

    switch (cmd) {
      case "help":
        push(line, [
          "help  ls [projects]  cd <section>  open <project>  whoami  theme  lang <en|pl>  clear",
          "sections: " + SECTIONS.join(", "),
          "open <project> — see `ls projects` for slugs"
        ]);
        break;

      case "ls":
        if (arg === "projects" || arg === "~/projects" || arg === "projects/") {
          push(line, PROJECTS.map(function (p) {
            return p.slug + "/" + Array(Math.max(1, 18 - p.slug.length)).join(" ") + p.status;
          }));
        } else {
          push(line, [SECTIONS.map(function (s) { return s + "/"; }).join("  ")]);
        }
        break;

      case "cd":
      case "goto":
        if (SECTIONS.indexOf(arg) > -1) {
          goTo(arg);
          push(line, ["-> /" + arg]);
        } else if (findProject(arg)) {
          window.location.href = ROOT + "projects/" + findProject(arg).slug + ".html";
        } else {
          push(line, ["cd: no such section: " + arg]);
        }
        break;

      case "open":
      case "cat": {
        var p = findProject(arg);
        if (p) {
          window.location.href = ROOT + "projects/" + p.slug + ".html";
        } else {
          push(line, [cmd + ": no such project: " + arg, "try `ls projects`"]);
        }
        break;
      }

      case "whoami":
        push(line, ["hugo sokolowski-katzer", STRINGS[lang].role]);
        break;

      case "theme":
        push(line, ["theme -> " + toggleTheme()]);
        break;

      case "lang":
        if (arg === "en" || arg === "pl") {
          setLang(arg);
          push(line, ["lang -> " + arg]);
        } else {
          push(line, ["usage: lang <en|pl>"]);
        }
        break;

      case "clear":
        out = [];
        render();
        break;

      default:
        push(line, [cmd + ": command not found"]);
    }
  }

  /* --------------------------------------------------------------- wiring */

  Array.prototype.forEach.call(langButtons, function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  if (themeButton) themeButton.addEventListener("click", toggleTheme);

  if (inputEl) {
    inputEl.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      run(inputEl.value);
      inputEl.value = "";
    });
  }

  applyLang();
  applyTheme();
  render();
})();
