function fn(a) {

  console.log(a);

  var a = 123;

  console.log(a);

  function a() {
  }

  console.log(a);
  var b = function () {
  }

  console.log(b);

}

fn(1)


function foo(str) {
  str = str.replace(/-/g,'_');
  str = str.split('_');
  res = '';
  res = res+str[0];
  for (let i=1; i<str.length; i++) {
    i = i.toLowerCase();
    let upper = str[i].slice(0,1).toUpperCase();
    let lower = str[i].slice(1);
    res+= upper + lower;
  }
  console.log(res);
  return res;
}
