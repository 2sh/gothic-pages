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


// http://mythfolklore.net/aesopica/perry/68.htm


const slug = 'twai-fijands'
const title = 'Twai Fijands'
const description = title + ", skeireins in razdai gutiskai."

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

  let article = ""

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: "Twai Fijands",
      grc: 'Ἐχθροὶ δύο',
      en: "The Two Enemies",
    },
  },], info)}</h1>
</header>`

  article += html`<p>
${toGothicLines([{
    text: {
      got: "Mans twai, fijands sis misso, faridedun in samin skipa. Wildedun af sis misso gaskaidan, inuh þis ains sat ana notin jah anþar ana bogau, in þaim stadim ungawagidai.",
      en: "Two men, enemies to each other, were sailing on the same ship. They wanted to keep their distance from one another, and so one sat on the stern and the other on the bow, in those places unmoved.",
    },
    notes: `"mans twai ..., ains ... jah anþar ..." Luke 18:10

"sis misso" without a preposition Galatians 5:17

"in skipa" Mark 1:19 refering to people being "on a ship" doing something.

"ana notin" Mark 4:38

m. u-stem *bogus from PGm *bōguz`
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Nū was wintrus, jah wegs mikils warþ in marein. Ufkunnands þo bireikein, sa manna ana þamma bogau frah haubiþ þis skipis ƕaþar þize andje aufto frumist sugqi.",
      en: "Now it was winter, and a great storm arose in the sea. Perceiving the peril, the man on the bow asked the head of the ship which of the ends was surely to sink first.",
    },
    notes: `"wegs mikils warþ in marein" Matthew 8:24

Galatians 2:9 uses the def article without previous use of the same word, but refering to a previously mentioned concept. `
  }], info)}
${toGothicLines([{
    text: {
      got: "“Sa nota” andhof sa haubiþ, jah sa manna qaþ “Dauþus sijai mis ni gauriþa jabai saiƕau fijand meinana afƕapnandan frumist!”",
      en: "“The stern” answered the head, and the man said “Death won't be a sorrow to me if I see my enemy drown first!”",
    },
    notes: `"gasaiƕand Iesu gaggandan ana marein" John 6:19`
  }], info)}
</p>
<p><i>
${toGothicLines([{
    text: {
      got: "Sind managai inu kara sleiþos sis silbam, jabai saiƕaina ei fijands seinans faura im agljaindau.",
      en: "There are many without care of their own harm, if they see that their enemies are hurt before them.",
    },
  }], info)}
</i></p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Twai Fijands", en: "The Two Enemies" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Two Enemies</span>
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