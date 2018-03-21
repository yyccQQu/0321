angular.module('app.Role').controller('RoleCtrl', function($scope, $rootScope, APP_CONFIG, RoleService, popupSvc){
  $scope.toggleAdd = function() {
      if (!$scope.newTodo) {
          $scope.newTodo = {
              state: 'Important'
          };
      } else {
          $scope.newTodo = undefined;
      }
  };
  $scope.addRolele = {
      title: '',
      remark: '',
      status: ''
  };
  $scope.paginationConf = {
      currentPage: 1,
      itemsPerPage: APP_CONFIG.PAGE_SIZE_DEFAULT
  };

  var getRoleListFun = function () {
    var postData = {
      page: $scope.paginationConf.currentPage,
      pageSize: $scope.paginationConf.itemsPerPage
    }
    RoleService.getRoleList(postData).then(function(res) {
      if(res.code) {
        popupSvc.smallBox("fail", res.msg);
      }else {
          $scope.paginationConf.totalItems = res.data.meta.count;
          $scope.list = res.data.data.data;
          $scope.totalNumber = res.data.data.total.totalNumber;
      }
    })

  }
  $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', getRoleListFun);

  $scope.list = [];
  $scope.roleStatusOption = APP_CONFIG.option.option_status;


  $scope.disable = function(item) {
      var sure = function() {
          var postData = {
              id: item.id,
              status: item.status
          };
          RoleService.getHolderDisable(postData).then(function(response) {
              if (response.data.data === null) {
                  if (item.status == 1) {
                      item.status = 2;
                  } else {
                      item.status = 1;
                  }
                  popupSvc.smallBox("success", "成功");
              } else {
                  console.log(3333)
                  popupSvc.smallBox("fail", "失败");
              }
          })
      };
      popupSvc.smartMessageBox($rootScope.getWord("confirmationOperation"), sure);
  };
  //添加
  $scope.addRole = function () {
    RoleService.addRole($scope.addRolele).then(function (res){
      if (res.code) {
          popupSvc.smallBox("fail", response.msg);
      } else {
        $('#myModal1').modal("hide");
        popupSvc.smallBox("success", "成功");
        $scope.addRolele = {
            title: '',
            remark: '',
            status: '2'
        };
      }
    })
  };
  //菜单
  $scope.getRoleMenu = function () {
    console.log('菜单');
  }
  //权限 getRolePermission
  $scope.getRolePermission = function (role) {
    console.log('权限获取',role.powersBackpId);
    var postData = {
      powersBackpId: role.powersBackpId//权限id
      //角色id
    }
    RoleService.getRolePermissionGet(postData).then(function(res) {
      if (res.code) {
        popupSvc.smallBox("fail", res.msg);
      } else {
        $scope.permissionGet = res.data.data.data
      }
    })

  }

  //权限状态

  $rootScope.getRolemiss = function(role) {
    $scope.updateRolePermission = {
        id: role.id,
        title: role.title,
        status: role.status
    }
  }
  $scope.click = function () {
    console.log("1")
  }



  //公用
  $scope.common = function() {

  }

  $rootScope.getRoleInfo = function(role) {
    $scope.updateRolele = {
        id: role.id,
        title: role.title,
        remark: role.remark,
        status: role.status
    }

  }
  //确认修改后
  $scope.updateRoleOK = function() {
    RoleService.updateRole($scope.updateRolele).then(function(res) {
      if (res.code) {
        popupSvc.smallBox("fail", res.msg);
      } else {
        for (var index in $scope.list) {
            if ($scope.list[index].id === $scope.updateRolele.id) {
                $scope.list[index] = $scope.updateRolele;
                $scope.list[index].remark = $scope.updateRolele.remark;
                $scope.list[index].status = parseInt($scope.list[index].status);
                $('#updateRole').modal("hide");
                popupSvc.smallBox("success", "成功");
                //window.location.reload()
                break;
            }
        }
      }
    })
  }
  //删除
   $scope.delRole = function (role) {
       var sure = function () {
           var postData = {
               id: role.id
           };
           RoleService.delRole(postData).then(function (response) {
               if (response.data.data === null) {
                   popupSvc.smallBox("success", "成功");
               } else {
                   popupSvc.smallBox("fail", "失败");
               }
           })
       };
       popupSvc.smartMessageBox($rootScope.getWord("confirmationOperation"), sure);
  }




})
.filter('fiterStatused', function() {
        return function(value) {
            var statused = "";
            if (value === 1) {
                statused = "启用"
            } else if (value === 2) {
                statused = "停用"
            }
            return statused;
        }
    })
