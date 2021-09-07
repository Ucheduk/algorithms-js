const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([67, -5, 3, 5, -46, 8, 2, 1, 4]));
