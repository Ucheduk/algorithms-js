function chunk(array, size) {
  const chunkArrays = [];

  for (let i of array) {
    if (
      chunkArrays.length &&
      chunkArrays[chunkArrays.length - 1].length < size
    ) {
      chunkArrays[chunkArrays.length - 1].push(i);
    } else {
      chunkArrays.push([i]);
    }
  }

  return chunkArrays;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
