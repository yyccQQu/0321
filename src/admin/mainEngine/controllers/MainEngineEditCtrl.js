angular.module('app.MainEngine').controller('MainEngineEditCtrl', function($scope, popupSvc, $LocalStorage, $rootScope, APP_CONFIG, MainEngineService, $state) {
	
	/*get param 获取url参数*/
	function get_params (href, paraName) {
	    var index = href.indexOf("?"),
	        search = href.substring(index + 1),
	        result = "";
	    angular.forEach(search.split("&"), function (value) {
	        var t = value.split("=");
	        if (t.length > 0) {
	            if (t[0] == paraName) {
	                result = t[1]
	            }
	        }
	    });
	    return result;
	}
	
	if(get_params(location.href,'id')){
		$scope.type = 2;//修改
	}else {
		$scope.type = 1;//新增
	}
	
	/**
	 * 菜单展开与关闭
	 */
	$(".smart-accordion-default .panel-title>a>:first-child").show();
	$(".panel-heading").on('click',function(){
		var _this = $(this);
		var dom = $(this).next();
		dom.slideToggle(function(){
			if(dom.css('display')==='none'){
				_this.find('a>i').removeClass('fa-angle-up').addClass("fa-angle-down");
			}else {
				_this.find('a>i').removeClass('fa-angle-down').addClass("fa-angle-up");
			}
		});

	})
	
});