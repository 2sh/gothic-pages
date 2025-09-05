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
      got: 'Gawandida du Xristeinein þaírh Aípiskaúpu Þaíaúfeilu Gutiskana,',
      en: "He converted to Christianity through the Gothic Bishop Theophilus,",
    },
  },
  {
    text: {
      got: 'inliuhtjand uskunþa Gutþiudos jah gamáinjan ïn Gafáurdái Frumistái Nikaias ïn 325,',
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
      got: 'unte sa andstandands háiþns usbráideinái Xristeineins,',
      en: "due the pagans opposing the spread of Christianity,",
    },
    notes: `Romans 13:2 andstandands + dative

usbráidjan + eins

Word for Christianity taken from here [url=https://got.wikipedia.org/wiki/%F0%90%8C%B9%F0%90%8C%B4%F0%90%8D%83%F0%90%8C%BF%F0%90%8D%83_%F0%90%8D%87%F0%90%8D%82%F0%90%8C%B9%F0%90%8D%83%F0%90%8D%84%F0%90%8C%BF%F0%90%8D%83]here[/url]
Using -isks ending`
  },
  {
    text: {
      got: 'þishun miþ Aþanareika, saei fijáida Xristeinana,',
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
      got: "Afar sigis Friþigaírnis, sa gutans Xristeinans nutun ƕeilos friþáus",
      en: "After Fritigern's victory the Christian Goths enjoyed a period of peace",
    },
  },
  {
    text: {
      got: "ïn þizai Aípiskaúpus Wulfila arianisks, afarláista Aípiskaúpaus Þaíaúfeilaus,",
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
      got: "Weihs Niketa, þaírh merein jah libáin gaguda seina, naþ mikilaba faúr tulgiþa galáubeináis Xristeináizos ïn þaim gutam.",
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
      got: "Swe dails toje seinis, raisida Aþanareiks wrakja sleidja wiþra þans Xristeinans.",
      en: "As part of his actions, Athanaric raised a fierce persecution against the Christians.",
    },
  },
  {
    text: {
      got: "Niketa, saei faþs ahmeins warþ ïn þaim gutam Xristeinam,",
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
      got: "Frijonds Niketins, Xristeins haitans Marianus,",
      en: "A friend of Nicetas, a Christian named Marianus,",
    },
  },
  {
    text: {
      got: "bigat láibos ïs ïn naht jah brahta þos du Kilikia.",
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


article += html`<p>
${toGothicLine({
  text: {
    got: "Sa ïst ïnkunja sunjis, ïn þiudái allái,",
    en: "He is a true patriot, among all the people,",
  },
  notes:
`Although ïnkunja means fellow countryman, I feel like it works in this context.
Zealot could maybe work too.

Using þiuda to mean people of his tribe, a few bible verses use the word for heathen but mostly gentiles.`
})}
<br>
${toGothicLine({
  text: {
    got: "saei gasatjiþ grunduwaddju hunslastadis weihis sunjis",
    en: "who founds a real sacred altar,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "wulþau Gudis Libandins.",
    en: "to the glory of the Living God.",
  },
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "Guta Aþanareiks reikinoda miþ anamahtái",
    en: "The Goth Athanaric ruled with violence",
  },
  notes:
``
})}
<br>
${toGothicLine({
  text: {
    got: "jah salida hunsla galiugam ungawagjandam.",
    en: "and offered sacrifices to the inanimate idols.",
  },
  notes: `"hunsla saljan" John 16:2; "galiugam saljada" Corinthians I 10:19.`
})}
<br>
${toGothicLine({
  text: {
    got: "Ïþ Weihs Niketa was gadraúhts Xristáus",
    en: "But Saint Nicetas was a soldier of Christ",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "jah merjands naseináis áiweináizos.",
    en: "and a herald of eternal salvation.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "Ussandida strelos Liuhadis Áiweinis þaírh naht,",
    en: "He sent rays of the Eternal Light through the night,",
  },
  notes: '*strela [f. O] PGm *strēlō- (in Le Petit Prince)'
})}
<br>
${toGothicLine({
  text: {
    got: "maltjandeins riqis galiugandan",
    en: "dissolving the idolatrous gloom",
  },
  notes: `*gamaltjan from attested gamalteins

using galiugands to mean idolatrous`
})}
<br>
${toGothicLine({
  text: {
    got: "saei sáiwalos biwaibida swe hulistr.",
    en: "which wrapped souls like a shroud.",
  },
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "Weihs Niketa andstoþ þamma reik",
    en: "Saint Nicetas stood against the prince",
  },
  notes: `Using reik referencing it in Aþanareiks`
})}
<br>
${toGothicLine({
  text: {
    got: "jah muns tulgus seins sildaleiknoda ïn þiudái seinái.",
    en: "and his firm resolve astonished his people.",
  },
  notes: `"sildaleiknan in allaim þaim galaubjandam" Thessalonians II 1:10`
})}
<br>
${toGothicLine({
  text: {
    got: "Miþ mahtái Galgins Gariudis þata riqis þairhstagg",
    en: "With the power of the Honourable Cross he pierced the darkness",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "jah þiuda alla seina miþ faurhtein Gudis fullida.",
    en: "and filled all his people with the fear of God.",
  },
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "Bloþ weih ïs was woþi,",
    en: "His holy blood was the sweet,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "roseiga ūhtwo dagis niujis,",
    en: "rosy dawn of a new day,",
  },
  notes: `*rosa from Latin rosa + -eigs`
})}
<br>
${toGothicLine({
  text: {
    got: "miþþanei ahma ïs du gardim himinis usstáig.",
    en: "while his spirit ascended to the courts of heaven.",
  },
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "Niketa was branniþs ïn fonin ingrimjamma,",
    en: "Nicetas was burned in the dreadful fire,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "ïþ und hina dag þata fon ni gafret ïna;",
    en: "but to this day the fire has not consumed him;",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "láibos ïs sind gahailos gabaurganos!",
    en: "his relics have been preserved intact!",
  },
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "Þai gutans wesun daupidai ïn Sunja Xristáus",
    en: "The Goths were baptized into the Truth of Christ",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "jah hazidedun Nikitan, sigisan seinana.",
    en: "and praised Nikitas, their victor.",
  },
  notes: '*sigison from PGm *sigizōną, then sigisa with -a agent suffix'
})}
</p>`

article += html`<p>
${toGothicLine({
  text: {
    got: "",
    en: "Saint Nikitas, voice of the trumpet of God!",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "",
    en: "Brave martyr, true lover of your land.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "",
    en: "You have left behind the dwelling-places of the earth",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "",
    en: "and now reside with the choirs of angels",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "",
    en: "in the courts of God the King.",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "",
    en: "Pray for us, you who have boldness towards the King.",
  },
})}
</p>`

article += html`<p class='annotation'>
${toGothicLine({
  text: {
    got: "",
    en: "Saint Nikolai Velimirović, The Ochrid Prologue, September.",
  },
})}
</p>`

article += html`<p lang='en' class="annotation">
  <span class="nowrap">Nicetas the Goth</span>
  <span class="nowrap">in the Gothic language,</span>
  <br>a translation by <a href='https://2sh.me'>2sh</a> (2025).
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