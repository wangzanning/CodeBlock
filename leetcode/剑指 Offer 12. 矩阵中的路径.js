/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    function recur(x, y, k) {
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== word[k]) return false;
        if (word.length - 1 === k) return true;
        board[x][y] = '';
        let res = recur(x + 1, y, k + 1) || recur(x - 1, y, k + 1) || recur(x, y + 1, k + 1) || recur(x, y - 1, k + 1);
        board[x][y] = word[k];
        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (recur(i, j, 0)) return true
        }
    }
    return false;

};