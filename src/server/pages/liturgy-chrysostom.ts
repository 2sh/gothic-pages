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


// https://www.chrysostomliturgy.org/text-of-the-divine-liturgy-greek-english


global.lineId = 0

const title = '𐌻𐌴𐌹𐍄𐌿𐍂𐌲𐌹𐌰 𐌲𐌿𐌳𐌹𐍃𐌺𐌰 𐍇𐍂𐌹𐍃𐌰𐌿𐍃𐍄𐌰𐌿𐌼𐌰𐌿𐍃'
let article = ''


article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Leiturgia Gudiska\nXrisaustaumáus',
    el: "Θεία Λειτουργία του Χρυσοστόμου",
    en: "Divine Liturgy of Chrysostom",
  },
  notes:
    `*leiturgia from Λειτουργία (female), looking at 𐌴𐌹 in 𐌷𐌰𐌹𐍂𐌰𐌹𐍃𐌴𐌹𐍃 from αἱρέσεις
and in 𐌳𐌰𐍅𐌴𐌹𐌳 from Δαυείδ.

Gudisks seems to come after the noun (Skeireins 1:5)

*Xrisaustaumus from Χρυσοστόμος, following declension of Alaíksandrus from Ἀλέξανδρος`
})}</h1>
</header>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Þiuþei, Fráujinond.',
        el: "Ἑὐλόγησον, Δέσποτα.",
        en: "Master, give the blessing.",
      }
    },
  ].map(toGothicLine).join('')}
</p>`


article += html`<p>
${speakerPriest}
${[
    {
      text: {
        got: 'Þiuþido Þiudangardi',
        el: "Εὐλογημένη ἡ Βασιλεία",
        en: "Blessed is the Kingdom",
      },
      notes: "Mark 11:10"
    },
  ].map(toGothicLine).join('')}
<br>
${ofTrinity}
<br>
${nowAndEver}
</p>`

article += html`<p>
${speakerChoir}
${amen}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Ïn gawaírþja,',
        el: "Ἐν εἰρήνῃ,",
        en: "In peace,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gawaírþi ïupaþro',
        el: "Ὑπὲρ τῆς ἄνωθεν εἰρήνης",
        en: "For the peace from above",
      },
      notes: `ὑπὲρ seems to translate to 𐍆𐌰𐌿𐍂, not 𐍆𐌰𐌿𐍂𐌰`
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'jah naseinái sáiwalo unsaráizo,',
        el: "καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν,",
        en: "and for the salvation of our souls,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gawaírþi alláizos manasedáis',
        el: "Ὑπὲρ τῆς εἰρήνης τοῦ σύμπαντος κόσμου",
        en: "For the peace of the whole world,",
      },
      notes: `world Mark 14:9`
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'tulgiþa weihos Gudis aikklesjono',
        el: "εὐσταθείας τῶν ἁγίων τοῦ Θεοῦ Ἐκκλησιῶν",
        en: "for the stability of the holy churches of God,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'jah samaqiss alláize,',
        el: "καὶ τῆς τῶν πάντων ἑνώσεως,",
        en: "and for the unity of all,",
      },
      notes:
        `choices: 𐍃𐌰𐌼𐌰𐌵𐌹𐍃𐍃 seems closest to union, coming together to speak and come
to an agreement; not 𐌰𐌻𐌻𐌰𐍅𐌴𐍂𐌴𐌹 as union doesn't mean being friendly;
𐌼𐌹𐌸𐌵𐌹𐌸𐌰𐌽 says to be in conformity, but it sounds like one joining another,
instead of multiples coming together.`
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr hita weih razn',
        el: "Ὑπὲρ τοῦ ἁγίου οἴκου τούτου",
        en: "For this holy house",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'jah ïn ïta miþ galáubeinái, áizái jah Gudis faúrhtein ïnngaggandans,',
        el: "καὶ τῶν μετὰ πίστεως, εὐλαβείας καὶ φόβου Θεοῦ εἰσιόντων ἐν αὐτῷ,",
        en: "and for those who enter it with faith, reverence, and the fear of God,",
      },
      notes: `*𐌰𐌹𐌶𐌰𐌹 from pgmc aizo.

God-fearing is gudafaúrhts.`
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gagudans jah Aurþaudaukseinans Xristiskans,',
        el: "Ὑπὲρ τῶν εὐσεβῶν καὶ Ὀρθοδόξων Χριστιανῶν,",
        en: "For pious and Orthodox Christians,",
      },
      notes: `εὐσέβεια found in 1 Timothy 6:11;

need checking: 𐍇𐍂𐌹𐍃𐍄-𐌴𐌹𐌽𐍃 and *𐌰𐌿𐍂𐌸𐌰𐌿𐌳𐌰𐌿𐌺𐍃-𐌴𐌹𐌽𐍃;

1 Timothy 1:20: X -> 𐌺𐍃`
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr <[TODO]>,',
        el: "Ὑπὲρ τοῦ (ἀρχιερατικοῦ βαθμοῦ) ἡμῶν (τοῦ δεῖνος),",
        en: "For (episcopal rank) (name),",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'gariuda praizbwtaireinz,',
        el: "τοῦ τιμίου πρεσβυτερίου",
        en: "for the honorable presbyterate,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'andbahti ïn Xristáu',
        el: "τῆς ἐν Χριστῷ διακονίας",
        en: "for the diaconate in Christ",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "παντὸς τοῦ κλήρου καὶ τοῦ λαοῦ",
        en: "and for all the clergy and the people",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ τοῦ εὐσεβοῦς ἡμῶν ἔθνους,",
        en: "For our country, for the president,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "πάσης ἀρχῆς καὶ ἐξουσίας ἐν αὐτῷ,",
        en: "and for all in public service,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr hita baúrg,',
        el: "Ὑπὲρ τῆς πόλεως ταύτης,",
        en: "For this city,",
      },
      notes: 'Matthew 9:35'
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'all baúrge jah all lande,',
        el: "πάσης πόλεως, χώρας",
        en: "and for every city and land,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: 'jah ïn þáim all baúandane galáubeináize,',
        el: "καὶ τῶν πίστει οἰκούντων ἐν αὐταῖς,",
        en: "and for the faithful who live in them,",
      },
      notes: `this probably needs correcting/improving`
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr goþ wiþr,',
        el: "Ὑπὲρ εὐκρασίας ἀέρων,",
        en: "For favorable weather,",
      },
      notes: `*𐍅𐌹𐌸𐍂

need to find something better than 𐌲𐍉𐌸.`
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "εὐφορίας τῶν καρπῶν τῆς γῆς,",
        en: "for an abundance of the fruits of the earth,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ καιρῶν εἰρηνικῶν,",
        en: "and for peaceful times,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ πλεόντων, ὁδοιπορούντων,",
        en: "For those who travel by land, sea, and air,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "νοσούντων, καμνόντων, αἰχμαλώτων",
        en: "for the sick, the suffering, the captives",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ τῆς σωτηρίας αὐτῶν,",
        en: "and for their salvation,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ τοῦ ῥυσθῆναι ἡμᾶς",
        en: "For our deliverance",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἀπὸ πάσης θλίψεως, ὀργῆς, κινδύνου καὶ ἀνάγκης,",
        en: "from all affliction, wrath, danger, and necessity,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ἀντιλαβοῦ, σῶσον, ἐλέησον καὶ διαφύλαξον ἡμᾶς",
        en: "Help us, save us, have mercy on us, and protect us,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


article += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Τῆς Παναγίας ἀχράντου, ὑπερευλογημένης, ἐνδόξου Δεσποίνης",
        en: "Commemorating our most holy, pure, blessed, and glorious Lady,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας",
        en: "the Theotokos and ever-virgin Mary,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "μετὰ πάντων τῶν Ἁγίων μνημονεύσαντες,",
        en: "with all the saints,",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἑαυτοὺς καὶ ἀλλήλους",
        en: "let us commend ourselves and one another",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.",
        en: "and our whole life to Christ our God.",
      }
    },
  ].map(toGothicLine).join('')}
<br>
${letUsPrayToTheLord}
</p>`

article += html`<p>
${speakerChoir}
${toYouOLord}
</p>`

article = html`<div class="speech">${article}</div>`



article += html`<p lang='en' class="annotation">
<span class="nowrap">The Liturgy of Saint John Chrysostom</span>
<span class="nowrap">in the Gothic language,</span>
<br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createBody(createArticleBody(article, ['got', 'el', 'en']))}
</html>`

export default page