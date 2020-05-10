meanMedianMode = arr => {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

getMean = arr => {
  let sum = 0;

  arr.forEach(num => {
    sum += num
  });
  const mean = sum / arr.length;
  console.log("Mean", mean);
  return mean;
}

getMedian = arr => {
  arr.sort((a, b) => a - b);
  let median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  }
  else {
    const mid1 = arr[(arr.length / 2) - 1];
    const mid2 = arr[arr.length / 2];
    median = (mid1 + mid2) / 2;
  }
  console.log("Median", median);
  return median
}

getMode = arr => {
  let modeObj = {}

  arr.map(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [ num ];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  if (modes.length === Object.keys(modeObj)) mode = [];

  console.log("Modes", modes);
  return modes;
}

meanMedianMode([2, 3, 4, 5, 4, 6, 1]);