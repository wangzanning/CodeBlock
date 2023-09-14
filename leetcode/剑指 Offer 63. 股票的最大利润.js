/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_VALUE;
    let profile = 0;
    for (let price of prices) {
        profile = Math.max(profile, price - min);
        min = Math.min(min, price);
    }
    return profile;
};

maxProfit([7, 1, 5, 3, 6, 4]);

