reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let tempArr = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempArr;
  }
  console.log(arr);
  return arr;
}

reverseArrayInPlace(["a","b","c","d","e","f"]);