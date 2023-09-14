/**
 * @param {number} num
 * @return {number}
 */


var translateNum = function (num) {
    if (num.length === 0 || num.length === 1) return 1
    let res = new Array(num.length).fill(0);
    res[0] = 1;
    num = num.toString();
    for (let i = 1; i < num.length; i++) {
        let number = Number(num[i - 1] + num[i]);
        if (10 <= number && number <= 25) {
            if (i>1) res[i] = res[i - 1] + res[i - 2]
            else {res[i] = res[i-1] +1}
        } else {
            res[i] = res[i - 1];
        }
    }
    console.log(res);
    return res[res.length - 1];
};

translateNum(25);