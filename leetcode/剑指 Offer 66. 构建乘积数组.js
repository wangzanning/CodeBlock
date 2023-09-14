/**
 * @param {number[]} a
 * @return {number[]}
 */

var constructArr = function (a) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        let temp = a.concat();
        temp.splice(i, 1);
        let sum = 1
        for (let k = 0; k < temp.length; k++) {
            sum *= temp[k]
        }
        res.push(sum);
    }
    return res
};


var constructArr = function (a) {
    let res = new Array(a.length).fill(1);
    let temp = 1;
    for (let i = 1; i < a.length; i++) {
        res[i] = res[i - 1] * a[i - 1];
    }
    for (let i = a.length - 2; i >= 0; i--) {
        temp *= a[i + 1];
        res[i] *= temp;
    }
    return res;

};

var constructArr = function (a) {
    let res = new Array(a.length).fill(1);
    let right = new Array(a.length).fill(1);
    for (let i = 1; i < a.length; i++) {
        res[i] = res[i - 1] * a[i - 1];
    }
    for (let i = a.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * a[i + 1];
    }
    for (let i = 0; i < a.length; i++) {
        res[i] += right[i];
    }
    return res;
};