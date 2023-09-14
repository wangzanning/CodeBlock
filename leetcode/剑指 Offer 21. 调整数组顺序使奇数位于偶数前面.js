/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let front = 0;
    let end = nums.length - 1;
    while (front < end) {
        if (nums[front] % 2 === 0 && nums[end] % 2 === 1) {
            [nums[front], nums[end]] = [nums[end], nums[front]];
            front++;
            end--;
        } else if (nums[front] % 2 === 0) {
            end--;
        } else if (nums[end] % 2 === 1) {
            front++;
        } else {
            front++;
            end--
        }
    }
    return nums
};