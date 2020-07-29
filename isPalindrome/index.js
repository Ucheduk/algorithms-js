isPalindrome = string => {
  string = string.toLowerCase();
  const charaArr = string.split('');
  const validCharaArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
 
  let lettersArr = []; 
  charaArr.map((char) => {
    if(validCharaArr.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });
  
  console.log(lettersArr.join(''));
  console.log(lettersArr.reverse().join(''));

  if(lettersArr.join('') === lettersArr.reverse().join('')) console.log('true');
  else console.log('false');
 }
 
 isPalindrome("Madam, I'm Adam");