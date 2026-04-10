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
  gloryToTrinity,
  lordHaveMercy,
  throughThePrayers,
  timesThree,
} from '@server/lines'

import { fromLatin } from '@common/transliterate'
import { hymnToTheotokos } from '@server/lines/hymn-to-theotokos'


//benediction þiuþiqiss

const slug = "bidos-andi"
const title = 'Bidos Andi'
const description = "Bidos Andi, skeireins in razdai gutiskai."

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
      got: 'Bidos Andi',
      en: "Ending Prayers",
    },
  }], info)}</h1>
</header>`

  article += html`<p>${hymnToTheotokos(info)}</p>`

  article += html`<p>${gloryToTrinity(info)}</p>`

  article += html`<p>
${lordHaveMercy(info)}
${timesThree(info)}
</p>`

  article += html`<p>${throughThePrayers(info)}</p>`
  article += html`<p>${amen(info)}</p>`


  const gothicAnnotation = [
    { text: { got: "Bidos Andi", en: "Ending Prayers" } },
    { text: { got: "in razdai gutiskai,", en: "in the Gothic language," } },
    { text: { got: "skeireins fram Iohannes Haggwiþos (2025-2026).", en: "a translation by 2sh (2025-2026)." } },
  ]

  article += html`<p class="annotation">${gothicAnnotation.map(a => `
  <span class="nowrap">${toGothicLines([a], info)}</span>`).join('')}
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">Ending Prayers/span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025-2026).</span>
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
