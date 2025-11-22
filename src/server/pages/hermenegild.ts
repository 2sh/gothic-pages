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
// https://bkv.unifr.ch/de/works/cpl-1713/versions/vier-bucher-dialoge-bkv/divisions/87

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
      got: 'Gawaurdje Gregaurjaus Weihis\nBoka 3, Haubiþ 31',
      lat: 'Dialogorum, Lib. III, Caput XXI',
      en: "St. Gregory's Dialogues, Book 3, Chapter 31",
      de: "St. Gregors Dialoge, Buch 3, Kapitel 31"
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
        de: "Wie ich von vielen, die von Spanien hierher reisen, erfahren habe,",
      },
      notes: `"Popes historically used the majestic plural." and later mihi is used so likely singular.`
    },
    {
      text: {
        got: 'niujaleiko Airmunagilds þiudans sunus Liubagildis þiudanis wisigutane,',
        la: 'nuper Herminigildus rex Leuvigildi regix Visigothorum filius,',
        en: "king Hermigildus, son of Liuvigild, king of the Visigoths,",
        de: "hat sich erst vor kurzem König Herminigild, der Sohn des Westgotenkönigs Leovigild",
      },
    },
    {
      text: {
        got: 'gawandeiþ sik fram airzein arianiskai du galaubeinai Kaþauleigai þairh mannan gaaistaidana maistana Laiandru aipiskaupu Sevillas, faura maurgau mis ïn frijaþwai liubaleiko gawidana, merjandan.',
        la: "ab Ariana hæresi ad fidem catholicam, viro reverentissimo Leandro Hispalitano episcopo, dudum mihi in amicitiis familiariter juncto prædicante conversus est.",
        en: "was from Arian heresy lately converted to the Catholic faith by the most reverent man Leander, Bishop of Seville, with whom I was not long since familiarly acquainted;",
        de: "auf die Predigt Leanders hin, des hochwürdigsten Bischofs von Sevilla, meines langjährigen, vertrautesten Freundes, von der arianischen Irrlehre zum katholischen Glauben bekehrt.",
      },
      notes: `airzei seems to be used to mean heresy in the Skeireins while
airziþa to mean deceit in the Bible,
so -ei seems to build on the adjective and -iþa on the verb (action of the verb).

Following Alaiksandrus, Laiandrus

þairh uns merjada Corinthians II 1:19

trying "faura maurgau" to mean vor kurzem, before shortly.

"recently bound with me in friendship"

Using frijaþwa for friendship, though still want something better perhaps.

"haftjandans godamma" Romans 12:9 uses dative, and gawidan I feel would be similar

"Through the preaching bishop"`
    },
    {
      text: {
        got: 'Ïmma sa atta arianiska, dūþe ei sik du samon airzein atwandjai, launam fullaweisjan jah ƕotom inagjan sokida.',
        la: "Quem pater Arianus, ut ad eamdem hærseim rediret, & præmiis suadere, & minis terrere conatus est.",
        en: "which young Prince, upon his conversion, his father, being an Arian, laboured both by large promises and terrible threats to draw again to his former error:",
        de: 'Der arianische Vater suchte ihn durch Versprechungen und Drohungen wieder zur Rückkehr in die Häresie zu bewegen.',
      },
      notes: `launam and ƕotom are instrumental datives (with)`
    },
    {
      text: {
        got: 'Ïþ biþe unsweibands andhof, ei þo galaubein sunjon ni aiw bileiþan mahtedi, þoei suman ufkunþedi, sa atta þwairhs binam af imma þiudinassu jah birauboda alla aigina.',
        la: "Cumque ille constantissime responderet, nunquam se veram fidem posse relinquere, quam semel agnovisset, iratus pater eum privavit regno, rebusque exspoliavit omnibus.",
        en: "but when most constantly his son answered, that he would never forsake the true faith which he had once embraced, his father in great anger took away his kingdom, and beside deprived him of all wealth and riches;",
        de: 'Da er aber mit größter Standhaftigkeit erwiderte, er könne niemals den einmal erkannten rechten Glauben verlassen, nahm ihm der erzürnte Vater die Königsherrschaft und alles, was er besaß;',
      },
    },
    {
      text: {
        got: "Jan'ni swa mahtedi godein ahins ïs waikjan, galagjands ïna ïn karkara hardja, gaband bi halsaggan jah handuns ïs eisarnam.",
        la: "Cumque nec sic virtutem mentis illius emollire valuisset, in arcta illum custodia concludens, collum manusque illius ferro ligavit.",
        en: "and perceiving that, with all this, his mind was nothing moved, he committed him to straight prison, laying irons both upon his neck and hands.",
        de: 'und da er auch durch dieses Mittel seinen starken Geist nicht zu beugen vermochte, ließ er ihn in einen engen Kerker werfen und ihm Hals und Hände in Eisen schlagen.',
      },
      notes: `'cumque' was used previously so don't need to use 'ïþ' again really,
so using 'jah' like the English translation with 'and',
and Corinthians I 14:21 has "et nec sic" and is "jan~ni swa"
(as displayed on Wulfila.be) in Gothic. "jan~ni" coming from jah + ni,
I decided to keep them visually separate for clarity,
but using an apostrophe as it's less intrusive and is used in
a lot of other languages too for marking contraction.

And not in that manner was he able to weaken the strength of his mind,..

"in karkara galagjaza." Matthew 5:25

hardus to mean austere, using it for the arcta meaning

"ana halsaggan" Mark 9:42, using halsagga instead of hals to emphasise the tightness

"eisarnam bi fotuns gabuganaim jah naudibandjom eisarneinaim gabundans" Mark 5:4`
    },
    {
      text: {
        got: 'Swah anastodida Airmunagilds sa þiudans jugga þiudangardja airþeina frakunnan, ïn sakkau gabundans ligan, Guda allwaldand du gaswinþnan bidos usgiutan, jah filu mais hauhaba wulþu airþos ƕeilaƕairbaizos frakunnan, und ƕan filu ïs gabundans froþ ei ni wesi þatei mahtedi afnuman wairþan.',
        la: "Cœpit itaque idem Herminigildus rex juvenis terrenum regnum despicere, in ciliciis vinculatus jacere, omnipotenti Deo ad confortandum se preces effundere, tantoque sublimius gloriam transeuntis mundi despicere, quanto & religatus agnoverat, nil fuisse quod potuerit auferri.",
        en: "Upon this, the young king Hermigildus began now to condemn his earthly kingdom, and to seek with great desire after the kingdom of heaven: and lying in prison fast bound, he prayed to almighty God in hair-cloth to send him heavenly comfort: and so much the more did he despise the glory of this transitory world, by how much he knew himself in that case that he had now nothing that could be taken from him.",
        de: "So lernte der junge König Herminigild das irdische Königreich verachten, und voll starker Sehnsucht das himmlische suchend lag er im Büßergewand in seinen Fesseln, bat den allmächtigen Gott um Stärke und verachtete um so mehr die Herrlichkeit der vergänglichen Welt, als er gerade in seinem Kerker die Nichtigkeit dessen erkannte, was ihm hatte genommen werden können.",
      },
      notes: `"þatei magi" Mark 7:15, magan can be used for things too, not just people`
  },
  ], info)}</h2>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Aþþan þan qam dags dulþais Paska, ïn þahainai riqizis nahts insandida sa airzja atta aipiskaupu arianiskana du ïmma, dūþe us handau ïs gamaindūþ gaweihainais unairknaizos andnemi, eiþan þairh þata aftra anst attins ganuti.',
        la: "Superveniente autem Paschalis festivitatis die, intempestæ noctis silentio ad eum perfidus pater Arianum episcopum misit, ut ex ejus manu sacrilegæ consecrationis communionem perciperet, atque per hoc ad patris gratiam redire mereretur.",
        en: "When the solemn feast of Easter was come, his wicked father sent unto him in the dead of the night an Arian Bishop, to give him the communion of a sacrilegious consecration, that he might thereby again recover his father's grace and favour:",
        de: "Da nun aber das Osterfest nahte, sandte der ketzerische Vater in der Stille der Nacht einen arianischen Bischof zu ihm, damit er aus seiner Hand sakrilegisch die heilige Kommunion empfange und so verdiene, beim Vater wieder in Gunst zu gelangen.",
      },
      notes: `"aþþan þan qam" (Cum autem venisset) Galatians 2:11

intempestæ noctis - darkest night, gone with "of the darkness of the night."
riqis old norse cognate røkkr meaning twilight so fitting.

gamainduþs bloþis fraujins "communion of the blood of Christ" Corinthians I 10:16

consecrate is gaweihan, class 3 + ains => *gaweihains for consecration.

Using unairkns for sacrilegious.
It feels fitting with airkns being holy but also having
a "genuine, sincere, pure" meaning, pious perhaps. unairkns being a distortion of that,
impure, ungenuine, inauthentic.
Also, Timothy I 1:9 & Timothy II 3:2 have ἀνοσίοις as unairkns,
ἀνοσίοις meaning "1. impious, godless; 2. sacrilegious".`
    },
    {
      text: {
        got: '...',
        la: "Sed vir Deo deditus, Ariano episcopo venienti exprobravit ut debuit, ejusque a se perfidiam dignis increpationibus repulit: quia etsi exterius jacebat ligatus, apud se tamen in magno mentis culmine stabat secutus.",
        en: "but the man of God, as he ought, sharply reprehended that Arian Bishop which came unto him, and giving him such entertainment as his deserts required, utterly rejected him; for albeit outwardly he lay there in bands, yet inwardly to himself he stood secure in the height of his own soul.",
        de: "Aber der Mann, der sich Gott geweiht hatte, wies den arianischen Bischof bei seinem Erscheinen nach Gebühr zurecht und verwarf seine Ketzerei mit entsprechendem Tadel; denn wenn er auch äußerlich in Fesseln lag, stand er in seinem Innern unerschütterlich auf großer Geisteshöhe.",
      },
      notes: ``
    }
  ], info)}</p>`

/*

  The father, at the return of the Arian prelate, understanding these news, fell into such a rage that forthwith he sent his officers of execution to put to death that most constant confessor, in the very prison where he lay: which unnatural and bloody commandment was performed accordingly: for so soon as they came into the prison, they clave his brains with an hatchet, and so bereaved him or mortal life, having only power to take that from him which the holy martyr made small account of.

Afterward, for the publishing of his true glory to the world, there wanted not miracles from heaven: for in the night time singing was heard at his body: some also report that, in the night, burning lamps were seen in that place: by reason whereof his body, as of him that was a martyr, was worthily worshipped of all Christian people. But the wicked father and murtherer of his own son, albeit he was sorry that he had put him to death, yet was not his grief of that quality that it brought him to the state of salvation. For although he knew very well that the Catholic faith was the truth, yet, for fear of his people, he never deserved to be a professor thereof.

At length, falling sick, a little before his death, he commended his son Recharedus, who was to succeed him in the kingdom, and was yet an heretic, unto Bishop Leander, whom before he had greatly persecuted: that by his counsel and exhortation, he might likewise make him a member of the Catholic Church, as he had before made his brother Hermigildus; and when he had thus done, he departed this life. After whose death, |157 Recharedus the king, not following the steps of his wicked father, but his brother the martyr, utterly renounced Arianism: and laboured so earnestly for the restoring of religion, that he brought the whole nation of the Visigoths to the true faith of Christ, and would not suffer any that was an heretic in his country to bear arms and serve in the wars. And it is not to be admired that he became thus to be a preacher of the true faith, seeing he was the brother of a martyr, whose merits did help him to bring so many into the lap of God's Church: wherein we have to consider that he could never have effected all this, if king Hermigildus had not died for the testimony of true religion; for, as it is written: Unless the grain of wheat falling into the earth doth die, itself remaineth alone; but if it diey it bringeth forth much fruit. 33 This we see to prove true in the members, which before was verified in the head: for one died amongst the Visigoths that many might live, and of one grain that was sown for the faith, a great crop of faithful people sprung up.
*/

/*
Da nun aber das Osterfest nahte, sandte der ketzerische Vater in der Stille der Nacht einen arianischen Bischof zu ihm, damit er aus seiner Hand sakrilegisch die heilige Kommunion empfange und so verdiene, beim Vater wieder in Gunst zu gelangen. Aber der Mann, der sich Gott geweiht hatte, wies den arianischen Bischof bei seinem Erscheinen nach Gebühr zurecht und verwarf seine Ketzerei mit entsprechendem Tadel; denn wenn er auch äußerlich in Fesseln lag, stand er in seinem Innern unerschütterlich auf großer Geisteshöhe. Als der arianische Bischof zurückkehrte, schäumte der arianische Vater vor Zorn und sandte seine Schergen, den standhaften Bekenner Gottes in seinem Kerker zu töten; und das geschah auch. Denn kaum waren sie bei ihm eingetreten, spalteten sie ihm mit einem Beil das Haupt und nahmen ihm das leibliche Leben; denn nur das konnten sie an ihm töten, was der Ermordete selbst an sich gering geschätzt hatte. Es blieben aber die Wunder von oben nicht aus, um seine wahrhaft erlangte Herrlichkeit zu zeigen. Denn man hörte in der Stille der Nacht Psalmengesang beim Leichnam des Königs und Märtyrers, der deshalb wahrhaftig König ist, weil er auch Märtyrer ist. Einige erzählen auch, daß sich dort zur Nachtzeit brennende Lampen zeigten; so kam es, S. 165 daß sein Leichnam als der eines Märtyrers mit Recht von allen Gläubigen verehrt wurde. Sein Vater, der Ketzer und Mörder, wurde zwar von Reue ergriffen und es schmerzte ihn seine Tat, jedoch nicht so, daß er dadurch das Heil erlangt hätte. Denn er sah zwar ein, daß der katholische Glaube der wahre sei, aber er ließ sich durch die Furcht vor seinem Volke einschüchtern und verdiente nicht, zu jenem zu gelangen. Als er krank wurde und es mit ihm zum Sterben kam, empfahl er seinen Sohn, den König Reccared, den er in der Irrlehre hinterließ, dem Bischof Leander, den er früher so sehr gekränkt hatte, und ließ ihn bitten, er möge an ihm das gleiche tun, was er durch seine Ermahnungen an dessen Bruder getan habe. Als er diese Anempfehlung ausgesprochen hatte, starb er. Nach seinem Tode folgte der König Reccared nicht seinem häretischen Vater nach, sondern dem Bruder und Märtyrer, bekehrte sich von der verwerflichen arianischen Irrlehre und führte das ganze Volk der Westgoten zum wahren Glauben, ja, er gestattete keinem in seinem Reiche Kriegsdienste zu tun, der sich vermesse, durch ketzerische Gesinnung ein Feind des Reiches Gottes zu sein. Kein Wunder, daß der Bruder eines Märtyrers ein Verkündiger des Glaubens wurde; denn die Verdienste des Bruders sind ihm auch behilflich, so viele in den Schoß des allmächtigen Gottes zurückführen zu können. Dabei müssen wir erwägen, daß das alles nicht so gekommen wäre, wenn der König Herminigild nicht für die Wahrheit den Tod erlitten hätte. Denn es steht geschrieben: „Wenn das Weizenkorn nicht in die Erde fällt und stirbt, so bleibt es allein; wenn es aber stirbt, so bringt es viele Frucht.”2 Wir sehen, daß an den Gliedern sich erfüllt, was am Haupte geschehen ist. Beim Volke der Westgoten starb nämlich einer, damit viele leben; und da ein Körnlein gläubig fiel, um das Leben der Seelen zu erlangen, ist eine reiche Saat daraus aufgegangen. S. 166
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
