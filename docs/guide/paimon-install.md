---
title: 安装小派蒙
icon: leaf
order: 2
category:
  - 安装指南
tag:
  - Markdown
---

## 前言

如果本文档文字教程有不理解的地方，可以查看这些视频教程。
不过视频教程可能并不适合最新版本，所以建议视频和本文档对照着看，以本文档为主。

- [原神QQ机器人 小派蒙 LittlePaimon for Ubuntu安装](https://www.bilibili.com/video/BV1Mt4y1c7VH)
- [【原神】QQ机器人-派蒙/LittlePaimon Ubuntu保姆级搭建教程](https://www.bilibili.com/video/BV1AR4y1o7cM)
- [【原神】QQ机器人-派蒙/LittlePaimon Windows搭建教程重置版](https://www.bilibili.com/video/BV1gG411J7KC)

感谢这些小伙伴提供的视频教程。

在本项目的QQ频道中也有更多的文字教程，安装过程中遇到问题可以在QQ频道中提问，点击上方加入QQ频道或搜索**尘世闲游**加入。

## 安装小派蒙

1. 选择一个你想要存放的目录，最好**不要有中文**，如果使用了中文路径，报错了的话请尝试更换为英文路径。

2. 运行以下命令，等待下载完成
::: info 下载源
优先选择`Github`，如果下载缓慢或连接不上，再尝试其他。
:::
::: code-tabs#source

@tab Github
```bash
git clone --depth=1 --single-branch https://github.com/CMHopeSunshine/LittlePaimon
```
@tab Github镜像1
```bash
git clone --depth=1 --single-branch https://github.cherishmoon.fun/https://github.com/CMHopeSunshine/LittlePaimon
```
@tab Github镜像2
```bash
git clone --depth=1 --single-branch https://ghproxy.com/https://github.com/CMHopeSunshine/LittlePaimon
```
@tab Gitee
```bash
git clone --depth=1 --single-branch https://gitee.com/CherishMoon/LittlePaimon
```

:::

3. 运行`cd LittlePaimon`然后运行`poetry install`，等待依赖安装完成
::: info 提示
如果安装失败，尝试运行`poetry run pip install -r requirements.txt`进行安装
:::
4. (可选)下载需要用到的资源包
::: info 可选
bot启动时，资源如果缺少会自动下载，但速度较慢，建议你手动下载
:::
点击[资源包下载链接](https://cowtransfer.com/s/010d73b4ad054f)进行下载，将解压出来的resources文件夹放在bot目录

5. 修改`.env.prod`配置文件第4-6行
::: info 该文件在某些系统可能是隐藏文件，需要开启显示隐藏文件
:::
```txt {4-6}
HOST=0.0.0.0
PORT=13579
LOG_LEVEL=INFO
SUPERUSERS=["123456"] # 修改123456为你bot管理者的qq号
NICKNAME=["派蒙"] # 机器人的昵称，建议只留一个
COMMAND_START=[""] # 命令前缀，根据需要自行修改
COMMAND_SEP=[""]
```
6、启动bot
- 在bot目录运行以下命令进行启动(二选一)
::: code-tabs#shell

@tab python
```bash
poetry run python bot.py
```

@tab nb脚手架
```bash
poetry run nb run
```

:::

## 安装go-cqhttp
### 方法一 使用go-cqhttp插件

#### 1.安装插件
在bot目录运行：
```bash
poetry run nb plugin install nonebot-plugin-gocqhttp
```
#### 2.访问`Web UI`
启动bot，浏览器访问链接`http://127.0.0.1:13579/go-cqhttp`
::: info 云服务器
如果是云服务器，需开放13579端口，将`127.0.0.1`换成你的公网ip进行访问
:::
#### 3.添加账号
在Web页面中添加bot账号，添加完成后**重启**bot

### 方法二 使用go-cqhttp本体
::: info 提示
如果插件使用出现问题不能解决，请使用go-cqhttp本体
:::
#### 1.下载go-cqhttp
前往[Releases](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-rc3)，选择对应系统的版本进行下载

#### 2.首次运行go-cqhttp
> 如果是windows系统，双击exe运行，并根据提示生成脚本继续操作

选择`3.反向Websocket通信`，然后关闭程序

#### 3.修改配置文件
打开`config.yml`，找到以下内容并修改
```yml {2-3,10}
account: # 账号相关
  uin: 1233456 # QQ账号
  password: '' # 密码为空时使用扫码登录

......

  - ws-reverse:
      # 反向WS Universal 地址
      # 注意 设置了此项地址后下面两项将会被忽略
      universal: ws://127.0.0.1:13579/onebot/v11/ws
      # 反向WS API 地址
      api: ws://your_websocket_api.server
      # 反向WS Event 地址
      event: ws://your_websocket_event.server
      # 重连间隔 单位毫秒
      reconnect-interval: 3000
      middlewares:
        <<: *default # 引用默认中间件
```
修改后请记得**保存**

#### 4.运行go-cqhttp
修改配置后，再次运行go-cqhttp，如果账号登录需要验证，根据具体提示进行操作即可。

**以后每次启动bot，都需要同时额外启动go-cqhttp**

### 账号登录不上
如果在云服务器上登录qq时有类似`有风险，请使用同一网络`、`验证失败`、`账号被冻结或密码错误`等提示而登录不上，
可以先在你的**本地电脑**下载go-cqhttp，登录同一账号，登录成功后，将`device.json`和`session.token`这两个文件上传到云服务器，**替换掉云服务器上的同名文件**，再次启动bot即可。

- 如果是gocq本体，那就是替换gocq所在目录的这两个文件。
- 如果使gocq插件，那就是替换`bot目录/accounts/你的qq号/`下的这两个文件。

有关该部分教程可以参考可以参考[Well404](https://space.bilibili.com/33138220)的[NoneBot2.0.0RC 全平台保姆级新手教学](https://www.bilibili.com/video/BV1984y1b7JY)中关于登录go-cqhttp的教程。
