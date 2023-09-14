/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  function backtrack(res, temp, nums) {
    if (temp.length === n) {
      res.push([...temp]);
      return
    }
    for (let i=0; i<n; i++) {
      if (temp.includes(nums[i])) {
        continue;
      }
      temp.push(nums[i]);
      backtrack(res, temp, nums);
      temp.pop();
    }
  }
  n = nums.length;
  let res = [];
  backtrack(res, [], nums);
  return res;
};
console.log(permute([1,2,3]))
