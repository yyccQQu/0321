angular.module('app.auth').controller('loginCtrl',
    function($scope, $timeout, $LocalStorage, AuthService, APP_CONFIG, $state, popupSvc) {
        angular.element("body").removeClass("fixed-header");
        $LocalStorage.setItem("version", APP_CONFIG.version);
        $LocalStorage.setItem("token", APP_CONFIG.token);
        // $scope.getCode = function() {
        //     AuthService.getCaptcha().then(function(data) {
        //         $scope.header_code = data.code;
        //         $("#codeImg").attr("src", data.blob);
        //     });
        // };
        // $scope.getCode();
        $scope.login = function() {
          $state.go('app.home.home');
            // AuthService.login($scope.account, $scope.password,
            //     $scope.header_code, $scope.code, $scope.verify_code).then(function(response) {
            //     if (response.code) {
            //         if (response.code == 20022) {
            //             popupSvc.smallBox("fail", response.msg);
            //             $scope.klyz = true;
            //             $scope.getCode();
            //         } else {
            //             popupSvc.smallBox("fail", response.msg);
            //             angular.element(".code-txt").val("");
            //             $scope.getCode();
            //         }
            //     } else {
            //         var obj = JSON.stringify(response.data);
            //         $LocalStorage.setItem(APP_CONFIG.tokenKey, obj);
            //         $state.go('app.home.home');
            //     }
            // });
        };
    });
