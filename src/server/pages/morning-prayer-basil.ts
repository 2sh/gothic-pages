import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'
import { amen, nowAndEver, ofTrinity } from "@server/lines"
import { fromLatin } from '@common/transliterate'


const slug = 'bida-maurginis-baseileiaus'
const title = 'Bida Maurginis Baseileiaus þis Mikilins Weihins Allweihai Þrifalþein'
const description = `${title}, skeireins in razdai gutiskai.`

const anchors: Anchor[] = [
  {
    name: slug,
    lang: "got-Goth",
    title: fromLatin(title),
    description: fromLatin(description),
  },
  {
    name: slug + ".lat",
    lang: "got-Latn",
    title,
    description,
  },
]

const generator: PageGenerator = info =>
{
  global.lineId = 0

  let article = ''

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: 'Bida Maurginis\nBaseileiaus þis Mikilins Weihins\nAllweihai Þrifalþein',
      en: "Morning Prayer of St. Basil the Great to the Most Holy Trinity",
    },
    notes: `Baseileius from Βασίλειος`
  }], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Us slepa usstandands/ei, awiliudo Þus, Allweiho Þrifalþei;',
        grc: "Ἐκ τοῦ ὕπνου ἐξανιστάμενος, εὐχαριστῶ Σοι, Ἁγία Τριάς·",
        en: "As I rise from sleep I thank You, O Holy Trinity,",
      },
    },
    {
      text: {
        got: 'þatei in Þeinaizos mikilaizos þiuþeinais, jah usbeisneins,',
        grc: "ὅτι διά τήν πολλήν Σου ἀγαθότητα, καί μακροθυμίαν,",
        en: "for through Your great goodness and patience",
      },
      notes: `much of your goodness and patience`
    },
    {
      text: {
        got: 'ni wast modags mis, unkarjin/on jah frawaurhtamma/ai,',
        grc: "οὐκ ὠργίσθης ἐμοί τῷ ραθύμῳ καί ἁμαρτωλῷ,",
        en: "You were not angered with me, an idler and sinner,",
      },
      notes:
`Using unkarja (careless) for unattested ραθύμῳ which means something like
light-hearted, careless, indifferent`
    },
    {
      text: {
        got: 'nih fraqistides mis witodalauseim meinaim,',
        grc: "οὐδέ συναπώλεσάς με ταῖς ἀνομίαις μου,",
        en: "nor have You destroyed me in my sins,",
      },
      notes: `Also in prayer of Manasseh`
    },
    {
      text: {
        got: 'ak frijodes mannans swaswe sinteino',
        grc: "ἀλλ’ ἐφιλανθρωπεύσω συνήθως",
        en: "but have shown Your usual love for mankind,",
      },
      notes: `frijon can also mean
"show affection for" so I think it works without a word for show.`
    },
    {
      text: {
        got: 'jah at uswenin/on galagjandin/ein urraist mik,',
        grc: "καί πρός ἀπόγνωσιν κείμενον ἤγειράς με,",
        en: "and when I was prostrate in despair, You have raised me",
      },
      notes: `There's no indication of the subject of the lie in dispair
in Greek either, though I think it's clear in context it's not God.`
    },
    {
      text: {
        got: 'at uhtwon du wakan jah swinþein Þeina du gasweran.',
        grc: "εἰς τό ὀρθρίσαι καί δοξολογῆσαι τό κράτος Σου.",
        en: "to keep the morning watch and glorify Your power.",
      },
    },
    {
      text: {
        got: "Jah nu galiuhtei augona gahugdais meinaizos,",
        grc: "Καί νῦν φώτισόν μου τά ὄμματα τῆς διανοίας,",
        en: "And now enlighten my mind’s eyes",
      },
    },
    {
      text: {
        got: "usluk munþ mein, waurda Þeina du sidon,",
        grc: "ἄνοιξόν μου τό στόμα, τοῦ μελετᾶν τά λόγιά Σου,",
        en: "and open my mouth to study Your words",
      },
    },
    {
      text: {
        got: "jah anabūsnins Þeinos du fraþjan, jah wiljan Þeinana du taujan,",
        grc: "καί συνιέναι τάς ἐντολάς Σου, καί ποιεῖν τό θέλημά Σου,",
        en: "and understand Your commandments and do Your will",
      },
    },
    {
      text: {
        got: "jah Þus in andahaita hairtins du siggwan,",
        grc: "καί ψάλλειν Σοι ἐν ἐξομολογήσει καρδίας,",
        en: "and sing to You in heartfelt adoration",
      },
    },
    {
      text: {
        got: "jah allweih namo Þein du liuþon,",
        grc: "καί ἀνυμνεῖν τό πανάγιον ὄνομά Σου,",
        en: "and praise Your Most Holy Name",
      },
    },
  ], info)}${ofTrinity(info)}${nowAndEver(info)}${amen(info)}</p>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: title, en: "Morning Prayer of St. Basil the Great to the Most Holy Trinity" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2025).", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">Morning Prayer of St. Basil the Great</span>
<span class="nowrap">to the Most Holy Trinity</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`

  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info)}
  </head>
  <body>
    ${createArticleBody(info, article)}
  </body>
</html>`
}

export default {
  anchors,
  generator
}
