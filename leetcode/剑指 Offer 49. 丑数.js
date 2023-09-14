/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let res = Array(n).fill(0);
    let pointerA, pointerB, pointerC;
    res[0] = 1;
    let starter = 1;
    pointerA = 0;
    pointerB = 0;
    pointerC = 0;
    while (starter < n) {
        let ugly = Math.min(res[pointerA] * 2, res[pointerB] * 3, res[pointerC] * 5);
        res[starter] = ugly;
        console.log(ugly);
        while (res[pointerA]*2 <= ugly) {
            pointerA++;
        }
        while (res[pointerB]*3 <= ugly) {
            pointerB++;
        }
        while (res[pointerC]*5 <= ugly) {
            pointerC++;
        }
        starter++;
    }
    return res[n - 1];
};

nthUglyNumber(10);
// [1,2]
//1 2 3 5
//2 4 6 10