angular.module('app.layout').controller('layoutCtrl',
    function ($scope, popupSvc, $rootScope, announceService, $timeout) {
        // //请求公告接口
        // announceService.setSystemNoticeList().then(function (response) {
        //     $scope.list = response.data.data;
        //     console.log($scope.list);
        //     var arr = []
        //     for (var i = 0; i < $scope.list.length; i++) {
        //         arr.push($scope.list[i].noticeContent);
        //     }
        //     var arrCar = arr.toString();
        //     // document.getElementsByClassName('kuang').innerHTML = $scope.arrCar;
        //     $('#marquee1').find("span").text(arrCar);
        //     $("#marquee1").marquee({
        //         duration: 5000,
        //         //gap in pixels between the tickers
        //         gap: 50,
        //         //time in milliseconds before the marquee will start animating
        //         delayBeforeStart: 0,
        //         //'left' or 'right'
        //         direction: 'left',
        //         //true or false - should the marquee be duplicated to show an effect of continues flow
        //         duplicated: true, // 滚动完到下一条的间隔时间         ,
        //         pauseOnHover: true, // 鼠标滑向文字时是否停止滚动         ,
        //         loop: -1, // 设置循环滚动次数 （-1为无限循环）         ,,
        
        //     });
        //     console.log($('.js-marquee-wrapper'));
        // });



    });