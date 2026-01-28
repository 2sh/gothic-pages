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
  letUsPrayToTheLord,
  lordHaveMercy,
  nowAndEver,
  ofTrinity,
  speakerChoir,
  speakerDeacon,
  speakerPriest,
  toYouOLord
} from '@server/lines'
import { fromLatin } from '@common/transliterate'


// https://www.chrysostomliturgy.org/text-of-the-divine-liturgy-greek-english


const slug = 'leiturgei-xrisaustaumaus'
const title = 'Leiturgei Gudiska Xrisaustaumaus'
const description = "Leiturgei Gudiska Ïohannis Xrisaustaumaus Weihis, skeireins ïn razdai gutiskai."

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
      got: 'Leiturgei Gudiska\nÏohannis Xrisaustaumaus Weihis',
      grc: "Θεία Λειτουργία Αγίου Ιωάννου Χρυσοστόμου",
      en: "Divine Liturgy of Saint John Chrysostom",
    },
    notes:
      `*Xrisaustaumus from Χρυσοστόμος, following declension of Alaiksandrus from Ἀλέξανδρος`
  }], info)}</h1>
</header>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Þiuþei, Fraujinond.',
        grc: "Ἑὐλόγησον, Δέσποτα.",
        en: "Master, give the blessing.",
      }
    },
  ], info)}
</p>`


  article += html`<p>
${speakerPriest(info)}
${toGothicLines([
    {
      text: {
        got: 'Þiuþido Þiudangardi',
        grc: "Εὐλογημένη ἡ Βασιλεία",
        en: "Blessed is the Kingdom",
      },
      notes: "Mark 11:10"
    },
  ], info)}
<br>
${ofTrinity(info)}
<br>
${nowAndEver(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${amen(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Ïn gawairþja,',
        grc: "Ἐν εἰρήνῃ,",
        en: "In peace,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur gawairþi ïupaþro',
        grc: "Ὑπὲρ τῆς ἄνωθεν εἰρήνης",
        en: "For the peace from above",
      },
      notes: `ὑπὲρ seems to translate to 𐍆𐌰𐌿𐍂, not 𐍆𐌰𐌿𐍂𐌰`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah naseinai saiwalo unsaraizo,',
        grc: "καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν,",
        en: "and for the salvation of our souls,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur gawairþi allaizos manasedais',
        grc: "Ὑπὲρ τῆς εἰρήνης τοῦ σύμπαντος κόσμου",
        en: "For the peace of the whole world,",
      },
      notes: `world Mark 14:9`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'tulgiþa weihos Gudis aikklesjono',
        grc: "εὐσταθείας τῶν ἁγίων τοῦ Θεοῦ Ἐκκλησιῶν",
        en: "for the stability of the holy churches of God,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah samaqiss allaize,',
        grc: "καὶ τῆς τῶν πάντων ἑνώσεως,",
        en: "and for the unity of all,",
      },
      notes:
        `choices: 𐍃𐌰𐌼𐌰𐌵𐌹𐍃𐍃 seems closest to union, coming together to speak and come
to an agreement; not 𐌰𐌻𐌻𐌰𐍅𐌴𐍂𐌴𐌹 as union doesn’t mean being friendly;
𐌼𐌹𐌸𐌵𐌹𐌸𐌰𐌽 says to be in conformity, but it sounds like one joining another,
instead of multiples coming together.`
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur hita weih razn',
        grc: "Ὑπὲρ τοῦ ἁγίου οἴκου τούτου",
        en: "For this holy house",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah ïn ïta miþ galaubeinai, aizai jah Gudis faurhtein ïnngaggandans,',
        grc: "καὶ τῶν μετὰ πίστεως, εὐλαβείας καὶ φόβου Θεοῦ εἰσιόντων ἐν αὐτῷ,",
        en: "and for those who enter it with faith, reverence, and the fear of God,",
      },
      notes: `*𐌰𐌹𐌶𐌰𐌹 from pgmc aizo.

God-fearing is gudafaurhts.`
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur gagudans jah Xristeinans Aurþaudaukseinans,',
        grc: "Ὑπὲρ τῶν εὐσεβῶν καὶ Ὀρθοδόξων Χριστιανῶν,",
        en: "For pious and Orthodox Christians,",
      },
      notes: `εὐσέβεια found in 1 Timothy 6:11;

1 Timothy 1:20: X -> 𐌺𐍃`
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur (griþs auhumistis gudjins) unsarana (namo),',
        grc: "Ὑπὲρ τοῦ (ἀρχιερατικοῦ βαθμοῦ) ἡμῶν (τοῦ δεῖνος),",
        en: "For (episcopal rank) (name),",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'gariuda praizbwtaireinz,',
        grc: "τοῦ τιμίου πρεσβυτερίου",
        en: "for the honorable presbyterate,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'andbahti ïn Xristau',
        grc: "τῆς ἐν Χριστῷ διακονίας",
        en: "for the diaconate in Christ",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'alla kleruns jah manageins',
        grc: "παντὸς τοῦ κλήρου καὶ τοῦ λαοῦ",
        en: "and for all the clergy and the people",
      },
      notes: `Taking Greek κλῆρος to mean clergy.`
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur þiuda gaguda unsara,',
        grc: "Ὑπὲρ τοῦ εὐσεβοῦς ἡμῶν ἔθνους,",
        en: "For our pious people,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'all reiki jah waldufni ïn þizai,',
        grc: "πάσης ἀρχῆς καὶ ἐξουσίας ἐν αὐτῷ,",
        en: "and all the sovereignty and authority in him,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur hita baurg,',
        grc: "Ὑπὲρ τῆς πόλεως ταύτης,",
        en: "For this city,",
      },
      notes: 'Matthew 9:35'
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'all baurge, lande,',
        grc: "πάσης πόλεως, χώρας",
        en: "and for every city and land,",
      },
      notes: `Every (thing) becomes all (word in plural genitive)`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah ïn þaim all bauandane galaubeinaize,',
        grc: "καὶ τῶν πίστει οἰκούντων ἐν αὐταῖς,",
        en: "and for the faithful who live in them,",
      },
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur wiþr goþ,',
        grc: "Ὑπὲρ εὐκρασίας ἀέρων,",
        en: "For favorable weather,",
      },
      notes: `*wiþr`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'fraiwiþa akrane airþos,',
        grc: "εὐφορίας τῶν καρπῶν τῆς γῆς,",
        en: "for an abundance of the fruits of the earth,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah mela gawairþeiga,',
        grc: "καὶ καιρῶν εἰρηνικῶν,",
        en: "and for peaceful times,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur farjandans, farandans,',
        grc: "Ὑπὲρ πλεόντων, ὁδοιπορούντων,",
        en: "For those who travel by land, sea, and air,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'siukandans, afmauidans, gafāhandans',
        grc: "νοσούντων, καμνόντων, αἰχμαλώτων",
        en: "for the sick, the suffering, the captives",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah nasein ïze,',
        grc: "καὶ τῆς σωτηρίας αὐτῶν,",
        en: "and for their salvation,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Faur uslausein unsara',
        grc: "Ὑπὲρ τοῦ ῥυσθῆναι ἡμᾶς",
        en: "For our deliverance",
      },
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'af all aglon, moda, sleiþein jah þaurft,',
        grc: "ἀπὸ πάσης θλίψεως, ὀργῆς, κινδύνου καὶ ἀνάγκης,",
        en: "from all affliction, wrath, danger, and necessity,",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Hleibei, nasei, armai jah gafastai unsis,',
        grc: "Ἀντιλαβοῦ, σῶσον, ἐλέησον καὶ διαφύλαξον ἡμᾶς",
        en: "Help us, save us, have mercy on us, and protect us,",
      },
      notes: `hleibida Israela (dative) Luke 1:54

nasei unsis Matthew 8:25

Luke 4:10 gafastan is with accusative but unsis can be accusative too.`,
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${lordHaveMercy(info)}
</p>`


  article += html`<p>
${speakerDeacon(info)}
${toGothicLines([
    {
      text: {
        got: 'Allweihaizos unwammaizos, þiuþidaizos, wulþagaizos',
        grc: "Τῆς Παναγίας ἀχράντου, ὑπερευλογημένης, ἐνδόξου Δεσποίνης",
        en: "Commemorating our most holy, pure, blessed, and glorious Lady,",
      },
      notes: `gamunan goes with gentive too.

Went with unwammaizos for ἀχράντου as the Greek is literally un-stained,
and unwamms is equal to vulgate immaculate multiple times in the NT.`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'unsaraizos Gudabairandeins jah aiwamagaþaizos Mariïns,',
        grc: "ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας",
        en: "the Theotokos and ever-virgin Mary,",
      },
      notes:
`Looking at the name *aiwareiks (Euric) to create aiwamagaþs for ever-virgin.`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'miþ weihaim weihaim gamunandans,',
        grc: "μετὰ πάντων τῶν Ἁγίων μνημονεύσαντες,",
        en: "with all the saints,",
      }
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'uns silbans jah uns misso',
        grc: "ἑαυτοὺς καὶ ἀλλήλους",
        en: "let us commend ourselves and one another",
      },
      notes: `uns misso Romans 14:13`
    },
  ], info)}
<br>
${toGothicLines([
    {
      text: {
        got: 'jah alla libain unsara Xristau Guda faurlagjaima.',
        grc: "καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.",
        en: "and our whole life to Christ our God.",
      }
    },
  ], info)}
<br>
${letUsPrayToTheLord(info)}
</p>`

  article += html`<p>
${speakerChoir(info)}
${toYouOLord(info)}
</p>`

  article = html`<div class="speech">${article}</div>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Leiturgei Gudiska", en: "Divine Liturgy" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "Ïohannis Xrisaustaumaus Weihis", en: "of Saint John Chrysostom" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025-2026).", en: "a translation by 2sh (2025-2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
<span class="nowrap">The Liturgy of Saint John Chrysostom</span>
<span class="nowrap">in the Gothic language,</span>
<span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025-2026).</span>
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
