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

global.lineId = 0


const slug = 'menanahts'
const title = '𐌼𐌴𐌽𐌰𐌽𐌰𐌷𐍄𐍃'
const description = "𐌼𐌴𐌽𐌰𐌽𐌰𐌷𐍄𐍃, 𐍃𐌺𐌴𐌹𐍂𐌴𐌹𐌽𐍃 𐌹̈𐌽 𐍂𐌰𐌶𐌳𐌰𐌹 𐌲𐌿𐍄𐌹𐍃𐌺𐌰𐌹."


const anchors: Anchor[] = [
  {
    name: slug,
    lang: "got-Goth",
  },
  {
    name: slug + ".lat",
    lang: "got-Latn"
  },
]

const generator: PageGenerator = info =>
{
  let article = ''

  article += html`<header>
  <h1>${toGothicLines([{
    text: {
      got: 'Menanahts',
      de: "Mondnacht",
    },
  },], info)}</h1>
</header>`

  let poem = ''

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Ïta was swe himins",
      de: "Es war, als hätt’ der Himmel",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "airþai ïn silain kukidedi,",
      de: "Die Erde still geküßt,",
    },
    notes:
      `silan seems to have both still and quiet which fits well here.
silains unattested but following þahains from þahan.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "ei si ïn skeimin blomins",
      de: "Daß sie im Blütenschimmer",
    },
    notes: `Although in the dict skeima means lantern, torch,
I feel like it would have had the meaning shine too as Gothic also has skeinan.

Wondering whether a word for blossom/Blüte would be better though using
blomins. Using blomins in singular for the rhyme.`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "nu bi ïna draumjan þaurftedi.",
      de: "Von ihm nun träumen müßt’.",
    },
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Luftus ïddja þairh haiþjos,",
      de: "Die Luft ging durch die Felder,",
    },
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "ahisa wagidedun hnasquba,",
      de: "Die Ähren wogten sacht,",
    },
    notes: `ahis from *ahaz`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "rūskodedun miþ rimisa waldjus,",
      de: "Es rauschten leis’ die Wälder,",
    },
    notes: `rūskon from *rūskōną`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "nahts miþ stairnon skeirs abraba.",
      de: "So sternklar war die Nacht.",
    },
  }], info)}
</p>`

  poem += html`<p>
${toGothicLines([{
    text: {
      got: "Jah braidida meina saiwala",
      de: "Und meine Seele spannte",
    },
    notes: `taking apart the attested usbraidjan and sticking ut at the end`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "fiþrakans izos ūt fairra,", // fiþrahaman
      de: "Weit ihre Flügel aus,",
    },
    notes:
      `NGo [url=https://edmundfairfax.com/2016/09/19/word-for-wing-gothic-language/]fiþraks[/url] from PGm *feþrakaz`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "þlaug þairh landa saila,",
      de: "Flog durch die stillen Lande,",
    },
    notes: `NGo *þliugan, following biugan from PGm *beuganą

*sails from PGm *sailaz`
  }], info)}
<br>
${toGothicLines([{
    text: {
      got: "swe þlugi si ana haima.",
      de: "Als flöge sie nach Haus.",
    },
    notes: `using ana for ACC, "du haimai" phrase from NeoGothic:
"while 'haims' means village, this kind of adverbial phrase is common
in language even where the word for village has not yet come to mean home,
see attested afhaim(ei)s and anahaim(ei)s for 'absent' and 'present'"`
  }], info)}
</p>`

  article += html`<div class='poem'>${poem}</div>`


  article += html`<p class="annotation">
  <span class="nowrap">${toGothicLines([{
    text: { got: "Menanahts", en: "Mondnacht" },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "ïn razdai gutiskai,", en: "in the Gothic language," },
  }], info)}</span>
  <span class="nowrap">${toGothicLines([{
    text: { got: "skeireins þairh Ïostaihan (2025)", en: "a translation by 2sh (2025)." },
  }], info)}</span>
</p>`

  article += html`<p lang='en' class="annotation">
  <span class="nowrap">Mondnacht by Joseph von Eichendorff</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`

  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info, title, description)}
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