/* Lerninhalte – basierend auf „Privatrecht – Das Superbuch“ (Rechtsstand Herbst 2026).
   Visual-Typen: flow, pyramid, compare, scale, tree, tri, steps, big, table, cards */
window.TEILE = {
  A: "Grundlagen", B: "Personen und Vertretung", C: "Sachenrecht", D: "Vertragsrecht",
  E: "Gesetzliche Schuldverhältnisse", F: "IPR und UN-Kaufrecht",
  G: "Unternehmens- und Gesellschaftsrecht", H: "Wertpapier-, Wettbewerbs- und Immaterialgüterrecht"
};

window.CHAPTERS = [
/* ───────────── 1 ───────────── */
{ id: 1, teil: "A", title: "Recht und Rechtsverständnis", norms: ["§ 2 ABGB", "§ 6 ABGB", "§ 7 ABGB", "§ 12 ABGB"],
  intro: "Was Recht von Moral und Sitte unterscheidet, wie Normen aufgebaut sind und wie man einen Fall methodisch löst.",
  points: [
    "Recht ist eine Sollensordnung, die mit staatlichem Zwang durchsetzbar ist. Sitte, Moral und Religion sind es nicht.",
    "Entstehungsquellen zeigen, wodurch Recht entsteht; Erkenntnisquellen, wo man es nachliest. Generelle Normen gelten für viele Fälle, individuelle (Urteil, Bescheid, Vertrag) nur für den Einzelfall.",
    "Richterrecht ist keine formelle Rechtsquelle (§ 12 ABGB): Ein Urteil bindet nur die Parteien. Unwissenheit des Gesetzes schützt nicht (§ 2 ABGB).",
    "Jede Rechtsnorm besteht aus Tatbestand und Rechtsfolge: Wenn … dann.",
    "Stufenbau: Baugesetze → Verfassungsgesetze → einfache Gesetze → Verordnungen → Bescheide, Urteile, Verträge. Jede Stufe muss der höheren entsprechen.",
    "EU-Recht: Verordnungen gelten unmittelbar, Richtlinien müssen umgesetzt werden. Unionsrecht hat Anwendungsvorrang.",
    "Dispositives Recht gilt nur, wenn nichts anderes vereinbart ist. Zwingendes Recht (absolut oder relativ zwingend) bindet die Parteien.",
    "Absolute Rechte (Eigentum, Ehre) wirken gegenüber jedermann, relative Rechte (Forderungen) nur gegenüber dem Schuldner.",
    "Falllösung: Frage → Anspruchsgrundlage → Subsumtion → Ergebnis. Auslegung wörtlich, systematisch, historisch, teleologisch; Lücken durch Analogie; Kollisionen durch lex specialis und lex posterior."
  ],
  fehler: [
    "Beredtes Schweigen des Gesetzgebers ist keine Lücke – Analogie ist dann unzulässig.",
    "Eine jüngere Verordnung geht einem älteren Gesetz nicht vor: Der Stufenbau entscheidet, nicht lex posterior.",
    "Ein Urteil bindet nur die Parteien; die faktische Präjudizwirkung ist eine andere Frage.",
    "Relativ zwingendes Recht darf nur zugunsten der geschützten Partei abbedungen werden."
  ],
  video: [
    { h: "Recht oder nur Moral?", n: "Recht unterscheidet sich von Moral, Sitte und Brauch durch eines: Es kann mit staatlichem Zwang durchgesetzt werden. Wer an der Kasse nicht zahlt, riskiert eine Klage. Wer im Bus nicht aufsteht, riskiert nur Missbilligung.",
      v: { type: "compare", left: { h: "Recht", items: ["Sollensordnung", "staatlich durchsetzbar", "z. B. Kaufpreis zahlen (§ 1062)"] }, right: { h: "Moral · Sitte · Brauch", items: ["innere Überzeugung / Erwartung", "Folge: Missbilligung", "z. B. Sitzplatz anbieten"] }, vs: "≠" } },
    { h: "Der Bauplan jeder Norm", n: "Jede Rechtsnorm hat zwei Teile. Der Tatbestand beschreibt die Voraussetzungen, die Rechtsfolge sagt, was dann gilt. Bei der Falllösung prüft man, ob der Sachverhalt unter den Tatbestand passt. Das nennt man Subsumtion.",
      v: { type: "flow", items: [{ t: "Tatbestand", s: "Wenn … (Voraussetzungen)" }, { t: "Subsumtion", s: "Passt der Sachverhalt?" }, { t: "Rechtsfolge", s: "… dann gilt X" }] } },
    { h: "Der Stufenbau der Rechtsordnung", n: "Oben stehen die Baugesetze der Verfassung, darunter Verfassungsgesetze, einfache Gesetze und Verordnungen. Ganz unten die individuellen Akte: Bescheide, Urteile und Verträge. Jede Stufe muss der höheren entsprechen.",
      v: { type: "pyramid", items: ["Baugesetze", "Verfassungsgesetze", "einfache Gesetze", "Verordnungen", "Bescheide · Urteile · Verträge"] } },
    { h: "Dispositiv oder zwingend?", n: "Dispositives Recht ist ein Angebot des Gesetzgebers: Die Parteien dürfen es abändern. Zwingendes Recht nicht. Relativ zwingend heißt: Abweichung nur zugunsten des Geschützten. Beispiel: 20 Urlaubstage im Arbeitsvertrag sind unwirksam, es bleibt bei 30 Werktagen.",
      v: { type: "compare", left: { h: "dispositiv", items: ["gilt, wenn nichts vereinbart", "durch Vertrag ersetzbar"] }, right: { h: "zwingend", items: ["absolut: nie abänderbar", "relativ: nur zugunsten des Geschützten", "z. B. 30 Werktage Urlaub"] } } },
    { h: "Auslegung und Lücken", n: "Vier Methoden helfen beim Verstehen einer Norm: Wortlaut, Systematik, Entstehungsgeschichte und Zweck. Fehlt eine Regel ungewollt, schließt man die Lücke durch Analogie. Widersprechen sich Normen, gehen das speziellere und das jüngere Gesetz vor.",
      v: { type: "cards", items: [{ h: "wörtlich", t: "Wortsinn" }, { h: "systematisch", t: "Zusammenhang im Gesetz" }, { h: "historisch", t: "Wille des Gesetzgebers" }, { h: "teleologisch", t: "Zweck der Norm" }] } }
  ],
  diagrams: [
    { cap: "Gutachtenstil – der Weg durch jeden Klausurfall", v: { type: "steps", items: ["Fallfrage: Wer will was von wem woraus?", "Anspruchsgrundlage nennen (z. B. § 1062 ABGB)", "Tatbestandsmerkmale subsumieren", "Ergebnis formulieren"] } },
    { cap: "Rechte nach ihrer Wirkung", v: { type: "compare", left: { h: "absolut", items: ["wirkt gegen jedermann", "Eigentum, Persönlichkeit, Ehre"] }, right: { h: "relativ", items: ["wirkt nur gegen den Schuldner", "Lohn-, Kaufpreisforderung"] } } }
  ],
  cases: [
    { t: "Die falsche Adressatin", q: "Kellner K hat von Arbeitgeber W noch 1.200 € Lohn offen und will das Geld von Ws Mutter M. Kann er außerdem gegen jeden vorgehen, der seine Ehre verletzt?", a: "Der Lohnanspruch ist ein relatives Recht und wirkt nur zwischen K und W – M schuldet nichts. Die Ehre ist ein absolutes Persönlichkeitsrecht: K kann gegen jedermann vorgehen (Unterlassung, Widerruf, Schadenersatz, § 1330 ABGB)." },
    { t: "Zu wenig Urlaub", q: "A unterschreibt einen Arbeitsvertrag mit 20 Werktagen Urlaub. Nach einem Jahr verlangt sie 30. Zu Recht?", a: "Ja. § 2 UrlG sieht mindestens 30 Werktage vor und ist relativ zwingend. Die Vereinbarung unterschreitet das Minimum und ist insoweit unwirksam – auch trotz Zustimmung." },
    { t: "E-Scooter im Stadtpark", q: "Parkordnung: „Befahren mit Kraftfahrzeugen verboten.“ Tom fährt E-Scooter (25 km/h), Frau F einen E-Rollstuhl in Schrittgeschwindigkeit. Verstoßen beide?", a: "Tom ja (Wortlaut und Zweck: Schutz der Spaziergänger). Frau F nein: Der Rollstuhl gefährdet niemanden; die Norm wird teleologisch reduziert, gestützt auch auf Art 7 B-VG." }
  ]
},
/* ───────────── 2 ───────────── */
{ id: 2, teil: "A", title: "Bürgerliches Recht, Sonderprivatrecht und öffentliches Recht", norms: ["§ 1 ABGB", "§ 1 KSchG", "AHG"],
  intro: "Wo verläuft die Grenze zwischen Privatrecht und öffentlichem Recht – und welches Gesetz geht vor?",
  points: [
    "Das bürgerliche Recht (§ 1 ABGB) ist das allgemeine Privatrecht: die Rechtsbeziehungen der Menschen untereinander.",
    "Nicht die Person, sondern die Handlungsform entscheidet: Die Gemeinde als Käuferin von Bürosesseln handelt privatrechtlich.",
    "Privatrecht = Gleichordnung und Privatautonomie. Öffentliches Recht = Über-/Unterordnung und Legalitätsprinzip (Subjektstheorie: Tritt der Staat hoheitlich auf?).",
    "Die Unterscheidung bestimmt Rechtsweg, Grundsätze und Haftung: allgemeines Schadenersatzrecht oder Amtshaftung (AHG).",
    "Sonderprivatrechte (UGB, MRG, Arbeitsrecht, KSchG, VGG, FAGG) gehen als lex specialis vor; das ABGB gilt subsidiär.",
    "Unternehmer ist, wer ein Geschäft im Betrieb seines Unternehmens abschließt. Sonst ist man Verbraucher – auch bei Gründungsgeschäften.",
    "Das Schuldrecht steht im ABGB historisch bedingt im Teil „Sachenrecht“ – nicht mit dem heutigen Sachenrecht verwechseln."
  ],
  fehler: [
    "Auch Behörden, die privatrechtlich handeln, unterliegen dem ABGB.",
    "Unternehmer ≠ Kaufmann: Der Begriff ist funktional – entscheidend ist, ob das konkrete Geschäft zum Betrieb gehört.",
    "Das ABGB ist nicht immer allein anwendbar: Sonderprivatrecht geht vor."
  ],
  video: [
    { h: "Zwei Welten des Rechts", n: "Im Privatrecht stehen sich Gleichgeordnete gegenüber, die frei Verträge schließen. Im öffentlichen Recht tritt der Staat hoheitlich auf, etwa mit Bescheid oder Zwangsakt. Dort gilt das Legalitätsprinzip.",
      v: { type: "compare", left: { h: "Privatrecht", items: ["Gleichordnung", "Privatautonomie", "Vertrag"] }, right: { h: "Öffentliches Recht", items: ["Über-/Unterordnung", "Legalitätsprinzip", "Bescheid, Zwangsakt"] } } },
    { h: "Die Handlungsform entscheidet", n: "Kauft die Stadt 200 Bürosessel, schließt sie einen gewöhnlichen Kaufvertrag. Das ist Privatrecht. Schreibt das Finanzamt Steuern vor, ist das hoheitlich und damit öffentliches Recht.",
      v: { type: "cards", items: [{ h: "Stadt kauft Sessel", t: "Privatrecht" }, { h: "B mietet Wohnung", t: "Privatrecht" }, { h: "Finanzamt: Steuerbescheid", t: "öffentliches Recht" }, { h: "Polizei nimmt Führerschein ab", t: "öffentliches Recht" }] } },
    { h: "Allgemeines und Sonderprivatrecht", n: "Das ABGB ist die Basis. Für bestimmte Lebensbereiche gibt es Sondergesetze, die vorgehen: das UGB für Unternehmer, das KSchG, VGG und FAGG für Verbraucher, das MRG für Mieten und das Arbeitsrecht.",
      v: { type: "tree", root: "Privatrecht", items: ["ABGB – allgemein, subsidiär", "UGB – Unternehmer", "KSchG · VGG · FAGG – Verbraucher", "MRG – Miete", "Arbeitsrecht"] } },
    { h: "Wer haftet für den Staat?", n: "Bei hoheitlichem Handeln, etwa einer Einsatzfahrt der Polizei, haftet der Rechtsträger nach dem Amtshaftungsgesetz. Fährt ein Gemeindebediensteter Farbe einkaufen, ist das Privatwirtschaftsverwaltung. Dann gilt allgemeines Schadenersatzrecht.",
      v: { type: "compare", left: { h: "hoheitlich", items: ["Amtshaftung (AHG)", "Klage gegen Rechtsträger, nicht Beamten"] }, right: { h: "privatwirtschaftlich", items: ["§§ 1293 ff ABGB", "+ EKHG als Halter"] } } }
  ],
  diagrams: [
    { cap: "Verbrauchergeschäft online – welche Gesetze greifen?", v: { type: "tree", root: "Online-Kauf B2C", items: ["ABGB §§ 1053 ff (Grundlage)", "VGG – Gewährleistung", "FAGG – 14 Tage Rücktritt", "ECG – Informationspflichten", "KSchG – allg. Verbraucherschutz"] } }
  ],
  cases: [
    { t: "Privat oder öffentlich?", q: "(1) Finanzamt schreibt Einkommensteuer vor. (2) Stadt kauft 200 Bürosessel. (3) B mietet von C eine Wohnung. (4) Polizei nimmt D den Führerschein ab.", a: "Privatrecht: (2) und (3) – Gleichordnung, Vertrag. Öffentliches Recht: (1) und (4) – hoheitlicher Bescheid bzw. Zwangsakt." },
    { t: "Zwei Unfälle mit Dienstautos", q: "(a) Polizeiauto im Blaulicht-Einsatz beschädigt fahrlässig As Auto. (b) Gemeindebediensteter fährt zum Baumarkt (Farbe für Gemeinde-Mietshaus) und beschädigt Bs Auto.", a: "(a) Hoheitlich → AHG gegen den Bund, nicht den Polizisten; daneben EKHG. (b) Privatwirtschaftsverwaltung → allgemeines Schadenersatzrecht und EKHG gegen die Gemeinde als Halterin." }
  ]
},
/* ───────────── 3 ───────────── */
{ id: 3, teil: "B", title: "Rechtssubjekte: Rechts-, Geschäfts- und Deliktsfähigkeit", norms: ["§ 22 ABGB", "§ 170 ABGB", "§ 865 ABGB", "§§ 1309 f ABGB"],
  intro: "Ab wann man Rechte hat, Verträge schließen kann und für Schäden haftet.",
  points: [
    "Rechtsfähig ist jeder Mensch ab der Lebendgeburt (nasciturus bedingt schon ab Zeugung, § 22 ABGB) sowie jede juristische Person.",
    "Rechtsfähigkeit ≠ Geschäftsfähigkeit: Auch ein Baby kann Eigentümer sein.",
    "Handlungsfähigkeit = Geschäftsfähigkeit (Verträge) + Deliktsfähigkeit (Haftung für Verschulden).",
    "Geschäftsfähigkeit setzt Entscheidungsfähigkeit voraus; bei Volljährigen wird sie vermutet. Die Beweislast trägt, wer sich auf ihr Fehlen beruft.",
    "Altersstufen: unter 7 grundsätzlich unwirksam · 7–14 nur bloß Vorteilhaftes, sonst schwebend unwirksam · 14–18 zusätzlich eigenes Einkommen und Dienstverträge · ab 18 voll geschäftsfähig.",
    "Taschengeldgeschäfte (§ 170 Abs 3): altersüblich, geringfügig – in jedem Alter, aber erst mit Erfüllung wirksam.",
    "Seit 2018 Erwachsenenvertretung statt Sachwalterschaft; sie schränkt die Handlungsfähigkeit nicht automatisch ein.",
    "Deliktsfähig ab 14. Darunter haftet die Aufsichtsperson bei Pflichtverletzung (§ 1309), subsidiär das Kind nach Billigkeit (§ 1310).",
    "OG und KG sind rechtsfähig, die GesbR nicht (§ 1175 Abs 2 ABGB)."
  ],
  fehler: [
    "Rechts-, Geschäfts- und Deliktsfähigkeit haben verschiedene Anfangszeitpunkte.",
    "Volljährig ≠ voll entscheidungsfähig – die Volljährigkeit begründet nur eine Vermutung.",
    "Deliktsunfähig ≠ haftungsfrei: Billigkeitshaftung nach § 1310.",
    "Schwebend unwirksam ≠ nichtig: Genehmigung ist möglich."
  ],
  video: [
    { h: "Drei Fähigkeiten", n: "Rechtsfähigkeit heißt, Träger von Rechten und Pflichten zu sein. Geschäftsfähigkeit heißt, sich selbst durch Verträge zu verpflichten. Deliktsfähigkeit heißt, für eigenes Verschulden zu haften. Alle drei beginnen zu unterschiedlichen Zeitpunkten.",
      v: { type: "cards", items: [{ h: "Rechtsfähigkeit", t: "ab Lebendgeburt (nasciturus bedingt)" }, { h: "Geschäftsfähigkeit", t: "stufenweise, voll ab 18" }, { h: "Deliktsfähigkeit", t: "ab 14 Jahren" }] } },
    { h: "Die Altersstufen", n: "Unter sieben Jahren sind Geschäfte grundsätzlich unwirksam. Unmündige zwischen sieben und vierzehn können nur bloß Vorteilhaftes annehmen. Mündige Minderjährige dürfen zusätzlich über eigenes Einkommen verfügen. Ab achtzehn ist man voll geschäftsfähig.",
      v: { type: "scale", items: [{ from: "0", label: "unter 7", t: "grundsätzlich unwirksam" }, { from: "7", label: "7–14", t: "nur Vorteilhaftes" }, { from: "14", label: "14–18", t: "+ Einkommen, Dienstverträge" }, { from: "18", label: "ab 18", t: "voll geschäftsfähig" }] } },
    { h: "Das Taschengeldgeschäft", n: "Kauft ein Kind ein Eis um zwei Euro fünfzig und zahlt sofort, ist der Kauf wirksam. Voraussetzung: altersüblich, geringfügig und erfüllt. Ein Kauf auf Pump ist nicht gedeckt.",
      v: { type: "steps", items: ["altersüblich?", "geringfügige Angelegenheit des täglichen Lebens?", "sofort erfüllt (bezahlt)?", "→ wirksam nach § 170 Abs 3"] } },
    { h: "Schwebend unwirksam", n: "Kauft eine Zwölfjährige ein Handy auf Raten, ist der Vertrag schwebend unwirksam. Genehmigen die Eltern, wird er wirksam. Verweigern sie, ist er endgültig unwirksam. Der Händler kann eine Frist zur Erklärung setzen.",
      v: { type: "flow", items: [{ t: "Vertrag 7–14 J.", s: "nicht bloß vorteilhaft" }, { t: "schwebend unwirksam", s: "§ 865 ABGB" }, { t: "Genehmigung?", s: "ja → wirksam · nein → unwirksam" }] } },
    { h: "Wer haftet für Kinder?", n: "Unter vierzehn ist ein Kind deliktsunfähig. Die Eltern haften nur, wenn sie ihre Aufsichtspflicht schuldhaft verletzt haben. Sonst kommt subsidiär die Billigkeitshaftung des Kindes in Betracht, etwa wenn es eine Haftpflichtversicherung hat.",
      v: { type: "flow", items: [{ t: "Kind < 14", s: "deliktsunfähig" }, { t: "§ 1309", s: "Aufsichtsperson bei Pflichtverletzung" }, { t: "§ 1310", s: "subsidiär Billigkeitshaftung" }] } }
  ],
  diagrams: [
    { cap: "Erwachsenenschutz – vom geringsten zum stärksten Eingriff", v: { type: "steps", items: ["Vorsorgevollmacht", "gewählte Erwachsenenvertretung", "gesetzliche Erwachsenenvertretung (nächste Angehörige, Eintragung im ÖZVV)", "gerichtliche Erwachsenenvertretung (letztes Mittel)"] } }
  ],
  cases: [
    { t: "Eis und Spielkonsole", q: "Der sechsjährige Max kauft mit Taschengeld ein Eis um 2,50 € und zahlt sofort. Später kauft er mit 350 € aus Papas Schreibtisch eine Spielkonsole.", a: "Eis wirksam (§ 170 Abs 3: altersüblich, geringfügig, erfüllt). Konsole unwirksam – weder geringfügig noch altersüblich; Leistungen sind zurückzugeben." },
    { t: "Der Lehrling und sein E-Bike", q: "Der 16-jährige Tobias verdient 900 € und kauft gegen den Willen der Eltern ein E-Bike in Raten zu 150 €. Kann er auch allein einen neuen Lehrvertrag unterschreiben?", a: "E-Bike: wirksam, soweit seine Lebensbedürfnisse nicht gefährdet werden (§ 170 Abs 2). Lehrvertrag: ausgenommen – Zustimmung des gesetzlichen Vertreters nötig." },
    { t: "Vertrag im Vollrausch", q: "B (45) unterschreibt mit 2,8 Promille einen Kauf über eine Uhr um 3.000 €.", a: "Bei Volljährigen wird Entscheidungsfähigkeit vermutet; B trägt die Beweislast. Gelingt der Beweis, ist die Erklärung unwirksam. B kann das Geschäft nüchtern bestätigen." },
    { t: "Die zerkratzte Motorhaube", q: "Zwei 13-Jährige zerkratzen aus Übermut ein Auto. Haften sie? Haften die Eltern?", a: "Deliktsunfähig, aber subsidiäre Billigkeitshaftung (§ 1310) – sie erkennen das Unrecht. Eltern haften nur bei schuldhafter Aufsichtspflichtverletzung (§ 1309); bei unauffälligen 13-Jährigen idR nicht." }
  ]
},
/* ───────────── 4 ───────────── */
{ id: 4, teil: "B", title: "Stellvertretung", norms: ["§ 1002 ABGB", "§ 1008 ABGB", "§§ 1016–1019 ABGB", "§ 1026 ABGB", "§ 10 KSchG"],
  intro: "Wie jemand für einen anderen Verträge schließt – und was passiert, wenn die Vollmacht fehlt.",
  points: [
    "Stellvertretung = eigene Erklärung im Namen des Vertretenen (Offenlegung) mit Vertretungsmacht. Die Rechtsfolgen treffen unmittelbar den Vertretenen.",
    "Aktive Vertretung (Abgabe) und passive Vertretung (Empfang). Der Bote übermittelt nur eine fremde Erklärung; der Vermittler bringt nur zusammen.",
    "Mittelbare Stellvertretung: im eigenen Namen auf fremde Rechnung (Kommission). Stellvertretungsfeindlich: Eheschließung, Testament.",
    "Vertretungsmacht: gesetzlich, gerichtlich, organschaftlich oder rechtsgeschäftlich (Vollmacht).",
    "Vollmacht (Außenverhältnis, „können“) ist grundsätzlich formfrei; der Auftrag (Innenverhältnis, „dürfen“) regelt die Pflichten. Geheime Instruktionen wirken nicht gegen Dritte (§ 1017).",
    "Einzel-, Gattungs- und Generalvollmacht; § 1008 verlangt für bestimmte Geschäfte (z. B. Veräußerung, Schenkung) eine Gattungs- oder Spezialvollmacht.",
    "Anscheins- und Duldungsvollmacht schützen gutgläubige Dritte, wenn der Vertretene den Rechtsschein gesetzt hat; § 10 KSchG schützt Verbraucher.",
    "Erlöschen durch Zeitablauf, Widerruf, Tod u. a. – kundgemachte Vollmachten wirken gegenüber Gutgläubigen fort (§ 1026).",
    "Scheinvertreter: kein Vertrag, außer der Vertretene genehmigt (§ 1016); sonst haftet der Vertreter für den Vertrauensschaden (§ 1019).",
    "Missbrauch (nur Innenverhältnis verletzt): Geschäft gültig. Kollusion: ungültig. Insichgeschäft grundsätzlich unzulässig."
  ],
  fehler: [
    "Vollmacht ≠ Auftrag: Der Vertrag mit dem Dritten hängt von der Vollmacht ab, nicht vom Auftrag.",
    "Bote ≠ Vertreter: Wer selbst entscheidet, ist Vertreter.",
    "Missbrauch ≠ Überschreitung: Beim Missbrauch ist das Geschäft gültig, bei Überschreitung fehlt die Vertretungsmacht.",
    "Auch ohne Bindung des Vertretenen kann der Vertreter haften (§ 1019)."
  ],
  video: [
    { h: "Das Vertretungsdreieck", n: "Drei Personen: der Vertretene, der Vertreter und der Dritte. Im Innenverhältnis regelt der Auftrag, was der Vertreter darf. Die Vollmacht bestimmt, was er nach außen kann. Der Vertrag entsteht direkt zwischen Vertretenem und Drittem.",
      v: { type: "tri", a: "Vertretener", b: "Vertreter", c: "Dritter", ab: "Vollmacht + Auftrag", bc: "Erklärung im fremden Namen", ca: "Vertrag wirkt direkt" } },
    { h: "Drei Voraussetzungen", n: "Erstens eine eigene Willenserklärung des Vertreters. Zweitens die Offenlegung, dass er für einen anderen handelt. Drittens Vertretungsmacht. Der Vertreter muss nur beschränkt geschäftsfähig sein.",
      v: { type: "steps", items: ["eigene Willenserklärung (sonst Bote)", "Offenlegung: im Namen des Vertretenen", "Vertretungsmacht (z. B. Vollmacht)", "beschränkte Geschäftsfähigkeit genügt (§ 1018)"] } },
    { h: "Können und Dürfen", n: "Emilia erteilt eine schriftliche Vollmacht für Laptops bis tausend Euro, sagt intern aber: höchstens fünfhundert. Kauft Stefan um fünfhundertfünfzig, ist der Vertrag wirksam. Die interne Weisung wirkt nicht nach außen. Stefan haftet nur intern.",
      v: { type: "compare", left: { h: "Vollmacht – Außen", items: ["„können“", "bis 1.000 €", "Vertrag wirksam"] }, right: { h: "Auftrag – Innen", items: ["„dürfen“", "max. 500 €", "nur Ersatzpflicht"] } } },
    { h: "Rechtsschein", n: "Wer Visitenkarten mit Einkaufsleiter drucken lässt und Firmenstempel überlässt, setzt einen Anschein. Der gutgläubige Händler darf darauf vertrauen. Duldet der Chef jahrelang Bestellungen, liegt eine Duldungsvollmacht vor.",
      v: { type: "cards", items: [{ h: "Anscheinsvollmacht", t: "äußerer Tatbestand des Vertretenen" }, { h: "Duldungsvollmacht", t: "wissentliches Gewährenlassen" }, { h: "§ 1026", t: "Erlöschen muss kundgemacht werden" }] } },
    { h: "Ohne Vertretungsmacht", n: "Handelt jemand ohne Vertretungsmacht, ist der Vertrag schwebend unwirksam. Genehmigt der Vertretene, wirkt er rückwirkend. Sonst haftet der Scheinvertreter dem gutgläubigen Dritten für den Vertrauensschaden, also etwa Anwaltskosten, nicht den entgangenen Gewinn.",
      v: { type: "flow", items: [{ t: "Scheinvertreter", s: "keine Vollmacht" }, { t: "§ 1016", s: "Genehmigung?" }, { t: "§ 1019", s: "sonst Vertrauensschaden" }] } }
  ],
  diagrams: [
    { cap: "Fehlerhaftes Vertreterhandeln im Vergleich", v: { type: "table", cols: ["Konstellation", "Folge für den Vertrag"], rows: [["Überschreitung der Vollmacht", "schwebend unwirksam (§ 1016)"], ["Missbrauch (nur Weisung verletzt)", "gültig, Ersatz im Innenverhältnis"], ["Kollusion mit dem Dritten", "ungültig"], ["Insichgeschäft ohne Zustimmung", "unwirksam"]] } }
  ],
  cases: [
    { t: "Die Visitenkarte", q: "B lässt Mitarbeiter M Visitenkarten „Einkaufsleiter“ drucken und gibt ihm Bestellformulare mit Firmenstempel. Intern darf M nichts bestellen. M bestellt Ziegel um 6.000 €.", a: "B muss zahlen: Anscheinsvollmacht. H kannte die interne Beschränkung nicht und musste sie nicht kennen. § 10 KSchG greift nicht (H ist Unternehmer)." },
    { t: "Der zu teure Laptop", q: "Emilia bittet den 13-jährigen Stefan, einen Laptop bis 500 € zu kaufen. Er kauft einen um 550 €.", a: "Direkte Stellvertretung, beschränkte Geschäftsfähigkeit genügt (§ 1018). Vollmacht überschritten → schwebend unwirksam, bis Emilia genehmigt (§ 1016)." },
    { t: "Die Sekretärin und das Sofa", q: "Petra bestellt seit zwei Jahren Büromaterial im Namen von C, der stets zahlt. Nun bestellt sie (a) Kopierpapier, (b) ein Luxussofa für sich.", a: "(a) Duldungsvollmacht – C zahlt. (b) Rechtsschein reicht nicht so weit: Scheinvertreterin; Vertrag nur bei Genehmigung, sonst § 1019." },
    { t: "Omas Wohnung", q: "Enkel E mit Generalvollmacht verkauft Omas Wohnung (Wert 320.000 €) an sich selbst um 250.000 €.", a: "Insichgeschäft ohne Zustimmung und mit Benachteiligung; zudem genügt eine Generalvollmacht nach § 1008 nicht. Der Vertrag ist unwirksam." }
  ]
},
/* ───────────── 5 ───────────── */
{ id: 5, teil: "C", title: "Sachenrecht: Besitz, Eigentum, Erwerb, Schutz und Grundbuch", norms: ["§ 354 ABGB", "§ 366 ABGB", "§ 367 ABGB", "§ 431 ABGB", "§ 440 ABGB"],
  intro: "Wie man Eigentum erwirbt, wann man von einem Nichtberechtigten erwerben kann und wie das Grundbuch funktioniert.",
  points: [
    "Dingliche Rechte beziehen sich auf körperliche Sachen und wirken gegen jedermann. Der Kaufvertrag allein macht noch nicht zum Eigentümer – es fehlt der Modus.",
    "Grundsätze: Publizität, Titel und Modus, Typenzwang, Spezialität. Ausnahme vom Grundsatz nemo plus iuris: der gutgläubige Erwerb.",
    "Besitz = Innehabung + Besitzwille; qualifiziert, wenn rechtmäßig, redlich und echt. Besitzstörungsklage binnen 30 Tagen – geprüft wird nur der letzte ruhige Besitz.",
    "Eigentum (§ 354) wird durch Nachbarrecht, vertragliche Verbote und öffentliches Recht begrenzt. Arten: Allein-, Mit-, Wohnungs- und Gesamthandeigentum.",
    "Abgeleiteter Erwerb: bewegliche Sachen durch Übergabe (körperlich, durch Zeichen, durch Erklärung, durch Versendung), unbewegliche durch Einverleibung.",
    "§ 367: bewegliche Sache, entgeltlich, Übergabe, Redlichkeit + Versteigerung, Unternehmer im gewöhnlichen Betrieb oder Vertrauensmann.",
    "Fund: Anzeige beim Fundamt, Eigentum nach einem Jahr, Finderlohn 10 % (verloren) bzw. 5 % (vergessen).",
    "Beschränkte dingliche Rechte: Pfandrecht (akzessorisch, unteilbar), Dienstbarkeit (dulden/unterlassen), Reallast (aktiv leisten), Baurecht (10–100 Jahre).",
    "Grundbuch: A-, B-, C-Blatt. Einverleibung, Vormerkung, Anmerkung. Vertrauens-, Eintragungs-, Prioritäts- und Antragsprinzip."
  ],
  fehler: [
    "Titel ≠ Modus: Erst beides zusammen führt zum Eigentum.",
    "Ein Dieb ist kein Vertrauensmann – gestohlene Sachen nur bei Versteigerung oder vom Unternehmer gutgläubig erwerbbar.",
    "Der Besitzschutz schützt auch unrechtmäßigen Besitz.",
    "Dienstbarkeit = dulden/unterlassen; Reallast = aktiv leisten.",
    "Pfand: Schuldner bleibt Eigentümer. Eigentumsvorbehalt: Verkäufer bleibt Eigentümer bis zur Zahlung."
  ],
  video: [
    { h: "Titel plus Modus", n: "Der Kaufvertrag ist nur der Titel, der Rechtsgrund. Eigentümer wird man erst mit dem Modus: der Übergabe bei beweglichen Sachen oder der Einverleibung im Grundbuch bei Liegenschaften.",
      v: { type: "flow", items: [{ t: "Titel", s: "z. B. Kaufvertrag" }, { t: "+ Modus", s: "Übergabe / Einverleibung" }, { t: "= Eigentum", s: "dingliches Recht" }] } },
    { h: "Vier Arten der Übergabe", n: "Die Übergabe kann körperlich erfolgen, durch Zeichen wie Schlüssel oder Typenschein, durch bloße Erklärung, etwa Besitzkonstitut, oder durch Versendung.",
      v: { type: "cards", items: [{ h: "körperlich", t: "von Hand zu Hand" }, { h: "durch Zeichen", t: "Schlüssel, Typenschein" }, { h: "durch Erklärung", t: "Besitzkonstitut, Besitzanweisung" }, { h: "durch Versendung", t: "Übergabe an den Frächter" }] } },
    { h: "Gutgläubiger Erwerb – § 367", n: "Grundsätzlich kann niemand mehr Rechte übertragen, als er hat. Paragraph dreihundertsiebenundsechzig macht eine Ausnahme: bewegliche Sache, entgeltlich, übergeben, redlich, und erworben bei einer Versteigerung, von einem Unternehmer im gewöhnlichen Betrieb oder von einem Vertrauensmann.",
      v: { type: "steps", items: ["bewegliche Sache", "entgeltlicher Erwerb + Übergabe", "Redlichkeit des Erwerbers", "Versteigerung · Unternehmer im gewöhnl. Betrieb · Vertrauensmann"] } },
    { h: "Verliehen oder gestohlen?", n: "Verkauft die Freundin ein geliehenes Rad, ist sie Vertrauensmann: Der Käufer erwirbt gutgläubig. Beim gestohlenen Rad scheidet der Erwerb vom Privaten aus. Kauft man es aber beim Fahrradhändler, wird man trotzdem Eigentümer.",
      v: { type: "table", cols: ["Herkunft", "Kauf von Privat", "Kauf vom Händler"], rows: [["anvertraut (geliehen)", "✓ Vertrauensmann", "✓"], ["gestohlen", "✗ nemo plus iuris", "✓ Unternehmer"]] } },
    { h: "Das Grundbuch", n: "Das A-Blatt beschreibt das Grundstück, das B-Blatt nennt den Eigentümer, das C-Blatt die Lasten wie Hypotheken und Dienstbarkeiten. Wer zuerst den Antrag stellt, hat Vorrang.",
      v: { type: "cards", items: [{ h: "A-Blatt", t: "Gutsbestand: Grundstück, Fläche" }, { h: "B-Blatt", t: "Eigentum" }, { h: "C-Blatt", t: "Lasten: Pfandrechte, Servituten" }] } }
  ],
  diagrams: [
    { cap: "Beschränkte dingliche Rechte", v: { type: "table", cols: ["Recht", "Inhalt", "Merkmal"], rows: [["Pfandrecht", "Sicherung einer Forderung", "akzessorisch, unteilbar, Priorität"], ["Dienstbarkeit", "dulden / unterlassen", "z. B. Wegerecht"], ["Reallast", "aktiv leisten", "z. B. Ausgedinge"], ["Baurecht", "Bauwerk auf fremdem Grund", "10 bis 100 Jahre"]] } },
    { cap: "Fund – was dem Finder zusteht", v: { type: "flow", items: [{ t: "Fund", s: "Anzeige beim Fundamt" }, { t: "Finderlohn", s: "10 % verloren · 5 % vergessen" }, { t: "nach 1 Jahr", s: "Eigentum des Finders" }] } }
  ],
  cases: [
    { t: "Die gefundene Geldbörse", q: "S findet eine verlorene Geldbörse mit 1.500 € und gibt sie beim Fundamt ab. (a) Der Eigentümer meldet sich nach zwei Wochen. (b) Niemand meldet sich binnen eines Jahres.", a: "(a) Finderlohn 10 % = 150 € plus Auslagen; Ausweise erhöhen ihn nicht. (b) S wird nach einem Jahr Eigentümerin des Geldes (§ 395)." },
    { t: "Die doppelt verkaufte Wohnung", q: "Wohnung am 1.10. an Bettina, am 5.10. an Sebastian verkauft. Sebastian beantragt am 15.10. die Einverleibung; Bettina stellt keinen Antrag.", a: "Sebastian ist Eigentümer – Prioritätsprinzip (§ 440 ABGB, § 29 GBG). Bettina hat Schadenersatz gegen die Verkäuferin; gegen Sebastian nur bei Kenntnis des Erstverkaufs." },
    { t: "Der Diamantring als Faustpfand", q: "Pfandbestellung am 1.8., Übergabe des Rings erst am 25.9. Nach Teilzahlung von 300 € (von 400 €) will der Schuldner den Ring zurück.", a: "Pfandrecht entsteht erst mit der körperlichen Übergabe (25.9.). Das Pfand ist unteilbar (§ 469): Der Ring haftet bis zur vollständigen Zahlung." }
  ]
},
/* ───────────── 6 ───────────── */
{ id: 6, teil: "D", title: "Grundbegriffe und Vertragsabschluss", norms: ["§ 861 ABGB", "§ 862a ABGB", "§ 863 ABGB", "§ 864 ABGB", "§ 864a ABGB", "§ 11 FAGG"],
  intro: "Willenserklärung, Angebot und Annahme, AGB-Kontrolle und das Rücktrittsrecht im Fernabsatz.",
  points: [
    "Privatautonomie: ob, wann, mit wem, mit welchem Inhalt und in welcher Form. Grenzen: zwingendes Recht und § 879; Ausnahme Kontrahierungszwang.",
    "Willenserklärung = Inhaltswille + Geltungswille; ausdrücklich oder schlüssig (§ 863); empfangsbedürftig, wirksam mit Zugang.",
    "Scheingeschäft ist nichtig (§ 916), geheimer Vorbehalt unbeachtlich. Auslegung nach Parteiabsicht und redlicher Verkehrsübung (§§ 914 f).",
    "Vertrag = Angebot + Annahme. Inserate, Kataloge, Websites und Schaufenster sind meist nur Einladungen zur Angebotsstellung.",
    "Annahme mit Änderungen = Gegenangebot. Schweigen ist grundsätzlich keine Annahme. Unbestellte Ware muss nicht bezahlt werden (§ 864 Abs 2).",
    "Verspätet zugegangene, aber rechtzeitig abgesandte Annahme gilt als rechtzeitig, wenn der Anbieter das erkennen musste und nicht unverzüglich reagiert (§ 862a).",
    "AGB gelten nur bei Vereinbarung. Unwirksam: überraschende (§ 864a), gröblich benachteiligende (§ 879 Abs 3) und intransparente (§ 6 Abs 3 KSchG) Klauseln.",
    "FAGG: Informationspflichten, Button „zahlungspflichtig bestellen“, 14 Tage Rücktritt; ohne Belehrung bis zu 12 Monate länger."
  ],
  fehler: [
    "Die automatische Eingangsbestätigung eines Online-Shops ist keine Annahme.",
    "Website und Auslage sind meist Einladungen – der Kunde bietet an.",
    "Motivirrtum ≠ Geschäftsirrtum.",
    "Erst prüfen, ob ein Vertrag zustande kam – dann die Gültigkeit."
  ],
  video: [
    { h: "Angebot + Annahme = Vertrag", n: "Ein Vertrag entsteht durch zwei übereinstimmende Willenserklärungen. Das Angebot muss bestimmt sein und Bindungswillen zeigen. Die Annahme muss inhaltlich deckungsgleich und rechtzeitig sein.",
      v: { type: "flow", items: [{ t: "Angebot", s: "bestimmt + Bindungswille" }, { t: "Annahme", s: "deckungsgleich + rechtzeitig" }, { t: "Konsens", s: "Vertrag geschlossen" }] } },
    { h: "Einladung statt Angebot", n: "Ein Fernseher steht irrtümlich um neunundneunzig statt neunhundertneunundneunzig Euro im Schaufenster. Das ist kein Angebot, sondern eine Einladung. Der Kunde bietet an, der Händler kann ablehnen.",
      v: { type: "compare", left: { h: "Einladung (invitatio)", items: ["Schaufenster, Katalog", "Website, Inserat", "kein Bindungswille"] }, right: { h: "Angebot", items: ["Kunde an der Kasse", "Bestellung im Shop", "bindet den Anbieter"] } } },
    { h: "Schweigen und unbestellte Ware", n: "Schweigen ist grundsätzlich keine Zustimmung. Wer unbestellte Krawatten zugeschickt bekommt, muss sie weder bezahlen noch zurücksenden. Ein einseitiges „Schweigen gilt als Zustimmung“ ändert daran nichts.",
      v: { type: "big", value: "Schweigen ≠ Annahme", sub: "§ 864 Abs 2 ABGB: unbestellte Ware begründet keine Zahlungspflicht" } },
    { h: "AGB in drei Prüfschritten", n: "Erstens: Wurden die AGB überhaupt vereinbart, vor oder bei Vertragsschluss? Zweitens die Geltungskontrolle: keine überraschenden, nachteiligen Klauseln. Drittens die Inhaltskontrolle: keine gröbliche Benachteiligung und Transparenz für Verbraucher.",
      v: { type: "steps", items: ["Einbeziehung: Hinweis vor/bei Vertragsschluss", "Geltungskontrolle: § 864a (überraschend + nachteilig)", "Inhaltskontrolle: § 879 Abs 3 (gröblich benachteiligend)", "Transparenzgebot: § 6 Abs 3 KSchG"] } },
    { h: "Rücktritt im Fernabsatz", n: "Bei Online-Bestellungen und Verträgen außerhalb von Geschäftsräumen haben Verbraucher vierzehn Tage Rücktrittsrecht, ohne Begründung. Bei Waren beginnt die Frist mit dem Erhalt. Fehlt die Belehrung, verlängert sie sich um bis zu zwölf Monate.",
      v: { type: "big", value: "14 Tage", sub: "§ 11 FAGG · ohne Belehrung + bis zu 12 Monate (§ 12)" } }
  ],
  diagrams: [
    { cap: "Unzulässige Klauseln gegenüber Verbrauchern", v: { type: "table", cols: ["Klausel", "Norm"], rows: [["Ausschluss der Gewährleistung vor Mangelmitteilung", "§ 3 VGG"], ["Ausschluss des Personenschadenersatzes", "§ 6 Abs 1 Z 9 KSchG"], ["„Schweigen gilt als Zustimmung“ (ohne Voraussetzungen)", "§ 6 Abs 1 Z 2 KSchG"], ["unklare, unverständliche Klausel", "§ 6 Abs 3 KSchG"]] } }
  ],
  cases: [
    { t: "Die unbestellte Krawatte", q: "Firma X schickt Pensionist P unaufgefordert Krawatten: „Wenn nicht binnen 14 Tagen zurück, gilt der Kauf um 79 € als vereinbart.“", a: "Kein Vertrag: Realofferte ohne Annahme; Schweigen hat keinen Erklärungswert (§ 864 Abs 2). P muss weder zahlen noch zurücksenden." },
    { t: "Die verspätete Annahme", q: "Angebot gilt bis 30.4.; Annahme am 25.4. abgeschickt, wegen Poststreik erst am 5.5. zugegangen (Poststempel 25.4.). M reagiert nicht.", a: "Vertrag zustande: § 862a – M musste die rechtzeitige Absendung erkennen und hat nicht unverzüglich reagiert." },
    { t: "Die Online-Bestellung", q: "Jacke kommt am 3. Mai; Vera tritt am 12. Mai per E-Mail ohne Grund zurück. Der Shop meint, Anprobieren schließe den Rücktritt aus.", a: "Rücktritt rechtzeitig (Frist bis 17. Mai), formlos möglich. Anprobieren schadet nicht; nur ein darüber hinausgehender Wertverlust wäre zu ersetzen." }
  ]
},
/* ───────────── 7 ───────────── */
{ id: 7, teil: "D", title: "Willensmängel und Nichtigkeit", norms: ["§ 870 ABGB", "§ 871 ABGB", "§ 879 ABGB", "§ 934 ABGB", "§ 943 ABGB"],
  intro: "Irrtum, List, Drohung, Verkürzung über die Hälfte, Sittenwidrigkeit und Formmängel.",
  points: [
    "Anfechtbar = gültig, bis durch Klage oder Einrede beseitigt. Nichtig = von Anfang an unwirksam.",
    "Irrtum (§ 871): Geschäfts- oder Erklärungsirrtum + eine Zusatzvoraussetzung: vom anderen veranlasst, ihm offenbar auffallend oder rechtzeitig aufgeklärt. Wesentlich → Aufhebung; unwesentlich → Anpassung. Frist 3 Jahre.",
    "Motivirrtum ist unbeachtlich – außer bei Unentgeltlichkeit (§ 901) und bei List.",
    "List (§ 870): bewusste Irreführung; Anfechtungsfrist 30 Jahre, zusätzlich Schadenersatz (§ 874). Drohung: ungerecht und gegründet, 3 Jahre.",
    "Täuschung durch Dritte nur bei Teilnahme oder Kennenmüssen des Vertragspartners (§ 875).",
    "Laesio enormis (§ 934): Leistung weniger als die Hälfte der Gegenleistung wert; Frist 3 Jahre; abwendbar durch Aufzahlung auf den gemeinen Wert; gegen Unternehmer vertraglich ausschließbar (§ 351 UGB), gegen Verbraucher nicht.",
    "§ 879: gesetz- oder sittenwidrige Verträge sind nichtig. Wucher = auffallendes Missverhältnis + Schwächelage + Ausnützen.",
    "Form grundsätzlich frei (§ 883). Schenkung ohne wirkliche Übergabe braucht Notariatsakt. Erfüllt man trotz Formmangel, ist keine Rückforderung möglich (§ 1432)."
  ],
  fehler: [
    "Ein Irrtum über den Wert ist Motivirrtum – prüfe stattdessen laesio enormis.",
    "List: 30 Jahre; Irrtum und laesio enormis: 3 Jahre.",
    "Ein Gewährleistungsausschluss erfasst keine arglistig verschwiegenen Mängel."
  ],
  video: [
    { h: "Anfechtbar oder nichtig?", n: "Ein anfechtbarer Vertrag gilt zunächst. Erst Klage oder Einrede beseitigen ihn, dann rückwirkend. Ein nichtiger Vertrag ist von Anfang an unwirksam, etwa bei Wucher oder Sittenwidrigkeit.",
      v: { type: "compare", left: { h: "anfechtbar", items: ["gültig bis zur Anfechtung", "Irrtum, List, Drohung, laesio enormis"] }, right: { h: "nichtig", items: ["von Anfang an unwirksam", "§ 879: Gesetzes-/Sittenverstoß, Wucher"] } } },
    { h: "Irrtumsanfechtung – § 871", n: "Man braucht einen Geschäfts- oder Erklärungsirrtum, also einen Irrtum über das Erklärte. Dazu eine von drei Voraussetzungen: Der andere hat den Irrtum veranlasst, er musste ihm offenbar auffallen, oder er wurde rechtzeitig aufgeklärt.",
      v: { type: "steps", items: ["Geschäfts- oder Erklärungsirrtum (kein Motivirrtum)", "veranlasst · offenbar auffallend · rechtzeitig aufgeklärt", "wesentlich → Aufhebung / unwesentlich → Anpassung", "Frist: 3 Jahre"] } },
    { h: "List und Drohung", n: "Wer auf ausdrückliche Frage einen Unfallschaden leugnet, handelt listig. Die Anfechtung ist dreißig Jahre möglich, zusätzlich gibt es Schadenersatz. Bei List ist sogar ein Motivirrtum beachtlich.",
      v: { type: "compare", left: { h: "List § 870", items: ["bewusste Täuschung", "30 Jahre", "+ Schadenersatz § 874"] }, right: { h: "Drohung § 870", items: ["ungerecht + gegründet", "3 Jahre"] } } },
    { h: "Verkürzung über die Hälfte", n: "Erhält man weniger als die Hälfte dessen, was man gibt, kann man den Vertrag aufheben. Verkauft S ein Bild im Wert von fünftausend Euro um zwölfhundert, kann der Käufer die Aufhebung durch Aufzahlung von dreitausendachthundert Euro abwenden.",
      v: { type: "big", value: "< ½", sub: "§ 934 ABGB · Aufzahlung bis zum gemeinen Wert wendet die Aufhebung ab" } },
    { h: "Wucher", n: "Wucher braucht drei Elemente: ein auffallendes Missverhältnis von Leistung und Gegenleistung, eine Schwächelage des Bewucherten und deren Ausnützen. Folge ist Nichtigkeit. Zurückzuzahlen ist nur das erhaltene Kapital.",
      v: { type: "steps", items: ["auffallendes Missverhältnis", "Schwächelage (Not, Unerfahrenheit …)", "bewusstes Ausnützen", "→ nichtig, § 879 Abs 2 Z 4"] } }
  ],
  diagrams: [
    { cap: "Fristen im Überblick", v: { type: "table", cols: ["Willensmangel", "Frist", "Besonderheit"], rows: [["Irrtum (§ 871)", "3 Jahre", "Zusatzvoraussetzung nötig"], ["List (§ 870)", "30 Jahre", "auch Motivirrtum; Schadenersatz"], ["Drohung (§ 870)", "3 Jahre", "ungerecht und gegründet"], ["laesio enormis (§ 934)", "3 Jahre", "Aufzahlung wendet ab"]] } }
  ],
  cases: [
    { t: "Der Tippfehler", q: "Händler A schreibt in einer E-Mail versehentlich 890 € statt 8.900 € für eine Barockkommode. Sammler S kennt den Marktwert und nimmt sofort an.", a: "Anfechtung wegen Erklärungsirrtums (§ 871): Der Preis musste S offenbar auffallen; der Irrtum ist wesentlich." },
    { t: "Omas Ölgemälde", q: "S verkauft ein geerbtes Gemälde um 1.200 €; Verkehrswert 5.000 €. Wie kann der Käufer die Aufhebung abwenden?", a: "Laesio enormis: 1.200 € < 2.500 €. Abwendung durch Aufzahlung: 5.000 − 1.200 = 3.800 €." },
    { t: "Der Kredit in der Notlage", q: "W braucht dringend 3.000 € gegen Delogierung. G verleiht sie gegen Rückzahlung von 5.400 € nach sechs Monaten. W hat 1.000 € zurückgezahlt.", a: "Wucher (§ 879 Abs 2 Z 4) – nichtig. Rückabwicklung: Nur das Kapital ist zurückzuzahlen; W schuldet noch 2.000 €." },
    { t: "Das mündliche Schenkungsversprechen", q: "Onkel O verspricht vor Zeugen mündlich seinen Oldtimer und überlegt es sich anders. Abwandlung: Er übergibt sofort Schlüssel und Typenschein.", a: "Ohne wirkliche Übergabe ist ein Notariatsakt nötig – nur Naturalobligation. Mit Schlüssel und Typenschein (Übergabe durch Zeichen) ist die Schenkung wirksam." }
  ]
},
/* ───────────── 8 ───────────── */
{ id: 8, teil: "D", title: "Leistungsstörungen und Gewährleistung", norms: ["§ 918 ABGB", "§ 919 ABGB", "§ 922 ABGB", "§ 933a ABGB", "§ 1447 ABGB", "VGG"],
  intro: "Unmöglichkeit, Verzug, Gewährleistung und die Abgrenzung zum Schadenersatz.",
  points: [
    "Vier Leistungsstörungen: Unmöglichkeit (gar nicht), Verzug (zu spät), Gewährleistung (schlecht), positive Vertragsverletzung (Nebenpflicht verletzt).",
    "Nachträgliche Unmöglichkeit: Schuldner verantwortlich → Schadenersatz; Gläubiger verantwortlich → Gegenleistung bleibt geschuldet; Zufall → Schuld erlischt (§ 1447), ggf. stellvertretendes commodum.",
    "Schuldnerverzug: Erfüllung verlangen oder Rücktritt nach angemessener Nachfrist (§ 918). Fixgeschäft: ohne Nachfrist aufgelöst (§ 919).",
    "Erfüllungsort im Zweifel beim Schuldner (Holschuld); Geld ist qualifizierte Schickschuld.",
    "Gläubigerverzug: Preisgefahr geht über (§ 1419), Schuldner haftet nur noch für grobe Fahrlässigkeit, Hinterlegung möglich.",
    "Gewährleistung ist verschuldensunabhängig. Primär Verbesserung oder Austausch, sekundär Preisminderung oder Wandlung (bei nicht geringfügigem Mangel).",
    "Fristen: 2 Jahre (beweglich), 3 Jahre (unbeweglich), plus 3 Monate zur gerichtlichen Geltendmachung. Vermutung der Mangelhaftigkeit bei Übergabe: 1 Jahr (VGG).",
    "Mangelfolgeschäden nur über Schadenersatz; das Verschulden wird 10 Jahre vermutet (§ 933a Abs 3).",
    "Rügeobliegenheit (§ 377 UGB) nur zwischen Unternehmern. Eine Garantie ersetzt nie die Gewährleistung."
  ],
  fehler: [
    "Aliud ≠ Mangel: Wer etwas anderes liefert, erfüllt gar nicht – Verzugsregeln.",
    "Vor dem Rücktritt wegen Verzugs ist eine Nachfrist nötig (außer Fixgeschäft).",
    "Gewährleistung ≠ Garantie ≠ Schadenersatz.",
    "Mangelschaden → Gewährleistung; Mangelfolgeschaden → Schadenersatz."
  ],
  video: [
    { h: "Vier Arten, wie Verträge schiefgehen", n: "Die Leistung kann gar nicht kommen, zu spät kommen, schlecht kommen, oder es wird eine Nebenpflicht verletzt. Jede Störung hat eigene Rechtsfolgen.",
      v: { type: "cards", items: [{ h: "Unmöglichkeit", t: "gar nicht" }, { h: "Verzug", t: "zu spät" }, { h: "Gewährleistung", t: "schlecht" }, { h: "pos. Vertragsverletzung", t: "Nebenpflicht verletzt" }] } },
    { h: "Nachträgliche Unmöglichkeit", n: "Wer ist verantwortlich? Der Schuldner haftet auf Schadenersatz. Hat der Gläubiger es verschuldet, muss er trotzdem zahlen. Bei Zufall, etwa Blitzschlag, erlischt die Schuld. Der Gläubiger kann aber die Versicherungssumme verlangen, wenn er den Preis zahlt.",
      v: { type: "tree", root: "Wer ist verantwortlich?", items: ["Schuldner → Schadenersatz", "Gläubiger → Gegenleistung bleibt geschuldet", "Zufall → Schuld erlischt (§ 1447) + commodum"] } },
    { h: "Verzug oder Fixgeschäft?", n: "Kommt die Küche zu spät, setzt man eine angemessene Nachfrist und erklärt dann den Rücktritt. Die Hochzeitstorte, die erst am Tag nach der Feier kommt, ist wertlos: absolutes Fixgeschäft, der Vertrag ist ohne Nachfrist aufgelöst.",
      v: { type: "compare", left: { h: "einfacher Verzug § 918", items: ["Erfüllung verlangen", "oder Nachfrist + Rücktritt"] }, right: { h: "Fixgeschäft § 919", items: ["Termin wesentlich", "Rücktritt ohne Nachfrist"] } } },
    { h: "Gewährleistung in zwei Stufen", n: "Zuerst die primären Behelfe: Verbesserung oder Austausch. Erst wenn diese verweigert werden, unmöglich sind oder nicht in angemessener Frist erfolgen, gibt es Preisminderung oder, bei nicht geringfügigem Mangel, Vertragsauflösung.",
      v: { type: "flow", items: [{ t: "Stufe 1", s: "Verbesserung · Austausch" }, { t: "scheitert?", s: "verweigert, unmöglich, zu spät" }, { t: "Stufe 2", s: "Preisminderung · Wandlung" }] } },
    { h: "Mangel oder Folgeschaden?", n: "Der falsch befestigte Schlauch ist ein Mangel. Dafür gibt es Gewährleistung. Das zerstörte Parkett ist ein Mangelfolgeschaden. Dafür gibt es nur Schadenersatz. Das Verschulden wird zehn Jahre lang vermutet.",
      v: { type: "compare", left: { h: "Mangelschaden", items: ["Minderwert der Sache", "Gewährleistung", "verschuldensunabhängig"] }, right: { h: "Mangelfolgeschaden", items: ["Schaden an anderen Gütern", "Schadenersatz", "Verschulden 10 J. vermutet"] } } }
  ],
  diagrams: [
    { cap: "Gewährleistungsfristen", v: { type: "table", cols: ["Sache", "Frist", "Geltendmachung", "Vermutung (VGG)"], rows: [["beweglich", "2 Jahre", "+ 3 Monate", "1 Jahr"], ["unbeweglich", "3 Jahre", "+ 3 Monate", "–"]] } }
  ],
  cases: [
    { t: "Hochzeitstorte und Küche", q: "(a) Die Torte für Samstag kommt erst Sonntag. (b) Die Küche mit Termin 1.3. kommt nicht.", a: "(a) Absolutes Fixgeschäft – Vertrag aufgelöst, keine Zahlung; Schadenersatz bei Verschulden. (b) Einfacher Verzug: Nachfrist setzen, dann Rücktritt (§ 918)." },
    { t: "Das abgebrannte Ferienhaus", q: "Verkauf am 1.6., Übergabe 1.8. Am 10.7. brennt das Haus durch Blitzschlag ab; V erhält 220.000 € Versicherung.", a: "Zufällige nachträgliche Unmöglichkeit: Die Schuld erlischt (§ 1447). K kann die Versicherungsleistung als stellvertretendes commodum verlangen, muss dann aber den Kaufpreis zahlen." },
    { t: "Laptop mit Wackelkontakt", q: "Kauf am 1.2.2026, Mangel am 20.11.2026. Händler behauptet Eigenverschulden. Kann K sofort Geld zurück?", a: "VGG: Mangel binnen eines Jahres → Vermutung, dass er bei Übergabe vorlag; E muss das Gegenteil beweisen. Geld erst auf Stufe 2 – zuerst Verbesserung oder Austausch." },
    { t: "Waschmaschine und Parkett", q: "Installateur befestigt Schlauch falsch, Wasser zerstört Parkett (4.500 €).", a: "Montagefehler: Gewährleistung (Verbesserung). Parkett: Mangelfolgeschaden → Schadenersatz; Verschulden vermutet (§ 933a Abs 3, § 1298)." }
  ]
},
/* ───────────── 9 ───────────── */
{ id: 9, teil: "D", title: "Änderungen des Vertragsverhältnisses", norms: ["§ 1376 ABGB", "§ 1380 ABGB", "§§ 1392 ff ABGB", "§ 1405 ABGB", "§ 889 ABGB", "§ 896 ABGB"],
  intro: "Novation, Vergleich, Anerkenntnis, Zession, Schuldübernahme und mehrere Schuldner.",
  points: [
    "Schlichte Schuldänderung betrifft nur Nebenpunkte (Verschlechterungsverbot für Bürgen). Novation ändert Rechtsgrund oder Hauptgegenstand – Sicherheiten erlöschen. Im Zweifel: schlichte Änderung.",
    "Vergleich (§ 1380): beiderseitiges Nachgeben, konstitutiv; kein Irrtum über die verglichenen strittigen Punkte (§ 1385).",
    "Konstitutives Anerkenntnis schneidet Einwendungen ab. Deklaratives ist Wissenserklärung und unterbricht die Verjährung.",
    "Zession ohne Zustimmung des Schuldners; er behält alle Einwendungen und zahlt bis zur Verständigung befreiend an den Zedenten (§ 1395).",
    "Der entgeltliche Zedent haftet für Richtigkeit und Einbringlichkeit bis zur Höhe des Entgelts (§ 1397).",
    "Schuldübernahme braucht die Zustimmung des Gläubigers; Schuldbeitritt nicht; Erfüllungsübernahme wirkt nur intern.",
    "Mehrere Schuldner: im Zweifel Teilschuld (§ 889). Bei Solidarschuld („zur ungeteilten Hand“) haftet jeder für das Ganze, mit Regress (§ 896)."
  ],
  fehler: [
    "Ob Bürgen und Pfänder frei werden, hängt an Novation vs. schlichter Änderung.",
    "Erfüllungsübernahme: Der Gläubiger bekommt keinen neuen Schuldner.",
    "Zession überträgt nur eine Forderung, nicht die ganze Vertragsposition."
  ],
  video: [
    { h: "Ändern oder ersetzen?", n: "Wird nur der Zahlungstermin verschoben, ist das eine schlichte Schuldänderung. Die alte Schuld bleibt, der Bürge haftet weiter, aber nicht schlechter. Wird der Kaufpreis durch ein Darlehen ersetzt, ist das eine Novation. Die alte Schuld und die Bürgschaft erlöschen.",
      v: { type: "compare", left: { h: "schlichte Änderung", items: ["Nebenpunkte (Termin, Zinsen)", "Sicherheiten bleiben", "Verschlechterungsverbot"] }, right: { h: "Novation § 1376", items: ["neuer Rechtsgrund / Hauptgegenstand", "alte Schuld erlischt", "Bürge wird frei (§ 1378)"] } } },
    { h: "Vergleich und Anerkenntnis", n: "Beim Vergleich geben beide Seiten nach. Beim Anerkenntnis nur eine. Die spontane Entschuldigung nach einem Unfall ist meist nur ein deklaratives Anerkenntnis.",
      v: { type: "cards", items: [{ h: "Vergleich", t: "beide geben nach – endgültig" }, { h: "konstitutives Anerkenntnis", t: "neuer Grund, Einwendungen weg" }, { h: "deklaratives Anerkenntnis", t: "Beweis, unterbricht Verjährung" }] } },
    { h: "Die Zession", n: "Der Zedent tritt seine Forderung an den Zessionar ab. Der Schuldner muss nicht zustimmen. Solange er nicht verständigt ist, zahlt er schuldbefreiend an den alten Gläubiger. Seine Einwendungen behält er.",
      v: { type: "tri", a: "Zedent (Altgläubiger)", b: "Zessionar (Neugläubiger)", c: "Schuldner", ab: "Abtretung", bc: "Forderung geht über", ca: "bis Verständigung: Zahlung an Zedent befreit" } },
    { h: "Teilschuld oder Solidarschuld?", n: "Mehrere Schuldner schulden im Zweifel nur ihren Anteil. Steht im Vertrag zur ungeteilten Hand, haftet jeder für das Ganze. Wer zahlt, nimmt bei den anderen Regress.",
      v: { type: "compare", left: { h: "Teilschuld § 889", items: ["Zweifelsregel", "jeder nur sein Anteil"] }, right: { h: "Solidarschuld", items: ["„zur ungeteilten Hand“", "jeder für das Ganze", "Regress § 896"] } } }
  ],
  diagrams: [
    { cap: "Schuldnerwechsel im Vergleich", v: { type: "table", cols: ["Figur", "Zustimmung des Gläubigers?", "Alter Schuldner"], rows: [["Schuldübernahme", "ja", "wird frei"], ["Schuldbeitritt", "nein", "haftet weiter (solidarisch)"], ["Erfüllungsübernahme", "nein", "bleibt allein Schuldner (nur intern)"]] } }
  ],
  cases: [
    { t: "Die verkaufte Forderung", q: "W verkauft ihre Forderung (8.000 €) gegen K um 7.000 € an I. K weiß nichts und zahlt an W.", a: "K zahlt befreiend an W (§ 1395). I hält sich an W: Herausgabe; zudem Haftung für die Richtigkeit bis zur Höhe des Entgelts (§ 1397)." },
    { t: "Novation oder Stundung?", q: "(a) G und S vereinbaren ohne Bürgen B Stundung + 8 % Zinsen. (b) Kaufpreisschuld wird durch Darlehen ersetzt.", a: "(a) Schlichte Änderung: B haftet im ursprünglichen Umfang, nicht für die Zinsen. (b) Novation: B ist frei (§ 1378)." },
    { t: "Die WG-Stromrechnung", q: "Vertrag: „Die Kunden haften zur ungeteilten Hand.“ 1.200 €; A und B zahlungsunfähig.", a: "Solidarhaftung – C muss 1.200 € zahlen und hat Regress gegen A und B je 400 € (§ 896)." }
  ]
},
/* ───────────── 10 ───────────── */
{ id: 10, teil: "D", title: "Beendigung von Schuldverhältnissen", norms: ["§ 1416 ABGB", "§ 1438 ABGB", "§ 1486 ABGB", "§ 1497 ABGB", "§ 15 KSchG"],
  intro: "Erfüllung, Aufrechnung, Kündigung, Bedingung und Verjährung.",
  points: [
    "Erfüllung ist der Normalfall. Tilgung nach § 1416: zuerst Zinsen, dann Kapital. Teilleistungen muss der Gläubiger nicht annehmen.",
    "Dauerschuldverhältnisse enden durch Zeitablauf, ordentliche oder außerordentliche Kündigung. Verbraucher-Abos: § 15 KSchG.",
    "Aufschiebende Bedingung: Wirkung erst mit Eintritt. Auflösende Bedingung: Wirkung endet mit Eintritt.",
    "Weitere Erlöschensgründe: Hinterlegung, Leistung an Zahlungs statt, Konfusion, Verzicht.",
    "Aufrechnung: Gegenseitigkeit, Gültigkeit, Gleichartigkeit, Fälligkeit (der Gegenforderung), kein Verbot. Sie wirkt zurück auf den Zeitpunkt der Aufrechnungslage.",
    "Verjährung: 3 Jahre für Forderungen des täglichen Lebens und Schadenersatz (ab Kenntnis von Schaden und Schädiger), sonst 30 Jahre. Beginn mit Fälligkeit.",
    "Hemmung schiebt das Fristende hinaus; Unterbrechung (Anerkenntnis, Klage) lässt die Frist neu beginnen.",
    "Die verjährte Forderung bleibt Naturalobligation – Zahlung ist nicht rückforderbar (§ 1432)."
  ],
  fehler: [
    "Aufrechnen kann man nur mit eigenen Forderungen – nicht mit der des Ehepartners.",
    "Hemmung ≠ Unterbrechung.",
    "Verjährung wird nicht von Amts wegen wahrgenommen – der Schuldner muss sie einwenden."
  ],
  video: [
    { h: "Aufrechnung – fünf Voraussetzungen", n: "Wer gleichzeitig Gläubiger und Schuldner ist, kann aufrechnen. Voraussetzungen: Die Forderungen stehen sich gegenseitig gegenüber, sind gültig, gleichartig, die Gegenforderung ist fällig, und es gibt kein Aufrechnungsverbot.",
      v: { type: "steps", items: ["Gegenseitigkeit", "Gültigkeit (einklagbar)", "Gleichartigkeit (z. B. Geld/Geld)", "Fälligkeit der Gegenforderung", "kein Aufrechnungsverbot"] } },
    { h: "Drei oder dreißig Jahre", n: "Forderungen des täglichen Lebens, etwa Werklohn oder Kaufpreis, verjähren in drei Jahren ab Fälligkeit. Schadenersatz in drei Jahren ab Kenntnis von Schaden und Schädiger. Alles andere grundsätzlich in dreißig Jahren.",
      v: { type: "compare", left: { h: "3 Jahre", items: ["tägliches Leben (§ 1486)", "Schadenersatz ab Kenntnis (§ 1489)"] }, right: { h: "30 Jahre", items: ["Grundregel (§ 1478)", "Bereicherung, List-Anfechtung"] } } },
    { h: "Unterbrechung durch Anerkenntnis", n: "Die Heizungsrechnung war am ersten April zweitausendzweiundzwanzig fällig. Ohne weiteres wäre sie am ersten April zweitausendfünfundzwanzig verjährt. Schreibt die Kundin im Dezember zweitausendvierundzwanzig, sie wisse, dass sie schulde, beginnt die Frist neu.",
      v: { type: "scale", items: [{ from: "1.4.22", label: "Fälligkeit", t: "Frist beginnt" }, { from: "20.12.24", label: "Anerkenntnis", t: "Unterbrechung" }, { from: "20.12.27", label: "neues Ende", t: "Klage bis dahin" }] } },
    { h: "Fitness-Abo kündigen", n: "Bei Verbraucherverträgen über wiederkehrende Leistungen auf unbestimmte Zeit kann der Verbraucher mit zwei Monaten Frist zum Ende des ersten Jahres kündigen, danach zu jedem Halbjahr. Längere Bindungen sind unwirksam.",
      v: { type: "big", value: "§ 15 KSchG", sub: "2 Monate Frist · zum Ende des 1. Jahres, dann halbjährlich" } }
  ],
  diagrams: [
    { cap: "Erlöschensgründe", v: { type: "cards", items: [{ h: "Erfüllung", t: "§ 1412" }, { h: "Aufrechnung", t: "§ 1438" }, { h: "Hinterlegung", t: "bei Gläubigerverzug" }, { h: "Konfusion", t: "Gläubiger = Schuldner" }, { h: "Verzicht", t: "Erlass, zweiseitig" }, { h: "Zeitablauf / Kündigung", t: "Dauerschuldverhältnis" }] } }
  ],
  cases: [
    { t: "Die Gegenforderung", q: "G verlangt 3.000 € (fällig 1.4.). U hat gegen G ein Darlehen über 1.800 € (fällig 1.3.); Us Ehefrau hat gegen G 500 €.", a: "Aufrechnung mit 1.800 € möglich; mit der Forderung der Ehefrau nicht (keine Gegenseitigkeit). U zahlt 1.200 €." },
    { t: "Die vergessene Rechnung", q: "Werklohn 1.400 €, fällig 1.4.2022. (a) Klage am 1.6.2025. (b) E-Mail-Anerkenntnis am 20.12.2024. (c) Zahlung nach Verjährung.", a: "(a) verjährt (3 Jahre, § 1486). (b) Unterbrechung → neue Frist bis 20.12.2027. (c) Naturalobligation – keine Rückforderung." },
    { t: "Das Fitness-Abo", q: "Vertrag ab 1.10.2025 „kündbar nach 3 Jahren“. K will nach vier Monaten raus.", a: "§ 15 KSchG zwingend: Kündigung zum 30.9.2026, Zugang spätestens 31.7.2026." }
  ]
},
/* ───────────── 11 ───────────── */
{ id: 11, teil: "D", title: "Wichtige Vertragsarten", norms: ["§ 1053 ABGB", "§ 938 ABGB", "§ 1090 ABGB", "§ 1151 ABGB", "§ 1346 ABGB", "§ 5 KSchG"],
  intro: "Kauf, Schenkung, Miete, Pacht, Leihe, Darlehen, Werk- und Arbeitsvertrag, Bürgschaft.",
  points: [
    "Konsensualverträge entstehen durch Einigung; Realverträge (Leihe, Verwahrung) erst mit Übergabe.",
    "„Leihen“ gegen Geld ist rechtlich Miete; „Geld leihen“ ist ein Darlehen.",
    "Vorvertrag: Hauptvertrag binnen einem Jahr einfordern. Angeld sichert, Reugeld erkauft den Rücktritt, Vertragsstrafe ist mäßigbar.",
    "Miete (Gebrauch gegen Zins), Pacht (Fruchtgenuss), Leihe (unentgeltlich), Darlehen (Eigentum an vertretbaren Sachen, Rückgabe gleicher Art).",
    "MRG: Geltungsbereich prüfen – Kündigungsschutz, Mietzinsgrenzen, Ablöseverbot, Mindestbefristung (3 Jahre Wohnung).",
    "Kauf ist der Titel; Eigentum erst mit Übergabe. Schenkung: wirkliche Übergabe oder Notariatsakt; Widerruf bei grobem Undank (§ 948).",
    "Werkvertrag: Erfolg geschuldet. Arbeitsvertrag: Bemühen in persönlicher Abhängigkeit. Kostenvoranschlag gegenüber Verbrauchern grundsätzlich verbindlich und nur nach Hinweis entgeltlich (§ 5 KSchG).",
    "Bürgschaft: schriftlich und akzessorisch. „Bürge und Zahler“ haftet sofort wie ein Solidarschuldner; Regress nach § 1358. Verbraucherschutz §§ 25c, 25d KSchG.",
    "Spielschulden sind nicht einklagbar (Ausnahme GlSpG)."
  ],
  fehler: [
    "Leihe ≠ Miete: das Entgelt entscheidet.",
    "Miete ≠ Pacht: Bei der Pacht wird ein Ertrag genutzt; das MRG gilt nicht.",
    "Leasing ≠ Kauf: Der Leasinggeber bleibt Eigentümer.",
    "Aus dem Vorvertrag kann nur der Abschluss des Hauptvertrags verlangt werden."
  ],
  video: [
    { h: "Gebrauch auf Zeit", n: "Vier Verträge überlassen Sachen. Bei der Miete zahlt man für den Gebrauch, bei der Pacht für die Erträge. Die Leihe ist unentgeltlich. Beim Darlehen erhält man Eigentum und gibt Sachen gleicher Art zurück.",
      v: { type: "table", cols: ["Vertrag", "Entgelt?", "Was wird überlassen?"], rows: [["Miete", "ja", "Gebrauch"], ["Pacht", "ja", "Gebrauch + Fruchtgenuss"], ["Leihe", "nein", "Gebrauch"], ["Darlehen", "möglich (Zinsen)", "Eigentum an vertretbaren Sachen"]] } },
    { h: "Werk oder Arbeit?", n: "Der Installateur schuldet ein fertiges Bad, also einen Erfolg. Das ist ein Werkvertrag. Der Angestellte schuldet sein Bemühen und ist persönlich abhängig. Das ist ein Arbeitsvertrag.",
      v: { type: "compare", left: { h: "Werkvertrag", items: ["Erfolg geschuldet", "selbständig", "Gewährleistung"] }, right: { h: "Arbeitsvertrag", items: ["Bemühen geschuldet", "persönlich abhängig", "Arbeitsrecht"] } } },
    { h: "Der Kostenvoranschlag", n: "Gegenüber Verbrauchern ist ein Kostenvoranschlag nur entgeltlich, wenn vorher darauf hingewiesen wurde. Und er ist verbindlich, wenn nicht ausdrücklich das Gegenteil erklärt wurde. Aus zwölftausend dürfen nicht siebzehntausendfünfhundert werden.",
      v: { type: "big", value: "§ 5 KSchG", sub: "Kostenvoranschlag: verbindlich, außer ausdrücklich anders; Entgelt nur nach Hinweis" } },
    { h: "Die Bürgschaft", n: "Der Bürge verspricht dem Gläubiger, für die Schuld eines anderen einzustehen. Die Erklärung muss schriftlich sein. Der einfache Bürge haftet erst nach Mahnung des Schuldners, der Bürge und Zahler sofort.",
      v: { type: "tri", a: "Gläubiger (Bank)", b: "Hauptschuldner", c: "Bürge", ab: "Kredit", bc: "Regress § 1358", ca: "Bürgschaft (schriftlich)" } }
  ],
  diagrams: [
    { cap: "Schenkung – wann ist sie wirksam?", v: { type: "flow", items: [{ t: "Schenkungsvertrag", s: "Einigung" }, { t: "wirkliche Übergabe?", s: "sonst Notariatsakt" }, { t: "Widerruf", s: "nur bei grobem Undank (§ 948)" }] } }
  ],
  cases: [
    { t: "Der teure Kostenvoranschlag", q: "KV über 12.000 € ohne Aussage zur Verbindlichkeit; abgerechnet werden 17.500 € plus 150 € für den KV.", a: "Gegenüber Verbraucherin verbindlich (§ 5 Abs 2 KSchG) und ohne Hinweis unentgeltlich (Abs 1): K zahlt 12.000 €." },
    { t: "Die Bürgschaft der Freundin", q: "Studentin B (500 € Einkommen) bürgt als „Bürge und Zahler“ für 150.000 €. Die Bank wusste von Fs Schwierigkeiten.", a: "Sofortige Inanspruchnahme möglich, aber: § 25c KSchG (Informationspflicht), § 25d (Mäßigung), ggf. Sittenwidrigkeit nach § 879." },
    { t: "Die Clownschuhe", q: "Tim schenkt Marcel Schuhe. Später gesteht Marcel, Tim Goldmünzen gestohlen zu haben.", a: "Schenkung durch Übergabe wirksam; Widerruf wegen groben Undanks (§ 948) – Diebstahl ist strafbare Verletzung am Vermögen." }
  ]
},
/* ───────────── 12 ───────────── */
{ id: 12, teil: "E", title: "Schadenersatzrecht", norms: ["§ 1293 ABGB", "§ 1295 ABGB", "§ 1298 ABGB", "§ 1304 ABGB", "§ 1313a ABGB", "§ 1315 ABGB", "PHG"],
  intro: "Wer muss wann für einen Schaden aufkommen – vom Prüfschema bis zur Produkthaftung.",
  points: [
    "Jeder trägt seinen Schaden selbst (casum sentit dominus). Ersatz braucht einen Haftungsgrund: Verschulden, Gefährdung oder erlaubten Eingriff.",
    "Verschuldenshaftung: Schaden, Kausalität (conditio sine qua non + Adäquanz), Rechtswidrigkeit (samt Schutzzweck der Norm), Verschulden.",
    "Umfang nach Verschuldensgrad: leichte Fahrlässigkeit → positiver Schaden; grobe Fahrlässigkeit und Vorsatz → volle Genugtuung (inkl. entgangener Gewinn).",
    "Entgangener Gewinn bei leichter Fahrlässigkeit nur im Unternehmerverkehr (§ 349 UGB). Bei Körperverletzung: Heilungskosten, Verdienstentgang, Schmerzengeld (§ 1325).",
    "PHG: Hersteller und Importeur in den EWR haften verschuldensunabhängig für Personenschäden und Schäden an anderen Sachen (500 € Selbstbehalt). Das Produkt selbst ersetzt das PHG nicht.",
    "Erfüllungsgehilfe (§ 1313a): volle Zurechnung im Vertrag. Besorgungsgehilfe (§ 1315): nur bei Untüchtigkeit oder wissentlicher Gefährlichkeit.",
    "Mitverschulden teilt den Schaden (§ 1304). Mehrere Schädiger haften solidarisch, wenn Anteile unbestimmbar (§ 1302).",
    "Beweislast für Verschulden: deliktisch beim Geschädigten (§ 1296), vertraglich beim Schädiger (§ 1298).",
    "DHG mäßigt die Haftung von Arbeitnehmern; Arbeitgeber haftet für Personenschäden aus Arbeitsunfällen nur bei Vorsatz (§ 333 ASVG)."
  ],
  fehler: [
    "Das PHG ersetzt nie das fehlerhafte Produkt selbst – dafür Gewährleistung.",
    "Fiktive Mietwagenkosten werden nicht ersetzt.",
    "Mitverschulden teilt den Schaden, es schließt die Haftung nicht aus.",
    "§ 1315 begründet nicht automatisch eine Haftung des Geschäftsherrn."
  ],
  video: [
    { h: "Grundsatz: Jeder trägt seinen Schaden", n: "Wer einen Schaden erleidet, trägt ihn grundsätzlich selbst. Nur wenn ein Haftungsgrund vorliegt, muss ein anderer zahlen: Verschulden, eine besondere Gefahr wie beim Autofahren, oder ein erlaubter Eingriff.",
      v: { type: "cards", items: [{ h: "Verschulden", t: "§§ 1293 ff ABGB" }, { h: "Gefährdung", t: "EKHG, PHG – ohne Verschulden" }, { h: "Eingriff", t: "z. B. Notstand, Nachbarrecht" }] } },
    { h: "Das Prüfschema", n: "Vier Elemente: Ein Schaden ist entstanden. Das Verhalten war kausal, nach der Äquivalenz- und der Adäquanztheorie. Es war rechtswidrig, und der Schaden liegt im Schutzzweck der Norm. Schließlich muss den Schädiger ein Verschulden treffen.",
      v: { type: "steps", items: ["Schaden (positiver Schaden / entgangener Gewinn)", "Kausalität: conditio sine qua non + Adäquanz", "Rechtswidrigkeit + Schutzzweck der Norm", "Verschulden: leichte / grobe Fahrlässigkeit, Vorsatz"] } },
    { h: "Wie viel wird ersetzt?", n: "Bei leichter Fahrlässigkeit gibt es nur den positiven Schaden. Bei grober Fahrlässigkeit oder Vorsatz volle Genugtuung, also auch entgangenen Gewinn. Bei Körperverletzung immer Heilungskosten, Verdienstentgang und Schmerzengeld.",
      v: { type: "compare", left: { h: "leichte Fahrlässigkeit", items: ["positiver Schaden", "(B2B auch Gewinn, § 349 UGB)"] }, right: { h: "grob / Vorsatz", items: ["volle Genugtuung", "+ entgangener Gewinn"] } } },
    { h: "Gehilfen", n: "Schickt der Tischler seinen Gesellen zur Kundin, haftet er für dessen Fehler im Vertrag wie für eigene. Beschädigt der Geselle auf der Heimfahrt ein fremdes Auto, haftet der Tischler nur, wenn der Geselle untüchtig oder bekannt gefährlich war.",
      v: { type: "compare", left: { h: "Erfüllungsgehilfe § 1313a", items: ["im Vertrag", "volle Zurechnung", "Auswahl egal"] }, right: { h: "Besorgungsgehilfe § 1315", items: ["deliktisch", "nur bei Untüchtigkeit", "oder wissentl. Gefährlichkeit"] } } },
    { h: "Produkthaftung", n: "Explodiert ein Wasserkocher wegen eines Konstruktionsfehlers, haften Hersteller und Importeur ohne Verschulden. Ersetzt werden Personenschäden und Schäden an anderen Sachen, abzüglich fünfhundert Euro Selbstbehalt. Der Kocher selbst nicht.",
      v: { type: "flow", items: [{ t: "fehlerhaftes Produkt", s: "Konstruktion, Produktion, Instruktion" }, { t: "Hersteller / Importeur", s: "verschuldensunabhängig" }, { t: "Ersatz", s: "Person + andere Sachen (− 500 €)" }] } }
  ],
  diagrams: [
    { cap: "Vertraglich oder deliktisch?", v: { type: "table", cols: ["", "Vertragshaftung", "Deliktshaftung"], rows: [["Beweislast Verschulden", "Schädiger (§ 1298)", "Geschädigter (§ 1296)"], ["Gehilfen", "§ 1313a – volle Zurechnung", "§ 1315 – eingeschränkt"], ["reine Vermögensschäden", "ersatzfähig", "grundsätzlich nicht"]] } }
  ],
  cases: [
    { t: "Unfall auf dem Radweg", q: "R fährt bei Rot mit Blick aufs Handy und verletzt Fußgängerin F. Brille (Zeitwert 300 €), 2.400 € Verdienstentgang.", a: "Deliktische Verschuldenshaftung, Schutzgesetzverletzung (StVO), grobe Fahrlässigkeit: Heilungskosten, Schmerzengeld, 2.400 € und Brille (volle Genugtuung, Abzug neu für alt)." },
    { t: "Der Geselle und das Parkett", q: "Geselle G beschädigt beim Kunden das Parkett (1.200 €) und auf der Heimfahrt ein parkendes Auto (2.000 €).", a: "Parkett: T haftet nach § 1313a (Erfüllungsgehilfe). Auto: § 1315 greift nicht (G ist tüchtig); aber Halterhaftung nach EKHG." },
    { t: "Der brennende E-Bike-Akku", q: "Akku mit Konstruktionsfehler brennt: E-Bike (3.000 €) und Möbel (5.000 €) verbrannt.", a: "PHG gegen Hersteller/Importeur: Möbel 5.000 − 500 = 4.500 €. E-Bike selbst nicht – dafür Gewährleistung gegen den Händler." },
    { t: "Der Wäschekorb im Stiegenhaus", q: "M lässt einen Wäschekorb auf der Stiege stehen; N stolpert mit Blick aufs Handy (4.000 € Schmerzengeld, 1.500 € Verdienstentgang).", a: "M haftet (§ 1295), N trifft Mitverschulden (§ 1304) – bei Teilung 1:1 erhält er 2.000 € und 750 €." }
  ]
},
/* ───────────── 13 ───────────── */
{ id: 13, teil: "E", title: "Bereicherung und Geschäftsführung ohne Auftrag", norms: ["§ 877 ABGB", "§ 1431 ABGB", "§ 1435 ABGB", "§ 1041 ABGB", "§ 1042 ABGB", "§§ 1035–1040 ABGB"],
  intro: "Ungerechtfertigte Vermögensverschiebungen rückgängig machen – und wann der hilfsbereite Nachbar Ersatz bekommt.",
  points: [
    "Bereicherungsrecht macht ungerechtfertigte Vermögensverschiebungen verschuldensunabhängig rückgängig; Verjährung grundsätzlich 30 Jahre.",
    "Leistungskondiktion: irrtümliche Zahlung einer Nichtschuld (§ 1431), nachträglicher Wegfall des Rechtsgrundes (§ 1435), fehlender Rechtsgrund von Anfang an (§ 877).",
    "Wer wissentlich eine Nichtschuld zahlt, bekommt nichts zurück (§ 1432).",
    "Verwendungsanspruch (§ 1041): Wert der genutzten fremden Sache – ein Schaden des Berechtigten ist nicht nötig.",
    "Aufwandersatz (§ 1042): Regress für einen Aufwand, den ein anderer hätte tragen müssen.",
    "GoA: Notfall (§ 1036) → notwendiger und zweckmäßiger Aufwand, auch ohne Erfolg. Nützlich (§ 1037) → Ersatz bis zum klaren, überwiegenden Vorteil. Unnütz (§ 1038) → kein Ersatz, ggf. Wiederherstellung."
  ],
  fehler: [
    "Ausgegebenes Geld beseitigt die Bereicherung nicht, wenn man sich Aufwendungen erspart hat.",
    "Beim Verwendungsanspruch kommt es auf den Nutzen des Verwenders an, nicht auf einen Schaden.",
    "Geschmacksänderungen sind keine nützliche GoA."
  ],
  video: [
    { h: "Leistungskondiktionen", n: "Wer etwas geleistet hat, ohne dass ein Rechtsgrund besteht, kann es zurückfordern. Drei Fälle: Man zahlt irrtümlich eine Nichtschuld, der Rechtsgrund fällt später weg, etwa durch Rücktritt, oder er fehlte von Anfang an.",
      v: { type: "cards", items: [{ h: "§ 1431", t: "irrtümliche Zahlung einer Nichtschuld" }, { h: "§ 1435", t: "Rechtsgrund fällt später weg" }, { h: "§ 877", t: "Vertrag von Anfang an ungültig" }] } },
    { h: "Die doppelte Überweisung", n: "Die Buchhaltung überweist eine Rechnung zweimal. Der Lieferant gibt das Geld für eine Betriebsfeier aus. Trotzdem muss er zurückzahlen: Er hat sich eigene Aufwendungen erspart und bleibt bereichert.",
      v: { type: "flow", items: [{ t: "2. Überweisung", s: "Schuld war schon getilgt" }, { t: "§ 1431", s: "Irrtum, kein Rechtsgrund" }, { t: "Rückforderung", s: "verschuldensunabhängig, 30 J." }] } },
    { h: "Verwendungsanspruch", n: "Der Schwager wohnt ungefragt zwei Wochen in der Ferienwohnung. Auch wenn sie sonst leer geblieben wäre, schuldet er ein angemessenes Benützungsentgelt. Es zählt sein Nutzen, nicht ein Schaden.",
      v: { type: "big", value: "§ 1041", sub: "Nutzung fremder Sache ohne Rechtsgrund → angemessenes Entgelt (14 × 120 € = 1.680 €)" } },
    { h: "Geschäftsführung ohne Auftrag", n: "Der Nachbar lässt ein geplatztes Rohr reparieren: Notfall, voller Aufwandersatz. Er tauscht auch die Küchenarmatur, weil sie unmodern ist: unnütz, kein Ersatz.",
      v: { type: "table", cols: ["Art", "Voraussetzung", "Ersatz"], rows: [["Notfall § 1036", "drohender Schaden", "notwendiger Aufwand, auch ohne Erfolg"], ["nützlich § 1037", "klarer, überwiegender Vorteil", "bis zur Höhe des Vorteils"], ["unnütz § 1038", "kein Vorteil / gegen Willen", "keiner, ggf. Wiederherstellung"]] } }
  ],
  diagrams: [
    { cap: "Welche Anspruchsgrundlage?", v: { type: "tree", root: "Vermögensverschiebung ohne Grund", items: ["durch Leistung → Leistungskondiktion (§§ 877, 1431, 1435)", "durch Nutzung fremder Sachen → § 1041", "fremde Schuld bezahlt → § 1042", "fremdes Geschäft besorgt → GoA (§§ 1036 ff)"] } }
  ],
  cases: [
    { t: "Der Nachbar und der Wasserrohrbruch", q: "N lässt bei Ws Rohrbruch den Notdienst kommen (780 €) und tauscht zusätzlich die „unmoderne“ Armatur (350 €).", a: "Rohr: Notgeschäftsführung (§ 1036) – 780 € zu ersetzen. Armatur: unnütz (§ 1038) – kein Ersatz." },
    { t: "Die Ferienwohnung ohne Vertrag", q: "Schwager S wohnt ungefragt zwei Wochen in Es Ferienwohnung (vergleichbar 120 €/Nacht); E hätte nicht vermietet.", a: "Verwendungsanspruch (§ 1041): 14 × 120 € = 1.680 €. Ein Schaden der E ist unerheblich." },
    { t: "Rücktritt vom Autokauf", q: "K zahlt 11.000 €, V liefert trotz Nachfrist nicht, K tritt zurück. V hat 3.000 € ausgegeben.", a: "Rückforderung nach § 1435 (Rechtsgrund weggefallen) – Ausgabe ändert nichts (ersparter Aufwand)." }
  ]
},
/* ───────────── 14 ───────────── */
{ id: 14, teil: "F", title: "Internationales Privatrecht und UN-Kaufrecht", norms: ["Art 1, 2, 6 CISG", "Art 3, 4, 6 Rom I-VO", "Art 4 Rom II-VO", "§§ 1, 6, 49 IPRG"],
  intro: "Welches Recht gilt bei grenzüberschreitenden Fällen?",
  points: [
    "CISG: Warenkauf zwischen Parteien mit Niederlassung in verschiedenen Vertragsstaaten; nicht für den erkennbar privaten Gebrauch (Art 2 lit a); abdingbar (Art 6).",
    "Einheitsrecht (CISG) entscheidet den Fall selbst. Kollisionsrecht (Rom I, Rom II, IPRG) verweist nur auf ein nationales Recht.",
    "Rom I: freie Rechtswahl (Art 3); sonst Recht der charakteristischen Leistung (Kauf: Recht des Verkäufers). Verbraucher behalten ihren zwingenden Schutz (Art 6), wenn der Unternehmer seine Tätigkeit auf ihr Land ausrichtet.",
    "Rom II: Recht des Erfolgsorts (Art 4 Abs 1); bei gemeinsamem gewöhnlichem Aufenthalt dessen Recht (Abs 2); Ausweichklausel.",
    "IPRG subsidiär: stärkste Beziehung (§ 1), fremdes Recht von Amts wegen, ordre public (§ 6), Sitztheorie (§ 10), lex rei sitae (§ 31), Vollmachtsstatut (§ 49).",
    "Geschäftsfähigkeit und Stellvertretung regeln weder CISG noch Rom I."
  ],
  fehler: [
    "„Es gilt österreichisches Recht“ schließt das CISG nicht aus – nur ein eindeutiger Ausschluss.",
    "Anwendbares Recht und Zuständigkeit sind zwei verschiedene Fragen.",
    "Der ordre public greift nur bei untragbaren Ergebnissen."
  ],
  video: [
    { h: "Zuerst Einheitsrecht, dann Kollisionsrecht", n: "Bei einem internationalen Fall prüft man zuerst, ob Einheitsrecht wie das UN-Kaufrecht anwendbar ist. Es gibt die Lösung direkt vor. Nur wenn nicht, bestimmt das Kollisionsrecht, welches nationale Recht gilt.",
      v: { type: "flow", items: [{ t: "CISG anwendbar?", s: "Einheitsrecht – löst selbst" }, { t: "sonst Rom I / Rom II", s: "EU-Kollisionsrecht" }, { t: "subsidiär IPRG", s: "z. B. Vollmacht § 49" }] } },
    { h: "Wann gilt das UN-Kaufrecht?", n: "Ein Warenkauf, Niederlassungen in verschiedenen Vertragsstaaten, und kein erkennbar privater Gebrauch. Die Parteien können es ausschließen, aber nur eindeutig.",
      v: { type: "steps", items: ["Kauf beweglicher Waren", "Niederlassungen in verschiedenen Vertragsstaaten", "nicht für erkennbar privaten Gebrauch (Art 2 lit a)", "nicht ausgeschlossen (Art 6)"] } },
    { h: "Verträge: Rom I", n: "Die Parteien können das Recht wählen. Fehlt eine Wahl, gilt beim Kauf das Recht des Verkäufers. Für Verbraucher gilt eine Ausnahme: Richtet der Unternehmer seine Tätigkeit auf ihr Land aus, gilt ihr Heimatrecht, zumindest dessen zwingender Schutz.",
      v: { type: "compare", left: { h: "B2B (Art 3, 4)", items: ["Rechtswahl frei", "sonst Recht des Verkäufers"] }, right: { h: "Verbraucher (Art 6)", items: ["Recht am Aufenthalt des Verbrauchers", "Rechtswahl nur ohne Schutzentzug"] } } },
    { h: "Unfälle: Rom II", n: "Fährt ein Salzburger am Gardasee einen Italiener an, gilt italienisches Recht, das Recht des Erfolgsorts. Fährt er seinen Grazer Studienkollegen an, gilt österreichisches Recht: gemeinsamer gewöhnlicher Aufenthalt.",
      v: { type: "compare", left: { h: "Grundregel Art 4 Abs 1", items: ["Recht des Erfolgsorts", "→ Italien"] }, right: { h: "Art 4 Abs 2", items: ["gemeinsamer gewöhnl. Aufenthalt", "→ Österreich"] } } }
  ],
  diagrams: [
    { cap: "Die Regelwerke und ihr Bereich", v: { type: "table", cols: ["Regelwerk", "Art", "Bereich"], rows: [["CISG", "Einheitsrecht", "internationaler Warenkauf B2B"], ["Rom I-VO", "Kollisionsrecht", "vertragliche Schuldverhältnisse"], ["Rom II-VO", "Kollisionsrecht", "Delikt, Bereicherung, GoA, c.i.c."], ["IPRG", "Kollisionsrecht", "subsidiär: Personen, Sachen, Vollmacht"]] } }
  ],
  cases: [
    { t: "Der Online-Kauf im Nachbarland", q: "Linzer Studentin bestellt privat Kopfhörer bei einem Münchner Händler („Lieferung nach Österreich“). AGB: „ausschließlich deutsches Recht“.", a: "Kein CISG (privater Gebrauch erkennbar). Art 6 Rom I: Rechtswahl wirksam, aber L behält den zwingenden österreichischen Verbraucherschutz (VGG, KSchG)." },
    { t: "Heckenschere und Auto", q: "Autohändlerin Antonia bestellt in den Niederlanden eine Heckenschere und in Frankreich ein Auto für privat – ohne das zu erwähnen.", a: "Heckenschere: privater Zweck erkennbar → kein CISG. Auto: Privatzweck nicht erkennbar → CISG anwendbar." }
  ]
},
/* ───────────── 15 ───────────── */
{ id: 15, teil: "G", title: "Allgemeines Unternehmensrecht", norms: ["§§ 1–3 UGB", "§ 15 UGB", "§ 38 UGB", "§§ 48 ff UGB", "§ 377 UGB", "§ 1409 ABGB"],
  intro: "Unternehmerbegriff, Firmenbuch, Prokura, Unternehmensübergang und unternehmensbezogene Geschäfte.",
  points: [
    "Unternehmer ist, wer ein Unternehmen betreibt (§ 1 UGB), wer eine Kapitalgesellschaft ist (§ 2 UGB, Unternehmer kraft Rechtsform) oder wer unrichtig eingetragen ist und unter der Firma handelt (§ 3 UGB).",
    "Freie Berufe sowie Land- und Forstwirte sind nur nach Eintragung (Opting-in) Unternehmer im Sinn des Ersten Buchs.",
    "Das Firmenbuch ist öffentlich. Eintragung wirkt bei OG, GmbH und AG konstitutiv, bei der Prokura deklarativ. § 15 UGB regelt die Publizität (negativ und positiv).",
    "Eintragungspflicht für Einzelunternehmer erst ab Rechnungslegungspflicht (Umsatz > 700.000 € in zwei Jahren oder > 1 Mio. € in einem Jahr).",
    "Die Firma ist der eingetragene Name; unterscheidungskräftig, mit Rechtsformzusatz (z. B. e.U.).",
    "Unternehmensübergang (§ 38): Erwerber übernimmt die unternehmensbezogenen Rechtsverhältnisse; Dritte können binnen drei Monaten widersprechen. Haftungsausschluss nur bei rechtzeitiger Eintragung/Mitteilung; § 1409 ABGB bleibt zwingend.",
    "Prokura: nur vom eingetragenen Unternehmer, ausdrücklich, einzutragen; nach außen unbeschränkbar; Grundstücke nur mit besonderer Befugnis. Handlungsvollmacht: gewöhnliche Geschäfte eines derartigen Unternehmens, beschränkbar.",
    "Handelsvertreter: ständig betraut, fremder Name, fremde Rechnung; Ausgleichsanspruch bis zu einer Jahresvergütung (Durchschnitt der letzten fünf Jahre).",
    "B2B-Sonderregeln: Sorgfalt des ordentlichen Unternehmers, Solidarhaftung (§ 348), entgangener Gewinn auch bei leichter Fahrlässigkeit (§ 349), laesio enormis ausschließbar (§ 351), Rügeobliegenheit (§ 377)."
  ],
  fehler: [
    "Die Prokura kann nicht durch einen nicht eingetragenen Unternehmer erteilt werden.",
    "Widerruf der Prokura wirkt sofort – gegenüber Gutgläubigen aber erst ab Eintragung und Bekanntmachung.",
    "§ 377 UGB gilt nur bei beiderseitig unternehmensbezogenen Geschäften."
  ],
  video: [
    { h: "Wer ist Unternehmer?", n: "Drei Wege führen zum Unternehmer: der Betrieb eines Unternehmens, die Rechtsform einer Kapitalgesellschaft, oder eine unrichtige Eintragung, unter der jemand handelt. Der Scheinunternehmer wird verpflichtet, aber nicht berechtigt.",
      v: { type: "cards", items: [{ h: "§ 1 UGB", t: "kraft Betrieb" }, { h: "§ 2 UGB", t: "kraft Rechtsform (GmbH, AG)" }, { h: "§ 3 UGB", t: "kraft Eintragung (Schein)" }] } },
    { h: "Publizität des Firmenbuchs", n: "Solange eine einzutragende Tatsache, etwa das Erlöschen einer Prokura, nicht eingetragen und bekannt gemacht ist, kann sie Gutgläubigen nicht entgegengehalten werden. Nach der Bekanntmachung gibt es noch fünfzehn Tage Schonfrist für Dritte, die nachweislich nichts wussten.",
      v: { type: "scale", items: [{ from: "2.3.", label: "Widerruf", t: "intern wirksam" }, { from: "→", label: "vor Eintragung", t: "Gutgläubige geschützt" }, { from: "20.4.", label: "Bekanntmachung", t: "+ 15 Tage Schonfrist" }] } },
    { h: "Prokura und Handlungsvollmacht", n: "Die Prokura deckt Geschäfte irgendeines Unternehmens und ist nach außen nicht beschränkbar, Grundstücke ausgenommen. Die Handlungsvollmacht deckt nur gewöhnliche Geschäfte eines derartigen Unternehmens und kann beschränkt werden.",
      v: { type: "compare", left: { h: "Prokura", items: ["nur eingetragener Unternehmer", "ausdrücklich, eintragen", "unbeschränkbar (außer Grundstücke)"] }, right: { h: "Handlungsvollmacht", items: ["auch schlüssig", "gewöhnliche Geschäfte", "beschränkbar"] } } },
    { h: "Untersuchen und rügen", n: "Unter Unternehmern muss der Käufer die Ware nach der Ablieferung in angemessener Frist untersuchen und Mängel rügen. Wer zu spät rügt, verliert Gewährleistung, Schadenersatz und Irrtumsanfechtung. Außer der Verkäufer hat den Mangel bewusst verschwiegen.",
      v: { type: "flow", items: [{ t: "Ablieferung", s: "B2B-Warenkauf" }, { t: "Untersuchung + Rüge", s: "angemessene Frist (§ 377)" }, { t: "zu spät?", s: "Rechte verloren (außer Vorsatz/grobe FL)" }] } }
  ],
  diagrams: [
    { cap: "Unternehmensbezogene Geschäfte – UGB vs. ABGB", v: { type: "table", cols: ["Regel", "UGB (B2B)", "ABGB"], rows: [["Sorgfalt", "ordentlicher Unternehmer (§ 347)", "Durchschnittsmensch"], ["Mehrere Schuldner", "solidarisch (§ 348)", "Teilschuld (§ 889)"], ["entgangener Gewinn", "auch bei leichter FL (§ 349)", "nur bei grobem Verschulden"], ["laesio enormis", "ausschließbar (§ 351)", "unverzichtbar (§ 935)"]] } }
  ],
  cases: [
    { t: "Das Fahrradgeschäft", q: "Lena betreibt ein Fahrradgeschäft (380.000 € Umsatz), nicht eingetragen. Unternehmerin? Eintragungspflicht? Prokura möglich?", a: "Unternehmerin kraft Betrieb (§ 1). Keine Eintragungspflicht (unter der Schwelle). Prokura und Firma erst nach Eintragung; Handlungsvollmacht schon jetzt." },
    { t: "Der widerrufene Prokurist", q: "Prokura am 2.3. mündlich widerrufen, Eintragung des Erlöschens am 20.4. Peter kauft am 15.3. Holz bei einem ahnungslosen Händler.", a: "GmbH gebunden – negative Publizität (§ 15 Abs 1). Am 25.4. nur, wenn der Händler seine Unkenntnis beweist (15-Tage-Frist)." },
    { t: "Die rissigen Eichenplatten", q: "Tischlerei lässt gelieferte Platten drei Monate ungeöffnet liegen und rügt dann erkennbare Risse.", a: "Verspätete Rüge (§ 377) – Rechte verloren, außer der Verkäufer hat bewusst verschwiegen. Ein Verbraucher müsste nicht rügen." }
  ]
},
/* ───────────── 16 ───────────── */
{ id: 16, teil: "G", title: "Personengesellschaften", norms: ["§§ 1175 ff ABGB", "§ 105 UGB", "§§ 125–130 UGB", "§ 160 UGB", "§§ 171 f UGB"],
  intro: "GesbR, OG, KG und stille Gesellschaft – Geschäftsführung, Vertretung und Haftung.",
  points: [
    "GesbR: Vertrag von mindestens zwei Personen zu einem gemeinsamen Zweck; formfrei, nicht rechtsfähig, nicht im Firmenbuch. Außengesellschaft wird bei Unternehmen oder gemeinsamem Namen vermutet.",
    "GesbR innen: Einzelgeschäftsführung mit Widerspruchsrecht; außergewöhnliche Geschäfte einstimmig. Außen: Vertretung wie Geschäftsführung; Gesellschafter haften solidarisch, unbeschränkt und persönlich (§ 1199).",
    "OG (§ 105 UGB): eigene Firma, rechtsfähig, jeder erlaubte Zweck, entsteht mit Eintragung, kein Mindestkapital. Außergewöhnliche Geschäfte nur mit allen; Wettbewerbsverbot (§§ 112 f).",
    "Vertretung der OG: jeder Gesellschafter allein, unbeschränkt und unbeschränkbar (§§ 125 f); Abweichungen wirken nur mit Eintragung.",
    "§ 128 UGB: Gesellschafter haften unbeschränkt, unbeschränkbar, unmittelbar, primär, persönlich und solidarisch. Eintretende haften auch für Altschulden (§ 130).",
    "Ausscheidende haften nur für bis zu fünf Jahre nach Eintragung fällig werdende Schulden; Verjährung höchstens drei Jahre (§ 160).",
    "Tod führt zur Auflösung, außer Fortsetzungs-, Nachfolge- oder Eintrittsklausel; Erbe kann Kommanditist werden (§ 139).",
    "KG: Komplementär haftet unbeschränkt. Kommanditist haftet nur bis zur Haftsumme, soweit die Einlage nicht geleistet ist (§ 171); Wiederaufleben bei Rückgewähr (§ 172). Er führt nicht die Geschäfte und vertritt nicht.",
    "Stille Gesellschaft: reine Innengesellschaft – der Stille haftet nicht."
  ],
  fehler: [
    "Die GesbR ist nicht rechtsfähig – OG und KG sind es.",
    "Interne Beschränkungen der Vertretungsmacht der OG wirken nicht nach außen.",
    "Die Haftung des Kommanditisten hängt nicht an der Geschäftsführung."
  ],
  video: [
    { h: "Drei Personengesellschaften", n: "Die GesbR ist ein bloßer Vertrag, nicht rechtsfähig. Die OG ist rechtsfähig und eingetragen, alle haften unbeschränkt. In der KG haftet zumindest einer unbeschränkt, der Komplementär, die Kommanditisten nur bis zur Haftsumme.",
      v: { type: "table", cols: ["", "GesbR", "OG", "KG"], rows: [["rechtsfähig", "nein", "ja", "ja"], ["Firmenbuch", "nein", "ja, konstitutiv", "ja, konstitutiv"], ["Haftung", "solidarisch, unbeschränkt", "§ 128: unbeschränkt", "Komplementär unbeschr., Kommanditist bis Haftsumme"]] } },
    { h: "Die sechs Merkmale des § 128", n: "Die Gesellschafter der OG haften unbeschränkt, mit dem ganzen Privatvermögen. Unbeschränkbar, also nicht durch Vertrag einschränkbar. Unmittelbar und primär, der Gläubiger muss nicht zuerst die OG klagen. Persönlich und solidarisch, jeder für das Ganze.",
      v: { type: "cards", items: [{ h: "unbeschränkt", t: "ganzes Privatvermögen" }, { h: "unbeschränkbar", t: "nach außen" }, { h: "unmittelbar", t: "direkt gegenüber Gläubigern" }, { h: "primär", t: "nicht erst nach der OG" }, { h: "persönlich", t: "eigenes Vermögen" }, { h: "solidarisch", t: "jeder für das Ganze" }] } },
    { h: "Eintritt und Austritt", n: "Wer in eine OG eintritt, haftet auch für die Altschulden. Wer austritt, haftet noch für Schulden, die binnen fünf Jahren nach Eintragung des Ausscheidens fällig werden.",
      v: { type: "compare", left: { h: "Eintritt § 130", items: ["Haftung auch für Altschulden", "Einwendungen der OG nutzbar (§ 129)"] }, right: { h: "Austritt § 160", items: ["Nachhaftung 5 Jahre", "Verjährung max. 3 Jahre"] } } },
    { h: "Die Haftung des Kommanditisten", n: "Eingetragene Haftsumme hunderttausend Euro, eingezahlt sechzigtausend. Der Kommanditist haftet noch mit vierzigtausend. Lässt er sich zwanzigtausend zurückzahlen, lebt die Haftung auf sechzigtausend wieder auf.",
      v: { type: "big", value: "100.000 − 60.000 = 40.000 €", sub: "Haftsumme minus geleistete Einlage (§ 171 UGB) · Rückzahlung lässt Haftung wieder aufleben (§ 172)" } }
  ],
  diagrams: [
    { cap: "OG – Innen- und Außenverhältnis", v: { type: "compare", left: { h: "Innen (Geschäftsführung)", items: ["dispositiv", "außergewöhnliche Geschäfte: alle", "Wettbewerbsverbot §§ 112 f"] }, right: { h: "Außen (Vertretung)", items: ["jeder allein (§ 125)", "unbeschränkbar (§ 126)", "inkl. Grundstücksgeschäfte"] } } }
  ],
  cases: [
    { t: "Der Food-Truck", q: "Mia, Jonas und Lea betreiben „Streetbowl“ ohne Vertrag. Jonas kauft ohne Rücksprache einen Grill um 8.000 €. Der Händler verlangt von Lea Zahlung.", a: "Außen-GesbR (vermutet). Kauf ist gewöhnlicher Betrieb, Einzelvertretung vermutet → wirksam. Lea haftet solidarisch (§ 1199) und kann Regress nehmen." },
    { t: "Neue und alte Gesellschafter", q: "OG schuldet 30.000 € (März). Carla tritt im Mai ein, Novak scheidet im Juni aus. Klage gegen Carla.", a: "Carla haftet auch für Altschulden (§ 130), primär und solidarisch; Einwendungen der OG kann sie erheben (§ 129). Novak haftet nach § 160 weiter." },
    { t: "Die Kommanditistin", q: "Haftsumme 100.000 €, eingezahlt 60.000 €. (b) Rückzahlung von 20.000 € vor einem Jahr.", a: "(a) 40.000 € (§ 171). (b) 60.000 € (§ 172 Abs 3). Fehlende Geschäftsführung ist irrelevant." }
  ]
},
/* ───────────── 17 ───────────── */
{ id: 17, teil: "G", title: "Kapitalgesellschaften", norms: ["§§ 2, 4, 10 GmbHG", "§ 16 GmbHG", "§ 20 GmbHG", "§ 25 GmbHG", "§§ 70, 75 AktG"],
  intro: "GmbH und AG: Gründung, Organe, Haftung und Kapitalerhaltung.",
  points: [
    "GmbH: juristische Person – nur das Gesellschaftsvermögen haftet (§ 61 GmbHG). Gesellschaftsvertrag als Notariatsakt.",
    "Stammkapital mindestens 10.000 € (seit 2024), davon mindestens 5.000 € bar eingezahlt. Sacheinlagen sofort voll; Differenzhaftung bei Überbewertung (§ 10a).",
    "Die GmbH entsteht mit der Eintragung; vorher haften die Handelnden persönlich (§ 2 GmbHG). Seit 2024 gibt es auch die FlexCo.",
    "Geschäftsführer: Fremdorganschaft, Bestellung und jederzeitige Abberufung durch die Gesellschafter (§ 16), an Weisungen gebunden (§ 20). Vertretung unbeschränkbar, grundsätzlich Gesamtvertretung.",
    "Haftung der Geschäftsführer: Sorgfalt eines ordentlichen Geschäftsmannes, Business Judgement Rule (§ 25 Abs 1a), umgekehrte Beweislast, Verjährung fünf Jahre.",
    "Generalversammlung: einfache Mehrheit; Dreiviertelmehrheit für Satzungsänderungen und Kapitalmaßnahmen; Einstimmigkeit für die Änderung des Unternehmensgegenstands. Anfechtungsklage binnen eines Monats.",
    "Verbot der Einlagenrückgewähr (§§ 82 f) mit Fremdvergleich. Anteilsübertragung per Notariatsakt.",
    "AG: Grundkapital mindestens 70.000 €. Vorstand leitet weisungsfrei (§ 70 AktG), wird vom Aufsichtsrat für höchstens fünf Jahre bestellt und nur aus wichtigem Grund abberufen.",
    "Aufsichtsrat der AG: 3–20 Mitglieder, Wahl durch die Hauptversammlung, ein Drittel Arbeitnehmervertreter."
  ],
  fehler: [
    "GmbH-Geschäftsführer sind weisungsgebunden – AG-Vorstände nicht.",
    "Abberufung (Organstellung) ≠ Kündigung des Anstellungsvertrags.",
    "Vor der Eintragung haftet, wer handelt – nicht automatisch alle Gesellschafter."
  ],
  video: [
    { h: "Die GmbH gründen", n: "Gesellschaftsvertrag als Notariatsakt, Stammkapital mindestens zehntausend Euro, davon fünftausend bar eingezahlt. Mit der Eintragung im Firmenbuch entsteht die GmbH. Wer vorher in ihrem Namen handelt, haftet persönlich.",
      v: { type: "flow", items: [{ t: "Notariatsakt", s: "Gesellschaftsvertrag" }, { t: "Kapital", s: "10.000 €, mind. 5.000 € bar" }, { t: "Eintragung", s: "GmbH entsteht (konstitutiv)" }] } },
    { h: "Organe: GmbH und AG", n: "In der GmbH bestimmen die Gesellschafter in der Generalversammlung und können dem Geschäftsführer Weisungen erteilen. In der AG leitet der Vorstand weisungsfrei, kontrolliert vom Aufsichtsrat, der von der Hauptversammlung gewählt wird.",
      v: { type: "compare", left: { h: "GmbH", items: ["Generalversammlung (oberstes Organ)", "Geschäftsführer: weisungsgebunden", "jederzeit abberufbar"] }, right: { h: "AG", items: ["Hauptversammlung", "Aufsichtsrat bestellt Vorstand", "Vorstand weisungsfrei, max. 5 Jahre"] } } },
    { h: "Mehrheiten in der Generalversammlung", n: "Normale Beschlüsse brauchen die einfache Mehrheit. Satzungsänderungen und Kapitalmaßnahmen drei Viertel. Eine Änderung des Unternehmensgegenstands braucht Einstimmigkeit.",
      v: { type: "pyramid", items: ["Einstimmigkeit: Unternehmensgegenstand", "¾-Mehrheit: Satzung, Kapitalmaßnahmen", "einfache Mehrheit: z. B. Geschäftsführer bestellen"] } },
    { h: "Business Judgement Rule", n: "Ein Geschäftsführer haftet nicht für jede Fehlentscheidung. Handelt er ohne Eigeninteresse, auf Grundlage angemessener Information und zum Wohl der Gesellschaft, ist er geschützt. Ein uninformierter Alleingang ist es nicht.",
      v: { type: "steps", items: ["unternehmerische Entscheidung", "keine sachfremden Interessen", "angemessene Informationsgrundlage", "vertretbar zum Wohl der Gesellschaft"] } }
  ],
  diagrams: [
    { cap: "Mindestkapital der Rechtsträger", v: { type: "table", cols: ["Rechtsform", "Mindestkapital"], rows: [["GmbH", "10.000 € (5.000 € bar)"], ["AG", "70.000 €"], ["SE", "120.000 €"], ["SCE", "30.000 €"], ["Privatstiftung", "70.000 €"]] } }
  ],
  cases: [
    { t: "Die Gründung des Mode-Shops", q: "Clara: 7.000 € bar; David: Lieferwagen als 3.000 €-Einlage, wert 2.000 €. Clara bestellt vor Eintragung Ware um 12.000 €.", a: "Notariatsakt, 5.000 € bar vor Anmeldung. David: Differenzhaftung 1.000 € (§ 10a). Für die Bestellung haftet Clara persönlich (§ 2 GmbHG)." },
    { t: "Weisung oder eigene Verantwortung?", q: "Gesellschafter beschließen den Kauf einer Pistenraupe; G hält ihn für unwirtschaftlich, führt ihn aber durch. Später Schadenersatzforderung und Abberufung.", a: "Befolgt G einen gesetzmäßigen Beschluss, haftet er grundsätzlich nicht. Abberufung jederzeit ohne Grund (§ 16). Ein AG-Vorstand wäre weisungsfrei und nur aus wichtigem Grund abberufbar." }
  ]
},
/* ───────────── 18 ───────────── */
{ id: 18, teil: "H", title: "Wertpapierrecht", norms: ["§§ 1400 ff ABGB", "Art 1, 16, 47 WG", "SchG", "ZaDiG"],
  intro: "Inhaber-, Order- und Rektapapiere, Anweisung, Wechsel, Scheck und Kreditkarte.",
  points: [
    "Wertpapier = Urkunde über ein privates Recht, das nur mit der Urkunde geltend gemacht werden kann. Keine Wertpapiere: Beweisurkunden (Quittung) und einfache Legitimationspapiere (Garderobenmarke).",
    "Inhaberpapier: Übertragung durch Übergabe, gutgläubiger Erwerb möglich. Orderpapier (geboren oder gekoren): Indossament und Übergabe. Rektapapier: Zession und Übergabe, kein gutgläubiger Erwerb.",
    "Dingliche Einwendungen wirken gegen jeden Inhaber, persönliche nur im jeweiligen Verhältnis. Verlorene Urkunden: Kraftloserklärung.",
    "Anweisung (§§ 1400 ff): Deckungs-, Valuta- und Einlösungsverhältnis. Der Empfänger hat erst nach Annahme einen Anspruch gegen den Angewiesenen.",
    "Wechsel: abstraktes Zahlungsversprechen, gezogen (Aussteller, Bezogener, Remittent) oder eigen. Strenge Form (Wechselklausel!). Das Akzept macht den Bezogenen zum Hauptschuldner.",
    "Rückgriff: alle Unterzeichner haften solidarisch mit Sprungregress (Art 47 WG), Voraussetzung Nichtzahlung und Protest.",
    "Scheck: Zahlungsanweisung an eine Bank, stets bei Sicht zahlbar, Akzeptverbot. Vorlegungsfristen 8, 20 oder 70 Tage. Verrechnungsscheck nur durch Gutschrift.",
    "Kreditkarte ist kein Wertpapier. Nach ZaDiG trägt die Bank die Beweislast für die Autorisierung; Kunde haftet bei leichter Fahrlässigkeit höchstens mit 50 €, bei grober voll bis zur Anzeige.",
    "Sparbuch ist echtes Wertpapier (Losungswort, Identifikation)."
  ],
  fehler: [
    "Namenssparbuch = Rektapapier: kein gutgläubiger Erwerb.",
    "Ohne das Wort „Wechsel“ in der Urkunde gibt es keine Wechselhaftung.",
    "Eine gefälschte Unterschrift verpflichtet den Namensträger nicht – die übrigen bleiben wirksam (Art 7 WG)."
  ],
  video: [
    { h: "Was ist ein Wertpapier?", n: "Ein Wertpapier verbrieft ein Recht so, dass man es nur mit der Urkunde geltend machen kann. Eine Quittung beweist nur eine Tatsache. Eine Garderobenmarke ist bloß ein Legitimationspapier: Man kann sein Recht auch anders beweisen.",
      v: { type: "compare", left: { h: "Wertpapier", items: ["Recht nur mit Urkunde", "Aktie, Scheck, Wechsel, Sparbuch"] }, right: { h: "kein Wertpapier", items: ["Beweisurkunde: Quittung", "Legitimationspapier: Garderobenmarke", "Kreditkarte"] } } },
    { h: "Drei Arten der Übertragung", n: "Inhaberpapiere werden einfach übergeben. Orderpapiere zusätzlich indossiert. Rektapapiere, also Namenspapiere, durch Zession. Beim Rektapapier gibt es keinen gutgläubigen Erwerb.",
      v: { type: "table", cols: ["Papier", "Übertragung", "gutgläubiger Erwerb"], rows: [["Inhaberpapier", "Übergabe", "ja"], ["Orderpapier", "Indossament + Übergabe", "ja"], ["Rektapapier", "Zession + Übergabe", "nein"]] } },
    { h: "Der gezogene Wechsel", n: "Der Aussteller weist den Bezogenen an, an den Remittenten zu zahlen. Mit dem Akzept wird der Bezogene Hauptschuldner. Zahlt er nicht, haften nach Protest alle Unterzeichner solidarisch, in beliebiger Reihenfolge.",
      v: { type: "tri", a: "Aussteller", b: "Bezogener (Akzeptant)", c: "Remittent", ab: "Zahlungsanweisung", bc: "zahlt bei Fälligkeit", ca: "begibt Wechsel" } },
    { h: "Der Scheck", n: "Ein Scheck ist eine Zahlungsanweisung an eine Bank. Er ist immer bei Sicht zahlbar, eine Vordatierung ändert das nicht. Er darf nicht akzeptiert werden. Vorlegungsfristen: acht Tage im Inland, zwanzig oder siebzig Tage bei Auslandsschecks.",
      v: { type: "big", value: "8 · 20 · 70 Tage", sub: "Vorlegungsfristen · Scheck stets bei Sicht zahlbar · Akzeptverbot" } }
  ],
  diagrams: [
    { cap: "Die Anweisung – drei Verhältnisse", v: { type: "tri", a: "Anweisender", b: "Angewiesener", c: "Anweisungsempfänger", ab: "Deckungsverhältnis", bc: "Einlösungsverhältnis", ca: "Valutaverhältnis" } }
  ],
  cases: [
    { t: "Urkunden auf dem Schreibtisch", q: "Garderobenmarke, Namenssparbuch, Quittung, Inhaberscheck, Namensaktie, Orderlagerschein – Wertpapier?", a: "Wertpapiere: Sparbuch (Rekta), Inhaberscheck, Namensaktie (geborenes Orderpapier), Orderlagerschein (gekorenes Orderpapier). Garderobenmarke = Legitimationspapier, Quittung = Beweisurkunde." },
    { t: "Die gestohlenen Papiere", q: "Gestohlen: Inhaberschuldverschreibung (an gutgläubigen A verkauft) und Namenssparbuch (an B „verkauft“).", a: "A erwirbt gutgläubig (Inhaberpapier). Beim Rektapapier kein gutgläubiger Erwerb – H kann das Sparbuch von B herausverlangen; sofort Bank verständigen, Kraftloserklärung." }
  ]
},
/* ───────────── 19 ───────────── */
{ id: 19, teil: "H", title: "Wettbewerbs- und Kartellrecht", norms: ["§§ 1, 1a, 2, 7 UWG", "§ 14 UWG", "§§ 1, 5 KartG", "Art 101, 102 AEUV"],
  intro: "Unlautere Geschäftspraktiken, Kartellverbot, Missbrauchsverbot und Fusionskontrolle.",
  points: [
    "Lauterkeitsrecht (UWG): fairer Wettbewerb ohne Täuschung und Druck. Kartellrecht: Schutz der Wettbewerbsstruktur.",
    "Prüfungsreihenfolge UWG: Sondertatbestand → Anhang (Per-se-Verbote, „schwarze Liste“) → §§ 1a und 2 → Generalklausel § 1.",
    "Aggressive Geschäftspraktiken (§ 1a): Belästigung, Nötigung (physischer oder psychischer Kaufzwang), unzulässige Beeinflussung.",
    "Irreführung (§ 2): nachprüfbare Angabe (kein Werturteil), geeignet zur Täuschung des Durchschnittsverbrauchers; auch durch Unterlassen. Beispiele: Lockvogelangebot, Mogelpackung, falsche Statt-Preise.",
    "Herabsetzung (§ 7): Der Behauptende muss die Wahrheit beweisen. Vergleichende Werbung ist zulässig, wenn wahr und sachlich.",
    "Ansprüche: Unterlassung (Wiederholungsgefahr vermutet, ohne Verschulden), Beseitigung, Urteilsveröffentlichung, Schadenersatz bei Verschulden, einstweilige Verfügung. Verjährung 6 Monate ab Kenntnis, spätestens 3 Jahre. Klagebefugt u. a. Mitbewerber, Kammern, VKI.",
    "Kartellverbot (§ 1 KartG, Art 101 AEUV): wettbewerbsbeschränkende Vereinbarungen, Beschlüsse und abgestimmte Verhaltensweisen sind verboten und nichtig. Bagatellkartelle (10 % bzw. 15 %), nie bei Preisabsprachen.",
    "Missbrauchsverbot (§ 5 KartG) für marktbeherrschende Unternehmen. Fusionskontrolle mit Anmeldepflicht (300 Mio. € weltweit, 30 Mio. € im Inland) und Durchführungsverbot. Geldbußen bis 10 % des Umsatzes."
  ],
  fehler: [
    "„Österreichs bester Händler“ ist ein Werturteil, keine nachprüfbare Angabe.",
    "Ein UWG-Verstoß macht den Vertrag mit dem Kunden nicht automatisch unwirksam.",
    "Unterlassungsanspruch braucht kein Verschulden."
  ],
  video: [
    { h: "Prüfungsreihenfolge im UWG", n: "Man beginnt beim Speziellen: Gibt es einen Sondertatbestand? Steht die Praxis im Anhang, der schwarzen Liste, die immer verboten ist? Dann aggressive und irreführende Praktiken. Erst zum Schluss die Generalklausel.",
      v: { type: "steps", items: ["Sondertatbestände (§§ 7, 9, 10 …)", "Anhang: Per-se-Verbote", "§ 1a aggressiv · § 2 irreführend", "Generalklausel § 1"] } },
    { h: "Aggressiv oder irreführend?", n: "Bleibt ein Vertreter trotz Aufforderung in der Wohnung sitzen, ist das aggressiv. Wirbt ein Händler mit einem Fernseher, von dem er nur zwei Stück hat, ist das ein irreführendes Lockvogelangebot.",
      v: { type: "compare", left: { h: "aggressiv § 1a", items: ["Belästigung", "Nötigung, Kaufzwang", "unzulässige Beeinflussung"] }, right: { h: "irreführend § 2", items: ["Lockvogelangebot", "Mogelpackung", "falscher Statt-Preis"] } } },
    { h: "Ansprüche und Fristen", n: "Mitbewerber, Kammern und der Verein für Konsumenteninformation können auf Unterlassung klagen, auch per einstweiliger Verfügung. Verschulden ist nicht nötig. Die Frist: sechs Monate ab Kenntnis, spätestens drei Jahre.",
      v: { type: "big", value: "6 Monate", sub: "ab Kenntnis von Tat und Täter · spätestens 3 Jahre · Unterlassung ohne Verschulden" } },
    { h: "Kartellrecht in drei Säulen", n: "Erstens das Kartellverbot: keine wettbewerbsbeschränkenden Absprachen. Zweitens das Missbrauchsverbot für marktbeherrschende Unternehmen. Drittens die Fusionskontrolle: Große Zusammenschlüsse müssen angemeldet werden und dürfen vorher nicht vollzogen werden.",
      v: { type: "cards", items: [{ h: "Kartellverbot", t: "§ 1 KartG · Art 101 AEUV" }, { h: "Missbrauchsverbot", t: "§ 5 KartG · Art 102 AEUV" }, { h: "Fusionskontrolle", t: "Anmeldung + Durchführungsverbot" }] } }
  ],
  diagrams: [
    { cap: "Gewerberecht – drei Arten von Gewerben", v: { type: "cards", items: [{ h: "freie Gewerbe", t: "Anmeldung genügt" }, { h: "reglementierte Gewerbe", t: "Befähigungsnachweis" }, { h: "konzessionierte Gewerbe", t: "behördliche Bewilligung" }] } }
  ],
  cases: [
    { t: "Die Tiefpreissensation", q: "„55-Zoll-TV um 299 € statt 699 € – Österreichs bester Elektrohändler!“ Nur zwei Geräte lagernd; 699 € nie verlangt.", a: "Lockvogelangebot (Anhang) und falscher Statt-Preis (§ 2) – irreführend. „Bester Händler“ ist Werturteil. Mitbewerber: Unterlassung + einstweilige Verfügung binnen 6 Monaten; auch der VKI kann klagen." },
    { t: "Der hartnäckige Vertreter", q: "Vertreter bleibt bei der 82-jährigen Frau R trotz Aufforderung sitzen, schenkt einen Topf und droht mit Jobverlust. Sie unterschreibt.", a: "Aggressive Geschäftspraktik (§ 1a). Vertrag nicht automatisch unwirksam, aber Rücktritt nach § 11 FAGG (außerhalb von Geschäftsräumen) binnen 14 Tagen." }
  ]
},
/* ───────────── 20 ───────────── */
{ id: 20, teil: "H", title: "Immaterialgüterrecht", norms: ["MSchG", "MuSchG", "PatG", "GMG", "UrhG"],
  intro: "Marke, Muster, Patent, Gebrauchsmuster und Urheberrecht.",
  points: [
    "Immaterialgüterrechte schützen geistige Leistungen und Kennzeichen. Grundmuster: Anmeldung beim Patentamt, Priorität, Prüfung, Registrierung. Das Urheberrecht entsteht formlos mit der Schaffung.",
    "Territorialität. Unionspriorität 12 Monate (Patent, Gebrauchsmuster), 6 Monate (Marke, Muster). Erschöpfung nur im EWR.",
    "Marke: unterscheidungskräftiges, klar darstellbares Zeichen. Beschreibende Angaben nur mit Verkehrsgeltung. Schutz 10 Jahre ab Anmeldung, beliebig oft verlängerbar. Widerspruch binnen 3 Monaten; Löschung nach 5 Jahren Nichtgebrauch.",
    "Muster (Design): neu und eigenartig; 12 Monate Neuheitsschonfrist; keine amtliche Neuheitsprüfung. Schutz 5 Jahre, verlängerbar bis 25 Jahre. Nicht eingetragenes EU-Design 3 Jahre.",
    "Patent: technische Erfindung, neu, nicht naheliegend, gewerblich anwendbar. Höchstens 20 Jahre (Schutzzertifikat bis 5 Jahre mehr). Einspruch binnen 4 Monaten.",
    "Gebrauchsmuster: rasch und günstig, keine Neuheitsprüfung, 6 Monate Neuheitsschonfrist, höchstens 10 Jahre, auch für Programmlogiken.",
    "Diensterfindung: Inanspruchnahme durch den Arbeitgeber nur bei schriftlicher Vereinbarung oder Kollektivvertrag; angemessene Vergütung.",
    "Urheberrecht: eigentümliche geistige Schöpfung. Verwertungsrechte nicht übertragbar, nur Nutzungsrechte. Schutz bis 70 Jahre nach dem Tod; verwandte Schutzrechte 50 Jahre.",
    "Freie Werknutzungen: Privatkopie, Unterricht, Zitat mit Quellenangabe. Programme von Arbeitnehmern: Werknutzungsrecht des Arbeitgebers (§ 40b UrhG)."
  ],
  fehler: [
    "Beim Muster prüft das Patentamt keine Neuheit – das klärt erst ein Nichtigkeitsverfahren.",
    "Urheberrecht wird nicht angemeldet.",
    "Eigene Veröffentlichung vor Anmeldung: beim Patent neuheitsschädlich, beim Gebrauchsmuster binnen 6 Monaten unschädlich."
  ],
  video: [
    { h: "Fünf Schutzrechte", n: "Marken schützen Kennzeichen, Muster das Design, Patente und Gebrauchsmuster technische Erfindungen, das Urheberrecht Werke. Nur das Urheberrecht entsteht ohne Anmeldung.",
      v: { type: "table", cols: ["Recht", "Schützt", "Dauer"], rows: [["Marke", "Kennzeichen", "10 J., beliebig verlängerbar"], ["Muster", "Design", "5 J., bis 25 J."], ["Patent", "technische Erfindung", "max. 20 J."], ["Gebrauchsmuster", "technische Erfindung", "max. 10 J."], ["Urheberrecht", "Werk", "70 J. nach Tod"]] } },
    { h: "Ist das Zeichen schutzfähig?", n: "Eine Marke muss unterscheidungskräftig sein. Blitzkraft für einen Energydrink ist eine Fantasiebezeichnung und schutzfähig. Energy Drink ist beschreibend und muss für alle frei bleiben.",
      v: { type: "compare", left: { h: "schutzfähig", items: ["„Blitzkraft“", "Fantasiewort, unterscheidungskräftig"] }, right: { h: "nicht schutzfähig", items: ["„Energy Drink“", "beschreibend, Freihaltebedürfnis"] } } },
    { h: "Patent: drei Hürden", n: "Eine Erfindung ist patentierbar, wenn sie neu ist, nicht naheliegend, also eine erfinderische Tätigkeit zeigt, und gewerblich anwendbar. Entdeckungen und Programme als solche sind ausgeschlossen.",
      v: { type: "steps", items: ["neu (weltweit, keine Vorveröffentlichung)", "erfinderische Tätigkeit (nicht naheliegend)", "gewerblich anwendbar", "→ Schutz max. 20 Jahre"] } },
    { h: "Urheberrecht", n: "Das Urheberrecht entsteht mit der Schöpfung, ohne Anmeldung. Der Urheber kann es nicht übertragen, nur Nutzungsrechte einräumen. Es erlischt siebzig Jahre nach seinem Tod.",
      v: { type: "big", value: "70 Jahre", sub: "nach dem Tod des Urhebers · formlos · nur Nutzungsrechte übertragbar" } }
  ],
  diagrams: [
    { cap: "Neuheitsschonfristen und Prioritäten", v: { type: "table", cols: ["Recht", "Neuheitsschonfrist", "Unionspriorität"], rows: [["Patent", "– (eigene Veröffentlichung schadet)", "12 Monate"], ["Gebrauchsmuster", "6 Monate", "12 Monate"], ["Muster", "12 Monate", "6 Monate"], ["Marke", "–", "6 Monate"]] } }
  ],
  cases: [
    { t: "Die Marke für den Energydrink", q: "Start-up will „Blitzkraft“ und „Energy Drink“ registrieren. Mitbewerber hat „Blitzkraaft“ für Limonaden.", a: "„Blitzkraft“ schutzfähig, „Energy Drink“ nicht (beschreibend). Mitbewerber: Widerspruch binnen 3 Monaten wegen Verwechslungsgefahr. Schutz 10 Jahre; Löschung nach 5 Jahren Nichtgebrauch." },
    { t: "Der kopierte Stuhl", q: "Designerin zeigt Stuhl im März auf einer Messe, meldet im Oktober als Muster an. Im Dezember kopiert ein Diskonter.", a: "Neu dank 12-monatiger Neuheitsschonfrist. Ansprüche nach § 34 MuSchG; schon ab Messe nicht eingetragenes EU-Design (3 Jahre). Schutz bis 25 Jahre." }
  ]
}
];
