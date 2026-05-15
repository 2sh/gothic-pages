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
      got: "Nu hazjan skulum / himinis ward,",
      ang: "Nū scylun hergan / hefaenrīcaes Uard,",
      en: "Now [we] shall honour / heaven-kingdom's guardian,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "mitandins maht / jah is mun ahins,",
      ang: "metudæs maecti / end his mōdgidanc,",
      en: "the measurer's might / and his mind's plan,",
    },
    notes: `Though usually after, John 9:28 is an attestation of genitive 'is'
coming before the thing it possesses. I think it should be clear enough in
this case too, for the stress pattern to fall on mun and ahins.

For a translation, I think runa could work for mōdgidanc as the latin being
consilium and that translating either to garuna when it's about a council
and runa if it's about purpose/motive.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "waurstw wulþuattins / swe is wundris ƕizuh,",
      ang: "uerc Uuldurfadur / suē hē uundra gihuaes,",
      en: "the work of the father of glory / as he of each wonder,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þiudans aiweins / gaþwastida mel",
      ang: "ēci dryctin / ōr āstelidæ",
      en: "eternal lord, / the origin established;",
    },
    notes: `Using þiudans as frauja equivelent OE Frēa comes up later.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "is frumist gaskop / manne barnam",
      ang: "hē ǣrist scōp / aelda barnum",
      en: "he first created / for the children of men",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "himin swe hrot / hailags skaps.",
      ang: "heben til hrōfe / hāleg scepen.",
      en: "heaven for a roof, / holy creator.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þan midjungard / manasedais wards,",
      ang: "Thā middungeard / moncynnæs Uard,",
      en: "Then Middle-earth / mankind's guardian,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þiudans aiweins / afar þata fragaf",
      ang: "eci Dryctin / æfter tīadæ",
      en: "eternal Lord, / after bestowed",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fairƕu mannam / Frauja allwaldands.",
      ang: "fīrum foldu / Frēa allmectig.",
      en: "the lands to men, / Lord almighty.",
    },
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
    text: { got: "skeireins fram Iohannes Haggwiþos (2025).", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Cædmon's Hymn</span>
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