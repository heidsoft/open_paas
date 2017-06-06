#!/usr/bin/env python
# encoding: utf-8

from django.db import migrations


def load_data(apps, schema_editor):
    Resource = apps.get_model("resource", "Resource")

    Resource(name=u"Python",
             version="2.7.11",
             size="17.7MB",
             display=True,
             icon_url="/static/img/resource/python.png",
             doc_url=u"http://bbs.bk.tencent.com/forum.php?mod=viewthread&tid=163&extra=page%3D1",
             download_url="http://paas-10032816.cos.myqcloud.com/python-2.7.11.msi",
             ).save()

    Resource(name=u"Python资源包",
             version="1.0",
             size="19.8MB",
             display=True,
             icon_url="/static/img/resource/python-sdk.png",
             download_url="http://paas-10032816.cos.myqcloud.com/python-sdk-1.0.zip",
             ).save()

    Resource(name=u"Eclipse（含PyDev）",
             version="4.5.2",
             size="476MB",
             display=True,
             icon_url="/static/img/resource/eclipse-4.5.png",
             download_url="http://paas-10032816.cos.myqcloud.com/eclipse-4.5.2.zip",
             ).save()

    Resource(name=u"PyCharm",
             version="2016.3",
             size="170+M",
             display=True,
             icon_url="/static/img/resource/pycharm.jpeg",
             download_url="https://www.jetbrains.com/pycharm/download/",
             ).save()

    Resource(name=u"统一开发环境",
             version="1.0",
             size="781MB",
             display=True,
             icon_url="/static/img/resource/vagrant.jpg",
             doc_url=u"http://bbs.bk.tencent.com/forum.php?mod=viewthread&tid=162&extra=page%3D1",
             download_url="http://paas-10032816.cos.myqcloud.com/bk-qcloud-django1.8-u1.box",
             ).save()

    Resource(name=u"MySQL",
             version="5.6.28.0",
             size="263MB",
             display=True,
             icon_url="/static/img/resource/mysql.png",
             download_url="http://paas-10032816.cos.myqcloud.com/mysql-installer-community-5.6.28.0.msi",
             ).save()

    Resource(name=u"Rabbitmq",
             version="3.6.2",
             size="95.9MB",
             display=True,
             icon_url="/static/img/resource/rabbitmq.png",
             download_url="http://paas-10032816.cos.myqcloud.com/rabbitmq-server-3.6.2.zip",
             ).save()


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0002_data_insert_framework'),
    ]

    operations = [
        migrations.RunPython(load_data)
    ]
