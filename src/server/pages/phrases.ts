import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
} from '@server/tools'

import
{
  ofTrinity
} from '@server/lines'

/*
faurrinnan (be a precursor, run before) could be used for john the forerunner

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
      got: 'Frauja Ïesu Xristau, Sunau Gudis, armai mik frawaurhtana (frawaurhta)',
      el: "Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν (female: τὴν ἁμαρτωλόν)",
      en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner",
    }
  },
].map(toGothicLine).join('')}</p>`


article += html`<p class="title">Publican's prayer</p>`

article += html`<p lang='got'>${[
  {
    text: {
      got: 'Guþ, hulþs sijais mis, frawaurhtamma (frawaurhtai)',
      el: "ὁ θεός, ἱλάσθητί μοι τῷ ἁμαρτωλῷ",
      en: "God be merciful to me a sinner",
    },
    notes: `Publican's prayer, taken directly from the bible`
  },
].map(toGothicLine).join('')}</p>`


article += html`<p class="title">Words</p>`

article += html`<p>Some unattested words:</p>`

article += html`<p>Christian (noun): <span lang='got'>${[
  {
    text: {
      got: 'Xristianus',
      el: 'Χριστιανικός',
      en: "Christian",
    },
    notes:
`from χριστιανός, following Herodianus with 𐌹 instead of 𐌾.
I think this is a likely word but perhaps more in a biblical context,
word-for-word accuracy during translation.

u/i-stem "Mischform" u-stem singular, plural: NG = i-stems, AD = u-stems.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christian (adjective): <span lang='got'>${[
  {
    text: {
      got: 'Xristeins',
      ang: 'Cristen',
      non: 'Kristinn',
      en: "Christian",
    },
    notes:
`following OE Cristen and ON Kristinn (though calqued from OE) with suffixes from PGm *-īnaz, like -𐌴𐌹𐌽𐍃.
Can be used nominalised probably.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christianity: <span lang='got'>${[
  {
    text: {
      got: 'Xristeinei',
      non: 'Kristni',
      en: "Christianity",
    },
    notes:
`following ON Kristni with suffix from PGm -īnaz +-į̄, like -𐌴𐌹𐌽𐍃 + -𐌴𐌹.

-ei suffix with gamainei (fellowship, community) and apaustaulei
(apostleship) has a -ship sense.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>be (an image of) Christ, imitate Christ: <span lang='got'>${[
  {
    text: {
      got: 'Xristinon',
    },
    notes:
`Perhaps a bit conlangy though`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christendom, Christness: <span lang='got'>${[
  {
    text: {
      got: 'Xristinassus',
      ang: 'cristness',
      en: "Christendom",
    },
    notes:
`Feel like this one would have been likely.
The -𐌹𐌽- in -𐌹𐌽𐌰𐍃𐍃𐌿𐍃 coming from -𐌹𐌽𐍉𐌽, it would build off 𐍇𐍂𐌹𐍃𐍄𐌹𐌽𐍉𐌽 nicely,
but not necessarily: "Þiudinassus derived from þiudan-on ‘be king, rule’
with  generalization of -inassus from nouns like fraujinassus".
Also, OE has cristness and cristenness, so perhaps also 𐍇𐍂𐌹𐍃𐍄𐌴𐌹𐌽𐌰𐍃𐍃𐌿𐍃`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Christ-like: <span lang='got'>${[
  {
    text: {
      got: 'Xristleiks',
      ang: 'cristlic',
      en: "Christ-like",
    },
    notes:
`If not with -𐌴𐌹𐌽𐍃, there's this one which feels quite likely to have
been a word. Various modern Germanic langs have Christ-like for the
adjective Christian. OE has cristlic ("man cristlíce"),
and also crístenlic ("Folc crístinlic") so perhaps also 𐍇𐍂𐌹𐍃𐍄𐌴𐌹𐌽𐌻𐌴𐌹𐌺𐍃,
depending on the emphasis.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>christianise: <span lang='got'>${[
  {
    text: {
      got: 'xristeinon',
      ang: 'cristnian',
      non: 'kristna',
      en: "christianise",
    },
    notes:
`Not sure how likely it would have been with -𐍉𐌽 instead of something
with -𐌾𐌰𐌽, but following OE cristnian and ON kristna with suffixes
from PGm -īnaz +-ōną, like -𐌴𐌹𐌽𐍃 + -𐍉𐌽`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>christianisation: <span lang='got'>${[
  {
    text: {
      got: 'xristeinons',
      en: "christianisation",
    },
    notes: ``
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Theotokos/God-bearer: <span lang='got'>${[
  {
    text: {
      got: 'Gudabairandei',
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
      got: 'Kaþauleigs',
      el: 'κᾰθολῐκός',
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
      got: 'Apaustauleigs',
      el: 'ἀποστολῐκός',
      en: "Apostolic",
    },
    notes:
`*apaustauleigs from apaustaul[us] + eigs`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>Orthodox: <span lang='got'>${[
  {
    text: {
      got: 'Aurþaudaukseins',
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
      got: 'Aurþaudauksei',
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
      got: 'Dauksaulaugei',
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
      got: 'maunasterjo',
      el: "μοναστήριον",
      en: "monastery",
    },
    notes:
`*maunasterjo (μοναστήριον), looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from
εὐαγγέλιον also second declension. Gothic seems to go from the -ον ending
if it's inanimate, and from -ός if it's animate.

η seems to often turn into 𐌴 like in 𐍀𐍂𐌰𐌿𐍆𐌴𐍄𐌴𐍃 from προφήτης.`
  },
].map(toGothicLine).join('')}</span></p>`

article += html`<p>monk: <span lang='got'>${[
  {
    text: {
      got: 'maunakus',
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


const description = "Various words and phrases"

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
  </head>
  <body>
    ${createArticleBody(article)}
  </body>
</html>`

export default page