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
      got: "Þar was guta grimms   saei gaf afgudam,",
      en: "There was a godless goth   who gave to the idols,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Aþanareiks airzeis;   anamahtai reikinoda,",
      en: "the erroneous Athanaric;   with terror ruled,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "satjands saiwalos   uf skadau dauþaus.",
      en: "setting souls   under a shadow of death.",
    },
    notes: `"uf skadau dauþ[a]us" Luke 1:79

I'm ignoring rule of st, sp, sk not alliterating with s and each other.
I feel like that could have been a West Germanic innovation.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Iþ daursands guta   gadrauhts Xristaus,",
      en: "But being daring, a goth   a soldier of Christ,",
    },
    notes: `*daursands pres-part of *daursan from gadaursan.
Similar to adj. unagands (fearless) from pres-part of PGm *aganą`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "liuhaþ libainais   fralaílot in naht,",
      en: "the light of life   he let out into the night,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Niketa sa namnjands   Naseinais Aiweinins.",
      en: "Nicetas the namer   of eternal salvation.",
    },
    notes: `I believe the stress in Niketa would have been on the Ni,
looking at the stress patterns of the Greek related words for victory.`
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Sa weiha andwaih   wiþra þana reik;",
      en: "The holy one fought   against that ruler;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "miþ þulainai balþai,   in þiudai sildaleik.",
      en: "with brave patience,   amongst the people a marvel.",
    },
    notes: `Adding a comma to not attribute the patience to the people instead of
Nicetas.`
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
      got: "Rauþ swe ūhtwo niuja   rinnando bloþ is was,",
      en: "Red as a new dawn   his flowing blood was,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "iþ ufar du himinagardim   ahma is usstaig.",
      en: "but above to the courts of heaven   his spirit ascended.",
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
      got: "bairhtaba brann akei nauh   ni usbrann und hina dag.",
      en: "clearly he was burnt however yet   has not burnt out to this day.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Hazjandans háuhaba   hairtin Niketan seinana,",
      en: "Praising highly   with heart their Nicetas,",
    },
    notes: `Instrumentative "hairtin" John 12:40`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þai gudafaurhtans gutans   in gabein Xristaus",
      en: "the godfearing goths   in(to) the wealth/riches of Christ",
    },
    notes: `"gabein Xristau" Ephesians 3:8`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "daupidai wesun,   drausjandans galiug.",
      en: "baptised were,   casting down the falsehood.",
    },
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "O Weiha Niketa,   wulþaga martyr,",
      en: "O Holy Nicetas,   glorious martyr,",
    },
    notes: `Though the adjective usually follows the noun, in this case
as its in vocative and so the adjective is declined weak, making this order
better perhaps as the other way around could maybe be interpreted as
"martyr the glorious" instead of simply "glorious martyr".
It seems to me that if the definite article is included (or in this case
the vocative turning the adjectives weak), the order is the same as
the english order and meanings of
"the (adjective) (noun)" (descriptive) vs "(noun) the (adjective)" (title).`
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
      got: "brāhts wast þū   us bauainim airþeinaim;",
      en: "brought wast thou   out of earthen tents;",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "standis nu miþ aggilum   faura sitla Þiudanis.",
      en: "you stand now with the angels   before the throne of the King.",
    },
    notes: `Was thinking about adding þis before the þiudanis to emphasise
its the aforementioned Christ, but I feel it breaks the flow and the
"with the angels" part already makes clear this is in heaven. Both
"of a king" and "of the king" interpretations would make sense still.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Unte sa þiuþeiga Þiudans   þus andhauseiþ,",
      en: "Because that good King   to you listens,",
    },
    notes: `þiuþeigs is used to refer to God
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