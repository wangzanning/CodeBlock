//Q1 判断心跳是否正确
// OOXX
// 3
// 1111
// 1100
// 0100

let input = ['OOXX',3,'1111','1100','0100'];
let res = [];
function checkClick(jump, myClick) {
  let counter = 0;
  for (let i = 0; i< jump.length; i++) {
    if ((jump[i] === 'X' && myClick[i] === '1')) {
      return 'NO'
    }
  }
  return 'YES';
}

let test = input.slice(2);
for (let i of test) {
  let temp = checkClick(input[0], i);
  res.push(temp);
}

//Q2
let goal = 'Mozilla';
let total = 'MMMooozzziiilllllaaaswR';

let goalDict = {};
for (let i of goal) {
  if (goalDict[i]) {
    goalDict[i]++;
  }else {
    goalDict[i] = 1;
  }
}
let totalDict = {};
for (let i of total) {
  if (totalDict[i]) {
    totalDict[i]++;
  }else {
    totalDict[i] = 1;
  }
}

function checkEnough(goal, total) {
  let res = 1;
  let goalList = Object.keys(goal);
  while (true) {
    for (let i of goalList) {
      if (goal[i] && total[i]) {
        if (goal[i] * res <= total[i] * res) {
        } else break;
      }else break;
    }
  }
  return res;
}
let temp = checkEnough(goalDict, totalDict);
console.log(temp);
console.log(totalDict);
console.log(goalDict);



