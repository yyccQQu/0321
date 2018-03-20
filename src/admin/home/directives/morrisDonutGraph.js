angular.module('app.home').directive('morrisDonutGraph', function(){
    console.log(21213);
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){
            Morris.Donut({
                element : element,
                data : [{
                    value : 70,
                    label : '公司入款'
                }, {
                    value : 15,
                    label : '线上支付'
                }, {
                    value : 10,
                    label : '人工存入'
                }, {
                    value : 5,
                    label : '出款被扣'
                }],
                formatter : function(x) {
                    return x + "%"
                }
            });
        }
    }
});