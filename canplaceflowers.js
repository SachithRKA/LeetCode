function canPlaceFlowers(flowerbed, n) {
    // Your code here
    let count = 0;
    for (let i =0; i < flowerbed.length; i++){
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1){
            count++;
            i += 1;
        }
    }

    if (count >= n) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 2));  // false
console.log(canPlaceFlowers([0,1,0,1,0,1,0,0], 1));  // true