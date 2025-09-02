import
{
  html,
  safeHtmlText,
  createArticleBody,
  toGothicLine,
  articleHead,
  createBody
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

const title = 'Words & Phrases'
let article = ''


article += html`<header>
  <h1>Phrases & Words</h1>
</header>`


article += html`<p class="title">In the name</p>`

article += html`<p lang='got'>${[
  {
    text: {
      got: 'Ïn namin',
      el: "εἰς τὸ ὄνομα",
      en: "In the name",
    },
    notes: "1 Cor 5:4",
  },
].map(toGothicLine).join('')}
${ofTrinity()}</p>`


article += html`<p class="title">Jesus Prayer</p>`

article += html`<p lang='got'>${[
  {
    text: {
      got: 'Fráuja Ïesu Xristáu, Sunáu Gudis, armái mik frawaúrhtana (frawaúrhta)',
      el: "Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν (female: τὴν ἁμαρτωλόν)",
      en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner",
    }
  },
].map(toGothicLine).join('')}</p>`


article += html`<p class="title">Publican's prayer</p>`

article += html`<p lang='got'>${[
  {
    text: {
      got: 'Guþ, hulþs sijáis mis, frawaúrhtamma (frawaúrhtái)',
      el: "ὁ θεός, ἱλάσθητί μοι τῷ ἁμαρτωλῷ",
      en: "God be merciful to me a sinner",
    },
    notes: `Publican's prayer, taken directly from the bible`
  },
].map(toGothicLine).join('')}</p>`


article += html`<p class="title">Words</p>`

article += html`<p>Some unattested words:</p>`

article += html`<p>Christian (person): <span lang='got'>${[
  {
    text: {
      got: 'Xristjanus',
      el: 'Χριστιανικός',
      en: "Christian",
    },
    notes:
`Most languages seem to have adopted the Latin Christianus, including Greek.

u/i-stem "Mischform" u-stem singular, plural: NG = i-stems, AD = u-stems.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christians: <span lang='got'>${[
  {
    text: {
      got: 'Xristjanies',
      el: "Χρῑστῐᾱνοί",
      en: "Christians",
    },
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christian (adjective): <span lang='got'>${[
  {
    text: {
      got: 'Xristjaneigs',
      el: 'Χριστιανικός',
      en: "Christian",
    },
    notes:
``
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christianity: <span lang='got'>${[
  {
    text: {
      got: 'Xristjanei',
      el: 'Χριστιανισμός',
      en: "Christianity",
    },
    notes:
`-ei suffix with gamainei (fellowship, community) and apaustaulei
(apostleship) has a -ship sense.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christendom: <span lang='got'>${[
  {
    text: {
      got: 'Xristjaninassus',
      el: 'Χριστιανοσύνη',
      en: "Christendom",
    },
    notes:
``
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Theotokos/God-bearer: <span lang='got'>${[
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
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Catholic: <span lang='got'>${[
  {
    text: {
      got: 'Kaþaúleigs',
      en: "Catholic",
    },
    notes:
`As Catholic is from κᾰθόλ[ου] (univeral) + -ῐκός (-ic),
using just the κᾰθόλου and adding the native equivelent -eigs,
similar to German Katholisch.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Apostolic: <span lang='got'>${[
  {
    text: {
      got: 'Apaústaúleigs',
      en: "Apostolic",
    },
    notes:
`*apaustauleigs from apaustaul[us] + eigs`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Orthodox: <span lang='got'>${[
  {
    text: {
      got: 'Aúrþaúdaúkseins',
      el: "ὀρθόδοξος",
      en: "Orthodox",
    },
    notes:
`*aurþaudaukseins from ὀρθόδοξ[ος] + eins, following pistikeins, πιστικ[ός] + -eins`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Orthodoxy: <span lang='got'>${[
  {
    text: {
      got: 'Aúrþaúdaúksei',
      el: "ὀρθοδοξία",
      en: "Orthodoxy",
    },
    notes:
`Greek -ία ending seems to equate to -ei, so *aurþaudauksei from ὀρθοδοξ[ία] + -ei`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Doxology: <span lang='got'>${[
  {
    text: {
      got: 'Daúksaúlaúgei',
      el: "Δοξολογία",
      en: "Doxology",
    },
    notes:
`Greek -ία ending seems to equate to -ei and x -> 𐌺𐍃 from 1 Timothy 1:20,
so *dauksaulaugei`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>monastery: <span lang='got'>${[
  {
    text: {
      got: 'maúnasterjo',
      el: "μοναστήριον",
      en: "monastery",
    },
    notes:
`*maunasterjo (μοναστήριον), looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from
εὐαγγέλιον also second declension. Gothic seems to go from the -ον ending
if it's inanimate, and from -ός if it's animate.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>monk: <span lang='got'>${[
  {
    text: {
      got: 'maúnakus',
      el: "μονᾰχός",
      en: "monk",
    },
    notes:
`Following the various eastern languages in descending from the Greek word for it,
the Greek word also descending to Latin monachus which descends to
Proto-West Germanic *munik, down to English Monk, German Mönch, etc.

χ turns into 𐌺 in most words from Greek.`
  },
].map(toGothicLine).join('')}</span></p>`

const page = html`<!doctype html>
<html lang="en">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createBody(createArticleBody(article, { langs: ['got', 'el', 'en'] }))}
</html>`

export default page