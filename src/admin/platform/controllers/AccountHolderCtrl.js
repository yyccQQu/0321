angular.module('app.Platform').controller('AccountHolderCtrl', function($scope, popupSvc, $LocalStorage, $rootScope, APP_CONFIG, PlatformService, $state) {
    $scope.toggleAdd = function() {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };

    $scope.desc = true;

    
    $scope.json = APP_CONFIG.option;
    var GetAllEmployee = function() {
        var postData = {
            page: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage,
            status: $scope.status,
            isLogin: $scope.is_login,
            account: $scope.account,
            paiXu: $scope.order_by,
        };
        PlatformService.getHolderList(postData).then(function(response) {
            if (response.code) {
                popupSvc.smallBox("fail", response.msg);
            } else {
                $scope.paginationConf.totalItems = response.data.meta.count;
                $scope.list = response.data.data.data;
                $scope.total = response.data.data.total;
            }

        })
    };
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: APP_CONFIG.PAGE_SIZE_DEFAULT,
    };

    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', GetAllEmployee);

    // 停用
    $scope.disable = function(item) {
        var sure = function() {
            var postData = {
                id: item.id,
                status: item.status
            };
            PlatformService.getHolderDisable(postData).then(function(response) {
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
        popupSvc.smartMessageBox("是否确认此操作？", sure);
    };
    //点击搜索
    $scope.search = function() {
        GetAllEmployee();
    };
});