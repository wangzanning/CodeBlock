// a= 1, b=2, c=3,
//url = www.baidu.com?a=b&c=d

// function url(url) {
//   url = url.replace(/^.*\.com\?/,'');
//   url = url.split('&');
//   let res= {};
//   for (let i of url) {
//     i = i.split('=');
//     if (!i[1]) {
//
//     }
//     res[i[0]] = i[1];
//   }
// }
//
//
// //{}  www
// function reverseUrl(obj) {
//   let res = 'www/baidu.com?';
//   for (let i of obj) {
//     let temp = `${i}=${obj[i]}&`;
//     res+=temp;
//   }
//   res = res.slice(0, res.length-2);
//   return res
// }

let temp = [2, 7,11, 5];
let val = 13;

function temp2(temp, val) {
  let res = []
  for (let i=0; i<temp.length; i++) {
    for (let j=i+1; j<temp.length; j++) {
      if (temp[i]+temp[j] === val) {
        return [i,j]
      }
    }
  }
  return [];
}

function temp3 (temp, val) {
  let res = [];
  let stack = [];
  for (let i=0; i<temp.length; i++) {
    if (stack.length === 0) {
      stack.push(temp[1])
      i++;
    }
    if (stack.length <2) {
      stack.push(i);
      if (stack[0] + stack[1] === val) {
        return []
      }
    }
  }
}

temp2(temp, val);
