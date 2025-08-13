import
{
  html,
  safeHtmlText,
  createArticleBody,
  toGothicLine,
  articleHead
} from '@server/tools'

import
{
  allHolyTrinity,
  amen,
  forYoursIs,
  gloryToTrinity,
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

const title = '𐌰𐍆𐌰𐍂𐌽𐌰𐌷𐍄𐌰𐌼𐌰𐍄𐍃 𐌻𐌴𐌹𐍄𐌹𐌻𐍃'

let content = ''

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
${speakerPriest}
${[
    {
      text: {
        got: 'Þiuþida Guþ unsarana sinteinō.',
        el: "Εὐλογητὸς ὁ Θεὸς ἡμῶν πάντοτε.",
        en: "Blessed is our God always.",
      },
      notes: "2 Corinthians 4:10 𐍃𐌹𐌽𐍄𐌴𐌹𐌽𐍉"
    },
  ].map(toGothicLine).join('\n')}
<br>
${nowAndEver}
</p>`


speech += html`<p>
${speakerReader}
${amen}
<br>
${[
    {
      text: {
        got: 'Wulþus þus, Guþ unsar, wulþus þus.',
        el: "Δόξα σοι ὁ Θεὸς ἡμῶν, δόξα σοι.",
        en: "Glory to thee, our god, glory to thee.",
      }
    },
  ].map(toGothicLine).join('\n')}
</p>`

speech += html`<p>
${oHeavenlyKing}
</p>`

content += html`<div class="speech">${speech}</div>`


content += html`<p class="title">
${[
    {
      text: {
        got: 'Trisagiaun bidōs',
        el: "Τρισάγιον",
        en: "Trisagion Prayers",
      },
      notes:
        `greek o -> got. au, greek e, ai -> got. ai, greek ou -> got. u.

for thrice holy perhaps 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐍃; 𐍅𐌴𐌹𐌷𐍃 => 𐌸𐍂𐌹𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃 or 𐌸𐍂𐌹𐍆𐌰𐌻𐌸𐌰 𐍅𐌴𐌹𐌷𐌰 𐌱𐌹𐌳𐍉𐍃.`
    },
  ].map(toGothicLine).join('\n')}
</p>`

speech = ''

speech += html`<p>
${trisagion}
<br>
${timesThree}
</p>`
speech += html`<p>${gloryToTrinity}</p>`
speech += html`<p>${allHolyTrinity}</p>`
speech += html`<p>
${lordHaveMercy}
${timesThree}
</p>`
speech += html`<p>${gloryToTrinity}</p>`
speech += html`<p>${lordsPrayer}</p>`

speech += html`<p>
${speakerPriest}
${forYoursIs}
<br>
${ofTrinity}
<br>
${nowAndEver}
</p>`

speech += html`<p>
${speakerReader}
${amen}
</p>`

speech += html`<p>
${lordHaveMercy}
${timesTwelve}
</p>`
speech += html`<p>${gloryToTrinity}</p>`
speech += html`<p>${oComeLetUsWorship}</p>`

content += html`<div class="speech">${speech}</div>`

content += html`<p class='notice'>
${[
    {
      text: {
        got: 'Psalmōs',
        el: "οἱ ψαλμοί",
        en: "Psalms",
      },
      notes: `*𐍀𐍃𐌰𐌻𐌼𐍉𐍃: Uncertain and unattested nominative plural`
    },
  ].map(toGothicLine).join('\n')}
50, 69, 142
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


content += html`<p lang='en' class="annotation">
<span class="nowrap">The Office of Small Compline</span>
<span class="nowrap">in the Gothic language,</span>
<br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createArticleBody(content, undefined, ['got', 'el', 'en'])}
</html>`

export default page