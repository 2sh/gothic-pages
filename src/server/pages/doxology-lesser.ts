import { type RequestHandler } from "express"

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
  amen,
  nowAndEver
} from '@server/lines'
import { fromLatin } from "@common/transliterate"


// https://el.wikipedia.org/wiki/%CE%94%CE%BF%CE%BE%CE%BF%CE%BB%CE%BF%CE%B3%CE%AF%CE%B1
// https://www.orthodoxes-forum.de/viewtopic.php?t=577


const slug = 'dauksaulaugei-leitils'
const title = 'Dauksaulaugei Leitils'
const description = "Dauksaulaugei Leitils, skeireins ïn razdai gutiskai."

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
      got: 'Dauksaulaugei Leitils',
      grc: "Δοξολογία Μικρά",
      en: "Lesser Doxology",
    },
    notes:
      `Greek -ία ending seems to equate to -ei and x -> 𐌺𐍃 from 1 Timothy 1:20,
so *dauksaulaugei`,
  }], info)}</h1>
</header>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Wulþus ïn háuhistjam Guda, jah ana airþai gawairþi ïn mannam godis wiljins.',
        grc: "Δόξα ἐν ὑψίστοις Θεῷ, καὶ ἐπὶ γῆς εἰρήνη ἐν ἀνθρώποις εὐδοκία.",
        en: "Glory to God in the highest, and on earth peace, good will to men.",
      },
      notes:
        `Luke 2:14, copied from the Gothic Bible.`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Hazjam þuk,',
        grc: "Ὑμνοῦμέν σε,",
        en: "We praise you,",
      },
      notes:
        `although 𐌷𐌰𐌶𐌾𐌰𐌽 is translated from αἰνέω usually, 𐌷𐌰𐌶𐌴𐌹𐌽𐍃 is used for hymn`,
    },
    {
      text: {
        got: 'þiuþjam þuk,',
        grc: "εὐλογοῦμέν σε,",
        en: "we bless you,",
      },
    },
    {
      text: {
        got: 'ïnweitam þuk,',
        grc: "προσκυνοῦμέν σε,",
        en: "we worship you,",
      },
    },
    {
      text: {
        got: 'gasweram þuk,',
        grc: "δοξολογοῦμέν σε,",
        en: "we glorify you,",
      },
      notes:
        `John 12:16 doxology, give glory; 𐌿𐍃𐌷𐌰𐌿𐌷𐌾𐌰𐌽 is also interesting`,
    },
    {
      text: {
        got: 'awiliudom þuk,',
        grc: "εὐχαριστοῦμέν σοι,",
        en: "and we thank you,",
      },
      notes:
        `Mark 8:6 eucharist; 𐌰𐌹𐍅𐍇𐌰𐍂𐌹𐍃𐍄𐌹𐌰`,
    },
    {
      text: {
        got: 'faur mikilana wulþu þeinana.',
        grc: "διὰ τὴν μεγάλην σου δόξαν.",
        en: "for your great glory.",
      },
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Frauja, Þiudan, Guþ himinakunda,',
        grc: "Κύριε Βασιλεῦ, ἐπουράνιε Θεέ,",
        en: "Lord, King, Heavenly God,",
      },
      notes:
        `“Adjectives in the vocative have the same ending as the nominative,
and are almost always declined ‘weak’.”`,
    },
    {
      text: {
        got: 'Atta allwaldand;',
        grc: "Πάτερ παντοκράτορ·",
        en: "Father Almighty;",
      },
      notes:
        `pantokrator`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Frauja Sunau ainabaur,',
        grc: "Κύριε Υἱὲ μονογενές,",
        en: "only-begotten Son,",
      },
      notes:
        `using the Skeireins’ “only-begotten” as it’s more descriptive and is
the same as the german eingeboren, and as it was written after the bible
translation, it’s probably the commonly used version`,
    },
    {
      text: {
        got: 'Ïesu Xristau, jah Ahma Weiha.',
        grc: "Ἰησοῦ Χριστέ, καὶ Ἅγιον Πνεῦμα.",
        en: "Lord Jesus Christ and Holy Spirit.",
      },
    },
  ], info)}</p>`


  article += html`<p>
${toGothicLines([
    {
      text: {
        got: 'Frauja Guþ,',
        grc: "Κύριε ὁ Θεός,",
        en: "Lord God,",
      },
    },
    {
      text: {
        got: 'Lamb Gudis,',
        grc: "ὁ Ἀμνὸς τοῦ Θεοῦ,",
        en: "the Lamb of God,",
      },
    },
    {
      text: {
        got: 'Sunus Attins,',
        grc: "ὁ Υἱὸς τοῦ Πατρός,",
        en: "the Son of the Father,",
      },
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'þū afnimand frawaurht manasedais,',
        grc: "ὁ αἴρων τὴν ἁμαρτίαν τοῦ κόσμου,",
        en: "who take away the sin of the world,",
      },
      notes:
        `adding 𐌸𐌿, tying it with the 𐌸𐌿𐌴𐌹 later.

αἴρων has lift and remove as meaning, 𐌿𐍃𐌷𐌰𐍆𐌾𐌰𐌽 has a sense of being
lifted up by god, taken up from the ground Mark 11:23 but in 2 Cor 10:5
it also can mean exalt, so not using that;
afnima in Romans 11:27; world Mark 14:9`,
    },
    {
      text: {
        got: 'armai unsis,',
        grc: "ἐλέησον ἡμᾶς,",
        en: "have mercy on us,",
      },
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'þū afnimand frawaurhtins manasedais.',
        grc: "ὁ αἴρων τὰς ἁμαρτίας τοῦ κόσμου.",
        en: "you who take away the sins of the world.",
      },
    },
  ], info)}
</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Andnim bidos unsaros,',
        grc: "Πρόσδεξαι τὴν δέησιν ἡμῶν,",
        en: "Accept our supplication,",
      },
      notes:
        `𐌰𐌽𐌳𐌽𐌹𐌼𐌰𐌽 + ACC Luke 15:2; 𐌱𐌹𐌳𐍉𐌼 Luke 2:37`,
    },
    {
      text: {
        got: 'þūei sitaza af taihswon Attins,',
        grc: "ὁ καθήμενος ἐν δεξιᾷ τοῦ Πατρός,",
        en: "you who sit at the right of the Father,",
      },
      notes:
        `you who are seated`,
    },
    {
      text: {
        got: 'jah armai unsis.',
        grc: "καὶ ἐλέησον ἡμᾶς.",
        en: "and have mercy on us.",
      },
      notes:
        `ἐλέησον ἡμᾶς = 𐌰𐍂𐌼𐌰𐌹 𐌿𐌽𐍃𐌹𐍃, even though it’s 𐌿𐌽𐍃𐌹𐍃 is usually dative`
    },
    {
      text: {
        got: 'Unte þū sa ains Weiha ïs,',
        grc: "Ὅτι σὺ εἶ μόνος Ἅγιος,",
        en: "For you are the only Holy One,",
      },
      notes:
        `𐌿𐌽𐍄𐌴 Matthew 5:34 Matthew 6:13.

𐌰𐌹𐌽𐍃 used as only/alone Luke 5:21 Matthew 14:23. Luke 4:34 the holy one.`,
    },
    {
      text: {
        got: 'þū sa ains Frauja ïs, Ïesu Xristau,',
        grc: "σὺ εἶ μόνος Κύριος, Ἰησοῦς Χριστός,",
        en: "you are the only Lord, Jesus Christ,",
      },
    },
    {
      text: {
        got: 'du wulþau Gudis Attins.',
        grc: "εἰς δόξαν Θεοῦ Πατρός.",
        en: "to the glory of God the Father.",
      },
      notes:
        `to the glory of god Corinthians II 4:15.

genitives for both god and father,
Luke 3:22+ and Luke 1:32 have genitive apposition.`,
    },
  ], info)}</p>`


  article += html`<p>${amen(info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Andanahtja ƕammeh þiuþja þuk,',
        grc: "Καθʼ ἑκάστην ἑσπέραν εὐλογήσω σε,",
        en: "Every evening I shall bless you,",
      },
      notes:
        `dative, every day Mark 14:49, every year Luke 2:41.

adding 𐌹̈𐌺 for clarity that it’s not the 3rd person.

𐌷𐌹𐌼𐌼𐌰 𐌳𐌰𐌲𐌰 ... 𐍃𐌺𐌰𐌻 𐌹̈𐌺 𐍅𐌹𐍃𐌰𐌽 Luke 19:5;

seems to be the modern German word order, so adding 𐌸𐌿𐌺 before 𐌸𐌹𐌿𐌸𐌾𐌰𐌽.`,
    },
    {
      text: {
        got: 'jah hazja namo þein ïn aiw,',
        grc: "καὶ αἰνέσω τὸ ὄνομά σου εἰς τὸν αἰῶνα,",
        en: "and I shall praise your name forever,",
      },
      notes:
        `ever Luke 1:55; praise = 𐌷𐌰𐌶𐌾𐌰𐌽 Luke 2:13 Luke 2:20 Luke 19:37`,
    },
    {
      text: {
        got: 'jah ïn aiw aiwis.',
        grc: "καὶ εἰς τὸν αἰῶνα τοῦ αἰῶνος.",
        en: "and unto the ages of ages.",
      },
      notes:
        `greek here is singular and not the usual plural`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Frauja, warst unsis staþs þadei magum þláuhan',
        grc: "Κύριε, καταφυγὴ ἐγενήθης ἡμῖν",
        en: "Lord, you have become for us a refuge",
      },
      notes:
        `𐍃𐍄𐌰𐌸𐍃 meaning “place, location, site” but also a second etymology
meaning “land (from the point of view of a boat on the water), shore”
which is quite fitting I think.

(imo) 𐌸𐌻𐌰𐌿𐌷𐌰𐌽 without 𐌲𐌰 prefix as arriving is not a certainty, it’s a struggle.`,
    },
    {
      text: {
        got: 'us aldai ïn ald.',
        grc: "ἐν γενεᾷ καὶ γενεᾷ.",
        en: "from generation to generation.",
      },
      notes:
        `alds Luke 1:50. from house to house Luke 10:7.

Not using a singular variation of 𐌹̈𐌽 𐌰𐌻𐌳𐌹𐌽𐍃 𐌰𐌻𐌳𐌴 from Luke 1:50
as the original greek is more of a “from within ... in to ...” instead
of a “into ... of ...”.`,
    },
    {
      text: {
        got: 'Ïk qaþ: Frauja, armai mik;',
        grc: "Ἐγὼ εἶπα· Κύριε, ἐλέησόν με·",
        en: "I have said: Lord, have mercy on me,",
      },
      notes: `𐌹̈𐌴𐍃𐌿, 𐍃𐌿𐌽𐌿 𐌳𐌰𐍅𐌴𐌹𐌳𐌹𐍃, 𐌰𐍂𐌼𐌰𐌹 𐌼𐌹𐌺 Luke 18:38`
    },
    {
      text: {
        got: 'hailei saiwala meina,',
        grc: "ἴασαι τὴν ψυχήν μου,",
        en: "heal my soul,",
      },
      notes:
        `heal thyself ACC Luke 4:23`,
    },
    {
      text: {
        got: 'unte ïk wiþra þuk frawaurhta.',
        grc: "ὅτι ἥμαρτόν σοι.",
        en: "for I have sinned against you.",
      },
      notes:
        `sinned against heaven ACC Luke 15:21`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Frauja, du þus þláuh;',
        grc: "Κύριε, πρὸς σὲ κατέφυγον·",
        en: "Lord, to you I have fled;",
      },
      notes:
        `du Matthew 27:58. same as greek.`,
    },
    {
      text: {
        got: 'laisei mik wiljan þeinana taujan,',
        grc: "δίδαξόν με τοῦ ποιεῖν τὸ θέλημά σου,",
        en: "teach me to do your will,",
      },
      notes:
        `(didache = teaching). lord’s prayer.

do the will John 6:38; do his will John 7:17

“laisjan takes double accusative”`,
    },
    {
      text: {
        got: 'unte þū ïs guþ meins.',
        grc: "ὅτι σὺ εἶ ὁ Θεός μου.",
        en: "for you are my God.",
      },
    },
    {
      text: {
        got: 'Unte fram þus ïst brunna libainais;',
        grc: "Ὅτι παρὰ σοὶ πηγὴ ζωῆς·",
        en: "For with you is the fountain of life;",
      },
      notes:
        `in this case para = fram Mark 10:27`,
    },
    {
      text: {
        got: 'Ïn liuhada þein seƕum liuhaþ.',
        grc: "ἐν τῷ φωτί σου ὀψόμεθα φῶς.",
        en: "in your light we shall see light.",
      },
      notes:
        `Luke 8:16`,
    },
    {
      text: {
        got: 'Ufþanei armahairtein þeina þaim kunnandam þuk.',
        grc: "Παράτεινον τὸ ἔλεός σου τοῖς γινώσκουσί σε.",
        en: "Extend your mercy to those who know you.",
      },
      notes:
        `searching instead for ἐκτείνω, as Παράτεινον not attested; considered was
𐌿𐍆𐍂𐌰𐌺𐌾𐌰𐌽𐌳𐍃 + ACC Matthew 8:3 Mark 1:41 𐌿𐍆𐍂𐌰𐌺𐌴𐌹 𐌿𐍆𐍂𐌰𐌺𐌹𐌳𐌰
Mark 3:5 𐌿𐍆𐍂𐌰𐌺𐌾𐌰𐌽𐌳𐍃 Luke 5:13 𐌿𐍆𐍂𐌰𐌺𐌴𐌹 Luke 6:10.
there’s also þairhwisan with a meaning of continue/preserve/bewahren
found in other translations and is perhaps closer to the para- word.
going with 𐌿𐍆𐌸𐌰𐌽𐌾𐌰𐌽 as it “it seems to cover the figurative sense of reaching out”

𐌰𐍂𐌼𐌰𐌷𐌰𐌹𐍂𐍄𐌴𐌹𐌽𐍃 Luke 1:50 Luke 1:54 Luke 1:58. know Matthew 7:23.

“those who” Luke 6:32.`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Fragif, Frauja,',
        grc: "Καταξίωσον, Κύριε,",
        en: "Grant, O Lord,",
      },
      notes:
        `𐍂𐌰𐌷𐌽𐌴𐌹 𐍅𐌰𐌹𐍂𐌸𐌰𐌽𐍃 consider worthy + ACC Timothy I 6:1; 𐌿𐍃𐌻𐌰𐌿𐌱𐌾𐌰𐌽 to permit;

grant 𐍆𐍂𐌰𐌲𐌹𐍆 Mark 10:37`,
    },
    {
      text: {
        got: 'ei himma naht ïnuh frawaurht gafastaindau.',
        grc: "ἐν τῇ νυκτὶ ταύτῃ ἀναμαρτήτους φυλαχθῆναι ἡμᾶς.",
        en: "that in this night we may be kept without sin.",
      },
      notes:
        `that this night without sin we are kept.

Thessalonians II 3:3. 𐌲𐌰𐍆𐌰𐍃𐍄𐌰𐌽 Luke 18:21;
𐌳𐌿 𐌲𐌰𐍆𐌰𐍃𐍄𐌰𐌽 𐌸𐌿𐌺, Luke 4:10

“in a relative clause attached to an imperative or a subjunctive clause,
[...] The verb in a relative clause is also subjunctive when the
principal clause is interrogative or negative”`,
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þiuþiþs þuk, Frauja,',
        grc: "Εὐλογητὸς εἶ, Κύριε,",
        en: "Blessed are you, O Lord,",
      },
    },
    {
      text: {
        got: 'Guþ Attane unsaraize,',
        grc: "ὁ Θεὸς τῶν Πατέρων ἡμῶν,",
        en: "the God of our Fathers,",
      },
    },
    {
      text: {
        got: 'jah haziþ jah gasweraiþ namo þein',
        grc: "καὶ αἰνετὸν καὶ δεδοξασμένον τὸ ὄνομά σου",
        en: "and praised and glorified is your name",
      },
    },
    {
      text: {
        got: 'ïn aiwins.',
        grc: "εἰς τοὺς αἰῶνας.",
        en: "unto the ages.",
      },
    },
  ], info)}</p>`


  article += html`<p>${amen(info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Wairþai, Frauja, armahairtein þeina ana uns,',
        grc: "Γένοιτο, Κύριε, τὸ ἔλεός σου ἐφʼ ἡμᾶς,",
        en: "Let your mercy, Lord, come upon us,",
      },
      notes:
        `3rd person subjunctive = a wish to happen (3rd person optative) Luke 1:38.`,
    },
    {
      text: {
        got: 'swaswe wenidedum du þus.',
        grc: "καθάπερ ἠλπίσαμεν ἐπὶ σέ.",
        en: "just as we have hoped in you.",
      },
      notes:
        `καθάπερ = 𐍃𐍅𐌰𐍃𐍅𐌴 (𐌾𐌰𐌷)
Corinthians II 1:14, Corinthians II 3:18, Thessalonians I 3:12.

ἠλπίκαμεν ἐπὶ θεῷ = 𐍅𐌴𐌽𐌹𐌳𐌴𐌳𐌿𐌼 𐌳𐌿 𐌲𐌿𐌳𐌰 Timothy I 4:10`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þiuþiþs þuk, Frauja,',
        grc: "Εὐλογητὸς εἶ, Κύριε,",
        en: "Blessed are you, O Lord,",
      },
      notes: '𐌸𐌹𐌿𐌸𐌴𐌹𐌲𐍃 𐍆𐍂𐌰𐌿𐌾𐌰 𐌲𐌿𐌸 𐌹𐍃𐍂𐌰𐌴𐌻𐌹𐍃 Luke 1:68',
    },
    {
      text: {
        got: 'laisei mik anabusnins þeinos.',
        grc: "δίδαξόν με τὰ δικαιώματά σου.",
        en: "teach me your commandments.",
      },
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þiuþiþs þuk, Fraujinond,',
        grc: "Εὐλογητὸς εἶ, Δέσποτα,",
        en: "Blessed are you, O Master,",
      },
    },
    {
      text: {
        got: 'gatawei mik fraþjan anabusnins þeinos.',
        grc: "συνέτισόν με τὰ δικαιώματά σου.",
        en: "make me understand your commandments.",
      },
      notes:
        `make me = 𐌲𐌰𐍄𐌰𐍅𐌴𐌹 𐌼𐌹𐌺 Luke 15:19, make you to become Mark 1:17

ye may understand my knowledge = mageiþ fraþjan frodein meinai Ephesians 3:4`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þiuþiþs þuk, Weiha,',
        grc: "Εὐλογητός εἶ, Ἅγιε·",
        en: "Blessed are you, O Holy One,",
      },
    },
    {
      text: {
        got: 'ïnliuhtei mik miþ anabusnim þeinaim.',
        grc: "φώτισόν με τοῖς δικαιώμασί σου.",
        en: "enlighten me with your commandments.",
      },
      notes: `Ephesians 3:9`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Frauja, armahairtein þeina ïn aiw;',
        grc: "Κύριε, τὸ ἔλεός σου εἰς τὸν αἰῶνα·",
        en: "Lord, your mercy remains forever,",
      },
    },
    {
      text: {
        got: 'ni uswandjais af waurstwam handiwe þeinaizo.',
        grc: "τὰ ἔργα τῶν χειρῶν σου μὴ παρίδῃς.",
        en: "do not turn away from the works of your hands.",
      },
      notes:
        `”optative ... more common than ‘ni + imp’”

away from him Luke 19:26

works of christ Matthew 11:2`
    },
  ], info)}</p>`


  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þus ïst gadob hazeins,',
        grc: "Σοὶ πρέπει αἶνος,",
        en: "To you belongs praise,",
      },
      notes:
        `𐌲𐌰𐌳𐍉𐌱 𐌹̈𐍃𐍄 Ephesians 5:3`
    },
    {
      text: {
        got: 'þus ïst gadob liuþ,',
        grc: "σοὶ πρέπει ὕμνος,",
        en: "to you belongs a hymn,",
      },
    },
    {
      text: {
        got: 'þus ïst gadob wulþus,',
        grc: "σοὶ δόξα πρέπει,",
        en: "to you belongs glory,",
      },
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'Attin, jah Sunau, jah Ahmin Weihamma,',
        grc: "τῷ Πατρί, καὶ τῷ Υἱῷ, καὶ τῷ Ἁγίῳ Πνεύματι,",
        en: "to the Father and the Son and the Holy Spirit,",
      },
    },
  ], info)}
<br>
${nowAndEver(info)}
</p>`


  article += html`<p>${amen(info)}</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Dauksaulaugei Leitils", en: "The Lesser Doxology" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025).", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Lesser Doxology</span>
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
