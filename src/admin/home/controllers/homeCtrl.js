angular.module('app.home').controller('homeCtrl',
    function($scope, popupSvc, $rootScope) {

        //获取传入的日期前N天或后N日期(N = day)  type:1前；2后   date：传入的日期
        function GetDate2 (day, type, date) {
            var zdate;
            if (date === null || date === undefined) {
                zdate = new Date();
            } else {
                zdate = date;
            }
            var edate;
            if (type === 1) {
                edate = new Date(zdate.getTime() - (day * 24 * 60 * 60 * 1000));
            } else {
                edate = new Date(zdate.getTime() + (day * 24 * 60 * 60 * 1000));
            }
            return edate;
        }
        //获取今日的起始和结束时间
        $scope.thisWeek = function () {
            var returnStr1 = "";
            var returnStr2 = "";
            var date = new Date();      //当前时间
            var week = date.getDay();   //获取今天星期几
            var monday = GetDate2(week - 1, 1, date);      //获取星期一
            var sunday = GetDate2(7 - week, 2, date);   //获取星期天
            //起始时间的年月日
            var year1 = monday.getFullYear();
            var month1 = monday.getMonth() + 1;
            var day1 = monday.getDate();
            //结束时间的年月日
            var year2 = sunday.getFullYear();
            var month2 = sunday.getMonth() + 1;
            var day2 = sunday.getDate();
            //处理起始时间小于10的追加"0"在前面
            month1 = month1 < 10 ? "0" + month1 : month1;
            day1 = day1 < 10 ? "0" + day1 : day1;
            //处理结束时间小于10的追加"0"在前面
            month2 = month2 < 10 ? "0" + month2 : month2;
            day2 = day2 < 10 ? "0" + day2 : day2;

            returnStr1 = year1 + "-" + month1 + "-" + day1;       //起始时间
            returnStr2 += year2 + "-" + month2 + "-" + day2;      //结束时间
            document.getElementsByClassName("startTime")[0].value=returnStr1;
            document.getElementsByClassName("endTime")[0].value=returnStr2;
        };
        //获取本月的起始和结束时间
        $scope.thisMonthStr = function() {
            var returnStr1 = "";
            var returnStr2 = "";
            var date = new Date();      //当前时间
            var year = date.getFullYear();
            var month = date.getMonth();

            var min = new Date(year, month, 1);                 //本月月初
            var max = new Date(year, month + 1, 0);             //本月月底

            //起始时间的年月日
            var year1 = min.getFullYear();
            var month1 = min.getMonth() + 1;
            var day1 = min.getDate();
            //结束时间的年月日
            var year2 = max.getFullYear();
            var month2 = max.getMonth() + 1;
            var day2 = max.getDate();
            //处理起始时间小于10的追加"0"在前面
            month1 = month1 < 10 ? "0" + month1 : month1;
            day1 = day1 < 10 ? "0" + day1 : day1;
            //处理结束时间小于10的追加"0"在前面
            month2 = month2 < 10 ? "0" + month2 : month2;
            day2 = day2 < 10 ? "0" + day2 : day2;

            returnStr1 = year1 + "-" + month1 + "-" + day1;       //起始时间
            returnStr2 += year2 + "-" + month2 + "-" + day2;      //结束时间
            document.getElementsByClassName("startTime")[0].value=returnStr1;
            document.getElementsByClassName("endTime")[0].value=returnStr2;
        };
        //获取今年的起始和结束时间
        $scope.thisYear = function () {
            $scope.returnStr1 = "";
            $scope.returnStr2 = "";
            var date = new Date();      //当前时间
            var year = date.getFullYear();
            $scope.returnStr1 = year + "-01-01";
            $scope.returnStr2 = year + "-12-31";
            document.getElementsByClassName("startTime")[0].value=$scope.returnStr1;
            document.getElementsByClassName("endTime")[0].value=$scope.returnStr2;
        };
        $scope.homeSelect = function () {
            if($scope.select11.length>1){
                var GetAllEmployee = function() {
                    if($('#s2id_autogen1').hasClass("select2-container-active")){
                        $('.select2-drop-active').find(".select2-results").hide();
                        $('.select2-results').parent(".select2-drop-active").css("border","1px solid");
                        // $('.select2-results').parent(".select2-drop-active").css("border-bottom-width","1px");
                        $('#s2id_autogen1').children(".select2-choices").css("border","1px solid");
                    }
                };
            }else{
                var GetAllEmployee = function() {
                    if($('#s2id_autogen1').hasClass("select2-container-active")){
                        $('.select2-drop-active').find(".select2-results").show();
                        console.log($('.select2-results').parents());
                        $('.select2-results').parents().addClass("select2-drop-active");
                    }
                };
            }
            $scope.$watch(GetAllEmployee);
        };
        //4
        var chart4 = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            height:300,
            plotShadow: false
        };
        var title4 = {
            text: '总收入：¥122,345'
        };
        var tooltip4 = {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
            }
        };
        var plotOptions4 = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
                    }
                }
            }
        };

        var series4= [{
            type: 'pie',
            name: '占比',
            data: [
                {
                    name: '公司入款',
                    y: 38,
                    sliced: true,
                    selected: true
                },
                ['线上支付',   32],
                ['出款被扣',   12],
                ['人工存入',   10]
            ]
        }];
        var credits4 = {
            enable:false,
            text:''
        };
        var json4 = {};
        json4.chart = chart4;
        json4.title = title4;
        json4.tooltip = tooltip4;
        json4.series = series4;
        json4.credits = credits4;
        json4.plotOptions = plotOptions4;
        $('#container4').highcharts(json4);
        //
        var chart5 = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            height:300,
            plotShadow: false
        };
        var title5 = {
            text: '总支出：¥234,897'
        };
        var tooltip5 = {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
            }
        };
        var plotOptions5 = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
                    }
                }
            }
        };
        var series5= [{
            type: 'pie',
            name: '占比',
            data: [
                {
                    name: '会员出款',
                    y: 38,
                    sliced: true,
                    selected: true
                },
                ['给予优惠',   12],
                ['给予返水',   32],
                ['人工提出',   10]
            ]
        }];
        var credits5 = {
            enable:false,
            text:''
        };
        var json5 = {};
        json5.chart = chart5;
        json5.title = title5;
        json5.tooltip = tooltip5;
        json5.series = series5;
        json5.credits = credits5;
        json5.plotOptions = plotOptions5;
        $('#container5').highcharts(json5);
       //6
        var chart6 = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            height:300,
            plotShadow: false
        };
        var title6 = {
            text: ''
        };

        var tooltip6 = {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
            }
        };
        var plotOptions6 = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
                    }
                }
            }
        };

        var series6= [{
            type: 'pie',
            name: '占比',
            data: [
                {
                    name: 'APP',
                    y: 38,
                    sliced: true,
                    selected: true
                },
                ['PC',   42],
                ['WAP',   10]
            ]
        }];
        var credits6 = {
            enable:false,
            text:''
        };
        var json6 = {};
        json6.chart = chart6;
        json6.title = title6;
        json6.tooltip = tooltip6;
        json6.series = series6;
        json6.credits = credits6;
        json6.plotOptions = plotOptions6;
        $('#container6').highcharts(json6);

        //曲线图
        var chart = {
            type: 'spline'
        };
        var title = {
            text: ''
        };
        var subtitle = {
            text: ''
        };
        var xAxis = {
            categories: ['10-23星期日', '10-24星期一', '10-25星期二', '10-26星期三', '10-27星期四', '10-28星期五', '10-29星期六']
        };
        var yAxis = {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            },
            lineWidth: 2
        };
        var tooltip = {
            crosshairs: true,
            shared: true
        };
        var plotOptions = {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        };
        var series= [{
            name: 'PC',
            marker: {
                symbol: 'circle'
            },
            data: [1000, 500, 700, 1500, 1230, 1300,1200]
        },{
            name: 'WAP',
            marker: {
                symbol: 'circle'
            },
            data: [600, 700, 1000, 1500, 1200, 1000,1200]
        },{
            name: 'APP',
            marker: {
                symbol: 'circle'
            },
            data: [800, 500, 700, 1000, 1230, 1300,1200]
        }];
        var credits = {
            enable:false,
            text:''
        };
        var json = {};
        json.chart = chart;
        json.title = title;
        json.subtitle = subtitle;
        json.tooltip = tooltip;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.series = series;
        json.credits = credits;
        json.plotOptions = plotOptions;
        $('#container').highcharts(json);
    });