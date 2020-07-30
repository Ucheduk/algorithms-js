const trippleAdd = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    }
  }
}


console.log(trippleAdd(10)(20)(30))