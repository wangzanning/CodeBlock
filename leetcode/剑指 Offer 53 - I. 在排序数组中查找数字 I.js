/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let front = 0;
    let back = nums.length-1;
    while (nums[front]<target) front++;
    while (nums[back]> target) back--;
    return back-front+1;
};

var search = function(nums, target) {
    let i = nums.indexOf(target)
    let j = nums.lastIndexOf(target)
    return i !== -1 ? j - i + 1 : 0
}


search([5,7,7,8,8,10], 8)