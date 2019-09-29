// https://stackoverflow.com/questions/8206269/how-to-remove-http-from-a-url-in-javascript#

export default function removeProtocol (pUrl)
{
  if (typeof pUrl === 'string')
  {
    return pUrl.replace(/^\/\/|^.*?:\/\//, '')
  }
  return ''
}
