angular.module('app.Power').controller('listCtl', function ($scope, $rootScope, APP_CONFIG, PowerService, popupSvc) {
    $scope.routeTypeOption = APP_CONFIG.option.option_routeType;
    $scope.powerStatusOption = APP_CONFIG.option.option_status;
    $scope.addPowerObj = {
        modelName: '',
        title: '',
        route: '',
        routeType: '1',
        status: '2'
    };

    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: APP_CONFIG.PAGE_SIZE_DEFAULT
    };
    var getPowerListFunc = function () {
        var postData = {
            page: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage
        };
        PowerService.getPowerList(postData).then(function (res) {
            if (res.code) {
                popupSvc.smallBox("fail", res.msg);
            } else {
                $scope.paginationConf.totalItems = res.data.meta.count;
                $scope.list = res.data.data.data;
                $scope.totalNumber = res.data.data.total.totalNumber;
            }
        });
    };

    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', getPowerListFunc);

    $scope.addPower = function () {
        PowerService.addPower($scope.addPowerObj).then(function (res) {
            if (res.code) {
                popupSvc.smallBox("fail", response.msg);
            } else {
                $('#addMask').modal("hide");
                popupSvc.smallBox("success", "成功");
                $scope.addPowerObj = {
                    modelName: '',
                    title: '',
                    route: '',
                    routeType: '1',
                    status: '2'
                };
            }
        });
    };
    $rootScope.getPowerInfo = function (power) {
        $scope.updatePowerObj = {
            id: power.id,
            modelName: power.modelName,
            title: power.title,
            route: power.route,
            routeType: power.routeType.toString(),
            status: power.status
        };
    };
    $scope.updatePower = function () {
        PowerService.updatePower($scope.updatePowerObj).then(function (res) {
            if (res.code) {
                popupSvc.smallBox("fail", res.msg);
            } else {
                for (var index in $scope.list) {
                    if ($scope.list[index].id === $scope.updatePowerObj.id) {
                        $scope.list[index] = $scope.updatePowerObj;
                        $scope.list[index].status = parseInt($scope.list[index].status);
                        $('#updateMask').modal("hide");
                        popupSvc.smallBox("success", "成功");
                        break;
                    }
                }
            }
        });
    };
    $scope.disable = function (power) {
        var sure = function () {
            var postData = {
                id: power.id,
                status: power.status
            };
            PowerService.getPowerStatus(postData).then(function (response) {
                if (response.data.data === null) {
                    if (power.status === 1) {
                        power.status = 2;
                    } else {
                        power.status = 1;
                    }
                    popupSvc.smallBox("success", "成功");
                } else {
                    popupSvc.smallBox("fail", "失败");
                }
            })
        };
        popupSvc.smartMessageBox($rootScope.getWord("confirmationOperation"), sure);
    };
    $scope.deletePower = function (power) {
        var sure = function () {
            var postData = {
                id: power.id
            };
            PowerService.deletePower(postData).then(function (response) {
                if (response.data.data === null) {
                    popupSvc.smallBox("success", "成功");
                } else {
                    popupSvc.smallBox("fail", "失败");
                }
            })
        };
        popupSvc.smartMessageBox($rootScope.getWord("confirmationOperation"), sure);
    };
});
