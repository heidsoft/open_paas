/**
@api {get} /api/c/compapi/cc/get_host_list_by_ip/ get_host_list_by_ip
@apiName get_host_list_by_ip
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 根据IP查询主机信息
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务ID
@apiParam {string} ip 主机IP(内网IP或外网IP)
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "1",
        "ip": "10.24.5.5"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "Status": "",
                "HardMemo": "",
                "HostID": "70",
                "BakOperator": "",
                "SetName": "",
                "AssetID": "eiwoew-sodfo-11",
                "InnerIP": "10.24.5.5",
                "Region": "eiwoew-s",
                "HostName": "bb",
                "IdcName": "",
                "OSName": "",
                "ModuleName": "空闲机",
                "DeviceClass": "",
                "ApplicationName": "资源池",
                "OuterIP": "",
                "Operator": "",
                "SetID": "1",
                "ApplicationID": "1",
                "CreateTime": "2016-03-22 21:07:47",
                "ModuleID": "1"
            }
        ]
    }
 */
