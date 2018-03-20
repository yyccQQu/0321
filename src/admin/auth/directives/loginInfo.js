angular.module('app.auth').directive('loginInfo', function($LocalStorage, APP_CONFIG) {
    return {
        restrict: 'A',
        templateUrl: 'views/auth/directives/login-info.tpl.html',
        link: function(scope, element) {
            scope.user = {
                //username: userName,
                picture: "img/avatars/sunny.png"
            };
        }
        // ,
        // controller:function($LocalStorage,$scope){
        //     var user = JSON.parse($LocalStorage.getItem(APP_CONFIG.tokenKey));
        //     $scope.username = user.account;
        // }
    }
});