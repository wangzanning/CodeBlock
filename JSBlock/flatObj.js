let temp = [
    {
        "entity1": {
            "id": 2618550492176128,
            "createdTime": "2023-05-25T11:42:53.000Z",
            "updatedTime": "2023-05-25T11:42:53.000Z",
            "createdBy": null,
            "updatedBy": null,
            "name": "wang",
            "age": 111
        }
    },
    {
        "entity1": {
            "id": 2618550492176128,
            "createdTime": "2023-05-25T11:42:53.000Z",
            "updatedTime": "2023-05-25T11:42:53.000Z",
            "createdBy": null,
            "updatedBy": null,
            "name": "wang",
            "age": 111
        }
    }
]

let res = [
    {
        "id": 2618550492176128,
        "createdTime": "2023-05-25T11:42:53.000Z",
        "updatedTime": "2023-05-25T11:42:53.000Z",
        "createdBy": null,
        "updatedBy": null,
        "name": "wang",
        "age": 111
    },
    {
        "id": 2618550492176128,
        "createdTime": "2023-05-25T11:42:53.000Z",
        "updatedTime": "2023-05-25T11:42:53.000Z",
        "createdBy": null,
        "updatedBy": null,
        "name": "wang",
        "age": 111
    },
]
// console.log(Object.keys(temp[0]));
// console.log(Object.keys(res[0]));

// temp -> res

let nameField = '';

function extractEntityName(field) {
    if (field.indexOf('.') !== -1) {
        return field.split('.')[0];
    } else {
        return ''
    }
}

console.log(extractEntityName(nameField));

function flatObj(obj, entity) {
    let res = [];
    for (let i = 0; i < obj.length; i++) {
        res.push(obj[i][entity])
    }
    return res;
}

function changeObjKey(obj, oldKey, newKey) {
    if (obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
}

function extractEntityField(string) {
    if (string.indexOf('.') !== -1) {
        const len = string.split('.').length;
        return string.split('.')[len - 1];
    } else {
        return string
    }
}

console.log(extractEntityField('entity1.ttt'));
// res.map(item => {
//     changeObjKey(item, 'name', 'username111');
//     changeObjKey(item, 'age', 'userage');
// })

// console.log(res);
// console.log(flatObj(temp, 'entity1'));

setTimeout(function () {
    try {
        if (parent.refreshBill != undefined) {
            parent.refreshBill();
        } else {
            try {
                window.parent.postMessage({msg: "refreshPage"}, '*');//VUE监听
                if (parent.refreshBill != undefined) {
                    parent.refreshBill();
                }
            } catch (error) {
            }
            document.location.reload();
        }
    } catch (e) {
        try {
            window.parent.postMessage({msg: "refreshPage"}, '*');//VUE监听
            if (parent.refreshBill != undefined) {
                parent.refreshBill();
            }
        } catch (error) {
        }
        document.location.reload();
    }
}, 500);


    window.refreshBill = function () {
        console.log('message from iframe')
    }
