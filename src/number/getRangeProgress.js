export default function getRangeProgress (progress, from, to, logValues) {
  const range = 1 - from - (1 - to);
  const progr = progress - from;
  const progr2 = progr > 0 ? progr : 0;
  const newProgress = progr2 / range;
  const newProgress2 = newProgress < 1 ? newProgress : 1;

  // if (logValues) {
  //   log("getRangeProgress: ------------");
  //   // log("getRangeProgress: range:        ", range);
  //   log("getRangeProgress: progress:     ", progress);
  //   log("getRangeProgress: progr2:       ", progr2);
  //   log("getRangeProgress: newProgress:  ", newProgress);
  //   log("getRangeProgress: newProgress2: ", newProgress2);
  // }
  return newProgress2;
}


function test () {
  [0, 0.3, 0.5, 0.7, 1].forEach((item) => {
    const test = getRangeProgress(item, 0.3, 0.7, true);
    // log("onStepProgress: test: ", test);
  });
}