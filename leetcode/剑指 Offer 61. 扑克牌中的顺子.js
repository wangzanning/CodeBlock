/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let newSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (!newSet.has(nums[i])) {
                newSet.add(nums[i])
            } else {
                return false;
            }
        }
    }
    let min = 0;
    let max = 0;
    nums = nums.sort((a, b) => a - b);
    max = nums[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            min = nums[i];
            break;
        }
    }
    if (max - min < 5) {
        return true
    } else {
        return false
    }

};