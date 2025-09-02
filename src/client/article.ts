import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import { modes } from '@common/article'
import { GothicLineData } from '@common/types'

Alpine.plugin(persist)

// @ts-ignore
window.Alpine = Alpine

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

const general = Alpine.reactive({
  languageNames,
  darkMode: Alpine.$persist(
    window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
  ).as("dark_mode"),
  modes,
  getPath,
  removeHash,
  mode: "simple",
  selectedLineId: (() : (number | null) => null)(),
  selectedLineInfo: (() : (GothicLineData | null) => null)(),
})

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    // @ts-ignore this works but the TS def isn't right
    general.darkMode = !!event.matches;
  });

Alpine.store("general", general)

const body = document.body
Alpine.effect(() =>
{
  if(general.selectedLineInfo === null)
  {
    general.selectedLineId = null
    general.removeHash()
  }
  body.classList.toggle("has-info-box", general.selectedLineInfo !== null)
})

function setDarkMode()
{
  body.classList.toggle("light-mode", !general.darkMode)
}
Alpine.effect(setDarkMode)
setDarkMode()

Alpine.effect(() =>
{
  body.classList.forEach(cls => {if(cls.startsWith('mode-')) body.classList.remove(cls)})
  body.classList.add("mode-" + general.mode)
})

const resetAreas = document.querySelectorAll('[data-reset-area]')
for (const resetArea of resetAreas)
{
  resetArea.addEventListener('click', (e) =>
  {
    const target = e.target as HTMLButtonElement
    if(!target.classList.contains('i-line'))
    {
      general.selectedLineInfo = null
    }
  })
}

const lines = document.querySelectorAll('[data-line]')
for (const line of lines)
{
  const info: GothicLineData =
    JSON.parse(line.getAttribute('data-line') || 'null')
  if (info === null) continue
  const id = parseInt(line.id.match(/\d+/)![0])

  function selectCurrentLine()
  {
    general.selectedLineInfo = info
    general.selectedLineId = id
    removeHash()
  }

  if (initLineId == line.id) selectCurrentLine()

  Alpine.effect(() =>
  {
    line.innerHTML = modes[general.mode](info.text["got"])
  })

  Alpine.effect(() =>
  {
    line.classList.toggle('line-selected', general.selectedLineId == id)
  })

  line.addEventListener('click', selectCurrentLine)
}


Alpine.start()