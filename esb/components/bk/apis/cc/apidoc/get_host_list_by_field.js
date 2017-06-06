/**
@api {get} /api/c/compapi/cc/get_host_list_by_field/ get_host_list_by_field
@apiName get_host_list_by_field
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 根据主机属性的值group主机列表
@apiParam {string} app_code app标识
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务ID
@apiParam {string} field 主机属性字段
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "appId": "1",
        "field": "OSName"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "message": "",
        "code": "00",
        "data": {
          "": [
            {
              "Source": "1",
              "ApplicationID": "2",
              "HostID": "66",
              "InnerIP": "192.168.47.213",
              "OSName": ""
            },
            {
              "Source": "1",
              "ApplicationID": "2",
              "HostID": "67",
              "InnerIP": "192.168.47.214",
              "OSName": ""
            }
          ]
        },
        "result": true
    }
 */
