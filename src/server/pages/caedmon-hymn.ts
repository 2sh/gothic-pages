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


const slug = 'liuth-kaidmonis'
const title = 'Liuþ Kaidmonis'
const description = "Liuþ Kaidmonis, skeireins in razdai gutiskai."

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
      got: 'Liuþ Kaidmonis',
      en: "Cædmon's Hymn",
    },
    notes: `Greek uses αί too for the æ and the o used to be pronounced /o/ apparently.`
  },], info)}</h1>
</header>`

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Nū skulum hazjan / himinagardis ward,",
      ang: "Nū scylun hergan / hefaenrīcaes Uard,",
      en: "Now [we] shall honour / heaven-kingdom's guardian,",
      la: "Nunc debemus laudare / regni caelestic auctorem,",
    },
    notes: `Perhaps just himinis here, not sure creating a new word is the
best thing.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "maht mitandins / jah is mun wiljins,",
      ang: "metudæs maecti / end his mōdgidanc,",
      en: "the measurer's might / and his mind's plan,",
      la: "creatoris potentiam, et illius consilium,",
    },
    notes: `"bi muna wiljins seinis" Ephesians 1:11`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "waurstw wulþuattins / swe is wundris ƕizuh,",
      ang: "uerc Uuldurfadur / suē hē uundra gihuaes,",
      en: "the work of the father of glory / as he of each wonder,",
      la: "facta Patris gloriae: / quomodo ille miraculorum omnium,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þiudans aiweins / þiuþida gasatein",
      ang: "ēci dryctin / ōr āstelidæ",
      en: "eternal lord, / the origin established;",
      la: "[cum sit] aeternus Deus, / auctor exstitit,",
    },
    notes: `Using þiudans as frauja cognate OE Frēa comes up later.

"gasatein fairƕaus" Ephesians 1:4

Alternative ideas:
"gaþwastida mel" though I'm not sure þ and þw alliterate and it's rather vague;
"þiuþ gatawida" feels too plain, basically "did good";
"þiuþida gaskafts" I'm not sure himins would be considered a gaskafts;
"þiuþida brunnan" blessing the source/fountain (of life?),
sort of a "Blessing of the waters" perhaps`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "is frumist gaskop / manne barnam",
      ang: "hē ǣrist scōp / aelda barnum",
      en: "he first created / for the children of men",
      la: "qui primo tecti / hominum filiis",
    },
    notes: `somewhat artifically putting the stress on the m in frumist`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "himin swe hrot / hailags skaps.",
      ang: "heben til hrōfe / hāleg scepen.",
      en: "heaven for a roof, / holy creator.",
      la: "caelum pro culmine, / ..."
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þan midjungard / manasedais wards,",
      ang: "Thā middungeard / moncynnæs Uard,",
      en: "Then Middle-earth / mankind's guardian,",
      la: "dehinc terram humani generis Custos",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þiudans aiweins / afar þata gatewida",
      ang: "eci Dryctin / æfter tīadæ",
      en: "eternal Lord, / after bestowed",
      la: "... creavit",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "firƕja fairƕu / frauja allwaldands.",
      ang: "fīrum foldu / Frēa allmectig.",
      en: "the lands to men, / Lord almighty.",
      la: "... omnipotens.",
    },
    notes: `"*firƕeis from PGm firƕijaz which decended to various other
Germanic languages to mean "the living, men, people" (plural)
and supposedly turned into Crimean Gothic "fers"`
  }], info)}
</p>`

  article += html`<div class='poem'>${poem}</div>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Liuþ Kaidmonis", en: "Cædmon's Hymn" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Cædmon's Hymn</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2026).</span>
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