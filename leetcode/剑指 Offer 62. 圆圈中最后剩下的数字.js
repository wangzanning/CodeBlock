/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(i);
    }
    let pointer = 0;
    while (res.length > 1) {
        pointer = (pointer + m - 1) % res.length;
        res.splice(pointer, 1);
    }
    return res[0];
};

var lastRemaining = function (n, m) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (m + res) % i;
    }
    return res;
};


lastRemaining(5, 3);