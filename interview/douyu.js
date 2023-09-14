/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num string字符串
 * @return bool布尔型
 */
function solution( num ) {
  // write code here
  if (num.length === 0) return true;
  if (num.length === 1 && (parseInt(num) === 1 || (parseInt(num) === 0) || (parseInt(num) === 2)
    || (parseInt(num) === 5) || (parseInt(num) === 6) || (parseInt(num) === 9))) {
    return true;
  } else {
    return false;
  }
  num = num.split('');
  let start = 0;
  let end = num.length -1;
  while (start < end) {
    let top = parseInt(num[start]);
    let bottom = parseInt(num[end]);
    console.log(top, bottom);
    if ((top === 1 && bottom ===1) || (top === 2 && bottom === 5) || (top === 5 && bottom === 2) ||
      (top === 0 && bottom === 0) || (top === 6 && bottom === 9) || (top === 9 && bottom === 6)) {}
    else {
      return false
    }
    start++;
    end--;
  }
  if (start+2 === end) {
    let temp = parseInt(num[start+1]);
    if (! (temp === 1 || temp === 0)) {
      return false
    }
  }

  return true

}
module.exports = {
  solution : solution
};
