/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param string1 string字符串
 * @param string2 string字符串
 * @return boolean
 */
function isGoodFriends( string1 ,  string2 ) {
  // write code here
  let arg1 = string1.split('').sort().join('');
  let arg2 = string2.split('').sort().join('');
  return arg1 === arg2 && string1 !== string2 ? true : false;
}

console.log(isGoodFriends("cmbchina","cmbchina"));

// .box {
//   margin: 20px auto;
//   position: relative;
//   width: 100px;
//   height: 100px;
//   border: 1px solid #333;
//   background: linear-gradient(45deg, transparent 49.5%, red 49.5%, red 50.5%, transparent 50%)
// }
