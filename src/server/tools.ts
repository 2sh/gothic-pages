import { fromLatin } from "@common/transliterate"

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

export const html = String.raw

export function safeHtmlText(str: string)
{
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function safeHtmlAttribute(str: string, quot="'")
{
  return safeHtmlText(str)
    .replaceAll(quot, quot == "'" ? '&apos;' : '&quot;')
}


export type GothicLineData = {
  text: {[lang: string]: string},
  notes?: string
}

declare global {
  var lineId: number;
}
global.lineId = 0

export function toGothicLine(data: GothicLineData)
{
  global.lineId++

  const htmlText = safeHtmlText(fromLatin(data.text.got))
  const attrData = safeHtmlAttribute(JSON.stringify(
  {
    id: global.lineId,
    text: data.text,
    notes: !data.notes ? undefined : bbobHTML(safeHtmlText(data.notes), presetHTML5())
  }))


  return html`<span
id="L${global.lineId}"
class="i-line"
x-init="if($store.general.initLineId == 'L' + info.id) selectedLineInfo = info"
x-data='{ info: ${attrData} }'
@click="selectedLineInfo = info; $store.general.removeHash()"
:class="{ 'line-selected': selectedLineInfo == info }"
x-text="$store.general.modes[mode](info.text.got)"
>${htmlText}</span>`
}

const htmlInfoBox = html`<template x-if="selectedLineInfo">
  <div id="info-box">
    <div id="info-box-inner">
      <div class="menu">
        <div>
          <a class='line-id'
            :href="$store.general.getPath() + '#L' + selectedLineInfo.id.toString()"
            x-text="'L' + selectedLineInfo.id.toString()"
            title="A Link to this line"></a>
        </div>
        <div>
          <button class='square'
            @click="selectedLineInfo = null; $store.general.removeHash()">X</button>
        </div>
      </div>
      <div id="info-box-content">
        <div>
          <template x-for="lang in langs">
          <div :lang="lang">
            <h2 x-text="$store.general.languageNames.of(lang)"></h2>
            <template x-if="lang == 'got'">
              <p x-text="$store.general.modes[mode](selectedLineInfo.text[lang])"></p>
            </template>
            <template x-if="lang != 'got'">
              <p x-text="selectedLineInfo.text[lang]"></p>
            </template>
          </div>
          </template>
        </div>
        <template x-if="selectedLineInfo.notes">
          <div>
            <h2>Notes</h2>
            <template x-for="line in selectedLineInfo.notes.split('\n\n')">
              <p x-html="line"></p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>`


export function createArticleBody(content: string, classes?: string[], langs: string[] = ['got'])
{
  const classesString = safeHtmlAttribute(JSON.stringify(classes ? classes : []))
  const langsString = safeHtmlAttribute(JSON.stringify(langs ? langs : []))
  return html`<body
  x-data='{
    selectedLineInfo: null,
    mode: "simple",
    langs: ${langsString},
  }'
  :class='[
    ...${classesString},
    ...(!$store.general.darkMode ? ["light-mode"] : []),
    ...(selectedLineInfo !== null ? ["has-info-box"] : []),
  ]'>
  <main>
    <div id="article-container">
      <article>
        <div id="article-inner">
          <div class="menu">
            <div>
              <a class='square' href="index.html">⌂</a>
            </div>
            <div>
              <button class='square'
                x-text="$store.general.darkMode ? '☀' : '☾'"
                @click="$store.general.darkMode = !$store.general.darkMode"></button>
              <select x-model="mode">
                <option value="simple" class="option-simple">𐌰𐌹𐌽𐍆𐌰𐌸𐍃</option>
                <!--<option value="biblical">𐌰𐍆𐌰𐍂𐌱𐍉𐌺𐍉𐍃</option>-->
                <option value="latin">Lateins</option>
              </select>
            </div>
          </div>
          <div id="article-content"
            @click="e => {if(!e.target.classList.contains('i-line')) { selectedLineInfo = null; $store.general.removeHash() }}">
            ${content}
          </div>
        </div>
      </article>
    </div>
${htmlInfoBox}
  </main>
  <script type="module" src="scripts/article.js"></script>
</body>`
}

export const articleHead = html`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/styles/text.css" rel="stylesheet">
<link href="assets/styles/simple-light.css" rel="stylesheet">
<link href="assets/styles/simple-dark.css" rel="stylesheet">`