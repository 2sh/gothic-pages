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
      en: "This one truly   is in his country",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "inkunja saei altār   du allwaldand timrjai.",
      en: "a patriot who an altar   to the allmighty one builds.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Aþanareiks sa guta   anamahtai reikinoda.",
      en: "Athanaric the goth   with tyranny ruled.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Galiugam afgudaim   sa gudalausa gasalida,",
      en: "To an idolatrous lie   the godless one sacrificed,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "satjands saiwalos   uf skadau dauþaus.",
      en: "setting souls   under a shadow of death.",
    },
    notes: `"uf skadau dauþ[a]us" Luke 1:79`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Iþ guta goþs   gadrauhts Xristaus,",
      en: "But a good goth   a soldier of Christ,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fralailot in lausein   Liuhaþ Aiweino,",
      en: "let out in the emptiness   the Eternal Light,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Niketa merjands   naseinais aiweinaizos.",
      en: "Nicetas herold   of eternal salvation.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Sa weiha andwaih   wiþra þana reik.",
      en: "The holy one fought   against that ruler.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Miþ stiwitja balþamma   sildaleiknoda in þiudai.",
      en: "With brave patience   he was marvelled amongst the people.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þana skadu þairhstagg   swinþein Krukis,",
      en: "That shadow he pierced   with the power of the Cross,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fulljands firƕja   faurhteins Gudis.",
      en: "filling the living   with the fear of God.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Rauþ ūhtwons niujaizos    rann bloþ is,",
      en: "Red of a new dawn   ran his blood,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "iþ ahma is usstaig   ufar du himinagardim.",
      en: "but his spirit ascended  above to the courts of heaven",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "In fonin fijaþwos   fastaiþs was Niketa;",
      en: "In a fire of hate   held was Nicetas;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "brann akei nauh   ni usbrann und hina dag.",
      en: "he burnt however yet   has not burnt out to this day.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Hazjandans hauhaba   hairtin Niketan seinana,",
      en: "Praising highly   with heart their Nicetas,",
    },
    notes: `Instrumentative "hairtin" John 12:40`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "du gafreideinai ganistais   þai gutans in Xristau",
      en: "to the obtainment of salvation   the goths into Christ",
    },
    notes: `"du gafreideinai ganistais" Thessalonians I 5:9`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "daupidai wesun,   drausjandans galiug.",
      en: "baptised were,   casting down the lie.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "O Weiha Niketa,   wulþaga martyr,",
      en: "O Holy Nicetas,   glorious martyr,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Stibna Gudahaurnis,   sunjeina inkunja,",
      en: "Voice of God's horn,   true patriot,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "brāhts wast þū   us bauainim airþeinaim,",
      en: "brought wast thou   out of earthen tents,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "standands nu miþ aggilum   faura sitla Þiudanis.",
      en: "standing now with the angels   before the throne of the King.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Unte Þiudans þiuþeigs   þus andhauseiþ,",
      en: "Because the good King   to you listens,",
    },
    notes: `þiuþeigs is used to refer to god
Luke 18:19, Mark 14:61, Corinthians II 11:31`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "bi uns bidei ei jah Guþ   bleiþjai saiwalos unsaros.",
      en: "for us pray that also God   has mercy on our souls.",
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
    text: { got: "skeireins in stabreim", en: "a translation into alliterative verse" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "fram Iohannes Haggwiþos (2026).", en: "by 2sh (2026)." },
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
  <span class="nowrap">a translation into alliterative verse</span>
  <span class="nowrap">by <a href='https://2sh.me'>2sh</a> (2026).</span>
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