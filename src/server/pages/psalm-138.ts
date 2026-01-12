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

// https://www.septuagint.bible/-/psalmos-138
// https://biblehub.com/psalms/139-1.htm
// https://biblehub.com/interlinear/apostolic/psalms/139.htm

const slug = 'psalmo-138'
const title = 'Psalmo 138'
const description = "Psalmo 138, skeireins ïn razdai gutiskai."

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
      got: 'Psalmo 138',
      en: "Psalm 138",
    },
  },], info)}</h1>
</header>`

  article += html`<ol style='list-style: gothic;'>
<li value=''>${toGothicLines([{
    text: {
      got: "Frauja, gakaust mik, jah kant mik;",
      grc: "Κύριε, ἐδοκίμασάς με, καὶ ἔγνως με·",
      en: "O Lord, Thou hast proved me, and Thou knowest me.",
    },
  }], info)}</li>
<li value='2'>${toGothicLines([{
    text: {
      got: "Þū kant biþe gasita jah urreisa, Þū frost mitonim meinaim fairraþro.",
      grc: "σὺ ἔγνως τὴν καθέδραν μου καὶ τὴν ἔγερσίν μου, σὺ συνῆκας τοὺς διαλογισμούς μου ἀπὸ μακρόθεν·",
      en: "Thou knowest my downsitting, and mine uprising, Thou hast understood my thoughts from afar.",
    },
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Staiga meina jah badi mein ussokides jah allans wigans meinans faurawisses,",
      grc: "τὴν τρίβον μου καὶ τὴν σχοῖνόν μου ἐξιχνίασας καὶ πάσας τὰς ὁδούς μου προεῖδες,",
      en: "Thou hast searched out my path and my lot, and hast forseen all my ways;",
    },
    notes:
`σχοῖνόν seems to mean rush (camel hay) but apparently it can also mean "rush bed".
As the Masoretic is "laying down", I've gone with bed. "bed" is also used in
"Brenton's Septuagint Translation".`
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Unte nist liutei ïn tuggon meinai.",
      grc: "ὅτι οὐκ ἔστι δόλος ἐν γλώσσῃ μου.",
      en: "For there is no guile upon my tongue.",
    },
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Sai, Frauja, Þū kant alla, þo aftumistona jah þo frumistona; Þū gadaiht mik jah galagides ana mis handu Þeina.",
      grc: "ἰδού, Κύριε, σὺ ἔγνως πάντα, τὰ ἔσχατα καὶ τὰ ἀρχαῖα· σὺ ἔπλασάς με καὶ ἔθηκας ἐπ᾿ ἐμὲ τὴν χεῖρά σου.",
      en: "Behold, O Lord, Thou knowest all things, the last and the first; Thou hast fashioned, and laid Thine hand upon me.",
    },
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Sildaleik ïst kunþi Þein mis; ïst gaswinþida, ïk ni mag allis du ïmma gasniwan.",
      grc: "ἐθαυμαστώθη ἡ γνῶσίς σου ἐξ ἐμοῦ· ἐκραταιώθη, οὐ μὴ δύνωμαι πρὸς αὐτήν.",
      en: "Thy knowledge is too wonderful for me; it is great, I cannot attain unto it.",
    },
    notes: `Unsure where the "too" in English translations in the first half is coming from.`
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Ubi ... ;",
      grc: "ποῦ πορευθῶ ἀπὸ τοῦ πνεύματός σου καὶ ἀπὸ τοῦ προσώπου σου ποῦ φύγω;",
      en: "Whither shall I go from Thy Spirit? And whither shall I flee from Thy presence?",
    },
    notes: `[she has become strong], [by no means] not [able to].1PS attain her`
  }], info)}</li>
<li>${toGothicLines([{
    text: {
      got: "Jabai ussteiga ïn himin, Þū þar ïs; jabai atsteiga ïn halja, atis;",
      grc: "ἐὰν ἀναβῶ εἰς τὸν οὐρανόν, σὺ εἶ ἐκεῖ· ἐὰν καταβῶ εἰς τὸν ᾅδην, πάρει·",
      en: "If I ascend up into heaven, Thou art there; if I go down into Hades, Thou art there.",
    },
  }], info)}</li>
</ol>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 138", en: "Psalm 138" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2026)", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">LXX Psalm 138 (MT 139)</span>
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