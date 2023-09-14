let testString = 'asdlfgsiofgadgsa';
let findString = ['dg', 'adg', 'gs'];
let res = '';
//拼接所有可能的字符串
for (let i of findString) {
  for (let j of findString) {
    if (i[i.length-1] === j[0]) {
      let temp = i + j.slice(1);
      findString.push(temp);
    }
  }
}

//从长到短去匹配
findString.reverse();
console.log(findString);

for (let i of findString) {
  console.log(i);
  testString = testString.replace(i, `<span>${i}</span>`);
}

console.log(testString);

