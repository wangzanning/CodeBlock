/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let res = new Set();
    let visit = {};

    function dfs(path) {
        if (path.length === s.length) return res.add(path);
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue;
            visit[i] = true;
            dfs(path + s[i]);
            visit[i] = false;
        }
    }

    dfs('');
    return Array.from(res);
};

permutation("abc");