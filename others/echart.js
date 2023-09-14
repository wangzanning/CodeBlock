const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

const data = [
  {
    "student": {
      "id": 1186261414970368,
      "createdTime": "2022-03-25T07:47:37.000Z",
      "updatedTime": "2022-03-25T08:58:52.000Z",
      "createdBy": null,
      "updatedBy": null,
      "studentName": "张同学",
      "age": 18,
      "sex": "男",
      "averageScore": 80,
      "mentor": "王老师"
    }
  },
  {
    "student": {
      "id": 1186271644877824,
      "createdTime": "2022-03-25T08:28:16.000Z",
      "updatedTime": "2022-03-25T08:59:05.000Z",
      "createdBy": null,
      "updatedBy": null,
      "studentName": "李同学",
      "age": 20,
      "sex": "女",
      "averageScore": 95,
      "mentor": "本杰老师"
    }
  },
  {
    "student": {
      "id": 1186279085573120,
      "createdTime": "2022-03-25T08:57:51.000Z",
      "updatedTime": "2022-03-25T08:57:51.000Z",
      "createdBy": null,
      "updatedBy": null,
      "studentName": "郑同学",
      "age": 25,
      "sex": "女",
      "averageScore": 100,
      "mentor": "王老师"
    }
  },
  {
    "student": {
      "id": 1186279186236416,
      "createdTime": "2022-03-25T08:58:15.000Z",
      "updatedTime": "2022-03-25T08:58:15.000Z",
      "createdBy": null,
      "updatedBy": null,
      "studentName": "李同学",
      "age": 23,
      "sex": "男",
      "averageScore": 65,
      "mentor": "王老师"
    }
  },
  {
    "student": {
      "id": 1186279312065536,
      "createdTime": "2022-03-25T08:58:45.000Z",
      "updatedTime": "2022-03-25T08:58:45.000Z",
      "createdBy": null,
      "updatedBy": null,
      "studentName": "赵同学",
      "age": 22,
      "sex": "男",
      "averageScore": 75,
      "mentor": "本杰老师"
    }
  }
];
function processData(content){
  const key = Object.keys(content[0])[0];
  const attrDict = {};
  for (let item of content) {
    const tempAttr = item[key];
    delete tempAttr.id && delete tempAttr.createdTime && delete tempAttr.updatedTime && delete tempAttr.createdBy && delete tempAttr.updatedBy
    for (let attr in tempAttr) {
      if (!attrDict[attr]) attrDict[attr] = [];
      tempAttr[attr] ? attrDict[attr].push(tempAttr[attr]) : attrDict[attr].push('');
    }
  }
  console.log(attrDict);
  const attrList = Object.keys(attrDict);
  // console.log(attrList);
  // x轴必须是非数字类型， y轴必须是数字类型
  const xAxisList = [], yAxisList = [];
  for (let attr of attrList) {
    typeof (attrDict[attr][0]) === 'string' ? xAxisList.push(attr) : yAxisList.push(attr);
  }
  const xAxis = xAxisList.length > 0 ? xAxisList[0] : '';
  const yAxis = yAxisList.length > 0 ? yAxisList[0] : '';
  console.log('x',xAxis);

  return content;
}

const newData =processData(data);
// console.log(newData);
