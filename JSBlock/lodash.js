var _ = require('lodash');
// 对象嵌套
let dataFormat1 = {
  "number": 1,
  "last": true,
  "size": 20,
  "numberOfElements": 5,
  "totalPages": 1,
  "content": [
    {
      "student": {
        "id": 1186261414970368,
        "createdTime": "2022-03-25T07:47:37.000Z",
        "updatedTime": "2022-03-25T08:58:52.000Z",
        "createdBy": null,
        "updatedBy": null,
        "fakeXAxis": "数据1",
        "指标1": 90,
        "指标2": 70,
        "指标3": 80,
        "age": 0,
        "sex": "男",
        "averageScore": 80,
        "mentor": "王老师",
        "donation": 300
      }
    },
    {
      "student": {
        "id": 1186271644877824,
        "createdTime": "2022-03-25T08:28:16.000Z",
        "updatedTime": "2022-03-25T08:59:05.000Z",
        "createdBy": null,
        "updatedBy": null,
        "fakeXAxis": "数据2",
        "指标1": 75,
        "指标2": 100,
        "指标3": 85,
        "age": 20,
        "sex": "女",
        "averageScore": 95,
        "mentor": "张老师",
        "donation": 1000
      }
    },
    {
      "student": {
        "id": 1186279085573120,
        "createdTime": "2022-03-25T08:57:51.000Z",
        "updatedTime": "2022-03-25T08:57:51.000Z",
        "createdBy": null,
        "updatedBy": null,
        "fakeXAxis": "数据3",
        "指标1": 60,
        "指标2": 90,
        "指标3": 80,
        "age": 25,
        "sex": "女",
        "averageScore": 80,
        "mentor": "王老师",
        "donation": 1400
      }
    },
    {
      "student": {
        "id": 1186279186236416,
        "createdTime": "2022-03-25T08:58:15.000Z",
        "updatedTime": "2022-03-25T08:58:15.000Z",
        "createdBy": null,
        "updatedBy": null,
        "fakeXAxis": "数据4",
        "指标1": 55,
        "指标2": 75,
        "指标3": 67,
        "age": 23,
        "sex": "男",
        "averageScore": 65,
        "mentor": "王老师",
        "donation": 4000
      }
    },
    {
      "student": {
        "id": 1186279312065536,
        "createdTime": "2022-03-25T08:58:45.000Z",
        "updatedTime": "2022-03-25T08:58:45.000Z",
        "createdBy": null,
        "updatedBy": null,
        "fakeXAxis": "数据5",
        "指标1": 88,
        "指标2": 65,
        "指标3": 82,
        "age": 22,
        "sex": "男",
        "averageScore": 75,
        "mentor": "张老师",
        "donation": 2700
      }
    }
  ],
  "first": true,
  "totalElements": 5,
  "empty": false
};
// 对象不嵌套
let dataFormat2 = {
  "number": 1,
  "last": true,
  "size": 20,
  "numberOfElements": 5,
  "totalPages": 1,
  "content": [
    {
      "id": 1186261414970368,
      "createdTime": "2022-03-25T07:47:37.000Z",
      "updatedTime": "2022-03-25T08:58:52.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据1",
      "指标1": 90,
      "指标2": 70,
      "指标3": 80,
      "age": 18,
      "sex": "男",
      "averageScore": 80,
      "mentor": "王老师",
      "donation": 300
    },
    {
      "id": 1186271644877824,
      "createdTime": "2022-03-25T08:28:16.000Z",
      "updatedTime": "2022-03-25T08:59:05.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据2",
      "指标1": 75,
      "指标2": 100,
      "指标3": 85,
      "age": 20,
      "sex": "女",
      "averageScore": 95,
      "mentor": "张老师",
      "donation": 1000
    },
    {
      "id": 1186279085573120,
      "createdTime": "2022-03-25T08:57:51.000Z",
      "updatedTime": "2022-03-25T08:57:51.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据3",
      "指标1": 60,
      "指标2": 90,
      "指标3": 80,
      "age": 25,
      "sex": "女",
      "averageScore": 80,
      "mentor": "王老师",
      "donation": 1400
    },
    {
      "id": 1186279186236416,
      "createdTime": "2022-03-25T08:58:15.000Z",
      "updatedTime": "2022-03-25T08:58:15.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据4",
      "指标1": 55,
      "指标2": 75,
      "指标3": 67,
      "age": 23,
      "sex": "男",
      "averageScore": 65,
      "mentor": "王老师",
      "donation": 4000
    },
    {
      "id": 1186279312065536,
      "createdTime": "2022-03-25T08:58:45.000Z",
      "updatedTime": "2022-03-25T08:58:45.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据5",
      "指标1": 88,
      "指标2": 65,
      "指标3": 82,
      "age": 22,
      "sex": "男",
      "averageScore": 75,
      "mentor": "张老师",
      "donation": 2700
    }
  ],
  "first": true,
  "totalElements": 5,
  "empty": false
};
// 列表嵌套
let dataFormat3 = [
  {
    "student": {
      "id": 1186261414970368,
      "createdTime": "2022-03-25T07:47:37.000Z",
      "updatedTime": "2022-03-25T08:58:52.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据1",
      "指标1": 90,
      "指标2": 70,
      "指标3": 80,
      "age": 18,
      "sex": "男",
      "averageScore": 80,
      "mentor": "王老师",
      "donation": 300
    }
  },
  {
    "student": {
      "id": 1186271644877824,
      "createdTime": "2022-03-25T08:28:16.000Z",
      "updatedTime": "2022-03-25T08:59:05.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据2",
      "指标1": 75,
      "指标2": 100,
      "指标3": 85,
      "age": 20,
      "sex": "女",
      "averageScore": 95,
      "mentor": "张老师",
      "donation": 1000
    }
  },
  {
    "student": {
      "id": 1186279085573120,
      "createdTime": "2022-03-25T08:57:51.000Z",
      "updatedTime": "2022-03-25T08:57:51.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据3",
      "指标1": 60,
      "指标2": 90,
      "指标3": 80,
      "age": 25,
      "sex": "女",
      "averageScore": 80,
      "mentor": "王老师",
      "donation": 1400
    }
  },
  {
    "student": {
      "id": 1186279186236416,
      "createdTime": "2022-03-25T08:58:15.000Z",
      "updatedTime": "2022-03-25T08:58:15.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据4",
      "指标1": 55,
      "指标2": 75,
      "指标3": 67,
      "age": 23,
      "sex": "男",
      "averageScore": 65,
      "mentor": "王老师",
      "donation": 4000
    }
  },
  {
    "student": {
      "id": 1186279312065536,
      "createdTime": "2022-03-25T08:58:45.000Z",
      "updatedTime": "2022-03-25T08:58:45.000Z",
      "createdBy": null,
      "updatedBy": null,
      "fakeXAxis": "数据5",
      "指标1": 88,
      "指标2": 65,
      "指标3": 82,
      "age": 22,
      "sex": "男",
      "averageScore": 75,
      "mentor": "张老师",
      "donation": 2700
    }
  }
];
// 列表不嵌套
let dataFormat4 = [
  {
    "id": 1186261414970368,
    "createdTime": "2022-03-25T07:47:37.000Z",
    "updatedTime": "2022-03-25T08:58:52.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据1",
    "指标1": 0,
    "指标2": 70,
    "指标3": 80,
    "age": 18,
    "sex": "男",
    "averageScore": 80,
    "mentor": "王老师",
    "donation": 300
  },
  {
    "id": 1186271644877824,
    "createdTime": "2022-03-25T08:28:16.000Z",
    "updatedTime": "2022-03-25T08:59:05.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据2",
    "指标1": 75,
    "指标2": 100,
    "指标3": 85,
    "age": '0',
    "sex": "女",
    "averageScore": 95,
    "mentor": "张老师",
    "donation": 1000
  },
  {
    "id": 1186279085573120,
    "createdTime": "2022-03-25T08:57:51.000Z",
    "updatedTime": "2022-03-25T08:57:51.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据3",
    "指标1": 60,
    "指标2": 90,
    "指标3": 80,
    "age": 25,
    "sex": "女",
    "averageScore": 80,
    "mentor": "王老师",
    "donation": 1400
  },
  {
    "id": 1186279186236416,
    "createdTime": "2022-03-25T08:58:15.000Z",
    "updatedTime": "2022-03-25T08:58:15.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据4",
    "指标1": 55,
    "指标2": 75,
    "指标3": 67,
    "age": 23,
    "sex": "男",
    "averageScore": 65,
    "mentor": "王老师",
    "donation": 4000
  },
  {
    "id": 1186279312065536,
    "createdTime": "2022-03-25T08:58:45.000Z",
    "updatedTime": "2022-03-25T08:58:45.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据5",
    "指标1": 88,
    "指标2": 65,
    "指标3": 82,
    "age": 22,
    "sex": "男",
    "averageScore": 75,
    "mentor": "张老师",
    "donation": 2700
  }
];

let dataFormat5 = [{'studentForReport': {'id': 1, 'name': '黄雨晴', 'age': 18, 'score': 80, 'classroom': '1班', 'teacher': '李老师'}},
  {'studentForReport': {'id': 2, 'name': '赵慧莉', 'age': 17, 'score': 100, 'classroom': '1班', 'teacher': '王老师'}}];
let content = {
  "student": {
    "id": 1186261414970368,
    "createdTime": "2022-03-25T07:47:37.000Z",
    "updatedTime": "2022-03-25T08:58:52.000Z",
    "createdBy": null,
    "updatedBy": null,
    "fakeXAxis": "数据1",
    "指标1": 90,
    "指标2": 70,
    "指标3": 80,
    "age": 18,
    "sex": "男",
    "averageScore": 80,
    "mentor": "王老师",
    "donation": 300
  }
};

// let id = _.pick(dataFormat1, 'number');


function recurGetVal(obj, val) {
  if (!obj) return;
  if (obj.hasOwnProperty(val)) {
    return obj[val];
  }
  for (let item in obj) {
    if (Object.prototype.toString.call(obj[item]) === '[object Object]') {
      return recurGetVal(obj[item], val);
    }
  }
}


function getAxisData(data, axis) {
  // 无数据，数据类型非对象递归终止
  if (!data || !data instanceof Object) return [];
  const res = [];
  if (Array.isArray(data)) {
    for (let item of data) {
      let axisData = recurGetVal(item, axis);
      console.log('axis', axisData);
      if (axisData || axisData === 0) {
        res.push(recurGetVal(item, axis));
      }
    }
  } else {
    for (let item in data) {
      res.push(...getAxisData(data[item], axis))
    }
  }
  return res;
};

// function getAxisData(data, axis) {
//   // 无数据，数据类型非对象递归终止
//   const res = [];
//   if (!data || !data instanceof Object) return res;
//   if (Array.isArray(data)) {
//     for (let item of data) {
//       let axisData = recurGetVal(item, axis);
//       if (axisData) {
//         res.push(axisData);
//       }
//     }
//   } else {
//     for (let item in data) {
//       res.push(...getAxisData(data[item], axis))
//     }
//   }
//   return res
// };

const res1 = getAxisData(dataFormat1, 'age');
const res2 = getAxisData(dataFormat2, 'age');
const res3 = getAxisData(dataFormat3, 'age');
const res4 = getAxisData(dataFormat4, 'age');
const res5 = getAxisData(dataFormat5, 'age');
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);


