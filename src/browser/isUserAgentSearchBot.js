export default function isUserAgentSearchBot ()
{
  const regExp = new RegExp(/bot|google|aolbuild|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i)
  const isBot = regExp.test(navigator.userAgent)
  return isBot
}
