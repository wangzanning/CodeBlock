// https://leetcode-cn.com/problems/daily-temperatures/solution/mei-ri-wen-du-by-leetcode-solution/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let newStack = [];
    let day;
    let output = []
    for (let i = 0; i < T.length; i++) {
        newStack.push(T[i]);
        day = 0;
        let flag = false;
        for (let k = i + 1; k < T.length; k++) {
            if (T[i] >= T[k]) {
                newStack.push(T[k])
                day = newStack.length;
            } else if (T[i] < T[k]) {
                day = newStack.length;
                newStack = [];
                flag = true;
                break;
            }
        }
        if (!flag) {
            newStack = [];
            day = 0;
        }
        output.push(day);
    }
    return output
};

var dailyTemperatures = function (T) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let topIdx = stack.pop();
            res[topIdx] = i - topIdx;
        }
        stack.push(i);
    }
    return res;
};


var dailyTemperatures = function (T) {
    let output = new Array(T.length).fill(0);
    let newStack = [];
    for (let i = 0; i < T.length; i++) {
        while (T[i] > T[newStack[newStack.length - 1]] && newStack.length !== 0) {
            let topIndex = newStack.pop();
            output[topIndex] = i - topIndex;
        }
        newStack.push(i);
    }
    return output;
};


