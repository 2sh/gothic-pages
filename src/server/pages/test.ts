import
{
  html,
  createArticleBody,
  toGothicLines,
  createArticleHeaders,
  PageGenerator,
  Anchor,
} from '@server/tools'

import
{
  amen,
  forYoursIs,
  nowAndEver,
  ofTrinity,
} from '@server/lines'
import { lordsPrayer } from '@server/lines/lords-prayer'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


global.lineId = 0


const slug = 'test'
const title = 'Test Page'
const description = "A test page with all the Gothic letters."


const anchors: Anchor[] = [
  {
    name: slug,
    lang: "got-Goth",
  }
]

const generator: PageGenerator = info =>
{
  let article = ''

  article += html`<p>A B G D E Q Z H C I K L M N J U P R S T W F X V O</p>`
  article += html`<p>𐌰 𐌱 𐌲 𐌳 𐌴 𐌵 𐌶 𐌷 𐌸 𐌹 𐌹̈ 𐌺 𐌻 𐌼 𐌽 𐌾 𐌿 𐍀 𐍁 𐍂 𐍃 𐍄 𐍅 𐍆 𐍇 𐍈 𐍉 𐍊</p>`

  article += html`<p>${lordsPrayer(info)}</p>`

  article += html`<p>
${forYoursIs(info)}
<br>
${ofTrinity(info)}
<br>
${nowAndEver(info)}
</p>`
  article += html`<p>${amen(info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Razn, Xristus, Pasxa, ïzwis, ƕazuh, þizos',
      },
    },
  ], info)}</p>`


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