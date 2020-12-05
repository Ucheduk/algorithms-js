const howSum = (sum, numArray, memo = {}) => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return [];
  if (sum < 0) return null;

  for (let num of numArray) {
    const remainder = sum - num;
    const remainderResult = howSum(remainder, numArray, memo)
    if (remainderResult !== null) {
      memo[sum] = [ ...remainderResult, num ]
      return memo[sum];
    }
      
  }
  memo[sum] = null
  return null;
}

console.log(howSum(7, [6, 1, 3, 4, 3]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))

// m = sum
// n = numArray.length

// Brute Force
// time: O(n^m * m)
// space: O(m)

// Memoized
// time: O(n * m^2)
// space: O(m^2)