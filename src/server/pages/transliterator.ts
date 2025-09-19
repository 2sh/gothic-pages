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
