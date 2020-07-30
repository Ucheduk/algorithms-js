// IIFE - Immediately Invoked Function Expression

// An IIFE is used to create a private scope in other
// not to overwrite global scope variables. 

(function IIFE(num) {
  let ans = num ** 2
  console.log(ans);
  return ans
})(23);