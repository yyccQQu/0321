angular.module("services.power", [])
    .service("PowerService", PowerService);

PowerService.$inject = ['APP_CONFIG', 'httpSvc'];

function PowerService(APP_CONFIG, httpSvc) {
    return {
        getPowerList: getPowerList, //获取功能管理列表
        addPower: addPower, //新增功能
        getPowerInfo: getPowerInfo, //获取需修改的功能信息
        updatePower: updatePower, //修改功能
        getPowerStatus: getPowerStatus, //启用/停用状态修改
        deletePower: deletePower //删除功能
    };

    function getPowerList() {
        return httpSvc.get(APP_CONFIG.apiUrls.POWER_LIST).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    function addPower(postData) {
        return httpSvc.post(APP_CONFIG.apiUrls.POWER_ADD, postData).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    function getPowerInfo(postData) {
        return httpSvc.post(APP_CONFIG.apiUrls.POWER_INFO, postData).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    function updatePower(postData) {
        return httpSvc.put(APP_CONFIG.apiUrls.POWER_ADD, postData).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    function getPowerStatus(postData) {
        return httpSvc.put(APP_CONFIG.apiUrls.POWER_STATUS, postData).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

    function deletePower(postData) {
        return httpSvc.del(APP_CONFIG.apiUrls.POWER_DELETE, postData).then(getDataComplete).catch(getDataFailed);

        function getDataComplete(response) {
            return response;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);

        }
    }

}
