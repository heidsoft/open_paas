/**
@api {get} /api/c/compapi/cc/get_host_by_company_id/ get_host_by_company_id
@apiName get_host_by_company_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 根据开发商ID、子网ID、主机IP获取主机信息
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} company_id 开发商ID
@apiParam {string} ip 主机ip
@apiParam {int} plat_id 子网ID

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "company_id": 0,
        "ip": "192.168.1.100",
        "plat_id": 1,
    }

@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "ApplicationName": "示例业务",
            "ModuleName": "示例模块",
            "BakOperator": "admin",
            "SetName": "示例集群",
            "Operator": "admin",
            "SetID": "3",
            "ApplicationID": "2",
            "ModuleID": "3"
        }
    }
*/
