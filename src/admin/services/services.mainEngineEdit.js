
angular.module("services.mainEngineEditService", []).service("MainEngineEditService", MainEngineService);

MainEngineEditService.$inject = ['APP_CONFIG', 'httpSvc'];

	function MainEngineEditService(APP_CONFIG, httpSvc) {
	    return {
	    	getMainEngineArea:getMainEngineArea,
	        getMainEngineList:getMainEngineList,
	        putHostStatus:putHostStatus,

    	};
    	
    /**
     * 获取主机区域下拉框
    */
    function getMainEngineArea(){
    	return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.area).then(function(res){
    		return res;
    	}).catch(function(error){
    		console.log('XHR Failed for getAvengers.' + error);
    	});
    }
    /**
     * 获取主机列表
    */
    function getMainEngineList(postData){
        return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.list,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
    /**
     * 更改主机状态
    */
    function putHostStatus(postData){
        return httpSvc.put(APP_CONFIG.apiUrls.MAINENGINE.status,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
}

 	