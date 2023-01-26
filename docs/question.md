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

### 安装依赖报错`Could not find a version that satisfies the requirement xxx`
可能的原因：
- 网络问题，如果开了代理，请**关闭代理**
- Python版本不对，执行`python -V`或`python3 -V`查看版本，需要3.8-3.10版本，版本不对请升降级版本重新安装

## 启动问题

### 提示读取资源列表或下载资源时出错等
网络问题，如果开了代理，请**关闭代理**

### 访问go-cqhttp网页提示`Not Found`
在bot目录运行`poetry run nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。

### 报错`error while attempting to bind on address`
端口已被占用，请确认是否重复启动，没有的话请修改`.env.prod`文件中的`PORT`端口号再启动。

### 报错`No module named xxx`
在bot目录下执行`poetry install`安装依赖。

### 报错`playwright._impl._api_types.Error`
通常发生在Linux系统，会有框列出缺少的依赖，解决方法参考[nonebot-plugin-htmlrender仓库](https://github.com/kexue-z/nonebot-plugin-htmlrender)的README。


### 报错`ImportError: DDL load failed while importing _path: 找不到指定的模块`
这是上游`numpy`和`matplotlib`库的问题。
#### 方法一
卸载这两个库，从其他镜像源(例如阿里云)安装
```bash
poetry run pip uninstall numpy matplotlib
poetry run pip install numpy matplotlib -i https://mirrors.aliyun.com/pypi/simple/
```
#### 方法二
同样先卸载这两个库`poetry pip uninstall numpy matplotlib`，然后自己去pypi官方下载numpy带有mkl的库，记得对应你的python版本，手动安装，然后再直接装matplotlib。

## 更新问题

### 提示`Your local changes to the following files would be overwritten by merge`
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
```
```bash
git pull
```
```bash
git stash pop
```

### 提示`fatal: unable to access 仓库地址`
网络问题，连不上Github仓库，多试几次，或者科学上网。

### 提示没有发现git仓库，无法通过git检查更新
在Github上手动下载压缩包，替换其中的`LittlePaimon`文件夹。

## 使用问题

### 命令`添加公共ck`没反应
没配置`超级用户`，配置方法见[配置超级用户](configs/manage/bot-manage.md)。

### `原神日历`中文全是方框
通常发生在Linux系统，请自行搜索安装中文字体。

### 查询提示`NoneType object has no attribute xxx`
使用命令`更新角色信息`即可。

### 语音发送失败，`转换CQ码失败`
安装`ffmpeg`，自行搜索安装方法。

### 一使用`myzj`或`米游社签到`就提示Cookie失效
试试手动去米游社查看一下札记和签到，然后重新获取Cookie，如果还是失效，那建议过几天再使用该功能。

### 绑定Cookie提示没有`login_ticket`
先在**米游社**登录，然后去**米哈游通行证页面**登录以及获取Cookie，才会有`login_ticket`。

### Cookie经常失效
请确认是否在米游社退出了登录、重复登录或修改了密码，如果是的话请重新获取Cookie，最好开启**无痕模式**，如果不是的话，纯Cookie失效，至于为什么失效，请问米游社。

### 管理页面外网无法访问
请确保`.env.prod`文件中的host为`0.0.0.0`，且**端口**已在服务器内部防火墙和云服务商的安全组中开放。

如果还是不行，建议使用`nginx`等进行**反向代理**，具体用法自行查阅。
