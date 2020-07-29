const fibMemo = (index, cache) => {
  cache = cache || [];
  if (cache[index]) return cache[index];

  if (index < 3) {
    return 1
  } else {
    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  }
  return cache[index];
}

console.log(fibMemo(10)) // O(n) Linear time complexity