# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
from common.errors import CommonAPIError


def valid_email(email):
    if not isinstance(email, basestring) or email.find('@') < 0:
        return False
    return True


def valid_phone(phone):
    if not isinstance(phone, (basestring, int)) or not str(phone).isdigit():
        return False
    return True


def get_user_contact(user, contact_way):
    if contact_way == 'email':
        contact_info = user['email']
        return contact_info, valid_email(contact_info)
    elif contact_way == 'phone':
        contact_info = user['phone']
        return contact_info, valid_phone(contact_info)


def validate_receiver(receiver, contact_way='phone'):
    valid_receiver = []
    error_contact_user = []
    for user_contact in receiver:
        if contact_way == 'email':
            is_valid = valid_email(user_contact)
        elif contact_way == 'phone':
            is_valid = valid_phone(user_contact)
        if is_valid:
            valid_receiver.append(user_contact)
        else:
            error_contact_user.append(user_contact)
    if error_contact_user:
        raise CommonAPIError(u'用户消息发送失败。以下用户联系方式格式错误：%s，请进行检查' % ','.join(error_contact_user))
    return valid_receiver


def get_receiver_with_username(receiver__username=None,
                               cc__username=None,
                               contact_way='phone'):
    username_list = []
    if receiver__username:
        username_list.extend(receiver__username)
    if cc__username:
        username_list.extend(cc__username)

    if not username_list:
        return {}

    from components.bk.apis.bk_login.get_batch_user import GetBatchUser
    user_result = GetBatchUser().invoke(kwargs={'username_list': username_list})
    if not user_result['result']:
        raise CommonAPIError(u'根据用户名批量获取用户联系方式失败，%s' % user_result['message'])

    result = {}
    not_exist_user = []
    error_contact_user = []
    user_data = user_result['data']
    if receiver__username:
        result['receiver'] = []
        for username in receiver__username:
            user = user_data.get(username)
            if not user:
                not_exist_user.append(username)
                continue
            user_contact, is_valid = get_user_contact(user, contact_way)
            if is_valid:
                result['receiver'].append(user_contact)
            else:
                error_contact_user.append(username)

    if cc__username:
        result['cc'] = []
        for username in cc__username:
            user = user_data.get(username)
            if not user:
                not_exist_user.append(username)
                continue
            user_contact, is_valid = get_user_contact(user, contact_way)
            if is_valid:
                result['cc'].append(user_contact)
            else:
                error_contact_user.append(username)

    _extra_user_error_msg = []
    if not_exist_user:
        _extra_user_error_msg.append(u'以下用户不是蓝鲸用户：%s' % ','.join(not_exist_user))
    if error_contact_user:
        _extra_user_error_msg.append(u'以下用户联系方式格式错误：%s' % ','.join(error_contact_user))
    result['_extra_user_error_msg'] = ';'.join(_extra_user_error_msg)

    if receiver__username and not result.get('receiver'):
        raise CommonAPIError(u'全部用户消息发送失败。%s' % result['_extra_user_error_msg'])

    return result
