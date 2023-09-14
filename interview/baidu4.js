let arg1 = [3300, 3400, 4, 200, 3244, 22, 100];

//100=>133=>033=>33;
//200=>233=>133
//3300=>3333=>3233
//3600=>3333
//output
let res = [];
for (let i of arg1) {
  res.push(foo(i));
}
console.log(res);

function foo(num) {
  let str = num.toString();
  let res = '';
  for (let i of str) {
    if (parseInt(i) <= 3 && parseInt(i) !== 0) {
      res+=i;
    } else {
      res+='3';
    }
  }
  if (parseInt(res) > num) {
    let counter = 0;
    for (let i=0; i<res.length; i++) {
      let temp = res.split('');
      temp[i] = (temp[i] -1).toString();
      temp = temp.join('');
      if (temp <= num) {
        counter++
      }else {
        break;
      }
    }
    res = res.split('');
    res[counter - 1] = (parseInt(res[counter - 1]) - 1).toString();
    res = res.join('');
    let temp = parseInt(res.slice(0, 1));
    if (temp === 0) {
      return parseInt(res.slice(1));
    }else {
      return parseInt(res);
    }


  }else {
    return parseInt(res);
  }
}


