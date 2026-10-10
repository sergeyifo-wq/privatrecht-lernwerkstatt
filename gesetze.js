/* Gesetze: Volltexte aus dem RIS, klickbare §-Verweise, Gesetze-Tab und Lese-Leiste rechts. */
(function () {
  "use strict";
  var IDX = window.LAWINDEX || [], BY = {}, KEYS = {};
  IDX.forEach(function (l) { BY[l.k] = l; KEYS[l.k] = new Set(l.keys); });
  var api = null, REV = {}, booted = false, cur = null, panelLaw = null;
  var GROUPS = ["Zivilrecht", "Unternehmens- und Gesellschaftsrecht", "Wertpapier- und Kapitalmarktrecht", "Wettbewerb und Immaterialgüter", "Weitere Gesetze"];

  function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function has(law, key) { return !!(KEYS[law] && KEYS[law].has(key)); }
  function hasArt(law) { return !!(BY[law] && BY[law].keys.some(function (k) { return /^a\d/.test(k); })); }
  function lawOf(text) { var m = /\b([A-ZÄÖÜ][A-Za-zÄÖÜäöü-]{0,12}(?:G|O|B|VO|V)|AEUV|ABGB)\s*$/.exec(text || ""); return m ? m[1] : null; }

  /* ───────── Verweise im Lernstoff ───────── */
  var SEG = "\\d+[a-z]?(?: (?:Abs|Z|lit) (?:\\d+[a-z]?|[a-z]\\b))*";
  var RX = new RegExp("(§§?|\\bArt) (" + SEG + "(?:(?:, | und | bis | u |–)" + SEG + ")*)((?: ff?\\b\\.?)?)((?: (?:[A-ZÄÖÜ][A-Za-zÄÖÜäöü-]{0,12}(?:G|O|B|VO|V)\\b|AEUV|ABGB))?)", "g");

  function ctx(def, defArt) { return { def: def || null, defArt: defArt || null, dom: null, domArt: null, dom2: null, domArt2: null, block: null }; }
  function chapterCtx(c) {
    var d = null, da = null, bare = [];
    (c.norms || []).forEach(function (n) {
      var l = lawOf(n) || (BY[n.trim()] ? n.trim() : null);
      if (!l || !BY[l]) return;
      if (!d && /§/.test(n)) d = l;
      if (!da && hasArt(l) && /\bArt\b/.test(n)) da = l;
      if (!/§|Art/.test(n)) bare.push(l);
    });
    if (!d && bare.length === 1) d = bare[0];
    return ctx(d, da);
  }
  function link(law, key, abs, text) {
    return '<a class="lref" href="#gesetz/' + encodeURIComponent(law) + '/' + key + '" data-law="' + esc(law) + '" data-k="' + key + '"' + (abs ? ' data-abs="' + esc(abs) + '"' : "") + ' title="' + esc(law) + ' öffnen">' + text + "</a>";
  }
  /* Kandidaten für einen Verweis ohne Gesetzesangabe, in dieser Reihenfolge:
     im selben Textblock genanntes Gesetz → im Unterabschnitt vorherrschendes Gesetz → im Abschnitt vorherrschendes Gesetz → Hauptgesetz des Kapitels.
     Genommen wird das erste, in dem es den Paragraphen tatsächlich gibt. */
  function candidates(prefix, lawTxt, c) {
    var explicit = lawTxt ? lawTxt.trim() : null;
    if (explicit) { if (c) c.block = explicit; return [explicit]; }
    if (!c) return [];
    var list = [];
    if (c.block) { if (!BY[c.block]) return []; list.push(c.block); }
    if (prefix === "Art") { [c.domArt, c.domArt2, c.defArt].forEach(function (l) { if (l) list.push(l); }); return list.filter(hasArt); }
    [c.dom, c.dom2, c.def].forEach(function (l) { if (l) list.push(l); });
    return list;
  }
  var ABBR = new RegExp("(?:^|[^A-Za-zÄÖÜäöü-])(" + IDX.map(function (l) { return l.k; }).sort(function (a, b) { return b.length - a.length; }).map(function (k) { return k.replace(/[-]/g, "\-"); }).join("|") + ")(?![A-Za-zÄÖÜäöü-])", "g");
  /* Vorherrschendes Gesetz: Verweis mit Gesetzesangabe zählt 3, bloße Nennung 2, Hauptgesetz des Kapitels +1 als Stichentscheid */
  function dominant(text, def, defArt) {
    var cnt = {}, cntA = {}, m;
    RX.lastIndex = 0;
    while ((m = RX.exec(text))) {
      var l = m[4] && m[4].trim();
      if (l && BY[l]) { var o = m[1] === "Art" ? cntA : cnt; o[l] = (o[l] || 0) + 3; }
    }
    RX.lastIndex = 0; ABBR.lastIndex = 0;
    while ((m = ABBR.exec(text))) { cnt[m[1]] = (cnt[m[1]] || 0) + 2; if (hasArt(m[1])) cntA[m[1]] = (cntA[m[1]] || 0) + 2; }
    ABBR.lastIndex = 0;
    if (def && cnt[def]) cnt[def] += 1;
    if (defArt && cntA[defArt]) cntA[defArt] += 1;
    var top = function (o) { var b = null; Object.keys(o).forEach(function (k) { if (!b || o[k] > o[b]) b = k; }); return b; };
    return { dom: top(cnt), domArt: top(cntA) };
  }
  /* scope: Text oder Datenobjekt des (Unter-)Abschnitts; parent: Kontext des umgebenden Abschnitts */
  function sectionCtx(ch, scope, parent) {
    var c = chapterCtx(ch), d = dominant(typeof scope === "string" ? scope : JSON.stringify(scope), c.def, c.defArt);
    c.dom = d.dom; c.domArt = d.domArt;
    if (parent) { c.dom2 = parent.dom; c.domArt2 = parent.domArt; }
    return c;
  }
  /* Blöcke eines Abschnitts ab Index j bis zur nächsten Zwischenüberschrift */
  function chunk(blocks, j) { var out = [blocks[j]]; for (var i = j + 1; i < blocks.length && !(blocks[i] && blocks[i].k === "sub"); i++) out.push(blocks[i]); return out; }
  /* html: bereits escapter Text. c: Kontext. rec: optionaler Sammler (law, key) */
  function linkify(html, c, rec) {
    if (c) c.block = null;
    return html.replace(RX, function (all, prefix, segs, ff, lawTxt) {
      var cands = candidates(prefix, lawTxt, c);
      var parts = segs.split(/(, | und | bis | u |–)/);
      var out = [], linked = 0, law = null;
      var firstKey = (prefix === "Art" ? "a" : "") + ((/^(\d+[a-z]?)/.exec(parts[0]) || [, ""])[1]).toLowerCase();
      for (var ci = 0; ci < cands.length; ci++) if (has(cands[ci], firstKey)) { law = cands[ci]; break; }
      parts.forEach(function (p, i) {
        if (i % 2) { out.push(p); return; }
        var m = /^(\d+[a-z]?)/.exec(p), a = /Abs (\d+[a-z]?)/.exec(p);
        var key = (prefix === "Art" ? "a" : "") + (m ? m[1].toLowerCase() : "");
        var txt = (i === 0 ? prefix + " " : "") + p;
        if (law && has(law, key)) { linked++; if (rec) rec(law, key); out.push(link(law, key, a && a[1], txt)); }
        else out.push(txt);
      });
      var tail = ff + lawTxt;
      if (linked === 1 && parts.length === 1 && out[0].indexOf("<a") === 0) out[0] = out[0].replace(/<\/a>$/, tail + "</a>"), tail = "";
      return '<span class="nm">' + out.join("") + tail + "</span>";
    });
  }
  /* Chip wie „VGG“ oder „§ 2 ABGB“ */
  function chip(text, c) {
    var t = String(text).trim();
    if (BY[t]) return '<a class="chip lref" href="#gesetz/' + encodeURIComponent(t) + '" data-law="' + esc(t) + '">' + esc(t) + "</a>";
    var h = linkify(esc(t), c || ctx());
    return /class="lref"/.test(h) ? '<span class="chip has-ref">' + h + "</span>" : '<span class="chip">' + esc(t) + "</span>";
  }

  /* Rückverweise: welche Paragraphen kommen in welchem Kapitel vor */
  function buildRev() {
    REV = {};
    function add(ch) { return function (law, key) { var L = REV[law] || (REV[law] = {}); (L[key] || (L[key] = new Set())).add(ch); }; }
    function scan(t, c, r) { if (t) linkify(esc(t), c, r); }
    api.chapters.forEach(function (ch) {
      var r = add(ch.id), base = function () { return chapterCtx(ch); };
      (ch.norms || []).forEach(function (n) { scan(n, base(), r); });
      [ch.intro].concat(ch.points || [], ch.fehler || []).forEach(function (p) { if (p) scan(p, sectionCtx(ch, p), r); });
      (ch.cases || []).forEach(function (cs) { scan(cs.q, sectionCtx(ch, cs.q), r); scan(cs.a, sectionCtx(ch, cs.a), r); });
      (api.details[ch.id] || []).forEach(function (sec) {
        var sc = sectionCtx(ch, sec), c = sc;
        sec.b.forEach(function (b, j) {
          if (j === 0 || (b && b.k === "sub")) c = sectionCtx(ch, chunk(sec.b, j), sc);
          if (typeof b === "string") return scan(b, c, r);
          ["h", "t"].forEach(function (f) { if (b[f]) scan(b[f], c, r); });
          (b.items || []).forEach(function (x) { scan(x, c, r); });
          (b.cols || []).forEach(function (x) { scan(x, c, r); });
          (b.rows || []).forEach(function (row) { row.forEach(function (x) { scan(x, c, r); }); });
        });
      });
    });
    api.questions.forEach(function (q) { var ch = api.chapterById[q.c]; if (ch) { scan(q.q, sectionCtx(ch, q.q), add(q.c)); scan(q.e, sectionCtx(ch, q.e), add(q.c)); } });
  }
  function citedCount(law) { return REV[law] ? Object.keys(REV[law]).length : 0; }

  /* ───────── Gesetze laden und darstellen ───────── */
  var loading = {};
  function load(k) {
    window.LAWDATA = window.LAWDATA || {};
    if (window.LAWDATA[k]) return Promise.resolve(window.LAWDATA[k]);
    if (loading[k]) return loading[k];
    loading[k] = new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = "laws/" + BY[k].f; s.async = true;
      s.onload = function () { window.LAWDATA[k] ? res(window.LAWDATA[k]) : rej(new Error("leer")); };
      s.onerror = function () { delete loading[k]; rej(new Error("Laden fehlgeschlagen")); };
      document.head.appendChild(s);
    });
    return loading[k];
  }

  /* Verweise innerhalb des Gesetzestexts (RIS-Schreibweise: „§ 906 Abs. 2“, „§. 1047“, „Art. 7“) */
  var RXL = /(§§?\.?|Art\.) ?(\d+[a-z]?)((?: (?:Abs\. ?\d+[a-z]?|Z ?\d+[a-z]?|lit\. ?[a-z]|Satz \d+))*)(?: ([A-ZÄÖÜ][A-Za-zÄÖÜäöü-]{1,14}(?:G|O|B|V)(?: \d{4})?)\b)?/g;
  function lawText(body, law) {
    return body.replace(RXL, function (all, pre, num, rest, other) {
      var target = law;
      if (other) { var o = other.replace(/ \d{4}$/, ""); target = BY[o] ? o : null; }
      var key = (/^Art/.test(pre) ? "a" : "") + num.toLowerCase();
      if (!target || !has(target, key)) return all;
      var a = /Abs\. ?(\d+[a-z]?)/.exec(rest || "");
      return link(target, key, a && a[1], all);
    });
  }
  function mark(html, q) {
    if (!q) return html;
    var rx = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return html.split(/(<[^>]+>)/).map(function (p) { return p.charAt(0) === "<" ? p : p.replace(rx, "<mark>$1</mark>"); }).join("");
  }
  function plain(s) { return s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&"); }
  function normId(pfx, law, key) { return pfx + "-" + law.replace(/[^A-Za-z0-9]/g, "_") + "-" + key.replace(/[^a-z0-9]/g, "_"); }

  function lawBody(L, o) {
    o = o || {};
    var q = (o.q || "").trim(), ql = q.toLowerCase(), cited = REV[L.k] || {}, h = [], shown = 0, pendingG = [];
    var numQ = /^(?:§|art\.?)?\s*(\d+[a-z]?)$/i.exec(q);
    L.items.forEach(function (it) {
      if (it[0] === "g") { if (!q && !o.citedOnly) h.push('<div class="lg lg' + it[1] + '">' + esc(it[2]) + "</div>"); else pendingG.push(it); return; }
      var key = it[1], c = cited[key];
      if (o.citedOnly && !c) return;
      if (q && !numQ && (plain(it[4]) + " " + it[3]).toLowerCase().indexOf(ql) < 0) return;
      if (numQ && key !== numQ[1].toLowerCase() && key !== "a" + numQ[1].toLowerCase()) return;
      shown++;
      var no = it[2] ? it[2].replace(/\.$/, "") : (key === "intro" ? "" : key);
      var body = lawText(it[4], L.k);
      if (q && !numQ) body = mark(body, q);
      h.push('<section class="norm' + (c ? " cited" : "") + '" id="' + normId(o.pfx || "m", L.k, key) + '" data-k="' + esc(key) + '">' +
        '<h3>' + (no ? '<span class="no">' + esc(no) + "</span>" : "") + (it[3] ? '<span class="nt">' + (q && !numQ ? mark(esc(it[3]), q) : esc(it[3])) + "</span>" : "") + "</h3>" +
        '<div class="nb">' + (body || '<p class="leer">(kein Text)</p>') + "</div>" +
        (c ? '<div class="cited-by">Im Kurs: ' + Array.from(c).sort(function (a, b) { return a - b; }).map(function (n) { return '<button class="goch" data-goch="' + n + '">Kap. ' + n + "</button>"; }).join("") + "</div>" : "") +
        "</section>");
    });
    if (!shown) h.push('<p class="empty">Keine Treffer.</p>');
    return { html: h.join(""), n: shown };
  }

  /* ───────── Gesetze-Tab ───────── */
  function sideHTML(filter) {
    var f = (filter || "").toLowerCase(), h = "";
    GROUPS.forEach(function (g) {
      var ls = IDX.filter(function (l) { return l.g === g && (!f || (l.k + " " + l.t).toLowerCase().indexOf(f) > -1); });
      if (!ls.length) return;
      h += "<h4>" + esc(g) + "</h4>";
      ls.forEach(function (l) {
        var n = citedCount(l.k);
        h += '<button class="lawbtn" data-law-open="' + esc(l.k) + '"' + (cur === l.k ? ' aria-current="true"' : "") + '><span class="ab">' + esc(l.k) + '</span><span class="nm2">' + esc(l.t) + "</span>" + (n ? '<span class="cn" title="' + n + ' Paragraphen im Kurs zitiert">' + n + "</span>" : "<span></span>") + "</button>";
      });
    });
    return h || '<p class="empty">Kein Gesetz gefunden.</p>';
  }
  function renderSide() { var el = $("#law-list"); if (el) el.innerHTML = sideHTML(($("#law-filter") || {}).value); }

  function overviewHTML() {
    var h = '<header class="head"><div class="eyebrow">Gesetze · Volltext aus dem RIS</div><h1>Gesetzbücher</h1><p>Alle ' + IDX.length + ' Gesetze, auf die der Kurs verweist, im geltenden Wortlaut (Fassung vom ' + esc((window.LAWMETA || {}).stand || "") + '). Ein Klick auf einen §-Verweis im Lernstoff öffnet den Text rechts in der Lese-Leiste.</p>' +
      '<form class="quick" id="law-quick"><label for="law-q">Schnellzugriff</label><div class="qrow"><input id="law-q" autocomplete="off" placeholder="z. B. § 1295 ABGB oder Art 1 WG"><button class="btn primary">Öffnen</button></div><small id="law-q-msg"></small></form></header>';
    GROUPS.forEach(function (g) {
      h += '<section class="sec"><h2>' + esc(g) + '</h2><div class="lawgrid">';
      IDX.filter(function (l) { return l.g === g; }).forEach(function (l) {
        var n = citedCount(l.k);
        h += '<button class="lawcard" data-law-open="' + esc(l.k) + '"><b>' + esc(l.k) + "</b><span>" + esc(l.t) + '</span><small>' + l.n + " Normen" + (n ? " · <em>" + n + " im Kurs zitiert</em>" : "") + "</small></button>";
      });
      h += "</div></section>";
    });
    return h;
  }

  function toolsHTML(L, pfx) {
    var n = citedCount(L.k), gl = L.items.filter(function (i) { return i[0] === "g"; });
    return '<div class="law-tools">' +
      '<form class="ljump" data-pfx="' + pfx + '"><label>' + (hasArt(L.k) && !BY[L.k].keys.some(function (k) { return /^\d/.test(k); }) ? "Art" : "§") + '</label><input name="j" inputmode="text" autocomplete="off" placeholder="Nr."><button class="btn" type="submit">Springen</button></form>' +
      '<input type="search" class="lsearch" data-pfx="' + pfx + '" placeholder="Im ' + esc(L.k) + ' suchen …" aria-label="Im Gesetz suchen">' +
      (n ? '<button class="ctog lcited" data-pfx="' + pfx + '" aria-pressed="false">Nur im Kurs zitierte (' + n + ")</button>" : "") +
      "</div>" +
      (gl.length ? '<details class="gliederung"><summary>Gliederung (' + gl.length + ")</summary><div>" + (function () {
        var out = "", idx = 0;
        L.items.forEach(function (it, i) {
          if (it[0] === "g") { out += '<button class="gl' + it[1] + '" data-gl="' + i + '" data-pfx="' + pfx + '">' + esc(it[2]) + "</button>"; }
        });
        return out;
      })() + "</div></details>" : "");
  }

  function showOverview() {
    cur = null; api.store("law", null);
    $("#law-main").innerHTML = overviewHTML(); renderSide();
  }
  function showLaw(k, key, abs, noScroll) {
    if (!BY[k]) return showOverview();
    cur = k; api.store("law", k); renderSide();
    var main = $("#law-main");
    main.innerHTML = '<p class="loading">' + esc(k) + " wird geladen …</p>";
    return load(k).then(function (L) {
      if (cur !== k) return;
      main.innerHTML = '<header class="head"><div class="eyebrow"><button class="crumb" data-law-home>Gesetze</button> · ' + esc(BY[k].g) + '</div><h1>' + esc(k) + '</h1><p>' + esc(L.t) + '</p>' +
        '<p class="meta">' + esc(L.lt) + ' · ' + BY[k].n + ' Normen · Fassung vom ' + esc(L.stand) + ' · <a href="' + esc(L.src) + '" target="_blank" rel="noopener">Quelle: RIS ↗</a></p>' +
        toolsHTML(L, "m") + "</header>" + '<div class="lawtext" id="lawtext-m">' + lawBody(L, { pfx: "m" }).html + "</div>";
      if (key) scrollToNorm("m", k, key, abs, window);
      else if (!noScroll) window.scrollTo({ top: 0 });
    }, function () { main.innerHTML = '<p class="empty">Das Gesetz konnte nicht geladen werden.</p>'; });
  }

  function scrollToNorm(pfx, law, key, abs, scroller) {
    var el = document.getElementById(normId(pfx, law, key));
    if (!el) return false;
    document.querySelectorAll(".norm.hit, .nb p.hit").forEach(function (x) { x.classList.remove("hit"); });
    el.classList.add("hit");
    if (abs) {
      [].some.call(el.querySelectorAll(".nb p"), function (p) { var b = p.querySelector(".az"); if (b && b.textContent.replace(/[()\s]/g, "") === String(abs)) { p.classList.add("hit"); return true; } });
    }
    if (scroller === window) { var y = el.getBoundingClientRect().top + window.scrollY - 84; window.scrollTo({ top: y }); }
    else { scroller.scrollTop = el.offsetTop - 8; }
    setTimeout(function () { el.classList.add("hit-fade"); }, 1600);
    return true;
  }

  /* ───────── Lese-Leiste rechts ───────── */
  function panel() { return $("#lawpanel"); }
  function openPanel(law, key, abs) {
    var p = panel(); if (!p || !BY[law]) return;
    p.hidden = false; document.body.classList.add("lp-open");
    setTimeout(function () { p.classList.add("open"); }, 20);
    $("#lp-k").textContent = law; $("#lp-t").textContent = BY[law].t;
    var body = $("#lp-body");
    var go = function () { if (key) { scrollToNorm("d", law, key, abs, body); } else body.scrollTop = 0; };
    if (panelLaw === law && body.querySelector(".norm")) { go(); return; }
    panelLaw = law;
    body.innerHTML = '<p class="loading">' + esc(law) + " wird geladen …</p>";
    $("#lp-tools").innerHTML = "";
    load(law).then(function (L) {
      if (panelLaw !== law) return;
      $("#lp-tools").innerHTML = toolsHTML(L, "d");
      body.innerHTML = '<p class="meta">' + esc(L.lt) + ' · Fassung vom ' + esc(L.stand) + "</p>" + lawBody(L, { pfx: "d" }).html;
      go();
    }, function () { body.innerHTML = '<p class="empty">Das Gesetz konnte nicht geladen werden.</p>'; });
    setTimeout(function () { var c = $("#lp-close"); if (c) c.focus({ preventScroll: true }); }, 60);
  }
  function closePanel() {
    var p = panel(); if (!p || p.hidden) return;
    p.classList.remove("open"); document.body.classList.remove("lp-open");
    setTimeout(function () { if (!p.classList.contains("open")) p.hidden = true; }, 260);
  }

  function rerender(pfx, opts) {
    var law = pfx === "m" ? cur : panelLaw, L = window.LAWDATA[law];
    if (!L) return;
    var box = pfx === "m" ? $("#lawtext-m") : $("#lp-body");
    var r = lawBody(L, { pfx: pfx, q: opts.q, citedOnly: opts.citedOnly });
    box.innerHTML = (pfx === "d" ? '<p class="meta">' + (opts.q || opts.citedOnly ? r.n + " Treffer" : esc(L.lt) + " · Fassung vom " + esc(L.stand)) + "</p>" : (opts.q || opts.citedOnly ? '<p class="meta">' + r.n + " Treffer</p>" : "")) + r.html;
  }
  function stateOf(pfx) {
    var root = pfx === "m" ? $("#law-main") : panel();
    var s = root.querySelector('.lsearch[data-pfx="' + pfx + '"]'), c = root.querySelector('.lcited[data-pfx="' + pfx + '"]');
    return { q: s ? s.value : "", citedOnly: c ? c.getAttribute("aria-pressed") === "true" : false };
  }

  function parseQuick(t) {
    var m = /^\s*(§§?|art\.?)?\s*(\d+[a-z]?)\s*(?:abs\.?\s*(\d+[a-z]?))?[^A-Za-zÄÖÜ]*([A-ZÄÖÜa-zäöü][\wÄÖÜäöü-]*)?\s*$/i.exec(t || "");
    if (!m) { var only = (t || "").trim(); var k0 = IDX.filter(function (l) { return l.k.toLowerCase() === only.toLowerCase(); })[0]; return k0 ? { law: k0.k } : null; }
    var lawTxt = m[4] ? IDX.filter(function (l) { return l.k.toLowerCase() === m[4].toLowerCase(); })[0] : BY.ABGB;
    if (!lawTxt) return null;
    var key = (m[1] && /^art/i.test(m[1]) ? "a" : "") + m[2].toLowerCase();
    if (!has(lawTxt.k, key) && has(lawTxt.k, "a" + key)) key = "a" + key;
    return has(lawTxt.k, key) ? { law: lawTxt.k, key: key, abs: m[3] } : { law: lawTxt.k, miss: true };
  }

  /* ───────── Ereignisse ───────── */
  var tmr = {};
  function bind() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a.lref");
      if (a && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        var law = a.dataset.law, key = a.dataset.k, abs = a.dataset.abs;
        if (a.closest("#law-main")) { if (law === cur && key) scrollToNorm("m", law, key, abs, window); else showLaw(law, key, abs); }
        else openPanel(law, key, abs);
        return;
      }
      if ((e.target === document.body || e.target === document.documentElement) && document.body.classList.contains("lp-open")) { closePanel(); return; }
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.lawOpen) { showLaw(b.dataset.lawOpen); collapseSide(); }
      else if (b.hasAttribute("data-law-home")) showOverview();
      else if (b.dataset.goch) { closePanel(); api.openChapter(+b.dataset.goch); }
      else if (b.id === "lp-close") closePanel();
      else if (b.id === "lp-tab") { var l = panelLaw, hit = $("#lp-body .norm.hit"); closePanel(); api.setView("laws"); showLaw(l, hit && hit.dataset.k); }
      else if (b.id === "lside-toggle") { var ls = $("#law-list"); ls.hidden = !ls.hidden; b.setAttribute("aria-expanded", String(!ls.hidden)); }
      else if (b.classList.contains("lcited")) { b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true")); rerender(b.dataset.pfx, stateOf(b.dataset.pfx)); }
      else if (b.dataset.gl) {
        var pfx = b.dataset.pfx, st = stateOf(pfx);
        if (st.q || st.citedOnly) { var root = pfx === "m" ? $("#law-main") : panel(); root.querySelectorAll('.lsearch,.lcited').forEach(function (x) { if (x.classList.contains("lsearch")) x.value = ""; else x.setAttribute("aria-pressed", "false"); }); rerender(pfx, { q: "", citedOnly: false }); }
        var L = window.LAWDATA[pfx === "m" ? cur : panelLaw], i = +b.dataset.gl, nk = null;
        for (var j = i; j < L.items.length; j++) if (L.items[j][0] === "p") { nk = L.items[j][1]; break; }
        if (nk) scrollToNorm(pfx, L.k, nk, null, pfx === "m" ? window : $("#lp-body"));
        var d = b.closest("details"); if (d) d.open = false;
      }
    });
    document.addEventListener("submit", function (e) {
      var f = e.target;
      if (f.id === "law-quick") {
        e.preventDefault();
        var r = parseQuick($("#law-q").value), msg = $("#law-q-msg");
        if (!r) { msg.textContent = "Bitte z. B. „§ 1295 ABGB“ eingeben."; return; }
        if (r.miss) msg.textContent = "Diesen Paragraphen gibt es im " + r.law + " nicht – das Gesetz wird geöffnet.";
        showLaw(r.law, r.key, r.abs);
      } else if (f.classList.contains("ljump")) {
        e.preventDefault();
        var pfx = f.dataset.pfx, law = pfx === "m" ? cur : panelLaw, v = (f.j.value || "").trim().toLowerCase().replace(/^(§|art\.?)\s*/, "");
        var key = has(law, v) ? v : has(law, "a" + v) ? "a" + v : null;
        if (!key) { f.j.setCustomValidity("Nicht gefunden"); f.j.reportValidity(); setTimeout(function () { f.j.setCustomValidity(""); }, 1500); return; }
        if (stateOf(pfx).q || stateOf(pfx).citedOnly) { var root = pfx === "m" ? $("#law-main") : panel(); root.querySelectorAll('.lsearch').forEach(function (x) { x.value = ""; }); root.querySelectorAll('.lcited').forEach(function (x) { x.setAttribute("aria-pressed", "false"); }); rerender(pfx, { q: "", citedOnly: false }); }
        scrollToNorm(pfx, law, key, null, pfx === "m" ? window : $("#lp-body"));
      }
    });
    document.addEventListener("input", function (e) {
      var t = e.target;
      if (t.id === "law-filter") renderSide();
      else if (t.classList.contains("lsearch")) {
        var pfx = t.dataset.pfx; clearTimeout(tmr[pfx]);
        tmr[pfx] = setTimeout(function () { var st = stateOf(pfx); if (st.q.trim().length === 1) return; rerender(pfx, st); }, 220);
      }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel() && !panel().hidden) closePanel(); });
  }
  function collapseSide() { if (window.matchMedia("(max-width: 900px)").matches) { var ls = $("#law-list"); if (ls) ls.hidden = true; var t = $("#lside-toggle"); if (t) t.setAttribute("aria-expanded", "false"); } }

  /* ───────── öffentliche Schnittstelle ───────── */
  window.Gesetze = {
    init: function (a) { api = a; buildRev(); bind(); },
    linkify: linkify, ctx: ctx, chapterCtx: chapterCtx, sectionCtx: sectionCtx, chunk: chunk, chip: chip, has: has,
    openPanel: openPanel, closePanel: closePanel,
    renderView: function () {
      if (!booted) {
        booted = true;
        var last = api.store("law");
        if (window.matchMedia("(max-width: 900px)").matches) $("#law-list").hidden = true;
        if (last && BY[last]) showLaw(last, null, null, true); else showOverview();
      } else renderSide();
    },
    route: function (hash) {
      var m = /^gesetz\/([^/]+)(?:\/([^/]+))?/.exec(hash || ""); if (!m) return false;
      var law = decodeURIComponent(m[1]); if (!BY[law]) return false;
      booted = true; if (window.matchMedia("(max-width: 900px)").matches) $("#law-list").hidden = true;
      showLaw(law, m[2] || null); return true;
    }
  };
})();
