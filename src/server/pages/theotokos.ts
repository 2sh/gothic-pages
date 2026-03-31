import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

import { hymnToTheotokos } from '@server/lines/hymn-to-theotokos'
import { fromLatin } from '@common/transliterate'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


const slug = "gudabairandei"
const title = 'Gudabairandei'
const description = "Waurda Gudabairandein, skeireins in razdai gutiskai."

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
  <h1>${toGothicLines([
    {
      text: {
        got: 'Gudabairandei',
        grc: "Θεοτόκος",
        en: "Theotokos",
      },
      notes:
        `Perhaps just a transliteration, 𐌸𐌴𐌰𐌿𐍄𐌰𐌿𐌺𐌿𐍃?, but created *𐌲𐌿𐌳𐌰𐌱𐌰𐌹𐍂𐌰𐌽𐌳𐌴𐌹
for Gothic to have its own. 𐌲𐌿𐌳 + 𐌰 + 𐌱𐌰𐌹𐍂𐌰𐌽𐌳𐌴𐌹.
“Gothic never compounds with the genitive [...]
weak nouns keep -a- for the connecting vowel.” -guthiharjis`
    },
  ], info)}</h1>
</header>`

  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Liuþ Gudabairandein Leiturgeins Gudiskaizos\nIohannis Xrisaustaumaus Weihis',
      en: "Hymn to the Theotokos",
    },
  }], info)}</h2>`

  article += html`<p>${hymnToTheotokos(info)}</p>`

  const gothicAnnotation = [
    { text: { got: "Waurda Gudabairandein", en: "Words to the Theotokos" } },
    { text: { got: "in razdai gutiskai,", en: "in the Gothic language," } },
    { text: { got: "skeireins fram Iohannes Haggwiþos (2025).", en: "a translation by 2sh (2025)." } },
  ]

  article += html`<p class="annotation">${gothicAnnotation.map(a => `
  <span class="nowrap">${toGothicLines([a], info)}</span>`).join('')}
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">Words to the Theotokos</span>
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
