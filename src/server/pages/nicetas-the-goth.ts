import
{
  html,
  safeHtmlText,
  createArticleBody,
  toGothicLine,
  articleHead,
  createBody
} from '@server/tools'


// https://stjohndc.org/en/orthodoxy-foundation/saints/great-martyr-nicetas-goth
// https://orthodoxwiki.org/Nikitas_the_Goth
// https://molonlabe70.blogspot.com/2007/09/greatmartyr-nicetas-goth.html

global.lineId = 0

const title = '𐌼𐌹𐌺𐌹𐌻𐌼𐌰𐍂𐍄𐍅𐍂 𐌽𐌹𐌺𐌴𐍄𐌰 𐍃𐌰 𐌲𐌿𐍄𐌰'
let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Mikilmartwr Niketa sa Guta',
    en: "Great-Martyr Nicetas the Goth",
  },
  notes: `Niketa (Nικήτας) following an-stem aiwaggēlista from εὐαγγελιστής also first declension`
},)}</h1>
</header>`

article += html`<p>${[
  {
    text: {
      got: 'Weihs Niketa was guta gadraúhts',
      en: "Saint Nicetas was a Goth warrior",
    },
  },
  {
    text: {
      got: 'saei baúáida ïn fera áustramma Donaweis',
      en: "who lived on the eastern side of the Danube River",
    },
    notes: `*áustrs from PGm *austraz looking at attested snutrs from snutraz

*Donaweis taken from Neologisms from PGm *Dōnaujaz`
  },
  {
    text: {
      got: 'ïn markái Dakios andwaírþis.',
      en: "within the boundaries of present-day Romania.",
    },
    notes: `*Dakia taken from Neologisms for Romania`
  },
  {
    text: {
      got: 'Gawandida du Xristiskein þaírh Aipiskaupu Þaíaúfeilu Gutiskana,',
      en: "He converted to Christianity through the Gothic Bishop Theophilus,",
    },
  },
  {
    text: {
      got: 'inliuhtjand uskunþa Gutþiudos jah gamainjan ïn Gafáurdái Frumistái Nikaias ïn 325,',
      en: "a well-known enlightener of the Goths and a participant in the First Council of Nicaea in 325,",
    },
  },
  {
    text: {
      got: 'saei jah dáupida Niketan.',
      en: "who also had baptized Nicetas.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Ïnuh þizai mela was draúhtinassus ïn þaim gutam,',
      en: "At the time there was [internecine] warfare among the Goths",
    },
  },
  {
    text: {
      got: 'unte sa andstandands háiþns usbráideinái Xristiskeins,',
      en: "due the pagans opposing the spread of Christianity,",
    },
    notes: `Romans 13:2 andstandands + dative

usbráidjan + eins

Word for Christianity taken from here [url=https://got.wikipedia.org/wiki/%F0%90%8C%B9%F0%90%8C%B4%F0%90%8D%83%F0%90%8C%BF%F0%90%8D%83_%F0%90%8D%87%F0%90%8D%82%F0%90%8C%B9%F0%90%8D%83%F0%90%8D%84%F0%90%8C%BF%F0%90%8D%83]here[/url]
Using -isks ending`
  },
  {
    text: {
      got: 'þishun miþ Aþanareika, saei fijáida Xristiskans,',
      en: "in particular between Athanaric, who hated Christians,",
    },
  },
  {
    text: {
      got: 'jah Friþigaírna saei afar gabláuþiþ fram Aþanareika aftra gasloh ïmma miþ andstalda kaisaris Balainis arianiskis,',
      en: "and Fritigern who revenged a defeat by Athanaric with the help of Arian emperor Valens,",
    },
    notes: `"Fritigern appears in the Latinized form Fritigernus. The Gothic name is reconstructed as *Frithugairns 'desiring peace'"

*arianisks from arian + -isks`
  },
  {
    text: {
      got: 'gabáidjands ïmma du afleiþan faírra landa.',
      en: "forcing Athanaric into exile.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: "Afar sigis Friþigaírnis, sa gutans Xristiska nutun ƕeilos friþáus",
      en: "After Fritigern's victory the Christian Goths enjoyed a period of peace",
    },
  },
  {
    text: {
      got: "ïn þizai Aipiskaupus Wulfila arianisks, afarláista Aipiskaupaus Þaíaúfeilaus,",
      en: "during which arian Bishop Ulfilas, successor to Bishop Theophilus,",
    },
    notes: `afarlaistjan + galaista = afarláista "nachfolger"`
  },
  {
    text: {
      got: "gaskop alfabet gutiskana jah gaskeirida managos bokos ahmeinos fram krekrazdai ïn gutrazda.",
      en: "created the Gothic alphabet and translated many spiritual books from Greek into Gothic.",
    },
  },
  {
    text: {
      got: "Weihs Niketa, þaírh merein jah libáin gaguda seina, naþ mikilaba faúr tulgiþa galáubeináis Xristiskis ïn þaim gutam.",
      en: "Saint Nicetas, by his preaching and his pious life, greatly assisted the confirmation of the Christian faith among the Goths.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: "Akei, afar fau jera, Aþanareiks gawandida ïn land haimi sein miþ harja mikilamma",
      en: "However, after a few years, Athanaric returned to his homeland with a large army",
    },
  },
  {
    text: {
      got: "jah wigan ïn þaim gutam anastodida aftra.",
      en: "and warfare among the Goths started again.",
    },
  },
  {
    text: {
      got: "Swe dails toje seinis, raisida Aþanareiks wrakja sleidja wiþra þans Xristiskans.",
      en: "As part of his actions, Athanaric raised a fierce persecution against the Christians.",
    },
  },
  {
    text: {
      got: "Niketa, saei faþs ahmeins warþ ïn þaim gutam Xristiskin,",
      en: "Nicetas, who had become a spiritual leader among the Christian Goths,",
    },
  },
  {
    text: {
      got: "faírinoda Aþanareik unte afgudei jah unmanariggwei.",
      en: "denounced Athanaric for godlessness and cruelty.",
    },
    notes: `*unmanariggwei from unmanariggws`
  },
  {
    text: {
      got: "anahaíháit þans galáubeinans du fastan jah ni ogan martwrdáuþana.",
      en: "He called on the faithful to be firm and not to fear martyrdom.",
    },
    notes: `martwrdáuþs inspired from German Martyrertod`
  },
  {
    text: {
      got: "suns Aþanareiks habáida Niketan gafāhanana.",
      en: "Athanaric soon had Nicetas seized.",
    },
    notes: ``
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: "Niketa was þan atgibans du balweinim unmanariggwáim jah und andi ïn fon atwaúrpans þarei gadáuþnoda at Saiptaimbair 15, 372.",
      en: "Nicetas was then given over to cruel tortures and, finally, was thrown into a fire where he died on September 15, 372.",
    },
    notes: `cast into fire Mark 9:22`
  },
  {
    text: {
      got: "Frijonds Niketins, Xristisks haitans Marianus,",
      en: "A friend of Nicetas, a Christian named Marianus,",
    },
  },
  {
    text: {
      got: "bigat láibos seinos ïn naht jah brahta þos du Kilikia.",
      en: "found his remains during the night and transferred them to Cilicia.",
    },
  },
  {
    text: {
      got: "Þanaseiþs, faúratanja jah lekinassjus warþ faúra láibom Weihis Martwris Niketins.",
      en: "From that time, miracles and healings have occurred before the relics of the holy Martyr Nicetas.",
    },
  },
  {
    text: {
      got: "Dails laibos was seiþs brāhts du maunasterjon Bisauki Detsani ïn Serbia.",
      en: "Part of the relics were later transferred to the monastery of Visoki Dečani in Sairbia.",
    },
    notes: `*maunasterjo (μοναστήριον) looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from εὐαγγέλιον also second declension`
  },
].map(toGothicLine).join('')}</p>`


article += html`<p lang='en' class="annotation">
  <span class="nowrap">Nicetas the Goth</span>
  <span class="nowrap">in the Gothic language,</span>
  <br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
</p>`


const page = html`<!doctype html>
<html lang="got">
  <head>
    ${articleHead}
    <title>${safeHtmlText(title)}</title>
  </head>
  ${createBody(createArticleBody(article, ['got', 'en']))}
</html>`

export default page