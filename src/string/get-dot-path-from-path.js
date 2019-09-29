export function getDotPathFromPath (pPath)
{
  return cleanPath(pPath).replace(/\//g, '.')
}
