# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
import base64

from django import forms

from components.component import Component
from common.forms import BaseComponentForm, ListField, DefaultBooleanField
from .toolkit import configs, tools


class SendMail(Component):
    """
    @api {post} /api/c/compapi/cmsi/send_mail/ send_mail
    @apiName send_mail
    @apiGroup API-CMSI
    @apiVersion 1.0.0
    @apiDescription 发送邮件
    @apiParam {string} app_code 应用标识，即应用 ID
    @apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
    @apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
    @apiParam {string} [username] 当前用户用户名，白名单中app可使用

    @apiParam {string} [receiver] 邮件接收者，包含邮件完整地址，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准
    @apiParam {string} [receiver__username] 邮件接收者，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若receiver、receiver__username同时存在，以receiver为准
    @apiParam {string} [sender] 发件人
    @apiParam {string} title 邮件主题
    @apiParam {string} content 邮件内容
    @apiParam {string} [cc] 抄送人，包含邮件完整地址，多个以逗号分隔
    @apiParam {string} [cc__username] 抄送人，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若cc、cc__username同时存在，以cc为准
    @apiParam {string} [body_format] 邮件格式，包含'Html', 'Text'，默认为'Html'
    @apiParam {bool} [is_content_base64] 邮件内容是否base64编码，默认False，不编码，请使用base64.b64encode方法编码

    @apiParamExample {json} Request-Example:
        {
            "app_code": "esb_test",
            "app_secret": "xxx",
            "bk_token": "xxx",
            "reveiver": "admin@tencent.com",
            "sender": "admin@tencent.com",
            "title": "This is a Test",
            "content": "<html>Welcome to Blueking</html>",
        }
    @apiSuccessExample {json} Success-Response
        HTTP/1.1 200 OK
        {
            "result": true,
            "code": "00",
            "message": "邮件发送成功。",
        }
    """

    sys_name = configs.SYSTEM_NAME
    host = configs.host
    contact_way = 'email'

    class Form(BaseComponentForm):
        sender = forms.CharField(label=u'发件人', required=False)
        receiver = ListField(label=u'邮件接收人', required=False)
        receiver__username = ListField(label=u'邮件接收人', required=False)
        cc = ListField(label=u'抄送人', required=False)
        cc__username = ListField(label=u'抄送人', required=False)
        content = forms.CharField(label=u'邮件内容', required=True)
        is_content_base64 = DefaultBooleanField(label=u'内容是否base64编码', default=False, required=False)

        def clean(self):
            data = self.cleaned_data
            if not(data['receiver'] or data['receiver__username']):
                raise forms.ValidationError(u'邮件接收人[receiver、receiver__username]不能同时为空。')
            if data['receiver']:
                data['receiver__username'] = None
            if data['cc']:
                data['cc__username'] = None
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
        if data['cc']:
            tools.validate_receiver(data['cc'], contact_way=self.contact_way)
        if data['receiver__username'] or data['cc__username']:
            user_data = tools.get_receiver_with_username(
                receiver__username=data['receiver__username'],
                cc__username=data['cc__username'],
                contact_way=self.contact_way
            )
            data.update(user_data)

        # TODO: need to be updated
        result = self.invoke_other('generic.xxx.send_mail', kwargs=data)
        if result['result'] and data.get('_extra_user_error_msg'):
            result = {
                'result': False,
                'message': u'部分用户邮件发送失败。%s' % data['_extra_user_error_msg']
            }

        self.response.payload = result
