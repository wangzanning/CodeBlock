/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    var rexg = /\s/g;
    return s.replace(rexg,'%20');
};