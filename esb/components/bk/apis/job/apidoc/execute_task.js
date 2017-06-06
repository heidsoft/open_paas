/**
@api {post} /api/c/compapi/job/execute_task/ execute_task
@apiName execute_task
@apiGroup API-JOB
@apiVersion 1.0.0
@apiDescription 根据作业模板ID启动作业
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {int} task_id 作业ID
@apiParam {array} steps 步骤参数，每项的具体参数见下面描述

@apiParam (steps) {int} [scriptTimeout] 脚本超时时间
@apiParam (steps) {string} [scriptParam] 脚本参数
@apiParam (steps) {int} [serverSetId] 服务器集群ID
@apiParam (steps) {int} [scriptId] 脚本ID
@apiParam (steps) {int} stepId 步骤ID，可以只指定某几步执行
@apiParam (steps) {string} [ipList] IP列表格式：子网ID:IP，多个之间逗号，分割，例如：1:10.105.34.6,1:10.237.226.14
@apiParam (steps) {string} [account] 执行账户账户名
@apiParam (steps) {string} [fileTargetPath] 目标路径
@apiParam (steps) {array} [fileSource] 源文件信息，整个参数替换，不支持内部某个变量替换。格式参考下面说明

@apiParam (fileSource) {string} file 源文件路径，如：/tmp/t.txt
@apiParam (fileSource) {string} [ipList] 源文件服务器地址，格式为：子网ID:IP，多个之间逗号分割，和serverSetId二选一。如果都存在，以serverSetId为准
@apiParam (fileSource) {string} [serverSetId] 源文件服务器分组ID，和ipList二选一。如果都存在，以serverSetId为准
@apiParam (fileSource) {string} account 源文件机器执行账户账户名

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": "46",
        "task_id": "195",
        "steps": [{
            "scriptTimeout": 1000,
            "scriptParam": "-a",
            "serverSetId": 0,
            "ipList": "1:10.105.34.6,1:10.237.226.14",
            "scriptId": 203,
            "stepId": 244,
            "account": "root",
        },
        {
            "fileTargetPath": "/tmp/[FILESRCIP]/",
            "fileSource": [{
                "file": "/tmp/t.txt",
                "ipList": "1:10.104.33.10,1:10.104.33.11",
                "account": "root",
                "serverSetId": "0"
            }],
            "serverSetId": 0,
            "ipList": "1:10.105.34.6,1:10.237.226.14",
            "stepId": 246,
            "account": "root",
        }]
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "taskInstanceName": "sundy测试",
            "taskInstanceId": 168231
        }
    }
*/
