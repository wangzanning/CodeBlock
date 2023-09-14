/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i=0; i<nums.length;i++){
//         for (let k=i+1; k<nums.length;k++){
//             if (nums[i]+nums[k]===target){
//                 console.log('1');
//                 console.log([nums[i],nums[k]])
//                 return [nums[i],nums[k]];
//             }
//             if (nums[i]+nums[k]>target) break;
//         }
//     }
// };

var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while (left !== right){
        if (nums[left]+nums[right]>target){
            right-=1;
        }else if (nums[left] + nums[right] <target){
            left+=1;
        }else{
            return [nums[left], nums[right]];
        }
    }
};

twoSum([10,26,30,31,47,60]);