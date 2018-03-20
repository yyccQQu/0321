/**
 * Created by mebar on 08/12/2017.
 */
angular.module("services.auth", [])
    .service("AuthService", AuthService);

AuthService.$inject = ['APP_CONFIG', '$http', '$LocalStorage', "httpSvc"];

function AuthService(APP_CONFIG, $http, $LocalStorage, httpSvc) {

    return {
        login: login,
        layout: layout,
        getCaptcha: getCaptcha,
        isAuthenticated: isAuthenticated
    };

    function isAuthenticated() {
        var user = $LocalStorage.getItem(APP_CONFIG.tokenKey);
        return !!$.parseJSON(user);
    }

    //登陆用户名 密码 google code，验证码
    function login(username, password, header_code, code, captcha) {
        return $http.post(APP_CONFIG.apiUrls.HOST + APP_CONFIG.apiUrls.LOGIN, {
                account: username,
                password: password,
                code: code,
                verify_code: captcha
            }, {
                headers: { 'code': header_code }
            })
            .then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response.data;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);
        }
    }

    function getCaptcha() {
        return $http({
                url: APP_CONFIG.apiUrls.HOST + APP_CONFIG.apiUrls.CAPTCHA,
                method: "GET",
                responseType: 'json'
            })
            .then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            var code = response.data.data.code;
            var objectUrl = response.data.data.image;
            return { code: code, blob: objectUrl };
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);
        }
    }

    //layout
    function layout(postData) {
        return httpSvc.get(APP_CONFIG.apiUrls.LAYOUT, postData)
            .then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            $LocalStorage.removeItem(APP_CONFIG.tokenKey);
            return response.data;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for getAvengers.' + error);
        }
    }
}