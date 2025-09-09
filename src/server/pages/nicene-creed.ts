import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
} from '@server/tools'

import
{
  amen
} from '@server/lines'


// https://praylingo.com/nicene-creed/
// Fredrik Adevåg's translation: https://gutrazda.wordpress.com/neogothic/writings/nicene-creed/
// https://stpaulsirvine.org/the-creed-with-scriptural-references/


global.lineId = 0

const title = '𐍄𐌰𐌹𐌺𐌽𐍃 𐌲𐌰𐌻𐌰𐌿𐌱𐌴𐌹𐌽𐌰𐌹𐍃'
let article = ''


article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Táikns Galáubeináis',
    el: "Σύμβολο της Πίστεως",
    en: "Symbol of Faith",
  }
})}</h1>
  <div class="subtitle">${toGothicLine({
  text: {
    got: 'Galáubeins Nikaias',
    en: "Nicene Creed",
  },
  notes: `Νίκαια /nǐː.kai̯.a/ → /ˈni.cɛ.a/ → /ˈni.ce.a/ perhaps *𐌽𐌹𐌺𐌰𐌹𐌰,
following attested 𐌹̈𐌿𐌳𐌰𐌹𐌰 from Ἰουδαία,
though the stress might affect something?
So *𐌽𐌹𐌺𐌰𐌹𐌰𐍃, looking at 𐌹̈𐌿𐌳𐌰𐌹𐌰's declensions.`,
})}</div>
</header>`

article += html`<p>${[
  {
    text: {
      got: 'Galáubjam du áinamma {Guda}~~{*gþa*}',
      el: "Πιστεύομεν εἰς ἕνα Θεὸν",
      en: "We believe in one God,",
    },
    notes: "𐌳𐌿 not 𐌹̈𐌽, for 𐌲𐌰𐌻𐌰𐌿𐌱𐌾𐌰𐌽, 𐌲𐌰𐌻𐌰𐌿𐌱𐌴𐌹𐌸 𐌳𐌿 𐌲𐌿𐌳𐌰 John 14:1"
  },
  {
    text: {
      got: 'Attin allwaldand,',
      el: "Πατέρα παντοκράτορα,",
      en: "the Father almighty,",
    }
  },
  {
    text: {
      got: 'skapa himinis jah aírþos,',
      el: "ποιητὴν οὐρανοῦ καὶ γῆς,",
      en: "maker of heaven and earth,",
    },
  },
  {
    text: {
      got: 'alláize gasaíƕanane jah ungasaíƕanane;',
      el: "ὁρατῶν τε πάντων καὶ ἀοράτων·",
      en: "of all things visible and invisible;",
    },
    notes: `in genitive now.

Colossians 1:16, the verse has 'the's for the two.

Luke 2:20 "of all things" = 𐌰𐌻𐌻𐌰𐌹𐌶𐌴, 𐌰𐌻𐌻𐍃 singular when "every", plural "all"`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'jah du áinamma {Fráujin Ïesu Xristáu}~~{*fin**iua**xau*},',
      el: "καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστὸν",
      en: "and in one Lord Jesus Christ,",
    }
  },
  {
    text: {
      got: 'áinabaúra Sunáu {Gudis}~~{*gþs*},',
      el: "τὸν υἱὸν τοῦ Θεοῦ τὸν Μονογενῆ,",
      en: "the only-begotten Son of God,",
    },
    notes: "Skeireins 5: 𐌰𐌹𐌽𐌰𐌱𐌰𐌿𐍂𐌰 𐍃𐌿𐌽𐌰𐌿 𐌲𐌸𐍃 (abbreviation of 𐌲𐌿𐌳𐌹𐍃)",
  },
  {
    text: {
      got: 'gabaúranamma us Attin faúr allans áiwins:',
      el: "τὸν ἐκ τοῦ Πατρὸς γεννηθέντα πρὸ πάντων τῶν αἰώνων,",
      en: "begotten of the Father before all worlds (æons),",
    },
    notes: `Luke 1:13 γεννήσει - 𐌲𐌰𐌱𐌰𐌹𐍂𐌰𐌽.

𐍆𐌰𐌿𐍂 before John 17:24.

ἐκ = out of.

Or maybe "𐍃𐌰𐌴𐌹 𐍅𐌰𐍂𐌸 𐌿𐍃 𐌰𐍄𐍄𐌹𐌽 𐌲𐌰𐌱𐌰𐌿𐍂𐌰𐌽𐍃 𐍆𐌰𐌿𐍂 𐌰𐌻𐌻𐌰𐌽𐍃 𐌰𐌹𐍅𐌹𐌽𐍃,"`,
  },
  {
    text: {
      got: 'Liuhaþ us liuhada,~~ ',
      el: "Φῶς ἐκ Φωτός,",
      en: "light from light,",
    },
    notes: `Mark 7:15 𐌿𐍃 𐌼𐌰𐌽𐌽, out of (the mouth of) man

still in ACC but following German and Hungarian versions where this part
is preceded by a colon and this and the following is in nominative.`,
  },
  {
    text: {
      got: '{Guþ}~~{*gþ*} sunjis us {Guda}~~{*gþa*} sunjamma,~~ ',
      el: "Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ,",
      en: "very God of very God,",
    },
    notes: `true god John 17:3`,
  },
  {
    text: {
      got: 'gabaúrans, ni gaskapans,',
      el: "γεννηθέντα οὐ ποιηθέντα,",
      en: "begotten, not made,",
    },
    notes: `ποιητὴν (origin of "poet") and ποιηθέντα ("poetised") being related,
using gaskapjan here.`,
  },
  {
    text: {
      got: 'samawisteins Attin,',
      el: "ὁμοούσιον τῷ Πατρί,",
      en: "consubstantial with the Father,",
    },
    notes:
`Using -eins "made of", as in, "(made) of the same substance/essence".
The vagueness of it improves it as it makes you think and look up the meaning,
instead of just accepting the simplicity of "of one substance/being".
-al in consubstantial seems to equate somewhat to -eins:
aiweins: eternal;
ahmeins: spiritual;
leikeins: corporeal, carnal;
sunjeins: factual;

Attins being in dative: oxford "4.41 Dative with adjectives" p146.
Relevant example: ibnans aggilum (Lk 20:36) ‘equal to the angels’;

There's 𐌹̈𐌱𐌽𐌰𐌻𐌴𐌹𐌺𐍃 from Skeireins 5 but unsure how it's used, the word parts
(even-ly, eben-lich) are weird, and might not even be good to use as the
Skeireins is Arian (𐌽𐌹 𐌹̈𐌱𐌽𐌰𐌻𐌴𐌹𐌺𐌰).`,
  },
  {
    text: {
      got: 'þaírh þamma allata warþ;',
      el: "δι' οὗ τὰ πάντα ἐγένετο·",
      en: "by whom all things were made;",
    },
    notes: `line from 1 Cor 8:6, missing sadly.

πάντα regularly translated to either all or allata. Using allata as found in
"all things are possible to him that believeth" Mark 9:23,
"with God all things are possible" Mark 10:27,
"remember me in all things" Corinthians I 11:2,
"all things are for your sakes" Corinthians II 4:15,
"fill all things" Ephesians 4:10.
"allata" seems to reference "absolutely all things" more often,
while "all" seems to be "all things" of a limited scope more often.
Also, "allata wairþiþ" Matthew 5:18.

Mark 2:27 ἐγένετο seems to often translate to just warþ to mean "came to pass",
"all things (came to pass|became|happened)". It also translates to gaskapan warþ,
though I like that it doesn't just include creation, but happenings/events too.`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'saei faúr uns mans',
      el: "τὸν δι' ἡμᾶς τοὺς ἀνθρώπους",
      en: "who for us men",
    },
    notes: `𐌹̈𐌶𐌴𐌹 could be either singular or plural, but the el is singular`,
  },
  {
    text: {
      got: 'jah faúr nasein unsara',
      el: "καὶ διὰ τὴν ἡμετέραν σωτηρίαν",
      en: "and for our salvation",
    }
  },
  {
    text: {
      got: 'us himinam dalaþ atïddja,',
      el: "κατελθόντα ἐκ τῶν οὐρανῶν,",
      en: "came down from the heavens,",
    },
    notes: `atgaggands dalaþ Luke 6:17, dalaþ atgaggandam Luke 9:37,
rain descended = atïddja dalaþ Matthew 7:25`,
  },
  {
    text: {
      got: 'jah leik warþ',
      el: "καὶ σαρκωθέντα",
      en: "and became flesh",
    },
    notes: `σὰρξ ἐγένετο "became flesh" John 1:14 not attested.
Strangly, both σῶμα (body) and σὰρξ (flesh) translate very consistently
to leik in the Bible.
In context, leik in "leik warþ" would make more sense to mean flesh, so
that's what I've gone with.`,
  },
  {
    text: {
      got: 'us Ahmin Weihamma jah Magaþái Mariïn,',
      el: "ἐκ Πνεύματος Ἁγίου καὶ Μαρίας τῆς παρθένου,",
      en: "from the Holy Spirit and the Virgin Mary",
    },
    notes: `virgin mary 𐌼𐌰𐌲𐌰𐌸𐌰𐌹𐍃 𐌼𐌰𐍂𐌹𐌰𐌼 Luke 1:27 𐌼𐌰𐍂𐌹𐌰𐌼 used in luke to
introduce her using the aramaic name, but elsewhere there's 𐌼𐌰𐍂𐌾𐌰 and 𐌼𐌰𐍂𐌹𐌰.
𐌼𐌰𐍂𐌾𐌰 is also used for Mary Magdalene but 𐌼𐌰𐍂𐌹𐌰 only for the virgin Mary,
so using that which is probably common use, 𐌼𐌰𐌲𐌰𐌸𐍃 𐌼𐌰𐍂𐌹𐌰.`,
  },
  {
    text: {
      got: 'jah manna warþ;',
      el: "καὶ ἐνανθρωπήσαντα,",
      en: "and was made man;",
    },
    notes: `man Matthew 7:9

𐌼𐌰𐌽𐌽𐌰 probably needs to be nominative, like with 𐍅𐌹𐍃𐌰𐌽.
"There are much more examples with adjectives and they all show nominative." -gunthiharjis.`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'ïs warþ áuk faúr uns uf Pauntiáu Peilatáu ushramiþs,',
      el: "σταυρωθέντα τε ὑπὲρ ἡμῶν ἐπὶ Ποντίου Πιλάτου,",
      en: "he was crucified for us under Pontius Pilate",
    },
    notes: `𐌿𐍃𐌷𐍂𐌰𐌼𐌹𐌸𐍃 𐍅𐌰𐍂𐌸 1 Corinthians 1:13.

𐌿𐍆 under authority Matthew 8:9.

𐌹̈𐌽𐌰 is ACC, 𐍀𐌰𐌿𐌽𐍄𐌹𐌰𐌿 𐍀𐌴𐌹𐌻𐌰𐍄𐌰𐌿 is probably DAT Matthew 27:2`,
  },
  {
    text: {
      got: 'jah gaþuláida, jah was ganawistroþs,',
      el: "καὶ παθόντα, καὶ ταφέντα,",
      en: "and suffered, and was buried",
    },
    notes: `𐌸𐌿𐌻𐌰𐌽 used in the Skeireins to refer to the passion of Christ.

was buried 1 Corinthians 15:4`,
  },
  {
    text: {
      got: 'jah þridjin daga urráis',
      el: "καὶ ἀναστάντα τῇ τρίτῃ ἡμέρᾳ",
      en: "and the third day he rose again",
    },
    notes: `1 Corinthians 15:4, doesn't seem to require ana`,
  },
  {
    text: {
      got: 'afar bokom,',
      el: "κατὰ τὰς γραφὰς,",
      en: "according to the Scriptures,",
    },
    notes: `1 Corinthians 15:3,4`,
  },
  {
    text: {
      got: 'jah usstáig ïn himin,',
      el: "καὶ ἀνελθόντα εἰς τοὺς οὐρανοὺς,",
      en: "and ascended into heaven,",
    },
    notes: `ascend into heaven Romans 10:6`,
  },
  {
    text: {
      got: 'jah gasitiþ af taíhswon Attins,~~.',
      el: "καὶ καθεζόμενον ἐν δεξιᾷ τοῦ Πατρὸς,",
      en: "and sitteth on the right hand of the Father,",
    },
    notes: `Mark 14:62 af taíhswon sitandan`,
  },
  {
    text: {
      got: 'jah aftra qimiþ',
      el: "καὶ πάλιν ἐρχόμενον",
      en: "from thence he shall come again,",
    },
    notes: `come again John 14:3`,
  },
  {
    text: {
      got: 'miþ wulþáu',
      el: "μετὰ δόξης",
      en: "with glory,",
    }
  },
  {
    text: {
      got: 'stojan qiwans jah dáuþans,',
      el: "κρῖναι ζῶντας καὶ νεκρούς,",
      en: "to judge the quick and the dead;",
    },
    notes: `taken from 2 Timothy 4:1 (has 𐍃𐌺𐌰𐌻 before the 𐍃𐍄𐍉𐌾𐌰𐌽, is it
required somewhere? perhaps before the come again)`,
  },
  {
    text: {
      got: 'þizei þiudinassus ni andi habáiþ;',
      el: "οὗ τῆς βασιλείας οὐκ ἔσται τέλος·",
      en: "whose kingdom shall have no end.",
    },
    notes: `of whom = 𐌸𐌹𐌶𐌴𐌹; þiudinassaus ... ni wairþiþ andeis Luke 1:33`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'jah du Ahmin þamma Weihin,',
      el: "καὶ εἰς τὸ Πνεῦμα τὸ Ἅγιον,",
      en: "And in the Holy Spirit,",
    },
    notes: `seems to be an emphasis in the el with "the/who" in this paragraph`,
  },
  {
    text: {
      got: 'þamma {Fráujin}~~{*fin*} jah Giband libáináis,',
      el: "τὸ Κύριον καὶ Ζωοποιόν,",
      en: "the Lord and Giver of life,",
    },
    notes: `life giver`,
  },
  {
    text: {
      got: 'saei us Attin usgaggiþ,',
      el: "τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον,",
      en: "who proceedeth from the Father,",
    },
    notes: `𐌿𐍃𐌲𐌰𐌲𐌲𐌰𐌽𐌳𐍉 Mark 7:20`,
  },
  {
    text: {
      got: 'saei miþ Attin jah Sunáu',
      el: "τὸ σὺν Πατρὶ καὶ Υἱῷ",
      en: "who with the Father and the Son together",
    }
  },
  {
    text: {
      got: 'ïnweitada jah gaswerada,',
      el: "συμπροσκυνούμενον καὶ συνδοξαζόμενον,",
      en: "is worshiped and glorified",
    },
    notes: `present passive`,
  },
  {
    text: {
      got: 'saei qaþ þaírh praúfetuns;',
      el: "τὸ λαλῆσαν διὰ τῶν προφητῶν·",
      en: "who spoke by the prophets.",
    },
    notes: `spoken by prophet Matthew 27:9`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'du áinái weihái',
      el: "εἰς μίαν ἁγίαν",
      en: "In one holy",
    }
  },
  {
    text: {
      got: 'aikklesjon kaþaúleigái jah apaústaúleigái;',
      el: "καθολικὴν καὶ ἀποστολικὴν ἐκκλησίαν·",
      en: "catholic and apostolic Church;",
    },
    notes: `*kaþauleigs; apaustaulus + eigs -> *apaustauleigs`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'andháitam áinái dáupeinái du fraleta frawaúrhte;',
      el: "ὁμολογοῦμεν ἓν βάπτισμα εἰς ἄφεσιν ἁμαρτιῶν·",
      en: "we acknowledge one baptism for the remission of sins;",
    },
    notes: `They profess Titus 1:16.

The el translates to two different versions:
𐌳𐌿 𐌰𐍆𐌻𐌰𐌲𐌴𐌹𐌽𐌰𐌹 𐍆𐍂𐌰𐍅𐌰𐌿𐍂𐌷𐍄𐌴 (Mark 1:4) and 𐌳𐌿 𐍆𐍂𐌰𐌻𐌴𐍄𐌰 𐍆𐍂𐌰𐍅𐌰𐌿𐍂𐌷𐍄𐌴 (Luke 3:3),
went with later as its parts (send away, let go) are closer to the el,
a sort of a nice freeing sense, while the former just "putting it down"`,
  },
].map(toGothicLine).join('')}</p>`


article += html`<p>${[
  {
    text: {
      got: 'beidam usstassáis dáuþane,',
      el: "προσδοκῶμεν ἀνάστασιν νεκρῶν,",
      en: "we look for the resurrection of the dead,",
    },
    notes: `Matthew 11:3.

plural dead from earlier line/verse.

to look for/expect: 𐌱𐌴𐌹𐌳𐌰𐌽 + genitive, there's also 𐍅𐌴𐌽𐌾𐌰𐌽 but that includes
hope which is missing in the el, and would also skew the meaning perhaps.
this is about belief in it happening, hope has uncertainty.

urrist only has one attestation.

not sure if 𐌳𐌰𐌿𐌸𐍃 should be strong or weak,
thinking 𐌳𐌰𐌿𐌸𐌰𐌽𐌴 to mean "of the ones dead"`,
  },
  {
    text: {
      got: 'jah libáináis anawaírþins áiwis.',
      el: "καὶ ζωὴν τοῦ μέλλοντος αἰῶνος.",
      en: "and the life of the world to come.",
    },
    notes: `𐌰𐌽𐌰𐍅𐌰𐌹𐍂𐌸𐍃 Luke 3:7`,
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${amen()}</p>`

article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Nicene Creed / Symbol of Faith</span>
  <span class="nowrap">in the Gothic language,</span>
  <br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const description = "The Nicene Creed / Symbol of Faith in the Gothic language, a translation by 2sh."

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
  </head>
  <body>
    ${createArticleBody(article, { includeModes: ["biblical"] })}
  </body>
</html>`

export default page
