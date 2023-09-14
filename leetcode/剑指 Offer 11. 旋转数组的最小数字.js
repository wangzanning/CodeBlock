/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0;
    let right = numbers.length-1;
    let middle;
    while (left !== right){
        middle = Math.floor((left + right)/2);
        if (numbers[middle] > numbers[right]) left = middle +1;
        else if (numbers[middle] < numbers[right]) right = middle;
        else right = right -1;
    }
    console.log(numbers);
    return numbers[left];
};

minArray([3,4,5,1,2
]);