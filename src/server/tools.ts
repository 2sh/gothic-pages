import { fromLatin } from "@common/transliterate"

import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

import
{
  html,
  safeHtmlText,
  safeHtmlAttribute,
} from '@common/tools'
import { modernReplace } from "@common/article"

export
{
  html,
  safeHtmlText,
  safeHtmlAttribute,
} from '@common/tools'

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

  const htmlText = safeHtmlText(modernReplace(fromLatin(data.text.got)))
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
x-html="$store.general.modes[mode](info.text.got)"
>${htmlText} </span>`
}

const htmlInfoBox = html`<template x-if="selectedLineInfo">
  <div id="info-box" lang='en'>
    <div id="info-box-inner">
      <div class="menu">
        <div>
          <a class='line-id'
            :href="$store.general.getPath() + '#L' + selectedLineInfo.id.toString()"
            x-text="'L' + selectedLineInfo.id.toString()"
            title="A Link to this line"></a>
        </div>
        <div>
          <button class='simple-text square'
            @click="selectedLineInfo = null; $store.general.removeHash()">X</button>
        </div>
      </div>
      <div id="info-box-content">
        <div>
          <template x-for="lang in langs">
          <div>
            <p class='title' x-text="$store.general.languageNames.of(lang)"></p>
            <template x-if="lang == 'got'">
              <p lang='got' x-html="$store.general.modes[mode](selectedLineInfo.text[lang])"></p>
            </template>
            <template x-if="lang != 'got'">
              <p :lang='lang' x-text="selectedLineInfo.text[lang]"></p>
            </template>
          </div>
          </template>
        </div>
        <template x-if="selectedLineInfo.notes">
          <div>
            <p class='title'>Notes</p>
            <template x-for="line in selectedLineInfo.notes.split('\n\n')">
              <p x-html="line"></p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>`


const darkModeButton = html`<button class='simple-text square'
  x-text="$store.general.darkMode ? '☀' : '☾'"
  @click="$store.general.darkMode = !$store.general.darkMode"></button>`

const modeSelector = (includeModes: string[]) => html`<select x-model="mode">
  <option value="simple">𐌰𐌹𐌽𐍆𐌰𐌸𐍃</option>
  <option value="serif">𐌼𐌹𐌸 𐍃𐍄𐍂𐌹𐌺𐌹𐌼</option>
  ${includeModes.includes("biblical") ? '<option value="biblical">𐌰𐍆𐌰𐍂𐌱𐍉𐌺𐍉𐌼</option>' : ''}
  <option value="latin">Lateins</option>
</select>`

export function createBody(content: string, classes?: string[])
{
  const classesString = safeHtmlAttribute(JSON.stringify(classes ? classes : []))

  return html`<body x-data
  :class='[
    ...${classesString},
    ...(!$store.general.darkMode ? ["light-mode"] : []),
  ]'>
  ${content}
</body>`
}

export function createArticleBody(content: string, classes?: string[], langs: string[] = ['got'], includeModes: string[] = [])
{
  const hasGothic = langs.includes('got')
  const langsString = safeHtmlAttribute(JSON.stringify(langs ? langs : []))

  return createBody(html`<main x-data='{
    selectedLineInfo: null,
    mode: "simple",
    langs: ${langsString},
  }'
  :class='[
    "mode-" + mode,
    ...(selectedLineInfo !== null ? ["has-info-box"] : []),
  ]'>
  <div id="article-container">
    <article>
      <div id="article-inner">
        <div class="menu">
          <div>
            <a class='simple-text square' href="index.html">⌂</a>
          </div>
          <div>
            ${darkModeButton}
            ${hasGothic ? modeSelector(includeModes) : ''}
          </div>
        </div>
        <div id="article-content"
          @click="e => {if(!e.target.classList.contains('i-line')) { selectedLineInfo = null; $store.general.removeHash() }}">
          ${content}
        </div>
      </div>
    </article>
  </div>
${hasGothic ? htmlInfoBox : ''}
</main>
<script type="module" src="scripts/article.js"></script>`, classes)
}

export const articleHead = html`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/styles/main.css" rel="stylesheet">
<link href="assets/styles/article.css" rel="stylesheet">`