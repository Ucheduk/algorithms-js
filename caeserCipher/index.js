caeserCipher = (str, num) => {
  num = num % 26;
  const lowerCaseStr = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newStr = '';

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }

  console.log(newStr);

}

caeserCipher('Zoo kepper', -27);