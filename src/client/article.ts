import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import { addOptionalMacrons, addSoftHyphens, fromLatin } from '@common/transliterate';
import { safeHtmlText } from '@common/tools'
import { addSigla, biblicalReplace, modernReplace } from '@common/article'

Alpine.plugin(persist)

// @ts-ignore
window.Alpine = Alpine

const languageNames = new Intl.DisplayNames(['en'], {
  type: 'language'
});

type ModeFunc = (text: string, config: any) => string


const modes: {[key: string]: ModeFunc} = {
  simple: t => safeHtmlText(modernReplace(fromLatin(t)) + ' '),
  //serif: t => safeHtmlText(modernReplace(fromLatin(t, {preserveDiacritics: true})) + ' '),
  serif: t => safeHtmlText(modernReplace(t) + ' '),
  biblical: t => addSigla(safeHtmlText(biblicalReplace(fromLatin(addSoftHyphens(t))))),
  latin: t => safeHtmlText(modernReplace(addOptionalMacrons(t))) + ' ',
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
