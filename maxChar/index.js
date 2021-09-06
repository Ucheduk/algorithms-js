function maxChar(str) {
  const store = {};
  let max;
  for (char of str) {
    if (store[char]) store[char] += 1;
    else store[char] = 1;
  }
  for (key in store) {
    if (!max) max = key;
    if (store[key] > store[max]) max = key;
  }
  return max;
}

console.log(maxChar("abcccaa"));
