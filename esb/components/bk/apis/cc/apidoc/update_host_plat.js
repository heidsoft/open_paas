/**
@api {post} /api/c/compapi/cc/update_host_plat/ update_host_plat
@apiName update_host_plat
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 更新主机云子网
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {int} src_plat_id 主机现子网ID
@apiParam {int} dst_plat_id 变更后的子网ID
@apiParam {string} ip 主机内网IP
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 2,
        "src_plat_id": 1,
        "dst_plat_id": 2,
        "ip": "127.0.0.1"
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
