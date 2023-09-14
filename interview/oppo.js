/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 将下划线、中划线命名转换为转换驼峰命名
 * @param variable string字符串 命名变量
 * @return string字符串
 */
function toCamelCaseVar( str ) {
  str = str.toLowerCase();
  str = str.replace(/([_|-].)/g,(temp)=>temp.slice(1).toUpperCase());
  // console.log(str);
  return str;
}
// module.exports = {
//   toCamelCaseVar : toCamelCaseVar
// };

toCamelCaseVar("Foo-style_css");


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param versions string字符串一维数组 乱序版本号数组
 * @return string字符串一维数组
 */
function sortVersion( versions ) {
  let temp = [];
  for (let i of versions) {
    temp.push(i.split('.'));
  }
  console.log(temp);
}
let counter = 0;



// module.exports = {
//   sortVersion : sortVersion
// };

sortVersion(["1.45.0",  "1.5",  "6",  "2.3.4.5"]);
