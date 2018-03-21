appConfig.apiUrls = {
    CAPTCHA: "/captcha",
    LOGIN: "/login",
    HOST: "/api",
    LAYOUT: "/logout", //退出登录

    LANG: { //语言下拉
        "index": "/langs",
        "cn": "/lang/cn",
        "us": "/lang/us",
        "zh": "/lang/zh"
    },
    ACTIVITY: {
        "index": "/activitys",
        "msgs": "/activity/msgs",
        "notify": "/activity/notify"
    },

    // 管理员
    HOLDER_LIST: "/holder/list", // 开户人管理	GET /holder/list
    HOLDER_DISABLE:"/holder/disable",

    //主机列表
    MAINENGINE: {
        "area": "/mainEngine/area",//GET 主机区域下拉框
        "list": "/host/list",//GET 主机列表
        "status": "/host/status" //PUT 更改主机状态
    },
    //功能管理 --wdl
    POWER_LIST: "/power/list", //获取功能列表
    POWER_ADD: "/power",//新增功能
    POWER_INFO:"/power/info", //获取功能详情
    POWER_PUT:"/power", //提交功能修改项
    POWER_STATUS: "/power/status", //启用/停用 修改
    POWER_DELETE: "/power",   //删除功能
    //角色管理
    ROLE: {
      ROLE_LIST: "/role/list",//角色列表
      ROLE_STATUS: "/role/status",//角色状态修改
      // ROLE_INFO: "/role/info",//角色修改获取
      ROLE: "/role",
      ROLE_POWER: "/role/power" //角色权限获取
    }

};


appConfig.option = {
    option_status: [
        {name: "停用", value: "2"},
        {name: "启用", value: "1"}
    ],
    option_online: [
        {name: "在线", value: "1"},
        {name: "离线", value: "2"}
    ],
    option_yesOrno: [
        {name: "是", value: "1"},
        {name: "否", value: "2"}
    ],
    option_routeType: [
        {name: "GET", value: "1"},
        {name: "POST", value: "2"},
        {name: "PUT", value: "3"},
        {name: "DELETE", value: "4"}
    ]
};
