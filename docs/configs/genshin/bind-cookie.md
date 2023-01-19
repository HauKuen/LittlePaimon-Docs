---
title: 绑定cookie
icon: plugin
order: 1
category:
  - 功能配置
---
以下涉及的Cookie的获取方法请看[获取Cookie](get-cookie.md)。

## 添加公共Cookie
::: info 使用须知
- 小派蒙需要至少一条公共Cookie，才能使用原神查询功能。
- 每条Cookie每日只能查询最多30个UID，请根据自己用户量添加多条Cookie。
:::
向Bot发送`添加公共ck Cookie`，如果Bot提示添加成功，即为完成。

## 绑定私人Cookie
::: info 绑定须知
- 用户绑定私人Cookie后，在使用原神查询功能时，会优先使用私人Cookie查询。
- 部分功能需要私人Cookie才能使用。
:::

### 通过米游社扫码绑定(推荐)
用户发送`原神扫码绑定`指令，Bot会发送一个二维码，用户使用米游社扫码后，Bot会自动绑定该用户的原神账号Cookie。

### 通过私聊指令绑定
私聊向Bot发送`ysb Cookie`来绑定私人Cookie。

### 通过`CookieWeb`绑定
::: info 前提
需Bot管理者开启`CookieWeb`功能。
:::
- 发送命令`ysb`可查看`CookieWeb`的地址。
- 在浏览器中打开`CookieWeb`的地址，输入对应的`QQ号`和`Cookie`进行绑定。

### Bot主人手动添加
Bot主人可以登录`Web UI`网页控制台手动添加公共和私人Cookie。