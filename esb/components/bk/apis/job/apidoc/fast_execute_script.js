/**
@api {post} /api/c/compapi/job/fast_execute_script/ fast_execute_script
@apiName fast_execute_script
@apiGroup API-JOB
@apiVersion 1.0.0
@apiDescription 快速执行脚本
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {int} app_id 业务ID
@apiParam {string} content 执行脚本步骤的脚本内容，base64编码后的内容
@apiParam {int} [script_timeout] 脚本执行超时时间，范围60~3600，默认1000
@apiParam {string} [script_param] 脚本执行参数
@apiParam {int} type 脚本类型：1(shell脚本)、2(bat脚本)、3(perl脚本)、4(python脚本)、5(Powershell脚本)
@apiParam {array} [ip_list] 目标机器，包含以下内容：
@apiParam {int} [server_set_id] 目标机器分组ID；server_set_id和ip_list至少一个必须存在，如果同时存在，则以server_set_id为准
@apiParam {string} account 目标机器账户名
@apiParam {int} is_param_sensitive 是否敏感参数: 1是, 0不是(默认为0)

@apiParam (ip_list) {string} ip IP地址
@apiParam (ip_list) {int} source 子网ID
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "app_id": 46,
        "content": "xxx",
        "ip_list": [
            {
                "ip": "10.105.24.85",
                "source": 1
            }
        ],
        "type": 1,
        "account": "root",
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": {
            "taskInstanceName": "API执行脚本1456715609220",
            "taskInstanceId": 174770
        },
    }
*/
