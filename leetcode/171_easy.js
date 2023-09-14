//leetcode 171_easy_2020_12_30
//Zanning Wang
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let output = 0
    s = s.toLowerCase();
    for (let i = s.length -1; i >= 0; i--) {
        output += Math.pow(26,s.length - 1 - i) * (s.charCodeAt(i) - 96)
    }
    console.log(output);
    return output
};


titleToNumber('ZY');