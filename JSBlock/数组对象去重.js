let data = [
  {
    "kind": "basicType",
    "text": "Text 长文本",
    "value": "#/basicTypes/Text"
  },
  {
    "kind": "basicType",
    "text": "Text 长文本",
    "value": "#/basicTypes/Text"
  },
  {
    "kind": "basicType",
    "text": "String 字符串",
    "value": "#/basicTypes/String"
  },
  {},
]

let obj = {};
data = data.reduce(function (item, next) {
  obj[next.value] ? '' : obj[next.value] = true && item.push(next);
  return item;
}, []);

data = data.filter((item)=>{
  return Object.keys(item).length !== 0;
})
// console.log(data);
// console.log(undefined.replace('123', ''));

console.log('123', data[0].temp);

