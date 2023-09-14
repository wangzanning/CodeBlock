
function foo(str) {
  str = str.replace(/-/g,'_');
  str = str.split('_');
  let res = str[0].toLowerCase();
  for (let i=1; i<str.length; i++) {
    let temp = str[i].toLowerCase();
    let upper = temp.slice(0,1).toUpperCase();
    let lower = temp.slice(1);
    res+= upper + lower;
  }
  console.log(res);
  return res;
}

foo( 'heLLo-wOrLd_WanGZanNiNg');


function foo(arr) {
  let start = 0;
  let end = 1;
  while (start < arr.length) {
    if (arr[start] === arr[end]) {
      end++;
    }else {
      arr.splice(start, end-start);
      console.log(arr);
      start = end - 1;
      end = start + 1;
    }
  }
  console.log(arr);
  return arr;
}

foo([1,2,3,3,3,2,4,5,4]);
