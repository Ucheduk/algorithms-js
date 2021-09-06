function reverseInt(int) {
  const result =
    parseInt(
      int
        .toString()
        .split("")
        .reduce((reversed, i) => (i += reversed), "")
    ) * Math.sign(int);

  console.log(result);
  return result;
}

reverseInt(567);
