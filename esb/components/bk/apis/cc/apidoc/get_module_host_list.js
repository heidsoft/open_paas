/**
@api {get} /api/c/compapi/cc/get_module_host_list/ get_module_host_list
@apiName get_module_host_list
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询模块主机列表
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务ID
@apiParam {string} module_id 模块ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "1",
        "module_id": "1"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "ModuleName": "空闲机",
                "IdcName": "",
                "Source": "3",
                "ApplicationID": "1",
                "Status": "",
                "HardMemo": "",
                "Mem": "0",
                "HostName": "bb",
                "DeviceClass": "",
                "SetID": "1",
                "ApplicationName": "资源池",
                "HostID": "70",
                "BakOperator": "",
                "OuterIP": "",
                "Region": "eiwoew-s",
                "ModuleID": "1",
                "SetName": "",
                "AssetID": "eiwoew-sodfo-11",
                "OSName": "",
                "Operator": "",
                "InnerIP": "10.24.5.5",
                "CreateTime": "2016-03-22 21:07:47"
            }
        ]
    }
 */
