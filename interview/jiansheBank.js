/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a int整型
 * @param b int整型
 * @return int整型
 */
function reversePlus(a, b) {
  // write code here
  let temp_a = parseInt([...a.toString()].reverse().join(''));
  let temp_b = parseInt([...b.toString()].reverse().join(''));
  let res_a = temp_a > a ? temp_a : a;
  let res_b = temp_b > b ? temp_b : b;
  console.log(res_b+res_a);
  return res_a+ res_b;
  // console.log(temp_a);


}

reversePlus(10, 123)
// module.exports = {
//   reversePlus : reversePlus
// };
