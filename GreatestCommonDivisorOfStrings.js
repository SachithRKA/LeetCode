/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Find the longest string of the two
    const longestStr = str1.length > str2.length ? str1 : str2;
    const shortestStr = str1.length < str2.length ? str1 : str2;
    
    const gcdLength = gcd(str1.length, str2.length);
    const gcdString = longestStr.substring(0, gcdLength);
    
    if (isDivisor(gcdString, str1) && isDivisor(gcdString, str2)) {
        return gcdString;
    }
    
    return '';
};

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function isDivisor(divisor, str) {
    const len = str.length / divisor.length;
    return divisor.repeat(len) === str;
}
