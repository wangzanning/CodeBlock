// let temp3 = '500.00';
// function foo(value) {
//   value = Number(value);
//   console.log(value);
//   if (Number.isInteger(value)) {
//     console.log(parseInt(value))
//   }else {
//     console.log(parseFloat(value.toFixed(2)));
//   }
// }
// foo((temp3));
//
// let temp1 = '';
// temp1 = parseFloat(temp1);
// console.log(`${temp1}px`);

// let value = '123.50';
// if (/^\d+$/.test(value)) {
//   console.log(parseInt(value));
// } else {
//   console.log(parseFloat(value.toFixed(2)));
// }

let value = '-23%';
// value = value.replace('%','').replace(/^(\d+\.\d{2})(\d*)$/,($, $1)=>{
//   return $1+'%';
// })
// console.log(value);

// value = value.replace(/(?<=-?\d+\.\d{2})(\d*)(?=%)/, '');
// 清楚多余'.', 清除除负号外非数字字符，最多保留两位小数
// function getTwoDecimals(value) {
//   value = value.replace(/[^\d.|-]/g, "").replace(/\.{2,}/g, ".");
//   value = value.replace(/^(-?\d+\.\d{2})(\d*)$/, ($, $1) => {
//     return $1;
//   })
//   return value + '%';
// }
//
// value = getTwoDecimals(value);
// console.log(value);

let temp = {
  a: '1123',
  b: '234'
}

console.log(temp['c']);
let test = '';
const x = test.split('.')[test.split('.').length - 1];
console.log(test.split('.')[test.split('.').length - 1]);

