/* Trickfilm-Engine: gezeichnete SVG-Szenen mit Zeitleiste (Figuren, Gegenstände, Sprechblasen, Stempel, Paragrafen).
   Bühne 800 × 450, Boden bei y = 390. Jede Figur ist unten mittig verankert. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var C = { ink: "#1b2440", skin: "#f3c9a4", paper: "#fffdf6", navy: "#1d3a8f", blue: "#2f56c8", yellow: "#ffd23f", red: "#e04848", green: "#2e9d62", grey: "#8a94ad", brown: "#9a6a43", gold: "#e0a800", white: "#ffffff" };
  var FONT = "'Bricolage Grotesque','Segoe UI',system-ui,sans-serif";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); }
  function wrap(s, n) {
    var out = [], line = "";
    String(s).split("|").forEach(function (part) {
      part.split(" ").forEach(function (w) {
        if ((line + " " + w).trim().length > n && line) { out.push(line); line = w; } else line = (line + " " + w).trim();
      });
      out.push(line); line = "";
    });
    return out.filter(function (l, i) { return l || i === 0; });
  }
  function tw(s, fs) { return String(s).length * fs * 0.56; }
  function txt(x, y, s, fs, fill, weight, anchor, extra) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + fs + '" font-weight="' + (weight || 700) + '" fill="' + (fill || C.ink) + '" text-anchor="' + (anchor || "middle") + '"' + (extra || "") + '>' + esc(s) + "</text>";
  }
  function lines(x, y, arr, fs, fill, weight, lh) { return arr.map(function (l, i) { return txt(x, y + i * (lh || fs * 1.2), l, fs, fill, weight); }).join(""); }

  /* ───────── Gesichter ───────── */
  /* Augen und Mund liegen in eigenen Gruppen (Ursprung im Mittelpunkt), damit sie blinzeln und sprechen können. */
  function face(f) {
    var st = ' stroke="' + C.ink + '" stroke-width="2.6" fill="none" stroke-linecap="round"';
    var dot = function (r) { return '<circle cx="-8" cy="0" r="' + r + '" fill="' + C.ink + '"/><circle cx="8" cy="0" r="' + r + '" fill="' + C.ink + '"/><circle cx="-7" cy="-1" r="' + (r * 0.35) + '" fill="#fff"/><circle cx="9" cy="-1" r="' + (r * 0.35) + '" fill="#fff"/>'; };
    var eyes = dot(3), brows = "", mouth = "", cheeks = "";
    switch (f) {
      case "sad": brows = '<path d="M-13 -139 L-4 -136 M13 -139 L4 -136"' + st + "/>"; mouth = '<path d="M-7 2 Q0 -5 7 2"' + st + "/>"; break;
      case "shock": eyes = dot(3.8); brows = '<path d="M-13 -143 L-4 -141 M13 -143 L4 -141"' + st + "/>"; mouth = '<ellipse cx="0" cy="1" rx="4.5" ry="5.5" fill="' + C.ink + '"/>'; break;
      case "angry": brows = '<path d="M-14 -141 L-3 -135 M14 -141 L3 -135"' + st + ' stroke-width="3.4"/>'; mouth = '<path d="M-7 1 L7 1"' + st + "/>"; break;
      case "sly": eyes = '<path d="M-11 0 L-5 0"' + st + '/><circle cx="8" cy="0" r="3" fill="' + C.ink + '"/>'; mouth = '<path d="M-8 -1 Q2 4 9 -5"' + st + "/>"; break;
      case "think": brows = '<path d="M4 -141 L13 -143"' + st + "/>"; mouth = '<path d="M-5 0 L7 -1"' + st + "/>"; break;
      default: cheeks = '<circle cx="-14" cy="-120" r="3.4" fill="#f29b9b" opacity=".6"/><circle cx="14" cy="-120" r="3.4" fill="#f29b9b" opacity=".6"/>'; mouth = '<path d="M-8 -3 Q0 6 8 -3"' + st + "/>";
    }
    return cheeks + brows + '<g transform="translate(0,-130)"><g class="eyes">' + eyes + '</g></g><g transform="translate(0,-116)"><g class="mouth">' + mouth + "</g></g>";
  }

  /* ───────── Figuren ───────── */
  function person(o) {
    var s = (o.kid ? 0.72 : 1) * 1.15, c = o.c || C.blue, body = o.robe ? "#22263a" : c, skin = o.skin || C.skin;
    var hair = o.hair || (o.old ? "#d6d9e0" : "#3b2a20"), pants = o.pants || "#2a3350";
    var ol = ' stroke="' + C.ink + '" stroke-width="2"';
    var leg = function (x, cls, sx) { return '<g transform="translate(' + x + ',-50)"><g class="' + cls + '"><rect x="-5.5" y="0" width="11" height="48" rx="5" fill="' + pants + '"' + ol + '/><ellipse cx="' + sx + '" cy="47" rx="10" ry="5" fill="' + C.ink + '"/></g></g>'; };
    var arm = function (x, cls, d, hx) { return '<g transform="translate(' + x + ',-90)"><g class="' + cls + '"><path d="' + d + '" stroke="' + C.ink + '" stroke-width="14" stroke-linecap="round" fill="none"/><path d="' + d + '" stroke="' + body + '" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="' + hx + '" cy="42" r="6.5" fill="' + skin + '"' + ol + '/></g></g>'; };
    var h = '<g transform="scale(' + s + ')">';
    h += leg(-8.5, "leg-l", -1.5) + leg(8.5, "leg-r", 1.5);
    if (o.skirt) h += '<path d="M-26 -62 L26 -62 L32 -34 L-32 -34Z" fill="' + o.skirt + '"' + ol + "/>";
    h += arm(-21, "arm-l", "M0 0 Q-15 22 -11 40", -11) + arm(21, "arm-r", "M0 0 Q15 22 11 40", 11);
    h += '<rect x="-24" y="-108" width="48" height="64" rx="18" fill="' + body + '"' + ol + "/>";
    if (o.robe) h += '<path d="M-10 -108 L0 -92 L10 -108Z" fill="#fff"/>';
    if (o.tie) h += '<path d="M-4 -106 L4 -106 L6 -80 L0 -72 L-6 -80Z" fill="' + o.tie + '"/>';
    if (o.apron) h += '<rect x="-18" y="-86" width="36" height="42" rx="6" fill="#fff" opacity=".92"/>';
    if (o.vest) h += '<path d="M-24 -100 L-8 -100 L-8 -46 L-24 -46Z M24 -100 L8 -100 L8 -46 L24 -46Z" fill="' + o.vest + '"/>';
    h += '<rect x="-6" y="-114" width="12" height="10" fill="' + skin + '"/><circle cx="0" cy="-130" r="22" fill="' + skin + '"' + ol + "/>";
    var hs = o.hs || (o.old ? "bald" : "short");
    if (hs === "long") h += '<path d="M-24 -132 Q-24 -156 0 -156 Q24 -156 24 -132 L26 -100 L16 -104 L16 -134 Q0 -142 -16 -134 L-16 -104 L-26 -100Z" fill="' + hair + '"/>';
    else if (hs === "bun") h += '<circle cx="0" cy="-158" r="9" fill="' + hair + '"/><path d="M-23 -130 Q-23 -153 0 -153 Q23 -153 23 -130 Q14 -143 0 -141 Q-14 -143 -23 -130Z" fill="' + hair + '"/>';
    else if (hs === "bald") h += '<path d="M-23 -128 Q-24 -140 -18 -142 L-16 -130Z M23 -128 Q24 -140 18 -142 L16 -130Z" fill="' + hair + '"/>';
    else if (hs === "curly") h += '<g fill="' + hair + '"><circle cx="-16" cy="-146" r="9"/><circle cx="-4" cy="-152" r="10"/><circle cx="10" cy="-150" r="10"/><circle cx="20" cy="-140" r="8"/><circle cx="-22" cy="-136" r="7"/></g>';
    else h += '<path d="M-23 -130 Q-23 -153 0 -153 Q23 -153 23 -130 Q14 -143 0 -141 Q-14 -143 -23 -130Z" fill="' + hair + '"/>';
    h += '<g class="face">' + face(o.f) + "</g>";
    if (o.glasses) h += '<g stroke="' + C.ink + '" stroke-width="2" fill="none"><circle cx="-9" cy="-130" r="7"/><circle cx="9" cy="-130" r="7"/><path d="M-2 -130 L2 -130"/></g>';
    if (o.hat) h += '<rect x="-20" y="-162" width="40" height="18" rx="3" fill="' + o.hat + '"/><rect x="-28" y="-148" width="56" height="5" rx="2" fill="' + o.hat + '"/>';
    if (o.cap) h += '<path d="M-22 -142 Q0 -168 22 -142Z" fill="' + o.cap + '"/><rect x="14" y="-146" width="18" height="5" rx="2" fill="' + o.cap + '"/>';
    if (o.helmet) h += '<path d="M-24 -136 Q0 -170 24 -136Z" fill="' + o.helmet + '"/>';
    if (o.old) h += '<path d="M34 -48 L40 0" stroke="#6b4b2f" stroke-width="4" stroke-linecap="round"/>';
    if (o.crown) h += '<path d="M-16 -150 L-16 -166 L-8 -158 L0 -168 L8 -158 L16 -166 L16 -150Z" fill="' + C.yellow + '"/>';
    h += "</g>";
    return { svg: h, h: 160 * s, hand: [32 * s, -48 * s] };
  }
  function crowd(o) {
    var cols = ["#e4572e", "#2f56c8", "#2e9d62", "#9b5de5", "#f2a541", "#3ab0c4"], h = "";
    for (var i = 0; i < (o.n || 6); i++) {
      var x = (i - ((o.n || 6) - 1) / 2) * 26, y = (i % 2) * 8;
      h += '<rect x="' + (x - 11) + '" y="' + (-40 + y) + '" width="22" height="40" rx="9" fill="' + cols[i % 6] + '"/><circle cx="' + x + '" cy="' + (-50 + y) + '" r="10" fill="' + C.skin + '"/>';
    }
    return { svg: h, h: 64 };
  }

  /* ───────── Gegenstände ───────── */
  var OBJ = {
    money: function (o) { return { svg: '<rect x="-36" y="-38" width="72" height="38" rx="5" fill="#6cc68a" stroke="#2e7d4f" stroke-width="2"/><rect x="-30" y="-32" width="60" height="26" rx="3" fill="none" stroke="#2e7d4f" stroke-width="1.2" opacity=".6"/><circle cx="0" cy="-19" r="11" fill="#a9e6bd"/>' + txt(0, -14, "€", 14, "#1d5c37", 800), h: 38 }; },
    coin: function () { return { svg: '<circle cx="0" cy="-12" r="12" fill="' + C.gold + '" stroke="#b07f00" stroke-width="2"/>' + txt(0, -7.5, "€", 12, "#7a5600", 800), h: 24 }; },
    doc: function (o) {
      var t = wrap(o.s || "", 11);
      var h = '<rect x="-32" y="-82" width="64" height="82" rx="4" fill="' + C.paper + '" stroke="' + C.ink + '" stroke-width="2"/>' + lines(0, -66, t, 10, C.ink, 800, 11);
      for (var i = 0; i < 3; i++) h += '<rect x="-22" y="' + (-40 + i * 8) + '" width="' + (44 - i * 8) + '" height="3" rx="1.5" fill="#c3cad9"/>';
      if (o.sig) h += '<path d="M-20 -12 q6 -10 10 0 t10 0 t10 -4" stroke="' + C.blue + '" stroke-width="2" fill="none"/>';
      if (o.seal) h += '<circle cx="20" cy="-12" r="8" fill="' + C.red + '"/>';
      if (o.big) h = '<g transform="scale(1.35)">' + h + "</g>";
      return { svg: h, h: o.big ? 110 : 82 };
    },
    key: function () { return { svg: '<circle cx="-16" cy="-12" r="9" fill="none" stroke="' + C.gold + '" stroke-width="5"/><rect x="-8" y="-14.5" width="30" height="5" fill="' + C.gold + '"/><rect x="16" y="-14" width="4" height="10" fill="' + C.gold + '"/><rect x="9" y="-14" width="4" height="8" fill="' + C.gold + '"/>', h: 22 }; },
    phone: function () { return { svg: '<rect x="-16" y="-58" width="32" height="58" rx="6" fill="' + C.ink + '"/><rect x="-12" y="-52" width="24" height="42" rx="2" fill="#8fb3ff"/>', h: 58 }; },
    cake: function () { return { svg: '<rect x="-40" y="-30" width="80" height="30" rx="4" fill="#f7c6d6"/><rect x="-30" y="-56" width="60" height="26" rx="4" fill="#fff"/><rect x="-20" y="-78" width="40" height="22" rx="4" fill="#f7c6d6"/><path d="M-40 -24 q10 8 20 0 t20 0 t20 0 t20 0" stroke="#fff" stroke-width="3" fill="none"/><rect x="-2" y="-92" width="4" height="14" fill="' + C.blue + '"/><path d="M0 -100 q4 4 0 8 q-4 -4 0 -8" fill="' + C.yellow + '"/>', h: 100 }; },
    tv: function (o) { return { svg: '<rect x="-6" y="-16" width="12" height="16" fill="' + C.ink + '"/><rect x="-30" y="-6" width="60" height="6" rx="3" fill="' + C.ink + '"/><rect x="-64" y="-96" width="128" height="80" rx="6" fill="' + C.ink + '"/><rect x="-58" y="-90" width="116" height="68" rx="3" fill="#3a5fd8"/><path d="M-58 -40 L-20 -70 L10 -50 L58 -84 L58 -22 L-58 -22Z" fill="#6f8ff0" opacity=".7"/>' + (o.s ? '<g transform="translate(48,-104) rotate(10)"><rect x="-30" y="-14" width="60" height="26" rx="5" fill="' + C.yellow + '" stroke="' + C.ink + '" stroke-width="2"/>' + txt(0, 5, o.s, 14, C.ink, 800, "middle", ' class="lbl2"') + "</g>" : ""), h: 110 }; },
    ring: function () { return { svg: '<circle cx="0" cy="-14" r="12" fill="none" stroke="' + C.gold + '" stroke-width="5"/><path d="M-8 -30 L0 -40 L8 -30 L0 -24Z" fill="#bfe6ff" stroke="#6ab7e8" stroke-width="1.5"/>', h: 40 }; },
    laptop: function (o) { return { svg: '<path d="M-48 0 L48 0 L40 -8 L-40 -8Z" fill="#7d879f"/><rect x="-38" y="-60" width="76" height="52" rx="4" fill="' + C.ink + '"/><rect x="-33" y="-55" width="66" height="42" rx="2" fill="#dfe7ff"/>' + (o.s ? lines(0, -38, wrap(o.s, 12), 9, C.navy, 800, 10) : ""), h: 60 }; },
    gavel: function () { return { svg: '<g transform="rotate(-30)"><rect x="-4" y="-60" width="8" height="52" rx="3" fill="' + C.brown + '"/><rect x="-22" y="-74" width="44" height="20" rx="6" fill="#6b4b2f"/></g><rect x="-26" y="-8" width="52" height="8" rx="3" fill="#6b4b2f"/>', h: 70 }; },
    scales: function (o) {
      var pan = function (x, l) { return '<path d="M' + x + ' 0 L' + (x - 26) + ' 46 M' + x + ' 0 L' + (x + 26) + ' 46" stroke="' + C.ink + '" stroke-width="1.5"/><path d="M' + (x - 32) + ' 46 Q' + x + ' 66 ' + (x + 32) + ' 46Z" fill="' + C.yellow + '" stroke="' + C.ink + '" stroke-width="2"/>' + (l ? lines(x, 80, wrap(l, 12), 12, C.ink, 800, 13) : ""); };
      return { svg: '<rect x="-30" y="-10" width="60" height="10" rx="4" fill="' + C.ink + '"/><rect x="-4" y="-150" width="8" height="140" fill="' + C.ink + '"/><g transform="translate(0,-150)"><g class="beam"><rect x="-90" y="-4" width="180" height="8" rx="4" fill="' + C.ink + '"/>' + pan(-86, o.l) + pan(86, o.r) + '</g></g><circle cx="0" cy="-150" r="8" fill="' + C.yellow + '"/>', h: 160 };
    },
    book: function (o) { return { svg: '<rect x="-30" y="-74" width="60" height="74" rx="4" fill="' + (o.c || C.navy) + '"/><rect x="-30" y="-74" width="9" height="74" fill="#000" opacity=".2"/>' + txt(4, -32, "§", 30, C.yellow, 800) + (o.s ? txt(4, -12, o.s, 9, "#fff", 800) : ""), h: 74 }; },
    grundbuch: function (o) {
      var r = o.rows || ["A: Wohnung Top 5", "B: C-GmbH", "C: –"], h = '<path d="M0 -6 L-96 -14 L-96 -120 L0 -110Z" fill="' + C.paper + '" stroke="' + C.ink + '" stroke-width="2"/><path d="M0 -6 L96 -14 L96 -120 L0 -110Z" fill="' + C.paper + '" stroke="' + C.ink + '" stroke-width="2"/>';
      h += txt(-48, -92, "GRUNDBUCH", 11, C.navy, 800) + '<rect x="-80" y="-80" width="64" height="2" fill="' + C.navy + '"/>';
      h += '<g class="rows">' + r.map(function (x, i) { return txt(8, -88 + i * 24, x, 10, i === 1 ? C.red : C.ink, 800, "start"); }).join("") + "</g>";
      return { svg: h, h: 124 };
    },
    building: function (o) {
      var w = o.w || 130, hh = o.h || 170, c = o.c || "#a9b8dc", h = '<rect x="' + (-w / 2) + '" y="' + (-hh) + '" width="' + w + '" height="' + hh + '" rx="4" fill="' + c + '" stroke="' + C.ink + '" stroke-width="2"/>';
      for (var r = 0; r < Math.floor((hh - 70) / 32); r++) for (var k = 0; k < Math.floor((w - 20) / 30); k++) h += '<rect x="' + (-w / 2 + 14 + k * 30) + '" y="' + (-hh + 44 + r * 32) + '" width="18" height="20" rx="2" fill="#eef3ff" opacity=".9"/>';
      h += '<rect x="' + (-w / 2 + 8) + '" y="' + (-hh + 8) + '" width="' + (w - 16) + '" height="26" rx="4" fill="' + (o.sc || C.navy) + '"/>' + txt(0, -hh + 26, o.s || "", 13, "#fff", 800);
      h += '<rect x="-14" y="-34" width="28" height="34" rx="3" fill="' + C.ink + '"/>';
      return { svg: h, h: hh };
    },
    house: function (o) { return { svg: '<rect x="-64" y="-90" width="128" height="90" fill="' + (o.c || "#f4d9b0") + '" stroke="' + C.ink + '" stroke-width="2"/><path d="M-78 -88 L0 -150 L78 -88Z" fill="' + (o.roof || "#c0504d") + '" stroke="' + C.ink + '" stroke-width="2"/><rect x="-14" y="-48" width="28" height="48" fill="#7a5235"/><g class="win"><rect x="-52" y="-74" width="28" height="24" fill="#bfe0ff" stroke="' + C.ink + '" stroke-width="2"/><rect x="24" y="-74" width="28" height="24" fill="#bfe0ff" stroke="' + C.ink + '" stroke-width="2"/></g>' + (o.s ? '<rect x="-40" y="-122" width="80" height="20" rx="4" fill="#fff"/>' + txt(0, -107, o.s, 11, C.ink, 800) : ""), h: 150 }; },
    car: function (o) { var c = o.c || C.red; return { svg: '<path d="M-74 -18 L-74 -40 Q-70 -50 -54 -52 L-34 -74 L30 -74 L52 -52 Q72 -50 76 -36 L76 -18Z" fill="' + c + '" stroke="' + C.ink + '" stroke-width="2"/><path d="M-28 -68 L-12 -68 L-12 -52 L-44 -52Z M-4 -68 L26 -68 L42 -52 L-4 -52Z" fill="#cfe4ff"/>' + (o.s ? '<rect x="-30" y="-46" width="60" height="16" rx="3" fill="#fff"/>' + txt(0, -34, o.s, 10, C.navy, 800) : "") + '<circle cx="-44" cy="-16" r="15" fill="' + C.ink + '"/><circle cx="-44" cy="-16" r="6" fill="#ccc"/><circle cx="46" cy="-16" r="15" fill="' + C.ink + '"/><circle cx="46" cy="-16" r="6" fill="#ccc"/>' + (o.dent ? '<path d="M48 -60 l8 10 l-10 4 l8 10" stroke="' + C.ink + '" stroke-width="2.5" fill="none"/>' : ""), h: 76 }; },
    truck: function (o) { return { svg: '<rect x="-90" y="-96" width="130" height="80" rx="8" fill="' + (o.c || "#f2a541") + '" stroke="' + C.ink + '" stroke-width="2"/><rect x="-74" y="-80" width="70" height="34" rx="3" fill="#fff4dc"/><path d="M40 -80 L70 -80 L88 -50 L88 -16 L40 -16Z" fill="' + (o.c || "#f2a541") + '" stroke="' + C.ink + '" stroke-width="2"/><path d="M46 -74 L66 -74 L78 -54 L46 -54Z" fill="#cfe4ff"/>' + txt(-39, -58, o.s || "", 13, C.ink, 800) + '<circle cx="-56" cy="-14" r="14" fill="' + C.ink + '"/><circle cx="56" cy="-14" r="14" fill="' + C.ink + '"/>', h: 96 }; },
    bike: function (o) { var c = o.c || C.blue; return { svg: '<g stroke="' + C.ink + '" stroke-width="4" fill="none"><circle cx="-34" cy="-22" r="20"/><circle cx="34" cy="-22" r="20"/></g><path d="M-34 -22 L-8 -54 L24 -54 L34 -22 M-8 -54 L4 -22 L24 -54 M-14 -62 L-2 -62 M24 -54 L22 -68 L32 -70" stroke="' + c + '" stroke-width="5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>', h: 70 }; },
    scooter: function () { return { svg: '<path d="M-40 -14 L30 -14 M28 -14 L18 -84 M10 -84 L28 -84" stroke="' + C.ink + '" stroke-width="6" stroke-linecap="round"/><circle cx="-40" cy="-10" r="10" fill="' + C.ink + '"/><circle cx="32" cy="-10" r="10" fill="' + C.ink + '"/><path d="M-30 -30 l12 0 l-6 10z" fill="' + C.yellow + '"/>', h: 86 }; },
    wheelchair: function () { return { svg: '<circle cx="-6" cy="-30" r="28" fill="none" stroke="' + C.ink + '" stroke-width="5"/><circle cx="34" cy="-8" r="8" fill="' + C.ink + '"/><path d="M-30 -64 L-30 -40 L20 -40 L34 -10 M-30 -64 L-40 -64" stroke="' + C.blue + '" stroke-width="6" fill="none" stroke-linecap="round"/>', h: 64 }; },
    ball: function () { return { svg: '<circle cx="0" cy="-14" r="14" fill="#fff" stroke="' + C.ink + '" stroke-width="2"/><path d="M0 -20 l6 4 l-2 7 l-8 0 l-2 -7z" fill="' + C.ink + '"/>', h: 28 }; },
    box: function (o) { return { svg: '<rect x="-34" y="-50" width="68" height="50" rx="3" fill="#c99a63" stroke="' + C.ink + '" stroke-width="2"/><rect x="-6" y="-50" width="12" height="50" fill="#e8c999"/>' + (o.s ? '<rect x="-28" y="-30" width="56" height="16" fill="#fff"/>' + txt(0, -18, o.s, 9, C.ink, 800) : ""), h: 50 }; },
    lock: function () { return { svg: '<path d="M-14 -36 L-14 -50 Q-14 -66 0 -66 Q14 -66 14 -50 L14 -36" stroke="' + C.ink + '" stroke-width="6" fill="none"/><rect x="-22" y="-38" width="44" height="38" rx="6" fill="' + C.gold + '" stroke="' + C.ink + '" stroke-width="2"/>', h: 66 }; },
    magnifier: function () { return { svg: '<circle cx="-6" cy="-42" r="22" fill="#e6f2ff" fill-opacity=".5" stroke="' + C.ink + '" stroke-width="6"/><path d="M10 -26 L30 -4" stroke="' + C.ink + '" stroke-width="9" stroke-linecap="round"/>', h: 66 }; },
    calendar: function (o) { return { svg: '<rect x="-38" y="-84" width="76" height="84" rx="6" fill="#fff" stroke="' + C.ink + '" stroke-width="2"/><rect x="-38" y="-84" width="76" height="24" rx="6" fill="' + C.red + '"/>' + txt(0, -66, o.m || "", 12, "#fff", 800, "middle", ' class="mon"') + txt(0, -22, o.s || "", o.small ? 18 : 30, C.ink, 800, "middle", ' class="num"'), h: 84 }; },
    counter: function (o) { var w = o.w || 200; return { svg: '<rect x="' + (-w / 2) + '" y="-56" width="' + w + '" height="56" rx="12" fill="' + C.ink + '"/><rect x="' + (-w / 2 + 6) + '" y="-50" width="' + (w - 12) + '" height="44" rx="8" fill="#0f1730"/>' + txt(0, -18, o.s || "0", 28, C.yellow, 800, "middle", ' class="num" font-family="JetBrains Mono, monospace"'), h: 56 }; },
    clock: function () { return { svg: '<circle cx="0" cy="-40" r="36" fill="#fff" stroke="' + C.ink + '" stroke-width="4"/><g transform="translate(0,-40)"><g class="hand"><rect x="-2" y="-28" width="4" height="30" rx="2" fill="' + C.red + '"/></g><rect x="-2" y="-18" width="4" height="20" rx="2" fill="' + C.ink + '" transform="rotate(90)"/></g><circle cx="0" cy="-40" r="4" fill="' + C.ink + '"/>', h: 80 }; },
    tree: function (o) { return o.fir ? { svg: '<rect x="-6" y="-24" width="12" height="24" fill="' + C.brown + '"/><path d="M0 -170 L36 -110 L20 -110 L46 -60 L26 -60 L54 -22 L-54 -22 L-26 -60 L-46 -60 L-20 -110 L-36 -110Z" fill="#2f7d4f"/>', h: 170 } : { svg: '<rect x="-7" y="-60" width="14" height="60" fill="' + C.brown + '"/><circle cx="0" cy="-90" r="40" fill="#4caf6e"/><circle cx="-26" cy="-70" r="24" fill="#3f9b5f"/><circle cx="26" cy="-72" r="26" fill="#3f9b5f"/>', h: 130 }; },
    chair: function (o) { return { svg: '<path d="M-26 -52 L26 -52 M-22 -52 L-30 0 M22 -52 L30 0 M-24 -52 L-20 -110 Q0 -122 20 -110 L24 -52" stroke="' + (o.c || C.red) + '" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>', h: 118 }; },
    can: function (o) { return { svg: '<rect x="-20" y="-72" width="40" height="72" rx="6" fill="' + (o.c || C.blue) + '" stroke="' + C.ink + '" stroke-width="2"/><rect x="-20" y="-72" width="40" height="8" rx="3" fill="#c9d2e6"/><path d="M4 -58 L-6 -36 L2 -36 L-4 -16 L10 -42 L2 -42 L8 -58Z" fill="' + C.yellow + '"/>', h: 72 }; },
    bottle: function (o) { return { svg: '<path d="M-6 -96 L6 -96 L6 -72 Q18 -64 18 -50 L18 0 L-18 0 L-18 -50 Q-18 -64 -6 -72Z" fill="' + (o.c || "#2f6b3f") + '" stroke="' + C.ink + '" stroke-width="2"/><rect x="-14" y="-44" width="28" height="22" rx="2" fill="#f6ead0"/>', h: 96 }; },
    envelope: function (o) { return { svg: '<rect x="-34" y="-46" width="68" height="46" rx="4" fill="#fff" stroke="' + C.ink + '" stroke-width="2"/><path d="M-34 -46 L0 -18 L34 -46" stroke="' + C.ink + '" stroke-width="2" fill="none"/>' + (o.s ? '<g transform="translate(22,-36) rotate(-12)"><rect x="-18" y="-9" width="36" height="16" rx="3" fill="' + C.red + '"/>' + txt(0, 3, o.s, 8, "#fff", 800) + "</g>" : ""), h: 46 }; },
    sign: function (o) { var l = wrap(o.s || "", 16), hh = l.length * 16 + 18; return { svg: '<rect x="-4" y="-110" width="8" height="110" fill="#6b4b2f"/><rect x="-76" y="' + (-112 - hh / 2) + '" width="152" height="' + hh + '" rx="6" fill="' + (o.c || "#fff") + '" stroke="' + C.ink + '" stroke-width="2"/>' + lines(0, -112 - hh / 2 + 22, l, 13, C.ink, 800, 16), h: 112 + hh / 2 }; },
    painting: function () { return { svg: '<rect x="-46" y="-80" width="92" height="72" fill="#d9a441" stroke="#8a5a1f" stroke-width="6"/><rect x="-38" y="-72" width="76" height="56" fill="#bfe0ff"/><circle cx="18" cy="-56" r="8" fill="' + C.yellow + '"/><path d="M-38 -16 L-14 -46 L4 -28 L20 -42 L38 -16Z" fill="#4caf6e"/>', h: 82 }; },
    vase: function () { return { svg: '<path d="M-10 -70 L10 -70 L8 -60 Q30 -40 16 0 L-16 0 Q-30 -40 -8 -60Z" fill="#3a8fd8" stroke="' + C.ink + '" stroke-width="2"/><path d="M-18 -30 Q0 -22 18 -30" stroke="#fff" stroke-width="3" fill="none"/>', h: 70 }; },
    ice: function () { return { svg: '<path d="M-12 -30 L0 0 L12 -30Z" fill="#d9a441"/><circle cx="0" cy="-36" r="13" fill="#f7a8c4"/><circle cx="-6" cy="-46" r="9" fill="#fff3c4"/>', h: 50 }; },
    console: function () { return { svg: '<rect x="-40" y="-34" width="80" height="34" rx="14" fill="' + C.ink + '"/><circle cx="20" cy="-20" r="5" fill="' + C.red + '"/><circle cx="30" cy="-12" r="5" fill="' + C.yellow + '"/><path d="M-30 -17 L-14 -17 M-22 -25 L-22 -9" stroke="#fff" stroke-width="4"/>', h: 34 }; },
    boat: function () { return { svg: '<path d="M-90 -30 L90 -30 L70 0 L-74 0Z" fill="#fff" stroke="' + C.ink + '" stroke-width="2"/><rect x="-40" y="-60" width="70" height="30" rx="4" fill="' + C.blue + '"/><rect x="-30" y="-54" width="16" height="12" fill="#cfe4ff"/><rect x="-6" y="-54" width="16" height="12" fill="#cfe4ff"/>', h: 60 }; },
    basket: function () { return { svg: '<path d="M-34 -36 L34 -36 L28 0 L-28 0Z" fill="#e2c08a" stroke="' + C.ink + '" stroke-width="2"/><path d="M-26 -36 Q-20 -50 -6 -44 Q6 -54 16 -42 Q28 -48 28 -36" fill="#9ec5ff"/>', h: 50 }; },
    kettle: function () { return { svg: '<path d="M-26 0 L26 0 L22 -54 L-22 -54Z" fill="#c9d2e6" stroke="' + C.ink + '" stroke-width="2"/><path d="M22 -46 Q40 -40 26 -16" stroke="' + C.ink + '" stroke-width="5" fill="none"/><path d="M-22 -44 L-38 -54" stroke="' + C.ink + '" stroke-width="6" stroke-linecap="round"/>', h: 56 }; },
    plank: function (o) { return { svg: '<rect x="-64" y="-16" width="128" height="16" rx="2" fill="#c98f55" stroke="' + C.ink + '" stroke-width="2"/><path d="M-50 -9 Q-10 -12 40 -8" stroke="#8a5a2a" stroke-width="1.5" fill="none"/>' + (o.crack ? '<path d="M-10 -16 L-4 -10 L-12 -6 L-6 0 M20 -16 L26 -8 L18 -4" stroke="' + C.ink + '" stroke-width="2.5" fill="none"/>' : ""), h: 16 }; },
    card: function () { return { svg: '<rect x="-36" y="-46" width="72" height="46" rx="6" fill="' + C.navy + '"/><rect x="-28" y="-36" width="14" height="10" rx="2" fill="' + C.gold + '"/><rect x="-28" y="-16" width="44" height="4" rx="2" fill="#9fb3e6"/>', h: 46 }; },
    cheque: function (o) { return { svg: '<rect x="-50" y="-40" width="100" height="40" rx="3" fill="#e9f3ff" stroke="' + C.ink + '" stroke-width="2"/>' + txt(-38, -24, o.s || "SCHECK", 10, C.navy, 800, "start") + '<path d="M10 -10 q6 -8 10 0 t10 0" stroke="' + C.blue + '" stroke-width="2" fill="none"/>', h: 40 }; },
    grill: function () { return { svg: '<path d="M-40 -60 L40 -60 Q36 -32 0 -30 Q-36 -32 -40 -60Z" fill="' + C.ink + '"/><path d="M-20 -30 L-30 0 M20 -30 L30 0" stroke="' + C.ink + '" stroke-width="5"/><path d="M-14 -74 q4 -8 0 -14 M2 -74 q4 -8 0 -14 M18 -74 q4 -8 0 -14" stroke="' + C.grey + '" stroke-width="3" fill="none"/>', h: 88 }; },
    light: function (o) { var r = o.state === "red"; return { svg: '<rect x="-4" y="-80" width="8" height="80" fill="' + C.ink + '"/><rect x="-16" y="-150" width="32" height="74" rx="8" fill="' + C.ink + '"/><circle cx="0" cy="-132" r="10" fill="' + (r ? "#ff5a4f" : "#5a2a2a") + '"/><circle cx="0" cy="-102" r="10" fill="' + (r ? "#1f4d2f" : "#4cdc7f") + '"/>', h: 150 }; },
    bulb: function () { return { svg: '<circle cx="0" cy="-50" r="26" fill="' + C.yellow + '" stroke="' + C.ink + '" stroke-width="2"/><rect x="-12" y="-26" width="24" height="18" rx="3" fill="' + C.grey + '"/><path d="M-8 -54 L0 -44 L8 -54" stroke="#b07f00" stroke-width="2" fill="none"/>', h: 76 }; },
    cert: function (o) { return { svg: '<rect x="-50" y="-70" width="100" height="70" rx="4" fill="' + C.paper + '" stroke="' + C.gold + '" stroke-width="4"/>' + txt(0, -46, o.s || "URKUNDE", 12, C.navy, 800) + '<rect x="-30" y="-36" width="60" height="3" fill="#c3cad9"/><circle cx="30" cy="-12" r="11" fill="' + C.red + '"/><path d="M24 -2 L22 12 L30 6 L38 12 L36 -2" fill="' + C.red + '"/>', h: 70 }; },
    block: function (o) { var w = o.w || 140, hh = o.h || 44, dark = o.dark !== false; return { svg: '<rect x="' + (-w / 2) + '" y="' + (-hh) + '" width="' + w + '" height="' + hh + '" rx="8" fill="' + (o.c || C.navy) + '" stroke="' + C.ink + '" stroke-width="2"/>' + lines(0, -hh / 2 + 5 - (wrap(o.s || "", Math.floor(w / 8)).length - 1) * 7, wrap(o.s || "", Math.floor(w / 8)), 13, dark ? "#fff" : C.ink, 800, 14), h: hh }; },
    safe: function () { return { svg: '<rect x="-40" y="-80" width="80" height="80" rx="6" fill="#7d879f" stroke="' + C.ink + '" stroke-width="2"/><circle cx="0" cy="-40" r="16" fill="#c9d2e6" stroke="' + C.ink + '" stroke-width="2"/><path d="M0 -40 L0 -52" stroke="' + C.ink + '" stroke-width="3"/>', h: 80 }; },
    heart: function () { return { svg: '<path d="M0 -6 C-30 -26 -26 -54 -10 -54 C-4 -54 0 -48 0 -44 C0 -48 4 -54 10 -54 C26 -54 30 -26 0 -6Z" fill="' + C.red + '"/>', h: 54 }; },
    pot: function () { return { svg: '<rect x="-34" y="-40" width="68" height="40" rx="6" fill="#c9d2e6" stroke="' + C.ink + '" stroke-width="2"/><rect x="-40" y="-46" width="80" height="8" rx="3" fill="' + C.ink + '"/><path d="M-34 -30 L-46 -30 M34 -30 L46 -30" stroke="' + C.ink + '" stroke-width="5"/>', h: 46 }; },
    pipe: function (o) { return { svg: '<rect x="-80" y="-24" width="160" height="18" rx="4" fill="#9aa6bf" stroke="' + C.ink + '" stroke-width="2"/><path d="M-4 -24 L2 -16 L-4 -10" stroke="' + C.ink + '" stroke-width="2" fill="none"/><g class="drops" fill="#4aa3ff"' + (o.fixed ? ' opacity="0"' : '') + '><path d="M0 -2 q-5 8 0 12 q5 -4 0 -12z"/><path d="M8 6 q-4 7 0 10 q4 -3 0 -10z"/></g>', h: 24 }; },
    fence: function (o) { var h = ""; for (var i = -3; i <= 3; i++) h += '<path d="M' + (i * 22 - 8) + ' 0 L' + (i * 22 - 8) + ' -60 L' + (i * 22) + ' -70 L' + (i * 22 + 8) + ' -60 L' + (i * 22 + 8) + ' 0Z" fill="' + (o.c || "#fff") + '" stroke="' + C.ink + '" stroke-width="2"/>'; return { svg: h + '<rect x="-80" y="-48" width="160" height="7" fill="' + (o.c || "#fff") + '" stroke="' + C.ink + '" stroke-width="1.5"/>', h: 70 }; },
    flag: function (o) {
      var F = { AT: ["#e04848", "#fff", "#e04848"], IT: ["#2e9d62", "#fff", "#e04848", "v"], DE: ["#1b1b1b", "#e04848", "#ffd23f"], ES: ["#e04848", "#ffd23f", "#e04848"], FR: ["#2f56c8", "#fff", "#e04848", "v"], NL: ["#e04848", "#fff", "#2f56c8"], CN: ["#e04848", "#e04848", "#e04848"], EU: ["#2f56c8", "#2f56c8", "#2f56c8"] }[o.code || "AT"];
      var h = '<rect x="-3" y="-120" width="6" height="120" fill="' + C.ink + '"/>', vert = F[3] === "v";
      for (var i = 0; i < 3; i++) h += vert ? '<rect x="' + (3 + i * 22) + '" y="-118" width="22" height="44" fill="' + F[i] + '"/>' : '<rect x="3" y="' + (-118 + i * 14.67) + '" width="66" height="14.67" fill="' + F[i] + '"/>';
      if (o.code === "EU") for (var k = 0; k < 8; k++) h += '<circle cx="' + (36 + 14 * Math.cos(k * Math.PI / 4)) + '" cy="' + (-96 + 14 * Math.sin(k * Math.PI / 4)) + '" r="2" fill="' + C.yellow + '"/>';
      return { svg: h + '<rect x="3" y="-118" width="66" height="44" fill="none" stroke="' + C.ink + '" stroke-width="1.5"/>', h: 120 };
    },
    star: function () { return { svg: '<path d="M0 -50 L12 -30 L34 -28 L18 -12 L22 10 L0 0 L-22 10 L-18 -12 L-34 -28 L-12 -30Z" transform="translate(0,-10)" fill="' + C.yellow + '" stroke="' + C.ink + '" stroke-width="2"/>', h: 60 }; },
    copyright: function () { return { svg: '<circle cx="0" cy="-30" r="28" fill="' + C.yellow + '" stroke="' + C.ink + '" stroke-width="3"/>' + txt(0, -20, "©", 34, C.ink, 800), h: 60 }; }
  };

  function art(o) {
    var r = o.k === "person" ? person(o) : o.k === "crowd" ? crowd(o) : (OBJ[o.k] || OBJ.box)(o);
    if (o.flip) r.svg = '<g transform="scale(-1,1)">' + r.svg + "</g>";
    if (o.scale) { r.svg = '<g transform="scale(' + o.scale + ')">' + r.svg + "</g>"; r.h *= o.scale; if (r.hand) r.hand = [r.hand[0] * o.scale, r.hand[1] * o.scale]; }
    return r;
  }

  /* ───────── Kulissen ───────── */
  function bg(kind) {
    var sky = '<rect width="800" height="450" fill="url(#fSky)"/>', ground = function (c) { return '<rect y="390" width="800" height="60" fill="' + (c || "#c9d4ea") + '"/><rect y="388" width="800" height="4" fill="#aab6d3"/>'; };
    var h = "";
    switch (kind) {
      case "shop":
        h = '<rect width="800" height="450" fill="#f6ead9"/>';
        for (var s = 0; s < 3; s++) { h += '<rect x="40" y="' + (90 + s * 70) + '" width="360" height="8" fill="#b98a5c"/>'; for (var p = 0; p < 9; p++) h += '<rect x="' + (50 + p * 38) + '" y="' + (58 + s * 70) + '" width="28" height="32" rx="3" fill="' + ["#f2a541", "#3ab0c4", "#e4572e", "#9b5de5", "#2e9d62"][(p + s) % 5] + '" opacity=".75"/>'; }
        h += ground("#dcc6a6") + '<rect x="470" y="300" width="320" height="90" fill="#b3835a" stroke="' + C.ink + '" stroke-width="2"/><rect x="460" y="292" width="340" height="12" rx="3" fill="#8f6440"/>';
        break;
      case "room": h = '<rect width="800" height="450" fill="#e9eefb"/><rect x="70" y="70" width="170" height="150" fill="#bfe0ff" stroke="#fff" stroke-width="10"/><path d="M155 70 L155 220 M70 145 L240 145" stroke="#fff" stroke-width="6"/><rect x="560" y="90" width="120" height="90" fill="#f4d9b0" stroke="#d9a441" stroke-width="6"/>' + ground("#cfb895"); break;
      case "office": h = '<rect width="800" height="450" fill="#e6ecf7"/><rect x="60" y="60" width="260" height="170" fill="#cfe4ff" stroke="#fff" stroke-width="10"/><rect x="80" y="140" width="40" height="90" fill="#b8c6e6"/><rect x="130" y="110" width="50" height="120" fill="#a9b8dc"/><rect x="190" y="150" width="40" height="80" fill="#b8c6e6"/><rect x="240" y="120" width="60" height="110" fill="#a9b8dc"/>' + ground("#c9d0e2") + '<rect x="500" y="320" width="270" height="14" rx="3" fill="#8f6440"/><rect x="520" y="334" width="10" height="56" fill="#8f6440"/><rect x="740" y="334" width="10" height="56" fill="#8f6440"/>'; break;
      case "park": h = sky + '<path d="M0 330 Q200 270 400 320 T800 300 L800 390 L0 390Z" fill="#9fd4a4"/>' + ground("#bfe3b4") + '<path d="M300 450 Q400 400 520 390" stroke="#e8dcc0" stroke-width="40" fill="none"/>'; break;
      case "garden": h = sky + '<rect y="300" width="800" height="90" fill="#8cc78f"/>' + ground("#a9d89a"); break;
      case "court": h = '<rect width="800" height="450" fill="#ece6da"/><rect x="60" y="40" width="680" height="46" fill="#d6cdb9"/>' + txt(400, 72, "GERICHT", 24, "#7a6a4f", 800);
        for (var c = 0; c < 6; c++) h += '<rect x="' + (90 + c * 120) + '" y="96" width="30" height="292" fill="#f7f2e8" stroke="#cfc4ad" stroke-width="2"/>';
        h += ground("#cfc4ad"); break;
      case "bank": h = '<rect width="800" height="450" fill="#e3e9f5"/><rect x="60" y="40" width="680" height="46" fill="#c6d0e6"/>' + txt(400, 72, "BANK", 24, C.navy, 800);
        for (var b = 0; b < 6; b++) h += '<rect x="' + (90 + b * 120) + '" y="96" width="30" height="292" fill="#f4f7fd" stroke="#c6d0e6" stroke-width="2"/>';
        h += ground("#c6d0e6"); break;
      case "night": h = '<rect width="800" height="450" fill="#18213f"/><circle cx="680" cy="80" r="34" fill="#f6f1c7"/><circle cx="668" cy="72" r="34" fill="#18213f"/>';
        for (var n = 0; n < 24; n++) h += '<circle cx="' + ((n * 97) % 800) + '" cy="' + (20 + (n * 53) % 160) + '" r="1.6" fill="#fff" opacity=".7"/>';
        h += '<rect x="40" y="200" width="120" height="190" fill="#24305a"/><rect x="190" y="160" width="90" height="230" fill="#2a3768"/><rect x="560" y="210" width="140" height="180" fill="#24305a"/>' + ground("#2b3557"); break;
      case "lake": h = sky + '<path d="M0 260 L120 170 L220 240 L330 150 L470 250 L600 180 L800 260 L800 300 L0 300Z" fill="#a9b8dc"/><rect y="290" width="800" height="100" fill="#8fc3e8"/><path d="M40 330 q20 -6 40 0 M300 350 q20 -6 40 0 M600 320 q20 -6 40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' + ground("#d8c3a5"); break;
      case "world": h = '<rect width="400" height="450" fill="#e7efff"/><rect x="400" width="400" height="450" fill="#fff3e3"/><path d="M400 0 L400 450" stroke="' + C.ink + '" stroke-width="3" stroke-dasharray="10 10"/>' + ground("#d7dce8"); break;
      case "party": h = '<rect width="800" height="450" fill="#fdeef3"/>';
        for (var g = 0; g < 16; g++) h += '<path d="M' + (g * 50) + ' 30 L' + (g * 50 + 50) + ' 30 L' + (g * 50 + 25) + ' 62Z" fill="' + ["#f7a8c4", "#ffd23f", "#8fb3ff", "#9fe0b4"][g % 4] + '"/>';
        h += '<path d="M0 30 L800 30" stroke="' + C.ink + '" stroke-width="2"/>' + ground("#e9cfda") + '<rect x="300" y="300" width="200" height="12" rx="3" fill="#fff" stroke="' + C.ink + '" stroke-width="2"/><rect x="310" y="312" width="8" height="78" fill="#fff"/><rect x="482" y="312" width="8" height="78" fill="#fff"/>'; break;
      case "fair": h = '<rect width="800" height="450" fill="#eef1f8"/>';
        for (var f = 0; f < 4; f++) h += '<rect x="' + (20 + f * 200) + '" y="90" width="170" height="40" fill="' + ["#2f56c8", "#e4572e", "#2e9d62", "#9b5de5"][f] + '"/><rect x="' + (20 + f * 200) + '" y="130" width="170" height="10" fill="#fff" opacity=".6"/>';
        h += txt(400, 60, "MÖBELMESSE", 22, C.ink, 800) + ground("#d6dbea"); break;
      case "stairs": h = '<rect width="800" height="450" fill="#ece8f3"/>';
        for (var st = 0; st < 7; st++) h += '<rect x="' + (440 + st * 50) + '" y="' + (390 - (st + 1) * 34) + '" width="' + (360 - st * 50) + '" height="34" fill="#cfc6e0" stroke="#a99fc4" stroke-width="2"/>';
        h += ground("#cfc6e0"); break;
      case "lab": h = '<rect width="800" height="450" fill="#e8f3f3"/><rect x="40" y="260" width="300" height="12" fill="#7d879f"/><rect x="60" y="210" width="30" height="50" rx="4" fill="#9fe0d8" stroke="' + C.ink + '"/><rect x="110" y="190" width="24" height="70" rx="4" fill="#ffd8a8" stroke="' + C.ink + '"/>' + ground("#cde3e3"); break;
      default: h = '<rect width="800" height="450" fill="url(#fSky)"/>';
        for (var dx = 0; dx < 800; dx += 40) for (var dy = 20; dy < 390; dy += 40) h += '<circle cx="' + dx + '" cy="' + dy + '" r="1.4" fill="#9fb0d4" opacity=".5"/>';
        h += ground("#d7deee");
    }
    return h;
  }

  var DEFS = '<defs><linearGradient id="fSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcd3ff"/><stop offset="1" stop-color="#eef3ff"/></linearGradient>' +
    '<marker id="fArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="context-stroke"/></marker></defs>';

  /* ───────── Laufzeit ───────── */
  function el(tag, attrs, html) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (html) e.innerHTML = html; return e; }
  function tr(x, y) { return "translate(" + x + "px," + y + "px)"; }
  var COL = { ok: C.green, bad: C.red, warn: "#d98a00", navy: C.navy, blue: C.blue };

  var INTRO = 1.6; /* Sekunden Titelkarte vor jeder Szene */
  var SKY = { park: 1, garden: 1, lake: 1, street: 1, blank: 1 };
  function Film(svg, scene, rate, info) {
    this.svg = svg; this.sc = scene; this.rate = rate || 1; this.t = 0; this.playing = false; this.anims = []; this.counts = [];
    this.info = info || null; this.OFF = info ? INTRO : 0;
    var off = this.OFF;
    this.q = scene.tl.map(function (a) { return { t: a[0] + off, a: a[1], args: a.slice(2) }; }).sort(function (a, b) { return a.t - b.t; });
    this.qi = 0; this.lawN = 0; this.build();
  }
  Film.prototype.build = function () {
    var svg = this.svg, sc = this.sc, self = this;
    svg.innerHTML = DEFS + bg(sc.bg);
    if (SKY[sc.bg] || !sc.bg) this.clouds();
    this.L = { actors: el("g", {}), fx: el("g", {}), ui: el("g", {}) };
    svg.appendChild(this.L.actors); svg.appendChild(this.L.fx); svg.appendChild(this.L.ui);
    this.A = {};
    Object.keys(sc.actors).forEach(function (id, n) {
      var o = sc.actors[id], r = art(o);
      var g = el("g", { "class": "fa" }), inner = el("g", {}), body = el("g", {}, r.svg);
      var sw = o.k === "person" ? (o.kid ? 23 : 31) : Math.min(80, Math.max(16, (o.w || ({ car: 150, truck: 180, house: 140, building: 130, bike: 90, boat: 180, crowd: 170, scales: 70, block: 140 }[o.k] || 50)) / 2));
      if (o.y >= 380 && o.k !== "flag" && o.k !== "sign" && o.k !== "light") g.appendChild(el("ellipse", { cx: 0, cy: 3, rx: sw, ry: 6, fill: "#1b2440", opacity: 0.14 }));
      inner.appendChild(body); g.appendChild(inner);
      var lab = null;
      if (o.name) { lab = el("text", { x: 0, y: 24, "font-size": 15, "font-weight": 800, fill: C.ink, "text-anchor": "middle", stroke: "#fff", "stroke-width": 5, "paint-order": "stroke", "stroke-linejoin": "round" }); lab.textContent = o.name; g.appendChild(lab); }
      g.style.transform = tr(o.x, o.y); if (o.hidden) g.style.opacity = 0;
      self.L.actors.appendChild(g);
      var A = self.A[id] = { g: g, inner: inner, body: body, lab: lab, x: o.x, y: o.y, h: r.h, hand: r.hand || [0, -r.h / 2], o: o, tags: {}, carry: [], beam: 0 };
      if (o.k === "person") self.idle(A, n);
    });
    if (this.info) this.titleCard();
  };
  /* Lebendigkeit: Atmen und Blinzeln laufen dauerhaft mit (pausieren mit dem Film). */
  Film.prototype.idle = function (A, n) {
    this.anim(A.body, [{ transform: "translateY(0px)" }, { transform: "translateY(-1.6px)" }, { transform: "translateY(0px)" }], 2.4 + (n % 3) * 0.35, { it: Infinity, keep: true, ease: "ease-in-out" });
    this.blink(A, n);
  };
  Film.prototype.blink = function (A, n) {
    var ey = A.body.querySelector(".eyes"); if (!ey) return;
    this.anim(ey, [{ transform: "scaleY(1)", offset: 0 }, { transform: "scaleY(1)", offset: 0.9 }, { transform: "scaleY(0.12)", offset: 0.94 }, { transform: "scaleY(1)", offset: 0.98 }, { transform: "scaleY(1)", offset: 1 }], 3.2 + ((n || 0) % 4) * 0.7, { it: Infinity, keep: true, ease: "linear" });
  };
  Film.prototype.clouds = function () {
    var self = this;
    [[90, 70, 1], [420, 46, 0.8], [650, 96, 1.15]].forEach(function (c, i) {
      var cl = el("g", { opacity: 0.9 }, '<g transform="translate(' + c[0] + "," + c[1] + ") scale(" + c[2] + ')"><ellipse cx="0" cy="0" rx="34" ry="14" fill="#fff"/><circle cx="-14" cy="-8" r="14" fill="#fff"/><circle cx="8" cy="-12" r="18" fill="#fff"/><circle cx="26" cy="-4" r="11" fill="#fff"/></g>');
      self.svg.appendChild(cl);
      self.anim(cl, [{ transform: "translateX(0px)" }, { transform: "translateX(" + (60 + i * 25) + "px)" }], 14 + i * 4, { it: Infinity, keep: true, ease: "ease-in-out", dir: "alternate" });
    });
  };
  Film.prototype.titleCard = function () {
    var i = this.info, card = el("g", {}), self = this, t = wrap(this.sc.h, 30);
    var hh = 70 + t.length * 34;
    card.innerHTML = '<rect width="800" height="450" fill="#0e1526" opacity=".72"/><g transform="translate(400,' + (225 - hh / 2) + ')"><rect x="-260" y="0" width="520" height="' + hh + '" rx="18" fill="#fffdf6" stroke="#1b2440" stroke-width="3"/><rect x="-74" y="-16" width="148" height="32" rx="16" fill="' + C.yellow + '" stroke="#1b2440" stroke-width="2"/>' + txt(0, 6, "SZENE " + (i.i + 1) + " / " + i.n, 15, C.ink, 800, "middle", ' letter-spacing="1.5"') + lines(0, 58, t, 30, C.navy, 800, 34) + "</g>";
    this.L.ui.appendChild(card);
    card._tr = "";
    this.anim(card, [{ opacity: 0 }, { opacity: 1 }], 0.3);
    this.later(INTRO - 0.45, function () { self.anim(card, [{ opacity: 1 }, { opacity: 0 }], 0.4); self.later(0.42, function () { card.remove(); }); });
  };
  Film.prototype.anim = function (node, kf, dur, opt) {
    opt = opt || {};
    var a = node.animate(kf, { duration: Math.max(1, dur * 1000), fill: "forwards", easing: opt.ease || "cubic-bezier(.3,.7,.2,1)", iterations: opt.it || 1, direction: opt.dir || "normal" });
    a.playbackRate = this.rate; if (!this.playing) a.pause();
    var list = this.anims; list.push(a);
    a.onfinish = function () { if (!opt.keep) { try { a.commitStyles(); } catch (e) {} a.cancel(); } var i = list.indexOf(a); if (i > -1) list.splice(i, 1); };
    return a;
  };
  Film.prototype.later = function (dt, fn) { var it = { t: this.t + dt, fn: fn }, q = this.q, i = this.qi; while (i < q.length && q[i].t <= it.t) i++; q.splice(i, 0, it); };
  Film.prototype.moveTo = function (A, x, y, d, walk) {
    var self = this, dx = x - A.x, dy = y - A.y;
    this.anim(A.g, [{ transform: tr(A.x, A.y) }, { transform: tr(x, y) }], d, { ease: walk ? "linear" : undefined });
    if (walk && A.o.k === "person") {
      var steps = Math.max(1, Math.round(d / 0.36));
      this.anim(A.inner, [{ transform: "translateY(0px)" }, { transform: "translateY(-5px)" }, { transform: "translateY(0px)" }], 0.36, { it: steps * 2, ease: "ease-in-out" });
      var ll = A.body.querySelector(".leg-l"), lr = A.body.querySelector(".leg-r"), al = A.body.querySelector(".arm-l"), ar = A.body.querySelector(".arm-r");
      var swing = function (n, a) { if (n) self.anim(n, [{ transform: "rotate(0deg)" }, { transform: "rotate(" + a + "deg)" }, { transform: "rotate(0deg)" }, { transform: "rotate(" + (-a) + "deg)" }, { transform: "rotate(0deg)" }], 0.72, { it: steps, ease: "linear" }); };
      swing(ll, 22); swing(lr, -22);
      if (!A.carry.length) { swing(al, -18); swing(ar, 18); }
    }
    A.x = x; A.y = y;
    Object.keys(A.tags).forEach(function (k) { var tg = A.tags[k], nx = tg._x + dx, ny = tg._y + dy; self.anim(tg, [{ transform: tr(tg._x, tg._y) }, { transform: tr(nx, ny) }], d); tg._x = nx; tg._y = ny; tg._tr = tr(nx, ny); });
    A.carry.forEach(function (id) { var B = self.A[id]; self.moveTo(B, B.x + dx, B.y + dy, d); });
  };
  Film.prototype.top = function (A) { return A.y - A.h; };
  Film.prototype.pill = function (x, y, s, bgc, fg, fs) {
    fs = fs || 13; var w = tw(s, fs) + 20, g = el("g", {});
    g.innerHTML = '<rect x="' + (-w / 2) + '" y="' + (-fs - 4) + '" width="' + w + '" height="' + (fs + 12) + '" rx="' + ((fs + 12) / 2) + '" fill="' + bgc + '" stroke="' + C.ink + '" stroke-width="1.5"/>' + txt(0, 0, s, fs, fg || "#fff", 800);
    g._tr = tr(Math.max(w / 2 + 6, Math.min(800 - w / 2 - 6, x)), y);
    g.style.transform = g._tr;
    return g;
  };
  Film.prototype.pop = function (node, d) {
    var b = node._tr || "";
    this.anim(node, [{ opacity: 0, transform: b + " scale(0.4)" }, { opacity: 1, transform: b + " scale(1.08)", offset: 0.7 }, { opacity: 1, transform: b + " scale(1)" }], d || 0.45);
  };
  Film.prototype.exec = function (it) {
    if (it.fn) return it.fn();
    var a = it.a, g = it.args, self = this, A = this.A[g[0]];
    switch (a) {
      case "in": {
        var f = g[1] || (A.o.k === "person" ? "left" : "pop");
        A.g.style.opacity = 1;
        if (f === "pop") { this.anim(A.inner, [{ transform: "scale(0)" }, { transform: "scale(1.12)", offset: 0.7 }, { transform: "scale(1)" }], 0.5); }
        else if (f === "fade") this.anim(A.g, [{ opacity: 0 }, { opacity: 1 }], 0.6);
        else { var sx = f === "left" ? -120 : f === "right" ? 920 : A.x, sy = f === "up" ? -60 : f === "down" ? 560 : A.y, ex = A.x, ey = A.y; A.x = sx; A.y = sy; this.moveTo(A, ex, ey, g[2] || 1.4, A.o.k === "person"); }
        break;
      }
      case "out": {
        Object.keys(A.tags).forEach(function (k) { A.tags[k].remove(); }); A.tags = {};
        var t = g[1] || "pop";
        if (t === "pop") this.anim(A.inner, [{ transform: "scale(1)" }, { transform: "scale(0)" }], 0.4);
        else if (t === "fade") this.anim(A.g, [{ opacity: 1 }, { opacity: 0 }], 0.6);
        else this.moveTo(A, t === "left" ? -140 : 940, A.y, g[2] || 1.4, true);
        break;
      }
      case "mv": this.moveTo(A, g[1], g[2] != null ? g[2] : A.y, g[3] || 1.2, A.o.k === "person"); break;
      case "jump": this.anim(A.inner, [{ transform: "translateY(0)" }, { transform: "translateY(-40px)" }, { transform: "translateY(0)" }], 0.6, { ease: "ease-in-out" }); break;
      case "say": {
        var fsz = 17, ls = wrap(g[1], 22), w = Math.min(330, Math.max(76, Math.max.apply(null, ls.map(function (l) { return tw(l, fsz); })) + 30)), hh = ls.length * 21 + 18;
        var ntag = Object.keys(A.tags).length;
        var ax = A.x, ay = this.top(A) - 6 - ntag * 30, bx = Math.max(8, Math.min(792 - w, ax - w / 2)), by = Math.max(6, ay - hh - 16);
        var tx = Math.max(bx + 16, Math.min(bx + w - 16, ax));
        var b = el("g", {}, '<rect x="' + (bx + 3) + '" y="' + (by + 4) + '" width="' + w + '" height="' + hh + '" rx="14" fill="#1b2440" opacity=".18"/><path d="M' + (tx - 9) + " " + (by + hh - 1) + " L" + ax + " " + (ay) + " L" + (tx + 9) + " " + (by + hh - 1) + 'Z" fill="#fff" stroke="' + C.ink + '" stroke-width="2.4" stroke-linejoin="round"/><rect x="' + bx + '" y="' + by + '" width="' + w + '" height="' + hh + '" rx="14" fill="#fff" stroke="' + C.ink + '" stroke-width="2.4"/><rect x="' + (tx - 8) + '" y="' + (by + hh - 3) + '" width="16" height="6" fill="#fff"/>' + lines(bx + w / 2, by + 24, ls, fsz, C.ink, 700, 21));
        b.style.transformOrigin = ax + "px " + ay + "px";
        this.L.fx.appendChild(b); this.pop(b, 0.35);
        var dur = g[2] || 2.6;
        var mo = A.body.querySelector(".mouth");
        if (mo) this.anim(mo, [{ transform: "scaleY(1)" }, { transform: "scaleY(0.3)" }, { transform: "scaleY(1.4)" }, { transform: "scaleY(1)" }], 0.32, { it: Math.max(1, Math.round(Math.min(dur, ls.join(" ").length / 12) / 0.32)), ease: "linear" });
        var arR = A.body.querySelector(".arm-r");
        if (arR && !A.carry.length) { this.anim(arR, [{ transform: "rotate(0deg)" }, { transform: "rotate(-50deg)", offset: 0.2 }, { transform: "rotate(-38deg)", offset: 0.5 }, { transform: "rotate(-50deg)", offset: 0.75 }, { transform: "rotate(0deg)" }], Math.min(dur, 2.2), { ease: "ease-in-out" }); }
        this.later(dur, function () { self.anim(b, [{ opacity: 1 }, { opacity: 0 }], 0.25); self.later(0.3, function () { b.remove(); }); });
        break;
      }
      case "give": {
        var T = this.A[g[1]], side = g[2] === "l" ? -1 : 1;
        Object.keys(this.A).forEach(function (k) { var c = self.A[k].carry, i = c.indexOf(g[0]); if (i > -1) c.splice(i, 1); });
        A.g.style.opacity = 1;
        if (T.o.k === "person" && A.h > 64 && !A.small) { var rs = art(Object.assign({}, A.o, { scale: (A.o.scale || 1) * 0.5 })); A.body.innerHTML = rs.svg; A.h = rs.h; A.small = true; }
        this.moveTo(A, T.x + T.hand[0] * side + (T.o.k === "person" ? 0 : 0), T.y + T.hand[1] + 14, g[3] || 1);
        if (T.o.k === "person") T.carry.push(g[0]);
        break;
      }
      case "drop": this.moveTo(A, g[1], g[2] != null ? g[2] : 390, g[3] || 0.9); Object.keys(this.A).forEach(function (k) { var c = self.A[k].carry, i = c.indexOf(g[0]); if (i > -1) c.splice(i, 1); }); break;
      case "stamp": {
        var col = COL[g[1]] || C.red, s = String(g[0] === undefined ? "" : g[0]);
        var stx = g[2] || 400, sty = g[3] || 190, fs = s.length > 18 ? 24 : 32, sw = tw(s, fs) * 1.24 + 44;
        var st = el("g", {}, '<g transform="rotate(-7)"><rect x="' + (-sw / 2) + '" y="' + (-fs - 6) + '" width="' + sw + '" height="' + (fs + 26) + '" rx="10" fill="#fff" fill-opacity=".9" stroke="' + col + '" stroke-width="5"/>' + txt(0, 4, s, fs, col, 800, "middle", ' letter-spacing="1"') + "</g>");
        st.style.transform = tr(stx, sty);
        var wrapG = el("g", {}); wrapG.appendChild(st); this.L.ui.appendChild(wrapG);
        this.anim(st, [{ transform: tr(stx, sty) + " scale(2.4)", opacity: 0 }, { transform: tr(stx, sty) + " scale(1)", opacity: 1 }], 0.38, { ease: "cubic-bezier(.5,0,.8,.4)" });
        this.later(0.36, function () { self.quake(4); });
        this.later(g[4] || 99, function () { wrapG.remove(); });
        break;
      }
      case "unstamp": while (this.L.ui.lastChild && this.L.ui.lastChild.getAttribute("class") !== "law") { this.L.ui.lastChild.remove(); } break;
      case "law": {
        var lt = /^\d/.test(g[0]) ? "§ " + g[0] : g[0], p = this.pill(0, 0, lt, C.navy, C.yellow, 14);
        var w2 = tw(lt, 14) + 20, lx = 14 + w2 / 2, ly = 30 + this.lawN * 34; this.lawN++;
        p.setAttribute("class", "law"); p.style.transform = tr(lx, ly); this.L.ui.appendChild(p);
        this.anim(p, [{ transform: tr(-w2, ly) }, { transform: tr(lx, ly) }], 0.6);
        break;
      }
      case "arrow": {
        var B = this.A[g[1]], c2 = COL[g[3]] || C.navy;
        var x1 = A.x, y1 = A.y - A.h * 0.6, x2 = B.x, y2 = B.y - B.h * 0.6, mx = (x1 + x2) / 2, my = Math.min(y1, y2) - 60;
        var sh = 22, dxx = x2 - x1, dyy = y2 - y1, len = Math.sqrt(dxx * dxx + dyy * dyy) || 1;
        x1 += dxx / len * sh; y1 += dyy / len * sh; x2 -= dxx / len * sh; y2 -= dyy / len * sh;
        var path = el("path", { d: "M" + x1 + " " + y1 + " Q" + mx + " " + my + " " + x2 + " " + y2, stroke: c2, "stroke-width": 4, fill: "none", "stroke-linecap": "round", "marker-end": "url(#fArr)" });
        if (g[4]) path.setAttribute("stroke-dasharray", "8 7");
        this.L.fx.appendChild(path);
        var L2 = path.getTotalLength ? path.getTotalLength() : 400;
        if (!g[4]) { path.style.strokeDasharray = L2; this.anim(path, [{ strokeDashoffset: L2 }, { strokeDashoffset: 0 }], 0.8); }
        else this.anim(path, [{ opacity: 0 }, { opacity: 1 }], 0.6);
        if (g[2]) { var px = (x1 + 2 * mx + x2) / 4, py = (y1 + 2 * my + y2) / 4; var lp = this.pill(px, py + 5, g[2], "#fff", c2, 13); this.L.fx.appendChild(lp); this.later(0.5, function () { self.pop(lp, 0.35); }); lp.style.opacity = 0; this.later(0.5, function () { lp.style.opacity = 1; }); }
        break;
      }
      case "clearfx": this.L.fx.innerHTML = ""; break;
      case "pulse": this.anim(A.inner, [{ transform: "scale(1)" }, { transform: "scale(1.16)" }, { transform: "scale(1)" }], 0.5); break;
      case "shake": this.anim(A.inner, [{ transform: "translateX(0)" }, { transform: "translateX(-7px)" }, { transform: "translateX(7px)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)" }], 0.5); break;
      case "face": var fc = A.body.querySelector(".face"); if (fc) { fc.innerHTML = face(g[1]); this.blink(A, 1); } this.anim(A.inner, [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }], 0.3); break;
      case "tilt": { var bm = A.body.querySelector(".beam"); if (bm) { this.anim(bm, [{ transform: "rotate(" + A.beam + "deg)" }, { transform: "rotate(" + g[1] + "deg)" }], 1, { ease: "cubic-bezier(.4,1.6,.5,1)" }); A.beam = g[1]; } break; }
      case "zap": {
        var zx = A.x, zt = this.top(A);
        var z = el("path", { d: "M" + (zx + 20) + " 0 L" + (zx - 10) + " " + (zt * 0.45) + " L" + (zx + 12) + " " + (zt * 0.5) + " L" + (zx - 6) + " " + zt, stroke: C.yellow, "stroke-width": 8, fill: "none", "stroke-linejoin": "round" });
        this.L.fx.appendChild(z); this.anim(z, [{ opacity: 0 }, { opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }, { opacity: 0 }], 0.7);
        this.later(0.75, function () { z.remove(); });
        this.flash(); this.quake(8);
        this.later(0.4, function () { self.fire(A); });
        break;
      }
      case "fire": this.fire(A); break;
      case "cross": case "check": {
        var ok = a === "check", blk = A.o.k === "block" || A.o.k === "counter", cx = blk ? A.x + (A.o.w || 140) / 2 - 6 : A.x, cy = blk ? A.y - A.h + 4 : A.y - A.h / 2, r = blk ? 24 : Math.min(60, Math.max(26, A.h / 2.4));
        var mk = el("g", {}, ok ? '<circle r="' + r * 0.7 + '" fill="' + C.green + '" stroke="#fff" stroke-width="4"/><path d="M' + (-r * 0.32) + ' 0 L' + (-r * 0.06) + " " + r * 0.26 + " L" + r * 0.36 + " " + (-r * 0.26) + '" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' : '<path d="M' + (-r) + " " + (-r) + " L" + r + " " + r + " M" + r + " " + (-r) + " L" + (-r) + " " + r + '" stroke="' + C.red + '" stroke-width="11" stroke-linecap="round"/>');
        mk.style.transform = tr(cx, cy); this.L.fx.appendChild(mk);
        this.anim(mk, [{ transform: tr(cx, cy) + " scale(0)" }, { transform: tr(cx, cy) + " scale(1.15)", offset: 0.7 }, { transform: tr(cx, cy) + " scale(1)" }], 0.45);
        A.marks = (A.marks || []).concat(mk);
        break;
      }
      case "unmark": (A.marks || []).forEach(function (m) { m.remove(); }); A.marks = []; break;
      case "txt": if (A.lab) { A.lab.textContent = g[1]; this.anim(A.g, [{ opacity: 0.4 }, { opacity: 1 }], 0.4); } break;
      case "tag": {
        var slot = g[3] || "t", old = A.tags[slot]; if (old) old.remove();
        var yy = this.top(A) - 12 - (slot === "t2" ? 30 : 0);
        var tg = this.pill(A.x, yy, g[1], COL[g[2]] || C.navy, "#fff", 13);
        var mm = /translate\(([-\d.]+)px,([-\d.]+)px\)/.exec(tg._tr); tg._x = +mm[1]; tg._y = +mm[2];
        this.L.fx.appendChild(tg); A.tags[slot] = tg; this.pop(tg, 0.4);
        break;
      }
      case "untag": Object.keys(A.tags).forEach(function (k) { A.tags[k].remove(); }); A.tags = {}; break;
      case "count": this.counts.push({ A: A, from: g[1], to: g[2], t0: this.t, d: g[3] || 2, pre: g[4] || "", suf: g[5] || "" }); break;
      case "set": { var nm = A.body.querySelector(g[1] || ".num"); if (nm) { nm.textContent = g[2]; this.anim(A.inner, [{ transform: "scale(1)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }], 0.35); } break; }
      case "art": {
        var o2 = Object.assign({}, A.o, g[1]); A.o = o2; var r2 = art(o2); A.body.innerHTML = r2.svg; A.h = r2.h; if (r2.hand) A.hand = r2.hand; if (o2.k === "person") this.blink(A, 2);
        this.anim(A.inner, [{ transform: "scale(1)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }], 0.4);
        break;
      }
      case "dim": this.anim(A.g, [{ opacity: 1 }, { opacity: g[1] != null ? g[1] : 0.3 }], 0.6); break;
      case "undim": this.anim(A.g, [{ opacity: 0.3 }, { opacity: 1 }], 0.5); break;
      case "spin": { var hd = A.body.querySelector(".hand"); if (hd) this.anim(hd, [{ transform: "rotate(0deg)" }, { transform: "rotate(" + (g[1] || 720) + "deg)" }], g[2] || 2, { ease: "linear" }); break; }
      case "glow": this.anim(A.inner, [{ filter: "drop-shadow(0 0 0 #ffd23f)" }, { filter: "drop-shadow(0 0 14px #ffd23f)" }, { filter: "drop-shadow(0 0 0 #ffd23f)" }], 1.2, { it: g[1] || 2 }); break;
      case "confetti": this.confetti(); break;
      case "rain": this.rain(g[0] || "€"); break;
      case "quake": this.quake(10); break;
      case "flash": this.flash(); break;
    }
  };
  Film.prototype.quake = function (m) { this.anim(this.L.actors, [{ transform: "translate(0,0)" }, { transform: "translate(" + m + "px," + (-m / 2) + "px)" }, { transform: "translate(" + (-m) + "px," + (m / 2) + "px)" }, { transform: "translate(" + (m / 2) + "px,0)" }, { transform: "translate(0,0)" }], 0.35); };
  Film.prototype.flash = function () { var r = el("rect", { width: 800, height: 450, fill: "#fff" }); this.L.ui.appendChild(r); this.anim(r, [{ opacity: 0.8 }, { opacity: 0 }], 0.5); var self = this; this.later(0.55, function () { r.remove(); }); };
  Film.prototype.fire = function (A) {
    var w = Math.min(120, A.h), fg = el("g", {});
    for (var i = 0; i < 5; i++) { var x = A.x + (i - 2) * w / 5, f = el("path", { d: "M" + x + " " + (A.y - 4) + " q-16 -30 0 -" + (40 + (i % 2) * 24) + " q16 30 0 " + (40 + (i % 2) * 24) + "z", fill: i % 2 ? "#ff8a2b" : "#ffd23f", opacity: 0.9 }); f.style.transformOrigin = x + "px " + A.y + "px"; fg.appendChild(f); this.anim(f, [{ transform: "scaleY(.7)" }, { transform: "scaleY(1.15)" }, { transform: "scaleY(.7)" }], 0.5 + i * 0.07, { it: Infinity, keep: true }); }
    this.L.fx.appendChild(fg);
  };
  Film.prototype.confetti = function () {
    var cols = ["#ffd23f", "#e04848", "#2f56c8", "#2e9d62", "#f7a8c4"];
    for (var i = 0; i < 40; i++) {
      var x = Math.random() * 800, r = el("rect", { x: -4, y: -6, width: 8, height: 12, fill: cols[i % 5] }); this.L.ui.appendChild(r);
      this.anim(r, [{ transform: "translate(" + x + "px,-20px) rotate(0deg)" }, { transform: "translate(" + (x + (Math.random() * 120 - 60)) + "px,470px) rotate(" + (360 + Math.random() * 360) + "deg)" }], 1.8 + Math.random() * 1.2, { ease: "cubic-bezier(.2,.6,.4,1)" });
    }
  };
  Film.prototype.rain = function (s) {
    for (var i = 0; i < 18; i++) {
      var x = 60 + Math.random() * 680, g = el("g", {}, '<rect x="-16" y="-10" width="32" height="20" rx="3" fill="#6cc68a" stroke="#2e7d4f" stroke-width="1.5"/>' + txt(0, 5, s, 12, "#1d5c37", 800)); this.L.ui.appendChild(g);
      this.anim(g, [{ transform: "translate(" + x + "px,-30px) rotate(-20deg)" }, { transform: "translate(" + (x + 30) + "px,470px) rotate(25deg)" }], 1.6 + Math.random(), { ease: "ease-in" });
    }
  };
  Film.prototype.tick = function (dt) {
    if (!this.playing) return;
    this.t += dt * this.rate;
    while (this.qi < this.q.length && this.q[this.qi].t <= this.t) this.exec(this.q[this.qi++]);
    var self = this;
    this.counts = this.counts.filter(function (c) {
      var p = Math.min(1, (self.t - c.t0) / c.d), v = Math.round(c.from + (c.to - c.from) * p), nm = c.A.body.querySelector(".num");
      if (nm) nm.textContent = c.pre + (v >= 1900 && v <= 2100 ? String(v) : v.toLocaleString("de-AT")) + c.suf;
      return p < 1;
    });
  };
  Film.prototype.play = function () { this.playing = true; var r = this.rate; this.anims.forEach(function (a) { a.playbackRate = r; a.play(); }); };
  Film.prototype.pause = function () { this.playing = false; this.anims.forEach(function (a) { a.pause(); }); };
  Film.prototype.setRate = function (r) { this.rate = r; this.anims.forEach(function (a) { a.playbackRate = r; }); };
  Film.prototype.destroy = function () { this.anims.forEach(function (a) { a.cancel(); }); this.anims = []; this.svg.innerHTML = ""; };
  /* Standbild: alle Schritte sofort ausführen (für Vorschau ohne Bewegung) */
  Film.prototype.still = function (upto) {
    this.rate = 1000; this.playing = true;
    this.t = upto; while (this.qi < this.q.length && this.q[this.qi].t <= upto) this.exec(this.q[this.qi++]);
    this.anims.slice().forEach(function (a) { try { a.finish(); } catch (e) {} });
    this.playing = false; this.rate = 1;
  };

  window.FilmEngine = { Film: Film, FONT: FONT, INTRO: INTRO };
})();
