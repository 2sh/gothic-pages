import Alpine from 'alpinejs'
// @ts-ignore
window.Alpine = Alpine

type Mapping = [string, string]
type RegExpMapping = [RegExp, string] | Mapping

const gothicLatin: Mapping[] = [
  ['𐌹̈', 'ï'],
  ['𐌰', 'a'],
  ['𐌱', 'b'],
  ['𐌲', 'g'],
  ['𐌳', 'd'],
  ['𐌴', 'e'],
  ['𐌵', 'q'],
  ['𐌶', 'z'],
  ['𐌷', 'h'],
  ['𐌸', 'þ'],
  ['𐌹', 'i'],
  ['𐌺', 'k'],
  ['𐌻', 'l'],
  ['𐌼', 'm'],
  ['𐌽', 'n'],
  ['𐌾', 'j'],
  ['𐌿', 'u'],
  ['𐍀', 'p'],
  ['𐍁', 'Ϙ'],
  ['𐍂', 'r'],
  ['𐍃', 's'],
  ['𐍄', 't'],
  ['𐍅', 'w'],
  ['𐍆', 'f'],
  ['𐍇', 'x'],
  ['𐍈', 'ƕ'],
  ['𐍉', 'o'],
  ['𐍊', 'Ϡ']
]

const latinGothic: Mapping[] = [
  ['hv', '𐍈'],
  ['v', '𐍈'],
  ['c', '𐌸'],
  ['y', '𐍅'],
  ['ᛏ', '𐍊'],
  ['Ͳ', '𐍊'],
  ['Ϥ', '𐍁'],

  ...gothicLatin.map(m => [m[1], m[0]] satisfies Mapping)
]

const diaeresis: RegExpMapping[] = [
  [/(?<=^|\s)𐌹/gmu, '𐌹̈'],
  [/(?<=^|\s)i/gmu, 'ï'],

  [/(?<!^|\s)([𐌰𐌹𐌿𐌴𐍉])𐌹(𐌳𐌳|𐌳𐍂𐌴𐌹|𐌱𐌽)/gmu, '$1𐌹̈$2'],
  [/(?<!^|\s)([aiueo])i(dd|drei|bn)/gmu, '$1ï$2'],

  [/(?<=^|\s)(𐍆𐌰𐌿𐍂𐌰|𐌿𐍆𐌰𐍂|𐌼𐌹𐌸)𐌹(𐍃𐍄?|𐌼)(?=(?:$|\s))/gmu, '$1𐌹̈$2'],
  [/(?<=^|\s)(faura|ufar|mi[cþ])i(st?|m)(?=$|\s)/gmu, '$1ï$2'],

  ['𐍆𐍂𐌰𐌹𐍄', '𐍆𐍂𐌰𐌹̈𐍄'],
  ['frait', 'fraït'],
]

function removeDiacriticChars(text: string)
{
  return text.replace(/(?!·)\p{Diacritic}(?<![i𐌹]\u0308)/gu, "")
}

function applyMapping(text: string, mapping: RegExpMapping[])
{
  let out = text
  mapping.forEach(m => out = out.replaceAll(m[0], m[1]))
  return out
}


const gothicDigits = `𐌰𐌱𐌲𐌳𐌴𐌵𐌶𐌷𐌸𐌹𐌺𐌻𐌼𐌽𐌾𐌿𐍀𐍁𐍂𐍃𐍄𐍅𐍆𐍇𐍈𐍉𐍊`
const gothicDigitsArray = [...gothicDigits]
const gothicThousandsSeparator = ':'

function toGothicNumerals(number: number | string)
{
  const num = typeof number === 'string'
    ? parseFloat(number.replace(/,/g, '')) : number
  if (num % 1 !== 0) return null
  const numbers = num.toString().split('').toReversed()
  return numbers.map(n => parseInt(n)).map((n, i) =>
  {
    let out = ''
    if (n > 0)
    {
      const multiplier = (i % 3) * 9
      out += gothicDigitsArray[(n-1)+multiplier]
    }
    if (i > 0 && i % 3 == 0)
      out += gothicThousandsSeparator
    return out
  }).toReversed().join('')
}

function fromGothicNumerals(number: string)
{
  return number
    .split(gothicThousandsSeparator)
    .toReversed()
    .reduce((tv, block, tExp) =>
  {
    return tv + (1000**tExp) * [...block].reduce((v, d) =>
    {
      const index = gothicDigitsArray.indexOf(d)
      const exp = Math.trunc(index/9)
      return v + (10**exp) * ((index%9)+1)
    }, 0)
  }, 0)
}

const d = '[0-9]'
const p = '\\.'
const g = ','
const np = `${d}|${p}|${g}`

const reArabicNumeral = new RegExp(
    `(?<!${np})`
  + `(${d}{1,3}(${g}${d}{3})*|(?<!${g})${d}+)(${p}${d}+)?`
  + `(?!${np})`,
  "gu")

const gd = `[${gothicDigits}]`
const gs = ':'

const reGothicNumeral = new RegExp(
    `·(${gd}{1,3}(${gs}${gd}{3})*)·`,
  "gu")

function fromLatin(text: string)
{
  let out = text.toLowerCase()
  out = out.normalize("NFKD")
  if (!gothic.preserveDiacritics)
    out = removeDiacriticChars(out)
  out = applyMapping(out, latinGothic)
  if (gothic.numberConversion !== 'none')
  {
    out = out.replaceAll(reArabicNumeral, m =>
    {
      console.log(gothic.numberConversion, m)
      if (gothic.numberConversion !== 'big' && parseFloat(m) >= 1000)
        return m
      const num = toGothicNumerals(m)
      return num ? '·' + num + '·' : m
    })
  }
  return out
}

let numberFormatter = new Intl.NumberFormat('en-US')

function toLatin(text: string)
{
  let out = text
  out = out.replaceAll(reGothicNumeral, (_, m) =>
  {
    if (gothic.numberConversion !== 'none')
      return numberFormatter.format(fromGothicNumerals(m))
    else
      return '·' + applyMapping(m, gothicLatin).toUpperCase() + '·'
  })
  if (gothic.th) out = out.replaceAll('𐌸', gothic.th)
  if (gothic.hv) out = out.replaceAll('𐍈', gothic.hv)
  out = applyMapping(out, gothicLatin)
  if (gothic.capitalize)
    out = out.replace(
      /(?<=^|[\.:;·∴]\s+|\r?\n\s*\r?\n)(.)/g,
      (_, l) => l.toUpperCase())
//  if (!gothic.preserveDiacritics)
//    out = removeDiacriticChars(out)
  out = out.normalize("NFKC")

  return out
}

function removeDiacritics(text: string)
{
  let out = text
  out = out.normalize("NFKD")
  out = removeDiacriticChars(out)
  out = out.normalize("NFKC") // re-attach diaereses
  return out
}

function addDiaereses(text: string)
{
  return applyMapping(text, diaeresis)
}

const gothic = Alpine.reactive({
  fromLatin,
  toLatin,
  removeDiacritics,
  addDiaereses,
  capitalize: false,
  preserveDiacritics: false,
  numberConversion: ((): 'none' | 'normal' | 'big' => 'normal')(),
  th: '',
  hv: '',
})

Alpine.store("gothic", gothic)
Alpine.start()
