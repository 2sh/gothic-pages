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
  amen,
  forYoursIs,
  lordsPrayer,
  nowAndEver,
  ofTrinity,
} from '@server/lines'


// https://www.reddit.com/r/OrthodoxChristianity/comments/10o7wm2/trisagion_prayers_in_greek/
// https://de.wikipedia.org/wiki/Himmlischer_K%C3%B6nig
// https://en.wikipedia.org/wiki/Usual_beginning


global.lineId = 0

const title = 'Test Page'

let content = ''

let speech = ''

speech += html`<header>
  <h1>Test Page</h1>
</header>`

content = ''

content += html`<p>𐌰 𐌱 𐌲 𐌳 𐌴 𐌵 𐌶 𐌷 𐌸 𐌹 𐌹̈ 𐌺 𐌻 𐌼 𐌽 𐌾 𐌿 𐍀 𐍁 𐍂 𐍃 𐍄 𐍅 𐍆 𐍇 𐍈 𐍉 𐍊</p>`

content += html`<p>${lordsPrayer}</p>`

content += html`<p>
${forYoursIs}
<br>
${ofTrinity}
<br>
${nowAndEver}
</p>`
content += html`<p>${amen}</p>`

content += html`<p>${[
  {
    text: {
      got: 'Razn, Xristus, Pasxa, ïzwis, ƕazuh, þizos',
    },
  },
].map(toGothicLine).join('')}</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createArticleBody(content, undefined, ['got', 'el', 'en'])}
</html>`

export default page