harmlessRansomNote = (noteText, magazineText) => {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazineObj = {};

  magazineArr.map((word) => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;

  noteArr.map(word => {
    if(magazineObj[word]) {
      magazineObj[word]--
      if(magazineObj[word] < 0) noteIsPossible = false
    } else noteIsPossible = false;
  })
  return noteIsPossible;

}

harmlessRansomNote('this day is', 'this day is a very wonderful day');