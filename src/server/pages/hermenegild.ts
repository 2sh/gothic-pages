import { fromLatin } from '@common/transliterate'
import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

// https://en.wikipedia.org/wiki/Hermenegild
// https://www.johnsanidopoulos.com/2010/11/holy-martyr-hermenegild-goth-killed-by.html
// https://www.oca.org/saints/lives/2023/11/01/103140-martyr-hermenegild-the-goth-of-spain
// https://www.tertullian.org/fathers/gregory_03_dialogues_book3.htm#C31

const slug = 'airmunagilds'
const title = 'Airmunagilds sa Guta Martyr Hispanjos'
const description = `${title}, skeireins ïn razdai gutiskai.`

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
      got: 'Airmunagilds sa Guta\nMartyr Hispanjos',
      en: "Martyr Hermenegild the Goth of Spain",
    },
    notes: `[url=https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ermunaz]airmuns[/url] + gilds`
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Dags gaminþjis:',
        en: "Day of remembrance:",
      },
    },
    {
      text: {
        got: '1 Naubaimbair (Aikklesjo Aurþaudaukseina Austra),',
        en: "1 November (Eastern Orthodox Church),",
      },
    },
    {
      text: {
        got: '13 Apreils (Aikklesjons wistros),',
        en: "13 April (Western churches),",
      },
    },
  ], info)}
  </p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Airmanagilds sa Guta Hispanjos", en: "Hermenegild the Goth of Spain" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Hermenegild the Goth of Spain</span>
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
