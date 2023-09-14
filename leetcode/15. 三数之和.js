/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length < 3) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i - 1] === nums [i]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        left += 1;
        right += 1;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return res;
};
