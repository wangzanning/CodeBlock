function changeNumber( num ) {
  let temp = num.toString(2);
  let last0 = temp.lastIndexOf(0);
  let second0 = temp.lastIndexOf(0, last0 - 1);
  if (second0) {
    temp = temp.toString();
    temp = temp.split('');
    temp[second0] = 1;
    temp = temp.join('');
    console.log(temp);
    temp = parseInt(temp, 2);
  }
  return temp;
}

changeNumber(10)

function findInterval( str ) {
  // write code here


}

findInterval("abcdefghijklmnopqrstuvw???xyz");

