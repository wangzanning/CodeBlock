/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    let res = 0;
    if (n===2) return 1
    if (n===3) return 2;
    let a = Math.floor(n/3);
    let b = n % 3;

    if (b===0){
        res = Math.pow(3,a);
    } else if (b ===1){
        res = Math.pow(3,a-1) * 4;
    }else{
        res = Math.pow(3,a)*2;
    }
    return  res;
};