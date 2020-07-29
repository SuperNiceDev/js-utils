// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

export default function fixedEncodeURIComponent (str)
{
  return encodeURIComponent(str).replace(/[!'()*]/g, function (cCode)
  {
    return '%' + cCode.charCodeAt(0).toString(16)
  })
}
