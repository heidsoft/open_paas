# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
from django import forms

from components.component import Component
from common.forms import BaseComponentForm, TypeCheckField, ListField
from .toolkit import configs


class NocNotice(Component):
    """
    @api {post} /api/c/compapi/cmsi/noc_notice/ noc_notice
    @apiName noc_notice
    @apiGroup API-CMSI
    @apiVersion 1.0.0
    @apiDescription 公共语音通知
    @apiParam {string} app_code 应用标识，即应用 ID
    @apiParam {string} app_secret 应用私密 key，即应用 APP_TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
    @apiParam {string} [bk_token] 当前用户登录态，bk_token与username必须一个有效，bk_token可以通过Cookie获取
    @apiParam {string} [username] 当前用户用户名，白名单中app可使用

    @apiParam {string} auto_read_message 自动语音读字信息
    @apiParam {array} [user_list_information] 待通知的用户列表，自动语音通知列表，若user_list_information、receiver__username同时存在，以user_list_information为准
    @apiParam {string} [receiver__username] 待通知的用户列表，包含用户名，用户需在蓝鲸平台注册，多个以逗号分隔，若user_list_information、receiver__username同时存在，以user_list_information为准

    @apiParam (user_list_information) {string} username 被通知人
    @apiParam (user_list_information) {string} [mobile_phone] 被通知人手机号

    @apiParamExample {json} Request-Example:
        {
            "app_code": "esb_test",
            "app_secret": "xxx",
            "bk_token": "xxx",
            "auto_read_message": "This is a test",
            "user_list_information": [{
                "username": "admin",
                "mobile_phone": "1234567890",
            }]
        }
    @apiSuccessExample {json} Success-Response
        HTTP/1.1 200 OK
        {
            "result": true,
            "code": "00",
            "message": "",
            "data": {
                "taskInstanceName": "Test",
                "taskInstanceId": 168231
            }
        }
    """

    sys_name = configs.SYSTEM_NAME
    host = configs.host

    class Form(BaseComponentForm):
        auto_read_message = forms.CharField(label=u'自动语音读字信息', required=True)
        user_list_information = TypeCheckField(label=u'用户列表', promise_type=list, required=False)
        receiver__username = ListField(label=u'蓝鲸用户列表', required=False)

        def clean(self):
            data = self.cleaned_data
            user_list_information = [
                NocNotice.UserListInfoForm(user_info).get_cleaned_data_or_error()
                for user_info in data['user_list_information']
                if user_info
            ]
            if not (data.get('receiver__username') or user_list_information):
                raise forms.ValidationError(u'参数[user_list_information、receiver__username]不能同时为空')
            data['user_list_information'] = user_list_information
            return data

    class UserListInfoForm(BaseComponentForm):
        username = forms.CharField(label=u'被通知人', required=True)
        mobile_phone = forms.CharField(label=u'被通知人手机号', required=False)

        def clean(self):
            data = self.cleaned_data
            if data['mobile_phone'] and not data['mobile_phone'].isdigit():
                raise forms.ValidationError(u'被通知人手机号[mobile_phone]必须是一个数字。')
            return data

    def handle(self):
        self.response.payload = {'result': False, 'message': u'未完成接口，需要负责人进行完善'}
