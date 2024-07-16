/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let currCount = 0;
    let maxCount = 0;
    let s_array = s.split('');

    for (let i = 0; i < k; i++) {
        if (list.includes(s_array[i])) {
            currCount += 1;
        }
    }

    maxCount = currCount;

    for (let i = k ; i < s.length; i++) {
        if (list.includes(s_array[i])) {
            currCount += 1;
        }

        if (list.includes(s_array[i - k])) {
            currCount -= 1;
        }
        
        maxCount = Math.max(maxCount, currCount);
    }

    return maxCount;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcodde", 3));
console.log(maxVowels("weallloveyou", 7));