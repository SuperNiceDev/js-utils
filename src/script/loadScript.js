// https://stackoverflow.com/questions/41728807/how-to-embed-a-script-in-jsx-in-a-component


export default function loadScript (url, onLoad)
{
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.onload = (evt) =>
  {
    // console.log('evt: ', evt)
    // document.body.removedChild(script)
    if (onLoad) onLoad()
  }
  
  script.src = url
  document.body.appendChild(script)
}
