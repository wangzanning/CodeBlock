function getDate() {//时间戳转日期
  let date = new Date();
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return '' +y + MM + d;
}
console.log(getDate());
