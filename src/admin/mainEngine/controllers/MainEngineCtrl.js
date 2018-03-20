angular.module('app.MainEngine').controller('MainEngineCtrl', function($scope, popupSvc, $LocalStorage, $rootScope, APP_CONFIG, MainEngineService, $state) {
	
	$scope.toggleAdd = function() {
        if (!$scope.newTodo) {
            $scope.newTodo = {
                state: 'Important'
            };
        } else {
            $scope.newTodo = undefined;
        }
    };
    
    $scope.json = APP_CONFIG.option;
    $scope.json.option_idOrOrderId=[
        { name: "ID", value: "1" },
        { name: "订单号", value: "2" }
    ]

	MainEngineService.getMainEngineArea().then(function(res){
		console.log(res.data.data.data);
		if(res.code){
			popupSvc.smallBox("fail", res.msg);
		}else {
			$scope.mainEngineArea = res.data.data.data;
		}
		
	})
	
	$scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: APP_CONFIG.PAGE_SIZE_DEFAULT,
    };

    var GetMainEngineList = function() {
        var postData = {
            page: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage,
            areaId: $scope.areaId,
            roomId: $scope.roomId,
            cabinetId: $scope.cabinetId,
            system:$scope.system,
            order:$scope.order,
            type:$scope.type,
            content:$scope.content,
            paiXu: $scope.order_by,
        }
        MainEngineService.getMainEngineList(postData).then(function(res){
        	console.log(postData);
        	console.log(res);
        	if(res.code ){
        		popupSvc.smallBox("fail", response.msg);
        		
	    	}else {
	    		$scope.paginationConf.totalItems = res.data.meta.count;
	    		$scope.hostList = res.data.data.data;
	    	}
    	})
    }

    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', GetMainEngineList);
    
    //状态改变
    $scope.switch = function(g,e) {
    	if(g.status===1){
    		e.target.checked=true;
    	}else {
    		e.target.checked=false;
    	}
    	console.log(e.target.checked);
    	var sure = function(){
	    	var postData = {
	            id: g.ids,
	            status: g.status
	        };
	    	MainEngineService.putHostStatus(postData).then(function(res) {
	        	console.log(res);
	            if (res.data.data === null) {
	            	
	               	if(g.status==1){
			    		g.status = 2;
			    	}else {
			    		g.status = 1;
			    	}
	                popupSvc.smallBox("success", "成功");
	            } else {
	                popupSvc.smallBox("fail", "失败");
	            }
	        })
	    }
        popupSvc.smartMessageBox($rootScope.getWord("确定修改状态吗？"), sure);
    }
    
    /**
     * 添加主机弹框确定
     */
    $scope.addMainEngineModalSure = function() {
    	$('#addMainEngineModal').modal("hide").on("hidden.bs.modal",function(e){
    		//id为0表示去添加主机，有id则是修改主机信息
    		location.href="/#/MainEngine/mainEngineEdit";
//  		$state.go("app.MainEngine.mainEngineEdit",{id:0});
    	});

    }
    /**
     * 修改主机
     */
    $scope.updateMainEngine = function(id){
    	location.href="/#/MainEngine/mainEngineEdit?id="+id;
//  	$state.go("app.MainEngine.mainEngineEdit",{id:id});
    }
    /**
     * 绑定负责人弹框确定
     */
    $scope.bindLeaderModalSure = function() {
    	
    }

});