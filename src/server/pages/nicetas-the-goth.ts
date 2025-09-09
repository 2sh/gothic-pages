import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
} from '@server/tools'


// https://stjohndc.org/en/orthodoxy-foundation/saints/great-martyr-nicetas-goth
// https://orthodoxwiki.org/Nikitas_the_Goth
// https://molonlabe70.blogspot.com/2007/09/greatmartyr-nicetas-goth.html

// https://pemptousia.com/2022/09/%ce%b1-goth-saint-the-holy-martyr-nikitas-15-september/
// https://www.saintsophiadc.org/%CE%B1-goth-saint-the-holy-martyr-nikitas/

// https://www.worldhistory.org/Athanaric/

// another version: https://web.archive.org/web/20170502085631/http://westserbdio.org/en/prologue/633-september-15
// in original Serbian: https://www.eparhija-prizren.org/prolog-09_15/

// https://www.worldhistory.org/Athanaric/

global.lineId = 0

const title = '𐌼𐌹𐌺𐌹𐌻𐌼𐌰𐍂𐍄𐍅𐍂 𐌽𐌹𐌺𐌴𐍄𐌰 𐍃𐌰 𐌲𐌿𐍄𐌰'
let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Mikilmartwr Niketa sa Guta',
    en: "Great-Martyr Nicetas the Goth",
  },
  notes: `Niketa (Nικήτας) following https://www.nthuleen.com/papers/755gothpaper.html for naming, n-stem without -s as I can imagine it became the norm.`
},)}</h1>
</header>`

article += html`<p>${[
  {
    text: {
      got: 'Dags gamundáis: 15 Saiptaimbair',
      en: "Day of remembrance: 15 September",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Weihs Niketa was guta gabaurans',
      en: "Saint Nicetas was a Goth by birth",
    },
    notes: ``
  },
  {
    text: {
      got: 'jah báuáida ïn fera áustramma Donaweis',
      en: "and lived on the eastern side of the Danube River",
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
      got: 'Gawandida du Xristeinein þaírh Aípiskaúpu Þaíaúfeilu gutiskana,',
      en: "He converted to Christianity through the Gothic Bishop Theophilus,",
    },
  },
  {
    text: {
      got: 'inliuhtjand uskunþa gutþiudos jah gamáinjan ïn Gafáurdái Frumistái Nikaias ïn 325,',
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
      got: 'unte háiþnos andstandandans usbráideinái Xristeineins,',
      en: "due the pagans opposing the spread of Christianity,",
    },
    notes: `Romans 13:2 andstandands + dative

usbráidjan + eins

Word for Christianity taken from here [url=https://got.wikipedia.org/wiki/%F0%90%8C%B9%F0%90%8C%B4%F0%90%8D%83%F0%90%8C%BF%F0%90%8D%83_%F0%90%8D%87%F0%90%8D%82%F0%90%8C%B9%F0%90%8D%83%F0%90%8D%84%F0%90%8C%BF%F0%90%8D%83]here[/url]
Using -isks ending`
  },
  {
    text: {
      got: 'þishun Aþanareikis, saei fijáida Xristeinana,',
      en: "in particular between Athanaric, who hated Christians,",
    },
  },
  {
    text: {
      got: 'jah Friþigaírnis saei afar gabláuþiþ fram Aþanareika aftra gasloh ïmma miþ andstalda kaisaris Balainis arianiskis,',
      en: "and Fritigern who revenged a defeat by Athanaric with the help of Arian emperor Valens,",
    },
    notes: `"Fritigern appears in the Latinized form Fritigernus. The Gothic name is reconstructed as *Frithugairns 'desiring peace'"

*arianisks from arian + -isks`
  },
  {
    text: {
      got: 'gabáidjands Aþanareik du afleiþan faírra landa.',
      en: "forcing Athanaric into exile.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: "Afar sigis Friþigaírnis, sa gutans Xristeinans nutun ƕeilos friþáus",
      en: "After Fritigern's victory the Christian Goths enjoyed a period of peace",
    },
  },
  {
    text: {
      got: "ïn þizái Aípiskaúpus Wulfila arianisks, afarláista Aípiskaúpaus Þaíaúfeilaus,",
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
      got: "Weihs Niketa, þaírh merein jah libáin gaguda seina, naþ mikilaba faúr tulgiþa galáubeináis Xristeináizos ïn þáim gutam.",
      en: "Saint Nicetas, by his preaching and his pious life, greatly assisted the confirmation of the Christian faith among the Goths.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: "Aþþan, afar fau jera, Aþanareiks gawandida ïn land haimi sein miþ harja mikilamma",
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
      got: "Swe dails toje seinis, ráisida Aþanareiks wrakja sleidja wiþra þans Xristeinans.",
      en: "As part of his actions, Athanaric raised a fierce persecution against the Christians.",
    },
  },
  {
    text: {
      got: "Niketa, saei faþs ahmeins warþ ïn þaim gutam Xristeinam,",
      en: "Nicetas, who had become a spiritual leader among the Christian Goths,",
    },
    notes: `*faþs`
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
      got: "Niketa was þan atgibans du balweinim unmanariggwáim.",
      en: "Nicetas was then given over to cruel tortures.",
    },
    notes: `cast into fire Mark 9:22`
  },
  {
    text: {
      got: "Und andi warþ gadraúhts Xristáus ïn fon atwaúrpans þarei gadáuþnoda ïn 372.",
      en: "Finally, the soldier of Christ was thrown into a fire where he died in 372.",
    },
    notes: `cast into fire Mark 9:22`
  },
  {
    text: {
      got: "Frijonds Niketins, Xristeins haitans Marianus,",
      en: "A friend of Nicetas, a Christian named Marianus,",
    },
  },
  {
    text: {
      got: "bigat láibos ïs ïn naht jah brahtah þos du Kilikia.",
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
      got: "Dails láibo was seiþs brāhts du maúnasterjon Bisauki Detsani ïn Serbia.",
      en: "A part of the relics was later transferred to the monastery of Visoki Dečani in Sairbia.",
    },
    notes: `*maúnasterjo (μοναστήριον) looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from εὐαγγέλιον also second declension`
  },
].map(toGothicLine).join('')}</p>`


article += html`<h2>${toGothicLine({
  text: {
    got: 'Liuþ Weihamma Niketan',
    en: "Hymn to Saint Niketas",
  },
  notes: "Romans 15:9 dative without preposition"
})}</h2>`

let poem = ''

poem += html`<p>
${toGothicLine({
  text: {
    got: "Ïn allái þiudái, sa ïst ïnkunja sunjis,",
    sr: "Родољуб је прави ко у своме роду",
    en: "Among all the people, he is a true patriot.",
  },
  notes:
`Although ïnkunja means fellow countryman, I feel like it works in this context.
Zealot could maybe work too.

Using þiuda to mean people of his tribe, a few bible verses use the word for heathen but mostly gentiles.`
})}
<br>
${toGothicLine({
  text: {
    got: "saei Guda Libandins ráiseiþ hunslastadis.",
    sr: "Олтар прави зида живоме Господу.",
    en: "who to the Living God erects an altar.",
  },
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Guta Aþanareiks miþ anamahtái reikinoda",
    sr: "Атанарик Готски насиљем владаше.",
    en: "The Goth Athanaric with violence ruled",
  },
  notes:
``
})}
<br>
${toGothicLine({
  text: {
    got: "jah galiugam ungawagjandam sáudins salida;",
    sr: "Идолима мртвим жртве приношаше;",
    en: "and offered sacrifices to the inanimate idols;",
  },
  notes: `"hunsla saljan" John 16:2; "galiugam saljada" Corinthians I 10:19.`
})}
<br>
${toGothicLine({
  text: {
    got: "Ïþ Weihs Niketa was gadraúhts Xristáus",
    sr: "А Никита свети, војник Христа Бога,",
    en: "But Saint Nicetas was a soldier of Christ",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "jah merjands naseináis áiweináizos.",
    sr: "Проповедник беше спасења вечнога;",
    en: "And a herald of eternal salvation.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Þaírh naht ussandida Liuhadis Áiweinis strelos,",
    sr: "Овај светлост вечну у ноћ расипаше,",
    en: "He sent rays of the Eternal Light through the night,",
  },
  notes: '*strela [f. O] PGm *strēlō- (in Le Petit Prince)'
})}
<br>
${toGothicLine({
  text: {
    got: "distahjandeins riqis haiþn biwáibjando sáiwalos.",
    sr: "Онај тмом идолском душе застираше.",
    en: "dissolving the idolatrous gloom wrapping souls.",
  },
  notes: `Using heathen to mean idolatrous

using galiugands to mean idolatrous`
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Weihs Niketa andstoþ þamma reik,",
    sr: "Никита се свети кнезу успротиви,",
    en: "Saint Nicetas stood against the prince",
  },
  notes: `Using reik referencing it in Aþanareiks`
})}
<br>
${toGothicLine({
  text: {
    got: "miþ muna tulgamma þiudái seinái sildaleik.",
    sr: "И трпљењем храбрим народ свој задиви,",
    en: "With firm resolve to his people an astonishment.",
    de: "... seinem Volke eine Verwunderung.",
  },
  notes: `"sildaleiknan in allaim þaim galaubjandam" Thessalonians II 1:10`
})}
<br>
${toGothicLine({
  text: {
    got: "Þairhstagg þata riqis þaírh maht Galgins Gariudis",
    sr: "Силом часног крста силу мрачну збуни,",
    en: "By the power of the Honourable Cross he pierced the darkness",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "jah fullida alla þiuda seina miþ faúrhtein Gudis.",
    sr: "И страхом од Бога сав народ испуни.",
    en: "And filled all his people with the fear of God.",
  },
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Bloþ ïs was swe riudands ūhtwons niujis,",
    sr: "Крв његова беше румен нове зоре,",
    en: "His blood was the blush of a new dawn,",
  },
  notes: `*riudan`
})}
<br>
${toGothicLine({
  text: {
    got: "miþþanei usstáig ahma ïs du gardim himinis.",
    sr: "А дух му се вину у небеске дворе;",
    en: "While his spirit ascended to the courts of heaven.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Ïn fonin ingrimjamma, Niketa was branniþs,",
    sr: "У страшном је огњу Никита горео",
    en: "In a dreadful fire, Nicetas was burning,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "ïþ und hina dag ni was gabranniþs.",
    sr: "Али ни до данас није изгорео.",
    en: "But to this day he hasn't burned out/up.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Ïn Sunja Xristáus, þai gutans dáupidái wesun.",
    sr: "Истином Христовом Готи се крстише.",
    en: "Into the Truth of Christ, the Goths were baptized.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Jah wulþagana seinana Nikitan hazidedun,",
    sr: "И Никиту свога дивно прославише.",
    en: "And praised their wonderful one Nikitas.",
  },
  notes: ''
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Stibna þuthaúrnis gudis, Weiha Niketa,",
    sr: "О Никито свети, гласу Божје трубе,",
    en: "Voice of the trumpet of God, Saint Nikitas,",
  },
  notes: 'Vocative, so weak declension.'
})}
<br>
${toGothicLine({
  text: {
    got: "ïnkunja sunja, Martwr amala.",
    sr: "Мучениче храбри, прави родољубе,",
    en: "True patriot, brave martyr.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Þu biláist báuáinins aírþis,",
    sr: "Из шатора земних ти си отишао,",
    en: "You have left behind the dwelling-places of the earth",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "ïn þiudangardim nu miþ aggilum standis.",
    sr: "У дворове царске с ангелима стао.",
    en: "And now you stand in the royal courts with the angels.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Bidei bi uns, unte Þiudans andhauseiþ þus,",
    sr: "Помоли се за нас, јер Цар тебе слуша,",
    en: "Pray for us, for the King listens to you, ",
  },
  notes: `"𐌱𐌹𐌳𐌾𐌰𐌹𐌸𐌿𐌸𐌸𐌰𐌽 𐌾𐌰𐌷 𐌱𐌹 𐌿𐌽𐍃" Thessalonians I 5:25`
})}
<br>
${toGothicLine({
  text: {
    got: "ei sáiwalom unsaráim sijái hulþs.",
    sr: "Да с’ и наша Богом помилује душа.",
    en: "That He grant our souls mercy. (that he let be mercy on our souls)",
  },
  notes: `Publican's prayer Luke 18:13`
})}
</p>`

article += html`<div class='poem'>${poem}</div>`

article += html`<p lang='en' class="annotation">
  <span class="nowrap">Nicetas the Goth</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
  <br>
  <span class="nowrap">In large part from the Ochrid Prologue</span>
  <span class="nowrap">by Saint Nikolai Velimirović.</span>
</p>`


const description = "Nicetas the Goth in the Gothic language, a translation by 2sh."

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
  </head>
  <body>
    ${createArticleBody(article)}
  </body>
</html>`

export default page