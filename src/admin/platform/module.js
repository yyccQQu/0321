angular.module('app.Platform', [
    'ui.router'
]).config(function($stateProvider) {
    $stateProvider
        .state('app.Platform', {
            abstract: true,
            data: {
                title: 'Platform'
            },
            resolve: {
                srcipts: function(lazyScript) {
                    return lazyScript.register([
                        'vendor.ui.js'
                    ]);
                }
            }
        })

    .state('app.Platform.accountHolder', {
        url: '/Platform/accountHolder',
        data: {
            // title: '开户人管理'
            title: 'A_10'
        },
        views: {
            "content@app": {
                controller: 'AccountHolderCtrl',
                templateUrl: "views/platform/views/accountHolder.html"
            }
        }
    })
});