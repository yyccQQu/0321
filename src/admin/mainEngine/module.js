angular.module('app.MainEngine', [
    'ui.router'
]).config(function($stateProvider) {
    $stateProvider
        .state('app.MainEngine', {
            abstract: true,
            data: {
                title: 'MainEngine'
            },
            resolve: {
                srcipts: function(lazyScript) {
                    return lazyScript.register([
                        'vendor.ui.js'
                    ]);
                }
            }
        })

    .state('app.MainEngine.mainEngine', {
        url: '/MainEngine/mainEngine',
        data: {
               title: '主机管理'
        },
        views: {
            "content@app": {
                controller: 'MainEngineCtrl',
                templateUrl: "views/mainEngine/views/mainEngine.html"
            }
        }
    })
    .state('app.MainEngine.mainEngineEdit', {
        url: '/MainEngine/mainEngineEdit',
        data: {
               title: '主机管理'
        },
        views: {
            "content@app": {
                controller: 'MainEngineEditCtrl',
                templateUrl: "views/mainEngine/views/mainEngineEdit.html"
            }
        }
    })
});