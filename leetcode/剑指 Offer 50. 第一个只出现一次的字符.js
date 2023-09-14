/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    for (let char of new Set(s)) {
        if (s.match(new RegExp(char, 'g')).length === 1) return char;
    }
    return ' ';
};

var firstUniqChar = function (s) {
    if (!s) return ' ';
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]]) {
            dict[s[i]] = 1
        } else {
            dict[s[i]]++;
        }
    }
    console.log(dict);
    for (let keys in dict) {
        if (dict[keys] === 1) {
            return keys;
        }
    }
    return " ";
};

firstUniqChar('leetcode');