// https://stackoverflow.com/questions/41728807/how-to-embed-a-script-in-jsx-in-a-component


export default function loadScript (pUrl, pCallback)
{
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.onload = () =>
  {
    if (pCallback) pCallback()
  }
  script.src = pUrl
  document.body.appendChild(script)
}
