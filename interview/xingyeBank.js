/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串 字符串
 * @return int整型
 */
function maxLengthBetweenEqualCharacters( s ) {
  let res = 0;
  for (let i of s) {
    let start = s.indexOf(i);
    let last = s.lastIndexOf(i);
    if ((last - start) > res) {
      res = last - start - 1;
    }
  }
  return res;
}

console.log(maxLengthBetweenEqualCharacters("fwejfldskjf"));
// module.exports = {
//   maxLengthBetweenEqualCharacters : maxLengthBetweenEqualCharacters
// };
