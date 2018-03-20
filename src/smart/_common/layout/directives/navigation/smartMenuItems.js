(function() {
    "use strict";
    //TODO 修改菜单
    angular.module('SmartAdmin.Layout').directive('smartMenuItems', function($http, $rootScope, $compile, httpSvc) {
        return {
            restrict: 'A',
            //template: '<p>Hello {{number}} {{getWord(\'Dashboard\')}}!</p>',
            controller: function($scope, $element) {
                $scope.getWord = function(key) {
                    if (angular.isDefined($rootScope.getWord(key))) {
                        return $rootScope.getWord(key);
                    } else {
                        return key;
                    }
                };
            },
            template: function(element, attrs) {
                function createItem(item, parent, level) {
                    var li = $('<li />', { 'ui-sref-active': "active" });
                    var a = $('<a />');
                    var i = $('<i />');

                    li.append(a);

                    if (item.route != "#")
                        a.attr('ui-sref', item.route);
                    if (item.icon) {
                        i.attr('class', 'icon iconfont ' + item.icon);
                        a.append(i);
                    }
                    if (item.menu_name) {
                        a.attr('title', item.menu_name);
                        if (level > 1) {
                            a.append(' {{getWord(\'' + item.language_key + '\')}}');
                        } else {
                            a.append(' <span class="menu-item-parent">{{getWord(\'' + item.language_key + '\')}}</span>');
                        }
                    }

                    if (item.Children.length > 0) {
                        var ul = $('<ul />');
                        li.append(ul);
                        li.attr('data-menu-collapse', '');
                        _.forEach(item.Children, function(child) {
                            createItem(child, ul, level + 1);
                        })
                    }

                    parent.append(li);
                }

                httpSvc.get("/menu/role").then(function(res) {
                    var ul = $('<ul />', {
                        'smart-menu': ''
                    });
                    _.forEach(res.data.data, function(item) {

                        createItem(item, ul, 1);
                    });

                    var $scope = $rootScope.$new();
                    var html = $('<div>').append(ul).html();
                    var linkingFunction = $compile(html);

                    var _element = linkingFunction($scope);

                    element.replaceWith(_element);
                });
            },
            link: function(scope, element, attrs) {
                var $body = $('body');

                var $collapsible = element.find('li[data-menu-collapse]');

                var bindEvents = function() {
                    $collapsible.each(function(idx, li) {
                        var $li = $(li);
                        $li
                            .on('click', '>a', function(e) {

                                // collapse all open siblings
                                $li.siblings('.open').smartCollapseToggle();

                                // toggle element
                                $li.smartCollapseToggle();

                                // add active marker to collapsed element if it has active childs
                                if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                    $li.addClass('active')
                                }

                                e.preventDefault();
                            })
                            .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                        // initialization toggle
                        if ($li.find('li.active').length) {
                            $li.smartCollapseToggle();
                            $li.find('li.active').parents('li').addClass('active');
                        }
                    });
                }
                bindEvents();


                // click on route link
                element.on('click', 'a[data-ui-sref]', function(e) {
                    // collapse all siblings to element parents and remove active markers
                    $(this)
                        .parents('li').addClass('active')
                        .each(function() {
                            $(this).siblings('li.open').smartCollapseToggle();
                            $(this).siblings('li').removeClass('active')
                        });

                    if ($body.hasClass('mobile-view-activated')) {
                        $rootScope.$broadcast('requestToggleMenu');
                    }
                });


                scope.$on('$smartLayoutMenuOnTop', function(event, menuOnTop) {
                    if (menuOnTop) {
                        $collapsible.filter('.open').smartCollapseToggle();
                    }
                });
            }
        };
    });
})();