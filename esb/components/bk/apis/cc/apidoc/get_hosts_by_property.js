/**
@api {get} /api/c/compapi/cc/get_hosts_by_property/ get_hosts_by_property
@apiName get_hosts_by_property
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 根据 set 属性查询主机
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务ID
@apiParam {string} [set_id] 大区ID，多个以逗号分隔
@apiParam {string} [set_envi_type] Set 环境类型，多个以逗号分隔
@apiParam {string} [set_service_status] Set 开放状态，多个以逗号分隔
@apiParam {string} [module_name] 模块名称，多个以逗号分隔
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "1",
        "set_id": "1"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "OuterIP": "",
                "HostID": "70",
                "InnerIP": "10.24.5.5",
                "Source": "3"
            }
        ]
    }
 */
