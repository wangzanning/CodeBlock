/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return [];
    let res = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let temp = nums.slice(i, i + k);
        res.push(Math.max(...temp));
    }
    // console.log(res);
    return res;
};