reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  console.log(arr);
  return arr;
}

reverseArrayInPlace(["a","b","c","d","e","f"]);