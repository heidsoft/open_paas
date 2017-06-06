# 组件自助接入

如果希望不编写代码，直接将接口接入ESB，可通过[自助接入组件](/esb/manager/buffet_comp/list/){:target="_blank"}实现。
自助接入组件，通过配置接口信息的方式，实现对接口的访问。以如下接口为例，详细介绍如何完成组件自助接入。

`注：适用于无需编码具体业务逻辑并且支持HTTP协议的组件`

- 系统名称：主机配置平台 HCP
- 接口名称：查询主机列表 get_host_list
- 接口地址：http://hcp.domain.com/hcp/get_host_list/

## 添加系统

[添加一个新的系统](/esb/manager/system/add/){:target="_blank"}，系统信息中填入以下内容：

- 系统名称：HCP
- 系统标签：主机配置平台

## 自助接入新组件

打开[自助接入组件](/esb/manager/buffet_comp/apply/){:target="_blank"}页面，填写接口配置信息，配置信息包含三部分内容：**注册配置**、**请求发出前**、**请求目的地**。

#### 注册配置

注册配置用于配置新组件的信息，可指定用户访问新组件的信息，及新组件自身配置。样例组件注册配置中填入以下内容：

- 组件名称：查询主机列表
- 所属组件系统：选择 HCP 系统
- 注册到的请求类型：GET
- 注册到的组件路径：/hcp/get_host_list/

通过"注册到的组件路径"，加上统一前缀，即是新组件的接口地址：
```
http://xxx.domain.com/api/c/self-service-api/hcp/get_host_list/
```

#### 请求发出前
请求发出前用于配置新组件访问系统接口时的请求头信息。样例组件请求发出前不需要配置。

#### 请求目的地
请求目的地用于配置请求系统接口的信息，如系统接口的地址，请求方式，参数设置等。样例组件请求目的地配置中填入以下内容：

- 目标接口地址：http://hcp.domain.com/hcp/get_host_list/
- 目标接口请求类型：POST
- 编码POST参数方式：json `目标接口请求方式为 POST 时，才需要指定`

## 新组件访问信息
通过上面的配置，即可接入新的组件，访问新组件同样会进行应用和用户的认证。新组件的访问地址为：
```
http://xxx.domain.com/api/c/self-service-api/hcp/get_host_list/
```
