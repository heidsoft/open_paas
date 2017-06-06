## 蓝鲸智云ESB

### 1. 使用当前组件

根据需要，更新配置文件，设置第三方系统服务地址

配置文件位置：`configs/default.py`

```
# 登录系统
HOST_BK_LOGIN="xxx"

# 配置系统
HOST_CC="xxx"

# 开启作业平台 API SSL验证，默认为True, 注意需要同步升级作业平台
JOB_SSL = True
# JOB客户端证书，路径为{{ SSL_ROOT_DIR }}job_api_client.crt
JOB_CLIENT_CERT = "xxx"
# JOB客户端私钥，路径为{{ SSL_ROOT_DIR }}job_api_client.key
JOB_CLIENT_KEY = "xxx"
```

### 2. 开发新组件

以系统 my_app，组件 get_hello_msg 为例，说明新组件开发过程

```
a. 在"components/generic/apis/"下创建系统对应的包: my_app

b. 在my_app下创建包toolkit，在tookit下创建模块configs.py

c. 在configs.py中设置组件系统名，及第三方系统地址
    SYSTEM_NAME="MY_APP"
    host=SmartHost(host_prod="system_domain_address")

d. 在my_app下创建组件模块：get_hello_msg.py，并在组件模块中创建组件类，
    新组件继承组件基类"components.component.Component"，新组件类名为
    组件模块名的驼峰写法，get_hello_msg对应为GetHelloMsg；配置组件类
    属性sys_name=configs.SYSTEM_NAME，并覆盖基类的handle方法，实现
    组件功能

    from components.component import Component
    from .toolkit import configs

    class GetHelloMsg(Component):
        sys_name = configs.SYSTEM_NAME

        def handle(self):
            result = self.outgoing.http_client.get(
                configs.host,
                '/xxx/xxx/',
                params=self.request.kwargs,
            )
            self.response.payload = result

e. 将新组件配置到components/esb_conf.py中的"config.channel_groups.default.preset_channels"中，如
    ('/my_app/get_hello_msg/', {'comp_codename': 'generic.my_app.get_hello_msg'})

f. 重启服务，即可通过以下地址访问新组件
    http://xxx.xxx.xxx/api/c/compapi/my_app/get_hello_msg/

```

### 3. 配置用户登录态验证白名单

访问组件，默认验证用户登录态，如果允许部分APP不验证，可在admin中设置白名单

位置：Bkcore/Function controllers

```
功能code: user_auth::skip_user_auth
是否开启功能: 是
功能测试白名单: APP_CODE，多个以逗号分隔

```
