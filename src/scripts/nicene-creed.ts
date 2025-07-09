import Alpine from 'alpinejs'
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