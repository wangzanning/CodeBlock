import lodash from 'lodash';
var _ = require('lodash');
const data = [
  {
    "lCAPRole": {
      "id": 1251898191512580,
      "createdTime": "2022-09-22T10:44:44.000Z",
      "updatedTime": null,
      "createdBy": null,
      "updatedBy": null,
      "uuid": "778cd6dabc3440e4a81346d771293b5b",
      "name": "DEV-AdminRole",
      "description": null,
      "roleStatus": false,
      "editable": false
    }
  },
  {
    "lCAPRole": {
      "id": 2445120334390528,
      "createdTime": "2022-09-22T10:58:19.000Z",
      "updatedTime": "2022-09-22T10:58:19.000Z",
      "createdBy": null,
      "updatedBy": null,
      "uuid": null,
      "name": "test",
      "description": null,
      "roleStatus": true,
      "editable": true
    }
  }
]

console.log(JSON.parse(data));

const data2 = [{
  'lCAPRole': {
    'id': 1251898191512580,
    'createdTime': '2022-09-22T10:44:44.000Z',
    'updatedTime': null,
    'createdBy': null,
    'updatedBy': null,
    'uuid': '778cd6dabc3440e4a81346d771293b5b',
    'name': 'DEV-AdminRole',
    'description': null,
    'roleStatus': false,
    'editable': false,
    'children': [{
      'lCAPRole': {
        'id': 1251898191512581,
        'createdTime': '2022-09-22T10:44:44.000Z',
        'updatedTime': null,
        'createdBy': null,
        'updatedBy': null,
        'uuid': '778cd6dabc3440e4a81346d771293b5b',
        'name': 'DEV-AdminRole',
        'description': null,
        'roleStatus': false,
        'editable': false,
        'children': []
      }
    }, {
      'lCAPRole': {
        'id': 24451203343232328,
        'createdTime': '2022-09-22T10:58:19.000Z',
        'updatedTime': '2022-09-22T10:58:19.000Z',
        'createdBy': null,
        'updatedBy': null,
        'uuid': null,
        'name': 'test',
        'description': null,
        'roleStatus': true,
        'editable': true,
        children: [],
      }
    }]
  }
}, {
  'lCAPRole': {
    'id': 2445120334390528,
    'createdTime': '2022-09-22T10:58:19.000Z',
    'updatedTime': '2022-09-22T10:58:19.000Z',
    'createdBy': null,
    'updatedBy': null,
    'uuid': null,
    'name': 'test',
    'description': null,
    'roleStatus': true,
    'editable': true,
    children: [],
  }
}]

const data3 = [
  {
    "data": {
      "id": 1,
      "deptname": "一级部门a",
      "parentid": 1,
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
]

function list2tree(list, idField, pField) {
  list.forEach(child => {
    const pid = _.at(child, pField);
    if(pid) {
      list.forEach(parent => {
        if(_.at(parent, idField) === pid) {
          this.$setAt(parent, this.childrenField, this.$at(parent, this.childrenField) || [])
          this.$at(parent, this.childrenField).push(child)
        }
      })
    }
  })
  return list.filter(n => !this.$at(n, pField))
},
