'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */
//配置文件
window.appConfig = appConfig;

$(function() {
    // moment.js default language
    moment.locale('en');
    angular.bootstrap(document, ['app']);

});


angular.module('app', [
        'ngSanitize',
        'ngAnimate',
        'restangular',
        'ui.router',
        'ui.bootstrap',
        //
        // Smartadmin Angular Common Module
        'SmartAdmin',
        //框架
        'app.layout',
        'app.filter',
        //登陆验证的
        'app.dashboard',
        'app.directive',
        'app.auth',
        'app.home',
        'app.Platform',
        'app.MainEngine',//主机
        'app.person',
        'app.Role',//角色
        'app.Power', //功能管理

        'services.auth',
        'services.platform',
        'services.mainEngine',//主机
        'services.power',
        'services.announce',
        'services.role'//角色

    ]).config(function($provide, $httpProvider, RestangularProvider) {

        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', function($q) {
            var errorCounter = 0;

            function notifyError(rejection) {
                console.log("=======", rejection);
                // if (rejection.data && rejection.data.message == "Unauthorized") {
                //     $state.go('realLogin');
                // }, $state
                $.bigBox({
                    title: "网络错误",
                    content: "网络错误，请检查网络环境。。。",
                    color: "#C46A69",
                    icon: "fa fa-warning shake animated",
                    timeout: 2000
                });
            }

            return {
                // On request failure
                requestError: function(rejection) {
                    // show notification
                    notifyError(rejection);

                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function(rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        //$httpProvider.interceptors.push('ErrorHttpInterceptor');
        // $httpProvider.interceptors.push('HttpInterceptor');

        RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

    }).constant('APP_CONFIG', window.appConfig)
    .run(function($rootScope, $http, $state, $stateParams, Language, AuthService, APP_CONFIG, $LocalStorage, popupSvc,$location) {
        $rootScope.lang = {};
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.getWord = function(key) {
            if (angular.isDefined($rootScope.lang[key])) {
                return $rootScope.lang[key];
            } else {
                return key;
            }
        };

        //登陆拦截
        // Uncomment this to disable template cache
        // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        //     //$httpProvider.interceptors.push('UserInterceptor');
        //     var authorized =  false;
        //     if (toState.data && typeof(toState.data.authorized) !== 'undefined') {
        //         authorized = toState.data.authorized;
        //     }
        //     if (authorized) {
        //         if (!AuthService.isAuthenticated()) {
        //             event.preventDefault();
        //             $rootScope.$broadcast(APP_CONFIG.AUTH_EVENTS.notAuthenticated);
        //         }
        //     }
        // });

        // $rootScope.$on(APP_CONFIG.AUTH_EVENTS.notAuthenticated, function() {
        //     console.log(APP_CONFIG.AUTH_EVENTS.notAuthenticated);
        //     $state.go('realLogin');
        // });

        // $rootScope.$on(APP_CONFIG.AUTH_EVENTS.sessionTimeout, function() {
        //     console.log(APP_CONFIG.AUTH_EVENTS.sessionTimeout);
        //     $state.go('realLogin');
        // });
        // $rootScope.$on(APP_CONFIG.AUTH_EVENTS.loginSuccess, function() {
        //     console.log(APP_CONFIG.AUTH_EVENTS.loginSuccess);
        //     $state.go('app.administrators.accounts');
        // });

        // $rootScope.$on(APP_CONFIG.AUTH_EVENTS.logoutSuccess, function() {
        //     console.log(APP_CONFIG.AUTH_EVENTS.logoutSuccess);
        //     $window.location = '/';
        // });
        //退出登录
        $rootScope.logout = function() {
            AuthService.layout().then(function(response) {
                $state.go("realLogin");
            });
        };
        //登录超时处理
        $rootScope.overtime = function() {
            $LocalStorage.removeItem(APP_CONFIG.tokenKey);
            $state.go("realLogin");
            $(".modal-backdrop").hide();
        }
    });
