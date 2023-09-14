// let test = '012345';
// let str = test.substring(3,5);
// console.log(str);

// var value = 1;
//
// function foo() {
//     console.log(value);
// }
//
// function bar() {
//     var value = 2;
//     foo();
// }
//
// function sum(list){
//     let out = 0;
//     list.forEach(function (number){
//         out+=number;
//     })
//     return out;
// }
//
// function matrix(m, n) {
//     var result = []
//     for(var i = 0; i < n; i++) {
//         result.push(new Array(m).fill(0))
//     }
//     return result
// }
// nums = [2,2,1,1,1,2,2];
// nums.sort((a,b)=>b-a)
//
// let tests= [1,2, 3,4,5,6]
// tests.splice(2,1);

// let arr = [1,2,3]
// for (let i in arr){
//     console.log(i, arr[i]);
// }
// bar();  // 1
// console.log(null == undefined);

// for (var i=0; i<10; i++){
//     ((i)=>{
//         setTimeout(()=>{console.log(i);},1000)
//     })
//     (i)
// }

// console.log([3,15,820,29,102,22,81].sort());

// var obj = {
//     0:3,
//     '3':4,
//     'length':3,
//     'splice': Array.prototype.slice,
//     'push': Array.prototype.push
// }
// obj.push(1);
// obj.push(2);
// console.log(obj[4]);
//obj [3,undefined,undefined,1,2]

// let obj = {1:222,2:123,5:123}
// const result = Array.from({length:12}).map((_,index)=>obj[index+1]||null)
// console.log(result);

// let temp = 'aBcDeffgH';
// function trans(str){
//     return str.replace(/([A-Z]*)([a-z]*)/g,function ($0,$1,$2){
//         return $1.toUpperCase();$2.toLowerCase();
//     })
// }
// trans(temp);
// console.log(temp);

// var a={}
// b={key:'123'}
// c={key:'456'}
// a[b]='b'
// a[c]='c'
// console.log(Object.keys(a));

// console.log('1'+1);
// console.log(typeof ('1'+1));
// console.log('1'*1);
// console.log(typeof ('1'*1));
// console.log(typeof (null))
// console.log(typeof (undefined));

// let temp = [1,2,3,4]
// for (let i of temp){
//     console.log(i)
// }

// if ([] == false) console.log(1)
// if ({} == false) console.log(2)
// if ([]) console.log(3)

// if ([1] == [1]) console.log(4)
// arr = [1]
// arr2 = arr
// if (arr == arr2) console.log(5)
//
// import * as data from './lyt'
// console.log(data)
//
// let test = [1,3,4,5];
// test.slice()

// let test = {1: 'b', 2: 3};
// let test2 = new Map();
// test2.set(1, 'b');
// test2.set(2, 3);
// // console.log(test[1]);
// console.log(Array.from(test2.entries()));
//
// const test = new String('test');
// console.log(typeof(test));

// let test = [1,2,3,4,5];
// let test2 = Array.from(test);
// test2[0] = 1000;
// console.log(test2);
// console.log(test[Symbol.iterator]());
// for (let i of test[Symbol.iterator]()) {
//   console.log(i);
// }

// let test2 = [...test];
// test2[0] = 1000;
// console.log(test)

// let test = [1,2,3,4,5];
// let iter = test[Symbol.iterator]();
// for (let i of iter) {
//   console.log(i)
//   if (i === 2) break;
// }
// for (let i of iter) {
//   console.log(i);
// }

// let test = 'hello';
// test[2] = 'm';
// console.log(test);

// var test = 10;
// (function b() {
//   console.log(test);
// })();
let test = [1, 2, 2, 3, 3];
test = Array.from(new Set(test));
console.log(test);

let test1 = [1, 3, 5];
let test2 = [2, 3, 5, 6];

/**
 * @param {Object} arr1
 * @param {Object} arr2
 * @returns {Object} res
 */
function getDifference(arr1, arr2) {
  let temp = arr1.concat(arr2);
  let res = temp.filter((key, index, arr) => arr.indexOf(key) === arr.lastIndexOf(key))
  console.log(res);
  return res;
}

getDifference(test1, test2);

let matrix = [];
for (let i = 0; i < 3; i++) {
  matrix.push(new Array(5).fill(0))
}
console.log(matrix);

//原型链继承
function Father(name) {
  this.name = name
}

function Son() {
}

Son.prototype = new Father()
console.log();

//构造函数

function Son2() {
  Father.call(this, 'newName');
}

// ES6
// class Father {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
// }
// class Son extends Father {
//   constructor(name, age, job) {
//     super(name, age);
//     this.job = job;
//   }
// }


function deepClone(obj) {
  let newObject = obj instanceof Array ? [] : {};
  for (let item in obj) {
    let value = (obj[item] && typeof (obj[item]) === 'object') ? deepClone(obj[item]) : obj[item];
    newObject[item] = value;
  }
  return newObject;
}

let obj = {'a': 'abc', 'b': {'a': {'d': 'd'}}, 'c': 'c'}
// console.log(Object.keys(obj));
for (let k of Object.keys(obj)){
  console.log(obj[k]);
}

// console.log(deepClone(obj));

function throole(fn, time) {
  let flag = false;
  return function () {
    if (!flag) {
      return false;
    }
    flag = false;
    setInterval(()=>{
      fn();
      flag = true;
    }, time);
  }
}

let str = 'abc';
function reverse(x) {
  x=x.split('');
  return x.reverse().join('');
}
// console.log(reverse(str));

let bb = 1;
function aa(bb) {
  bb=2;
  console.log(bb);   // 2
}
aa(bb);
console.log(bb);   // 1

// function deepClone(obj) {
//   let newObj = (obj instanceof Array) ? [] : {};
//   for (let i in obj) {
//     let temp = (obj[i] && typeof i === 'object') ? deepClone(obj[i]) : obj[i];
//     newObj[i] = temp;
//     return newObj;
//   }
// }

function throole(fn, time) {
  let flag = null;
  return function () {
    if (flag) return false;
    flag = false;
    setInterval(()=>{
      fn();
      flag = true;
    }, time);
  }
}

function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) clearTimeout();
    setTimeout(fn, time);
  }
}

test = '123';
// console.log(test.substr(1,2));

let test4 = '123'
 test4[1] = 1;
// console.log(test4);


async function test3() {
  return 1;
}

let b = test3();
// console.log(b);

const check = (a, b) => {
  console.log(a);    // [function a]
  console.log(b);    // 'b'
  var a = 'aaaa';
  function a(){console.log('function a')}
  b = ()=>{console.log('function b')}
  // function b(){console.log('function b')}
  console.log(a);    // 'aaaa'
  console.log(b);    //  [function b]
}

check('a','b');

{
  let test = [1,2,3,4,5];
  test.forEach((item,index)=>{
    if (item === 3) return
    // console.log(item)
  })
}

{
  var abc = 1234;
  // abcd = 2345;
  // delete abc;
  // console.log(abc);     // 1234
  delete abcd;
  // console.log(abcd);      // abcd is not defined
}
{
  // 5 0 1 2 3 4
  var printout = function (i) {
    setTimeout(function () {
      // console.log(i);
    }, 1000);
  }
  for (var i=0; i< 5; i++) {
    // printout(i);
  }
  // console.log(i);
}
{
  function a(x) {
    return x * 2;
  }
  // var a;
  // console.log(typeof (a));    // function
}

{
  let arr = [2,1,3];
  arr.sort((a,b)=>a-b);
  // console.log(arr);
  let arr2 = [...'123'];
  // console.log(arr2);
  let str = '您好1'
  console.log(str.length);
}

