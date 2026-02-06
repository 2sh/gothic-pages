import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
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


const slug = 'phrases'
const title = 'Words & Phrases'
const description = "Various words and phrases"


const anchors: Anchor[] = [
  {
    name: slug,
    lang: "en",
    title,
    description,
  },
]

const generator: PageGenerator = info =>
{
  global.lineId = 0

  let article = ''


  article += html`<header>
  <h1>Phrases & Words</h1>
</header>`

  article += html`<p class="title">Jesus Prayer</p>`

  article += html`<p lang='got'>${toGothicLines([
    {
      text: {
        got: 'Frauja Iesu Xristau, Sunau Gudis, armai mik frawaurhtana (frawaurhta)',
        grc: "Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν (female: τὴν ἁμαρτωλόν)",
        en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner",
      }
    },
  ], info)}</p>`


  article += html`<p class="title">Publican's prayer</p>`

  article += html`<p lang='got'>${toGothicLines([
    {
      text: {
        got: 'Guþ, hulþs sijais mis, frawaurhtamma (frawaurhtai)',
        grc: "ὁ θεός, ἱλάσθητί μοι τῷ ἁμαρτωλῷ",
        en: "God be merciful to me a sinner",
      },
      notes: `Publican’s prayer, taken directly from the bible`
    },
  ], info)}</p>`


  article += html`<p class="title">Words</p>`

  article += html`<p>Some unattested words:</p>`

  article += html`<p>Christian (noun): <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Xristianus',
        grc: 'Χριστιανικός',
        en: "Christian",
      },
      notes:
        `from χριστιανός, following Herodianus with 𐌹 instead of 𐌾.
I think this is a likely word but perhaps more in a biblical context,
word-for-word accuracy during translation.

u/i-stem “Mischform” u-stem singular, plural: NG = i-stems, AD = u-stems.`
    },
  ], info)}</span></p>`

  article += html`<p>Christian (adjective): <span lang='got'>${toGothicLines([
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
  ], info)}</span></p>`

  article += html`<p>Christianity: <span lang='got'>${toGothicLines([
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
  ], info)}</span></p>`

  article += html`<p>be (an image of) Christ, imitate Christ: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Xristinon',
      },
      notes:
        `Perhaps a bit conlangy though`
    },
  ], info)}</span></p>`

  article += html`<p>Christendom, Christness: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Xristinassus',
        ang: 'cristness',
        en: "Christendom",
      },
      notes:
        `Feel like this one would have been likely.
The -𐌹𐌽- in -𐌹𐌽𐌰𐍃𐍃𐌿𐍃 coming from -𐌹𐌽𐍉𐌽, it would build off 𐍇𐍂𐌹𐍃𐍄𐌹𐌽𐍉𐌽 nicely,
but not necessarily: “Þiudinassus derived from þiudan-on ‘be king, rule’
with  generalization of -inassus from nouns like fraujinassus”.
Also, OE has cristness and cristenness, so perhaps also 𐍇𐍂𐌹𐍃𐍄𐌴𐌹𐌽𐌰𐍃𐍃𐌿𐍃`
    },
  ], info)}</span></p>`

  article += html`<p>Christ-like: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Xristleiks',
        ang: 'cristlic',
        en: "Christ-like",
      },
      notes:
        `If not with -𐌴𐌹𐌽𐍃, there’s this one which feels quite likely to have
been a word. Various modern Germanic langs have Christ-like for the
adjective Christian. OE has cristlic (“man cristlíce”),
and also crístenlic (“Folc crístinlic”) so perhaps also 𐍇𐍂𐌹𐍃𐍄𐌴𐌹𐌽𐌻𐌴𐌹𐌺𐍃,
depending on the emphasis.`
    },
  ], info)}</span></p>`

  article += html`<p>christianise: <span lang='got'>${toGothicLines([
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
  ], info)}</span></p>`

  article += html`<p>christianisation: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'xristeinons',
        en: "christianisation",
      },
      notes: ``
    },
  ], info)}</span></p>`

  article += html`<p>Theotokos/God-bearer: <span lang='got'>${toGothicLines([
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
  ], info)}</span></p>`

  article += html`<p>Catholic: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Kaþauleigs',
        grc: 'κᾰθολῐκός',
        en: "Catholic",
      },
      notes:
        `As Catholic is from κᾰθόλ[ου] (univeral) + -ῐκός (-ic),
using just the κᾰθόλου and adding the native equivelent -eigs,
similar to German Katholisch.`
    },
  ], info)}</span></p>`

  article += html`<p>Apostolic: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Apaustauleigs',
        grc: 'ἀποστολῐκός',
        en: "Apostolic",
      },
      notes:
        `*apaustauleigs from apaustaul[us] + eigs`
    },
  ], info)}</span></p>`

  article += html`<p>Orthodox: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Aurþaudaukseins',
        grc: "ὀρθόδοξος",
        en: "Orthodox",
      },
      notes:
        `*aurþaudaukseins from ὀρθόδοξ[ος] + eins, following pistikeins, πιστικ[ός] + -eins`
    },
  ], info)}</span></p>`

  article += html`<p>Orthodoxy: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Aurþaudauksei',
        grc: "ὀρθοδοξία",
        en: "Orthodoxy",
      },
      notes:
        `Greek -ία ending seems to equate to -ei, so *aurþaudauksei from ὀρθοδοξ[ία] + -ei`
    },
  ], info)}</span></p>`

  article += html`<p>Divine Liturgy: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Leiturgei Gudiska',
        grc: "Θεία Λειτουργία",
        en: "Divine Liturgy",
      },
      notes:
        `*leiturgei from Λειτουργία (female), looking at 𐌴𐌹 in 𐌷𐌰𐌹𐍂𐌰𐌹𐍃𐌴𐌹𐍃 from αἱρέσεις
and in 𐌳𐌰𐍅𐌴𐌹𐌳 from Δαυείδ.`
    },
  ], info)}</span></p>`

  article += html`<p>Doxology: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'Dauksaulaugei',
        grc: "Δοξολογία",
        en: "Doxology",
      },
    },
  ], info)}</span></p>`

  article += html`<p>monastery: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'maunasterjo',
        grc: "μοναστήριον",
        en: "monastery",
      },
      notes:
        `*maunasterjo (μοναστήριον), looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from
εὐαγγέλιον also second declension. Gothic seems to go from the -ον ending
if it’s inanimate, and from -ός if it’s animate.

η seems to often turn into 𐌴 like in 𐍀𐍂𐌰𐌿𐍆𐌴𐍄𐌴𐍃 from προφήτης.`
    },
  ], info)}</span></p>`

  article += html`<p>monk: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'maunakus',
        grc: "μονᾰχός",
        en: "monk",
      },
      notes:
        `Following the various eastern languages in descending from the Greek word for it,
the Greek word also descending to Latin monachus which descends to
Proto-West Germanic *munik, down to English Monk, German Mönch, etc.

χ turns into 𐌺 in most words from Greek.`
    },
  ], info)}</span></p>`

  article += html`<p>not consecrated / lay(person): <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'lāigs',
        grc: "λᾱϊκός",
        en: "lay(person)",
      },
      notes:
        ``
    },
  ], info)}</span></p>`

  article += html`<p>clergy: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'klerus',
        grc: "κλῆρος",
        en: "clergy",
      },
      notes: `Taken from Greek`
    },
  ], info)}</span></p>`

  article += html`<p>idol: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'eidolo',
        grc: "εἴδωλον",
        en: "idol",
      },
      notes:
`From εἴδωλον (eídōlon). on-stem.

εἴ to ei, looking at Daweid from Δαυείδ.

There's also galiugaguþ to mean idol but also false deity. This word could
specifically be used to mean the idol objects.

on-stem as various other Greek words ending in -ον and inanimate words ending in
-ος seem to turn into on-stems.`
    },
  ], info)}</span></p>`

  article += html`<p>idol/false deity: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'afguþ',
        de: 'Abgott',
        nl: 'afgot',
        en: "idol",
      },
      notes:
`On the old dutch wiktionary page for afgot:
"Possibly a calque of Gothic 𐌰𐍆𐌲𐌿𐌸𐍃 (afguþs)"

While there's galiugaguþ, with the word parts being "false deity", it has
less of the "idol" meaning perhaps, while afguþ could be a middle ground
to this with a "deviation from the norm" feeling.

This would then tie loosly with afguþs to mean idolatrous,
and afgudei to mean idolatry.`
    },
  ], info)}</span></p>`

  article += html`<p>idolater: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'afgudblostreis',
        grc: "εἰδωλολᾰ́τρης",
        en: "idolater",
      },
      notes:
`prefixing the attested gudblostreis with af- as in afguþs.

The Greek is made of idol and worshipper too.
German has followed this compound approach too, Götzendienst.`
    },
  ], info)}</span></p>`


  article += html`<p>in large part: <span lang='got'>${toGothicLines([
    {
      text: {
        got: 'us dailai mikilai',
        en: "in large part",
      },
      notes: `us dailai Corinthians I 13:10, Corinthians I 13:12`
    },
  ], info)}</span></p>`


  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info)}
    <meta name="robots" content="noindex">
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