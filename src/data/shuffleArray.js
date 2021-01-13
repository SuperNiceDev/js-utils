export default function shuffleArray (array)
{
  for (let idx = array.length - 1; idx > 0; idx--)
  {
    const rndm = Math.floor(Math.random() * (idx + 1))
    const item = array[idx]
    array[idx] = array[rndm]
    array[rndm] = item
  }

  return array
}