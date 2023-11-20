export default function getRatioValue (start/*0|1*/, val/*Number*/, from/*Number*/, to/*Number*/) {
  const part = to - from;
  const multiplier = 1 / part;
  let newVal = 0;

  if (val >= from && val <= to) {
    newVal = (val - from) * multiplier;
  } else if (val > to) {
    newVal = 1;
  }

  return start === 1 ? 1 - newVal : newVal;
};