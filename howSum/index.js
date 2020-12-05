const howSum = (sum, numArray, memo = {}) => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return [];
  if (sum < 0) return null;

  for (let num of numArray) {
    const remainder = sum - num;
    const remainderCombination = howSum(remainder, numArray, memo)
    const combination = [ ...remainderCombination, num ]
    memo[sum] = combination
    return combination;
      
  }
  memo[sum] = null
  return null;
}

console.log(howSum(7, [6, 1, 3, 4, 3]))
console.log(howSum(7, [2, 4]))
console.log(howSum(100, [1, 2, 5, 25]))

// m = sum
// n = numArray.length

// Brute Force
// time: O(n^m)
// space: O(m)

// Memoized
// time: O(n * m)
// space: O(m)