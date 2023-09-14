//line=readline()
//print(line)
// console.log('Hello World!');
// function get(obj, str) {
//     let temp_str = str.split('.');
//     let temp_length = temp_str.length;
//     for (let i=0; i<temp_length; i++) {
//         let temp_check = obj[temp_str[i]];
//         obj = temp_check;
//     }
//     console.log(obj);
//     return obj;
// }

get({a : { b: [0,1]}}, 'a.b[0]');

function get (obj, str) {
  let temp_str = str.replace(/\[/g,'.');
  temp_str = temp_str.replace(/\]/g,'');
  temp_str = temp_str.split('.');
  let temp_length = temp_str.length;
  for (let i = 0; i<temp_length; i++) {
    if (Number.isNaN(i)) {
      i = parseInt(i);
    }
    console.log(i)
    let temp_check = obj[temp_str[i]];
    obj = temp_check;
  }
  console.log(obj);
  return obj;
}

function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    args.length >= length ? fn.apply(this, args) : currying(fn.bind(this, ...args), length - args.length)
  }
}
