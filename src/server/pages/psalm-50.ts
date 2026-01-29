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

// https://www.septuagint.bible/-/psalmos-50
// https://biblehub.com/psalms/51-1.htm
// https://biblehub.com/interlinear/apostolic/psalms/51.htm
// https://biblebento.com/index.html?lxx1i&230.50.1
// https://www.bibleserver.com/EU.SLT.ELB/Psalm51
// https://ebible.org/eng-Brenton/

const slug = 'psalmo-50'
const title = 'Psalmo 50'
const description = "Psalmo 50, skeireins ïn razdai gutiskai."

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
      got: 'Psalmo 50',
      en: "Psalm 50",
    },
  },], info)}</h1>
  <div class="intro"><span class='verse'>${toGothicLines([{
    text: {
      got: "Und andi, psalmo Daweida",
      grc: "Εἰς τὸ τέλος· ψαλμὸς τῷ Δαυΐδ",
      en: "Unto the end, a psalm to David",
    },
    notes: `Check notes of psalm 138`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἐν τῷ ἐλθεῖν πρὸς αὐτὸν Νάθαν τὸν προφήτην, ἡνίκα εἰσῆλθε πρὸς Βηρσαβεέ.",
      en: "when Nathan the prophet came to him, when he had gone in to Bersabee, the wife of Urias.",
    },
    notes: ``
  }], info)}</span></div>
</header>`

  article += html`<p class='psalm'>
<span class='verse'>${toGothicLines([{
    text: {
      got: "Armai mik, Guþ, bi mikila armahairtein Þeina jah bi managein bleiþeino Þeinaizo afswairb ungaraihtein meina.",
      grc: "ΕΛΕΗΣΟΝ με, ὁ Θεός, κατὰ τὸ μέγα ἔλεός σου καὶ κατὰ τὸ πλῆθος τῶν οἰκτιρμῶν σου ἐξάλειψον τὸ ἀνόμημά μου·",
      en: "Have mercy upon me, O God, according to Thy great mercy; and according to the abundance of Thy tender mercies blot out mine iniquity.",
    },
    notes: `Using managei instead of managduþs as the Greek πλῆθος is more
multitude instead of abundance. Some English translations use multitude here.

A strong contender for iniquity was unsibjona but that seems to need the plural
and is an adjective. Both ungaraihtei and unsibjis seem to translate iniquity.`
  }], info)}</span>
<span class='verse'>${toGothicLines([{
    text: {
      got: "...",
      grc: "ἐπὶ πλεῖον πλῦνόν με ἀπὸ τῆς ἀνομίας μου καὶ ἀπὸ τῆς ἁμαρτίας μου καθάρισόν με.",
      en: "Wash me thoroughly from mine iniquity, and my sin is ever before me.",
    },
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 50", en: "Psalm 50" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Ïostaiha (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">LXX Psalm 50 (MT 51)</span>
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