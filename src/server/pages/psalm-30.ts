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

// https://www.septuagint.bible/-/psalmos-30
// https://biblehub.com/psalms/31-1.htm
// https://biblehub.com/interlinear/apostolic/psalms/31.htm
// https://biblebento.com/index.html?lxx1i&230.30.1
// https://www.bibleserver.com/EU.SLT.ELB/Psalm31
// https://ebible.org/eng-Brenton/

const slug = 'psalmo-30'
const title = 'Psalmo 30'
const description = "Psalmo 30, skeireins in razdai gutiskai."

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
      got: 'Psalmo 30',
      en: "Psalm 30",
    },
  },], info)}</h1>
  <div class="intro"><span class='verse'>${toGothicLines([{
    text: {
      got: "Und andi, psalmo Daweida. [...]",
      grc: "Εἰς τὸ τέλος· ψαλμὸς τῷ Δαυΐδ· ἐκστάσεως.",
      en: "For the end, a Psalm of David, an utterance of extreme fear. ",
    },
    notes: `alt english: of ecstasy`
  }], info)}</span></div>
</header>`

  article += html`<p class='dropcap' style="counter-set: verse 2">
<span class='verse'>${toGothicLines([{
    text: {
      got: "Hnaiwei du mis auso Þein, sniumei uslausjan mik; sijais mis guþ ufarskildjands jah gards þadei mag þliuhan du nasjan mis.",
      grc: "κλῖνον πρός με τὸ οὖς σου, τάχυνον τοῦ ἐξελέσθαι με· γενοῦ μοι εἰς Θεὸν ὑπερασπιστὴν καὶ εἰς οἶκον καταφυγῆς τοῦ σῶσαί με.",
      en: "Incline thine ear to me; make haste to rescue me: be thou to me for a protecting God, and for a house of refuge to save me.",
    },
    notes: `"sniumei qiman at mis sprauto;" Timothy II 4:9,

ὑπερασπιστὴν made of prefix "over", "shield" and agent suffix,
so I got *skildjan from PGm and added ufar-. Might change it as it could perhaps
be understood as overprotectant, excessively protectant,... but that's maybe what
you want from God?

using the "þadei magum þliuhan" again for refuge`
  }], info)}</span>
</p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Psalmo 30", en: "Psalm 30" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">LXX Psalm 30 (MT 31)</span>
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