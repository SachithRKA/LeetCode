/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let pointerOne = 0;
    let pointerTwo = height.length - 1;

    function areaCalculate(pointerOne, pointerTwo) {
        let min = Math.min(height[pointerOne], height[pointerTwo]);
        let area = min * (pointerTwo - pointerOne);
        return area;    
    }

    let area = areaCalculate(pointerOne, pointerTwo);
    let tempArea = area;

    while (pointerOne < pointerTwo) {
        if (height[pointerOne] < height[pointerTwo]) {
            pointerOne += 1;
        }
        else {
            pointerTwo -= 1;
        }

        tempArea = areaCalculate(pointerOne, pointerTwo);
        
        if (area < tempArea) {
            area = tempArea;
        }
    }

    return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
console.log(maxArea([1,2]));