/**
@api {get} /api/c/compapi/cc/get_topo_tree_by_app_id/ get_topo_tree_by_app_id
@apiName get_topo_tree_by_app_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询业务拓扑树
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} app_id 业务ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "1"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "ApplicationName": "资源池",
            "Type": "0",
            "Children": [
                {
                    "Capacity": "0",
                    "Description": "",
                    "SetName": "空闲机池",
                    "Default": "1",
                    "ServiceStatus": "",
                    "ChnName": "",
                    "EnviType": "",
                    "Children": [
                        {
                            "LastTime": "2016-03-18 13:08:19",
                            "Description": "",
                            "Default": "1",
                            "ModuleName": "空闲机",
                            "Operator": "",
                            "HostNum": 1,
                            "SetID": "1",
                            "ModuleID": "1",
                            "ApplicationID": "1",
                            "CreateTime": "2016-03-18 13:08:19",
                            "BakOperator": ""
                        }
                    ],
                    "Openstatus": "",
                    "ParentID": "0",
                    "SetID": "1",
                    "LastTime": "2016-03-18 13:08:19",
                    "ApplicationID": "1",
                    "CreateTime": "2016-03-18 13:08:19"
                }
            ],
            "Description": "",
            "BusinessDeptName": "",
            "Creator": "公司名称",
            "Default": "1",
            "ApplicationID": "1",
            "Level": "2",
            "Display": "1",
            "Source": "0",
            "GroupName": "",
            "Maintainers": "公司名称",
            "CompanyID": "0",
            "Owner": "公司名称",
            "ProductPm": "",
            "LifeCycle": "",
            "LastTime": "2016-03-18 13:08:19",
            "DeptName": "",
            "CreateTime": "2016-03-18 13:08:19"
        }
    }
*/
