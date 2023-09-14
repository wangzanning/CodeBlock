function a(fn, time) {
  let flag = true;
  return function () {
    if (flag) {
      return false
    }
    flag = false;
    setInterval(()=>{
      fn();
      flag = true
    }, time);
  }
}

function b (fn, time) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, time);
  }
}
