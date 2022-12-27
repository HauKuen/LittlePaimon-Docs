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
需要Python3.8~3.10版本，可通过`python -V`或`python3 -V`查看版本号
:::

::: tabs#system

@tab:active Windows
### 下载安装程序
点击[Python3.9.10官方下载链接](https://www.python.org/ftp/python/3.9.10/python-3.9.10-amd64.exe)
如果下载缓慢，请自行搜索国内镜像进行下载
### 运行安装程序
![安装](https://static.cherishmoon.fun/blog/LittlePaimon/pyi.png)
点击`Install Now`，注意一定要勾选`Add Python 3.9 to PATH`!!!
然后一直点击下一步即可

@tab Linux
> 以CentOS发行版为例，如果是Ubuntu，将`yum`替换为`apt`，其他发行版请自行查阅

### 安装前置依赖
```bash
yum -y install gcc* make libffi-devel zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel
```
### 下载及安装

#### 下载
```bash
wget https://mirrors.huaweicloud.com/python/3.9.10/Python-3.9.10.tgz
````
#### 解压
```bash
tar xf Python-3.9.10.tgz&&cd Python-3.9.10
```
### 编译安装
```bash
./configure
```
```bash
make&&make install
```
### 建立软链接
> 如果运行命令`python3 -V`不是刚刚安装的版本的话，才需要进行这一步
#### 备份原链接
```bash
mv /usr/bin/python3 /usr/bin/python3.bak
```
#### python3软链接
```bash
ln -s /usr/local/bin/python3 /usr/bin/python3
```
#### pip3软链接
```bash
ln -s /usr/local/bin/pip3 /usr/bin/pip3
```

:::

## 安装Poetry

::: info 包管理器
我们需要用到`Poetry`作为Python环境和包管理器
::: 
在终端输入以下命令安装Poetry
```bash
pip install poetry
```
运行以下命令查看版本已确认安装成功
```bash
poetry -V
```

## 安装git
自行搜索安装教程

## 安装ffmpeg
ffmpeg用于bot发送语音和视频，请自行搜索安装教程