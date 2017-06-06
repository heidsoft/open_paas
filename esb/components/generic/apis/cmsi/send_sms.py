# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
import base64

from django import forms

from components.component import Component
from common.forms import BaseComponentForm, ListField, DefaultBooleanField
from .toolkit import configs, tools


class SendSms(Component):
    """
    @api {post} /api/c/compapi/cmsi/send_sms/ send_sms
    @apiName send_sms
    @apiGroup API-CMSI
    @apiVersion 1.0.0
    @apiDescription 发送短信
    @apiParam {string} app_code 应用标识，即应用 ID
    @apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
    @apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
    @apiParam {string} [username] 当前用户用户名，白名单中app可使用

    @apiParam {string} [receiver] 短信接收者，包含接收者电话号码，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准
    @apiParam {string} [receiver__username] 短信接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准
    @apiParam {string} content 短信内容
    @apiParam {bool} [is_content_base64] 消息内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码

    @apiParamExample {json} Request-Example:
        {
            "app_code": "esb_test",
            "app_secret": "xxx",
            "bk_token": "xxx",
            "reveiver": "1234567890",
            "receiver__username": "admin",
            "content": "<html>Welcome to Blueking</html>",
        }
    @apiSuccessExample {json} Success-Response
        HTTP/1.1 200 OK
        {
            "result": true,
            "code": "00",
            "message": "短信发送成功。",
        }
    """

    sys_name = configs.SYSTEM_NAME
    host = configs.host
    contact_way = 'phone'

    class Form(BaseComponentForm):
        receiver = ListField(label=u'短信接收人', required=False)
        receiver__username = ListField(label=u'短信接收人', required=False)
        content = forms.CharField(label=u'消息内容', required=True)
        is_content_base64 = DefaultBooleanField(label=u'内容是否base64编码', default=False, required=False)

        def clean(self):
            data = self.cleaned_data
            if data['receiver']:
                data['receiver__username'] = None
            if data['is_content_base64']:
                try:
                    data['content'] = base64.b64decode(data['content'])
                except:
                    pass
            return data

    def handle(self):
        data = self.request.kwargs
        if data['receiver']:
            tools.validate_receiver(data['receiver'], contact_way=self.contact_way)
        if data['receiver__username']:
            user_data = tools.get_receiver_with_username(
                receiver__username=data['receiver__username'],
                contact_way=self.contact_way
            )
            data.update(user_data)

        # TODO: need to be updated
        result = self.invoke_other('generic.xxx.send_sms', kwargs=data)
        if result['result'] and data.get('_extra_user_error_msg'):
            result = {
                'result': False,
                'message': u'部分用户短信发送失败。%s' % data['_extra_user_error_msg']
            }

        self.response.payload = result
