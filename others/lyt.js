// var x = typeof x
// console.log(x)
// var res = typeof typeof x
// console.log(res)
// console.log(typeof undefined)
// console.log(x)
// var x = ()=>{a:1}
// console.log(x)
// var x = '123'
// console.log(x)


// function add(a,b){
//     return b.push(a)
// }
//
// const res = add('nowcoder',['hello'])
// console.log(res)
// console.log(['hello'].push('nowcoder'))
// console.log(['hello','nowcoder'].unshift('123'))

// export default () => 'hello world'
// export const name = 'noewcode'

// nums = [1, 2,3,5];
// [nums[0], nums[1]] = [nums[1], nums[0]];
// console.log(nums)
// if ({}) console.log('true')
// // console.log(temp);
// // let temp;
//
// let temp = [1,3];
// console.log(temp.slice(0,1));
//
// let temp = 'opoafpofpa';
// let findO = temp.indexOf('o');
// let res = [];
// while (findO > -1) {
//   res.push(findO);
//   findO = temp.indexOf('o', findO+1)
// }
//
// let temp = 'message';
// let res = [...temp];
// console.log(res);


// let test = [1,3,4,5,6];
// let sum_test = eval(test.join('+'));
// console.log(sum_test/test.length);
//
// test[10]=15
// console.log(test);

// var a =100;
// function fn () {
//   var b = 30;
//   function bar()
//   {
//     console.log(this.a);
//     console.log(a+b);
//     console.log(this.b);
//   }
//   return bar;
// }
// var x= fn();
// b = 400;
// x();
//
// function quickSort(arr) {
//   if (arr.length <= 1) return arr
//   let mid_index= parseInt(arr.length/2);
//   let mid = arr.splice(mid_index);
//   let small = [];
//   let big = [];
//   for (let i of arr) {
//     if (i<mid) {
//       small.push(i);
//     }else {
//       big.push(i);
//     }
//   }
//   return quickSort(small).concat(mid).concat(quickSort(big));
//
// }

function SuperType(name) {
  this.name = name;
}

function SubType() {
  SuperType.call(this, 'hello');
}

let instance = new SubType();

//
// console.log(instance instanceof SubType)
// console.log(instance instanceof SuperType)
// console.log(SubType instanceof SuperType)

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i].toString() === arr[j].toString()) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

let test = [1, , , 3];
test[10] = 1;

// console.log(test);

function foo() {
  console.log(this.a);
};
var obj1 = {
  a: 1,
  foo: foo,
  obj2: {
    a: 2,
    foo: foo
  }
}

//foo()函数的直接对象是obj1，this隐式绑定到obj1
obj1.foo();//1

//foo()函数的直接对象是obj2，this隐式绑定到obj2
obj1.obj2.foo();//2

var a = 0;
var obj = {
  a: 2,
  foo: function () {
    console.log(this.a);
  }
}
obj.foo();//0

// var a='123'; var b=123;
var obj = {};
var a = {a: '123'};
var b = {b: 123};
// var obj ={
//   '123': 'b',
//   123 : 'c'
// };
obj[a] = 'b'
obj[b] = 'c'
console.log(obj.a)

let test2 = {
  '222': '123',
  '111': 'abx',
  'b': '123',
  'a': '234'
}
// console.log(Object.getOwnPropertyNames(test2));

var foo = 'bar1';
var myObject = {

  foo: 'bar2',
  func: function () {
    let self = this;
    console.log('outer func this.foo = ' + this.foo);
    console.log('outer func self.foo = ' + self.foo);
    (function () {
      console.log('inner func this.foo = ' + this.foo);
      console.log('inner func self.foo = ' + self.foo);
    }())

  }
}
myObject.func();

// {
//   let temp = '-123';
//   console.log(Math.abs(parseInt(temp)));
// }

{
  let temp1 = '123%';
  let temp2 = 123;
  let shit = temp1.toString().replace(/.*/,(number)=>{
    return number.startsWith('-') ? 0 : number;
  })
  console.log(shit);
  console.log(false && '123');
  console.log(isNaN('123'));
}


let temp3 = '500.00';
  function foo(value) {
    value = Number(value);
    if (Number.isInteger(value)) {
      console.log(parseInt(value))
    }else {
      console.log(parseFloat(value).toFixed(2));
    }
  }
// foo((temp3));

let temp4 = "qa-ci.lcap.gr'o'up";
console.log(temp4.replace(/'/g,'"'));

let temp5 = '{ "selected": [0], "exclude": false }';
console.log(JSON.parse(temp5 || '{}'));





