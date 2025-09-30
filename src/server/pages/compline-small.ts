import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
  PageGenerator,
} from '@server/tools'

import
{
  allHolyTrinity,
  amen,
  forYoursIs,
  gloryToTrinity,
  hymnToTheotokos,
  lordHaveMercy,
  lordsPrayer,
  nowAndEver,
  oComeLetUsWorship,
  ofTrinity,
  oHeavenlyKing,
  speakerPriest,
  speakerReader,
  timesThree,
  timesTwelve,
  trisagion,
} from '@server/lines'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


global.lineId = 0

let article = ''

let speech = ''

speech += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Afarnahtamats Leitils',
    el: "Μικρόν Απόδειπνον",
    en: "Small Compline",
  },
  notes:
    `ΑΠΟΔΕΙΠΝΟΝ = after supper, perhaps *𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐍃`
})}</h1>
</header>`


speech += html`<p>
${speakerPriest()}
${[
    {
      text: {
        got: 'Þiuþida Guþ unsarana sinteino.',
        el: "Εὐλογητὸς ὁ Θεὸς ἡμῶν πάντοτε.",
        en: "Blessed is our God always.",
      },
      notes: "2 Corinthians 4:10 𐍃𐌹𐌽𐍄𐌴𐌹𐌽𐍉"
    },
  ].map(toGothicLine).join('')}
<br>
${nowAndEver()}
</p>`


speech += html`<p>
${speakerReader()}
${amen()}
<br>
${[
    {
      text: {
        got: 'Wulþus þus, Guþ unsar, wulþus þus.',
        el: "Δόξα σοι ὁ Θεὸς ἡμῶν, δόξα σοι.",
        en: "Glory to thee, our god, glory to thee.",
      }
    },
  ].map(toGothicLine).join('')}
</p>`

speech += html`<p>
${oHeavenlyKing()}
</p>`

article += html`<div class="speech">${speech}</div>`


article += html`<p class="title">
${[
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
  ].map(toGothicLine).join('')}
</p>`

speech = ''

speech += html`<p>
${trisagion()}
<br>
${timesThree()}
</p>`
speech += html`<p>${gloryToTrinity()}</p>`
speech += html`<p>${allHolyTrinity()}</p>`
speech += html`<p>
${lordHaveMercy()}
${timesThree()}
</p>`
speech += html`<p>${gloryToTrinity()}</p>`
speech += html`<p>${lordsPrayer()}</p>`

speech += html`<p>
${speakerPriest()}
${forYoursIs()}
<br>
${ofTrinity()}
<br>
${nowAndEver()}
</p>`

speech += html`<p>
${speakerReader()}
${amen()}
</p>`

speech += html`<p>
${lordHaveMercy()}
${timesTwelve()}
</p>`
speech += html`<p>${gloryToTrinity()}</p>`
speech += html`<p>${oComeLetUsWorship()}</p>`

article += html`<div class="speech">${speech}</div>`

article += html`<p class='notice'>
${[
    {
      text: {
        got: 'Psalmos 50, 69, 142',
        el: "οἱ ψαλμοί 50, 69, 142",
        en: "Psalms 50, 69, 142",
      },
      notes: `*𐍀𐍃𐌰𐌻𐌼𐍉𐍃: Uncertain and unattested nominative plural`
    },
  ].map(toGothicLine).join('')}
</p>
<p class="notice"><a href="doxology-lesser.html">${toGothicLine({
    text: {
      got: 'Dauksaulaugia Leitils',
      el: "Δοξολογία Μικρά",
      en: "Lesser Doxology",
    }
  })}</a></p>
<p class="notice"><a href="nicene-creed.html">${toGothicLine({
    text: {
      got: 'Taikns Galaubeinais',
      el: "Σύμβολο της Πίστεως",
      en: "Symbol of Faith",
    }
  })}</a></p>`

speech = html`<p>${hymnToTheotokos()}</p>`
speech += html`<p>
${trisagion()}
<br>
${timesThree()}
</p>`
speech += html`<p>${gloryToTrinity()}</p>`
speech += html`<p>${allHolyTrinity()}</p>`
speech += html`<p>
${lordHaveMercy()}
${timesThree()}
</p>`
speech += html`<p>${gloryToTrinity()}</p>`
speech += html`<p>${lordsPrayer()}</p>`

speech += html`<p>
${speakerPriest()}
${forYoursIs()}
<br>
${ofTrinity()}
<br>
${nowAndEver()}
</p>`

speech += html`<p>
${speakerReader()}
${amen()}
</p>`

article += html`<div class="speech">${speech}</div>`

article += html`<p class="annotation">
  <span class="nowrap">${toGothicLine({
    text: { got: "Andbahti Afarnahtamatis Leitilis", en: "The Office of Small Compline" },
  })}</span>
  <span class="nowrap">${toGothicLine({
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  })}</span>
  <span class="nowrap">${toGothicLine({
    text: { got: "skeireins þairh Ïostaihan (2025)", en: "a translation by 2sh (2025)." },
  })}</span>
</p>`

article += html`<p lang='en' class="annotation">
<span class="nowrap">The Office of Small Compline</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`

const title = '𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐍃 𐌻𐌴𐌹𐍄𐌹𐌻𐍃'
const description = "𐌰𐌽𐌳𐌱𐌰𐌷𐍄𐌹 𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐌹𐍃 𐌻𐌴𐌹𐍄𐌹𐌻𐌹𐍃, 𐍃𐌺𐌴𐌹𐍂𐌴𐌹𐌽𐍃 𐌹̈𐌽 𐍂𐌰𐌶𐌳𐌰𐌹 𐌲𐌿𐍄𐌹𐍃𐌺𐌰𐌹."

const page: PageGenerator = info => html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(info, title, description)}
  </head>
  <body>
    ${createArticleBody(article)}
  </body>
</html>`

export default page