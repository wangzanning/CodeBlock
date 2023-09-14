/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    let res = nums.sort((a,b)=> (''+a+b) - (''+b+a))
    console.log(res);
    return res.join('');
};

minNumber([3,30,34,5,9]);