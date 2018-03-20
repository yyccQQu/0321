angular.module('app.Power', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider
        .state('app.Power', {
            abstract: true,
            data: {
                title: 'Power'
            },
            resolve: {
                srcipts: function (lazyScript) {
                    return lazyScript.register([
                        'vendor.ui.js'
                    ]);
                }
            }
        })

        .state('app.Power.list', {
            url: '/Power/list',
            data: {
                title: '功能管理'
            },
            views: {
                "content@app": {
                    controller: 'listCtl',
                    templateUrl: "views/power/views/list.html"
                }
            }
        })
});