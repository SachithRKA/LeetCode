/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    function backtrack(result, str1, str2, index1, index2) {
        // Base case: If both strings are exhausted, return the result
        if (index1 === str1.length && index2 === str2.length) {
            return result;
        }

        // Add character from word1 if available
        if (index1 < str1.length) {
            result += str1.charAt(index1);
            index1++;
        }

        // Add character from word2 if available
        if (index2 < str2.length) {
            result += str2.charAt(index2);
            index2++;
        }

        // Recursively call the function with updated indices
        return backtrack(result, str1, str2, index1, index2);
    }

    return backtrack('', word1, word2, 0, 0);
};