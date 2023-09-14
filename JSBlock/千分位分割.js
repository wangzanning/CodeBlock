const formatter = (num) => {
  const reg = /^\d*$/
  if (!reg.test(num)) {
    throw '输入内容有误！请输入数字'
  } else {
    return String(num).replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  }
}


const formatter2 = (num) => {
  const reg = /^\d*$/
  if (!reg.test(num)) {
    throw '输入内容有误！请输入数字'
  } else {
    return String(num).replace(/\d{1,3}(?=(\d{3})+($|\.))/g, (temp)=>temp+',')
  }
}

console.log(formatter2(1000000000));
