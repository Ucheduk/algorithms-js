binarySearch = (numArray, key) => {
  let midIndex = Math.floor(numArray.length / 2);
  let midElem = numArray[midIndex];

  if (midElem === key) return true;
  else if (midElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(midIndex, numArray.length), key);
  }
  else if (midElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, midIndex), key);
  }
  return false
}

const result = binarySearch([1,2,3,4,5,6,7,8,9,10], 7);
console.log(result);