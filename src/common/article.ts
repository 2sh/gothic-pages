import { safeHtmlText } from "./tools"
import { addSoftHyphens, fromLatin, removeDiacritics } from "./transliterate"

export function modernReplace(text: string)
{
  return text
    .replace(/~~[^{]/g, "~~")
    .replace(/~~\{[^}]+?\}/g, "~~")
    .replace(/([^}])~~/g, "$1")
    .replace(/\{([^{]+?)\}~~/g, "$1")
    .replaceAll("~~", "")
}

export function biblicalReplace(text: string)
{
  return text
    .replace(/[^}]~~/g, "~~")
    .replace(/\{[^{]+?\}~~/g, "~~")
    .replace(/~~([^{])/g, (_, m) => m == ' ' ? "\u2002" : m)
    .replace(/~~\{([^}]+?)\}/g, (_, m) => m == ' ' ? "\u2002" : m)
    .replaceAll("~~", "\u200B")
    .replace(/[-'" ,\u00AD]+/g, "\u200B")
    .replace(/[.;?!]+/g, "·\u2003")
    .replaceAll(":", ":\u2003")
}

export function addSigla(text: string)
{
  return text
    .replace(/\*(.+?)\*/g, "<span class='sigla'><div class='mark'></div>$1</span>")
}


type ModeFunc = (text: string, config?: any) => string

export const modes: {[key: string]: ModeFunc} = {
  simple: t => safeHtmlText(fromLatin(modernReplace(t)) + ' '),
  //serif: t => safeHtmlText(modernReplace(fromLatin(t, {preserveDiacritics: true})) + ' '),
  serif: t => safeHtmlText(removeDiacritics(modernReplace(t)) + ' '),
  biblical: t => addSigla(safeHtmlText(biblicalReplace(fromLatin(addSoftHyphens(t))))),
  latin: t => safeHtmlText(modernReplace(t)) + ' ',
}