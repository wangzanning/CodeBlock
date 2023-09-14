/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let copy = this.stack.concat()
    return copy.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    let min = Number.MAX_VALUE;
    for (let i of this.stack) {
        if (i < min) min = i;
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */