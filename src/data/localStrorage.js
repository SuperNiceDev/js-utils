export function getLocalStorageItem (pId)
{
  const ls = localStorage || window.localStorage
  if (ls) return JSON.parse(ls.getItem(pId))
}


export function setLocalStorageItem (pId, pValue)
{
  const ls = localStorage || window.localStorage
  if (ls) ls.setItem(pId, JSON.stringify(pValue))
}
