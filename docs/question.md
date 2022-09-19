---
title: 常见问题
icon: info
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

## 运行报错`playwright._impl._api_types.Error`
通常发生在Linux系统，会有框列出缺少的依赖，解决方法参考[nonebot-plugin-htmlrender仓库](https://github.com/kexue-z/nonebot-plugin-htmlrender)的README。

## 命令`添加公共ck`没反应
没配置`超级用户`，配置方法见[配置超级用户](configs/manage/bot-manage.md)。

## 语音发送失败，报错`转换CQ码失败`
安装`ffmpeg`，自行搜索安装方法。

## 访问`http://127.0.0.1:13579/go-cqhttp`提示`Not Found`
在bot目录运行`poetry run nb plugin install nonebot-plugin-gocqhttp`然后再启动bot。

## 查询提示`NoneType object has no attribute level`
为须弥版本后未更新信息所致，使用命令`更新角色信息`即可。

## 更新时提示`pyproject.toml`有冲突
### 方法一(推荐)
打开bot目录下的`pyproject.toml`文件，找到下面的内容
```toml {2}
[tool.nonebot]
plugins = ["你自己安装的nonebot插件"]
plugin_dirs = ["src/plugins"]
```
将高亮的那一行的内容先复制备份一下，然后改成`plugins = []`，执行更新，更新完成后再把备份的内容粘贴回去。

### 方法二
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

## `原神日历`中文全是方框
通常发生在Linux系统，请自行搜索安装中文字体。