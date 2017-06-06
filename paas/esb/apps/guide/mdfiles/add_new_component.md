# 组件开发

组件开发，是通过开发组件模块代码，注册通道，提供组件服务。以如下接口为例，详细介绍如何开发新组件。

`注：适用于需要编码具体业务逻辑的组件`

- 系统名称：主机配置平台 HCP
- 接口名称：查询主机列表 get_host_list
- 接口地址：http://hcp.domain.com/hcp/get_host_list/

## 添加系统

[添加一个新的系统](/esb/manager/system/add/){:target="_blank"}，系统信息中填入以下内容：

- 系统名称：HCP
- 系统标签：主机配置平台

## 创建系统及组件文件
在ESB项目的components/generic/apis/下，按照下面结构创建目录及文件(模版[下载](/static/esb/guide/hcp.tar.gz))：
```
components/generic/apis/
|
|-- hcp
|   |-- __init__.py
|   |-- toolkit
|   |   |-- __init__.py
|   |   |-- configs.py
|   |   |-- tools.py
|   |-- get_host_list.py

```
- hcp 为系统包，包名为系统名称小写
- hcp/toolkit 为系统工具包，存储系统配置及共用方法
- hcp/toolkit/configs.py 为系统配置模块，配置系统名称、系统域名地址等
- hcp/toolkit/tools.py 为系统共用方法模块
- hcp/get_host_list.py 为"查询主机列表"组件模块

## 组件配置中添加系统信息
在"components/generic/apis/hcp/toolkit/configs.py"中添加系统配置，样例如下：
```python
# -*- coding: utf-8 -*-
from esb.utils import SmartHost


# 系统名的小写形式要与系统包名保持一致
SYSTEM_NAME = 'HCP'

host = SmartHost(
    # 需要填入系统正式环境的域名地址
    host_prod='hcp.domain.com',
)
```

## 开发组件模块
在"components/generic/apis/hcp/get_host_list.py"中添加组件代码，样例如下：
```python
# -*- coding: utf-8 -*-
import json

from django import forms

from common.forms import BaseComponentForm
from components.component import Component
from .toolkit import configs


class GetHostList(Component):
    """
    @api {get} /api/c/compapi/hcp/get_host_list/ get_host_list
    @apiName get_host_list
    @apiGroup API-HCP
    @apiVersion 1.0.0
    @apiDescription 查询主机列表

    @apiParam {string} app_code app标识
    @apiParam {string} app_secret app密钥
    @apiParam {string} bk_token 当前用户登录态

    @apiParam {int} app_id 业务ID
    @apiParam {array} [ip_list] 主机IP地址，包含 ip 和 plat_id；其中，plat_id表示子网ID

    @apiParamExample {json} Request-Example:
        {
            "app_code": "esb_test",
            "app_secret": "xxx",
            "bk_token": "xxx-xxx-xxx-xxx-xxx",
            "app_id": 1,
            "ip_list": [
                {
                    "ip": "127.0.0.1",
                    "plat_id": 1,
                },
                {
                    "ip": "127.0.0.2"
                    "plat_id": 1,
                }
            ]
        }
    @apiSuccessExample {json} Success-Response
        HTTP/1.1 200 OK
        {
            "result": true,
            "code": "00",
            "message": "",
            "data": [
                {
                    "inner_ip": "127.0.0.1",
                    "plat_id": 1,
                    "host_name": "db-1",
                    "maintainer": "admin",
                },
                {
                    "inner_ip": "127.0.0.2",
                    "plat_id": 1,
                    "host_name": "db-2",
                    "maintainer": "admin",
                }
            ],
        }
    """

    # 组件所属系统的系统名
    sys_name = configs.SYSTEM_NAME

    # Form处理参数校验
    class Form(BaseComponentForm):
        app_id = forms.CharField(label=u'业务ID', required=True)

        # clean方法返回的数据可通过组件的form_data属性获取
        def clean(self):
            data = self.cleaned_data
            return {
                'ApplicatioNID': data['app_id'],
            }

    # 组件处理入口
    def handle(self):
        # 获取Form clean处理后的数据
        data = self.form_data

        # 设置当前操作者
        data['operator'] = self.current_user.username

        # 请求系统接口
        response = self.outgoing.http_client.post(
            host=configs.host,
            path='/hcp/get_host_list/',
            data=json.dumps(data),
        )

        # 对结果进行解析
        code = str(response['code'])
        if code == '0':
            result = {
                'result': True,
                'data': response['data'],
            }
        else:
            result = {
                'result': False,
                'message': result['extmsg']
            }

        # 设置组件返回结果，payload为组件实际返回结果
        self.response.payload = result
```

注意：

- 组件类名，为组件模块名去掉下划线(_)，并转为驼峰形式，如get_host_list组件类名应为GetHostList
- 组件开头部分为组件文档，通过下面指令可更新文档，[组件文档地址](/doc/index.html){:target="_blank"}，组件使用的[文档生成工具](http://apidocjs.com/){:target="_blank"}

```powershell
# proj_base_dir 默认为安装open_paas时的项目根路径: /data/paas/open_paas/
cd $proj_base_dir/src
# `-c`指定配置文件的路径 `-o`指定输出到的路径
apidoc -c paas/static/doc/ -o paas/static/doc/
```

## 注册组件通道
组件模块开发完成后，[注册组件通道](/esb/manager/channel/add/){:target="_blank"}，通道信息中填入内容如下：

- 通道名称：[HCP] 查询服务列表
- 通道路径：/hcp/get_host_list/
- 所属组件系统：选择 HCP 系统
- 对应组件代号：generic.hcp.get_host_list

## 重启服务
组件添加完成后，重启ESB服务，重启步骤如下:
```powershell
# proj_base_dir 默认为安装open_paas时的项目根路径: /data/paas/open_paas/
cd $proj_base_dir
./bin/dashboard.sh restart esb
```

新组件的访问地址为：
```python
http://xxx.domain.com/api/c/compapi/hcp/get_host_list/
```
