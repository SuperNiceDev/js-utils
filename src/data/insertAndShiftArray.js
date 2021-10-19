const insertAndShiftArray = (arr, from, to) => {
  const newArr = [...arr];
  const cutOut = newArr.splice(from, 1)[0]; // cut the element at index 'from'
  newArr.splice(to, 0, cutOut); // insert it at index 'to'

  return newArr;
};

export default insertAndShiftArray;
