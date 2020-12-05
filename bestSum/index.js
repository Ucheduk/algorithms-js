const bestSum = (sum, numArray, memo = {}) => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return [];
  if (sum < 0) return null;

  let shortCombination = null;

  for (let num of numArray) {
    const remainder = sum - num;
    const remainderCombination = bestSum(remainder, numArray, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      
      if (shortCombination === null || combination.length < shortCombination.length) {
        shortCombination = combination
      }
    }
  }
  memo[sum] = shortCombination
  return shortCombination;
}

console.log(bestSum(1, [6, 1, 3, 4, 3]))
console.log(bestSum(100, [1, 2, 5, 25]))

// m = sum
// n = numArray.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)