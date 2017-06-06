/**
@api {get} /api/c/compapi/cc/get_property_list/ get_property_list
@apiName get_property_list
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询属性列表
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务 ID
@apiParam {string} [type] 属性类型，包含1:业务，2:集群，3:模块，4:主机
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "1",
        "type": "4"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "standard": {
                    "HostID": "主机ID",
                    "OuterIP": "外网IP",
                    "InnerIP": "内网IP"
                }
            }
        ]
    }
*/
