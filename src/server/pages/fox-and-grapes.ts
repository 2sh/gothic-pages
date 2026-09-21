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


// Aesop's Tales: https://www.letsreadgreek.com/lrg-old/Aesop/readingschedule.htm
// Original: https://web.archive.org/web/20150609025549/https://www.letsreadgreek.com/Aesop/Perry15.htm#Chambry1GreekText
// Other Gothic TL: https://parchmentlore.com/fox-and-grapes-gothic/
// English TL: https://read.gov/aesop/005.html


/*
Ἀλώπηξ καὶ βότρυς
Ἀλώπηξ λιμώττουσα, ὡς ἐθεάσατο ἀπό τινος ἀναδενδράδος βότρυας κρεμαμένους, ἠβουλήθη αὐτῶν περιγενέσθαι καὶ οὐκ ἠδύνατο.
Ἀπαλλαττομένη δὲ πρὸς ἑαυτὴν εἶπεν· Ὄμφακές εἰσιν.
Οὕτω καὶ τῶν ἀνθρώπων ἔνιοι τῶν πραγμάτων ἐφικέσθαι μὴ δυνάμενοι δι' ἀσθένειαν τοὺς καιροὺς αἰτιῶνται.
*/


const slug = 'fauho-jah-weinabasja'
const title = 'Fauho jah Weinabasja'
const description = "Fauho jah Weinabasja, skeireins in razdai gutiskai."

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
      got: 'Fauho jah Weinabasja',
      grc: 'Ἀλώπηξ καὶ βότρυς',
      en: "The Fox and the Grapes",
    },
    notes: `Not using weinatains as it's not about the twig/branch,
but the bunch of grapes.`
  },], info)}</h1>
</header>`

  article += html`<p>
${toGothicLines([{
    text: {
      got: 'Fauho gredondei, biþe gasaƕ weinabasja skaunja hāhandona háuh af sum weinatriu in bagma, ufrakida sis du þaim, akei ni mahta þo ganiman.',
      en: "A famished fox, when she saw some beautiful grapes hanging high from a certain vine in a tree, tried to reach them, but couldn't obtain them.",
    },
  }], info)}</p>
<p>${toGothicLines([{
    text: {
      got: 'Nu afïddja si leitil, þan rann jah haihlaup ana þo. Aftra jah aftra sokida us allai mahtai seinai, iþ sware.',
      en: "She walked away a little, then ran and jumped at them. Again and again she tried with all her might, but in vain.",
    },
    notes: `aftiuhan fairra staþa leitil "a little from the land" Luke 5:3

iþ sware Mark 7:7`
  }], info)}</p>
<p>${toGothicLines([{
    text: {
      got: 'Galeiþandei þan qaþ sis: “Mis ni náuh gawrusqun du ganauhin. Weinabasja sūra ni galeikaiþ mis.”',
      en: "Turning away, she said to herself: “They are not yet ripe enough for me. I do not like sour grapes.”",
    },
    notes: `du ufarassau Corinthians II 10:15`
  }], info)}</p>
<p><i>
${toGothicLines([{
    text: {
      got: 'Sind ganohai þaiei in hindarweisein laiand jah frakunnun þatei ligiþ inu mitaþ ize.',
      en: "There are many who pretend to despise and belittle that which lies outside their measure/limit.",
    },
    notes: `inu mitaþ Corinthians II 10:13 Corinthians II 10:15 outside measure, beyond limit`
  }], info)}</i></p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Fauho jah Weinabasja", en: "The Fox and the Grapes" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Fox and the Grapes</span>
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