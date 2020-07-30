// Closure - is an inner function that have 
// access to the scope of an enclosing function.
// It has access to variables in 3 separate scopes.

function outerFunc(outerPrams) {
  let outerVar = 0;
  function innerFunc(innerPrams) {
    outerVar = outerVar + outerPrams + innerPrams
    console.log(outerPrams, innerPrams, outerVar)
    return outerVar
  }
  return innerFunc(2)
}

console.log(outerFunc(2))
