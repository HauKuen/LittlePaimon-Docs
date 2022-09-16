---
title: 安装小派蒙
icon: leaf
order: 2
category:
  - 安装指南
tag:
  - Markdown
---

## 安装小派蒙

1. 选择一个你想要存放的目录，最好不要有中文

2. 运行以下命令，等待下载完成
::: info 下载源
优先选择`Github`，如果下载缓慢，再尝试`Gitee`
:::
::: code-tabs#source

@tab Github
```bash
git clone --depth=1 https://github.com/CMHopeSunshine/LittlePaimon
```

@tab Gitee
```bash
git clone --depth=1 https://gitee.com/CherishMoon/LittlePaimon
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
::: info 该文件在某些系统可能是隐藏文件
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

@tab nb脚手架
```bash
poetry run nb run
```

@tab python
```bash
poetry run python bot.py
```

:::

## 安装go-cqhttp
### 方法一  使用go-cqhttp插件(推荐)

1. 在bot目录运行：
```bash
poetry run nb plugin install nonebot-plugin-gocqhttp
```
2. 启动bot，浏览器访问链接`http://127.0.0.1:13579/go-cqhttp`
::: info 云服务器
如果是云服务器，需开放13579端口，将`127.0.0.1`换成你的公网ip进行访问
:::
### 方法二 使用go-cqhttp本体
::: info 提示
如果插件使用有问题实在不能解决，再尝试使用go-cqhttp本体
:::
等待更新
