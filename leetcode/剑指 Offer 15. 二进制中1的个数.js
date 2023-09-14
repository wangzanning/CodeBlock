/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let counter = 0;
    n = n.toString(2);
    for (let i = 0; i < n.length; i++) {
        if (n.charAt(i) == 1) counter += 1
    }
    console.log(counter);
    return counter;
};

var hammingWeight = function (n) {
    let temp = n.toString(2).match(/1/g);
    return temp ? temp.length : 0;
};

var hammingWeight = function (n) {
    let counter = 0;
    while (n !== 0) {
        n = n & (n - 1);
        counter++;
    }
    return counter;
};


hammingWeight(00000000000000000000000000001011);