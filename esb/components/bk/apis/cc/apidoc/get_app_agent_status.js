/**
@api {get} /api/c/compapi/cc/get_app_agent_status/ get_app_agent_status
@apiName get_app_agent_status
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询业务下Agent状态
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {int} app_id 业务ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 516
    }

@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "message": "",
        "code": "00",
        "data": {
            "agentNorList": [ ],
            "agentAbnorCnt": 4,
            "agentNorCnt": 0,
            "agentAbnorList": [
                {
                    "Ip": "192.168.1.100",
                    "PlatId": "1",
                    "CompanyId": 0
                },
                {
                    "Ip": "192.168.1.101",
                    "PlatId": "1",
                    "CompanyId": 0
                },
                {
                    "Ip": "192.168.1.103",
                    "PlatId": "1",
                    "CompanyId": 0
                },
                {
                    "Ip": "192.116.1.111",
                    "PlatId": "1",
                    "CompanyId": 0
                }
            ]
        },
    }

@apiErrorExample {json} Error-Response:
    HTTP/1.1 200 OK
    {
        "code": "50000",
        "error": {
            "error_data": {
                "api_spec": {
                }
            }
        },
        "result": false,
        "message": "没权利访问业务",
        "data": null
    }
 */
