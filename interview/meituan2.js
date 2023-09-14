let arg1 = 'meituan';
let arg2 = 'inn'
//answer 10

//meituanmeituan

function q3(arg1, arg2) {
  for (let i of arg2) {
    if (!arg1.includes(i)) {
      return -1
    }
  }
  let waste = 0;
  let search = arg1 +'';
  for (let i of arg2) {
    if (search.indexOf(i) === -1){
      search = search.concat(arg1);
    }
    let searchIndex = search.indexOf(i);
    let temp = searchIndex+1 ? search.slice(searchIndex+1) : '';
    waste += searchIndex;
    search = temp;
  }
  console.log(waste);
  return waste;
}

console.log(q3(arg1, arg2));

