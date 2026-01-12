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
  amen
} from '@server/lines'
import { fromLatin } from '@common/transliterate'


// https://praylingo.com/nicene-creed/
// Fredrik Adevåg's translation: https://gutrazda.wordpress.com/neogothic/writings/nicene-creed/
// https://stpaulsirvine.org/the-creed-with-scriptural-references/


const slug = "taikns-galaubeinais"
const title = 'Taikns Galaubeinais'
const description = "Taikns Galaubeinais, skeireins ïn razdai gutiskai."

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
      got: 'Taikns Galaubeinais',
      grc: "Σύμβολο της Πίστεως",
      en: "Symbol of Faith",
    }
  }], info)}</h1>
  <div class="subtitle">${toGothicLines([{
    text: {
      got: 'Galaubeins Nikaias-Konstanteinupauleins',
      en: "Niceno-Constantinopolitan Creed",
    },
    notes: `Νίκαια /nǐː.kai̯.a/ → /ˈni.cɛ.a/ → /ˈni.ce.a/ perhaps *𐌽𐌹𐌺𐌰𐌹𐌰,
following attested 𐌹̈𐌿𐌳𐌰𐌹𐌰 from Ἰουδαία,
though the stress might affect something?
So *𐌽𐌹𐌺𐌰𐌹𐌰𐍃, looking at 𐌹̈𐌿𐌳𐌰𐌹𐌰’s declensions.

Attested Kūstanteinus though using Kon as it's attested only in the calendar
and there's misspellings in there.
There's attested dative Daikapaulein and genitive Daikapaulaios for Decapolis
and dative Iairaupaulein for Hierapolis.
The -aios seems to have been pulled directly from the Greek declension,
but not the -ein. With the ancient Greek vocative being -i and the modern nominative
being -i, I'm standardising it to an -ein declension.`,
  }], info)}</div>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Galaubjam du ainamma Guda',
        grc: "Πιστεύομεν εἰς ἕνα Θεὸν",
        en: "We believe in one God,",
      },
      notes: "𐌳𐌿 not 𐌹̈𐌽, for 𐌲𐌰𐌻𐌰𐌿𐌱𐌾𐌰𐌽, 𐌲𐌰𐌻𐌰𐌿𐌱𐌴𐌹𐌸 𐌳𐌿 𐌲𐌿𐌳𐌰 John 14:1"
    },
    {
      text: {
        got: 'Attin allwaldand,',
        grc: "Πατέρα παντοκράτορα,",
        en: "the Father almighty,",
      }
    },
    {
      text: {
        got: 'skapa himinis jah airþos,',
        grc: "ποιητὴν οὐρανοῦ καὶ γῆς,",
        en: "maker of heaven and earth,",
      },
    },
    {
      text: {
        got: 'allaize gasaiƕanane jah ungasaiƕanane;',
        grc: "ὁρατῶν τε πάντων καὶ ἀοράτων·",
        en: "of all things visible and invisible;",
      },
      notes: `in genitive now.

Colossians 1:16, the verse has “the”s for the two.

Luke 2:20 “of all things” = 𐌰𐌻𐌻𐌰𐌹𐌶𐌴, 𐌰𐌻𐌻𐍃 singular when “every”, plural “all”`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'jah du ainamma Fraujin Ïesu Xristau,',
        grc: "καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστὸν",
        en: "and in one Lord Jesus Christ,",
      }
    },
    {
      text: {
        got: 'ainabaura Sunau Gudis,',
        grc: "τὸν υἱὸν τοῦ Θεοῦ τὸν Μονογενῆ,",
        en: "the only-begotten Son of God,",
      },
      notes: "Skeireins 5: 𐌰𐌹𐌽𐌰𐌱𐌰𐌿𐍂𐌰 𐍃𐌿𐌽𐌰𐌿 𐌲𐌸𐍃 (abbreviation of 𐌲𐌿𐌳𐌹𐍃)",
    },
    {
      text: {
        got: 'gabauranamma us Attin faur allans aiwins:',
        grc: "τὸν ἐκ τοῦ Πατρὸς γεννηθέντα πρὸ πάντων τῶν αἰώνων,",
        en: "begotten of the Father before all worlds (æons),",
      },
      notes: `Luke 1:13 γεννήσει - 𐌲𐌰𐌱𐌰𐌹𐍂𐌰𐌽.

𐍆𐌰𐌿𐍂 before John 17:24.

ἐκ = out of.

Or maybe “𐍃𐌰𐌴𐌹 𐍅𐌰𐍂𐌸 𐌿𐍃 𐌰𐍄𐍄𐌹𐌽 𐌲𐌰𐌱𐌰𐌿𐍂𐌰𐌽𐍃 𐍆𐌰𐌿𐍂 𐌰𐌻𐌻𐌰𐌽𐍃 𐌰𐌹𐍅𐌹𐌽𐍃,”`,
    },
    {
      text: {
        got: 'Liuhaþ us liuhada,',
        grc: "Φῶς ἐκ Φωτός,",
        en: "light from light,",
      },
      notes: `Mark 7:15 𐌿𐍃 𐌼𐌰𐌽𐌽, out of (the mouth of) man

still in ACC but following German and Hungarian versions where this part
is preceded by a colon and this and the following is in nominative.`,
    },
    {
      text: {
        got: 'Guþ sunjis us Guda sunjamma,',
        grc: "Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ,",
        en: "very God of very God,",
      },
      notes: `true god John 17:3`,
    },
    {
      text: {
        got: 'gabaurans, ni gaskapans,',
        grc: "γεννηθέντα οὐ ποιηθέντα,",
        en: "begotten, not made,",
      },
      notes: `ποιητὴν (origin of “poet”) and ποιηθέντα (“poetised”) being related,
using gaskapjan here.`,
    },
    {
      text: {
        got: 'samawisteins Attin,',
        grc: "ὁμοούσιον τῷ Πατρί,",
        en: "consubstantial with the Father,",
      },
      notes:
        `Using -eins “made of”, as in, “(made) of the same substance/essence”.
The vagueness of it improves it as it makes you think and look up the meaning,
instead of just accepting the simplicity of “of one substance/being”.
-al in consubstantial seems to equate somewhat to -eins:
aiweins: eternal;
ahmeins: spiritual;
leikeins: corporeal, carnal;
sunjeins: factual;

Attins being in dative: oxford “4.41 Dative with adjectives” p146.
Relevant example: ibnans aggilum (Lk 20:36) ‘equal to the angels’;

There’s 𐌹̈𐌱𐌽𐌰𐌻𐌴𐌹𐌺𐍃 from Skeireins 5 but unsure how it’s used, the word parts
(even-ly, eben-lich) are weird, and might not even be good to use as the
Skeireins is Arian (𐌽𐌹 𐌹̈𐌱𐌽𐌰𐌻𐌴𐌹𐌺𐌰).`,
    },
    {
      text: {
        got: 'þairh þamma allata warþ;',
        grc: "δι’ οὗ τὰ πάντα ἐγένετο·",
        en: "by whom all things were made;",
      },
      notes: `line from 1 Cor 8:6, missing sadly.

πάντα regularly translated to either all or allata. Using allata as found in
“all things are possible to him that believeth” Mark 9:23,
“with God all things are possible” Mark 10:27,
“remember me in all things” Corinthians I 11:2,
“all things are for your sakes” Corinthians II 4:15,
“fill all things” Ephesians 4:10.
“allata” seems to reference “absolutely all things” more often,
while “all” seems to be “all things” of a limited scope more often.
Also, “allata wairþiþ” Matthew 5:18.

Mark 2:27 ἐγένετο seems to often translate to just warþ to mean “came to pass”,
“all things (came to pass|became|happened)”. It also translates to gaskapan warþ,
though I like that it doesn’t just include creation, but happenings/events too.`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'saei faur uns mans',
        grc: "τὸν δι’ ἡμᾶς τοὺς ἀνθρώπους",
        en: "who for us men",
      },
      notes: `𐌹̈𐌶𐌴𐌹 could be either singular or plural, but the el is singular`,
    },
    {
      text: {
        got: 'jah faur nasein unsara',
        grc: "καὶ διὰ τὴν ἡμετέραν σωτηρίαν",
        en: "and for our salvation",
      }
    },
    {
      text: {
        got: 'us himinam dalaþ atiddja,',
        grc: "κατελθόντα ἐκ τῶν οὐρανῶν,",
        en: "came down from the heavens,",
      },
      notes: `atgaggands dalaþ Luke 6:17, dalaþ atgaggandam Luke 9:37,
rain descended = atiddja dalaþ Matthew 7:25`,
    },
    {
      text: {
        got: 'jah leik warþ',
        grc: "καὶ σαρκωθέντα",
        en: "and became flesh",
      },
      notes: `σὰρξ ἐγένετο “became flesh” John 1:14 not attested.
Strangly, both σῶμα (body) and σὰρξ (flesh) translate very consistently
to leik in the Bible.
In context, leik in “leik warþ” would make more sense to mean flesh, so
that’s what I’ve gone with.`,
    },
    {
      text: {
        got: 'us Ahmin Weihamma jah Mariïn Magaþai,',
        grc: "ἐκ Πνεύματος Ἁγίου καὶ Μαρίας τῆς παρθένου,",
        en: "from the Holy Spirit and the Virgin Mary",
      },
      notes: `virgin mary 𐌼𐌰𐌲𐌰𐌸𐌰𐌹𐍃 𐌼𐌰𐍂𐌹𐌰𐌼 Luke 1:27 𐌼𐌰𐍂𐌹𐌰𐌼 used in luke to
introduce her using the aramaic name, but elsewhere there’s 𐌼𐌰𐍂𐌾𐌰 and 𐌼𐌰𐍂𐌹𐌰.
𐌼𐌰𐍂𐌾𐌰 is also used for Mary Magdalene but 𐌼𐌰𐍂𐌹𐌰 only for the virgin Mary,
so using that which is probably common use, 𐌼𐌰𐌲𐌰𐌸𐍃 𐌼𐌰𐍂𐌹𐌰.`,
    },
    {
      text: {
        got: 'jah manna warþ;',
        grc: "καὶ ἐνανθρωπήσαντα,",
        en: "and was made man;",
      },
      notes: `man Matthew 7:9

𐌼𐌰𐌽𐌽𐌰 probably needs to be nominative, like with 𐍅𐌹𐍃𐌰𐌽.
“There are much more examples with adjectives and they all show nominative.” -gunthiharjis.`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'ïs warþ auk faur uns uf Pauntiau Peilatau ushramiþs,',
        grc: "σταυρωθέντα τε ὑπὲρ ἡμῶν ἐπὶ Ποντίου Πιλάτου,",
        en: "he was crucified for us under Pontius Pilate",
      },
      notes: `𐌿𐍃𐌷𐍂𐌰𐌼𐌹𐌸𐍃 𐍅𐌰𐍂𐌸 1 Corinthians 1:13.

𐌿𐍆 under authority Matthew 8:9.

𐌹̈𐌽𐌰 is ACC, 𐍀𐌰𐌿𐌽𐍄𐌹𐌰𐌿 𐍀𐌴𐌹𐌻𐌰𐍄𐌰𐌿 is probably DAT Matthew 27:2`,
    },
    {
      text: {
        got: 'jah gaþulaida, jah was ganawistroþs,',
        grc: "καὶ παθόντα, καὶ ταφέντα,",
        en: "and suffered, and was buried",
      },
      notes: `𐌸𐌿𐌻𐌰𐌽 used in the Skeireins to refer to the passion of Christ.

was buried 1 Corinthians 15:4`,
    },
    {
      text: {
        got: 'jah þridjin daga urrais',
        grc: "καὶ ἀναστάντα τῇ τρίτῃ ἡμέρᾳ",
        en: "and the third day he rose again",
      },
      notes: `1 Corinthians 15:4, doesn’t seem to require ana`,
    },
    {
      text: {
        got: 'afar bokom,',
        grc: "κατὰ τὰς γραφὰς,",
        en: "according to the Scriptures,",
      },
      notes: `1 Corinthians 15:3,4`,
    },
    {
      text: {
        got: 'jah usstaig ïn himin,',
        grc: "καὶ ἀνελθόντα εἰς τοὺς οὐρανοὺς,",
        en: "and ascended into heaven,",
      },
      notes: `ascend into heaven Romans 10:6`,
    },
    {
      text: {
        got: 'jah gasitiþ af taihswon Attins,',
        grc: "καὶ καθεζόμενον ἐν δεξιᾷ τοῦ Πατρὸς,",
        en: "and sitteth on the right hand of the Father,",
      },
      notes: `Mark 14:62 af taihswon sitandan`,
    },
    {
      text: {
        got: 'jah aftra qimiþ',
        grc: "καὶ πάλιν ἐρχόμενον",
        en: "from thence he shall come again,",
      },
      notes: `come again John 14:3`,
    },
    {
      text: {
        got: 'miþ wulþau',
        grc: "μετὰ δόξης",
        en: "with glory,",
      }
    },
    {
      text: {
        got: 'stojan qiwans jah dauþans,',
        grc: "κρῖναι ζῶντας καὶ νεκρούς,",
        en: "to judge the quick and the dead;",
      },
      notes: `taken from 2 Timothy 4:1 (has 𐍃𐌺𐌰𐌻 before the 𐍃𐍄𐍉𐌾𐌰𐌽, is it
required somewhere? perhaps before the come again)`,
    },
    {
      text: {
        got: 'þizei þiudinassus ni andi habaiþ;',
        grc: "οὗ τῆς βασιλείας οὐκ ἔσται τέλος·",
        en: "whose kingdom shall have no end.",
      },
      notes: `of whom = 𐌸𐌹𐌶𐌴𐌹; þiudinassaus ... ni wairþiþ andeis Luke 1:33`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'jah du Ahmin þamma Weihin,',
        grc: "καὶ εἰς τὸ Πνεῦμα τὸ Ἅγιον,",
        en: "And in the Holy Spirit,",
      },
      notes: `seems to be an emphasis in the el with “the/who” in this paragraph`,
    },
    {
      text: {
        got: 'þamma Fraujin jah Gibands libainais,',
        grc: "τὸ Κύριον καὶ Ζωοποιόν,",
        en: "the Lord and Giver of life,",
      },
      notes: `life giver`,
    },
    {
      text: {
        got: 'saei us Attin usgaggiþ,',
        grc: "τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον,",
        en: "who proceedeth from the Father,",
      },
      notes: `𐌿𐍃𐌲𐌰𐌲𐌲𐌰𐌽𐌳𐍉 Mark 7:20`,
    },
    {
      text: {
        got: 'saei miþ Attin jah Sunau',
        grc: "τὸ σὺν Πατρὶ καὶ Υἱῷ",
        en: "who with the Father and the Son together",
      }
    },
    {
      text: {
        got: 'ïnweitada jah gaswerada,',
        grc: "συμπροσκυνούμενον καὶ συνδοξαζόμενον,",
        en: "is worshiped and glorified",
      },
      notes: `present passive`,
    },
    {
      text: {
        got: 'saei qaþ þairh praufetuns;',
        grc: "τὸ λαλῆσαν διὰ τῶν προφητῶν·",
        en: "who spoke by the prophets.",
      },
      notes: `spoken by prophet Matthew 27:9`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'du ainai weihai',
        grc: "εἰς μίαν ἁγίαν",
        en: "In one holy",
      }
    },
    {
      text: {
        got: 'aikklesjon kaþauleigai jah apaustauleigai;',
        grc: "καθολικὴν καὶ ἀποστολικὴν ἐκκλησίαν·",
        en: "catholic and apostolic Church;",
      },
      notes: `*kaþauleigs; apaustaulus + eigs -> *apaustauleigs`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'andhaitam ainai daupeinai du fraleta frawaurhte;',
        grc: "ὁμολογοῦμεν ἓν βάπτισμα εἰς ἄφεσιν ἁμαρτιῶν·",
        en: "we acknowledge one baptism for the remission of sins;",
      },
      notes: `They profess Titus 1:16.

The el translates to two different versions:
𐌳𐌿 𐌰𐍆𐌻𐌰𐌲𐌴𐌹𐌽𐌰𐌹 𐍆𐍂𐌰𐍅𐌰𐌿𐍂𐌷𐍄𐌴 (Mark 1:4) and 𐌳𐌿 𐍆𐍂𐌰𐌻𐌴𐍄𐌰 𐍆𐍂𐌰𐍅𐌰𐌿𐍂𐌷𐍄𐌴 (Luke 3:3),
went with later as its parts (send away, let go) are closer to the el,
a sort of a nice freeing sense, while the former just “putting it down”`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'beidam usstassais dauþane,',
        grc: "προσδοκῶμεν ἀνάστασιν νεκρῶν,",
        en: "we look for the resurrection of the dead,",
      },
      notes: `Matthew 11:3.

plural dead from earlier line/verse.

to look for/expect: 𐌱𐌴𐌹𐌳𐌰𐌽 + genitive, there’s also 𐍅𐌴𐌽𐌾𐌰𐌽 but that includes
hope which is missing in the el, and would also skew the meaning perhaps.
this is about belief in it happening, hope has uncertainty.

urrist only has one attestation.

not sure if 𐌳𐌰𐌿𐌸𐍃 should be strong or weak,
thinking 𐌳𐌰𐌿𐌸𐌰𐌽𐌴 to mean “of the ones dead”`,
    },
    {
      text: {
        got: 'jah libainais anawairþins aiwis.',
        grc: "καὶ ζωὴν τοῦ μέλλοντος αἰῶνος.",
        en: "and the life of the world to come.",
      },
      notes: `𐌰𐌽𐌰𐍅𐌰𐌹𐍂𐌸𐍃 Luke 3:7`,
    },
  ], info)}</p>`

  article += html`<p>${amen(info)}</p>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Galaubeins Nikaias-Konstanteinupauleins /",
      en: "Niceno-Constantinopolitan Creed /" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "Galaubeins Nikaias", en: "Symbol of Faith" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Nicene Creed</span>
  <span class="nowrap">(Niceno-Constantinopolitan Creed) /</span>
  <span class="nowrap">Symbol of Faith</span>
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
