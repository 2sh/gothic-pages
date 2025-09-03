type Subscriber<T> = (newValue: T, previousValue: T) => any

type Ref<T> = {
  value: T;
  init: T;
  on: (subscriber: Subscriber<T>) => boolean;
  off: (subscriber: Subscriber<T>) => boolean;
}

export function ref<T>(initialValue: T): Ref<T>
{
  const subscribers: Subscriber<T>[] = []

  function addSubscriber(subscriber: Subscriber<T>)
  {
    const index = subscribers.indexOf(subscriber)
    if (index > -1)
    {
      return false // don't add if already in array
    }
    else
    {
      subscribers.push(subscriber)
      return true
    }
  }

  function removeSubscriber(subscriber: Subscriber<T>)
  {
    const index = subscribers.indexOf(subscriber)
    if (index > -1)
    {
      subscribers.splice(index, 1)
      return true
    }
    else
    {
      return false
    }
  }

  return new Proxy({
    value: initialValue,
    init: initialValue,
    on: addSubscriber,
    off: removeSubscriber,
  },
  {
    set(obj, prop, value: T)
    {
      if (prop == 'value')
      {
        const previousValue = obj[prop]
        obj[prop] = value
        const _subscribers = [...subscribers]
        _subscribers.forEach(subscriber =>
        {
          if(subscriber(value, previousValue) === false)
            removeSubscriber(subscriber)
        })
        return true
      }
      else
      {
        return false
      }
    }
  })
}

export function tieInput(
  element: HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement,
  refValue: Ref<string>)
{
  if (element)
  {
    if (element.value) refValue.value = element.value
    element.addEventListener('change', () => refValue.value = element.value)
    refValue.on(newValue => element.value = newValue)
  }
  return refValue
}

function setRefFromStorageValue<T>(refValue: Ref<T>, value: string | null)
{
  if (value)
  {
    try
    {
      refValue.value = JSON.parse(value)
    }
    catch(e){}
  }
}

export function persist<T>(key: string, refValue: Ref<T>)
{
  setRefFromStorageValue(refValue, localStorage.getItem(key))
  addEventListener('storage', event =>
  {
    if(event.key != key) return
      setRefFromStorageValue(refValue, event.newValue)
  })
  refValue.on(newValue => localStorage.setItem(key, JSON.stringify(newValue)))
  return refValue
}