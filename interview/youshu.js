let data = [
  {
    "concept": "View",
    "changedTime": 1664523734574,
    "name": "t11",
    "title": "",
    "crumb": null,
    "auth": false,
    "script": "",
    "elements": [
      {
        "concept": "ViewElement",
        "name": "lRoot1",
        "type": 0,
        "tag": "l-root",
        "staticClass": null,
        "staticStyle": null,
        "slotTarget": null,
        "slotScope": null,
        "bindAttrs": [],
        "bindEvents": [],
        "bindDirectives": [],
        "bindRoles": [],
        "children": [
          {
            "concept": "ViewElement",
            "name": "uRouterView1",
            "type": 0,
            "tag": "u-router-view",
            "staticClass": null,
            "staticStyle": null,
            "slotTarget": null,
            "slotScope": null,
            "bindAttrs": [],
            "bindEvents": [],
            "bindDirectives": [],
            "bindRoles": [],
            "children": []
          }
        ]
      }
    ],
    "params": [],
    "variables": [],
    "logics": [],
    "bindEvents": [],
    "bindRoles": [],
    "children": [
      {
        "concept": "View",
        "changedTime": 1664523742552,
        "name": "t22",
        "title": "",
        "crumb": null,
        "auth": false,
        "script": "",
        "elements": [
          {
            "concept": "ViewElement",
            "name": "lRoot1",
            "type": 0,
            "tag": "l-root",
            "staticClass": null,
            "staticStyle": null,
            "slotTarget": null,
            "slotScope": null,
            "bindAttrs": [],
            "bindEvents": [],
            "bindDirectives": [],
            "bindRoles": [],
            "children": [
              {
                "concept": "ViewElement",
                "name": "uRouterView1",
                "type": 0,
                "tag": "u-router-view",
                "staticClass": null,
                "staticStyle": null,
                "slotTarget": null,
                "slotScope": null,
                "bindAttrs": [],
                "bindEvents": [],
                "bindDirectives": [],
                "bindRoles": [],
                "children": []
              }
            ]
          }
        ],
        "params": [],
        "variables": [],
        "logics": [],
        "bindEvents": [],
        "bindRoles": [],
        "children": []
      }
    ]
  },
  {
    "concept": "View",
    "changedTime": 1664522535925,
    "name": "t1",
    "title": "",
    "crumb": null,
    "auth": false,
    "script": "",
    "elements": [
      {
        "concept": "ViewElement",
        "name": "lRoot1",
        "type": 0,
        "tag": "l-root",
        "staticClass": null,
        "staticStyle": null,
        "slotTarget": null,
        "slotScope": null,
        "bindAttrs": [],
        "bindEvents": [],
        "bindDirectives": [],
        "bindRoles": [],
        "children": [
          {
            "concept": "ViewElement",
            "name": "uRouterView1",
            "type": 0,
            "tag": "u-router-view",
            "staticClass": null,
            "staticStyle": null,
            "slotTarget": null,
            "slotScope": null,
            "bindAttrs": [],
            "bindEvents": [],
            "bindDirectives": [],
            "bindRoles": [],
            "children": []
          }
        ]
      }
    ],
    "params": [],
    "variables": [],
    "logics": [],
    "bindEvents": [],
    "bindRoles": [],
    "children": [
      {
        "concept": "View",
        "changedTime": 1664522541785,
        "name": "t2",
        "title": "",
        "crumb": null,
        "auth": false,
        "script": "",
        "elements": [
          {
            "concept": "ViewElement",
            "name": "lRoot1",
            "type": 0,
            "tag": "l-root",
            "staticClass": null,
            "staticStyle": null,
            "slotTarget": null,
            "slotScope": null,
            "bindAttrs": [],
            "bindEvents": [],
            "bindDirectives": [],
            "bindRoles": [],
            "children": [
              {
                "concept": "ViewElement",
                "name": "uRouterView1",
                "type": 0,
                "tag": "u-router-view",
                "staticClass": null,
                "staticStyle": null,
                "slotTarget": null,
                "slotScope": null,
                "bindAttrs": [],
                "bindEvents": [],
                "bindDirectives": [],
                "bindRoles": [],
                "children": []
              }
            ]
          }
        ],
        "params": [],
        "variables": [],
        "logics": [],
        "bindEvents": [],
        "bindRoles": [],
        "children": []
      }
    ]
  }
];

function getAuth(data) {
  if (!data) return
  let res = {};
  if( data.children.length === 0) {
    res.name = data.name;
    res.auth = data.auth;
    res.children = [];
  } else {
    res.name = data.name;
    res.auth = data.auth;
    res.children = [];
    data.children.forEach(item => {
      res.children.push(getAuth(item));
    })
  }
  return res;
}
const res = [];
data.forEach(item => {
  res.push(getAuth(item));
});


let temp = getAuth(data[0]);
console.log(temp);
console.log(res);
