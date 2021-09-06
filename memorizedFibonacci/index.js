const fibMemo = (index, cache) => {
  cache = cache || [];
  if (cache[index]) return cache[index];

  if (index < 3) {
    return 1;
  } else {
    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  }
  return cache[index];
};

function fibMemo2(n, memoize = { 0: 0, 1: 1 }) {
  if (n in memoize) return memoize[n];
  memoize[n] = fibMemo2(n - 1, memoize) + fibMemo2(n - 2, memoize);
  return memoize[n];
}

// O(n) Linear time complexity
console.log("fibMemo: ", fibMemo(10));
console.log("fibMemo2: ", fibMemo2(10));
