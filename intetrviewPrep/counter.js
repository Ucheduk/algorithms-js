function myFunc() {
  let counter = 0;
  return () => {
    counter++;
    return counter
  }
}

const instant = myFunc()
console.log(instant())
console.log(instant())
console.log(instant())
console.log(instant())