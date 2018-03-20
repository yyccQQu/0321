angular.module('app.Role', [
    'ui.router'
]).config(function($stateProvider) {
    $stateProvider
        .state('app.Role', {
            abstract: true,
            data: {
                title: '角色模块'
            },
            resolve: {
                srcipts: function(lazyScript) {
                    return lazyScript.register([
                        'vendor.ui.js'
                    ]);
                }
            }
        })

    .state('app.Role.role', {
        url: '/Role/role',
        data: {
            title: '角色管理'
        },
        views: {
            "content@app": {
                controller: 'RoleCtrl',
                templateUrl: "views/person/views/role.html"
            }
        }
    })
});
