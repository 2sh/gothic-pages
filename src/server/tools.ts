import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

import
{
  html,
  safeHtmlText,
  safeHtmlAttribute,
} from '@common/tools'
import { modes } from "@common/article"
import { GothicLineData } from "@common/types"

export
{
  html,
  safeHtmlText,
  safeHtmlAttribute,
} from '@common/tools'

declare global {
  var lineId: number;
}
global.lineId = 0

export function toGothicLine(data: GothicLineData)
{
  global.lineId++

  const htmlText = modes.simple(data.text.got)
  const info: GothicLineData = {
    text: data.text,
    notes: !data.notes ? undefined : bbobHTML(safeHtmlText(data.notes), presetHTML5())
  }
  const attrLineInfo = safeHtmlAttribute(JSON.stringify(info))

  return html`<span id="L${global.lineId}" class="i-line"
data-line='${attrLineInfo}'>${htmlText}</span>`
}

const htmlInfoBox = html`<template x-data x-if="$store.general.selectedLineInfo">
  <div id="info-box" lang='en'>
    <div id="info-box-inner">
      <div class="menu">
        <div>
          <a class='line-id'
            :href="$store.general.getPath() + '#L' + $store.general.selectedLineId.toString()"
            x-text="'L' + $store.general.selectedLineId.toString()"
            title="A Link to this line"></a>
        </div>
        <div>
          <button class='simple-text square'
            @click="$store.general.selectedLineInfo = null">X</button>
        </div>
      </div>
      <div id="info-box-content">
        <div>
          <template x-for='(text, lang) in $store.general.selectedLineInfo.text'>
          <div>
            <p class='title' x-text="$store.general.languageNames.of(lang)"></p>
            <template x-if="lang == 'got'">
              <p lang='got' x-html="$store.general.modes[$store.general.mode](text)"></p>
            </template>
            <template x-if="lang != 'got'">
              <p :lang='lang' x-text="text"></p>
            </template>
          </div>
          </template>
        </div>
        <template x-if="$store.general.selectedLineInfo.notes">
          <div>
            <p class='title'>Notes</p>
            <template x-for="line in $store.general.selectedLineInfo.notes.split('\n\n')">
              <p x-html="line"></p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>`

// SVG icons taken from https://heroicons.com/mini

const darkModeButton = html`<button x-data
  @click="$store.general.darkMode = !$store.general.darkMode">
  <template x-if='$store.general.darkMode'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
    </svg>
  </template>
  <template x-if='!$store.general.darkMode'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
    </svg>
  </template>
</button>`

const modeSelector = (includeModes: string[]) => html`<select
    x-data x-model="$store.general.mode">
  <option value="simple">𐌰𐌹𐌽𐍆𐌰𐌸𐍃</option>
  <option value="serif">𐌼𐌹𐌸 𐍃𐍄𐍂𐌹𐌺𐌹𐌼</option>
  ${includeModes.includes("biblical")
    ? '<option value="biblical">𐌰𐍆𐌰𐍂𐌱𐍉𐌺𐍉𐌼</option>'
    : ''}
  <option value="latin">Lateins</option>
</select>`

type ConfigArticleBody = {
  hasGothic?: boolean,
  includeModes?: string[],
  isHome?: boolean,
}

export function createArticleBody(content: string, config?: ConfigArticleBody)
{
  const conf: Required<ConfigArticleBody> = {
    hasGothic: true,
    includeModes: [],
    isHome: false,
    ...config
  }

  const homeButton = html`<a href=".">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
  </svg>
</a>`

  return html`<main>
  <div id="article-container">
    <article>
      <div id="article-inner">
        <div class="menu">
          <div>
            ${conf.isHome ? '' : homeButton}
          </div>
          <div>
            ${darkModeButton}
            ${conf.hasGothic ? modeSelector(conf.includeModes) : ''}
          </div>
        </div>
        <div id="article-content" data-reset-area>${content}</div>
      </div>
    </article>
  </div>
${conf.hasGothic ? htmlInfoBox : ''}
</main>
<script type="module" src="scripts/article.js"></script>`
}

export const articleHead = html`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/styles/main.css" rel="stylesheet">
<link href="assets/styles/article.css" rel="stylesheet">`