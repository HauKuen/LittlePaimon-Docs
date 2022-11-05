---
title: 常见问题
icon: info
order: 5
category:
  - 常见问题
---

## 安装问题

### 安装依赖报错`Could not find a version that satisfies the requirement xxx`
可能的原因：
- 网络问题，如果开了代理，请**关闭代理**
- Python版本不对，执行`python -V`查看版本，至少需要3.8

## 启动问题

### 访问go-cqhttp网页提示`Not Found`
在bot目录运行`poetry run nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。

### 报错`error while attempting to bind on address`
端口已被占用，请确认是否重复启动，没有的话请修改`.env.prod`文件中的`PORT`端口号再启动。

### 报错`No module named xxx`
在bot目录下执行`poetry install`安装依赖。

### 报错`playwright._impl._api_types.Error`
通常发生在Linux系统，会有框列出缺少的依赖，解决方法参考[nonebot-plugin-htmlrender仓库](https://github.com/kexue-z/nonebot-plugin-htmlrender)的README。

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
请确保nonebot的port为`0.0.0.0`，且**端口**已在服务器内部防火墙和云服务商的安全组中开放。

如果还是不行，建议使用`nginx`等进行**反向代理**，具体用法自行查阅。