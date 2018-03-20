设置大小写敏感
git config core.ignorecase false  

#### test前端
```
|-- smartadmin-plugin         # 框架插件
|
|-- src                         #写代码的位置
|   |-- styles                   #样式图片
|   |-- smart                   #框架的代码
|   |   |-- _common             # SmartAdmin module
|   |       |-- module.js       #
|   |
|   |   |-- layout              # app.layout module
|   |-- httpSvc.js                   #常用类
...
|-- app.config.js             # 全局静态常量 （constant）
|-- app.scripts.json          # vendor管理
...
```
host.js 文件内容
```
appConfig.apiUrls.APP_HOST = "http://localhost:3000";
appConfig.apiUrls.HOST = "/api";
```