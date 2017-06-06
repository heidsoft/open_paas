# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from bk_app.utils import init_saas_app_db_info
from bk_app.constants import SAAS_LIST


def init_saas_app_info(apps, schema_editor):
    for saas_info in  SAAS_LIST:
        app_id = saas_info.get("app_id")
        config = saas_info.get("config")
        file = saas_info.get("file")
        init_saas_app_db_info(app_id, config, file)


class Migration(migrations.Migration):

    dependencies = [
        ('saas', '0006_auto_20161111_1827'),
    ]

    operations = [
        migrations.RunPython(init_saas_app_info),
    ]
