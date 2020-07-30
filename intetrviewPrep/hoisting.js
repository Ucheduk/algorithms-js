// Hoisting - Variables and functions are hoisted 
// to the top of the scope that they a declared in
// depending on the keyword been used to assign them.
// var (function scope) / let, const (block scope)

console.log(globalScope); // undefined - var globalScope; hoisted to the top.

var globalScope = 1;

console.log(globalScope); // 1

(function() {
  console.log(functionScope); // undefined - var functionScope; hoisted to the top.

  var functionScope = 2;

  console.log(functionScope); // 2

  for (let i = 0; i < 10; i++) {
    console.log(blockScope) // ReferenceError - let blockScope; hoisted to the top but not assigned.

    let blockScope = i;

    functionScope += blockScope * globalScope;
  }
  return functionScope;
})()