开始之前，你可以先体验一下这个项目：[在线预览](http://antdpro.cixi518.com/)

源码附在文章末尾, 注意查收。

##  技术栈简介
* `react@16.8.6` ：用于构建用户界面的 MVVM 框架
* `umi@2.8.7`： 可插拔的企业级 react 应用框架
* `dva@2.4.1`： 基于 redux 和 redux-saga 的数据流方案
* `antd@3.21.4`：基于 Ant Design 设计体系的 React UI 组件库
* `Ant Design Pro@v4`：一个企业级中后台前端/设计解决方案
* `Axios@0.19.0`：一个基于 promise 的 HTTP 库
* `UForm@0.3.10`：中后台领域的表单解决方案
* `typescript@3.5.3`：Javascript的超集

## 主要目录结构
```
├── config                       # umi 配置，包含路由，构建等配置
├── src													 # 开发主目录
│   ├── assets                   # 本地静态资源
│   ├── components               # 业务通用组件
│   │   ├── Authorized           # 权限认证
│   │   ├── Exception            # 异常组件
│   │   ├── GlobalHeader         # 全局头部
│   │   ├── HeaderDropdown       # 头部下拉选项
│   │   ├── PageLoading          # 页面加载
│   │   ├── SelectLang           # 语言选择
│   │   └── StandardTable        # 高级表格
│   ├── global.less              # 全局样式
│   ├── global.tsx               # 全局js
│   ├── layouts                  # 页面通用布局组件
│   ├── locales                  # 国际化语言包
│   ├── models                   # 全局model
│   │   ├── account.ts           # 用户相关model
│   │   ├── connect.d.ts         # model相关类型定义
│   ├── pages                    # 页面
│   │   ├── Authorized.tsx       # 权限过滤
│   │   ├── Exception            # 错误页面：404 403 500
│   │   ├── Home                 # 首页
│   │   ├── Product              # 产品列表、产品分类
│   │   ├── Account              # 登录页面
│   │   └── User                 # 用户列表
│   ├── services                 # api接口
│   └── utils                    # 通用方法
```

## 项目简介
做为一个基于`antd-design-pro`和`react hooks`打造的后台管理系统项目，
该项目利用了`antd-design-pro`提供的权限认证、配置化路由、页面布局组件、面包屑等功能，完成了登录、首页、产品、用户各模块的开发。
