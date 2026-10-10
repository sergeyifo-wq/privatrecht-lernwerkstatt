# Privatrecht Lernwerkstatt

Interaktive Lernplattform zum österreichischen Privatrecht (Basismodul, Rechtsstand Herbst 2026).

**Live:** https://sergeyifo-wq.github.io/privatrecht-lernwerkstatt/

## Inhalt

- **Lernen:** 20 Kapitel (Teil A–H) mit
  - **Trickfilm:** 75 gezeichnete, animierte Szenen zu den Fällen, mit Untertiteln und optionaler Sprachausgabe
  - **Schaubild-Video** und **Schaubilder** (Stufenbau, Vertretungsdreieck, Prüfschemata, Tabellen)
  - **Auf einen Blick**, **Klausurfallen** und **Fälle mit Lösung**
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

Lokal starten: `index.html` im Browser öffnen.

## Hinweis

Lernhilfe auf Basis von Kursunterlagen. Ersetzt weder den Gesetzestext (RIS) noch das Lehrbuch.
