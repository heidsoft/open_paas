# -*- coding: utf-8 -*-

"""
Django settings for paas project.

Generated by 'django-admin startproject' using Django 1.8.3.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import sys
from django.utils.functional import SimpleLazyObject

try:
    import pymysql
    pymysql.install_as_MySQLdb()
except:
    pass

PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT, PROJECT_MODULE_NAME = os.path.split(PROJECT_PATH)
BASE_DIR = os.path.dirname(os.path.dirname(PROJECT_PATH))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'o7(025idh*fj@)ohujum-ilfxl^n=@d&$xz!_$$7s$8jopd5r#'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

CSRF_COOKIE_NAME = 'bklogin_csrftoken'

# Application definition
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'bkaccount',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'bkaccount.middlewares.LoginMiddleware',
)

ROOT_URLCONF = 'urls'

# mako template dir
MAKO_TEMPLATE_DIR = os.path.join(PROJECT_ROOT, 'templates')
MAKO_TEMPLATE_MODULE_DIR = os.path.join(PROJECT_ROOT, 'templates_module')


TEMPLATE_CONTEXT_PROCESSORS = (
    'django.template.context_processors.debug',
    'django.core.context_processors.request',
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.csrf',
    'common.context_processors.site_settings',
    'django.core.context_processors.i18n',
    'django.contrib.messages.context_processors.messages',
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # django template dir
        'DIRS': (
            # 绝对路径，比如"/home/html/django_templates" or "C:/www/django/templates".
            os.path.join(PROJECT_ROOT, 'templates'),
        ),
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': list(TEMPLATE_CONTEXT_PROCESSORS),
        },
    },
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/
SITE_URL = '/login/'

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(PROJECT_ROOT, 'static'),
)

STATIC_VERSION = '0.0.4'

# CSS 文件后缀名
CSS_SUFFIX = 'min.css'
# JS 文件后缀名
JS_SUFFIX = 'min.js'

# CSRF 验证失败处理函数
CSRF_FAILURE_VIEW = 'bkaccount.views.csrf_failure'

##################
# AUTHENTICATION #
##################
LOGIN_URL = SimpleLazyObject(lambda: getattr(getattr(sys.modules['django.conf'], 'settings'), 'SITE_URL'))

LOGOUT_URL = SimpleLazyObject(lambda: '%slogout/' % getattr(getattr(sys.modules['django.conf'], 'settings'), 'SITE_URL'))

AUTH_USER_MODEL = 'bkaccount.BkUser'

AUTHENTICATION_BACKENDS = ('bkaccount.backends.BkBackend', 'django.contrib.auth.backends.ModelBackend')


WSGI_APPLICATION = 'wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/
LANGUAGE_CODE = 'zh-CN'
TIME_ZONE = 'Asia/Shanghai'
USE_I18N = True
USE_L10N = True

# cookie名称
BK_COOKIE_NAME = 'bk_token'
# cookie 有效期，默认为1天
BK_COOKIE_AGE = 60 * 60 * 24

# APP_ENGINE 状态查询超时时间
EVENT_STATE_EXPIRE_SECONDS = 180
HISTORY_EVENT_STATE_EXPIRE_SECONDS = 1800

##################
# 初始化用户信息 #
##################
USERNAME = 'admin'
PASSWORD = 'blueking'

# logging config
LOGGER_LEVEL = 'DEBUG'

LOGGING_DIR = os.path.join(os.path.dirname(BASE_DIR), 'logs')
if not os.path.exists(LOGGING_DIR):
    os.mkdir(LOGGING_DIR)

LOG_CLASS = 'logging.handlers.RotatingFileHandler'
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format':
            '%(levelname)s [%(asctime)s] %(pathname)s %(lineno)d %(funcName)s %(process)d %(thread)d \n \t %(message)s \n',
            'datefmt': '%Y-%m-%d %H:%M:%S'
        },
        'simple': {
            'format': '%(levelname)s %(message)s \n'
        },
    },
    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'django.utils.log.NullHandler',
        },
        'mail_admins': {
            'level': 'ERROR', 'class': 'django.utils.log.AdminEmailHandler'
        },
        'console': {
            'level': 'DEBUG', 'class': 'logging.StreamHandler', 'formatter':
            'simple'
        },
        'root': {
            'class': LOG_CLASS, 'formatter': 'verbose', 'filename':
            os.path.join(LOGGING_DIR, 'login.log'), 'maxBytes': 1024 * 1024 * 4, 'backupCount': 5
        },
        'wb_mysql': {
            'class': LOG_CLASS, 'formatter': 'verbose', 'filename':
            os.path.join(LOGGING_DIR, 'login_mysql.log'), 'maxBytes': 1024 * 1024 * 4, 'backupCount': 5
        },
    },
    'loggers': {
        'django': {
            'handlers': ['null'],
            'level': 'ERROR',
            'propagate': True,
        },
        'django.request': {
            'handlers': ['console'],
            'level': 'ERROR',
            'propagate': True,
        },
        'root': {
            'handlers': ['root'],
            'level': LOGGER_LEVEL,
            'propagate': True,
        },
        'django.db.backends': {
            'handlers': ['wb_mysql'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}
