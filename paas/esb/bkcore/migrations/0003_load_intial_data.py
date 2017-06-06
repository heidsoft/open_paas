# -*- coding: utf-8 -*-
"""
Copyright © 2012-2017 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
"""
from __future__ import unicode_literals

from django.db import migrations

from esb.bkcore.constants import SYSTEMS, SYSTEM_CHANNELS, FUNCTION_CONTROLLERS


def init_system_channels(apps, schema_editor):
    ComponentSystem = apps.get_model('bkcore', 'ComponentSystem')
    ESBChannel = apps.get_model('bkcore', 'ESBChannel')

    # init system
    for system in SYSTEMS:
        name = system.pop('name')
        ComponentSystem.objects.get_or_create(name=name, defaults=system)

    # init channels
    for system_name, channels in SYSTEM_CHANNELS.iteritems():
        system = ComponentSystem.objects.get(name=system_name)
        for channel in channels:
            path = channel.pop('path')
            channel['component_system'] = system
            ESBChannel.objects.get_or_create(path=path, defaults=channel)


def init_function_controller(apps, schema_editor):
    FunctionController = apps.get_model('bkcore', 'FunctionController')
    for func_ctl in FUNCTION_CONTROLLERS:
        func_code = func_ctl.pop('func_code')
        FunctionController.objects.get_or_create(func_code=func_code, defaults=func_ctl)


class Migration(migrations.Migration):

    dependencies = [
        ('bkcore', '0002_auto_20160712_2041'),
    ]

    operations = [
        migrations.RunPython(init_system_channels),
        migrations.RunPython(init_function_controller),
    ]
