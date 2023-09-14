/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = {};
    for (let i of nums){
        if (i in dict){
            dict[i]++;
        }else {
            dict[i] = 1;
        }
    }
    for (let key in dict){
        if (dict[key] === 1){
            console.log(key);
            return key;
        }
    }
};

singleNumber([9,5,7,9,7,9,7]);