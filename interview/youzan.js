let arg = 'fix(client): 修复拼写错误';

function checkCommit(str) {
  let reg = /(fix|feature|docs|build|merge|refactor|chore)(\((,*(root|client|server|app))+\)):\s([^\s]*)/g;
  let match = reg.exec(str)
  if (match) {
    console.log(match[0]);
    console.log(match[1]);
    console.log(match[2]);
    console.log(match[5]);

  }


}

checkCommit(arg);
