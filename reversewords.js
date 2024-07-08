/**
 * @param {string} s
 *
 * @return {boolean}
 */
var reverseWords = function(s) {
    let tempArray = s.split(" ");

    tempArray = tempArray.filter(item => item.trim() !== "");

    let arrayLength = tempArray.length - 1;

    /*
    if (tempArray[0] === "\"" && tempArray[arrayLength] === "\"")
    {
        tempArray.splice(0, 1);
        tempArray[0] = tempArray[0] + "\"";
        
        // arrayLength = tempArray.length - 1;
        tempArray.splice(arrayLength - 1, arrayLength);
        tempArray[tempArray.length - 1] = "\"" + tempArray[tempArray.length - 1];
    }
    */

    // return tempArray;
    return tempArray.reverse().join(" ");
}

console.log(reverseWords("the sky is blue"));
console.log("\" hello world \"");
console.log(reverseWords("\" hello world \""));
console.log(reverseWords("hello world"));
console.log(reverseWords("a good example"));
