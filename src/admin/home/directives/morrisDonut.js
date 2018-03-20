angular.module('app.home').directive('morrisDonut', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Donut({
                element : element,
                data : [{
                    value : 30,
                    label : '会员出款'
                }, {
                    value : 45,
                    label : '给予优惠'
                }, {
                    value : 15,
                    label : '人工提出'
                }, {
                    value : 10,
                    label : '给予返水'
                }],
                formatter : function(x) {
                    return x + "%"
                }
            });
        }
    }
});