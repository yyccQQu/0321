angular.module('app.home', ['ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.home').config(function($stateProvider) {
    $stateProvider
        .state('app.home', {
            abstract: true,
            data: {
                title: 'Home'
            }
        })
        .state('app.home.home', {
            url: '/home/home',
            data: {
                title: 'Home'
            },
            views: {
                "content@app": {
                    controller: 'homeCtrl',
                    templateUrl: "views/home/views/home.html"
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'vendor.graphs.js',
                        'vendor.ui.js'
                    ]);
                }
            }
        })
});