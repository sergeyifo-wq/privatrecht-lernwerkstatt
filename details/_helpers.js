/* Ausführliche Kapitelfassung – Bausteine.
   Ein Abschnitt: { h: "Überschrift", b: [ Blöcke ] }
   Blöcke: Text (String) · D(Begriff, Text) · M(Text, Titel?) · B(Titel, Text) · X(Titel, Text)
           F(Text) · L([Punkte]) · S(Titel, [Schritte]) · T([Spalten], [[Zeilen]]) */
window.DETAILS = window.DETAILS || {};
window.DX = {
  D: function (term, t) { return { k: "def", h: term, t: t }; },
  M: function (t, h) { return { k: "merke", h: h || "Merke", t: t }; },
  B: function (h, t) { return { k: "bsp", h: h, t: t }; },
  X: function (h, t) { return { k: "aus", h: h, t: t }; },
  F: function (t, h) { return { k: "fehler", h: h || "Typischer Fehler", t: t }; },
  L: function (items) { return { k: "list", items: items }; },
  S: function (h, steps) { return { k: "steps", h: h, items: steps }; },
  T: function (cols, rows) { return { k: "table", cols: cols, rows: rows }; }
};
