/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    let xor = 0;
    nums.forEach((item) => {
        xor ^= item;
    })
    let count_1 = 1;
    while ((xor & count_1) === 0) {
        count_1 <<= 1;
    }
    console.log(count_1);

    let res1 = 0;
    let res2 = 0;
    nums.forEach((item) => {
        if ((item & count_1) === 0) {
            res1 ^= item;
        } else {
            res2 ^= item;
        }
    })
    console.log([res1, res2]);
    return [res1, res2];
};

singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]);