import { fromLatin } from '@common/transliterate'
import
{
  html,
  createArticleBody,
  createArticleHeaders,
  PageGenerator,
  Anchor,
  toGothicLines,
} from '@server/tools'

// https://en.wikipedia.org/wiki/Hermenegild
// https://www.johnsanidopoulos.com/2010/11/holy-martyr-hermenegild-goth-killed-by.html
// https://www.oca.org/saints/lives/2023/11/01/103140-martyr-hermenegild-the-goth-of-spain
// https://www.tertullian.org/fathers/gregory_03_dialogues_book3.htm#C31

const slug = 'airmunagilds'
const title = 'Airmunagilds sa Guta Martyr Hispanjos'
const description = `${title}, skeireins ïn razdai gutiskai.`

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
      got: 'Airmunagilds sa Guta\nMartyr Hispanjos',
      en: "Martyr Hermenegild the Goth of Spain",
    },
    notes: `[url=https://en.wiktionary.org/wiki/Reconstruction:Proto-Germanic/ermunaz]airmuns[/url] + gilds`
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Dags gaminþjis:',
        en: "Day of remembrance:",
      },
    },
    {
      text: {
        got: '1 Naubaimbair (Aikklesjo Aurþaudaukseina Austra),',
        en: "1 November (Eastern Orthodox Church),",
      },
    },
    {
      text: {
        got: '13 Apreils (Aikklesjons wistros)',
        en: "13 April (Western churches)",
      },
    },
  ], info)}
  </p>`

  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Gawaurdja Gregaurjaus Weihis,\nBoka 3, Haubiþ 31',
      en: "St. Gregory's Dialogues, Book 3, Chapter 31",
    },
  },], info)}</h2>`

// De Germinigildo rege Liuvigildi Visigothorum regis filio, pro fide catholica ab eodem patre suo occiso.
// Περί

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Swe managaize, þaiei fram dailim Hispanjos qemun, gahausjands ufkunþa,',
        la: 'Sicut multorum, qui ab Hispaniarum partibus veniunt, relatione cognovimus,',
        en: "Not long since, as I have learned of many which came from Spain,",
      },
      notes: `"Popes historically used the majestic plural." and later mihi is used so likely singular.`
    },
    {
      text: {
        got: 'niujaleiko Airmunagilds þiudans sunus Liubagildis þiudanis wisigutane,',
        la: 'nuper Herminigildus rex Leuvigildi regix Visigothorum filius,',
        en: "king Hermigildus, son of Liuvigild, king of the Visigoths,",
      },
    },
    {
      text: {
        got: 'gawandeiþ sik fram airzein arianiskai du galaubeinai Kaþauleigai, þairh mannan gaaistaidana maistana Laiandru aipiskaupu Sevillas,',
        la: "ab Ariana hæresi ad fidem catholicam, viro reverentissimo Leandro Hispalitano episcopo,",
        en: "was from Arian heresy lately converted to the Catholic faith by the most reverent man Leander, Bishop of Seville,",
      },
      notes: `airzei seems to be used to mean heresy in the Skeireins while
airziþa to mean deceit in the Bible,
so -ei seems to build on the adjective and -iþa on the verb (action of the verb).

Following Alaiksandrus, Laiandrus`
    },
    {
      text: {
        got: 'faura maurgau mis ïn frijaþwai liubaleiko gawidana merjandan.',
        la: "dudum mihi in amicitiis familiariter juncto prædicante conversus est.",
        en: "with whom I was not long since familiarly acquainted;",
      },
      notes: `trying "faura maurgau" to mean vor kurzem, before shortly.

"recently bound with me in friendship"

Using frijaþwa for friendship, though still want something better perhaps.

"haftjandans godamma" Romans 12:9 uses dative and gawidan I feel would be similar

"Through the preaching bishop"`
    },
    {
      text: {
        got: 'Ïmma atta arianisks, duþe ei sik du samon airzein atwandjai, miþ launam fullaweisjan jah miþ ƕotom inagjan sokida.',
        la: "Quem pater Arianus, ut ad eamdem hærseim rediret, & præmiis suadere, & minis terrere conatus est.",
        en: "which young Prince, upon his conversion, his father, being an Arian, laboured both by large promises and terrible threats to draw again to his former error:",
      },
    },
    {
      text: {
        got: 'Ïþ ',
        la: "Cumque ille constantissime responderet, nunquam fe veram fidem posse relinquere, quam semel agnovisset, iratus pater eum privavit regno, rebusque exspoliavit omnibus.",
        en: "",
      },
    },
  ], info)}</p>`

/*
but when most constantly his son answered, that he would never forsake the true faith which he had once embraced, his father in great anger took away his kingdom, and beside deprived him of all wealth and riches; and perceiving that, with all this, his mind was nothing moved, he committed him to straight prison, laying irons both upon his neck and hands. Upon this, the young king Hermigildus began now to contemn his earthly kingdom, and to seek with great desire after the kingdom of heaven: and lying in prison fast bound, he prayed to almighty God in hair-cloth to send him heavenly comfort: and so much the more did he despise the glory of this transitory world, by how much he knew himself in that case that he had now nothing that could be taken from him.

When the solemn feast of Easter was come, his wicked father sent unto him in the dead of the night an Arian Bishop, to give him the communion of a sacrilegious |156 consecration, that he might thereby again recover his father's grace and favour: but the man of God, as he ought, sharply reprehended that Arian Bishop which came unto him, and giving him such entertainment as his deserts required, utterly rejected him; for albeit outwardly he lay there in bands, yet inwardly to himself he stood secure in the height of his own soul. The father, at the return of the Arian prelate, understanding these news, fell into such a rage that forthwith he sent his officers of execution to put to death that most constant confessor, in the very prison where he lay: which unnatural and bloody commandment was performed accordingly: for so soon as they came into the prison, they clave his brains with an hatchet, and so bereaved him or mortal life, having only power to take that from him which the holy martyr made small account of.

Afterward, for the publishing of his true glory to the world, there wanted not miracles from heaven: for in the night time singing was heard at his body: some also report that, in the night, burning lamps were seen in that place: by reason whereof his body, as of him that was a martyr, was worthily worshipped of all Christian people. But the wicked father and murtherer of his own son, albeit he was sorry that he had put him to death, yet was not his grief of that quality that it brought him to the state of salvation. For although he knew very well that the Catholic faith was the truth, yet, for fear of his people, he never deserved to be a professor thereof.

At length, falling sick, a little before his death, he commended his son Recharedus, who was to succeed him in the kingdom, and was yet an heretic, unto Bishop Leander, whom before he had greatly persecuted: that by his counsel and exhortation, he might likewise make him a member of the Catholic Church, as he had before made his brother Hermigildus; and when he had thus done, he departed this life. After whose death, |157 Recharedus the king, not following the steps of his wicked father, but his brother the martyr, utterly renounced Arianism: and laboured so earnestly for the restoring of religion, that he brought the whole nation of the Visigoths to the true faith of Christ, and would not suffer any that was an heretic in his country to bear arms and serve in the wars. And it is not to be admired that he became thus to be a preacher of the true faith, seeing he was the brother of a martyr, whose merits did help him to bring so many into the lap of God's Church: wherein we have to consider that he could never have effected all this, if king Hermigildus had not died for the testimony of true religion; for, as it is written: Unless the grain of wheat falling into the earth doth die, itself remaineth alone; but if it diey it bringeth forth much fruit. 33 This we see to prove true in the members, which before was verified in the head: for one died amongst the Visigoths that many might live, and of one grain that was sown for the faith, a great crop of faithful people sprung up.
*/


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Airmanagilds sa Guta Hispanjos", en: "Hermenegild the Goth of Spain" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Hermenegild the Goth of Spain</span>
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
