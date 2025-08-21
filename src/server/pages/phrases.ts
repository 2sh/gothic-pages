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
  ofTrinity
} from '@server/lines'

/*
faúrrinnan (be a precursor, run before) could be used for john the forerunner

ἱλάσθητί μοι  𐌲𐌿𐌸, 𐌷𐌿𐌻𐌸𐍃 𐍃𐌹𐌾𐌰𐌹𐍃 𐌼𐌹𐍃, 𐍆𐍂𐌰𐍅𐌰𐌿𐍂𐌷𐍄𐌰𐌼𐌼𐌰
ἐλέησόν με    𐌹̈𐌴𐍃𐌿, 𐍃𐌿𐌽𐌿 𐌳𐌰𐍅𐌴𐌹𐌳𐌹𐍃, 𐌰𐍂𐌼𐌰𐌹 𐌼𐌹𐌺
ἐλέησον ἡμᾶς  𐌾𐌰𐌷 𐍃𐌹𐌻𐌱𐌰𐌽𐍃 𐌿𐍃𐌷𐍉𐍆𐍉𐌽 𐍃𐍄𐌹𐌱𐌽𐌰 𐌵𐌹𐌸𐌰𐌽𐌳𐌰𐌽𐍃: 𐌹̈𐌴𐍃𐌿, 𐍄𐌰𐌻𐌶𐌾𐌰𐌽𐌳, 𐌰𐍂𐌼𐌰𐌹 𐌿𐌽𐍃𐌹𐍃!
*/

global.lineId = 0

const title = 'Phrases & Words'
let content = ''


content += html`<header>
  <h1>Phrases & Words</h1>
</header>`


content += html`<p class="title">In the name</p>`

content += html`<p>${[
  {
    text: {
      got: 'Ïn namin',
      el: "εἰς τὸ ὄνομα",
      en: "In the name",
    },
    notes: "1 Cor 5:4",
  },
].map(toGothicLine).join('')}
${ofTrinity}</p>`


content += html`<p class="title">Jesus Prayer</p>`

content += html`<p>${[
  {
    text: {
      got: 'Fráuja Ïesu Xristáu, Sunáu Gudis, armái mik frawaúrhtana (frawaúrhta)',
      el: "Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν (female: τὴν ἁμαρτωλόν)",
      en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner",
    }
  },
].map(toGothicLine).join('')}</p>`


content += html`<p class="title">Publican's prayer</p>`

content += html`<p>${[
  {
    text: {
      got: 'Guþ, hulþs sijáis mis, frawaúrhtamma (frawaúrhtai)',
      el: "ὁ θεός, ἱλάσθητί μοι τῷ ἁμαρτωλῷ",
      en: "God be merciful to me a sinner",
    },
    notes: `Publican's prayer, taken directly from the bible`
  },
].map(toGothicLine).join('')}</p>`


content += html`<p class="title">Words</p>`

content += html`<p>Theotokos/God-bearer: ${[
  {
    text: {
      got: 'Gudabaírandei',
      el: "Θεοτόκος",
      en: "Theotokos",
    },
    notes:
      `Perhaps just a transliteration, 𐌸𐌴𐌰𐌿𐍄𐌰𐌿𐌺𐌿𐍃?, but created *𐌲𐌿𐌳𐌰𐌱𐌰𐌹𐍂𐌰𐌽𐌳𐌴𐌹
for Gothic to have its own. 𐌲𐌿𐌳 + 𐌰 + 𐌱𐌰𐌹𐍂𐌰𐌽𐌳𐌴𐌹.
"Gothic never compounds with the genitive [...]
weak nouns keep -a- for the connecting vowel." -guthiharjis`
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