/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回Sn的第k位字符
 * @param n int整型 Sn的n
 * @param k int整型 需要返回的字符下标位
 * @return char字符型
 */
function findKthBit( n ,  k ) {
  // write code here
  let l_list = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let invert_dict = {'a':'z', 'b':'y', 'c': 'x', 'd': 'w', 'e':'v','f':'u','g':'t','h':'s','i':'r','j':'q','k':'p','l':'o',
                      'm':'n','n':'m','o':'l','p':'k','q':'j','r':'i','s':'h','t':'g','u':'f','v':'e','w':'d','x':'c','y':'b','z':'a'
  }
  let res_list = new Array(n).fill('');
  function reverse(x) {
    x=x.split('');
    return x.reverse().join('');
  }
  function invert(x) {
    let temp = x.split('');
    let res = []
    for (let i of temp) {
      res.push(invert_dict[i]);
    }
    return res.join('');
  }
  res_list[0] = 'a';
  for (let i=1; i<n; i++) {
    res_list[i] = res_list[i-1] + l_list[i] + reverse(invert(res_list[i-1]));
  }
  let res = res_list[n-1];
  console.log(res_list);
  return res[k-1];

}
findKthBit(4, 11);

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算最小航行费用
 * @param input int整型二维数组 二维网格
 * @return int整型
 */
function minSailCost( input ) {
  // write code here
}
 minSailCost([[1,1,1,1,0],[0,1,0,1,0],[1,1,2,1,1],[0,2,0,0,1]]);
//result 7

function captureThreeNumbers(str) {
  let res = str.match(/\d{3}/);
  if (res === null) {
    return false
  }else {
    return res[0];
  }
}
