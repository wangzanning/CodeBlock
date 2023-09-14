/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param strs string字符串一维数组
 * @return string字符串
 */
function longestCommonPrefix( strs ) {
  // write code here
  strs.sort((a,b)=>a.length - b.length);
  let temp = strs.slice(1);
  let res;
  outer:
  for (let i=0; i< strs[0].length; i++) {
    for (let k of temp){
      if (strs[0][i] === k[i]) {}
      else {
        res = i
        break outer;
      }
    }
  }
  return strs[0].substr(0, res);

}
longestCommonPrefix(["flower","flow","floight"])
module.exports = {
  longestCommonPrefix : longestCommonPrefix
};
