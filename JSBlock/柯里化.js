function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

// function sum(...arg) {
//   return eval(arg.join('+'));
// }
function sum(a,b,c) {
  return a+b+c;
}


let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

function curry2(func) {
  return function curried(...arg) {
    if (func.length === arg.length) {
      return func.apply(this, arg);
    }else {
      return function (...arg2) {
        curried.apply(this, arg.concat(arg2));
      }
    }
  }
}


// let temp1 = curriedSum(1);
// let temp2 = temp1(2,3);
// console.log(temp2)

