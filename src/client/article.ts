import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import { fromLatin } from '@common/transliterate';

Alpine.plugin(persist)

// @ts-ignore
window.Alpine = Alpine

const languageNames = new Intl.DisplayNames(['en'], {
  type: 'language'
});

type ModeFunc = (text: string, config: any) => string

const modes: {[key: string]: ModeFunc} = {
  simple: t => fromLatin(t),
  biblical: t => t.replaceAll(" ", ""),
  latin: t => t,
}

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
  initLineId,
  getPath,
  removeHash,
})

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    // @ts-ignore this works but the TS def isn't right
    general.darkMode = !!event.matches;
  });

Alpine.store("general", general)

Alpine.start()
