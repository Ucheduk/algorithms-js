function charMap(str) {
  const stringMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (stringMap[char]) stringMap[char] += 1;
    else stringMap[char] = 1;
  }

  return stringMap;
}

function anagrams(stringA, stringB) {
  const stringMapA = charMap(stringA);
  const stringMapB = charMap(stringB);

  if (Object.keys(stringMapA).length !== Object.keys(stringMapB).length)
    return false;

  for (let key in stringMapA) {
    if (stringMapA[key] !== stringMapB[key]) return false;
  }
  return true;
}

function anagramsBySort(stringA, stringB) {
  const stringSortA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort();
  const stringSortB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort();

  return stringSortA.join("") === stringSortB.join("");
}

console.log(anagrams("HI there", "there hi"));
console.log(anagramsBySort("HI there", "there hi"));
