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
  speakerPriest,
  speakerReader,
  timesThree,
  timesTwelve,
  trisagion,
} from '@server/lines'

import { lordsPrayer } from '@server/lines/lords-prayer'
import { oHeavenlyKing } from '@server/lines/o-heavenly-king'
import { allHolyTrinity } from '@server/lines/all-holy-trinity'
import { hymnToTheotokos } from '@server/lines/hymn-to-theotokos'
import { oComeLetUsWorship } from '@server/lines/o-come-let-us-worship'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


global.lineId = 0


const slug = "afarnahtamatis-leitilis"
const title = '𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐍃 𐌻𐌴𐌹𐍄𐌹𐌻𐍃'
const description = "𐌰𐌽𐌳𐌱𐌰𐌷𐍄𐌹 𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐌹𐍃 𐌻𐌴𐌹𐍄𐌹𐌻𐌹𐍃, 𐍃𐌺𐌴𐌹𐍂𐌴𐌹𐌽𐍃 𐌹̈𐌽 𐍂𐌰𐌶𐌳𐌰𐌹 𐌲𐌿𐍄𐌹𐍃𐌺𐌰𐌹."


const anchors: Anchor[] = [
  {
    name: slug,
    lang: "got-Goth",
  },
  {
    name: slug + ".lat",
    lang: "got-Latn"
  },
]

const generator: PageGenerator = info =>
{
  let article = ''

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: 'Afarnahtamats Leitils',
      el: "Μικρόν Απόδειπνον",
      en: "Small Compline",
    },
    notes:
      `ΑΠΟΔΕΙΠΝΟΝ = after supper, perhaps *𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐍃`
  }], info)}</h1>
</header>`

  let speech = ''

  speech += html`<p>
${speakerPriest(info)}
${toGothicLines([
    {
      text: {
        got: 'Þiuþida Guþ unsarana sinteino.',
        el: "Εὐλογητὸς ὁ Θεὸς ἡμῶν πάντοτε.",
        en: "Blessed is our God always.",
      },
      notes: "2 Corinthians 4:10 𐍃𐌹𐌽𐍄𐌴𐌹𐌽𐍉"
    },
  ], info)}
<br>
${nowAndEver(info)}
</p>`


  speech += html`<p>
${speakerReader(info)}
${amen(info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Wulþus þus, Guþ unsar, wulþus þus.',
        el: "Δόξα σοι ὁ Θεὸς ἡμῶν, δόξα σοι.",
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
        got: 'Trisagiaun bidos',
        el: "Τρισάγιον",
        en: "Trisagion Prayers",
      },
      notes:
        `greek o -> got. au, greek e, ai -> got. ai, greek ou -> got. u.

for thrice holy perhaps 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐍃; 𐍅𐌴𐌹𐌷𐍃 => 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐌰 𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃.`
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

  article += html`<p class='notice'>
${toGothicLines([
    {
      text: {
        got: 'Psalmos 50, 69, 142',
        el: "οἱ ψαλμοί 50, 69, 142",
        en: "Psalms 50, 69, 142",
      },
      notes: `*𐍀𐍃𐌰𐌻𐌼𐍉𐍃: Uncertain and unattested nominative plural`
    },
  ], info)}
</p>
<p class="notice"><a href="doxology-lesser.html">${toGothicLines([{
    text: {
      got: 'Dauksaulaugia Leitils',
      el: "Δοξολογία Μικρά",
      en: "Lesser Doxology",
    }
  }], info)}</a></p>
<p class="notice"><a href="nicene-creed.html">${toGothicLines([{
    text: {
      got: 'Taikns Galaubeinais',
      el: "Σύμβολο της Πίστεως",
      en: "Symbol of Faith",
    }
  }], info)}</a></p>`

  speech = html`<p>${hymnToTheotokos(info)}</p>`
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

  article += html`<div class="speech">${speech}</div>`

  const gothicAnnotation = [
    { text: { got: "Andbahti Afarnahtamatis Leitilis", en: "The Office of Small Compline" } },
    { text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," } },
    { text: { got: "skeireins þairh Ïostaihan (2025)", en: "a translation by 2sh (2025)." } },
  ]

  article += html`<p class="annotation">${gothicAnnotation.map(a => `
  <span class="nowrap">${toGothicLines([a], info)}</span>`).join('')}
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">The Office of Small Compline</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`

  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info, title, description)}
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
