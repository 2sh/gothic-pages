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


// https://en.wikipedia.org/wiki/Sabbas_Stratelates
// https://www.oca.org/saints/lives/2025/04/24/101188-martyr-savva-stratelates-the-general-of-rome-and-70-soldiers-wit
// https://days.pravoslavie.ru/Life/life922.htm
// https://www.saint.gr/1457/saint.aspx

const slug = 'airmanagilds'
const title = 'Airmanagilds sa Guta Martyr Hispanjos'
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
      got: 'Airmanagilds sa Guta\nMartyr Hispanjos',
      en: "Martyr Hermenegild the Goth of Spain",
    },
    notes: `Airmana-gild, "immense tribute"`
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Dags gaminþjis: 13 Apreils',
        en: "Day of remembrance: 13 April",
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
