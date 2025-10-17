import
{
  Anchor,
  createArticleBody,
  createArticleHeaders,
  html,
  PageGenerator,
} from "@server/tools"


const title = "Gothic Transliterator"
const description = "A Gothic-Latin transliterator by 2sh."


const anchors: Anchor[] = [
  {
    name: 'transliterator',
    lang: "en",
    title,
    description,
  }
]

const generator: PageGenerator = info =>
{
  const article = html`<header>
  <h1>Gothic Transliterator</h1>
</header>
<div id="between" x-data="{text: ''}">
  <div class="text-container">
    <textarea x-model="text"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"></textarea>
  </div>
  <div class="options">
    <div class="row">
      <div class="group">
        <button @click='text = $store.gothic.fromLatin(text)'>To Gothic</button>
        <button @click='text = $store.gothic.toLatin(text)'>To Latin</button>
        <button @click='text = $store.gothic.toIpa(text)' title='Native words only'>To IPA</button>
      </div>
      <div class="group">
        <button @click='text = $store.gothic.addDiaereses(text)'>Fix diaereses</button>
        <button @click='text = $store.gothic.addSoftHyphens(text)'>Add soft hyphens</button>
        <button @click='text = $store.gothic.removeDiacritics(text)' title='Removes diacritics, keeping diaereses'>Remove diacritics</button>
        <button @click='text = $store.gothic.removeSuperfluousDiacritics(text)' title='Removes diacritics'>Remove superfluous diacritics</button>
      </div>
    </div>
    <div class="row">
      <div class="group">
        <label>Capitalise:<input type="checkbox" x-model="$store.gothic.capitalize"></label>
        <label>Preserve diacritics:<input type="checkbox" x-model="$store.gothic.preserveDiacritics"></label>
      </div>
    </div>
    <div class="row">
      <div class="group">
        <label title='Up to 999 is attested, the "Above 999" option is my neologism, separating thousands by colon.'>Number conversion: <select x-model="$store.gothic.numberConversion">
            <option value="none">Off</option>
            <option value="normal">Up to 999 only</option>
            <option value="big">Above 999</option>
          </select></label>
      </div>
    </div>
    <div class="row">
      <div class="group">
        <label>𐌸: <select x-model="$store.gothic.th">
          <option value="">þ</option>
          <option value="c">c</option>
        </select></label>
        <label>𐍈: <select x-model="$store.gothic.hv">
          <option value="">ƕ</option>
          <option value="hv">hv</option>
          <option value="v">v</option>
        </select></label>
      </div>
    </div>
  </div>
  <div>
<p>
A tool for transliterating Gothic text between the Gothic and Latin alphabets,
and various other features for displaying Gothic text.
</p>
<p>
From Latin, ƕ, hv and v will convert to 𐍈, and þ and c to 𐌸.
From Gothic 𐍈 and 𐌸 convert as chosen in the dropdown boxes.
</p>
<p>
The 'To IPA' converter goes by the usual patterns of native words for au and ai,
so short before h, ƕ and r, and long otherwise. It doesn't have a dictionary of the
exceptions to these patterns and long vowels of 'a' and 'u', and it doesn't recognise loanwords (yet).
It will make use of diacritics though, ā /aː/, ū /uː/, aí /ɛ/, aú /ɔ/, ái /ɛː/, áu /ɔː/.
It probably still needs adjusting for some prefixes, compound words and bigger consonant clusters.
To see syllable boundaries, click the 'Add soft hyphens' button first.
</p>
<p>
The 'Fix diaereses' button adds the diaereses (two dots) to i and 𐌹,
word initially and within words where appropriate. Adding them within words may
still need improving.
</p>
<p>
The 'Add soft hyphens' button adds the soft hyphen unicode character (U+00AD)
between syllables. To use this function, first convert the text to Latin if it's in
Gothic, and then convert back to Gothic if so desired.
I'll make this convert directly from Gothic too eventually.
To visually see where these soft hyphens have been placed, use the 'To IPA' button.
The determining of the syllable boundaries may still need improving.
</p>
<p>
The 'Remove diacritics' button removes all diacritics except for the diaereses on 𐌹̈, ï and Ï.
</p>
<p>
The 'Remove superfluous diacritics' button removes the diacritics
of aí and aú before h, ƕ and r, of ái and áu if not before those, and of ē and ō.
This is "superfluous" from a pronunciation perspective, not an etymological one.
The idea behind this is for teaching people to eventually read only with the
Gothic alphabet, more easily noticing and memorising the few words that have the
diacritics.
</p>
<p>
When converting to Gothic, diacritics are removed by default.
The 'Preserve diacritics' feature preserves them by adding them
as a Unicode combining diacritics after the Gothic characters.
Though they could, Gothic fonts normally do not support this however,
and the marks end up not being placed well.
</p>
<p>
The number converter is default set to convert only numbers up to 999
as that's all that's attested.
The above 999 setting is an idea I had for larger numbers,
with colons acting as 1000 separators.
</p>
<p>
If you spot any issues, <i>please</i> do tell me,
as I'd like to publish the functionality on this page for free at some point.
</p>
  </div>
</div>`

  return html`<!doctype html>
<html lang="${info.lang}">
  <head>
    ${createArticleHeaders(info)}
  </head>
  <body>
    ${createArticleBody(info, article)}
    <script type="module" src="scripts/transliterator.js"></script>
  </body>
</html>`
}

export default {
  anchors,
  generator
}
