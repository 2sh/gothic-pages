import Alpine from 'alpinejs'
import {
  fromLatin,
  toLatin,
  addDiaereses,
  removeDiacritics
} from '@common/transliterate'

// @ts-ignore
window.Alpine = Alpine

const gothic = Alpine.reactive({
  fromLatin: (text: string) => fromLatin(text, gothic),
  toLatin: (text: string) => toLatin(text, gothic),
  removeDiacritics,
  addDiaereses,
  capitalize: false,
  preserveDiacritics: false,
  numberConversion: ((): 'none' | 'normal' | 'big' => 'normal')(),
  th: '',
  hw: '',
})

Alpine.store("gothic", gothic)
Alpine.start()
