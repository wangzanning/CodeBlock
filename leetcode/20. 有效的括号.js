/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  s = s.split("");
  if (s.length % 2 === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    if (temp === "(" || temp === "[" || temp === "{") {
      stack.push(temp);
      continue;
    }
    if (temp === ")" || temp === "]" || temp === "}") {
      test = stack.pop();
      if (temp === ")" && test !== "(") {
        return false;
      } else if (temp === "]" && test !== "[") {
        return false;
      } else if (temp === "}" && test !== "{") {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }

};

console.log(isValid("[)"))
