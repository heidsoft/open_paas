# 组件模块中可用数据

开发新组件时，在组件模块中，可根据组件基类Component或公用模块获取一些有用数据，帮助开发。

## Component基类中可用数据

- request: 请求数据，其中常用的属性参考下文描述
- form_data: 组件模块中自定义Form clean后的数据
- current_user: 当前用户，通过其属性username获取当前用户的用户名
- outgoing.http_client: 请求接口Client，可用其请求其他接口，具体参数参考下面描述

### Component中request的常用属性

- request_id: 一次请求的唯一ID，一个uuid字符串
- app_code: 当前请求的应用ID
- kwargs: 当前的请求参数，GET请求中的 QueryString 数据 或 POST 请求中 Request Body 数据，已转换为dict

### Component中outgoing.http_client支持方法

```python
# response_type: json，接口数据是否需要转换为JSON字典，其他不转换
# max_retries: 0, 接口请求异常时，重试次数
# request_encoding: 请求接口参数转码为此种类型
# response_encoding: 接口返回数据转码为此种类型
outgoing.http_client.request(
    method, host, path, params=None, data=None, headers={},
    response_type='json', max_retries=0, response_encoding=None,
    request_encoding=None, verify=False, cert=None,
    timeout=None
)

outgoing.http_client.get # 表示 request('GET', *args, **kwargs)
outgoing.http_client.post # 表示 request('POST', *args, **kwargs)

```

## common.forms模块中自定义Field

- ListField: 列表Field，可将逗号，分号、换行、空格分隔的字符串，转换为列表，如可将"123;456;789"转换为["123", "456", "789"]
- TypeCheckField: 类型检测Field, 通过设置promise_type参数，检测数据的类型，若参数类型不符，抛出异常
- DefaultBooleanField: 默认布尔Field，布尔数据可通过default参数设置默认值


## 组件内调用其他组件的方式

- invoke_other方式，当前用户current_user会传递到被调用组件
```python
result = self.invoke_other('generic.auth.get_user', kwargs={'username': 'xxx'})
```

- 直接调用方式
```python
from esb.components.generic.apis.auth.get_user import GetUser
result = GetUser().invoke(kwargs={'username': 'xxx'})
```
