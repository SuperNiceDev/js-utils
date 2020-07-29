// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random

export default function getRandomFloat (min, max)
{
  return Math.random() * (max - min + 1) + min
}
