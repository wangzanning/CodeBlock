/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let temp = s.substr(0, n);
    let left = s.substring(n);
    return left + temp;

};

var reverseLeftWords = function (s, n) {
    return s.slice(n) + s.slice(0, n);
};
