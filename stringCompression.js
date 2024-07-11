/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const dict = {};
    for (let i = 0; i < chars.length; i++) {
        if (!(Object.keys(dict).includes(chars[i]))) {
            dict[chars[i]] = 1;
        }
        else {
            dict[chars[i]] += 1;
        }
    }

    stringAr = "";
    for (var key in dict) {
        var value = dict[key];
        stringAr += key;

        if (value <= 1) {
            continue;
        }
        else {
            if (value < 9) {
                stringAr += value;
            }
            else {
                let arrayOfDigits = Array.from(String(value), Number);

                for (let i =0; i < arrayOfDigits.length; i++) {
                    stringAr +=  arrayOfDigits[i];
                }
            }
        }
    }

    return stringAr.length;
};
// var compress = function(chars) {
//     let w = 0;
//     let i = 0;

//     while (i < chars.length) {
//         let c = chars[i];
//         let count = 0;

//         while (i < chars.length && chars[i] === c) {
//             i++;
//             count++;
//         }

//         chars[w] = c;
//         w++;

//         if (count > 1) {
//             let cStr = String(count);

//             for (let j = 0; j < cStr.length; j++) {
//                 chars[w] = cStr[j];
//                 w++;
//             }
//         }
//     }

//     return w;
// }


console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));