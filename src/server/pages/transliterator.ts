import {
  createArticleBody,
  createArticleHeaders,
  html,
} from "@server/tools"

const title = "Gothic Transliterator"

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
        <button @click='text = $store.gothic.removeDiacritics(text)' title='Removes diacritics, keeping diaereses'>Remove diacritics</button>
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
        <label>𐍈: <select x-model="$store.gothic.hw">
          <option value="">ƕ</option>
          <option value="hv">hv</option>
          <option value="v">v</option>
          <option value="wh">wh</option>
        </select></label>
      </div>
    </div>
  </div>
  <div>
    <h2 class='title'>Notes</h2>
<p>The 'To IPA' converter goes by the usual patterns of native words for au and ai,
so short before h, ƕ and r, and long otherwise. It doesn't have a dictionary of the
exceptions to these patterns and long vowels of 'a' and 'u', and it doesn't recognise loanwords (yet).
It will make use of diacritics though, ā /aː/, ū /uː/, aí /ɛ/, aú /ɔ/, ái /ɛː/, áu /ɔː/.
It probably still needs adjusting for some prefixes, compound words and bigger consonant clusters.
If you notice anything wrong, <i>please</i> do tell me. Behind the IPA converter is also
a soft hyphenation library for Gothic I'm developing that I'd like to publish for free at some point
(including the whole functionality behind these pages).
So improving this will also improve that.</p>
<p>The number converter is default set to convert only numbers up to 999 as that's all that's attested.
The above 999 setting is an idea I had for larger numbers, with colons acting as 1000 separators.</p>
  </div>
</div>`

const description = "A Gothic-Latin transliterator by 2sh."

const page = html`<!doctype html>
<html lang="got">
  <head>
    ${createArticleHeaders(title, description)}
    <link href="assets/styles/transliterator.css" rel="stylesheet">
  </head>
  <body>
    ${createArticleBody(article, { hasGothic: false })}
    <script type="module" src="scripts/transliterator.js"></script>
  </body>
</html>`

export default page
