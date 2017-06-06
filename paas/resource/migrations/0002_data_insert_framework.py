#!/usr/bin/env python
# encoding: utf-8

from django.db import migrations


def load_data(apps, schema_editor):
    Resource = apps.get_model("resource", "Resource")
    Resource(name=u"开发框架",
             version="--",
             size="740KB",
             display=True,
             icon_url="/static/img/resource/framework.png",
             download_url="/media/framework.tar.gz",
             ).save()


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_data)
    ]
