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

export function safeHtmlAttribute(str: string, quot="'")
{
  return escapeAmpersand(str)
    .replaceAll(quot, quot == "'" ? '&apos;' : '&quot;')
}