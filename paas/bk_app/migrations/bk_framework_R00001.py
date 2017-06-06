
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import migrations
from bk_app.utils import init_saas_app_db_info

CURRENT_INFO = {'config': {'is_use_celery': True, 'date': '2017-05-03 15:39:08', 'yums': [], 'version': '1.0.0', 'app_name': u'\u5f00\u53d1\u6846\u67b6', 'language': 'python', 'author': u'\u84dd\u9cb8\u667a\u4e91', 'introduction': u'\u201c\u5f00\u53d1\u6846\u67b6\u201d\u662f\u84dd\u9cb8\u667a\u4e91\u56e2\u961f\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u57fa\u4e8e\u6b64\u6846\u67b6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5feb\u901f\u4e0a\u624b\uff0c\u5229\u7528\u84dd\u9cb8\u667a\u4e91\u96c6\u6210\u5e73\u53f0\uff08PaaS\uff09\u63d0\u4f9b\u7684\u8c03\u5ea6\u5f15\u64ce\u3001\u516c\u5171\u7ec4\u4ef6\u7b49\u6a21\u5757\uff0c\u6784\u5efa\u4f4e\u6210\u672c\u3001\u514d\u8fd0\u7ef4\u7684\u652f\u6491\u5de5\u5177\u548c\u8fd0\u8425\u7cfb\u7edf\u3002', 'app_code': 'bk_framework', 'libraries': []}, 'app_id': 'bk_framework', 'file': {'md5': '67e002e82e0dca7e0ca61e8c804a1958', 'name': 'bk_framework_R00001.tar.gz', 'file': 'saas_files/bk_framework_R00001.tar.gz', 'size': 874555}}


def init_app_info(apps, schema_editor):
    app_id = CURRENT_INFO.get("bk_framework")
    config = CURRENT_INFO.get("config")
    file = CURRENT_INFO.get("file")
    init_saas_app_db_info(app_id, config, file)


class Migration(migrations.Migration):

    dependencies = [
        ('bk_app', '0001_load_bkapps_intial_data'),
    ]

    operations = [
        migrations.RunPython(init_app_info),
    ]
