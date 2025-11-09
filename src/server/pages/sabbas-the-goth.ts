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


// https://www.orthodox.net/menaion-april/15-the-holy-martyr-sabbas-the-goth.html
// https://orthodoxwiki.org/Sava_the_Goth
// https://www.oca.org/saints/lives/2025/04/15/101105-martyr-savva-the-goth-of-wallachia
// https://en.wikipedia.org/wiki/Sabbas_the_Goth


const slug = 'sabba'
const title = 'Sabba sa Guta Martyr'
const description = "Sabba sa Guta Martyr, skeireins ïn razdai gutiskai."

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
      got: 'Sabba sa Guta Martyr',
      en: "Martyr Sabbas the Goth",
    },
    notes: `Sabbas (Σάββας) following https://www.nthuleen.com/papers/755gothpaper.html for naming, n-stem without -s as I can imagine it became the norm.`
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
        got: '12 Apreils (Aikklesjons wistros jah Aikklesjo Aurþaudaukseina Raumaniwiska),',
        en: "12 April (Western churches and the Romanian Orthodox Church),",
      },
      notes: `Raumanja + isks`
    },
    {
      text: {
        got: '15 Apreils (Aikklesjons slabiskos),',
        en: "15 April (Slavic churches),",
      },
      notes:
`*slabus from Latin Sclavus, removing c like all others and to distance it from slave.

*slabus + isks`
    },
    {
      text: {
        got: '18 Apreils (Aikklesjons krekiskos)',
        en: "18 April (Greek churches)",
      },
      notes: `kreks + isks`
    },
  ], info)}
  </p>`

  article += html`<h2>${toGothicLines([{
    text: {
      got: 'Faurawaurdeis Aukridiskis',
      en: "From the Ochrid Prologue",
    },
    notes: `looking at andawaurdi`
  },], info)}</h2>`



  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Was wrakja sleiþs wiþra Xristeinans hindar gutam.',
        en: "There was a brutal persecution of Christians on the part of the Goths.",
      },
    },
    {
      text: {
        got: 'Reiks gutisks sums qam haim, þarei sa Sabba gudafaurhts bauaida,',
        en: "A Gothic prince came to the village where this devout Sabbas lived,",
      },
    },
    {
      text: {
        got: 'jah frah haimjans, Xristeins weseina.',
        en: "and asked the villagers if there were any Christians there.",
      },
      notes: `haimja like gauja`
    },
    {
      text: {
        got: 'Andhofun ïna swarands ei ni ainshun weseina.',
        en: "They answered him on their honour that there were none.",
      },
    },
    {
      text: {
        got: 'Þan stoþ Sabba faur þana reik jah managein, qaþuh:',
        en: "Then Sabbas stood before the Prince and the people, and said:",
      },
    },
    {
      text: {
        got: '"Ni ainshun swerai aiþ ïn meina. Ïk ïm Xristeins."',
        en: "'Let no-one swear an oath on my behalf. I am a Christian.'",
      },
    },
    {
      text: {
        got: "Sa reiks, saiƕands þana wainahan arm, laílot ïna gaggan ïn gawairþja, qiþands:",
        en: "The prince, seeing this poor wretch, let him go in peace, saying:",
      },
      notes: `"andbindiþ ina jah letiþ gaggan" John 11:44`
    },
    {
      text: {
        got: '"Sa mag nih ubilaba nih waila taujan."',
        en: "'This one can do neither harm nor good.'",
      },
      notes: `neither .. nor .. "nih hlaif matjands nih wein drigkands" Luke 7:33`
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Afar jer biþe paska warþ, gudja, Sansala, qam ïn þizai haimai jah dulþida miþ Sabbin.',
        en: "The next year, just at Easter, a priest, Sansal, came to the village and celebrated Easter with Sabbas.",
      },
      notes: `"biþe warþ dags" Luke 6:13

In other places I see the name Sansalas, so going with the n-stem.
Though I don't see an origin of the name so I wonder if it's perhaps a Gothic name
with a different declension.`
    },
    {
      text: {
        got: 'Þai haiþnai finþandans anaks disdrusun bauain Sabbins',
        en: "the pagans, coming to hear of this, descended suddenly on Sabbas's house",
      },
      notes: `manageins finþandeins Luke 9:11`
    },
    {
      text: {
        got: 'jah ïnuh bleiþein anastodidedun mans Gudis du bautan,',
        en: "and began to belabour the men of God without mercy,",
      },
    },
    {
      text: {
        got: 'þan, biþe Sabba naqaþs þairh þaurnuns þunsans warþ,',
        en: "then, having dragged Sabbas naked through thorns,",
      },
    },
    {
      text: {
        got: 'gabundun þans bans bagmam jah sokidedun ïns nauþjan mimz, þatei galiugam gasaliþ was, ïtan.',
        en: "bound them both to trees and tried to force them to eat meat offered to idols.",
      },
      notes: `Seems to be using the dative without a preposition Corinthians I 7:27, Romans 7:2

þans bans Ephesians 2:16

"sought to arrest" by John 10:39`
    },
    {
      text: {
        got: 'Ïþ mans Gudis, gamunandans waurda apaustaule,',
        en: "But the men of God, remembering the Apostle's words,",
      },
    },
    {
      text: {
        got: 'ni taitokeina þans saudins gawammo unseljo.',
        en: "would not touch the unclean, diabolical sacrifices.",
      },
    },
    {
      text: {
        got: 'Sa reiks und andi gawargeiþ Sabbin dauþau jah atgibiþ ïna gadrauhtim.',
        en: "The prince finally sentenced Sabbas to death and handed him over to the soldiers.",
      },
      notes: "gawargjand ina dauþau jah atgiband ina þiudom Mark 10:33"
    },
    {
      text: {
        got: 'Sabba ïddja du stada waurstweins miþ swegniþai, hazjands Guþ.',
        en: "Sabbas went to the place of execution full of joy, praising God.",
      },
    },
    {
      text: {
        got: 'Bigitandans ïn ïmma mannan goþs, sokidedun þai gadrauhteis ïna ïn wiga galausjan',
        en: "Recognising in him a good man, the soldiers sought to set him free on the way,",
      },
      notes: `in imma ni ainohun fairino bigat. John 19:4`
    },
    {
      text: {
        got: 'ïþ þata gaþraih Sabbin mikilaba qaþuh þaim gadrauhtim',
        en: "but Sabbas was greatly distressed by this and told the soldiers",
      },
    },
    {
      text: {
        got: 'ei eis skuldedeina anabusn þis reikis gataujan.',
        en: "that they were in duty bound to carry out the prince's command.",
      },
      notes: `skuldedum taujan. Luke 17:10`
    },
    {
      text: {
        got: 'Þan brāhtedun þai gadrauhteis ïna du aƕai,',
        en: "Then the soldiers brought him to a river,",
      },
    },
    {
      text: {
        got: 'gabundun hallu bi halsa ïs jah waurpun ïna ïn watin.',
        en: "tied a rock round his neck and threw him into the water.",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Þanaseiþs Ionnius Soranus harjatuga kreks,',
        en: "Later the Greek commander Ionnios Soranos,",
      },
    },
    {
      text: {
        got: 'ïn erai Valainis kaisaris,',
        en: "in the time of the Emperor Valens,",
      },
    },
    {
      text: {
        got: 'bigat nau Sabbins ana staþa gawaurpanana ïn wigana miþ gutam jah atnam þana du Kappadaukia.',
        en: "found Sabbas's body, cast up onto the bank, during a war with the Goths and took it to Cappadocia.",
      },
    },
  ], info)}</p>`

  article += html`<p>${toGothicLines([
    {
      text: {
        got: 'Sabba Weihs gawann ïn 372, miþ 31 jere.',
        en: "St Sabbas suffered in 372, at the age of 31. ",
      },
    },
  ], info)}</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Sabba sa Guta", en: "Sabbas the Goth" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Sabbas the Goth</span>
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
