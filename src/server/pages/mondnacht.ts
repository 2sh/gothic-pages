import
{
  html,
  createArticleBody,
  toGothicLine,
  createArticleHeaders,
} from '@server/tools'


// https://de.wikipedia.org/wiki/Mondnacht_(Eichendorff)

global.lineId = 0

const title = '𐌼𐌴𐌽𐌰𐌽𐌰𐌷𐍄𐍃'
let article = ''

article += html`<header>
  <h1>${toGothicLine({
  text: {
    got: 'Menanahts',
    de: "Mondnacht",
  },
},)}</h1>
</header>`

let poem = ''

poem += html`<p>
${toGothicLine({
  text: {
    got: "Ïta was swe himins",
    de: "Es war, als hätt’ der Himmel",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "airþai ïn silain kukidedi,",
    de: "Die Erde still geküßt,",
  },
  notes:
`silan seems to have both still and quiet which fits well here.
silains unattested but following þahains from þahan.`
})}
<br>
${toGothicLine({
  text: {
    got: "ei si ïn skeimin blomins",
    de: "Daß sie im Blütenschimmer",
  },
  notes: `Although in the dict skeima means lantern, torch,
I feel like it would have had the meaning shine too as Gothic also has skeinan.

Wondering whether a word for blossom/Blüte would be better though using
blomins. Using blomins in singular for the rhyme.`
})}
<br>
${toGothicLine({
  text: {
    got: "nu bi ïna draumjan þaurftedi.",
    de: "Von ihm nun träumen müßt’.",
  },
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Luftus ïddja þairh haiþjos,",
    de: "Die Luft ging durch die Felder,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "ahisa wagidedun hnasquba,",
    de: "Die Ähren wogten sacht,",
  },
  notes: `ahis from *ahaz`
})}
<br>
${toGothicLine({
  text: {
    got: "rūskodedun miþ rimisa waldjus,",
    de: "Es rauschten leis’ die Wälder,",
  },
  notes: `rūskon from *rūskōną`
})}
<br>
${toGothicLine({
  text: {
    got: "nahts miþ stairnon skeirs abraba.",
    de: "So sternklar war die Nacht.",
  },
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Jah braidida meina saiwala",
    de: "Und meine Seele spannte",
  },
  notes: `taking apart the attested usbraidjan and sticking ut at the end`
})}
<br>
${toGothicLine({
  text: {
    got: "fiþrakans izos ūt fairra,", // fiþrahaman
    de: "Weit ihre Flügel aus,",
  },
  notes:
`NGo [url=https://edmundfairfax.com/2016/09/19/word-for-wing-gothic-language/]fiþraks[/url] from PGm *feþrakaz`
})}
<br>
${toGothicLine({
  text: {
    got: "þlaug þairh landa saila,",
    de: "Flog durch die stillen Lande,",
  },
  notes: `NGo *þliugan, following biugan from PGm *beuganą

*sails from PGm *sailaz`
})}
<br>
${toGothicLine({
  text: {
    got: "swe þlugi si ana haima.",
    de: "Als flöge sie nach Haus.",
  },
  notes: `using ana for ACC, "du haimai" phrase from NeoGothic:
"while 'haims' means village, this kind of adverbial phrase is common
in language even where the word for village has not yet come to mean home,
see attested afhaim(ei)s and anahaim(ei)s for 'absent' and 'present'"`
})}
</p>`

article += html`<div class='poem'>${poem}</div>`


article += html`<p lang='en' class="annotation">
  <span class="nowrap">Mondnacht by Joseph von Eichendorff</span>
  <span class="nowrap">in the Gothic language,</span>
  <span class="nowrap">a translation by <a href='https://2sh.me'>2sh</a> (2025).</span>
</p>`


const description = "Mondnacht by Joseph von Eichendorff in the Gothic language, a translation by 2sh."

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
  </head>
  <body>
    ${createArticleBody(article)}
  </body>
</html>`

export default page