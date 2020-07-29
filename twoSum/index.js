const twoSum = (numArray, sum) => {
  let hashtable = [];
  let result = [];

  for (let i = 0; i < numArray.length; i++) {
    currNum = numArray[i];
    counterpartNum = sum - currNum
    if (hashtable.indexOf(counterpartNum) > -1) {
      result.push([currNum, counterpartNum]);
    }
    hashtable.push(currNum);
  }
  console.log(result)
  return result;
}

twoSum([6, 1, 3, 4, 3], 7)