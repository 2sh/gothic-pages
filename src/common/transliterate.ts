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
  ['wh', '𐍈'],
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
  return mapping.reduce((text, [from, to]) =>
  {
    return text.replaceAll(from, to)
  }, text)
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

const reArabicNumeral = new RegExp(
    `\\b(?<![,.])(\\d{1,3}(?:,\\d{3})+|\\d+)(?![,.]\\d)\\b`, "gu")

const gd = `[${gothicDigits}]`
const gs = ':'

const reGothicNumeral = new RegExp(
    `·(${gd}{1,3}(${gs}${gd}{1,3})*)·`,
  "gu")

export type GeneralConfig = {
  numberConversion?: 'none' | 'normal' | 'big'
}

export type FromLatinConfig = {
  preserveDiacritics?: boolean,
} & GeneralConfig

export function fromLatin(text: string, config?: FromLatinConfig)
{
  const conf: Required<FromLatinConfig> = {
    preserveDiacritics: false,
    numberConversion: 'normal',
    ...config,
  }

  const parts = text.split(/(<\[.+?\]>)/)
  for (var i = 0; i < parts.length; i++)
  {
    if(i % 2 == 1) continue
    let part = parts[i]
    part = part.toLowerCase()
    part = part.normalize("NFKD")
    if (!conf.preserveDiacritics)
      part = removeDiacriticChars(part)
    part = applyMapping(part, latinGothic)
    if (conf.numberConversion !== 'none')
    {
      part = part.replaceAll(reArabicNumeral, m =>
      {
        if (conf.numberConversion !== 'big' && parseFloat(m) >= 1000)
          return m
        const num = toGothicNumerals(m)
        return num ? '·' + num + '·' : m
      })
    }
    parts[i] = part
  }
  return parts.join('')
}

let numberFormatter = new Intl.NumberFormat('en-US')

export type ToLatinConfig = {
  th?: string,
  hw?: string,
  capitalize?: boolean,
} & GeneralConfig

export function toLatin(text: string, config?: ToLatinConfig)
{
  const conf: Required<ToLatinConfig> = {
    th: 'þ',
    hw: 'ƕ',
    capitalize: false,
    numberConversion: 'normal',
    ...config,
  }

  let out = text
  out = out.replaceAll(reGothicNumeral, (_, m) =>
  {
    if (conf.numberConversion !== 'none')
      return numberFormatter.format(fromGothicNumerals(m))
    else
      return '·' + applyMapping(m, gothicLatin).toUpperCase() + '·'
  })
  if (conf.th) out = out.replaceAll('𐌸', conf.th)
  if (conf.hw) out = out.replaceAll('𐍈', conf.hw)
  out = applyMapping(out, gothicLatin)
  if (conf.capitalize)
    out = out.replace(
      /(?<=(?:^\s*|[\.:;·∴]\s+|\r?\n\s*\r?\n)["'‘‚“”„«»‹›\(\[\{⟨⟪<>]?)(.)/g,
      (_, l) => l.toUpperCase())
  out = out.normalize("NFKC")
  return out
}

export function removeDiacritics(text: string)
{
  let out = text
  out = out.normalize("NFKD")
  out = removeDiacriticChars(out)
  out = out.normalize("NFKC") // re-attach diaereses
  return out
}

export function addDiaereses(text: string)
{
  return applyMapping(text, diaeresis)
}

const doublableConsonants = "bdfjklmnpqrstþwz" // doublable consonants
const dc = doublableConsonants.split('').map(c=>c+c).join('|')
const vc = "(?:au|aú|áu|ai|aí|ái|ei)"
const bv = "[aeiouïúíāēōū]"
const av = "[aeiouáāēōū]"
const c = "[bdfghƕjklmnpqrstþwz]"
const sc = `(?:${c}|st|str|sw|kl|kn|hr|tr|gw)`
const ec = `(?:${dc}|nd|rh|ht|rst|rg|${c})`
const pxc = `(?:at|and|af|bi|dis|in|miþ|uz|un|ur|us|uf|ufar|tuz|twis|fair|faur|fidur)` // prefix ending in consonant
const pxa = `(?:ana|anda|ga|missa|faura|fra)` // prefix ending in 'a'
const pxv = `(?:du)` // prefix ending in vowel

const hyphenRules = [
  /\b(?=ï)/ig,
  new RegExp(`(?<=\\b${pxc})(?=${sc}${av})`, "ig"),
  new RegExp(`(?<=\\b${pxa})(?![ui]|\\b)`, "ig"),
  new RegExp(`(?<=\\b${pxv})(?!\\b)`, "ig"),
  new RegExp(`(?<=${bv})(?=${sc}${av})`, "ig"),
  new RegExp(`(?<=${bv}${ec})(?=${sc}${av})`, "ig"),
  new RegExp(`(?<=${vc})(?=${bv})`, "ig"),
  new RegExp(`(?<=${av})(?=${vc})`, "ig"),
  new RegExp(`(?<=${av})(?=s$)`, "ig"),
]

export function addSoftHyphens(text: string)
{
  let out = text
  out = hyphenRules.reduce((text, rule) =>
  {
    return text.replace(rule, "\u00AD")
  }, out)
  return out
}

export function addOptionalMacrons(text: string)
{
  return text
    .replace(/e(?![i\u0304])/g, 'ē')
    .replace(/o(?!\u0304)/g, 'ō')
    .replace(/𐌴(?![𐌹\u0304])/g, '𐌴\u0304')
    .replace(/𐍉(?!\u0304)/g, '𐍉\u0304')
}

export function removePunctuation(text: string)
{
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
}

const voiced = "[bdgwnmjwl]"

const latinIpa: RegExpMapping[] = [
  [new RegExp(`(?<=${bv})b\\.b(?=\\.?(?:${av}|${voiced}))`, "ig"), 'β.β'],
  [new RegExp(`(?<=${bv}\\.?)bb(?=\\.?(?:${av}|${voiced}))`, "ig"), 'βː'],
  [new RegExp(`(?<=${bv}\\.?)b(?=\\.?(?:${av}|${voiced}))`, "ig"), 'β'],
  //[new RegExp(`(?<=${bv})b(?!=ː)`, "ig"), 'ɸ'],

  [new RegExp(`(?<=${bv})d\\.d(?=\\.?(?:${av}|${voiced}))`, "ig"), 'ð.ð'],
  [new RegExp(`(?<=${bv}\\.?)dd(?=\\.?(?:${av}|${voiced}))`, "ig"), 'ðː'],
  [new RegExp(`(?<=${bv}\\.?)d(?=\\.?(?:${av}|${voiced}))`, "ig"), 'ð'],
  //[new RegExp(`(?<=${bv})d(?!=ː)`, "ig"), 'θ'],

  [/g(?=\.[kg])/ig, 'ŋ'],
  [new RegExp(`(?<=${bv}\\.?)g(?=\\.?(?:${av}|${voiced}))`, "ig"), 'ɣ'],
  [new RegExp(`(?<=${bv}\\.?)g(?!=ː)`, "ig"), 'x'],

  [/([bdfjklmnpqrstþwz])\1/ig, '$1ː'],

  ['f', 'ɸ'],

  ['gw', 'ɡʷ'],

  ['ƕ', 'hʷ'],
  ['hv', 'hʷ'],
  ['wh', 'hʷ'],
  ['v', 'hʷ'],

  ['q', 'kʷ'],

  ['þ', 'θ'],

  ['iu', 'iu̯'],

  ['aí', 'ɛ'],
  ['ái', 'ɛː'],
  [/ai(?=\.?[hrƕv])/ig, 'ɛ'],
  ['ai', 'ɛː'],

  ['aú', 'ɔ'],
  ['áu', 'ɔː'],
  [/au(?=\.?[hrƕv])/ig, 'ɔ'],
  ['au', 'ɔː'],

  ['ei', 'iː'],
  ['ī', 'iː'],

  ['ā', 'aː'],

  ['e', 'eː'],
  ['ē', 'eː'],

  ['o', 'oː'],
  ['ō', 'oː'],

  ['ū', 'uː'],

  ['ï', 'i'],
]

export function toIpa(text: string)
{
  let out = text
  out = out.toLowerCase()
  out = removePunctuation(out)
  out = addSoftHyphens(out)
  out = out.replaceAll("\u00AD", ".")
  out = applyMapping(out, latinIpa)
  return out
}