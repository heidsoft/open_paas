define({ "api": [
  {
    "type": "get",
    "url": "/api/c/compapi/bk_login/get_all_user/",
    "title": "get_all_user",
    "name": "get_all_user",
    "group": "API_BK_LOGIN",
    "version": "1.0.0",
    "description": "<p>获取所有用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"用户信息获取成功\",\n    \"data\": [\n        {\n            \"username\": \"admin\",\n            \"qq\": \"12345\",\n            \"phone\": \"12345678911\",\n            \"role\": \"1\",\n            \"email\": \"11@qq.com\",\n            \"chname\": \"管理员\"\n        },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/bk_login/apidoc/get_all_user.js",
    "groupTitle": "API_BK_LOGIN"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/bk_login/get_batch_user/",
    "title": "get_batch_user",
    "name": "get_batch_user",
    "group": "API_BK_LOGIN",
    "version": "1.0.0",
    "description": "<p>获取多个用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username_list",
            "description": "<p>待获取信息的用户名列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"username_list\": \"admin;test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"用户信息获取成功\",\n    \"data\": {\n        \"admin\": {\n            \"username\": \"admin\",\n            \"qq\": \"123123\",\n            \"phone\": \"11111111111\",\n            \"role\": \"1\",\n            \"email\": \"11@qq.com\",\n            \"chname\": \"admin\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/bk_login/apidoc/get_batch_user.js",
    "groupTitle": "API_BK_LOGIN"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/bk_login/get_user/",
    "title": "get_user",
    "name": "get_user",
    "group": "API_BK_LOGIN",
    "version": "1.0.0",
    "description": "<p>获取用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"用户信息获取成功\",\n    \"data\": {\n        \"username\": \"admin\",\n        \"qq\": \"12345\",\n        \"phone\": \"12345678911\",\n        \"role\": \"1\",\n        \"email\": \"11@qq.com\",\n        \"chname\": \"管理员\"\n    },\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据，成功返回请求数据</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>用户角色，1表示管理员，0表示普通用户</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/bk_login/apidoc/get_user.js",
    "groupTitle": "API_BK_LOGIN"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cc/add_plat_id/",
    "title": "add_plat_id",
    "name": "add_plat_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>新增子网ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plat_name",
            "description": "<p>子网名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"plat_name\": \"test_plat\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": 2,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>包含True和False，其中True表示成功，False表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回错误码，其中&quot;00&quot;表示成功，其它表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据，成功返回请求数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回错误消息</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/cc/apidoc/add_plat_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cc/del_plat/",
    "title": "del_plat",
    "name": "del_plat",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>删除子网</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"plat_id\": 1234,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/del_plat.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_app_agent_status/",
    "title": "get_app_agent_status",
    "name": "get_app_agent_status",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务下Agent状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 516\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"message\": \"\",\n    \"code\": \"00\",\n    \"data\": {\n        \"agentNorList\": [ ],\n        \"agentAbnorCnt\": 4,\n        \"agentNorCnt\": 0,\n        \"agentAbnorList\": [\n            {\n                \"Ip\": \"192.168.1.100\",\n                \"PlatId\": \"1\",\n                \"CompanyId\": 0\n            },\n            {\n                \"Ip\": \"192.168.1.101\",\n                \"PlatId\": \"1\",\n                \"CompanyId\": 0\n            },\n            {\n                \"Ip\": \"192.168.1.103\",\n                \"PlatId\": \"1\",\n                \"CompanyId\": 0\n            },\n            {\n                \"Ip\": \"192.116.1.111\",\n                \"PlatId\": \"1\",\n                \"CompanyId\": 0\n            }\n        ]\n    },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"50000\",\n    \"error\": {\n        \"error_data\": {\n            \"api_spec\": {\n            }\n        }\n    },\n    \"result\": false,\n    \"message\": \"没权利访问业务\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_app_agent_status.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_app_by_user/",
    "title": "get_app_by_user",
    "name": "get_app_by_user",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询用户有权限的业务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ApplicationName\": \"示例业务\",\n            \"GroupName\": \"\",\n            \"Description\": \"\",\n            \"BusinessDeptName\": \"\",\n            \"Creator\": \"admin\",\n            \"Default\": \"0\",\n            \"ApplicationID\": \"2\",\n            \"DeptName\": \"公司名称\",\n            \"Level\": \"3\",\n            \"LifeCycle\": \"公测\",\n            \"Source\": \"\",\n            \"Maintainers\": \"admin\",\n            \"CreateTime\": \"2016-08-10 20:43:38\",\n            \"CompanyID\": \"0\",\n            \"Owner\": \"公司名称\",\n            \"ProductPm\": \"admin\",\n            \"LastTime\": \"2016-08-10 20:43:38\",\n            \"Type\": \"0\",\n            \"Display\": \"1\"\n        }\n    ],\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Default",
            "description": "<p>为1表示系统默认创建业务</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"50000\",\n    \"error\": {\n        \"error_data\": {\n            \"api_spec\": {\n                \"msg\": \"only right to app\",\n                \"extmsg\": \"没权利访问业务\",\n                \"code\": \"0006\"\n            }\n        }\n    },\n    \"result\": false,\n    \"request_id\": \"bb8e27bbd86e4802ada9027e2d933cc1\",\n    \"message\": \"没权利访问业务\",\n    \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "dict",
            "optional": false,
            "field": "error",
            "description": "<p>错误详情，api_spec为配置平台接口的错误信息</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_app_by_user.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_app_by_user_role/",
    "title": "get_app_by_user_role",
    "name": "get_app_by_user_role",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据用户角色查询用户业务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_role",
            "description": "<p>用户角色，多个以逗号分隔，可选值为：Maintainers,ProductPm,Cooperation等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"user_role\": \"Maintainers,ProductPm\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"ProductPm\": [\n            {\n                \"ApplicationName\": \"蓝鲸\",\n                \"ApplicationID\": \"620\",\n                \"DeptName\": \"蓝鲸\",\n                \"Owner\": \"bk\"\n            }\n        ],\n        \"Maintainers\": [\n            {\n                \"ApplicationName\": \"蓝鲸\",\n                \"ApplicationID\": \"620\",\n                \"DeptName\": \"蓝鲸\",\n                \"Owner\": \"bk\"\n            }\n        ],\n        \"Cooperation\": []\n    },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_app_by_user_role.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_app_host_list/",
    "title": "get_app_host_list",
    "name": "get_app_host_list",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务主机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"Status\": \"\",\n            \"HardMemo\": \"\",\n            \"HostID\": \"70\",\n            \"BakOperator\": \"\",\n            \"SetName\": \"\",\n            \"AssetID\": \"eiwoew-sodfo-11\",\n            \"InnerIP\": \"10.24.5.5\",\n            \"Region\": \"eiwoew-s\",\n            \"HostName\": \"bb\",\n            \"IdcName\": \"\",\n            \"OSName\": \"\",\n            \"ModuleName\": \"空闲机\",\n            \"DeviceClass\": \"\",\n            \"ApplicationName\": \"资源池\",\n            \"OuterIP\": \"\",\n            \"Operator\": \"\",\n            \"SetID\": \"1\",\n            \"ApplicationID\": \"1\",\n            \"CreateTime\": \"2016-03-22 21:07:47\",\n            \"ModuleID\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_app_host_list.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_app_list/",
    "title": "get_app_list",
    "name": "get_app_list",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ApplicationName\": \"示例业务\",\n            \"Type\": \"0\",\n            \"Description\": \"\",\n            \"BusinessDeptName\": \"\",\n            \"Creator\": \"admin\",\n            \"Default\": \"0\",\n            \"ApplicationID\": \"2\",\n            \"Level\": \"3\",\n            \"Display\": \"1\",\n            \"Source\": \"\",\n            \"GroupName\": \"\",\n            \"Maintainers\": \"admin\",\n            \"CompanyID\": \"0\",\n            \"Owner\": \"公司名称\",\n            \"ProductPm\": \"admin\",\n            \"LifeCycle\": \"公测\",\n            \"LastTime\": \"2016-03-25 04:02:05\",\n            \"DeptName\": \"公司名称\",\n            \"CreateTime\": \"2016-03-18 13:08:19\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_app_list.js",
    "groupTitle": "API_CC"
  },
  {
    "name": "get_git_server_ip",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询公共业务的业务ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"50000\",\n    \"error\": {\n        \"error_data\": {\n            \"api_spec\": {\n            }\n        }\n    },\n    \"result\": false,\n    \"message\": \"没权利访问业务\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "filename": "esb/components/bk/apis/cc/get_git_server_ip.py",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_host_by_company_id/",
    "title": "get_host_by_company_id",
    "name": "get_host_by_company_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据开发商ID、子网ID、主机IP获取主机信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "company_id",
            "description": "<p>开发商ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>主机ip</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"company_id\": 0,\n    \"ip\": \"192.168.1.100\",\n    \"plat_id\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"ApplicationName\": \"示例业务\",\n        \"ModuleName\": \"示例模块\",\n        \"BakOperator\": \"admin\",\n        \"SetName\": \"示例集群\",\n        \"Operator\": \"admin\",\n        \"SetID\": \"3\",\n        \"ApplicationID\": \"2\",\n        \"ModuleID\": \"3\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_host_by_company_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_host_company_id/",
    "title": "get_host_company_id",
    "name": "get_host_company_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>获取主机开发商</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ips",
            "description": "<p>机内网IP，多个以逗号分隔</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"ips\": \"192.168.1.100,192.168.1.101\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"192.168.1.100\": {\n            \"102\": {\n                \"CompanyID\": \"0\",\n                \"AssetID\": \"\",\n                \"Region\": \"\",\n                \"Owner\": \"公司名称\",\n                \"PlatID\": \"1\",\n                \"ApplicationID\": \"2\"\n            }\n        },\n        \"192.168.1.101\": {\n            \"102\": {\n                \"CompanyID\": \"0\",\n                \"AssetID\": \"\",\n                \"Region\": \"\",\n                \"Owner\": \"公司名称\",\n                \"PlatID\": \"1\",\n                \"ApplicationID\": \"2\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_host_company_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_host_list_by_field/",
    "title": "get_host_list_by_field",
    "name": "get_host_list_by_field",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据主机属性的值group主机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>app标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "field",
            "description": "<p>主机属性字段</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"appId\": \"1\",\n    \"field\": \"OSName\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"\",\n    \"code\": \"00\",\n    \"data\": {\n      \"\": [\n        {\n          \"Source\": \"1\",\n          \"ApplicationID\": \"2\",\n          \"HostID\": \"66\",\n          \"InnerIP\": \"192.168.47.213\",\n          \"OSName\": \"\"\n        },\n        {\n          \"Source\": \"1\",\n          \"ApplicationID\": \"2\",\n          \"HostID\": \"67\",\n          \"InnerIP\": \"192.168.47.214\",\n          \"OSName\": \"\"\n        }\n      ]\n    },\n    \"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_host_list_by_field.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_host_list_by_ip/",
    "title": "get_host_list_by_ip",
    "name": "get_host_list_by_ip",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据IP查询主机信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>主机IP(内网IP或外网IP)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"ip\": \"10.24.5.5\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"Status\": \"\",\n            \"HardMemo\": \"\",\n            \"HostID\": \"70\",\n            \"BakOperator\": \"\",\n            \"SetName\": \"\",\n            \"AssetID\": \"eiwoew-sodfo-11\",\n            \"InnerIP\": \"10.24.5.5\",\n            \"Region\": \"eiwoew-s\",\n            \"HostName\": \"bb\",\n            \"IdcName\": \"\",\n            \"OSName\": \"\",\n            \"ModuleName\": \"空闲机\",\n            \"DeviceClass\": \"\",\n            \"ApplicationName\": \"资源池\",\n            \"OuterIP\": \"\",\n            \"Operator\": \"\",\n            \"SetID\": \"1\",\n            \"ApplicationID\": \"1\",\n            \"CreateTime\": \"2016-03-22 21:07:47\",\n            \"ModuleID\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_host_list_by_ip.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_hosts_by_property/",
    "title": "get_hosts_by_property",
    "name": "get_hosts_by_property",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据 set 属性查询主机</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_id",
            "description": "<p>大区ID，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_envi_type",
            "description": "<p>Set 环境类型，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_service_status",
            "description": "<p>Set 开放状态，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "module_name",
            "description": "<p>模块名称，多个以逗号分隔</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"set_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"OuterIP\": \"\",\n            \"HostID\": \"70\",\n            \"InnerIP\": \"10.24.5.5\",\n            \"Source\": \"3\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_hosts_by_property.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_ip_and_proxy_by_company/",
    "title": "get_ip_and_proxy_by_company",
    "name": "get_ip_and_proxy_by_company",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务下IP及ProxyIP</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>子网ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip_list",
            "description": "<p>内网IP列表，多个以逗号分隔</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"plat_id\": 1,\n    \"ip_list\": \"172.16.245.161,172.16.245.169\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"proxy_list\": [],\n        \"ip_list\": [\n            \"172.16.245.161\",\n            \"172.16.245.169\",\n        ],\n        \"invalid_ips\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_ip_and_proxy_by_company.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_module_host_list/",
    "title": "get_module_host_list",
    "name": "get_module_host_list",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询模块主机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "module_id",
            "description": "<p>模块ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"module_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ModuleName\": \"空闲机\",\n            \"IdcName\": \"\",\n            \"Source\": \"3\",\n            \"ApplicationID\": \"1\",\n            \"Status\": \"\",\n            \"HardMemo\": \"\",\n            \"Mem\": \"0\",\n            \"HostName\": \"bb\",\n            \"DeviceClass\": \"\",\n            \"SetID\": \"1\",\n            \"ApplicationName\": \"资源池\",\n            \"HostID\": \"70\",\n            \"BakOperator\": \"\",\n            \"OuterIP\": \"\",\n            \"Region\": \"eiwoew-s\",\n            \"ModuleID\": \"1\",\n            \"SetName\": \"\",\n            \"AssetID\": \"eiwoew-sodfo-11\",\n            \"OSName\": \"\",\n            \"Operator\": \"\",\n            \"InnerIP\": \"10.24.5.5\",\n            \"CreateTime\": \"2016-03-22 21:07:47\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_module_host_list.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_modules/",
    "title": "get_modules",
    "name": "get_modules",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务下的所有模块</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        \"空闲机\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_modules.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_modules_by_property/",
    "title": "get_modules_by_property",
    "name": "get_modules_by_property",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据 set 属性查询模块</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_id",
            "description": "<p>大区ID，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_service_type",
            "description": "<p>Set 环境类型，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_service_status",
            "description": "<p>Set 开放状态，多个以逗号分隔</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"set_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        \"空闲机\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_modules_by_property.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_plat_id/",
    "title": "get_plat_id",
    "name": "get_plat_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询子网列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"platId\": \"1\",\n            \"platCompany\": \"0\",\n            \"platName\": \"esb_test\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_plat_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_property_list/",
    "title": "get_property_list",
    "name": "get_property_list",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询属性列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "type",
            "description": "<p>属性类型，包含1:业务，2:集群，3:模块，4:主机</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"type\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"standard\": {\n                \"HostID\": \"主机ID\",\n                \"OuterIP\": \"外网IP\",\n                \"InnerIP\": \"内网IP\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_property_list.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_set_host_list/",
    "title": "get_set_host_list",
    "name": "get_set_host_list",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询Set主机列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "set_id",
            "description": "<p>SetID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\",\n    \"set_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"Status\": \"\",\n            \"HardMemo\": \"\",\n            \"HostID\": \"70\",\n            \"BakOperator\": \"\",\n            \"SetName\": \"\",\n            \"AssetID\": \"eiwoew-sodfo-11\",\n            \"InnerIP\": \"10.24.5.5\",\n            \"Region\": \"eiwoew-s\",\n            \"HostName\": \"bb\",\n            \"IdcName\": \"\",\n            \"OSName\": \"\",\n            \"Mem\": \"0\",\n            \"ModuleName\": \"空闲机\",\n            \"DeviceClass\": \"\",\n            \"ApplicationName\": \"资源池\",\n            \"OuterIP\": \"\",\n            \"Operator\": \"\",\n            \"SetID\": \"1\",\n            \"ApplicationID\": \"1\",\n            \"CreateTime\": \"2016-03-22 21:07:47\",\n            \"ModuleID\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_set_host_list.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_set_property/",
    "title": "get_set_property",
    "name": "get_set_property",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>获取所有 set 属性</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"SetEnviType\": [\n            {\n                \"Property\": \"2\",\n                \"value\": \"开放4\"\n            }\n        ],\n        \"SetServiceStatus\": [\n            {\n                \"Property\": \"0\",\n                \"value\": \"开放4\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_set_property.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_sets_by_property/",
    "title": "get_sets_by_property",
    "name": "get_sets_by_property",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>根据 set 属性获取 set</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_envi_type",
            "description": "<p>Set 环境类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "set_service_status",
            "description": "<p>Set 开放状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"SetID\": \"1\",\n            \"SetName\": \"空闲机池\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_sets_by_property.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/cc/get_topo_tree_by_app_id/",
    "title": "get_topo_tree_by_app_id",
    "name": "get_topo_tree_by_app_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>查询业务拓扑树</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"ApplicationName\": \"资源池\",\n        \"Type\": \"0\",\n        \"Children\": [\n            {\n                \"Capacity\": \"0\",\n                \"Description\": \"\",\n                \"SetName\": \"空闲机池\",\n                \"Default\": \"1\",\n                \"ServiceStatus\": \"\",\n                \"ChnName\": \"\",\n                \"EnviType\": \"\",\n                \"Children\": [\n                    {\n                        \"LastTime\": \"2016-03-18 13:08:19\",\n                        \"Description\": \"\",\n                        \"Default\": \"1\",\n                        \"ModuleName\": \"空闲机\",\n                        \"Operator\": \"\",\n                        \"HostNum\": 1,\n                        \"SetID\": \"1\",\n                        \"ModuleID\": \"1\",\n                        \"ApplicationID\": \"1\",\n                        \"CreateTime\": \"2016-03-18 13:08:19\",\n                        \"BakOperator\": \"\"\n                    }\n                ],\n                \"Openstatus\": \"\",\n                \"ParentID\": \"0\",\n                \"SetID\": \"1\",\n                \"LastTime\": \"2016-03-18 13:08:19\",\n                \"ApplicationID\": \"1\",\n                \"CreateTime\": \"2016-03-18 13:08:19\"\n            }\n        ],\n        \"Description\": \"\",\n        \"BusinessDeptName\": \"\",\n        \"Creator\": \"公司名称\",\n        \"Default\": \"1\",\n        \"ApplicationID\": \"1\",\n        \"Level\": \"2\",\n        \"Display\": \"1\",\n        \"Source\": \"0\",\n        \"GroupName\": \"\",\n        \"Maintainers\": \"公司名称\",\n        \"CompanyID\": \"0\",\n        \"Owner\": \"公司名称\",\n        \"ProductPm\": \"\",\n        \"LifeCycle\": \"\",\n        \"LastTime\": \"2016-03-18 13:08:19\",\n        \"DeptName\": \"\",\n        \"CreateTime\": \"2016-03-18 13:08:19\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/get_topo_tree_by_app_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cc/update_gse_proxy_status/",
    "title": "update_gse_proxy_status",
    "name": "update_gse_proxy_status",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>更新主机gse agent proxy 状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>主机子网ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>主机内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态，包含1: 设置gse proxy, 0: 删除gse proxy</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"plat_id\": 1,\n    \"ip\": \"10.129.143.213\",\n    \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/update_gse_proxy_status.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cc/update_host_by_app_id/",
    "title": "update_host_by_app_id",
    "name": "update_host_by_app_id",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>更新主机的gse agent状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>子网ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "proxy_list",
            "description": "<p>Proxy信息，Proxy中每项包含内容见下面参数描述</p>"
          }
        ],
        "proxy_list": [
          {
            "group": "proxy_list",
            "type": "string",
            "optional": false,
            "field": "inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "proxy_list",
            "type": "string",
            "optional": true,
            "field": "outer_ip",
            "description": "<p>外网IP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"plat_id\": 1,\n    \"proxy_list\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/update_host_by_app_id.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cc/update_host_plat/",
    "title": "update_host_plat",
    "name": "update_host_plat",
    "group": "API_CC",
    "version": "1.0.0",
    "description": "<p>更新主机云子网</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "src_plat_id",
            "description": "<p>主机现子网ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dst_plat_id",
            "description": "<p>变更后的子网ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>主机内网IP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"src_plat_id\": 1,\n    \"dst_plat_id\": 2,\n    \"ip\": \"127.0.0.1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/cc/apidoc/update_host_plat.js",
    "groupTitle": "API_CC"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cmsi/noc_notice/",
    "title": "noc_notice",
    "name": "noc_notice",
    "group": "API_CMSI",
    "version": "1.0.0",
    "description": "<p>公共语音通知</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "auto_read_message",
            "description": "<p>自动语音读字信息</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "user_list_information",
            "description": "<p>待通知的用户列表，自动语音通知列表，若user_list_information、receiver__username同时存在，以user_list_information为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver__username",
            "description": "<p>待通知的用户列表，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若user_list_information、receiver__username同时存在，以user_list_information为准</p>"
          }
        ],
        "user_list_information": [
          {
            "group": "user_list_information",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>被通知人</p>"
          },
          {
            "group": "user_list_information",
            "type": "string",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>被通知人手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"auto_read_message\": \"This is a test\",\n    \"user_list_information\": [{\n        \"username\": \"admin\",\n        \"mobile_phone\": \"1234567890\",\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"taskInstanceName\": \"Test\",\n        \"taskInstanceId\": 168231\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/generic/apis/cmsi/noc_notice.py",
    "groupTitle": "API_CMSI"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cmsi/send_mail/",
    "title": "send_mail",
    "name": "send_mail",
    "group": "API_CMSI",
    "version": "1.0.0",
    "description": "<p>发送邮件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver",
            "description": "<p>邮件接收者，包含邮件完整地址，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver__username",
            "description": "<p>邮件接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sender",
            "description": "<p>发件人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>邮件主题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>邮件内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cc",
            "description": "<p>抄送人，包含邮件完整地址，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cc__username",
            "description": "<p>抄送人，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若cc、cc__username同时存在，以cc为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body_format",
            "description": "<p>邮件格式，包含'Html', 'Text'，默认为'Html'</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "is_content_base64",
            "description": "<p>邮件内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"reveiver\": \"admin@tencent.com\",\n    \"sender\": \"admin@tencent.com\",\n    \"title\": \"This is a Test\",\n    \"content\": \"<html>Welcome to Blueking</html>\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"邮件发送成功。\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/generic/apis/cmsi/send_mail.py",
    "groupTitle": "API_CMSI"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cmsi/send_qy_weixin/",
    "title": "send_qy_weixin",
    "name": "send_qy_weixin",
    "group": "API_CMSI",
    "version": "1.0.0",
    "description": "<p>发送企业微信</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver__username",
            "description": "<p>微信接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>消息内容，长度最长为2048字符</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "is_content_base64",
            "description": "<p>消息内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"receiver__username\": \"admin\",\n    \"content\": \"This is a Test\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"微信发送成功。\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/generic/apis/cmsi/send_qy_weixin.py",
    "groupTitle": "API_CMSI"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/cmsi/send_sms/",
    "title": "send_sms",
    "name": "send_sms",
    "group": "API_CMSI",
    "version": "1.0.0",
    "description": "<p>发送短信</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver",
            "description": "<p>短信接收者，包含接收者电话号码，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver__username",
            "description": "<p>短信接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>短信内容</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "is_content_base64",
            "description": "<p>消息内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"reveiver\": \"1234567890\",\n    \"receiver__username\": \"admin\",\n    \"content\": \"<html>Welcome to Blueking</html>\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"短信发送成功。\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/generic/apis/cmsi/send_sms.py",
    "groupTitle": "API_CMSI"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/change_cron_status/",
    "title": "change_cron_status",
    "name": "change_cron_status",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>更新定时作业状态 ，如启动或暂停；操作者必须是业务的创建人或运维</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>作业状态，1.启动、2.暂停</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "crontab_task_id",
            "description": "<p>定时任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"status\": \"1\",\n    \"crontab_task_id\": 123,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"crontabTaskId\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/change_cron_status.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/execute_task/",
    "title": "execute_task",
    "name": "execute_task",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>根据作业模板ID启动作业</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_id",
            "description": "<p>作业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "steps",
            "description": "<p>步骤参数，每项的具体参数见下面描述</p>"
          }
        ],
        "steps": [
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "scriptTimeout",
            "description": "<p>脚本超时时间</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "scriptParam",
            "description": "<p>脚本参数</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "serverSetId",
            "description": "<p>服务器集群ID</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "scriptId",
            "description": "<p>脚本ID</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": false,
            "field": "stepId",
            "description": "<p>步骤ID，可以只指定某几步执行</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "ipList",
            "description": "<p>IP列表格式：子网ID:IP，多个之间逗号，分割，例如：1:10.105.34.6,1:10.237.226.14</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "account",
            "description": "<p>执行账户账户名</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "fileTargetPath",
            "description": "<p>目标路径</p>"
          },
          {
            "group": "steps",
            "type": "array",
            "optional": true,
            "field": "fileSource",
            "description": "<p>源文件信息，整个参数替换，不支持内部某个变量替换。格式参考下面说明</p>"
          }
        ],
        "fileSource": [
          {
            "group": "fileSource",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>源文件路径，如：/tmp/t.txt</p>"
          },
          {
            "group": "fileSource",
            "type": "string",
            "optional": true,
            "field": "ipList",
            "description": "<p>源文件服务器地址，格式为：子网ID:IP，多个之间逗号分割，和serverSetId二选一。如果都存在，以serverSetId为准</p>"
          },
          {
            "group": "fileSource",
            "type": "string",
            "optional": true,
            "field": "serverSetId",
            "description": "<p>源文件服务器分组ID，和ipList二选一。如果都存在，以serverSetId为准</p>"
          },
          {
            "group": "fileSource",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>源文件机器执行账户账户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"46\",\n    \"task_id\": \"195\",\n    \"steps\": [{\n        \"scriptTimeout\": 1000,\n        \"scriptParam\": \"-a\",\n        \"serverSetId\": 0,\n        \"ipList\": \"1:10.105.34.6,1:10.237.226.14\",\n        \"scriptId\": 203,\n        \"stepId\": 244,\n        \"account\": \"root\",\n    },\n    {\n        \"fileTargetPath\": \"/tmp/[FILESRCIP]/\",\n        \"fileSource\": [{\n            \"file\": \"/tmp/t.txt\",\n            \"ipList\": \"1:10.104.33.10,1:10.104.33.11\",\n            \"account\": \"root\",\n            \"serverSetId\": \"0\"\n        }],\n        \"serverSetId\": 0,\n        \"ipList\": \"1:10.105.34.6,1:10.237.226.14\",\n        \"stepId\": 246,\n        \"account\": \"root\",\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"taskInstanceName\": \"sundy测试\",\n        \"taskInstanceId\": 168231\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/execute_task.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/fast_execute_script/",
    "title": "fast_execute_script",
    "name": "fast_execute_script",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>快速执行脚本</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>执行脚本步骤的脚本内容，base64编码后的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "script_timeout",
            "description": "<p>脚本执行超时时间，范围60~3600，默认1000</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "script_param",
            "description": "<p>脚本执行参数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>脚本类型：1(shell脚本)、2(bat脚本)、3(perl脚本)、4(python脚本)、5(Powershell脚本)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "ip_list",
            "description": "<p>目标机器，包含以下内容：</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "server_set_id",
            "description": "<p>目标机器分组ID；server_set_id和ip_list至少一个必须存在，如果同时存在，则以server_set_id为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>目标机器账户名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_param_sensitive",
            "description": "<p>是否敏感参数: 1是, 0不是(默认为0)</p>"
          }
        ],
        "ip_list": [
          {
            "group": "ip_list",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "ip_list",
            "type": "int",
            "optional": false,
            "field": "source",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"content\": \"xxx\",\n    \"ip_list\": [\n        {\n            \"ip\": \"10.105.24.85\",\n            \"source\": 1\n        }\n    ],\n    \"type\": 1,\n    \"account\": \"root\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"taskInstanceName\": \"API执行脚本1456715609220\",\n        \"taskInstanceId\": 174770\n    },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/fast_execute_script.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/fast_push_file/",
    "title": "fast_push_file",
    "name": "fast_push_file",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>快速分发文件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "file_source",
            "description": "<p>源文件信息，包含内容件下面参数描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file_target_path",
            "description": "<p>目标路径</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "ip_list",
            "description": "<p>目标机器，包含内容见下面参数描述</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "target_app_id",
            "description": "<p>目标机器所属业务，全业务需要</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "server_set_id",
            "description": "<p>目标机器分组ID；server_set_id和ip_list至少一个必须存在，如果同时存在，则以server_set_id为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>目标机器账户名</p>"
          }
        ],
        "file_source": [
          {
            "group": "file_source",
            "type": "int",
            "optional": true,
            "field": "source_app_id",
            "description": "<p>为源机器所属业务，全业务需要</p>"
          },
          {
            "group": "file_source",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>源文件路径</p>"
          },
          {
            "group": "file_source",
            "type": "array",
            "optional": true,
            "field": "ip_list",
            "description": "<p>IP信息，其中包含ip（源文件服务器IP）和source（IP的子网ID）</p>"
          },
          {
            "group": "file_source",
            "type": "int",
            "optional": true,
            "field": "server_set_id",
            "description": "<p>源文件服务器分区ID；server_set_id和ip_list至少一个必须存在，如果同时存在，则以server_set_id为准</p>"
          },
          {
            "group": "file_source",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>源文件服务器账户名</p>"
          }
        ],
        "ip_list": [
          {
            "group": "ip_list",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "ip_list",
            "type": "int",
            "optional": false,
            "field": "source",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": \"46\",\n    \"file_source\": [\n        {\n            \"server_set_id\": \"\",\n            \"account\": \"root\",\n            \"ip_list\": [\n                {\n                    \"ip\": \"10.105.34.6\",\n                    \"source\": 1\n                }\n            ],\n            \"file\": \"/tmp/tmp.txt\"\n        }\n    ],\n    \"account\": \"root\",\n    \"file_target_path\": \"/tmp\",\n    \"ip_list\": [\n        {\n            \"ip\": \"10.105.24.85\",\n            \"source\": 1\n        }\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"taskInstanceName\": \"API分发文件1456316951760\",\n        \"taskInstanceId\": 167201\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/fast_push_file.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/get_agent_status/",
    "title": "get_agent_status",
    "name": "get_agent_status",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>查询Agent状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ip_infos",
            "description": "<p>IP信息，每项条目包含信息见下面参数描述</p>"
          }
        ],
        "ip_infos": [
          {
            "group": "ip_infos",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "ip_infos",
            "type": "int",
            "optional": false,
            "field": "plat_id",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"ip_infos\": [\n        {\n            \"ip\": \"10.104.112.107\",\n            \"plat_id\": 1,\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"status\": 1,\n            \"ip\": \"10.104.112.107\"\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>包含True和False，其中True表示成功，False表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回错误码，其中&quot;00&quot;表示成功，其它表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回错误消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据，成功返回请求数据</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>主机Agent状态码，1.正常; 0.异常</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_agent_status.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/job/get_cron/",
    "title": "get_cron",
    "name": "get_cron",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>查询业务下定时作业信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "crontab_task_id",
            "description": "<p>定时任务ID，如果存在，则忽略其他筛选条件，只查询这个指定的作业信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>定时作业的名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "description": "<p>作业的状态：1.已启动、2.已暂停、3.已完成</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "creater",
            "description": "<p>作业创建人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_user",
            "description": "<p>最后修改人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "create_time_start",
            "description": "<p>创建起始时间，YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "create_time_end",
            "description": "<p>创建结束时间，YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_time_start",
            "description": "<p>最后修改起始时间，YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_time_end",
            "description": "<p>最后修改结束时间，YYYY-MM-DD格式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"crontab_task_id\": 123456,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"status\": 1,\n            \"lastModifyUser\": \"admin\",\n            \"des\": \"\",\n            \"createTime\": \"2017-03-01 19:45:51\",\n            \"creater\": \"admin\",\n            \"lastModifyTime\": \"2017-03-01 20:01:08\",\n            \"cronExpression\": \"2 0/5 * * * ?\",\n            \"taskId\": 5,\n            \"appId\": 3,\n            \"taskName\": \"de\",\n            \"type\": 0,\n            \"id\": 2,\n            \"name\": \"hello test2 a\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_cron.js",
    "groupTitle": "API_JOB"
  },
  {
    "name": "get_proc_result",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>查询进程操作结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gse_task_id",
            "description": "<p>GSE任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"username\": \"admin\",\n    \"app_id\": 46,\n    \"gse_task_id\": \"GSETASK:20160425150541:20107\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"m_rsp\": {\n            \"/usr/local/gse/gseagent/plugins/unifyTlogc/sbin/bk_gse_unifyTlogc:1:172.27.178.175\": {\n                \"content\": \"{\\\"ip\\\":\\\"172.27.178.175\\\",\\\"process\\\":[{\\\"instance\\\":[{\\\"cmdline\\\":\\\"\\\",\\\"cpuUsage\\\":0,\\\"cpuUsageAve\\\":0,\\\"diskSize\\\":-1,\\\"elapsedTime\\\":0,\\\"freeVMem\\\":\\\"0\\\",\\\"phyMemUsage\\\":0,\\\"pid\\\":-1,\\\"processName\\\":\\\"bk_gse_unifyTlogc\\\",\\\"startTime\\\":\\\"\\\",\\\"stat\\\":\\\"\\\",\\\"stime\\\":\\\"0\\\",\\\"threadCount\\\":0,\\\"usePhyMem\\\":0,\\\"utime\\\":\\\"0\\\"}],\\\"procname\\\":\\\"bk_gse_unifyTlogc\\\"}],\\\"timezone\\\":8,\\\"utctime\\\":\\\"2017-04-13 21:51:55\\\",\\\"utctime2\\\":\\\"2017-04-13 13:51:55\\\"}\\n\",\n                \"errcode\": 0,\n                \"errmsg\": \"success\"\n            }\n        },\n        \"m_errcode\": 0,\n        \"m_errmsg\": \"\",\n        \"setM_errmsg\": true,\n        \"m_rspSize\": 1,\n        \"setM_errcode\": true,\n        \"setM_rsp\": true\n    },\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "m_errcode",
            "description": "<p>任务状态码，0表示任务已经结束，115表示任务正在执行</p>"
          },
          {
            "group": "Success 200",
            "type": "dict",
            "optional": false,
            "field": "m_rsp",
            "description": "<p>各IP实际执行结果</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "filename": "esb/components/bk/apis/job/get_proc_result.py",
    "groupTitle": "API_JOB"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/job/get_task/",
    "title": "get_task",
    "name": "get_task",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>查询作业模板</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>作业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "creater",
            "description": "<p>创建人QQ号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_user",
            "description": "<p>最后修改人QQ号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "create_time_start",
            "description": "<p>创建起始时间，YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "create_time_end",
            "description": "<p>创建结束时间 YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_time_start",
            "description": "<p>最后修改起始时间 YYYY-MM-DD格式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_modify_time_end",
            "description": "<p>最后修改结束时间YYYY-MM-DD格式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"name\": \"hotest\",\n    \"creater\": \"12345\",\n    \"last_modify_user\": \"12345\",\n    \"create_time_start\": \"2016-02-22 23:12:34\",\n    \"create_time_end\": \"2016-02-22 23:12:34\",\n    \"last_modify_time_start\": \"2016-02-22 23:12:34\",\n    \"last_modify_time_end\": \"2016-02-22 23:12:34\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"account\": \"\",\n            \"name\": \"hotest\",\n            \"creater\": \"12345\",\n            \"stepNum\": 1,\n            \"serverSetId\": 0,\n            \"nmStepBeanList\": [],\n            \"lastModifyTime\": \"2016-02-22 23:12:34\",\n            \"appId\": 46,\n            \"id\": 190,\n            \"ipList\": \"\",\n            \"createTime\": \"2016-02-22 23:12:34\",\n            \"lastModifyUser\": \"12345\"\n        },\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_task.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/job/get_task_detail/",
    "title": "get_task_detail",
    "name": "get_task_detail",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>查询作业模板详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_id",
            "description": "<p>作业模板ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 2,\n    \"task_id\": 192\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"account\": \"\",\n        \"name\": \"demo演示\",\n        \"creater\": \"2797261603\",\n        \"stepNum\": 0,\n        \"serverSetId\": 0,\n        \"nmStepBeanList\": [\n            {\n                \"ccScriptName\": \"\",\n                \"text\": \"\",\n                \"serverSetId\": 0,\n                \"stepId\": 524,\n                \"ipList\": \"1:10.105.34.6\",\n                \"serverSetName\": \"\",\n                \"ccScriptId\": 0,\n                \"fileSpeedLimit\": 0,\n                \"scriptTimeout\": 1000,\n                \"scriptParam\": \"\",\n                \"scriptContent\": \"xxx\",\n                \"lastModifyTime\": \"\",\n                \"fileSource\": \"\",\n                \"type\": 1,\n                \"scriptType\": 4,\n                \"lastModifyUser\": \"\",\n                \"blockName\": \"step1\",\n                \"paramType\": 1,\n                \"fileTargetPath\": \"\",\n                \"scriptId\": 523,\n                \"taskId\": 195,\n                \"appId\": 46,\n                \"isPause\": 0,\n                \"ord\": 1,\n                \"createTime\": \"2016-02-24 21:50:31\",\n                \"account\": \"root\",\n                \"name\": \"作业执行步骤1\",\n                \"companyId\": 15,\n                \"creater\": \"2797261603\",\n                \"ccScriptParam\": \"\",\n                \"blockOrd\": 1\n            },\n        ],\n        \"lastModifyTime\": \"2016-02-26 16:15:43\",\n        \"appId\": 46,\n        \"id\": 195,\n        \"ipList\": \"\",\n        \"createTime\": \"2016-02-24 21:50:31\",\n        \"lastModifyUser\": \"2797261603\"\n    },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_task_detail.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/job/get_task_ip_log/",
    "title": "get_task_ip_log",
    "name": "get_task_ip_log",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>根据作业实例ID查询作业执行日志</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_instance_id",
            "description": "<p>作业实例ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"task_instance_id\": \"100932\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"isFinished\": true,\n            \"stepInstanceName\": \"读取文件\",\n            \"stepAnalyseResult\": [\n                {\n                    \"count\": \"1\",\n                    \"resultType\": 9,\n                    \"ipLogContent\": [\n                        {\n                            \"status\": 9,\n                            \"totalTime\": 0.24799999594688416,\n                            \"stepInstanceId\": 156965,\n                            \"isJobIp\": 1,\n                            \"ip\": \"xxx.xxx.xxx.xxx\",\n                            \"errCode\": 0,\n                            \"source\": 1,\n                            \"logContent\": \"QlpoOTFBWSZTWekFHDQAGcHf+XMyQA...\",\n                            \"startTime\": \"2016-06-12 14:29:39\",\n                            \"retryCount\": 0,\n                            \"endTime\": \"2016-06-12 14:29:39\",\n                            \"exitCode\": 0\n                        }\n                    ],\n                    \"resultTypeText\": \"执行成功\"\n                }\n            ],\n            \"stepInstanceId\": 156965,\n            \"stepInstanceStatus\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>包含True和False，其中True表示成功，False表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回错误码，其中&quot;00&quot;表示成功，其它表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回错误消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据，成功返回请求数据</p>"
          }
        ],
        "ipLogContent": [
          {
            "group": "ipLogContent",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>主机任务状态码， 1.Agent异常; 3.上次已成功; 5.等待执行; 7.正在执行; 9.执行成功; 11.任务失败; 12.任务下发失败; 13.任务超时; 15.任务日志错误; 101.脚本执行失败; 102.脚本执行超时; 103.脚本执行被终止; 104.脚本返回码非零; 202.文件传输失败; 203.源文件不存在; 310.Agent异常; 311.用户名不存在; 320.文件获取失败; 321.文件超出限制; 329.文件传输错误; 399.任务执行出错</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_task_ip_log.js",
    "groupTitle": "API_JOB"
  },
  {
    "type": "get",
    "url": "/api/c/compapi/job/get_task_result/",
    "title": "get_task_result",
    "name": "get_task_result",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>根据作业实例 ID 查询作业执行状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_instance_id",
            "description": "<p>作业实例ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"task_instance_id\": \"65\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"isFinished\": true,\n        \"taskInstance\": {\n            \"status\": 3,\n            \"totalTime\": 0,\n            \"endTime\": \"2015-09-09 15:05:32\",\n            \"startTime\": \"2015-09-09 15:05:32\",\n            \"operationList\": [],\n            \"startWay\": 1,\n            \"taskId\": -1,\n            \"appId\": 1,\n            \"operator\": \"2797261603\",\n            \"taskInstanceId\": 65,\n            \"currentStepId\": 75,\n            \"createTime\": \"2015-09-09 15:05:31\",\n            \"name\": \"执行脚本-20158915516182\"\n        },\n        \"blocks\": [\n            {\n                \"type\": 1,\n                \"stepInstances\": [\n                    {\n                        \"totalTime\": 0,\n                        \"failIPNum\": 0,\n                        \"text\": null,\n                        \"successIPNum\": 2,\n                        \"isPause\": 0,\n                        \"operator\": \"2797261603\",\n                        \"stepInstanceId\": 75,\n                        \"taskInstanceId\": 65,\n                        \"type\": 1,\n                        \"badIPNum\": 0,\n                        \"status\": 3,\n                        \"stepId\": -1,\n                        \"blockName\": \"执行脚本-20158915516182\",\n                        \"operationList\": [],\n                        \"startTime\": \"2015-09-09 15:05:32\",\n                        \"appId\": 1,\n                        \"totalIPNum\": 2,\n                        \"ord\": 1,\n                        \"createTime\": \"2015-09-09 15:05:31\",\n                        \"name\": \"执行脚本-20158915516182\",\n                        \"blockOrd\": 1,\n                        \"retryCount\": 0,\n                        \"endTime\": \"2015-09-09 15:05:32\",\n                        \"runIPNum\": 2\n                    }\n                ],\n                \"blockOrd\": 1,\n                \"blockName\": \"执行脚本-20158915516182\"\n            }\n        ]\n    },\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>包含True和False，其中True表示成功，False表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>返回错误码，其中&quot;00&quot;表示成功，其它表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回错误消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据，成功返回请求数据</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>任务状态码， 1.未执行; 2.正在执行; 3.执行成功; 4.执行失败; 5.跳过; 6.忽略错误; 7.等待用户; 8.手动结束; 9.状态异常; 10.步骤强制终止中; 11.步骤强制终止成功; 12.步骤强制终止失败</p>"
          }
        ]
      }
    },
    "filename": "esb/components/bk/apis/job/apidoc/get_task_result.js",
    "groupTitle": "API_JOB"
  },
  {
    "name": "gse_proc_operate",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>进程操作</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "operate_type",
            "description": "<p>操作类型，可选值：0:启动进程(start); 1:停止进程(stop); 2:进程状态查询; 3:注册托管进程; 4:取消托管进程; 7:重启进程(restart); 8:重新加载进程(reload); 9:杀死进程(kill)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "proc_list",
            "description": "<p>待操进程信息</p>"
          }
        ],
        "proc_list": [
          {
            "group": "proc_list",
            "type": "array",
            "optional": false,
            "field": "ip_list",
            "description": "<p>IP 列表</p>"
          }
        ],
        "ip_list": [
          {
            "group": "ip_list",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP 地址</p>"
          },
          {
            "group": "ip_list",
            "type": "int",
            "optional": false,
            "field": "source",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"username\": \"admin\",\n    \"app_id\": 46,\n    \"operate_type\": 1,\n    \"proc_list\": [\n        {\n            \"ip_list\": [\n                {\n                    \"ip\": \"10.10.10.10\",\n                    \"source\": 1,\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"errorCode\": 0,\n        \"gseTaskId\": \"GSETASK:20170413215154:8239\",\n        \"errorMessage\": \"success\"\n    },\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "filename": "esb/components/bk/apis/job/gse_proc_operate.py",
    "groupTitle": "API_JOB"
  },
  {
    "name": "gse_push_file",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>文件内容推送</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "file_list",
            "description": "<p>文件列表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target_path",
            "description": "<p>文件目标路径</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "ip_list",
            "description": "<p>目标机器</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "group_ids",
            "description": "<p>蓝鲸配置平台动态分组ID，多个之间逗号分隔，和ip_list至少一个必选，如果两个同时存在，则以group_ids为准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>目标机器账户名</p>"
          }
        ],
        "file_list": [
          {
            "group": "file_list",
            "type": "string",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "file_list",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>文件内容，文件内容为空，则放弃执行该文件，base64编码后的内容</p>"
          }
        ],
        "ip_list": [
          {
            "group": "ip_list",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "ip_list",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>子网ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"file_list\": [\n        {\n            \"file_name\": \"a.txt\",\n            \"content\": \"aGVsbG8gd29ybGQh\",\n        },\n        {\n            \"file_name\": \"b.txt\",\n            \"content\": \"aGVsbG8gd29ybGQh\",\n        },\n        \"target_path\": \"/tmp/1/\",\n        \"ip_list\": [\n            {\n                \"ip\": \"127.0.0.1\",\n                \"source\": 1\n            }\n        ],\n        \"account\": \"root\",\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"taskInstanceName\": \"测试\",\n        \"taskInstanceId\": 168231\n    }\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "filename": "esb/components/bk/apis/job/gse_push_file.py",
    "groupTitle": "API_JOB"
  },
  {
    "type": "post",
    "url": "/api/c/compapi/job/save_cron/",
    "title": "save_cron",
    "name": "save_cron",
    "group": "API_JOB",
    "version": "1.0.0",
    "description": "<p>新建或保存定时作业 ；新建定时作业，作业状态默认为暂停；操作者必须是业务的创建人或运维</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "app_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>定时作业的名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_id",
            "description": "<p>要定时执行的作业的作业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "crontab_task_id",
            "description": "<p>定时任务ID，更新定时任务时，必须传这个值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cron_expression",
            "description": "<p>定时任务crontab的定时规则，各自段含义为：秒 分 时 日 月 周 年（可选），如: 0 0/5 * * * ?  表示每5分钟执行一次</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"app_code\": \"esb_test\",\n    \"app_secret\": \"xxx\",\n    \"bk_token\": \"xxx\",\n    \"app_id\": 46,\n    \"name\": \"hotest\",\n    \"task_id\": 123,\n    \"cron_expression\": \"0 0/5 * * * ?\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"code\": \"00\",\n    \"message\": \"\",\n    \"data\": {\n        \"crontabTaskId\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "esb/components/bk/apis/job/apidoc/save_cron.js",
    "groupTitle": "API_JOB"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_code",
            "description": "<p>应用标识，即应用 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_secret",
            "description": "<p>应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -&gt; 点击应用ID -&gt; 基本信息 获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bk_token",
            "description": "<p>当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": "<p>当前用户用户名，白名单中app可使用</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_id",
            "description": "<p>作业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "target_app_id",
            "description": "<p>目标app id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "steps",
            "description": "<p>步骤参数</p>"
          }
        ],
        "steps": [
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "scriptTimeout",
            "description": "<p>脚本超时时间</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "scriptParam",
            "description": "<p>脚本参数</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "scriptContent",
            "description": "<p>执行脚本步骤的脚本内容，base64编码后的内容，与scriptId二选一，二者同时存在，以scriptId为准</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "scriptType",
            "description": "<p>执行脚本的类型，1.shell脚本、2.bat脚本、3.perl脚本、4.python脚本、5(Powershell脚本)；如果scriptContent存在，则必填</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "ipList",
            "description": "<p>IP列表格式，云区域ID:IP，多个之间逗号分割，例如1:10.105.34.6,1:10.237.226.14</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "scriptId",
            "description": "<p>脚本ID</p>"
          },
          {
            "group": "steps",
            "type": "int",
            "optional": true,
            "field": "stepId",
            "description": "<p>步骤ID，可以只指定某几步执行</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "account",
            "description": "<p>执行账户账户名</p>"
          },
          {
            "group": "steps",
            "type": "string",
            "optional": true,
            "field": "fileTargetPath",
            "description": "<p>标路径</p>"
          },
          {
            "group": "steps",
            "type": "array",
            "optional": true,
            "field": "fileSource",
            "description": "<p>源文件信息，整个参数替换，不支持内部某个变量替换。格式参考下面说明</p>"
          }
        ],
        "fileSource": [
          {
            "group": "fileSource",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>文件路径，如：/tmp/t.txt</p>"
          },
          {
            "group": "fileSource",
            "type": "string",
            "optional": false,
            "field": "ipList",
            "description": "<p>源文件服务器地址，格式为：云区域ID:IP，多个之间逗号分割</p>"
          },
          {
            "group": "fileSource",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>源文件机器执行账户账户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"task_id\": 250,\n    \"target_app_id\": 137,\n    \"steps\": [{\n        \"scriptTimeout\": 1000,\n        \"scriptParam\": \"-a\",\n        \"ipList\": \"1:10.105.34.6,1:10.237.226.14\",\n        \"scriptId\": 203,\n        \"stepId\": 244,\n        \"account\": \"root\",\n    },\n    {\n        \"fileTargetPath\": \"/tmp/[FILESRCIP]/\",\n        \"fileSource\": [{\n            \"file\": \"/tmp/t.txt\",\n            \"ipList\": \"1:10.104.33.10,1:10.104.33.11\",\n            \"account\": \"root\",\n        }],\n        \"ipList\": \"1:10.105.34.6,1:10.237.226.14\",\n        \"stepId\": 246,\n        \"account\": \"root\",\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"result\": true,\n        \"code\": \"00\",\n        \"message\": \"\",\n        \"data\": {\n            \"taskInstanceName\": \"测试\",\n            \"taskInstanceId\": 168231\n        }\n    }\n\n{% endblock %}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "esb/components/bk/apis/job/execute_platform_task.py",
    "group": "_data_home_tianci_component_src_open_paas_esb_components_bk_apis_job_execute_platform_task_py",
    "groupTitle": "_data_home_tianci_component_src_open_paas_esb_components_bk_apis_job_execute_platform_task_py",
    "name": ""
  }
] });
