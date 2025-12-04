export const html = String.raw

export function escapeAmpersand(str: string)
{
  return str.replace(/&(?=[a-z0-9#])/gi, '&amp;')
}

export function safeHtmlText(str: string)
{
  return escapeAmpersand(str)
    .replaceAll('<', '&lt;')
}

export function safeHtmlAttribute(str: string, doubleQuote=false)
{
  return escapeAmpersand(str)
    .replaceAll(
      doubleQuote ? '"' : "'",
      doubleQuote ? '&quot;' : '&apos;')
}