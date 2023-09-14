function temp () {
  location = useLocation();
  a = 'www.baidu.com?key=valu';

  a.replace(/^.*\.com?/,'')
  a = a.split('&');
  a = [];
  res = {};
  for (let i of a) {
    i.split("=");
    res[i[0]] = i[1];
  }
  return res
}
