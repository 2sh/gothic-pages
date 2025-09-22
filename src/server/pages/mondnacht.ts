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
  notes: `In the original German, Himmel and Blütenschimmer don't rhyme fully.
I seem to have flipped that and made those two verses the only ones that perfectly rhyme.
Not that I think the rhymes that I came up with in the Gothic are bad, I quite like them.
Often either two vowels match (though not always in length), two consonants,
or in the case of hnasquba and habaida, the d and b are voiced,
the 'a's match and the switch from u to ai is somewhat pleasant.`
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
    got: "airþai kukjai ïn þahain,",
    de: "Die Erde still geküßt,",
  },
})}
<br>
${toGothicLine({
  text: {
    got: "ei si ïn skeimin blomins",
    de: "Daß sie im Blütenschimmer",
  },
  notes: `Although in the dict skeima means lantern, torch,
I feel like it would have had the meaning shine too as Gothic also has skeinan.

blomins in singular for the rhyme, though plural would perhaps be better`
})}
<br>
${toGothicLine({
  text: {
    got: "nu bi ïna þaurbi draumjan.",
    de: "Von ihm nun träumen müßt’.",
  },
  notes: `nun von ihm müsste träumen.`
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
    got: "rūskodedun miþ silainai waldjus,",
    de: "Es rauschten leis’ die Wälder,",
  },
  notes: `rūskon from *rūskōną`
})}
<br>
${toGothicLine({
  text: {
    got: "filu stairnono nahts habaida.",
    de: "So sternklar war die Nacht.",
  },
})}
</p>`

poem += html`<p>
${toGothicLine({
  text: {
    got: "Jah saiwala meina braidida",
    de: "Und meine Seele spannte",
  },
  notes: `taking apart the attested usbraidjan and sticking ut at the end`
})}
<br>
${toGothicLine({
  text: {
    got: "fiþrakans izos ut fairra,",
    de: "Weit ihre Flügel aus,",
  },
  notes:
`NGo [url=https://edmundfairfax.com/2016/09/19/word-for-wing-gothic-language/]fiþraks[/url] from PGm *feþrakaz`
})}
<br>
${toGothicLine({
  text: {
    got: "þlaug þairh þahāndona landa,",
    de: "Flog durch die stillen Lande,",
  },
  notes: `NGo *þliugan, following biugan from PGm *beuganą

German Lande could be either singular or plural here,
going with plural to rhyme -ida and -eiga`
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