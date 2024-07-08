function mergeStrings(string1, string2) {
    let arr1 = string1.split("");
    let arr2 = string2.split("");
    let merged = [];

    let lengthL = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i =0; i < lengthL; i++){
        if (arr1[i] !== undefined && arr1[i] !== " "){
            merged.push(arr1[i]);
        }

        if (arr2[i] !== undefined && arr2[i] !== " "){
            merged.push(arr2[i]);
        }
    }

    merged = merged.join("");
    
    return merged;
}

console.log(mergeStrings(" a b c", "p q r"));