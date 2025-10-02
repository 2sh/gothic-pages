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

function toGothicLine(data: GothicLineData, pageInfo: PageInfo)
{
  global.lineId++


  for (const key in data.text)
  {
    data.text[key] = data.text[key].normalize('NFC')
  }

  const htmlText = pageInfo.lang == 'got-Latn'
    ? modes.latin(data.text.got)
    : modes.simple(data.text.got)

  delete data.text.got

  const info: GothicLineData = {
    text: data.text,
    notes: !data.notes
      ? undefined
      : bbobHTML(safeHtmlText(data.notes.normalize('NFC')), presetHTML5())
  }
  const attrLineInfo = safeHtmlAttribute(JSON.stringify(info))

  return html`<span id="L${global.lineId}" class="i-line"
data-line='${attrLineInfo}'>${htmlText}</span>`
}

export function toGothicLines(data: GothicLineData[], pageInfo: PageInfo)
{
  return data.map(d => toGothicLine(d, pageInfo)).join('')
}

const htmlInfoBox = html`<div id="info-box" lang='en'>
  <div id="info-box-inner">
    <div class="menu">
      <div data-info-box-id>

      </div>
      <div>
        <button class='simple-text square' lang='en' title='Close the info box' data-info-box-close>X</button>
      </div>
    </div>
    <div id="info-box-content" data-info-box-content></div>
  </div>
</div>`

// SVG icons taken from https://heroicons.com/mini

const darkModeButton = html`<button lang='en' title='Switch between dark and light mode' data-color-scheme-button>
  <svg class='light-mode-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
  </svg>
  <svg class='dark-mode-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
  </svg>
</button>`


const altButtons: {[lang: string]: string} = {
  'got-Goth': '𐌲',
  'got-Latn': 'L',
}

export function createArticleBody(info: PageInfoMain, content: string)
{
  const hasGothic = info.lang.startsWith('got')

  const homeButton = html`<a href="./" lang='en' title='Home'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
  </svg>
</a>`

  const isHome = info.name == 'index'
  const alt = info.alternatives.find(a => a.lang.startsWith('got'))

  return html`<main>
  <div id="article-container">
    <article>
      <div id="article-inner">
        <div class="menu">
          <div>
            ${isHome ? '' : homeButton}
          </div>
          <div>
            ${darkModeButton}
            ${ alt ? html`<a lang='en' title='Switch between Gothic and Latin script' href="${safeHtmlAttribute(alt.end)}">${altButtons[alt.lang]}</a>` : '' }
          </div>
        </div>
        <div id="article-content" data-reset-area>${content}</div>
      </div>
    </article>
  </div>
${hasGothic ? htmlInfoBox : ''}
</main>
<script type="module" src="scripts/article.js"></script>`
}

export function createArticleHeaders(info: PageInfoMain)
{
  const alternatives = info.alternatives.length ?
    [ info, ...info.alternatives ] : []

  return html`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${info.url}">${
 alternatives.map(a => `
<link rel="alternative" href="${a.url}" hreflang="${a.lang}">`).join('')}

<title>${safeHtmlText(info.title)}</title>
<meta name="description" content='${safeHtmlAttribute(info.description)}'>
<meta name="author" content="2sh">
<meta name="lastmod" content="${info.lastmod.toISOString()}">

<link href="assets/styles/main.css" rel="stylesheet">
<link href="assets/styles/article.css" rel="stylesheet">
<script>
document.documentElement.dataset.colorScheme = localStorage.getItem('color-scheme')
  || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark' : 'light')
</script>`
}

export interface Anchor {
  name: string,
  lang: string,
  title: string,
  description: string,
}

export type PageConstruction = {
  anchors: Anchor[],
  generator: PageGenerator,
}

export type PageGenerator = (info: PageInfoMain) => string

export interface PageInfo extends Anchor {
  protocol: string,
  host: string,
  path: string,
  dir: string,
  end: string,
  url: string,
  lastmod: Date,
}

export interface PageInfoMain extends PageInfo {
  alternatives: PageInfo[],
}
