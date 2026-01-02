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


// https://stjohndc.org/en/orthodoxy-foundation/saints/great-martyr-nicetas-goth
// https://orthodoxwiki.org/Nikitas_the_Goth
// https://molonlabe70.blogspot.com/2007/09/greatmartyr-nicetas-goth.html

// https://pemptousia.com/2022/09/%ce%b1-goth-saint-the-holy-martyr-nikitas-15-september/
// https://www.saintsophiadc.org/%CE%B1-goth-saint-the-holy-martyr-nikitas/

// https://www.worldhistory.org/Athanaric/

// another version: https://web.archive.org/web/20170502085631/http://westserbdio.org/en/prologue/633-september-15
// in original Serbian: https://www.eparhija-prizren.org/prolog-09_15/

// https://www.worldhistory.org/Athanaric/


const slug = 'niketa'
const title = 'Niketa sa Guta Martyr'
const description = "Niketa sa Guta Martyr, skeireins ïn razdai gutiskai."

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
      got: 'Niketa sa Guta Martyr',
      en: "Martyr Nicetas the Goth",
    },
    notes: `Niketa (Nικήτας) following https://www.nthuleen.com/papers/755gothpaper.html for naming, n-stem without -s as I can imagine it became the norm.`
  },], info)}</h1>
</header>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Dags gaminþjis: 15 Saiptaimbair',
        en: "Day of remembrance: 15 September",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Niketa Weihs was guta gabaurans',
        en: "Saint Nicetas was a Goth by birth",
      },
      notes: ``
    },
    {
      text: {
        got: 'jah bauaida ïn fera austramma Donaweis',
        en: "and lived on the eastern side of the Danube River",
      },
      notes: `*austrs from PGm *austraz looking at attested snutrs from snutraz

*Donaweis taken from Neologisms from PGm *Dōnaujaz`
    },
    {
      text: {
        got: 'ïn markai Raumanjos andwairþaizos.',
        en: "within the boundaries of present-day Romania.",
      },
    },
    {
      text: {
        got: 'Gawandida du Xristeinein þairh Þaiaufeilu Aipiskaupu gutiskana,',
        en: "He converted to Christianity through the Gothic Bishop Theophilus,",
      },
    },
    {
      text: {
        got: 'inliuhtjand uskunþa gutþiudos jah gamainjan ïn Gafáurdai Frumistai Nikaias ïn 325,',
        en: "a well-known enlightener of the Goths and a participant in the First Council of Nicaea in 325,",
      },
    },
    {
      text: {
        got: 'saei jah daupida Niketan.',
        en: "who also had baptized Nicetas.",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Ïnuh þizai mela was drauhtinassus ïn þaim gutam,',
        en: "At the time there was [internecine] warfare among the Goths",
      },
    },
    {
      text: {
        got: 'unte haiþnos andstandandans usbraideinai Xristeineins,',
        en: "due the pagans opposing the spread of Christianity,",
      },
      notes: `Romans 13:2 andstandands + dative

usbraidjan + eins

Word for Christianity taken from here [url=https://got.wikipedia.org/wiki/%F0%90%8C%B9%F0%90%8C%B4%F0%90%8D%83%F0%90%8C%BF%F0%90%8D%83_%F0%90%8D%87%F0%90%8D%82%F0%90%8C%B9%F0%90%8D%83%F0%90%8D%84%F0%90%8C%BF%F0%90%8D%83]here[/url]
Using -isks ending`
    },
    {
      text: {
        got: 'þishun Aþanareikis, saei fijaida Xristeinana,',
        en: "in particular between Athanaric, who hated Christians,",
      },
    },
    {
      text: {
        got: 'jah Friþigairnis saei afar gablauþiþ fram Aþanareika aftra gasloh ïmma miþ andstalda Valainis kaisaris arianiskis,',
        en: "and Fritigern who revenged a defeat by Athanaric with the help of Arian emperor Valens,",
      },
      notes: `“Fritigern appears in the Latinized form Fritigernus. The Gothic name is reconstructed as *Frithugairns ‘desiring peace’”

*arianisks from arian + -isks`
    },
    {
      text: {
        got: 'gabaidjands Aþanareik du afleiþan fairra landa.',
        en: "forcing Athanaric into exile.",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: "Afar sigis Friþigairnis, sa gutans Xristeinans nutun ƕeilos friþaus",
        en: "After Fritigern’s victory the Christian Goths enjoyed a period of peace",
      },
    },
    {
      text: {
        got: "ïn þizai Wulfila Aipiskaupus arianisks, afarlaista Þaiaufeilaus Aipiskaupaus,",
        en: "during which arian Bishop Ulfilas, successor to Bishop Theophilus,",
      },
      notes: `afarlaistjan + galaista = afarlaista “nachfolger”`
    },
    {
      text: {
        got: "gaskop alfabet gutiskana jah gaskeirida managos bokos ahmeinos fram krekrazdai ïn gutrazda.",
        en: "created the Gothic alphabet and translated many spiritual books from Greek into Gothic.",
      },
    },
    {
      text: {
        got: "Niketa Weihs, þairh merein jah libain gaguda seina, naþ mikilaba faur tulgiþa galaubeinais Xristeinaizos ïn þaim gutam.",
        en: "Saint Nicetas, by his preaching and his pious life, greatly assisted the confirmation of the Christian faith among the Goths.",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
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
        got: "Swe dails toje seinaize, raisida Aþanareiks wrakja sleidja wiþra þans Xristeinans.",
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
        got: "fairinoda Aþanareik unte afgudei jah unmanariggwei.",
        en: "denounced Athanaric for godlessness and cruelty.",
      },
      notes: `*unmanariggwei from unmanariggws`
    },
    {
      text: {
        got: "Anahaihait þans galaubeinans du fastan jah ni ogan martyrdauþana.",
        en: "He called on the faithful to be firm and not to fear martyrdom.",
      },
      notes: `martyrdauþs inspired from German Martyrertod`
    },
    {
      text: {
        got: "Suns Aþanareiks habaida Niketan gafāhanana.",
        en: "Athanaric soon had Nicetas seized.",
      },
      notes: ``
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: "Niketa was þan atgibans du balweinim unmanariggwaim.",
        en: "Nicetas was then given over to cruel tortures.",
      },
      notes: `cast into fire Mark 9:22`
    },
    {
      text: {
        got: "Und andi warþ gadrauhts Xristaus ïn fon atwaurpans þarei gadauþnoda ïn 372.",
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
        got: "bigat laibos ïs ïn naht jah brāhta þos du Kilikia.",
        en: "found his remains during the night and transferred them to Cilicia.",
      },
    },
    {
      text: {
        got: "Þanaseiþs, fauratanja jah lekinassjus warþ faura laibom Niketins Martyris Weihis.",
        en: "From that time, miracles and healings have occurred before the relics of the holy Martyr Nicetas.",
      },
    },
    {
      text: {
        got: "Dails laibo was seiþs brāhts du maunasterjon Visauki Detsani ïn Serbia.",
        en: "A part of the relics was later transferred to the monastery of Visoki Dečani in Sairbia.",
      },
      notes: `*maunasterjo (μοναστήριον) looking at on-stem 𐌰𐌹𐍅𐌰𐌲𐌲𐌴𐌻𐌾𐍉 from εὐαγγέλιον also second declension`
    },
  ], info)}</p>`


  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Liuþ Niketan Weihamma',
      en: "Hymn to Saint Niketas",
    },
    notes: "Romans 15:9 dative without preposition"
  }], info)}</h2>`

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Ïn seinamma kunja ïnkunja sunjis sijai",
      sr: "Родољуб је прави ко у своме роду",
      en: "Among his people he is a true patriot",
    },
    notes:
      `Although ïnkunja means fellow countryman, I feel like it works in this context.
Zealot could maybe work too.

Using þiuda to mean people of his tribe, a few bible verses use the word for heathen but mostly gentiles.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Saei Guda Libandins hunslastaþ raisjai.",
      sr: "Олтар прави зида живоме Господу.",
      en: "who to the Living God erects an altar.",
    },
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Aþanareiks Guta anamahtai reikinoda.",
      sr: "Атанарик Готски насиљем владаше.",
      en: "The Goth Athanaric with violence ruled",
    },
    notes:
      ``
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Afgudam dauþaim saudins salida;",
      sr: "Идолима мртвим жртве приношаше;",
      en: "and offered sacrifices to the dead idols;",
    },
    notes: `“hunsla saljan” John 16:2; “galiugam saljada” Corinthians I 10:19.

Using afguþ instead of an idol loan as afgudis is used later and that makes it
reference back to this word nicely. Trying to create a nice sounding word
for this poem for adjective idolatrous instead of afgudis
that uses an idol loan would overcomplicate this.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ïþ Niketa Weihs was gadrauhts Xristaus",
      sr: "А Никита свети, војник Христа Бога,",
      en: "But Saint Nicetas was a soldier of Christ",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Jah merjands naseinais aiweinaizos.",
      sr: "Проповедник беше спасења вечнога;",
      en: "And a herald of eternal salvation.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Sa Liuhaþ Aiweinana in naht strawida,",
      sr: "Овај светлост вечну у ноћ расипаше,",
      en: "This one spread the Eternal Light in the night,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Anþar saiwalos riqizis afgudis hulida.",
      sr: "Онај тмом идолском душе застираше.",
      en: "the other wrapped souls in an idolatrous gloom.",
    },
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Niketa Weihs andstoþ þamma reik,",
      sr: "Никита се свети кнезу успротиви,",
      en: "Saint Nicetas stood against the prince",
    },
    notes: `Using reik referencing it in Aþanareiks`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Stiwitja balþamma þiudai seinai sildaleik,",
      sr: "И трпљењем храбрим народ свој задиви,",
      en: "With brave patience to his people an astonishment,",
      de: "... seinem Volke eine Verwunderung.",
    },
    notes: `“sildaleiknan in allaim þaim galaubjandam” Thessalonians II 1:10`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þairhstagg þata riqis mahtai Krukis Gariudis,",
      sr: "Силом часног крста силу мрачну збуни,",
      en: "By the power of the Honourable Cross he pierced the darkness",
    },
    notes: `Using *kruks instead of galga as out of the context of the Bible,
galga probably can mean things other than the cross.

Original Serbian is more like
"by the power of the honorable cross confused the dark power",
though I like the English translation more as it references the previously
mentioned darkness, and using þairhstagg sounds kinda cool.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "jah fullida alla þo þiuda faurhteins Gudis.",
      sr: "И страхом од Бога сав народ испуни.",
      en: "And filled all the people with the fear of God.",
    },
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Bloþ ïs was swe rauþ niujis maurginis",
      sr: "Крв његова беше румен нове зоре,",
      en: "His blood was the blush of a new dawn,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ïþ usstaig ahma ïs du gardim himinis;",
      sr: "А дух му се вину у небеске дворе;",
      en: "While his spirit ascended to the courts of heaven.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ïn funin agisleikamma Niketa brann",
      sr: "У страшном је огњу Никита горео",
      en: "In a dreadful fire, Nicetas was burning,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Akei nauh und hina dag ïs ni usbrann.",
      sr: "Али ни до данас није изгорео.",
      en: "But to this day he hasn’t burned out.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Sunjai Xristaus gutans daupidai wesun",
      sr: "Истином Христовом Готи се крстише.",
      en: "By the Truth of Christ the Goths were baptized.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "jah Niketan seinana wulþago hazidedun.",
      sr: "И Никиту свога дивно прославише.",
      en: "And praised their Nikitas wonderfully.",
    },
    notes: `Using -o ending for wulþags to mean 'in a wonderful manner'`
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Stibna þuthaurnis Gudis, Niketa Weiha,",
      sr: "О Никито свети, гласу Божје трубе,",
      en: "Voice of the trumpet of God, Saint Nikitas,",
    },
    notes: 'Vocative, so weak declension.'
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Sa martyr balþa, sa ïnkunja sunja,",
      sr: "Мучениче храбри, прави родољубе,",
      en: "True patriot, brave martyr.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Us airþeinaim bauainim aflaist þū,",
      sr: "Из шатора земних ти си отишао,",
      en: "You have left behind the dwelling-places of the earth",
    },
    notes: `2 Corinthians 5:1`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ïn þiudangardim miþ aggilum standis nu.",
      sr: "У дворове царске с ангелима стао.",
      en: "And now you stand in the royal courts with the angels.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Bidei bi uns, Þiudans andhauseiþ þus,",
      sr: "Помоли се за нас, јер Цар тебе слуша,",
      en: "Pray for us, for the King listens to you, ",
    },
    notes: `“𐌱𐌹𐌳𐌾𐌰𐌹𐌸𐌿𐌸𐌸𐌰𐌽 𐌾𐌰𐌷 𐌱𐌹 𐌿𐌽𐍃” Thessalonians I 5:25`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ei saiwalom unsaraim sijai hulþs.",
      sr: "Да с’ и наша Богом помилује душа.",
      en: "That He grant our souls mercy. (that he be merciful to our souls)",
    },
    notes: `Publican’s prayer Luke 18:13`
  }], info)}
</p>`

  article += html`<div class='poem'>${poem}</div>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Niketa sa Guta", en: "Nicetas the Goth" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
  <br>
  <span class="nowrap">${toGothicLines([{
    text: {
      got: "us dailai mikilai Faurawaurdies Aukridiskis",
      en: "In large part from the Ochrid Prologue"
    },
    notes: `us dailai Corinthians I 13:10, Corinthians I 13:12`
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: {
      got: "Nikaulai Belimiraubits Weihis.",
      en: "by Saint Nikolai Velimirović."
    },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Nicetas the Goth</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
  <br>
  <span class="nowrap">In large part from the Ochrid Prologue</span>
  <span class="nowrap">by Saint Nikolai Velimirović.</span>
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
