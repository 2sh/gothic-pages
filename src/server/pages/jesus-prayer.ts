import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

import { fromLatin } from '@common/transliterate'

const slug = "bida-iesus"
const title = 'Bida Iesus'
const description = "Bida Iesus, skeireins in razdai gutiskai."

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
      got: 'Bida Iesus',
      en: "Jesus Prayer",
    },
  }], info)}</h1>
</header>`

  article += html`<p lang='got'>${toGothicLines([
    {
      text: {
        got: 'Frauja Iesu Xristau, Sunau Gudis, armai mik frawaurhtana (frawaurhta).',
        grc: "Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν (female: τὴν ἁμαρτωλόν).",
        en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner.",
      }
    },
  ], info)}</p>`

  const gothicAnnotation = [
    { text: { got: "Bida Iesus", en: "Jesus Prayer" } },
    { text: { got: "in razdai gutiskai,", en: "in the Gothic language," } },
    { text: { got: "skeireins fram Iohannes Haggwiþos (2025).", en: "a translation by 2sh (2025)." } },
  ]

  article += html`<p class="annotation">${gothicAnnotation.map(a => `
  <span class="nowrap">${toGothicLines([a], info)}</span>`).join('')}
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">Jesus Prayer</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2026).</span>
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
