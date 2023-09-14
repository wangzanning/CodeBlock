const data = [
    {
        'databaseName': 'oracle',
        'databaseLabel': 'Oracle',
        'configList': [{
            'inputType': 'text',
            'name': '连接模式',
            'optionKey': 'driverType',
            'placeHolder': '请选择数据库连接模式',
            'checkRule': '',
            'bind': {},
            'selectOptions': [{
                'value': 'sid',
                'name': 'sid',
            },
                {
                    'value': 'serviceName',
                    'name': 'serviceName',
                },
            ],
        },
            {
                'inputType': 'text',
                'name': 'Sid',
                'optionKey': 'database',
                'placeHolder': 'Sid',
                'checkRule': '',
                'bind': {
                    'key': 'connectModel',
                    'value': 'sid',
                },
            },
            {
                'inputType': 'text',
                'name': 'ServiceName',
                'optionKey': 'database',
                'placeHolder': 'ServiceName',
                'checkRule': '',
                'bind': {
                    'key': 'connectModel',
                    'value': 'serviceName',
                },
            },
        ],
    },
    {
        'databaseName': 'db2',
        'databaseLabel': 'Db2',
        'configList': [
            {
                'inputType': 'text',
                'name': '数据库名称',
                'optionKey': 'database',
                'placeHolder': '数据库名称',
                'bind': {},
                'checkRule': '',
            }, {
                'inputType': 'text',
                'name': '模式名',
                'optionKey': 'schemaName',
                'placeHolder': '模式名',
                'bind': {},
                'checkRule': '',
            },
        ],
    },
    {
        'databaseName': 'mysql',
        'databaseLabel': 'MySQL',
        'configList': [{
            'inputType': 'text',
            'name': '数据库名称',
            'optionKey': 'database',
            'placeHolder': '数据库名称',
            'checkRule': '',
            'bind': {},
        }],
    },
    {
        "databaseName": "mysql",
        "databaseLabel": "MySQL",
        "configList": [{
            "inputType": "text",
            "name": "数据库名称",
            "optionKey": "database",
            "placeHolder": "数据库名称",
            "checkRule": "",
            "bind": {}
        }]
    }
];


function extractOptionKey(data) {
    let result = {};
    data.forEach((item) => {
        item.configList.forEach((config) => {
            result[config.optionKey] = config.name;
        })
    })
    return result;
}

console.log(extractOptionKey(data));

// GET方法，地址根据系统生成的，不需要其他额外的请求参数
// 接口可能存在跨域的问题，需要后端帮忙转发一下
// 返还报文内容，可以嵌套在其他字段下，只要返还结果的格式一样即可
let docCenterLink = [{
    "id": 'u-button',
    "description": '按钮', // 文案内容
    "link": 'http://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/04.%E5%B1%95%E7%A4%BA/061.%E6%8C%89%E9%92%AE.html#%E6%A6%82%E5%BF%B5%E8%AF%B4%E6%98%8E'
}, {
    "id": 'u-input',
    "description": '输入框',
    "link": 'http://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/04.%E5%B1%95%E7%A4%BA/062.%E8%BE%93%E5%85%A5%E6%A1%86.html#%E6%A6%82%E5%BF%B5%E8%AF%B4%E6%98%8E'
}]


// function to sum list
function sum(list) {
    return list.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

}


window.addEventListener("message", receiveMessage, false);
function receiveMessage(event){
    console.log('message from iframe')
}
