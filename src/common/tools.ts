export const html = String.raw

export function safeHtmlText(str: string)
{
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function safeHtmlAttribute(str: string, quot="'")
{
  return safeHtmlText(str)
    .replaceAll(quot, quot == "'" ? '&apos;' : '&quot;')
}