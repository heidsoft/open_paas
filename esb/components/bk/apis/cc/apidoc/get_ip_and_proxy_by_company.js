/**
@api {get} /api/c/compapi/cc/get_ip_and_proxy_by_company/ get_ip_and_proxy_by_company
@apiName get_ip_and_proxy_by_company
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询业务下IP及ProxyIP
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {int} plat_id 子网ID
@apiParam {string} ip_list 内网IP列表，多个以逗号分隔

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 2,
        "plat_id": 1,
        "ip_list": "172.16.245.161,172.16.245.169"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "proxy_list": [],
            "ip_list": [
                "172.16.245.161",
                "172.16.245.169",
            ],
            "invalid_ips": []
        }
    }
 */
