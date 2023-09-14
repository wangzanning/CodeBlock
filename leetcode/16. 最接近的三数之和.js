// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var threeSumClosest = function(nums, target) {
  let sortNums = nums.sort((a,b)=>a-b);
  let left = 0;
  let right = nums.length - 1;
  let res;
  let diff = 99999999;
  while (left < right) {
    let value = sortNums[left] + target + sortNums[right]
    if (Math.abs(target - value) < diff) {
      diff = Math.abs(target - value);
      res = value;
    }
    if ( value >= target) {
      right--;
    } else {
      left++;
    }
  }
  return res

};

console.log('res', threeSumClosest([-1,2,1,-4], 1));
