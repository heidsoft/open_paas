# -*- coding: utf-8 -*-
"""
测试环境配置
"""

DEBUG = True

# use the static root 'static' in production envs
if not DEBUG:
    STATIC_ROOT = 'static'

# 数据库配置信息
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'open_paas',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}

# 初始化用户名、密码
USERNAME = 'admin'
PASSWORD = 'admin'

# domain
PAAS_DOMAIN = 'bking.com'

# cookie 名称
BK_COOKIE_NAME = 'bk_token'
# cookie有效期
BK_COOKIE_AGE = 60 * 60 * 24
# cookie访问域
BK_COOKIE_DOMAIN = '.bking.com'

# 控制台地址
ENGINE_HOST = "http://127.0.0.1:8000"
# 登陆服务地址
LOGIN_HOST = "http://127.0.0.1:8003"

# host for cc
HOST_CC = ''
# host for job
HOST_JOB = ''
# host for DATA，数据平台监控告警系统
HOST_DATA = ''
# host for gse
HOST_GSE = ''

SECRET_KEY = 'XEz7VLlQNdIq9iFl1t6LtWobQEcG4ayoPa2esHwatkHZxiuDf0'

# ESB Token
ESB_TOKEN = '41f076b7-afce-46eb-9e85-dab245eb0931'
