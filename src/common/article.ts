
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