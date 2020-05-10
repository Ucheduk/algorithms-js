//Write a function called longest which will take a string of space separated words and will return the longest one.
//For example:

//longest("This is Andela")
//returns
//"Andela"

function longest(sentence){
  let arr = sentence.split(' ');
  let numArr = [];
  let result;
  arr.map(word => {
  	numArr.push(word.length);
  });
  let max = numArr.reduce(function(a, b) {
  	return Math.max(a, b);
  });
  arr.map(word => {
  	if(word.length === max) {
  		result = word;
  	}
  });
  
  console.log(result);
  return result;
}

longest('This is Andela');