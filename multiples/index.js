function multiples(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {

    if (i % 9 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log( multiples(250) );