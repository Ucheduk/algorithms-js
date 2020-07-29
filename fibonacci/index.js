function fibonacci(position) {
  if (position < 3) return 1
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(5)) // O(n^2) Exponential runtime complexity