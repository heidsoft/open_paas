/**
@api {get} /api/c/compapi/cc/get_set_property/ get_set_property
@apiName get_set_property
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 获取所有 set 属性
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
    }
@apiSuccessExample {json} Success-Response
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "SetEnviType": [
                {
                    "Property": "2",
                    "value": "开放4"
                }
            ],
            "SetServiceStatus": [
                {
                    "Property": "0",
                    "value": "开放4"
                }
            ]
        }
    }
*/
