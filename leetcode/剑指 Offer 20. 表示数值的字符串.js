/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    if(!s) return false;
    if(!isNaN(Number(s))){
        return true;
    }else{
        return false;
    }
};

var isNumber = function(s) {
    return s.trim()?isNaN(Number(s)):false;
};