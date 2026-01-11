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

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Frauja, gakaust mik, jah kunþes mik;",
      grc: "Κύριε, ἐδοκίμασάς με, καὶ ἔγνως με·",
      en: "O Lord, Thou hast examined me, and known me.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Þū kunþes gasiss meina jah urrist meina, þū frost mitonins meinos fairraþro;",
      grc: "σὺ ἔγνως τὴν καθέδραν μου καὶ τὴν ἔγερσίν μου, σὺ συνῆκας τοὺς διαλογισμούς μου ἀπὸ μακρόθεν·",
      en: "Thou hast known my down-sitting, and mine up-rising, thou hast known my thoughts from afar off.",
    },
    notes: `*gasiss from gasitan + -ss`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Staiga meina jah badi mein fanst jah allans wigans meinans faúrawisses,",
      grc: "τὴν τρίβον μου καὶ τὴν σχοῖνόν μου ἐξιχνίασας καὶ πάσας τὰς ὁδούς μου προεῖδες,",
      en: "Thou hast searched into my path and my lot, and all my ways hast Thou forseen,",
    },
    notes: `σχοῖνόν seems to mean rush (camel hay) but it can also mean rush bed. As the Masoretic is "laying down", I've gone with bed.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Unte nist liutei ïn tuggon meinai.",
      grc: "ὅτι οὐκ ἔστι δόλος ἐν γλώσσῃ μου.",
      en: "For there is no guile in my tongue.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Sai, Frauja, þū kunþes alla, þo aftumistona jah þo frumistona; Þū gadaiht mik jah galagides ana mis handu þeina.",
      grc: "ἰδού, Κύριε, σὺ ἔγνως πάντα, τὰ ἔσχατα καὶ τὰ ἀρχαῖα· σὺ ἔπλασάς με καὶ ἔθηκας ἐπ᾿ ἐμὲ τὴν χεῖρά σου.",
      en: "Lo, O Lord, Thou hast known all things, the last and the first; Thou hast made me and hast laid Thy hand upon me.",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Sildaleikniþ kunþi þeina ïn mis; si gaswinþnoda, allis ni mag gatilon ija.",
      grc: "ἐθαυμαστώθη ἡ γνῶσίς σου ἐξ ἐμοῦ· ἐκραταιώθη, οὐ μὴ δύνωμαι πρὸς αὐτήν.",
      en: "Thy knowledge is too wonderful for me; it is too hard, I cannot attain unto it.",
    },
    notes: `[she has become strong], [by no means] not [able to].1PS attain her`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Ubi ... ;",
      grc: "ποῦ πορευθῶ ἀπὸ τοῦ πνεύματός σου καὶ ἀπὸ τοῦ προσώπου σου ποῦ φύγω;",
      en: "Whither shall I go then from Thy Spirit? Or whither shall I feel from Thy presence?",
    },
    notes: `[she has become strong], [by no means] not [able to].1PS attain her`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "Jabai ussteiga ïn himin, þū þar ïs; jabai atgagga ïn halja, atïs;",
      grc: "ἐὰν ἀναβῶ εἰς τὸν οὐρανόν, σὺ εἶ ἐκεῖ· ἐὰν καταβῶ εἰς τὸν ᾅδην, πάρει·",
      en: "If I climb up into heaven, Thou art there; if I go down to hell, Thou art there also.",
    },
  }], info)}
</p>`

  article += html`<div class='poem'>${poem}</div>`


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