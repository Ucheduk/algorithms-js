function reverseString(str) {
  const result = str.split("").reduce((reversed, i) => (i += reversed), "");
  console.log(result);
  return result;
}

reverseString("this is a string of words");
