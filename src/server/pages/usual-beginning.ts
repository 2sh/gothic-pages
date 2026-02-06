import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

import
{
  amen,
  forYoursIs,
  gloryToTrinity,
  lordHaveMercy,
  nowAndEver,
  ofTrinity,
  ofTrinityEnd,
  speakerPriest,
  speakerReader,
  timesThree,
  timesTwelve,
  trisagion,
} from '@server/lines'

import { lordsPrayer } from '@server/lines/lords-prayer'
import { oHeavenlyKing } from '@server/lines/o-heavenly-king'
import { allHolyTrinity } from '@server/lines/all-holy-trinity'
import { oComeLetUsWorship } from '@server/lines/o-come-let-us-worship'
import { fromLatin } from '@common/transliterate'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


const slug = "anastodeins-biuhteiga"
const title = 'Anastodeins Biuhteiga'
const description = "Anastodeins biuhteiga andbahtje jah bidos sundraizos Aurþaudaukseinaize, skeireins in razdai gutiskai."

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
      got: 'Anastodeins Biuhteiga',
      ru: "Обычное начало",
      en: "Usual Beginning",
    },
  }], info)}</h1>
</header>`

  let speech = ''

  speech += html`<p>
${speakerPriest(info)}
${toGothicLines([
    {
      text: {
        got: 'Þiuþida Guþ unsarana sinteino,',
        grc: "Εὐλογητὸς ὁ Θεὸς ἡμῶν πάντοτε,",
        en: "Blessed is our God always,",
      },
      notes: "2 Corinthians 4:10 𐍃𐌹𐌽𐍄𐌴𐌹𐌽𐍉"
    },
  ], info)}
<br>
${nowAndEver(info)}
</p>`

article += html`<div class="speech">${speech}</div>`

article += html`<p class='notice'>
${toGothicLines([
    {
      text: {
        got: 'Iþ jabai gudja ni atïst:',
        en: "If there is no priest:",
      },
    },
  ], info)}
</p>`

speech = ''

  speech += html`<p>
${speakerReader(info)}
${toGothicLines([
    {
      text: {
        got: 'Þairh bidos attane weihaize unsaraize, Frauja Iesu Xristau, Guþ unsar, armai unsis.',
        grc: 'Δί’ εὐχῶν τῶν ἁγίων πατέρων ἠμῶν, Κύριε Ἰησοῦ Χριστέ ὁ Θεός, ἐλέησον [καὶ σῶσον] ἠμᾶς.',
        en: "Through the prayers of our holy fathers, Lord Jesus Christ, our God, have mercy on us.",
      }
    },
  ], info)}
</p>`

article += html`<div class="speech">${speech}</div>`

article += html`<p class='notice'>
${toGothicLines([
    {
      text: {
        got: 'Aiþþau:',
        en: "Or:",
      },
    },
  ], info)}
</p>`

speech = ''

  speech += html`<p>${toGothicLines([
    {
      text: {
        got: 'In namin',
        grc: "εἰς τὸ ὄνομα",
        en: "In the name",
      },
      notes: "1 Cor 5:4",
    },
  ], info)}
${ofTrinityEnd(info)}</p>`

  speech += html`<p>
${speakerReader(info)}
${amen(info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Wulþus þus, Guþ unsar, wulþus þus.',
        grc: "Δόξα σοι ὁ Θεὸς ἡμῶν, δόξα σοι.",
        en: "Glory to thee, our god, glory to thee.",
      }
    },
  ], info)}
</p>`

  speech += html`<p>
${oHeavenlyKing(info)}
</p>`

  article += html`<div class="speech">${speech}</div>`


  article += html`<p class="title">
${toGothicLines([
    {
      text: {
        got: 'Bidos Trisagiaun',
        grc: "Τρισάγιον",
        en: "Trisagion Prayers",
      },
      notes:
        `greek o -> got. au, greek e, ai -> got. ai, greek ou -> got. u.

for thrice holy perhaps 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐍃 𐍅𐌴𐌹𐌷𐍃 => 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐌰 𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃.`
    },
  ], info)}
</p>`

  speech = ''

  speech += html`<p>
${trisagion(info)}
<br>
${timesThree(info)}
</p>`
  speech += html`<p>${gloryToTrinity(info)}</p>`
  speech += html`<p>${allHolyTrinity(info)}</p>`
  speech += html`<p>
${lordHaveMercy(info)}
${timesThree(info)}
</p>`
  speech += html`<p>${gloryToTrinity(info)}</p>`
  speech += html`<p>${lordsPrayer(info)}</p>`

  speech += html`<p>
${speakerPriest(info)}
${forYoursIs(info)}
<br>
${ofTrinity(info)}
<br>
${nowAndEver(info)}
</p>`

  speech += html`<p>
${speakerReader(info)}
${amen(info)}
</p>`

  speech += html`<p>
${lordHaveMercy(info)}
${timesTwelve(info)}
</p>`
  speech += html`<p>${gloryToTrinity(info)}</p>`
  speech += html`<p>${oComeLetUsWorship(info)}</p>`

  article += html`<div class="speech">${speech}</div>`

  const gothicAnnotation = [
    { text: { got: "Anastodeins biuhteiga", en: "The usual beginning" } },
    { text: { got: "andbahtje jah bidos sundraizos Aurþaudaukseinaize", en: "of Orthodox services and private prayer" } },
    { text: { got: "in razdai gutiskai,", en: "in the Gothic language," } },
    { text: { got: "skeireins fram Iostaiha (2025).", en: "a translation by 2sh (2025)." } },
  ]

  article += html`<p class="annotation">${gothicAnnotation.map(a => `
  <span class="nowrap">${toGothicLines([a], info)}</span>`).join('')}
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">The usual beginning</span>
<span class="nowrap">of Orthodox services and private prayer</span>
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
