/**
@api {post} /api/c/compapi/cc/update_host_by_app_id/ update_host_by_app_id
@apiName update_host_by_app_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 更新主机的gse agent状态
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {int} plat_id 子网ID
@apiParam {array} proxy_list Proxy信息，Proxy中每项包含内容见下面参数描述

@apiParam (proxy_list) {string} inner_ip 内网IP
@apiParam (proxy_list) {string} [outer_ip] 外网IP

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 2,
        "plat_id": 1,
        "proxy_list": [
            {
                "inner_ip": "127.0.0.1",
                "outer_ip": ""
            }
        ]
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": null,
    }
*/
