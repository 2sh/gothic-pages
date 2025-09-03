import { reactive } from "@arrow-js/core"

export function tieInput(
  element: HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement,
  initValue?: string)
{
  const _initValue = initValue || element && element.value || ''
  const value = reactive({ value: _initValue, init: _initValue })
  if (element)
  {
    element.addEventListener('change', () => value.value = element.value)
    value.$on('value', newValue => element.value = newValue)
  }
  return value
}

function parseStorageValue<O>(value: string | null, initValue: O)
{
  if (value)
  {
    try
    {
      return JSON.parse(value) as O
    }
    catch(e){}
  }
  return initValue
}

export function persist<O>(key: string, initValue: O)
{
  const _initValue = parseStorageValue(localStorage.getItem(key), initValue)
  const proxy = reactive({ value: _initValue, init: _initValue })
  addEventListener('storage', event =>
  {
    //@ts-ignore
    if(event.key == key) proxy.value = parseStorageValue(event.newValue, initValue)
  })
  proxy.$on('value', newValue => localStorage.setItem(key, JSON.stringify(newValue)))
  return proxy
}