// Array.from浅复制不影响原数组
// let test = [1,2,3,4,5];
// let test2 = Array.from(test);
// test2[0] = 1000;
// console.log(test2);


// console.log(test[Symbol.iterator]);
// for (let i of test[Symbol.iterator]()) {
//   console.log(i);
// }

// 单独维护一个可迭代对象，继续之前中断的迭代过程

// let test = [1, 2, 3, 4, 5];
// let iter = test[Symbol.iterator]();
// for (let i of iter) {
//   console.log(i);
//   if (i === 2) break;
// }
// for (let i of iter) {
//   console.log(i);
// }

function Person() {
  this.name = 'apple';
}
Person.prototype.friend = 'wang';
function From() {
  this.from = 'China';
}
From.prototype = new Person();
const person1 = new Person();
person1.friend = 'zanning';
const person2 = new From();
console.log(person1.friend);    // zanning
console.log(person2.name);     // apple

console.log('----------------------')

function Book() {
  this.type = 'English';
}
Book.prototype.getType = function () {
  console.log(this.type);
}

const book = new Book();
book.getType();    //English
book.type = 'Math';
// book.getType();
console.log(book.valueOf());    //Book { type: 'Math'}
