---
title: Web UI控制台
icon: plugin
order: 3
category:
  - Bot管理
---

## 说明

小派蒙提供了一个`Web UI`网页控制台，方便超级用户对机器人进行管理，目前可以在控制台中完成以下操作：
- 查看Bot状态
- Cookie管理
- 插件管理
- 配置管理
- 更新和重启
- 设置命令别名
- 设置群聊学习配置和查看数据库
- 等等...

未来也会在控制台中添加更多功能

网页控制台的默认地址为`127.0.0.1:13579/LittlePaimon/admin/`

(登录页在`127.0.0.1:13579/LittlePaimon/login/`)

默认账号为超级用户的`QQ号`，密码为`admin`

请务必在控制台中**修改默认密码以及加密所使用的密钥**!!!


## 反向代理配置
以`nginx`为例，代到`http:域名或ip/LittlePaimon/admin`地址的话，这样配置：
```
server {
    server_name localhost;
    listen 80;
    location /LittlePaimon/ {
      proxy_pass http://127.0.0.1:13579/LittlePaimon/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $http_host;
      proxy_set_header X-Forwarded-Port $server_port;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
  }
```
如果想代到`http:域名或ip/admin`地址，则需要多配置一个：
```{4-15}
server {
    server_name localhost;
    listen 80;
    location / {
      proxy_pass http://127.0.0.1:13579/LittlePaimon/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $http_host;
      proxy_set_header X-Forwarded-Port $server_port;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
    location /LittlePaimon/ {
      proxy_pass http://127.0.0.1:13579/LittlePaimon/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $http_host;
      proxy_set_header X-Forwarded-Port $server_port;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
  }
```