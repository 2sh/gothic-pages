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


// https://de.wikipedia.org/wiki/Mondnacht_(Eichendorff)


const slug = 'liuth-niketin'
const title = 'Liuþ Niketin Weihamma'
const description = "Liuþ Niketin Weihamma, skeireins in razdai gutiskai."

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
      got: 'Liuþ Niketin Weihamma',
      en: "Hymn to Saint Nicetas",
    },
    notes: `Greek uses αί too for the æ and the o used to be pronounced /o/ apparently.`
  },], info)}</h1>
</header>`

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Sa bi sunjai   sijai in kunja seinamma",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "inkunja saei altār   du allwaldand timrjai.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Aþanareiks sa guta   anamahtai reikinoda.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Galiugam afgudaim   sa gudalausa gasalida,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "satjands saiwalos   uf skadau dauþaus.",
    },
    notes: `"uf skadau dauþ[a]us" Luke 1:79`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Iþ guta goþs   sa gadrauhts Xristaus,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fralailot in lausein   Liuhaþ Aiweino,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Niketa sa merjands   naseinais aiweinaizos.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Sa weiha andwaih   wiþra þana reik.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Miþ stiwitja balþamma   sildaleiknoda in þiudai seinamma.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þana skadu þairhstagg   swinþein Krukis,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fulljands firƕja   faurhteins Gudis.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Rauþ ūhtwons niujaizos    rann bloþ is,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "iþ ahma is usstaig   swe ahaks du himinagardim.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "In fonin fijaþwos   fastaiþs was Niketa;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "brann akei nauh   ni usbrann und hina dag.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Hazjandans hauhaba   hairtin Niketan seinana,",
    },
    notes: `Instrumentative "hairtin" John 12:40`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "du gafreideinai ganistais   þai gutans in Xristau",
    },
    notes: `"du gafreideinai ganistais" Thessalonians I 5:9`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "daupidai wesun,   drausjandans galiug.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "O Niketa Weiha,   wulþaga martyr,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Stibna Gudahaurnis,   sunjeina inkunja,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "brāhts wast þū   us bauainim airþeinaim,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "standis nu miþ aggilum   faura sitla þiudanis.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Unte Þiudans þiuþeigs   þus andhauseiþ,",
    },
    notes: `þiuþeigs is used to refer to god
Luke 18:19, Mark 14:61, Corinthians II 11:31`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "bi uns bidei ei jah Guþ   bleiþjai saiwalos unsaros.",
    },
  }], info)}
<br>
</p>`

  article += html`<div class='poem'>${poem}</div>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Liuþ Niketin Weihamma", en: "Hymn to Saint Nicetas" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins in stabreim fram Iohannes Haggwiþos (2026).", en: "a translation into alliterative verse by 2sh (2026)." },
  }], info)}</span>
  <br>
  <span class="nowrap">${toGothicLines([{
    text: {
      got: "Us dailai mikilai Faurawaurdies Aukridiskis",
      en: "In large part from the Ochrid Prologue"
    },
    notes: `us dailai Corinthians I 13:10, Corinthians I 13:12`
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: {
      got: "Nikaulai Velimirauvits Weihis.",
      en: "by Saint Nikolai Velimirović."
    },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Hymn to Saint Nicetas</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation into alliterative verse by <a href='https://2sh.me'>2sh</a> (2026).</span>
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