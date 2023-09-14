/**
 * @param {string} s
 * @return {string[]}
 */
//
// function toCamelCase(s){
//     let res = ''
//     for(let i=0;i<s.length;i++){
//         if (s[i] === '-'){
//             let replace = s[i+1].toUpperCase();
//             res+=replace;
//             i+=1;
//         }else{
//             res+=s[i];
//         }
//     }
//     console.log(res);
// }

function toCamelCase(s){
    let res = s.replace(/-(\w)/g,($0,$1)=>{
        return $1.toUpperCase();
    })
    console.log(res);
    return res;
}

toCamelCase('abc-def-ghi');