const canSum = (sum, numArray, memo = {}) => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return true;
  if (sum < 0) return false;

  for (let num of numArray) {
    const remainder = sum - num;
    if (canSum(remainder, numArray, memo) === true) {
      memo[sum] = true
      return true;
      
    }
  }
  memo[sum] = false
  return false;
}

console.log(canSum(7, [6, 1, 3, 4, 3]))
console.log(canSum(7, [2, 4]))
console.log(canSum(100, [1, 2, 5, 25]))

// m = sum
// n = numArray.length

// Brute Force
// time: O(n^m)
// space: O(m)

// Memoized
// time: O(n * m)
// space: O(m)