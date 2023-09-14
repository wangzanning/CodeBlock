/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    if (b !== 0) {
        let carry = a ^ b;
        let nonCarry = (a & b) << 1;
        return add(carry, nonCarry);
    }
};