---
title: 常见问题
icon: markdown
order: 5
category:
  - 常见问题
---

## 安装依赖报错`Could not find a version that satisfies the requirement xxx`
可能的原因：
- 网络问题，如果开了代理，请**关闭代理**
- Python版本不对，执行`python -V`查看版本，至少需要3.8

## 运行报错`error while attempting to bind on address`
端口已被占用，请确认是否重复启动，没有的话请修改`.env.prod`文件中的`PORT`端口号再启动。

## 运行报错`No module named xxx`
在bot目录下执行`poetry run pip install xxx`安装缺少的依赖。

## 命令`添加公共ck`没反应
没配置`超级用户`，配置方法见[配置超级用户](configs/manage/bot-manage.md)。

## 语音发送失败，报错`转换CQ码失败`
安装`ffmpeg`，自行搜索安装方法。

## 访问`http://127.0.0.1:13579/go-cqhttp`提示`Not Found`
在bot目录运行`poetry run nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。
