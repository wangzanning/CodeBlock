// var lines = [];
// while(line=readline()){
//   lines.push(line);
// }
// let arg1 = lines[0];
{
  let arg1 = '2000';
  arg1 = arg1.split('').reverse();
  let start = 0;
  let counter = 0
  while (start < arg1.length) {
    counter++;
    start++;
    if (counter === 3) {
      arg1.splice(start, 0, ',');
      counter = 0;
      start++;
    }
  }
  arg1 = arg1.reverse().join('');
  if (arg1[0] === ',') {
    arg1 = arg1.slice(1);
  }
}
// console.log(arg1);

//Q5.
// var lines = [];
// while(line=readline()){
//   lines.push(line.split(' '));
// }


let arg1 = [4];
let arg2 = [1, 4, 2, 5, 7,1,3];

let res = 0;
let windowSize = 2;
function check(arr) {
  if (arr.length === 2) {
    return true;
  }
  if (arr.length < 2) return false;
  let temp = arr.slice(1, arr.length -1);
  for (let i of temp) {
    if (i >= arr[0] && i >= arr[arr.length-1]){}
    else {
      return false;
    }
  }
  return true
}


while (windowSize < arg2.length+1) {
  for (let i=0; i< arg2.length-windowSize+1; i++) {
    let temp = arg2.slice(i, i+windowSize);
    console.log(temp);
    if (check(temp)) {
      res++;
    }
  }
  windowSize++;
}
console.log(res);

