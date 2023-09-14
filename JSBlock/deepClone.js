function deepClone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (let item in obj) {
    let value = (obj[item] && typeof obj[item] === 'object') ? deepClone(obj[item]) : obj[item];
    newObj[item] = value;
  }
  return newObj;
}


let obj = {'a': 'abc', 'b':{'a':{'d':'d'}},'c':'c'};
console.log(deepClone(obj));
let c= deepClone(obj);
