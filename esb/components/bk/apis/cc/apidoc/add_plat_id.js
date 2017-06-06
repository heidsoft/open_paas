/**
@api {post} /api/c/compapi/cc/add_plat_id/ add_plat_id
@apiName add_plat_id
@apiGroup API-CC
@apiVersion 1.0.0
@apiDescription 新增子网ID
@apiParam {string} app_code 应用标识，即应用 ID
@apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用

@apiParam {string} plat_name 子网名称

@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
        "plat_name": "test_plat"
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "",
        "data": 2,
    }
@apiSuccess {Boolean} result 包含True和False，其中True表示成功，False表示失败
@apiSuccess {String} code 返回错误码，其中"00"表示成功，其它表示失败
@apiSuccess {Object} data 返回数据，成功返回请求数据
@apiSuccess {String} message 返回错误消息
 */
