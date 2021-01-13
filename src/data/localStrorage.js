export function getLocalStorageItem (pId)
{
  const ls = localStorage || window.localStorage
  try
  {
    return JSON.parse(ls.getItem(pId))
  }
  catch (err)
  {
    // return undefined
    return 'ERROR_NO_VALUE'
  }
}


export function setLocalStorageItem (pId, pValue)
{
  const ls = localStorage || window.localStorage
  if (ls) ls.setItem(pId, JSON.stringify(pValue))
}
