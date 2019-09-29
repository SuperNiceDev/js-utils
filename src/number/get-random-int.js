// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random

export function getRandomInt (min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min
}
