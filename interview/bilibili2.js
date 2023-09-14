// let arg1 = [1,3,2,3,2,2,1,2];
// let arg2 = 2;

function getKMost(arr, num) {
  let dict = {};
  for (let i of arr) {
    if (dict[i]) {
      dict[i]++;
    }else {
      dict[i] = 1;
    }
  }
  let valList = Object.values(dict);
  valList = Array.from(new Set(valList));
  valList = valList.sort((a,b)=>b-a);
  let kValue = valList[num - 1];
  let res = []
  for (let i in dict) {
    if (dict[i] === kValue) {
      res.push(i);
    }
  }
  res = res.sort((a,b)=>a-b);
  console.log(res);
  if (res.length >= 1) {
    console.log(`${res[0]} ${kValue}`);
  }else {
    console.log('-1 -1');
  }


}

// getKMost(arg1, arg2);

let arg1 = 50;
function sumOdd(num) {
  let odd = [];
  for (let i=0; i< num; i++) {
    if (i % 2 === 1) {
      odd.push(i);
    }
  }
  let total = eval(odd.join("+"));
  console.log(total);
}


sumOdd(arg1);

