---
title: 常见问题
icon: info
order: 5
category:
  - 常见问题
---

## 前言
出现问题时，首先请确认你的Bot已更新到最新版本，且已尝试使用`poetry install`更新依赖库。

然后在本页面以及[issue](https://github.com/CMHopeSunshine/LittlePaimon/issues)中查找是否有类似的问题。

如果没有类似的问题或仍然得不到解决，请向本Bot的仓库提交[issue](https://github.com/CMHopeSunshine/LittlePaimon/issues)或加入上方的QQ频道进行反馈。

反馈时请提供足够详细的日志，没有日志的话谁也帮不了你~~我只能给你算一卦~~。

报错日志通常只有最后的几行是有用的，因此截图请截全，或者截最后几行，无用的截图~~我也只能给你算一卦~~。

## 安装问题

### 安装依赖报错Could not find a version that satisfies the requirement xxx
可能的原因：
- 网络问题，如果开了代理，请**关闭代理**
- Python版本不对，执行`python -V`或`python3 -V`查看版本，需要3.8-3.10版本，版本不对请升降级版本重新安装

## 启动问题

### 提示读取资源列表或下载资源时出错等
网络问题导致无法连接上资源地址。
- 如果开了代理，请**关闭代理**，
- 如果没开代理，请在启动后前往`Web UI控制台-机器人配置-配置项管理-其他配置-github资源地址`，换成其他几个多试试。
  ![res_url_error](https://s1.ax1x.com/2023/02/05/pS62bLj.png)

### 访问go-cqhttp网页提示Not Found
- 使用脚手架安装的用户：在bot目录运行`nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。
- 使用poetry安装的用户：在bot目录运行`poetry run nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。

### 报错error while attempting to bind on address
端口已被占用，请确认**是否重复启动**，没有的话请修改`.env.prod`文件中的`PORT`端口号再启动。

### 报错No module named xxx
- 使用脚手架安装的用户：在bot目录下执行`nb paimon install`安装依赖。
- 使用poetry安装的用户：在bot目录下执行`poetry install`安装依赖。

### 报错提示运行playwright install但安装后仍然无效
说明你使用了虚拟环境，但没有激活虚拟环境
- 使用脚手架安装的用户：在bot目录下执行`nb paimon run playwright install chrome`
- 使用poetry安装的用户：在bot目录下执行`poetry run playwright install chrome`
- 或者手动激活虚拟环境后，运行`playwright install chrome`

### 报错playwright._impl._api_types.Error
通常发生在CentOS系统，~~趁早跑路换Ubuntu吧~~，会有框列出缺少的依赖，解决方法参考[nonebot-plugin-htmlrender仓库](https://github.com/kexue-z/nonebot-plugin-htmlrender)的README。


### 报错ImportError: DDL load failed while importing _path: 找不到指定的模块
百度搜索下载并安装`vc_redist.x64.exe`，安装完后重启Bot

## 更新问题

### 提示Your local changes to the following files would be overwritten by merge
#### 方法一(推荐)
打开bot目录下的`pyproject.toml`文件，找到下面的内容
```toml {2}
[tool.nonebot]
plugins = ["你自己安装的nonebot插件"]
plugin_dirs = ["src/plugins"]
```
将高亮的那一行的内容先复制备份一下，然后改成`plugins = []`，执行更新，更新完成后再把备份的内容粘贴回去。

#### 方法二
> 该方法是放弃对`pyproject.toml`的更新，有时候可能会导致依赖安装不全

依次执行以下命令：
```bash
git stash
git pull
git stash pop
```

### 提示fatal: unable to access 仓库地址
网络问题，连不上Github仓库，多试几次，或者科学上网。

### 提示没有发现git仓库，无法通过git检查更新
在Github上手动下载压缩包，替换其中的`LittlePaimon`文件夹。

## 使用问题

### 命令添加公共ck没反应
没配置`超级用户`，配置方法见[配置超级用户](configs/manage/bot-manage.md)。

### 原神日历中文全是方框
通常发生在Linux系统，请自行搜索安装中文字体。

### 查询提示NoneType object has no attribute xxx
使用命令`更新角色信息`即可。

### 语音发送失败，转换CQ码失败
安装`ffmpeg`，自行搜索安装方法。

### 一使用myzj或米游社签到就提示Cookie失效
试试手动去米游社查看一下札记和签到，然后重新获取Cookie，如果还是失效，那建议过几天再使用该功能。

### 米游社获取的Cookie绑定不上
米游社目前已经无法获取Cookie，需要到米游社的**观测枢**或者**米哈游通行证**页面获取。

### Cookie经常失效
请确认是否在米游社退出了登录、重复登录或修改了密码，如果是的话请重新获取Cookie，最好开启**无痕模式**，如果不是的话，纯Cookie失效，至于为什么失效，请问米游社。

### 管理页面外网无法访问
请确保`.env.prod`文件中的host为`0.0.0.0`，且**端口**已在服务器内部防火墙和云服务商的安全组中开放。

如果还是不行，建议使用`nginx`等进行**反向代理**，具体用法自行查阅。
