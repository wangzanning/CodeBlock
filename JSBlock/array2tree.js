let test = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 2
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]
function array2tree(array) {
    let map = {};
    array.forEach(item => {
        map[item.id] = item
    })
    let tree = [];
    array.forEach(item => {
        let parent = map[item.parentId];
        if (parent) {
            (parent.children || (parent.children = [])).push(item)
        } else {
            tree.push(item)
        }
    })
    return tree

}
console.log(array2tree(test)[0].children[1]);
