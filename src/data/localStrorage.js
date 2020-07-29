export function getLocalStorageItem (pId)
{
  /* eslint-disable-next-line */
  const ls = localStorage || window.localStorage
  if (ls) return JSON.parse(ls.getItem(pId))
}


export function setLocalStorageItem (pId, pValue)
{
  /* eslint-disable-next-line */
  const ls = localStorage || window.localStorage
  if (ls) ls.setItem(pId, JSON.stringify(pValue))
}
