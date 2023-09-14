let data = [
  {id: 1, name: 'a', pid: 0},
  {id: 2, name: 'b', pid: 1},
  {id: 3, name: 'c', pid: 11},
  {id: 4, name: 'd', pid: 12},
  {id: 5, name: 'e', pid: 2},
  {id: 6, name: 'f', pid: 3},
];

let data2 = [
  {
    "data": {
      "id": 1,
      "deptname": "一级部门a",
      "parentid": 10,
      "name": "小明"
    }
  },
  {
    "data": {
      "id": 2,
      "deptname": "一级部门b",
      "parentid": 11,
      "name": "xiaoming"
    }
  },
  {
    "data": {
      "id": 3,
      "deptname": "二级部门a",
      "parentid": 1,
      "name": "小明2"
    }
  },
  {
    "data": {
      "id": 4,
      "deptname": "三级部门a",
      "parentid": 3,
      "name": "小明3"
    }
  }
];

const translateDataToTree = (
  data,
  parentValue = undefined,
  parentKey,
  itemKey,
) => {
  const tree = [];
  let temp;
  data.forEach((item) => {
    if (item[parentKey] === parentValue) {
      temp = translateDataToTree(data, item[itemKey], parentKey, itemKey);
      if (temp.length > 0) {
        item.children = temp;
      }
      tree.push(item);
    }
  });
  return tree;
};

function list2tree1(list, idField, pField) {
  list.forEach(child => {
    const pid = child[pField];
    if (pid) {
      list.forEach(parent => {
        if (parent[idField] === pid) {
          parent.children = parent.children || []
          parent.children.push(child)
        }
      })
    }
  })
  return list
}

function list2tree(list, idField, pField) {
  const [map, treeData] = [{}, []];
  for (let i = 0; i < list.length; i += 1) {
    map[list[i][idField]] = i;
    list[i].children = [];
  }

  for (let i = 0; i < list.length; i += 1) {
    const node = list[i];
    if (node[pField] && list[map[node[pField]]]) {
      list[map[node[pField]]].children.push(node);
    } else {
      treeData.push(node);
    }
  }
  return treeData;
}


// console.log(list2tree(data));
// console.log(list2tree1(data2, 'data.id', 'data.parentid'));
// console.log(list2tree1(data, 'id', 'pid'));
console.log(list2tree(data, 'id', 'pid'));
