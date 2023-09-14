/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let temp = '';
  let cur = 0;
  while (temp.length < n+1) {
    temp += cur;
    cur++;
  }
  return temp[n];
};
