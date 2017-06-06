/**
@api {get} /api/c/compapi/bk_login/get_batch_user/ get_batch_user
@apiName get_batch_user
@apiGroup API-BK_LOGIN
@apiVersion 1.0.0
@apiDescription 获取多个用户信息
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParam {string} [username_list] 待获取信息的用户名列表
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "username_list": "admin;test"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "用户信息获取成功",
        "data": {
            "admin": {
                "username": "admin",
                "qq": "123123",
                "phone": "11111111111",
                "role": "1",
                "email": "11@qq.com",
                "chname": "admin"
            }
        }
    }
 */
