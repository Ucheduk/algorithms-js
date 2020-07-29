const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, midIndex);
  let secondHalf = arr.slice(midIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

const merge = (arr1, arr2) => {
  let result = [];
  while (arr1.length && arr2.length) {
    let minElem;
    if (arr1[0] < arr2[0]) minElem = arr1.shift();
    else minElem = arr2.shift();
    result.push(minElem);
  }

  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
  return result;
}

console.log(mergeSort([67, -5, 3, 5, -46, 8, 2, 1, 4]))