import Alpine from 'alpinejs'
import {
  fromLatin,
  toLatin,
  addDiaereses,
  removeDiacritics,
  removeSuperfluousDiacritics,
  toIpa,
  addSoftHyphens
} from '@common/transliterate'

// @ts-ignore
window.Alpine = Alpine

const gothic = Alpine.reactive({
  fromLatin: (text: string) => fromLatin(text, gothic),
  toLatin: (text: string) => toLatin(text, gothic),
  toIpa: (text: string) => toIpa(toLatin(text, gothic)),
  removeDiacritics,
  removeSuperfluousDiacritics,
  addDiaereses,
  addSoftHyphens,
  capitalize: false,
  preserveDiacritics: false,
  numberConversion: ((): 'none' | 'normal' | 'big' => 'normal')(),
  thousandsSign: ':',
  th: '',
  hv: '',
})

Alpine.store("gothic", gothic)
Alpine.start()
