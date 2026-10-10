(function (X) { var D = X.D, M = X.M, B = X.B, A = X.X, F = X.F, L = X.L, S = X.S, T = X.T;
window.DETAILS[12] = [
{ h: "12.1 Allgemeines", b: [
  "Das Schadenersatzrecht steht in den §§ 1293–1341 ABGB und in Sondergesetzen (PHG, EKHG, AHG). Grundregel: Jeder trägt seinen Schaden selbst (casum sentit dominus, § 1311). Nur wenn ein Grund besteht, wird er auf einen anderen überwälzt.",
  L(["Ausgleichsfunktion: Der Geschädigte soll einen Ausgleich erhalten – ursprünglich vorrangig durch Wiederherstellung, praktisch fast immer in Geld. Er soll nicht bereichert werden.", "Präventionsfunktion: Die drohende Ersatzpflicht hält zu Sorgfalt an.", "Sanktionsfunktion: untergeordnet; sie zeigt sich darin, dass der Ersatzumfang vom Verschuldensgrad abhängt."]),
  T(["Haftungsart", "Grund", "Beispiele"], [
    ["Verschuldenshaftung", "persönlich vorwerfbares Verhalten – die Grundregel", "unaufmerksamer Radfahrer fährt einen Fußgänger an"],
    ["Gefährdungshaftung", "Gefährlichkeit einer erlaubten Sache oder Tätigkeit, ohne Rechtswidrigkeit und Verschulden – wer profitiert, trägt das Risiko", "PHG; Kfz-Halter (EKHG, entfällt nur bei unabwendbarem Ereignis, § 9); Bahn, Luftfahrt, Seilbahn; nahe dabei Tierhalter (§ 1320)"],
    ["Eingriffshaftung", "Ersatz für einen erlaubten Eingriff, verschuldensunabhängig", "behördlich genehmigte Anlagen (§ 364a), Enteignung (§ 365)"]])
]},
{ h: "12.2 Gefährdungshaftung am Beispiel des PHG", b: [
  "Das PHG regelt die Haftung für fehlerhafte Produkte – unabhängig von Vertrag und Verschulden. Auch ein Gast, den ein explodierendes Gerät verletzt, ist geschützt.",
  S("Produkthaftung (PHG)", ["Produkt: jede bewegliche körperliche Sache, auch als Teil einer anderen, einschließlich Energie (§ 4).", "Fehler: bietet nicht die berechtigterweise erwartbare Sicherheit (§ 5) – Konstruktions-, Produktions-, Instruktionsfehler, begründeter Fehlerverdacht.", "Schaden: Tötung, Körperverletzung oder Beschädigung einer anderen Sache – nicht das Produkt selbst; ausgenommen Sachen, die ein Unternehmer überwiegend im Unternehmen nutzt.", "Haftpflichtig: Hersteller und Importeur in den EWR; der Händler nur subsidiär, wenn er Hersteller, Importeur oder Vorlieferanten nicht binnen angemessener Frist nennt.", "Inverkehrbringen.", "Selbstbehalt 500 € bei Sachschäden (§ 2)."]),
  A("Haftungsausschluss nach dem PHG", "Keine Haftung, wenn der Fehler auf zwingender Rechtsvorschrift beruht oder nach Stand von Wissenschaft und Technik nicht erkennbar war. Der Hersteller eines fehlerfreien Teilprodukts haftet nicht für Fehler aus der Konstruktion des Gesamtprodukts. Im Voraus kann die Haftung weder ausgeschlossen noch beschränkt werden."),
  "Verjährung: drei Jahre ab Kenntnis; Erlöschen spätestens zehn Jahre nach Inverkehrbringen (§ 13 PHG).",
  B("Der überhitzte Akku", "Der Akku eines neuen E-Scooters überhitzt wegen eines Konstruktionsfehlers und setzt die Wohnung in Brand. Der Hersteller bzw. Importeur ersetzt Heilungskosten und Einrichtungsschäden (minus 500 €) ohne Verschulden. Den Scooter selbst ersetzt das PHG nicht – dafür Gewährleistung."),
  M("Die neue Produkthaftungs-RL (EU) 2024/2853 (Umsetzung bis 9.12.2026) gilt für danach in Verkehr gebrachte Produkte: Software und KI-Systeme sind Produkte, der Selbstbehalt entfällt, es gibt Offenlegungspflichten und Beweiserleichterungen.", "Neu"),
  L(["Tierhalterhaftung (§ 1320): Der Halter haftet, außer er beweist ausreichende Verwahrung oder Beaufsichtigung; seit 2019 eigene Sorgfaltspflichten für Almwirtschaft und Almbesucher.", "Eingriffshaftung (§ 364a): Immissionen behördlich genehmigter Anlagen sind zu dulden, Schäden verschuldensunabhängig zu ersetzen."]),
  B("Der Hund an der morschen Leine", "Ein Hund reißt sich von einer abgenützten Leine los und beißt einen Radfahrer. Der Halter haftet, weil er keine ausreichende Verwahrung beweisen kann.")
]},
{ h: "12.3 Verschuldenshaftung", b: [
  "Vier Voraussetzungen müssen kumulativ vorliegen: Schaden, Kausalität, Rechtswidrigkeit, Verschulden. Grundsätzlich beweist der Geschädigte alles (§ 1296); bei besonderen, vor allem vertraglichen Pflichten muss sich der Schädiger entlasten (§ 1298).",
  S("Verschuldenshaftung (§§ 1293 ff ABGB)", ["Schaden: ersatzfähiger Nachteil an Vermögen, Rechten oder Person? Welche Schadensart?", "Kausalität: conditio sine qua non und Adäquanz?", "Rechtswidrigkeit: Verstoß gegen Gebot/Verbot, Rechtswidrigkeitszusammenhang, kein Rechtfertigungsgrund?", "Verschulden: Vorsatz oder Fahrlässigkeit, Deliktsfähigkeit; ggf. Gehilfenzurechnung (§§ 1313a, 1315).", "Rechtsfolge: Umfang, Mitverschulden (§ 1304), Verjährung (§ 1489)."]),
  { k: "sub", h: "Schaden" },
  D("Schaden", "Jeder Nachteil an Vermögen, Rechten oder Person (§ 1293 ABGB)."),
  T(["Schadensart", "Erklärung", "Beispiel"], [
    ["Vermögensschaden", "in Geld messbarer Nachteil", "Reparatur-, Heilungskosten, Verdienstentgang"],
    ["reiner Vermögensschaden", "Nachteil ohne Verletzung eines absolut geschützten Guts; aus Vertrag ersatzfähig, aus Delikt nur ausnahmsweise (Schutzgesetz, Sittenwidrigkeit)", "Bagger beschädigt ein Stromkabel, ein fremder Betrieb steht still"],
    ["ideeller Schaden", "ohne Marktwert; nur in anerkannten Fällen", "Schmerzengeld (§ 1325), entgangene Urlaubsfreude (§ 12 PRG), Schock- und Trauerschäden naher Angehöriger, Wert der besonderen Vorliebe (§ 1331)"],
    ["mittelbar Geschädigte", "Dritte mit nur indirektem Nachteil erhalten grundsätzlich nichts", "Ausnahme bei bloßer Schadensverlagerung"]]),
  "Gebrauchsentgang: ersetzt werden nur tatsächlich angefallene Kosten, nicht fiktive Mietwagenkosten; frustrierte Aufwendungen (das ungenützte Konzertticket) grundsätzlich nicht.",
  L(["Positiver Schaden: Verminderung des vorhandenen Vermögens (Reparatur 3.000 €).", "Entgangener Gewinn: erwartbarer Vermögenszuwachs – nur bei grober Fahrlässigkeit oder Vorsatz (§ 1324), im Unternehmerverkehr schon bei leichter Fahrlässigkeit (§ 349 UGB).", "Vertrauensschaden: so zu stellen, als hätte man nie auf den Vertrag vertraut (§§ 878, 1019) – begrenzt durch das Erfüllungsinteresse.", "Nichterfüllungsschaden (Erfüllungsinteresse): so zu stellen, als wäre ordnungsgemäß erfüllt worden (Mehrkosten eines Deckungskaufs)."]),
  { k: "sub", h: "Berechnung nach Verschuldensgrad (§§ 1323 f)" },
  T(["Verschuldensgrad", "Berechnung", "Bedeutung"], [
    ["leichte Fahrlässigkeit", "objektiv-abstrakt: gemeiner Wert, nur positiver Schaden", "merkantiler Minderwert eines Unfallautos wird ersetzt; Abzug „neu für alt“"],
    ["grobe Fahrlässigkeit und Vorsatz", "subjektiv-konkret: volle Genugtuung inkl. entgangenem Gewinn", "Vorteile (ersparte Aufwendungen) werden angerechnet; bei Vorsatz/Schadenfreude auch Wert der besonderen Vorliebe"]]),
  M("Bei Körperverletzung ersetzt § 1325 unabhängig vom Verschuldensgrad Heilungskosten, Verdienstentgang und angemessenes Schmerzengeld – der Verdienstentgang also auch bei leichter Fahrlässigkeit. Gegenüber Verbrauchern kann die Haftung für Vorsatz und grobe Fahrlässigkeit nicht ausgeschlossen werden (§ 6 Abs 1 Z 9 KSchG).", "Personenschäden"),
  B("Der Verschuldensgrad entscheidet", "Ein Radfahrer beschädigt durch kurze Unachtsamkeit ein Taxi: Er zahlt die Reparatur, nicht den Einnahmenentgang. Fährt er betrunken und schnell hinein (grobe Fahrlässigkeit), muss er auch den Verdienstentgang ersetzen."),
  { k: "sub", h: "Kausalität" },
  "Das Verhalten muss notwendige Bedingung des Schadens sein (conditio sine qua non): Denkt man es weg, entfällt der Schaden. Bei Unterlassung denkt man das gebotene Verhalten hinzu. Zusätzlich muss es adäquat sein – keine ganz ungewöhnliche Verkettung.",
  B("Adäquanz", "A verletzt B leicht; B wird auf dem Weg ins Krankenhaus vom Blitz getroffen. Die Verletzung ist Bedingung, aber nicht adäquat für den Blitzschaden."),
  "Mehrere Schädiger (§ 1302): bestimmbare Anteile – jeder für seinen Teil; sonst solidarisch; bei Vorsatz immer solidarisch. Wer zahlt, nimmt anteilig Regress (§ 896).",
  T(["Begriff", "Situation", "Lösung"], [
    ["kumulative Kausalität", "mehrere Ursachen, jede allein hätte den ganzen Schaden bewirkt", "Solidarhaftung aller"],
    ["alternative Kausalität", "mehrere gleich gefährliche Handlungen, unklar wessen wirkte (zwei Jäger, eine Kugel trifft)", "grundsätzlich Solidarhaftung"],
    ["überholende Kausalität", "der Schaden wäre später ohnehin eingetreten", "der erste Schädiger haftet; die hypothetische Ursache kann künftige Nachteile mindern"]]),
  { k: "sub", h: "Rechtswidrigkeit" },
  L(["Verstoß gegen Schutzgesetze (§ 1311), die gerade vor diesem Schaden schützen sollen (StVO, GewO, StGB).", "Verletzung absolut geschützter Güter: Eigentum, Leben, Gesundheit, Persönlichkeits- und Immaterialgüterrechte.", "Verletzung vertraglicher Haupt- und Nebenpflichten.", "Verletzung von Verkehrssicherungspflichten: Wer eine Gefahrenquelle schafft oder beherrscht, trifft zumutbare Schutzmaßnahmen (Streupflicht, Baustellensicherung).", "Absichtliche sittenwidrige Schädigung (§ 1295 Abs 2)."]),
  "Rechtswidrigkeitszusammenhang: Ersetzt wird nur, was die verletzte Norm verhindern wollte.",
  B("Schutzzweck der Norm", "Otto fährt im Ort 70 statt 50, wird kontrolliert und fährt danach korrekt weiter. Ein Betrunkener torkelt ihm ins Auto. Ohne die Raserei wäre er nicht genau dort gewesen – aber das Tempolimit soll nicht verhindern, dass man später an einem bestimmten Ort ist. Kein Rechtswidrigkeitszusammenhang."),
  "Rechtmäßiges Alternativverhalten: Keine Haftung, wenn der Schaden auch bei rechtmäßigem Verhalten eingetreten wäre – das muss der Schädiger beweisen.",
  L(["Rechtfertigungsgründe: Einwilligung (bei Operationen nur nach ausreichender Aufklärung).", "Notwehr gegen einen gegenwärtigen rechtswidrigen Angriff (§ 19 ABGB, § 3 StGB) – die ältere Dame verletzt den Handtaschenräuber.", "Notstand (§ 1306a): Befreiung ganz oder teilweise, wenn die eigenen Interessen überwiegen – nicht, wer die Notlage selbst verschuldet hat; der Wanderer bricht bei Unwetter in eine Almhütte ein.", "Selbsthilfe."]),
  { k: "sub", h: "Verschulden" },
  T(["Grad", "Definition", "Folge"], [
    ["Vorsatz", "der Schädiger will den Schaden oder nimmt ihn billigend in Kauf – Lack absichtlich zerkratzen", "volle Genugtuung; Solidarhaftung aller Beteiligten"],
    ["grobe Fahrlässigkeit", "ein Fehler, der einem sorgfältigen Menschen niemals unterläuft – Zoowärter lässt den Löwenkäfig offen", "volle Genugtuung; gegenüber Verbrauchern nicht ausschließbar"],
    ["leichte Fahrlässigkeit", "ein Fehler, der auch Sorgfältigen gelegentlich passiert – Fahrrad fällt um und beschädigt ein anderes", "nur positiver Schaden; bei Vertragshaftung Beweislastumkehr"]]),
  "Maßstab ist die Durchschnittssorgfalt (§ 1297); Sachverständige schulden den Standard ihrer Berufsgruppe (§ 1299) – der Arzt den eines sorgfältigen Facharztes. Mitverschulden (§ 1304) teilt den Schaden nach Verschuldensgraden, im Zweifel zur Hälfte. Schadensminderungspflicht: zumutbare Maßnahmen ergreifen, nicht den teuersten Mietwagen nehmen.",
  B("Rechenbeispiel: Mitverschulden", "Radfahrer R fährt Fußgänger F an, der unachtsam bei Rot geht; Gewichtung 2 : 1 zulasten R. Schaden 9.000 €: F trägt ein Drittel (3.000 €), R ersetzt 6.000 €."),
  { k: "sub", h: "Gehilfenhaftung" },
  T(["", "Erfüllungsgehilfe (§ 1313a)", "Besorgungsgehilfe (§ 1315)"], [
    ["Situation", "Gehilfe erfüllt ein bestehendes Schuldverhältnis (Vertrag)", "Gehilfe schädigt einen Dritten ohne Schuldverhältnis (Delikt)"],
    ["Haftung", "für jedes Verschulden des Gehilfen, ohne eigenes Verschulden", "nur bei untüchtigem oder wissentlich gefährlichem Gehilfen"],
    ["Beispiel", "Malerlehrling zerbricht den Kronleuchter des Kunden – der Meister haftet", "Lehrling beschädigt am Heimweg ein fremdes Auto – Meister haftet nur bei Untüchtigkeit"]]),
  L(["Wegehalter (§ 1319a): haftet für mangelhaften Zustand, wenn er oder seine Leute vorsätzlich oder grob fahrlässig handelten.", "Amtshaftung (AHG): Für Organe in Vollziehung der Gesetze haftet der Rechtsträger; Rückersatz vom Organ nur bei Vorsatz oder grober Fahrlässigkeit. Schädigt das Organ den Rechtsträger selbst: OrgHG."]),
  T(["", "Haftung aus Vertrag", "Haftung aus Delikt"], [
    ["Beweislast Verschulden", "Schädiger muss sich entlasten (§ 1298)", "Geschädigter muss beweisen (§ 1296)"],
    ["Gehilfen", "streng: jedes Verschulden des Erfüllungsgehilfen (§ 1313a)", "eng: nur untüchtige oder gefährliche Besorgungsgehilfen (§ 1315)"],
    ["reine Vermögensschäden", "ersatzfähig", "nur ausnahmsweise"],
    ["Verjährung", "3 Jahre ab Kenntnis von Schaden und Schädiger, absolut 30 Jahre", "gleich"]]),
  M("Die Vertragshaftung ist für den Geschädigten günstiger. Daher immer zuerst prüfen, ob ein Vertrag oder vorvertragliches Verhältnis besteht.", "Zuerst die Vertragshaftung prüfen"),
  B("Verjährungsbeginn", "Frau S wird im März 2023 von einem unbekannten Radfahrer verletzt und erfährt erst im Oktober 2024, wer es war. Die drei Jahre laufen ab Oktober 2024, also bis Oktober 2027."),
  { k: "sub", h: "Arbeitnehmerhaftung und Sonderhaftungen" },
  L(["DHG: Schädigt ein Arbeitnehmer bei der Arbeit nicht vorsätzlich, kann das Gericht den Ersatz bei leichter und grober Fahrlässigkeit mäßigen, bei leichter ganz erlassen. Für entschuldbare Fehlleistungen keine Haftung. Ansprüche aus leichter Fahrlässigkeit binnen sechs Monaten gerichtlich geltend machen.", "Dienstgeberhaftungsprivileg (§ 333 ASVG): Für Personenschäden aus Arbeitsunfällen haftet der Arbeitgeber nur bei Vorsatz (bei Kfz bis zur Versicherungssumme).", "Risikohaftung des Arbeitgebers (§ 1014): Setzt der Arbeitnehmer auftragsgemäß eigene Sachen ein (eigenes Kfz), haftet der Arbeitgeber auch ohne Verschulden für Schäden daran.", "Bauwerke (§ 1319): Der Besitzer haftet für Einsturz oder herabfallende Teile, außer er beweist die erforderliche Sorgfalt."])
]}
];
})(window.DX);
