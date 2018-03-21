angular.module("services.role", [])
    .service("RoleService", RoleService);

RoleService.$inject = ['APP_CONFIG', 'httpSvc'];

function RoleService(APP_CONFIG, httpSvc) {
    return {
        getRoleList: getRoleList,//列表获取
        //getHolderDisable: getHolderDisable, //状态获取
        getRole: getRole, // 角色管理	GET/role
        addRole: addRole, // 角色管理--添加	POST/role
        updateRole: updateRole, //角色修改
        getRoleStatus: getRoleStatus, // 角色管理--修改状态	PUT /role/status
        delRole: delRole, // 角色管理--删除	DELETE/role
        getRolePermissionGet: getRolePermissionGet, // 角色管理--权限配置--获取	GET/role/permission
        getRolePermissionPost: getRolePermissionPost // 角色管理--权限配置--修改	POST/role/permission
        // getRoleMenuGet: getRoleMenuGet, // 角色管理--菜单	GET/role/menu
        // getRoleMenuPost: getRoleMenuPost, // 角色管理--菜单--修改	POST/role/menu
    };
    //修改角色
    function updateRole(postData)  {
      return httpSvc.put(APP_CONFIG.apiUrls.ROLE.ROLE, postData).then(getDataComplete).catch(getDataFailed);

      function getDataComplete(response) {
          return response;
      }

      function getDataFailed(error) {
          console.log('XHR Failed for getAvengers.' + error);

      }
    }

    // 新增角色
    function addRole(postData) {

        return httpSvc.post(APP_CONFIG.apiUrls.ROLE.ROLE, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }

    }
    // 获取角色管理列表
    function getRoleList(postData) {
        return httpSvc.get(APP_CONFIG.apiUrls.ROLE.ROLE_LIST, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }


    function getHolderDisable(postData) {
        return httpSvc.put(APP_CONFIG.apiUrls.HOLDER_DISABLE, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    // 角色管理--菜单	GET/role/menu
    function getRoleMenuGet(postData) {
        return httpSvc.get(APP_CONFIG.apiUrls.ROLE_MENU_GET, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--菜单--修改	POST/role/menu
    function getRoleMenuPost(postData) {
        return httpSvc.post(APP_CONFIG.apiUrls.ROLE_MENU_POST, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--权限配置--获取	GET/role/permission
    function getRolePermissionGet(postData) {
        return httpSvc.get(APP_CONFIG.apiUrls.ROLE.ROLE_POWER, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--权限配置--修改	POST/role/permission
    function getRolePermissionPost(postData) {
        return httpSvc.post(APP_CONFIG.apiUrls.ROLE.ROLE_POWER, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理	GET/role
    function getRole(postData) {
        return httpSvc.get(APP_CONFIG.apiUrls.GET_ROLE, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--添加	POST/role
    function getRoleAdd(postData) {
        return httpSvc.post(APP_CONFIG.apiUrls.POST_ROLE, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--修改状态	PUT /role/status
    function getRoleStatus(postData) {
        return httpSvc.put(APP_CONFIG.apiUrls.ROLE.ROLE_STATUS, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }
    // 角色管理--删除	DELETE/role
    function delRole(postData) {
        return httpSvc.del(APP_CONFIG.apiUrls.ROLE.ROLE, postData).then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

}
