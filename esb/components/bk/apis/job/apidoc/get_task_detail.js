/**
@api {get} /api/c/compapi/job/get_task_detail/ get_task_detail
@apiName get_task_detail
@apiGroup API-JOB
@apiVersion 1.0.0
@apiDescription 查询作业模板详情
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {int} task_id 作业模板ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 2,
        "task_id": 192
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "account": "",
            "name": "demo演示",
            "creater": "2797261603",
            "stepNum": 0,
            "serverSetId": 0,
            "nmStepBeanList": [
                {
                    "ccScriptName": "",
                    "text": "",
                    "serverSetId": 0,
                    "stepId": 524,
                    "ipList": "1:10.105.34.6",
                    "serverSetName": "",
                    "ccScriptId": 0,
                    "fileSpeedLimit": 0,
                    "scriptTimeout": 1000,
                    "scriptParam": "",
                    "scriptContent": "xxx",
                    "lastModifyTime": "",
                    "fileSource": "",
                    "type": 1,
                    "scriptType": 4,
                    "lastModifyUser": "",
                    "blockName": "step1",
                    "paramType": 1,
                    "fileTargetPath": "",
                    "scriptId": 523,
                    "taskId": 195,
                    "appId": 46,
                    "isPause": 0,
                    "ord": 1,
                    "createTime": "2016-02-24 21:50:31",
                    "account": "root",
                    "name": "作业执行步骤1",
                    "companyId": 15,
                    "creater": "2797261603",
                    "ccScriptParam": "",
                    "blockOrd": 1
                },
            ],
            "lastModifyTime": "2016-02-26 16:15:43",
            "appId": 46,
            "id": 195,
            "ipList": "",
            "createTime": "2016-02-24 21:50:31",
            "lastModifyUser": "2797261603"
        },
    }
*/
