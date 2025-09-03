import { modes } from '@common/article'
import { GothicLineData } from '@common/types'

import {
  html,
} from '@common/tools'

import { persist, ref, tieInput } from './tools'


const languageNames = new Intl.DisplayNames(['en'], {
  type: 'language'
});

const initLineId = location.hash.replace('#', '')


function getPath()
{
  return window.location.pathname.split('#')[0]
}

function removeHash()
{
  history.pushState({}, '', getPath())
}

const body = document.body

// Mode selection

const elInputMode = document.querySelector('[data-input-mode]') as HTMLInputElement
const modeValue = tieInput(elInputMode, ref(''))

modeValue.on(newValue =>
{
  body.classList.forEach(cls => {if(cls.startsWith('mode-')) body.classList.remove(cls)})
  if (newValue !== modeValue.init) body.classList.add("mode-" + newValue)
})

// Selected Line

const selectedLineInfo = ref<GothicLineData | null>(null)
let selectedLineId: number | null = null

// Info box creation

const elInfoBoxId = document.querySelector('[data-info-box-id]') as HTMLAnchorElement
const elInfoBoxContent = document.querySelector('[data-info-box-content]') as HTMLButtonElement

function createInfoBox(info: GothicLineData)
{
  const textLines = Object.entries(info.text).map(([lang, line]) =>
    html`<div>
  <p class='title'>${languageNames.of(lang)}</p>
  <p lang='${lang}'>${lang == 'got' ? modes[modeValue.value](line) : line}</p>
</div>`).join('')

  const notes = !info.notes ? '' : html`<div>
  <p class='title'>Notes</p>
  ${info.notes.split('\n\n').map(line => html`<p>${line}</p>`).join('')}
</div>`

  return html`<div>
  <div>
    ${textLines}
  </div>
  ${notes}
</div>`
}

selectedLineInfo.on(() =>
{
  body.classList.toggle("has-info-box", selectedLineInfo.value !== null)
  if(selectedLineInfo.value === null)
  {
    selectedLineId = null
    removeHash()
    return
  }

  const lineId = 'L' + selectedLineId
  elInfoBoxId.textContent = lineId
  elInfoBoxId.href = getPath() + "#" + lineId

  elInfoBoxContent.innerHTML = createInfoBox(selectedLineInfo.value)
})

// Info Box close button

const elInfoBoxCloseButtons = document.querySelectorAll('[data-info-box-close]')
for (const button of elInfoBoxCloseButtons)
{
  button.addEventListener('click', () => selectedLineInfo.value = null)
}


// Lines

const lines = document.querySelectorAll('[data-line]')
for (const line of lines)
{
  const info: GothicLineData =
    JSON.parse(line.getAttribute('data-line') || 'null')
  if (info === null) continue
  const id = parseInt(line.id.match(/\d+/)![0])

  function selectCurrentLine()
  {
    selectedLineId = id
    selectedLineInfo.value = info
    removeHash()
  }

  if (initLineId == line.id) selectCurrentLine()

  modeValue.on(newValue =>
  {
    line.innerHTML = modes[newValue](info.text["got"])
  })

  selectedLineInfo.on(() =>
  {
    line.classList.toggle('line-selected', selectedLineId == id)
  })

  line.addEventListener('click', selectCurrentLine)
}


// Reset Area

const resetAreas = document.querySelectorAll('[data-reset-area]')
for (const resetArea of resetAreas)
{
  resetArea.addEventListener('click', (e) =>
  {
    const target = e.target as HTMLButtonElement
    if(!target.classList.contains('i-line'))
    {
      selectedLineInfo.value = null
    }
  })
}

// Dark Mode

const darkMode = persist('dark_mode', ref(window.matchMedia ?
    window.matchMedia('(prefers-color-scheme: dark)').matches : true))

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    darkMode.value = !!event.matches;
  });

function setDarkMode()
{
  body.classList.toggle("light-mode", !darkMode.value)
}
darkMode.on(setDarkMode)
setDarkMode()

const elDarkModeButtons = document.querySelectorAll('[data-dark-mode-button]')
for (const button of elDarkModeButtons)
{
  button.addEventListener('click', () => darkMode.value = !darkMode.value)
}