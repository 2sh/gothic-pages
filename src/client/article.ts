import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import { modes } from '@common/article'
import { ClientLineData } from '@common/types'

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
  selectedLineInfo: (() : (ClientLineData | null) => null)(),
})

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    // @ts-ignore this works but the TS def isn't right
    general.darkMode = !!event.matches;
  });

Alpine.store("general", general)

const lines = document.querySelectorAll('[data-line]')
for (const line of lines)
{
  const info: ClientLineData = JSON.parse(line.getAttribute('data-line') || '{}')

  if (initLineId == line.id) general.selectedLineInfo = info

  Alpine.effect(() =>
  {
    line.innerHTML = modes[general.mode](info.text["got"])
  })

  Alpine.effect(() =>
  {
    line.classList.toggle('line-selected',
      general.selectedLineInfo !== null
      && info.id == general.selectedLineInfo.id)
  })

  line.addEventListener('click', () =>
  {
    general.selectedLineInfo = info
    removeHash()
  })
}


Alpine.start()