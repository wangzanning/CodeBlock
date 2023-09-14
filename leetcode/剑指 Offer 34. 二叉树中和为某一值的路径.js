/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    let res = [];
    function recur(root,sum,list){
        if(root.val === sum && !root.left && ! root.right){
            res.push(list);
        }
        list.push(root.val);
        if(root.left) recur(root.left,sum - root.val,list.slice());
        if(root.right) recur(root.right, sum-root.val, list.slice());
    }
    recur(root,sum, []);
    return res;

};

var pathSum = function(root, sum) {
    var result = [], stack = [] //成功的stack才会push进result
    dfs(root,sum)
    return result
    function dfs(root,sum){
        if(!root){
            return
        }
        sum -= root.val      //sum每走一个都减去当前值，如果最后sum = 0则为成功的路径，避免了数组求和
        stack.push(root.val)
        //如果当前节点是成功的叶子节点
        if(root.left == null && root.right == null && sum == 0){
            result.push([...stack])
        }
        dfs(root.left,sum)
        dfs(root.right,sum)
        //先弹栈，再往回走
        stack.pop()
    }
};
