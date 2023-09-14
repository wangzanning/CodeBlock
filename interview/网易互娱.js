// function judge(value) {
//
// }
//
//
// judge(['10px', '20px', '30px']);


function main(input) {
  const parsedInput = JSON.parse(input);
  const str = parsedInput.str;
  const obj = parsedInput.obj;

  function getReplaceStr(str, obj) {
    while (str.includes('{')) {
      let match_str = str.match(/\{\w+\.?\w+\}/);
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
      temp = obj[str_list[i]] || str_list[i];
      obj = temp;
    }
    // console.log(obj);
    return obj;
  }

  console.log(getReplaceStr(str, obj));
  // console.log(JSON.stringify(getReplaceStr(str, obj)));
}

main({
  "obj": {
    "gameName": "阴阳师",
    "user": {"name": "三笠"},
    "role": {"roleName": "茨木童子", "roleId": 123123},
    "level": "SSR"
  },
  "str": "恭喜!{obj.user.name}画出了一个神秘咒符，召唤出了{obj.desc}{obj.level}式神{obj.role.roleName}!"
})
