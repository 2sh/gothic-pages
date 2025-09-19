import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
} from '@server/tools'


// https://www.orthodox.net/menaion-april/15-the-holy-martyr-sabbas-the-goth.html
// https://orthodoxwiki.org/Sava_the_Goth
// https://www.oca.org/saints/lives/2025/04/15/101105-martyr-savva-the-goth-of-wallachia
// https://en.wikipedia.org/wiki/Sabbas_the_Goth

global.lineId = 0

const title = '𐍃𐌰𐌱𐌱𐌰 𐍃𐌰 𐌲𐌿𐍄𐌰 𐌼𐌹𐌺𐌹𐌻𐌼𐌰𐍂𐍄𐍅𐍂'
let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Sabba sa Guta Mikilmartwr',
    en: "Great-Martyr Sabbas the Goth",
  },
  notes: `Sabbas (Σάββας) following https://www.nthuleen.com/papers/755gothpaper.html for naming, n-stem without -s as I can imagine it became the norm.`
},)}</h1>
</header>`

article += html`<p>${[
  {
    text: {
      got: 'Dags gaminþjis: 15 April',
      en: "Day of remembrance: 15 April",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`  <h2>${toGothicLine({
  text: {
    got: 'Faurawaurdjis Aukridiskis',
    en: "From the Ochrid Prologue",
  },
  notes: `looking at andawaurdi`
},)}</h2>`



article += html`<p>${[
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
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
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
      got: 'gabundun þans bans bagmam jah sokidedun ïns mimz þatei galiugam gasaliþ was du ïtan nauþjan.',
      en: "bound them both to trees and tried to force them to eat meat offered to idols.",
    },
    notes: `Seems to be using the dative without a preposition Corinthians I 7:27, Romans 7:2

þans bans Ephesians 2:16

"sought to arrest" by John 10:39, though perhaps "sought" is a greek-ism`
  },
  {
    text: {
      got: 'Ïþ mans Gudis, gamunandans wáurda apaustaule,',
      en: "But the men of God, remembering the Apostle's words,",
    },
    notes: ``
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
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Þanaseiþs Ionnius Soranus harjatuga kreks,',
      en: "Later the Greek commander Ionnios Soranos,",
    },
  },
  {
    text: {
      got: 'ïn erai Balainis kaisaris,',
      en: "in the time of the Emperor Valens,",
    },
  },
  {
    text: {
      got: 'bigat nau Sabbins ana staþa gawaurpanana ïn wigana miþ gutam jah atnam þana du Kappadaukia.',
      en: "found Sabbas's body, cast up onto the bank, during a war with the Goths and took it to Cappadocia.",
    },
  },
].map(toGothicLine).join('')}</p>`

article += html`<p>${[
  {
    text: {
      got: 'Sabba Weihs gawann ïn 372, miþ 31 jere.',
      en: "St Sabbas suffered in 372, at the age of 31. ",
    },
  },
].map(toGothicLine).join('')}</p>`


article += html`<p lang='en' class="annotation">
  <span class="nowrap">Sabbas the Goth</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`


const description = "Sabbas the Goth in the Gothic language, a translation by 2sh."

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