/**
@api {get} /api/c/compapi/cc/get_host_company_id/ get_host_company_id
@apiName get_host_company_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 获取主机开发商
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {string} ips 机内网IP，多个以逗号分隔

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "ips": "192.168.1.100,192.168.1.101",
    }

@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "192.168.1.100": {
                "102": {
                    "CompanyID": "0",
                    "AssetID": "",
                    "Region": "",
                    "Owner": "公司名称",
                    "PlatID": "1",
                    "ApplicationID": "2"
                }
            },
            "192.168.1.101": {
                "102": {
                    "CompanyID": "0",
                    "AssetID": "",
                    "Region": "",
                    "Owner": "公司名称",
                    "PlatID": "1",
                    "ApplicationID": "2"
                }
            }
        }
    }
*/
