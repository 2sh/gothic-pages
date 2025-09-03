import { modes } from '@common/article'
import { GothicLineData } from '@common/types'

import { reactive } from '@arrow-js/core'
import {
  html,
} from '@common/tools'

import { persist, tieInput } from './tools'


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
const modeValue = tieInput(elInputMode)

modeValue.$on('value', () =>
{
  body.classList.forEach(cls => {if(cls.startsWith('mode-')) body.classList.remove(cls)})
  if (modeValue.value !== modeValue.init) body.classList.add("mode-" + modeValue.value)
})

// Selected Line

const selectedLine = reactive({
  id: (() : (number | null) => null)(),
  info: (() : (GothicLineData | null) => null)(),
})

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

selectedLine.$on('info', () =>
{
  body.classList.toggle("has-info-box", selectedLine.info !== null)
  if(selectedLine.info === null)
  {
    selectedLine.id = null
    removeHash()
    return
  }

  const lineId = 'L' + selectedLine.id
  elInfoBoxId.textContent = lineId
  elInfoBoxId.href = getPath() + "#" + lineId

  elInfoBoxContent.innerHTML = createInfoBox(selectedLine.info)
})

// Info Box close button

const elInfoBoxCloseButtons = document.querySelectorAll('[data-info-box-close]')
for (const button of elInfoBoxCloseButtons)
{
  button.addEventListener('click', () => selectedLine.info = null)
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
    selectedLine.id = id
    selectedLine.info = info
    removeHash()
  }

  if (initLineId == line.id) selectCurrentLine()

  modeValue.$on('value', () =>
  {
    line.innerHTML = modes[modeValue.value](info.text["got"])
  })

  selectedLine.$on('id', () =>
  {
    line.classList.toggle('line-selected', selectedLine.id == id)
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
      selectedLine.info = null
    }
  })
}

// Dark Mode

const darkMode = persist('dark_mode', window.matchMedia ?
    window.matchMedia('(prefers-color-scheme: dark)').matches : true)

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    darkMode.value = !!event.matches;
  });

function setDarkMode()
{
  body.classList.toggle("light-mode", !darkMode.value)
}
darkMode.$on('value', setDarkMode)
setDarkMode()

const elDarkModeButtons = document.querySelectorAll('[data-dark-mode-button]')
for (const button of elDarkModeButtons)
{
  button.addEventListener('click', () => darkMode.value = !darkMode.value)
}