isPalindrome = (string) => {
  string = string.toLowerCase();
  const charaArr = string.split("");
  const validCharaArr = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArr = [];
  charaArr.map((char) => {
    if (validCharaArr.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  console.log(lettersArr.join(""));
  console.log(lettersArr.reverse().join(""));

  if (lettersArr.join("") === lettersArr.reverse().join(""))
    console.log("true");
  else console.log("false");
};

function palindrome(str) {
  const reversed = str.split("").reduce((reversed, i) => (i += reversed), "");

  console.log(str);
  console.log(reversed);

  if (str === reversed) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

// By words
isPalindrome("Madam, I'm Adam");

// By string character
palindrome("Madam, I'm Adam");
