import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

Alpine.plugin(persist)

// @ts-ignore
window.Alpine = Alpine

const languageNames = new Intl.DisplayNames(['en'], {
  type: 'language'
});

const general = Alpine.reactive({
  languageNames
})

Alpine.store("general", general)

Alpine.start()