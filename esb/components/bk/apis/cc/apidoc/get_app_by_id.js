/*
@api {get} /api/c/compapi/cc/get_app_by_id/ get_app_by_id
@apiName get_app_by_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 查询业务信息
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {int} app_id 业务ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 516
    }

@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": [
            {
                "ApplicationName": "九龙战台湾版",
                "GroupName": "",
                "Description": "",
                "BusinessDeptName": "",
                "Creator": "247303277",
                "Default": "0",
                "ApplicationID": "516",
                "DeptName": "247303277",
                "CompanyID": "6",
                "LifeCycle": "内测",
                "Source": "qcloud",
                "Maintainers": "330166165;327358176;247303277;454510899;407696546",
                "CreateTime": "2015-11-17 17:12:14",
                "ProjectID": "0",
                "Owner": "247303277",
                "ProductPm": "247303277",
                "Level": "3",
                "LastTime": "2016-02-16 10:27:39",
                "Type": "1",
                "Display": "1"
            }
        ]
    }

@apiErrorExample {json} Error-Response:
    HTTP/1.1 200 OK
    {
        "code": "50000",
        "error": {
            "error_data": {
                "api_spec": {
                }
            }
        },
        "result": false,
        "message": "没权利访问业务",
        "data": null
    }
 */
