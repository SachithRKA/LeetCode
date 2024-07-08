/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let pointerOne = 0;
    let pointerTwo = s.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let stringArray = s.split('');
    let temp = '';

    while (pointerOne < pointerTwo) {
        if (vowels.includes(stringArray[pointerOne]) && vowels.includes(stringArray[pointerTwo])) {
            temp = stringArray[pointerOne];
            stringArray[pointerOne] = stringArray[pointerTwo];
            stringArray[pointerTwo] = temp;
            pointerOne += 1;
            pointerTwo -= 1;
        } 

        if (!(vowels.includes(stringArray[pointerOne])))
        {
            pointerOne +=1;
        }

        if (!(vowels.includes(stringArray[pointerTwo])))
        {
            pointerTwo -=1;
        }
    }

    return stringArray.join("");
};

reverseVowels("hello");
reverseVowels("leetcode")