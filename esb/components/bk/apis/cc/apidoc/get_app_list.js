/**
@api {get} /api/c/compapi/cc/get_app_list/ get_app_list
@apiName get_app_list
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询业务列表
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "ApplicationName": "示例业务",
                "Type": "0",
                "Description": "",
                "BusinessDeptName": "",
                "Creator": "admin",
                "Default": "0",
                "ApplicationID": "2",
                "Level": "3",
                "Display": "1",
                "Source": "",
                "GroupName": "",
                "Maintainers": "admin",
                "CompanyID": "0",
                "Owner": "公司名称",
                "ProductPm": "admin",
                "LifeCycle": "公测",
                "LastTime": "2016-03-25 04:02:05",
                "DeptName": "公司名称",
                "CreateTime": "2016-03-18 13:08:19"
            }
        ]
    }
 */
