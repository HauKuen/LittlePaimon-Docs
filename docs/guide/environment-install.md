---
title: 环境配置
icon: leaf
order: 1
category:
  - 安装指南
tag:
  - Markdown
---


## 安装Python

::: info
需要Python3.8-3.10版本，可通过`python -V`或`python3 -V`查看版本号
:::

### Ubuntu

如果是20+的版本，系统会自带python3.8或3.10版本，可以直接使用。

如果是更低的版本，请自行安装python3.8-3.10版本。

Debian系统和Ubuntu系统同理。

### CentOS
建议更换Ubuntu，否则请自行编译安装Python3.8-3.10版本，~~耗子尾汁~~

CentOS在后续也可能有更多的问题，因此**强烈不建议**您使用CentOS
如果你执意使用，后续出现的额外问题，例如`playwright`缺依赖，请自行搜索解决。

### Windows
可以去[Python官网](https://www.python.org/downloads/)下载安装包，安装时记得勾选`Add Python 3.x to PATH`。

也可以在Microsoft Store(微软商店)下载安装Python3.8-3.10。

### 检查安装是否成功
安装完后，通过命令`python -V`或`python3 -V`查看版本号来确认是否安装成功。

如果`python -V`显示的版本不是3.8+而`python3 -V`是的话，请将本教程后续涉及到的`python`改为`python3`。



## 安装Poetry

::: info 包管理器
我们需要用到`Poetry`作为Python环境和包管理器。
更详细具体安装方法请参考[Poetry官方文档](https://python-poetry.org/docs/#installation)
::: 
### 使用官方安装脚本来安装
#### Linux, macOS
```bash
curl -sSL https://install.python-poetry.org | python3 -
````
#### Windows
```bash
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

### 使用pipx来安装

如果没有pipx，需要先安装pipx
```bash
pip install pipx
```
然后运行一下命令来安装Poetry，如果仍提示没有pipx，请尝试重启刷新一下命令行
```bash
pipx install poetry
```

### 使用pip来安装
在终端输入以下命令安装Poetry
```bash
pip install poetry
```


### 检查安装是否成功
运行以下命令查看版本已确认安装成功
```bash
poetry -V
```

## 安装git
::: info About Git
git用于下载和更新Bot代码，如果你不想用git，也可以在Github直接下载zip包，但是不推荐。
:::
Linux发行版可以用其对应的包管理器安装，比如Ubuntu用`apt install git`，CentOS用`yum install git`。

Windows请自行搜索安装方法，下载安装包来安装。

使用`git --version`来检查是否安装成功。

## 安装ffmpeg
::: info About ffmpeg
ffmpeg在本Bot主要用于发送语音消息，如果您不需要发送语音消息的功能，可以不安装。
:::
Ubuntu系统可以直接使用`apt install ffmpeg`来安装。

其他系统请自行搜索安装教程，记得添加到**环境变量**中。

使用`ffmpeg -version`来检查是否安装成功。