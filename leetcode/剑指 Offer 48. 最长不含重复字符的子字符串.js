/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let temp = Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        let k = i + 1;
        let counter = 1;
        let store = [];
        store.push(s[i])
        while (s[k] !== s[i] && k < s.length) {
            store.push(s[k])
            let setCurrent = new Set(store);
            if (setCurrent.size === store.length) {
                counter++;
                k++;
            } else {
                break;
            }
        }
        temp[i] = counter;
    }
    // console.log(temp);
    return Math.max(...temp);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0
    }
    let temp = [];
    let max_str = 0;
    for (let i of s) {
        while (temp.includes(i)) {
            temp.shift();
        }
        temp.push(i)
        if (temp.length > max_str) {
            max_str = temp.length;
        }
    }
    return max_str;
};
