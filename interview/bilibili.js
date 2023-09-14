// Q3
function q3() {
  let test = ["bilibili.com", "master@bilibili.com", "test.bilibili@bilibili.com", "test@bilibili.biliil.com", "test.bilibili.com", "test.bili@bili.com"];
  let res = [];
  for (let i of test) {
    if (! i.match(/@/)) {
      res.push(i);
    }
  }
  console.log(res);
  return res;
}

q3();
