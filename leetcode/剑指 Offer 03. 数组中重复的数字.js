/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for (let i=0; i<nums.length;i++){
        for (j=i+1;j<nums.length;j++){
            if (nums[i]===nums[j]){
                return nums[i];
            }
        }
    }
};


var findRepeatNumber = function(nums) {
    let newSet = new Set();
    for (let i of nums){
        let currentLength = newSet.size;
        newSet.add(i);
        if (newSet.size === currentLength){
            return i;
        }
    }
};