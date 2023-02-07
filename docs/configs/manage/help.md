---
title: 帮助图
icon: style
order: 1
category:
  - Bot管理
---
## 查看帮助图
- 命令：**`<help|帮助|菜单>`**
- 特殊说明：已被[插件管理器](plugin-manage.md)禁用的插件会在帮助图中以**灰色**显示
- 示例：`help`
::: details 帮助图
![帮助图](https://s1.ax1x.com/2023/02/05/pS6gWCT.jpg)
:::

## 自定义帮助图
::: tip 帮助
- 小派蒙本身所有功能**均支持**详细的帮助图，并且通过`monkey patch`方式支持**绝大数多**的NoneBot2插件。
- 在每次启动时，小派蒙会为所有**已加载**的插件生成其帮助图的`yml`格式文件，保存在`bot目录/config/plugins/`文件夹中，你可以通过修改`yml`文件来自定义帮助图(**重启生效**)。
- 修改`yml`需要你了解`yml`的基本语法，可以参考[这里](https://blog.csdn.net/weixin_43340943/article/details/105953673)。
- 不过我更**推荐**您使用本Bot提供的[`Web UI`网页控制台](web_ui.md)来修改，更**简单便捷**。
:::
每个`yml`文件都为**固定格式**，这是`原神实时便签`插件的示例：
```yaml
示例文件路径：bot目录/config/plugins/Paimon_DailyNote.yml

name: 原神实时便签
module_name: Paimon_DailyNote
description: 原神实时便签信息
usage: ssbq(uid)
status:
show: true
priority: 4
matchers:
- pm_name: ssbq
  pm_description: '*查看原神实时便笺(树脂情况)'
  pm_usage: ssbq(uid)
  pm_priority: 1
  pm_show: true
- pm_name: ssbq提醒
  pm_description: '*开启|关闭ssbq提醒，可订阅树脂以及尘歌壶钱币提醒'
  pm_usage: ssbq提醒<开|关>[树脂|钱币]
  pm_priority: 1
  pm_show: true
```
### 参数列表
- **name**：插件名称，会显示在帮助图中，可修改为你想显示的名称
- **module_name**：插件模块名称，**请勿修改**
- **description**：插件描述，这个参数暂时用不上
- **usage**：插件使用方法，会在插件没有具体命令时显示，可修改为你想显示的使用方法
- **status**：插件状态，这个参数有特殊用途，**请勿修改**
- **show**：是否显示在帮助图中，`true`为显示，`false`为不显示
- **priority**：插件显示优先级，按小到大排序显示
- **matchers**：插件命令列表，由**0个或若干个命令**组成，每个命令均有以下参数：
  - **pm_name**：命令名称，仅用于标识，本身已有的**请勿修改**
  - **pm_description**：命令描述
  - **pm_usage**：命令使用方法，长度不要过长
  - **pm_priority**：命令显示优先级，按小到大排序显示
  - **pm_show**：是否显示在帮助图中，`true`为显示，`false`为不显示
  - 对于非小派蒙本身的插件，如果未能获取到全部命令，你可以按照该格式手动添加进来


::: info 须知
- `yml`文件是**静态**的，如果插件更新后实际内容有所更改，`yml`文件不会跟着更改，你需要**手动修改或删除文件**让它重新生成。
- 如果某个插件曾经被加载过，即使现在已经删除了，它仍然会出现在帮助图中，你需要**手动删除**其`yml`文件。
:::