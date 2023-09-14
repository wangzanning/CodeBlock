/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    //check the boundary
    if (!grid.length) return 0;
    const row = grid.length;
    const col = grid[0].length;
    let output = 0;

    function dfs(grid, i, j) {
        //    stop the loop when exceed the boundary
        if (i < 0 || j < 0 || i >= row || j >= col) return;
        if (grid[i][j] !== '1') return;

        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                output++;
                dfs(grid, i, j);
            }
        }
    }
    console.log(output);
    return output;

};

numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
])