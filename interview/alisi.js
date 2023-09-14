let arg1 = '{{name}}很厉害，趁着{{info.school}}放暑假，去{{info.city}}获得了{{info.gold}}个金牌！';
let arg2 = {name: '杨倩', info: {age: 21, school:"清华大学", city: "东京", gold: 2}};
//杨倩很厉害，趁着清华大学放暑假，去东京获得了2个金牌

function render(str, obj) {
  while (str.includes('{{')) {
    let match_str = str.match(/\{\{\w+\.?\w+\}\}/);
    if (match_str) {
      match_str = match_str[0];
      match_str = match_str.replace(/\{/g, '').replace(/\}/g, '');
      let res_value = getValue(obj, match_str);
      str = str.replace(`{{${match_str}}}`, res_value);
    }
  }
  console.log(str);
  return str;
}

function getValue(obj, str) {
  let str_list = str.split('.');
  let str_length = str_list.length;
  for (let i=0; i< str_length; i++) {
    temp = obj[str_list[i]];
    obj = temp;
  }
  // console.log(obj);
  return obj;
}

// getValue(arg2, 'info.school');
render(arg1, arg2);
