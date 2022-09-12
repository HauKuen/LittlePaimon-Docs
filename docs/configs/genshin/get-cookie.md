---
title: 获取cookie
icon: markdown
order: 1
category:
  - 功能配置
---
::: warning 安全提示
Cookie的作用相当于**账号密码**，请勿轻易将Cookie泄露。
:::
详细图文教程请查看[该腾讯文档](https://docs.qq.com/doc/DQ3JLWk1vQVllZ2Z1?&u=db93d4bc72234e60b13ef36a3d648265)
## 电脑端
> 以Chrome浏览器为例

登录[米游社网页版](https://bbs.mihoyo.com/ys/)，登录米游社账号，然后前往[米哈游通行证页](https://user.mihoyo.com/)，登录相同账号，
然后在地址栏粘贴以下代码
```
javascript:(function(){prompt(document.domain,document.cookie)})();
```
回车，弹出的内容就是`Cookie`

## 安卓手机端
- 下载`Via浏览器`，一般手机应用商店里会提供下载。
- 然后按照电脑端相同方法获取`Cookie`即可。
