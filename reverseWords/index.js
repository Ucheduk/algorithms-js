reverseWord = string => {
  const worrdArr = string.split(' ');
  let reversedWordsArr = [];

  worrdArr.map(word => {
    let reversedWord = '';
    for(let i = word.length - 1; i >=0; i--) {
      reversedWord += word[i];  
    }
    reversedWordsArr.push(reversedWord);
  });
  
  console.log(reversedWordsArr.join(' '));
  return reversedWordsArr.join(' ');
  
}

reverseWord('this is a string of words');