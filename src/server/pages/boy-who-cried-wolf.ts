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


// Aesop's Tales: https://web.archive.org/web/20260608085332/http://mythfolklore.net/aesopica/perry/index.htm
// Original: https://web.archive.org/web/20251209200731/https://www.mythfolklore.net/aesopica/chambry/318.htm


/*
Καὶ που παιδίον ποίμνια νέμον ἐφ' ὑψηλοῦ τόπου ἱστάμενον πολλάκις ἀνέκραγε· Βοηθεῖτέ μοι, λύκοι. Οἱ δὲ ἀγρότεροι τρέχοντες ἐν τῇ ποίμνῃ τοῦτον ηὕρισκον μηδαμῶς ἀληθεύοντα. Τοῦτο δὲ πολλάκις τοῦ παιδὸς πραξαμένου, οἱ τοιοῦτοι συνήρχοντο καὶ ἀεὶ ψεῦδος εὑρίσκοντες ἀπήρχοντο. Μετὰ δὲ ταῦτα τοῦ λύκου προσελθόντος, ὁ παῖς ἐβόα· Ὁ λύκος, δεῦτε. Ἐπεὶ δὲ οὐδεὶς ἐπίστευεν οὐδ' ἀπήρχετο βοηθῆσαι, ὁ λύκος ἀδείας λαβόμενος, εὐκόλως τὴν ποίμνην πᾶσαν διέφθειρεν.
Ὁ μῦθος δηλοῖ ὅτι τοσοῦτον οὐκ ὠφελεῖ τινα τὸ μὴ λαλεῖν τὰ ἀληθῆ ὅσον δεῖ φοβεῖσθαι μήπως ἐκ τούτου οὐδὲ τὰ ἀληθῆ λέγων εἰσακούσθῃ.

And when a child, standing on a high place, watching a flock of sheep, he cried out many times, "Help me, wolves." But the villagers, running to the flock, found this to be false. And this the child had done many times, such people gathered together and, always finding a lie, they went away. But after this, the wolf came, the child cried out, "Wolf, come." But no one believed him, nor did he come to help, the wolf, taking leave, easily destroyed the whole flock.
The myth states that it does not benefit someone so much not to speak the truth as to fear that he will not be heard for speaking the truth.



There was a young shepherd boy tending a flock of sheep on a high place, die friedlich auf einer Wiese grasten. Soon he became bored, the life in the pasture became very dull. All he could do to amuse himself was to talk to his dog or play on his shepherd's pipe.

And so, überlegte er sich, einen Spaß zu machen. Er rief so laut, dass man es bis zu dem in der Nähe liegenden Dorf hören konnte: "Wolf, Wolf," And as he expected, the Villagers who heard the cry dropped their work and ran in great excitement to the pasture. However when they got there they found the Boy doubled up with laughter at the trick he had played on them (lachte der Hirtenjunge nur und freute sich, dass er den Dorfbewohnern einen Schrecken eingejagt hatte.)

A few days later the Shepherd Boy again shouted, "Wolf! Wolf!" And again the Villagers ran to help him, only to be laughed at again.

But then one day, a wolf really did come and fell upon the sheep. In terror the boy ran towards the village, again shouting "Wolf! Wolf!". However villagers, who had been fooled twice before, heard the cry, but nobody stirred to help him as they had before.

The Wolf killed and frass a great many of the Boy's sheep and then slipped away into the forest.

_A liar will not be believed, even when he speaks the truth._

*/


const slug = 'hairdeis-liuts'
const title = 'Hairdeis Liuts'
const description = title + ", skeireins in razdai gutiskai."

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

  let article = ""

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: "Hairdeis Liuts",
      grc: 'Ποιμὴν παίζων',
      en: "The Lying Shepherd",
    },
  },], info)}</h1>
</header>`

  article += html`<p>
${toGothicLines([{
    text: {
      got: "Was magus juggs witānds ufaro hairdai awe in gawairþja ana stada háuhamma haldanai.",
      en: "There was a young boy who tended a flock of sheep held in peace on a high place.",
    },
    notes: `*aus from PGm *awiz

"witandans ufaro haidai" Luke 2:8`
  }], info)}
${toGothicLines([{
    text: {
      got: "Daga ƕammeh ni mahta in waihtai faginon, nibai ei du hunda seinamma qaþ jah swigloda. Jah suns warþ in unlustau; so libains ana þizai winjai warþ afmojandei filu.",
      en: "Each day, all he could do to amuse himself was to talk to his dog or play on his shepherd's pipe. And soon he became discouraged, the life in the pasture became very tiring.",
    },
    notes: `"ana haiþjai" Luke 17:31, so "ana winjai"`
  }], info)}
</p>
<p>
${toGothicLines([{
    text: {
      got: "Inuh þis nū þahta sis ƕeleik þatei leikai imma.",
      en: "And so he thought about what manner of thing could please him.",
    },
    notes: `Luke 1:29`
  }], info)}
${toGothicLines([{
    text: {
      got: `Ufwopida swaleikai stibnai mikilai, ei so und neƕa haim gahausida warþ: "Wulfs! Wulfs!"`,
      en: `He shouted with such a loud voice, that it could be heard up to the nearby village: "Wolf! Wolf!"`,
    },
    notes: `Luke 1:42`
  }], info)}
${toGothicLines([{
    text: {
      got: `Þannu nū jai, mannans ni þanaseiþs arbaididedun jah durunnun in aljana þo winja.`,
      en: `Therefore indeed, the villagers dropped their work and ran in great excitement to the pasture.`,
    },
  }], info)}
${toGothicLines([{
    text: {
      got: `Akei jaina, sunsei qemun, bigetun þana magu in hlasein bihlahjandan ina in þis listais þatei im gatawida.`,
      en: `However when they got there they found the boy in glee laughing at them because of the trick he had played on them.`,
    },
    notes: `John 11:29

gatawidedun imma Mark 9:13`
  }], info)}
</p>
<p><i>
${toGothicLines([{
    text: {
      got: "",
      en: "",
      de: "",
    },
  }], info)}</i></p>`

  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Hairdeis Liuts", en: "The Lying Shepherd" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "in razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins fram Iohannes Haggwiþos (2026).", en: "a translation by 2sh (2026)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">The Boy Who Cried Wolf</span>
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