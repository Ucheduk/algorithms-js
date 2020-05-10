function replaceVowels(string) {
    var strReplaceVowels =  [];
    string = string.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) < 0) {
            strReplaceVowels.push(string[i])
        }
        if (vowels.indexOf(string[i]) >= 0) {
            string[i] = 'x'
            strReplaceVowels.push(string[i])
        }
    }
    strReplaceVowels = strReplaceVowels.join('');
    return strReplaceVowels;
}
console.log(replaceVowels('Hello World!'))