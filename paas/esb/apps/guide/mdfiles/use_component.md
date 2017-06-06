# 组件调用说明

请求组件时，需提供APP应用认证信息和用户认证信息，用以组件对APP应用和当前用户进行认证。

## APP应用认证
使用组件前，需先根据[已有应用](/app/list/){:target="_blank"}或[创建一个应用](/app/create/){:target="_blank"}，获取应用ID和应用TOKEN，作为应用认证信息。

- **应用ID**: 应用唯一标识，创建应用时由创建者指定，可在应用基本信息中通过**APP_ID**获取
- **应用TOKEN**: 应用密钥，创建应用后由平台生成，可在应用基本信息中通过**APP_TOKEN**获取

## 用户认证
用户认证，通过验证用户登录态实现。用户登录态bk_token，在用户登录后，存储在浏览器的Cookies中。

调用组件时，若无法提供用户登录态，可将应用ID添加到**应用免登录态验证白名单**中，则此应用请求组件时，提供当前用户的username即可。

- functioncontroller: [通用白名单管理](/admin/bkcore/functioncontroller/){:target="_blank"}，通过指定不同的功能code，维护不同的白名单
- user_auth::skip_user_auth: "应用免登录态验证白名单" 功能code，添加此功能code，然后将应用ID添加到"功能测试白名单"中

## 组件调用

调用组件主要有两种方式，一种是使用APP开发框架中提供的组件包，一种是根据组件地址直接访问。

### 利用APP开发框架中的组件包访问组件

使用组件包访问组件有两种方式，shortcuts或ComponentClient。使用示例如下：

- shortcuts -- get_client_by_request
```python

    from blueking.component.shortcuts import get_client_by_request
    # 默认从django settings中获取APP认证信息：应用ID和应用TOKEN
    # 默认从django request中获取用户登录态bk_token
    client = get_client_by_request(request)
    # 组件参数
    kwargs = {'app_id': 1}
    result = client.cc.get_app_host_list(kwargs)
```

- shortcuts -- get_client_by_user
```python
    from blueking.component.shortcuts import get_client_by_user
    # 默认从django settings中获取APP认证信息：应用ID和应用TOKEN
    # 默认从user中获取username，user为User对象或直接为User中username数据
    user = 'username'
    client = get_client_by_user(user)
    # 组件参数
    kwargs = {'app_id': 1}
    result = client.cc.get_app_host_list(kwargs)
```

- ComponentClient
```python
     from blueking.component.client import ComponentClient
     # APP应用ID
     app_code = 'xxx' 
     # APP应用TOKEN
     app_secret = 'xxx-xxx-xxx-xxx-xxx' 
     # 用户登录态信息
     common_args = {'bk_token': 'xxx'}
     # APP应用ID和APP应用TOKEN如未提供，默认从django settings中获取
     client = ComponentClient(
         app_code=app_code, 
         app_secret=app_secret, 
         common_args=common_args
     )
     # 组件参数
     kwargs = {'app_id': 1}
     result = client.cc.get_app_host_list(kwargs)
```

#### APP开发框架中的组件包

组件包默认包含系统提供的所有组件；

用户开发的组件及自助接入的组件，可以通过以下步骤添加到组件包：

- 在APP开发框架 blueking/component/apis 目录下，创建组件包文件，如系统名称为 agent，可创建组件包文件 agent.py

- 包文件中添加组件信息，如 agent.py 中添加组件 create_task 的访问入口

```python
# -*- coding: utf-8 -*-
from ..base import ComponentAPI


# 系统组件集合类的名称，一般为 Collections + 系统名
class CollectionsAGENT(object):

    def __init__(self, client):
        self.client = client

        # create_task为组件名，method为请求组件使用的方法，path为组件路径，组件域名为系统默认域名
        self.create_task = ComponentAPI(
            client=self.client, method='POST', path='/api/c/compapi/agent/create_task/',
            description=u'',
        )
```

- 在 blueking/component/collections.py 中加入新包信息（若已加入则忽略此步骤）

```python
# 导入新包路径
from .apis.agent import CollectionsAGENT 

AVAILABLE_COLLECTIONS = {
    'cc': CollectionsCC,
    'job': CollectionsJOB,
    'bk_login': CollectionsBkLogin,
    
    # 此处加入新包信息
    'agent': CollectionsAGENT,
}
```


### 直接访问

请求参数包括：应用信息(`app_code + app_secret`)，用户信息(`bk_token` 或 `username`)，及组件参数

用 curl 直接访问示例如下：

```powershell
    curl -d '{"app_code": "xxx", "app_secret": "xxx", "bk_token": "xxx", "app_id": 1}' 'http://domain.com/component_path/'

    curl 'http://domain.com/component_path/?app_code=xxx&app_secret=xxx&bk_token=xxx&app_id=1'   # 数据需urlencode编码

```
