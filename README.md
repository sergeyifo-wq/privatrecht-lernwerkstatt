# Privatrecht Lernwerkstatt

Interaktive Lernplattform zum österreichischen Privatrecht (Basismodul, Rechtsstand Herbst 2026).

**Live:** https://sergeyifo-wq.github.io/privatrecht-lernwerkstatt/

## Inhalt

- **Lernen:** 20 Kapitel (Teil A–H) mit
  - **Kompakt / Ausführlich:** Umschalter zwischen Kurzfassung und dem vollständigen Kapiteltext (Definitionen, Prüfschemata, Tabellen, Beispiele, Merke-Boxen, typische Fehler)
  - **Trickfilm:** 75 gezeichnete, animierte Szenen zu den Fällen, mit Untertiteln und optionaler Sprachausgabe
  - **Schaubild-Video** und **Schaubilder** (Stufenbau, Vertretungsdreieck, Prüfschemata, Tabellen)
  - **Auf einen Blick**, **Klausurfallen** und **Fälle mit Lösung**
- **Gesetze:** 65 Gesetze (ABGB, UGB, KSchG, GmbHG, AktG, UWG, KartG, WG, SchG, MSchG, PatG, UrhG, B-VG …) im geltenden Wortlaut aus dem RIS, mit Gliederung, Suche, Sprung zu jedem Paragraphen und Hinweis, in welchem Kapitel er vorkommt. Jeder §-Verweis im Lernstoff ist klickbar und öffnet den Gesetzestext in einer Lese-Leiste rechts.
- **Klausur:** 149 Fragen (Single/Multiple Choice, Richtig/Falsch, Rechenaufgaben, Fallfragen), Klausur- oder Übungsmodus, Zeitlimit und eine Auswertung mit Note, Stärken/Schwächen je Kapitel und allen Lösungen

## Technik

Reines HTML/CSS/JavaScript ohne Build-Schritt. Lernfortschritt und Klausurverlauf werden nur im `localStorage` des Browsers gespeichert.

| Datei | Inhalt |
| --- | --- |
| `index.html` | Seite, Layout, Video-Player, Klausur-Engine |
| `content.js` | Kapitelinhalte, Schaubilder, Fälle |
| `questions.js` | Fragenpool |
| `film.js` | Trickfilm-Engine (SVG-Figuren, Zeitleiste, Effekte) |
| `films.js` | Drehbücher der Trickfilme |
| `details/dNN.js` | Ausführliche Fassung je Kapitel |
| `gesetze.js` | Gesetze-Tab, Lese-Leiste, Verlinkung der §-Verweise |
| `laws/*.js` | Gesetzestexte (eine Datei je Gesetz, wird erst beim Öffnen geladen) |

Lokal starten: `index.html` im Browser öffnen.

## Hinweis

Lernhilfe auf Basis von Kursunterlagen. Gesetzestexte: Rechtsinformationssystem des Bundes (RIS), https://www.ris.bka.gv.at, Fassung vom 10.10.2026; amtliche Werke sind nach § 7 UrhG frei. Maßgeblich ist der jeweils aktuelle Text im RIS.
