/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let output = [];
    for (let i = 1; i < Math.ceil(target / 2); i++) {
        let sum = 0;
        let current = [];
        while (sum <= target) {
            for (let k = i; k < target; k++) {
                sum += k;
                current.push(k);
                if (sum === target) {
                    output.push(current);
                    break;
                }
                if (sum > target) break;
            }
            if (sum >= target) break;
            // console.log(sum);
            // console.log(current);
        }
    }
    console.log(output);
    return output;
};

var findContinuousSequence = function (target) {
    let res = [];
    let left = 1;
    let right = 1;
    let currentSum = 0;
    let currentList = [];
    while (left < Math.ceil(target / 2)) {
        if (currentSum < target) {
            currentList.push(right);
            currentSum += right;
            right += 1;
        } else if (currentSum > target) {
            currentList.shift();
            currentSum -= left;
            left += 1;
        } else {
            const temp = currentList.concat()
            res.push(temp);
            currentList.shift();
            currentSum -= left;
            left += 1;
        }
    }
    console.log(res)
    return res;
};


findContinuousSequence(15);
