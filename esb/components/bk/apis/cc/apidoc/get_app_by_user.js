/**
@api {get} /api/c/compapi/cc/get_app_by_user/ get_app_by_user
@apiName get_app_by_user
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询用户有权限的业务
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
                "GroupName": "",
                "Description": "",
                "BusinessDeptName": "",
                "Creator": "admin",
                "Default": "0",
                "ApplicationID": "2",
                "DeptName": "公司名称",
                "Level": "3",
                "LifeCycle": "公测",
                "Source": "",
                "Maintainers": "admin",
                "CreateTime": "2016-08-10 20:43:38",
                "CompanyID": "0",
                "Owner": "公司名称",
                "ProductPm": "admin",
                "LastTime": "2016-08-10 20:43:38",
                "Type": "0",
                "Display": "1"
            }
        ],
    }

@apiSuccess {string} Default 为1表示系统默认创建业务
@apiErrorExample {json} Error-Response:
    HTTP/1.1 200 OK
    {
        "code": "50000",
        "error": {
            "error_data": {
                "api_spec": {
                    "msg": "only right to app",
                    "extmsg": "没权利访问业务",
                    "code": "0006"
                }
            }
        },
        "result": false,
        "request_id": "bb8e27bbd86e4802ada9027e2d933cc1",
        "message": "没权利访问业务",
        "data": null
    }
@apiError (Error) {dict} error 错误详情，api_spec为配置平台接口的错误信息
 */
