# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
from components.component import Component
from common.forms import BaseComponentForm, ListField
from .toolkit import configs


class SendQyWeixin(Component):
    """
    @api {post} /api/c/compapi/cmsi/send_qy_weixin/ send_qy_weixin
    @apiName send_qy_weixin
    @apiGroup API-CMSI
    @apiVersion 1.0.0
    @apiDescription 发送企业微信
    @apiParam {string} app_code 应用标识，即应用 ID
    @apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
    @apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
    @apiParam {string} [username] 当前用户用户名，白名单中app可使用

    @apiParam {string} receiver__username 微信接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔
    @apiParam {string} content 消息内容，长度最长为2048字符
    @apiParam {bool} [is_content_base64] 消息内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码

    @apiParamExample {json} Request-Example:
        {
            "app_code": "esb_test",
            "app_secret": "xxx",
            "bk_token": "xxx",
            "receiver__username": "admin",
            "content": "This is a Test",
        }
    @apiSuccessExample {json} Success-Response
        HTTP/1.1 200 OK
        {
            "result": true,
            "code": "00",
            "message": "微信发送成功。",
        }
    """

    sys_name = configs.SYSTEM_NAME
    host = configs.host

    class Form(BaseComponentForm):
        receiver__username = ListField(label=u'微信接收人', required=True)

        def clean(self):
            data = self.cleaned_data
            return data

    def handle(self):
        self.response.payload = {'result': False, 'message': u'未完成接口，需要负责人进行完善'}
