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
let content = ''


content += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Leiturgia Gudiska\nXrisaustaumaus',
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


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Þiuþei, Fraujinōnd.',
        el: "Ἑὐλόγησον, Δέσποτα.",
        en: "Master, give the blessing.",
      }
    },
  ].map(toGothicLine).join('\n')}
</p>`


content += html`<p>
${speakerPriest}
${[
    {
      text: {
        got: 'Þiuþidō Þiudangardi',
        el: "Εὐλογημένη ἡ Βασιλεία",
        en: "Blessed is the Kingdom",
      },
      notes: "Mark 11:10"
    },
  ].map(toGothicLine).join('\n')}
<br>
${ofTrinity}
<br>
${nowAndEver}
</p>`

content += html`<p>
${speakerChoir}
${amen}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Ïn gawaírþja,',
        el: "Ἐν εἰρήνῃ,",
        en: "In peace,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gawaírþi ïupaþrō',
        el: "Ὑπὲρ τῆς ἄνωθεν εἰρήνης",
        en: "For the peace from above",
      },
      notes: `ὑπὲρ seems to translate to 𐍆𐌰𐌿𐍂, not 𐍆𐌰𐌿𐍂𐌰`
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'jah naseinai saiwalō unsaraizō,',
        el: "καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν,",
        en: "and for the salvation of our souls,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gawaírþi allaizōs manasēdais',
        el: "Ὑπὲρ τῆς εἰρήνης τοῦ σύμπαντος κόσμου",
        en: "For the peace of the whole world,",
      },
      notes: `world Mark 14:9`
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'tulgiþa weihōs Gudis aíkklēsjōnō',
        el: "εὐσταθείας τῶν ἁγίων τοῦ Θεοῦ Ἐκκλησιῶν",
        en: "for the stability of the holy churches of God,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'jah samaqiss allaizē,',
        el: "καὶ τῆς τῶν πάντων ἑνώσεως,",
        en: "and for the unity of all,",
      },
      notes:
        `choices: 𐍃𐌰𐌼𐌰𐌵𐌹𐍃𐍃 seems closest to union, coming together to speak and come
to an agreement; not 𐌰𐌻𐌻𐌰𐍅𐌴𐍂𐌴𐌹 as union doesn't mean being friendly;
𐌼𐌹𐌸𐌵𐌹𐌸𐌰𐌽 says to be in conformity, but it sounds like one joining another,
instead of multiples coming together.`
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr hita weih razn',
        el: "Ὑπὲρ τοῦ ἁγίου οἴκου τούτου",
        en: "For this holy house",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'jah ïn ïta miþ galaubeinai, aizai jah Gudis faúrhtein ïnngaggandans,',
        el: "καὶ τῶν μετὰ πίστεως, εὐλαβείας καὶ φόβου Θεοῦ εἰσιόντων ἐν αὐτῷ,",
        en: "and for those who enter it with faith, reverence, and the fear of God,",
      },
      notes: `*𐌰𐌹𐌶𐌰𐌹 from pgmc aizō.

God-fearing is gudafaúrhts.`
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr gagudans jah Aurþaudaukseinans Xristeinans,',
        el: "Ὑπὲρ τῶν εὐσεβῶν καὶ Ὀρθοδόξων Χριστιανῶν,",
        en: "For pious and Orthodox Christians,",
      },
      notes: `εὐσέβεια found in 1 Timothy 6:11;

need checking: 𐍇𐍂𐌹𐍃𐍄-𐌴𐌹𐌽𐍃 and *𐌰𐌿𐍂𐌸𐌰𐌿𐌳𐌰𐌿𐌺𐍃-𐌴𐌹𐌽𐍃;

1 Timothy 1:20: X -> 𐌺𐍃`
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: 'Faúr <[TODO]>,',
        el: "Ὑπὲρ τοῦ (ἀρχιερατικοῦ βαθμοῦ) ἡμῶν (τοῦ δεῖνος),",
        en: "For (episcopal rank) (name),",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'gariuda praízbwtaíreinz,',
        el: "τοῦ τιμίου πρεσβυτερίου",
        en: "for the honorable presbyterate,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'andbahti ïn Xristau',
        el: "τῆς ἐν Χριστῷ διακονίας",
        en: "for the diaconate in Christ",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "παντὸς τοῦ κλήρου καὶ τοῦ λαοῦ",
        en: "and for all the clergy and the people",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ τοῦ εὐσεβοῦς ἡμῶν ἔθνους,",
        en: "For our country, for the president,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "πάσης ἀρχῆς καὶ ἐξουσίας ἐν αὐτῷ,",
        en: "and for all in public service,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
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
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'all baúrgē jah all landē,',
        el: "πάσης πόλεως, χώρας",
        en: "and for every city and land,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: 'jah ïn þaim all báuandanē galaubeinaizē,',
        el: "καὶ τῶν πίστει οἰκούντων ἐν αὐταῖς,",
        en: "and for the faithful who live in them,",
      },
      notes: `this probably needs correcting/improving`
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
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
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "εὐφορίας τῶν καρπῶν τῆς γῆς,",
        en: "for an abundance of the fruits of the earth,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ καιρῶν εἰρηνικῶν,",
        en: "and for peaceful times,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ πλεόντων, ὁδοιπορούντων,",
        en: "For those who travel by land, sea, and air,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "νοσούντων, καμνόντων, αἰχμαλώτων",
        en: "for the sick, the suffering, the captives",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ τῆς σωτηρίας αὐτῶν,",
        en: "and for their salvation,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ὑπὲρ τοῦ ῥυσθῆναι ἡμᾶς",
        en: "For our deliverance",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἀπὸ πάσης θλίψεως, ὀργῆς, κινδύνου καὶ ἀνάγκης,",
        en: "from all affliction, wrath, danger, and necessity,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Ἀντιλαβοῦ, σῶσον, ἐλέησον καὶ διαφύλαξον ἡμᾶς",
        en: "Help us, save us, have mercy on us, and protect us,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${lordHaveMercy}
</p>`


content += html`<p>
${speakerDeacon}
${[
    {
      text: {
        got: '<[TODO]>',
        el: "Τῆς Παναγίας ἀχράντου, ὑπερευλογημένης, ἐνδόξου Δεσποίνης",
        en: "Commemorating our most holy, pure, blessed, and glorious Lady,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας",
        en: "the Theotokos and ever-virgin Mary,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "μετὰ πάντων τῶν Ἁγίων μνημονεύσαντες,",
        en: "with all the saints,",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "ἑαυτοὺς καὶ ἀλλήλους",
        en: "let us commend ourselves and one another",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${[
    {
      text: {
        got: '<[TODO]>',
        el: "καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.",
        en: "and our whole life to Christ our God.",
      }
    },
  ].map(toGothicLine).join('\n')}
<br>
${letUsPrayToTheLord}
</p>`

content += html`<p>
${speakerChoir}
${toYouOLord}
</p>`

content = html`<div class="speech">${content}</div>`



content += html`<p lang='en' class="annotation">
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
  ${createArticleBody(content, undefined, ['got', 'el', 'en'])}
</html>`

export default page