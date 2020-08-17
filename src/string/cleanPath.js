export default function cleanPath (pPath)
{
  return (pPath || '').toString()
    .replace(/(\/\/+)/g, '/')
    .replace(/^\//, '')
    .replace(/\/+$/, '')
}
