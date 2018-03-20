"use strict";
angular.module('app.filter', []);
angular.module('app.filter')

    .filter('fiterTime', function () {
        return function (nS) {
            if (nS === 0 | nS === null | !nS | nS === "") {
                return "";
            }
            ;

            function add0(m) {
                return m < 10 ? '0' + m : m
            };
            var time = new Date(parseInt(nS) * 1000);
            var y = time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
        };
    })

    .filter('outStatus', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "已出款";
            } else if (value === 2) {
                status = "预备出款";
            } else if (value === 3) {
                status = "已取消";
            } else if (value === 4) {
                status = "已拒绝";
            } else if (value === 5) {
                //status="待审核";
                status = "未出款";
            }
            return status;
        };
    })

    .filter('noticeType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "类型一";
            } else if (value === 2) {
                status = "类型二";
            } else if (value === 3) {
                status = "类型三";
            } else if (value === 4) {
                status = "类型四";
            }
            return status;
        };
    })
    .filter('IPLimit', function () {

        return function (value) {
            var ip = "";
            if (value.length == 0) {
                ip = "否";
            } else {
                ip = "是";
            }
            return ip;
        };
    })

    .filter('fiterStatused', function () {

        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "启用"
            } else if (value === 2) {
                statused = "停用"
            }
            return statused;
        }
    })
    .filter('buttonStatus', function () {

        return function (value) {
            var statused = "";
            if (value === 2) {
                statused = "启用"
            } else if (value === 1) {
                statused = "停用"
            }
            return statused;
        };
    })

    .filter('fiterValid', function () {

        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "有效"
            } else if (value === 2) {
                statused = "无效"
            }
            return statused;
        };
    })
    .filter('fiterStatused1', function () {

        return function (value) {
            var statused = "";
            if (value === 2) {
                statused = "启用"
            } else if (value === 1) {
                statused = "停用"
            }
            return statused;
        }
    })
    .filter('DepositWithdrawal', function () {

        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "存款"
            } else if (value === 2) {
                statused = "取款"
            }
            return statused;
        };
    })
    .filter('SuccessFailure', function () {

        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "成功"
            } else if (value === 2) {
                statused = "失败"
            }
            return statused;
        };
    })
    .filter('fiterCX', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "返佣冲销"
            } else if (value === 2) {
                status = "未冲销"
            }
            return status;
        };
    })
    .filter('YorN', function () {

        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "是"
            } else if (value === 2) {
                statused = "否"
            }
            return statused;
        };
    })
    .filter('YesNo', function () {

        return function (value) {
            var statused = "";
            if (value === 0) {
                statused = "否"
            } else if (value === 1) {
                statused = "是"
            }
            return statused;
        };
    })
    .filter('isShow', function () {

        return function (value) {
            var str = "";
            if (value === 0) {
                str = "正常"
            } else {
                str = "隐藏"
            }
            return str;
        };
    })
    .filter('currentstate', function () {
        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "启用"
            } else if (value === 2) {
                statused = "停用"
            }
            return statused;
        }
    })
    .filter('fiterStatuseds', function () {
        return function (value) {
            var statuseds = "";
            if (value === 1) {
                statuseds = "在线"
            } else {
                statuseds = "离线"
            }
            return statuseds;
        }
    })
    .filter('submit', function () {
        return function (Submit) {
            var Submit = "";
            if (Submit === 1) {
                Submit = "提交"
            } else {
                Submit = "未提交"
            }
            return Submit;
        }
    })
    .filter('fiterApp', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "已通过"
            } else {
                status = "未处理"
            }
            return status;
        }
    })
    .filter('fiterStatusE', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "已确认"
            } else if (value === 2) {
                status = "已取消"
            } else if (value === 0) {
                status = "未处理"
            }
            return status;
        }
    })
    .filter('fiterType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "pc"
            } else if (value === 2) {
                status = "wap"
            } else if (value === 3) {
                status = "android"
            } else if (value === 4) {
                status = "ios"
            }
            return status;
        }
    })
    .filter('packetStatus', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "未开始"
            } else if (value === 2) {
                status = "活动中"
            } else if (value === 3) {
                status = "已结束"
            } else if (value === 4) {
                status = "已终止"
            }
            return status;
        }
    })
    .filter('fiterLog', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "登录成功"
            } else if (value === 2) {
                status = "登录失败"
            }
            return status;
        }
    })
    .filter('fiterDiaodanStatus', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "待审核"
            } else if (value === 2) {
                status = "正常"
            } else if (value === 2) {
                status = "掉单"
            }
            return status;
        }
    })
    .filter('formatDate', function () {
        return function (value) {
            var myDate = new Date(value * 1000);
            var year = myDate.getFullYear().toString();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            return year + '-' + month + '-' + day;
        };
    })
    .filter('favourable', function () {
        return function (value) {
            var statused = "";
            if (value === 0) {
                statused = "否"
            } else if (value === 1) {
                statused = "是"
            }
            return statused;
        }
    })

    .filter('noticeTypese', function () {
        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "普通公告";
            } else if (value === 2) {
                statused = "游戏1";
            } else if (value === 3) {
                statused = "游戏2";
            } else if (value === 4) {
                statused = "游戏3";
            } else if (value === 5) {
                statused = "游戏4";
            } else if (value === 6) {
                statused = "游戏5";
            } else if (value === 7) {
                statused = "游戏6";
            }
            return statused;
        }
    })
    .filter('fiterStatusBtn', function () {
        return function (value) {
            var statused = "";
            if (value === 1) {
                statused = "停用"
            } else if (value === 2) {
                statused = "启用"
            }
            return statused;
        }
    })
    .filter('logoType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "类型一";
            } else if (value === 2) {
                status = "类型二";
            } else if (value === 3) {
                status = "类型三";
            } else if (value === 4) {
                status = "类型四";
            }
            return status;
        }
    })
    .filter('logoForm', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "PC端LOGO"
            } else if (value == 2) {
                status = "WAP端LOGO"
            }
            return status;
        }
    })
    .filter('floatType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "左浮动";
            } else if (value === 2) {
                status = "右浮动";
            }
            return status;
        }
    })
    .filter('imgStatus', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "停用";
            } else if (value === 2) {
                status = "启用";
            }
            return status;
        }
    })
    .filter('noticeWay', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "方式一";
            } else if (value === 2) {
                status = "方式二";
            } else if (value === 3) {
                status = "方式三";
            } else if (value === 4) {
                status = "方式四";
            }
            return status;
        }
    })
    .filter('noticeType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "中间弹框";
            } else if (value === 2) {
                status = "左下弹框";
            } else if (value === 3) {
                status = "右下弹框";
            }
            return status;
        }
    })
    //公司入款方式
    .filter('incomeWay', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "公司入款";
            } else if (value === 2) {
                status = "线上入款";
            } else if (value === 0) {
                status = "人工入款";
            }
            return status;
        }
    })
    //注册文案模板类型
    .filter('registerType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "会员注册";
            } else if (value === 2) {
                status = "代理注册";
            } else if (value === 3) {
                status = "开户协议";
            }
            return status;
        }
    })
    .filter('siteArr', function () {

        return function (value) {
            var status = "";
            if (value === "1") {
                status = "全站点";
            } else {
                status = value;
            }
            return status;
        }
    })
    .filter('applicationStatus', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "待审核";
            } else if (value === 2) {
                status = "审核通过";
            } else if (value === 3) {
                status = "审核不通过";
            }
            return status;
        }
    })
    .filter('clientType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "pc";
            } else if (value === 2) {
                status = "wap";
            } else if (value === 3) {
                status = "andriod";
            } else if (value === 4) {
                status = "ios";
            }
            return status;
        }
    })
    .filter('sourceType', function () {

        return function (value) {
            var status = "";
            if (value === 0) {
                status = "人工存入";
            } else if (value === 1) {
                status = "公司入款";
            } else if (value === 2) {
                status = "线上入款";
            } else if (value === 3) {
                status = "人工取出";
            } else if (value === 4) {
                status = "线上取款";
            } else if (value === 5) {
                status = "出款";
            } else if (value === 6) {
                status = "注册优惠";
            } else if (value === 7) {
                status = "下单";
            } else if (value === 8) {
                status = "额度转换";
            } else if (value === 9) {
                status = "优惠返水";
            } else if (value === 10) {
                status = "自助返水";
            } else if (value === 11) {
                status = "会员返佣";
            }
            return status;
        }
    })
    .filter('operationTypes', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "存入";
            } else if (value === 2) {
                status = "取出";
            }
            return status;
        }
    })
    .filter('payType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "已支付";
            } else if (value === 2) {
                status = "未支付";
            }
            return status;
        }
    })
    .filter('activityType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "类型一";
            } else if (value === 2) {
                status = "类型二";
            } else if (value === 3) {
                status = "类型三";
            } else if (value === 4) {
                status = "类型四";
            }
            return status;
        }
    })
    .filter('typeArr', function () {
        var type_id = '';
        return function (val) {
            if (val == null) {
                return val = '';
            } else {
                var arr = val.split(",");
                for (var i = 0; i < arr.length; i++) {
                    if (i >= 1) {
                        type_id += ',';
                    }
                    if (arr[i] === "1") {
                        type_id += "客户后台";
                    } else if (arr[i] === "2") {
                        type_id += "代理后台";
                    } else if (arr[i] === "3") {
                        type_id += "前台";
                    } else if (arr[i] === "4") {
                        type_id += "wap端";
                    }
                }
                ;
                var vab = type_id;
                type_id = ""
                return vab;
            }

        };
    })
    //
    // .filter('fiterTime',function(){
    //
    //     return function(nS) {
    //         return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    //     }
    // })
    .filter('isOpen', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "开启";
            } else {
                status = "关闭";
            }
            return status;
        }
    })
    .filter('siteStatusd', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "开启";
            } else if (value === 2) {
                status = "关闭";
            } else if (value === 3) {
                status = "暂停";
            }
            return status;
        }
    })
    .filter('configurationType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "中间";
            } else if (value === 2) {
                status = "左下";
            } else if (value === 3) {
                status = "右下";
            }
            return status;
        }
    })
    .filter('CashType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "额度转换";
            } else if (value === 2) {
                status = "额度加款 ";
            } else if (value === 3) {
                status = "额度扣款";
            } else if (value === 4) {
                status = "预借";
            } else if (value === 5) {
                status = "业主充值";
            }
            return status;
        }
    })
    .filter('operationType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "增加";
            } else if (value === 2) {
                status = "删除 ";
            } else if (value === 3) {
                status = "查看";
            } else if (value === 4) {
                status = "修改";
            }
            return status;
        }
    })
    .filter('doType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "存入";
            } else if (value === 2) {
                status = "取出 ";
            }
            return status;
        }
    })
    .filter('Recharge', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "第三方入款";
            } else if (value === 2) {
                status = "公司入款";
            }
            return status;
        }
    })
    .filter('dropType', function () {
        return function (value) {
            var status = "";
            if (value === 1) {
                status = "掉单审核中";
            } else if (value === 2) {
                status = "审核通过";
            } else if (value === 3) {
                status = "无效申请";
            }
            return status;
        }
    })

    .filter('trustHtml', function ($sce) {

        return function (input) {

            return $sce.trustAsHtml(input);
            console.log(input);

        }

    })
    .filter('cashType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "额度转换";
            } else if (value === 2) {
                status = "额度加款";
            } else if (value === 3) {
                status = "额度扣款";
            } else if (value === 4) {
                status = "预借";
            } else if (value === 5) {
                status = "业主充值";
            }
            return status;
        }
    })
    .filter('thirdType', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "第三方入款";
            } else if (value === 2) {
                status = "公司入款";
            }
            return status;
        }
    })
    .filter('filterQuotaRecord', function () {

        return function (value) {
            var status = "";
            if (value === 1) {
                status = "开启";
            } else if (value === 2) {
                status = "掉单";
            }
            return status;
        }
    })
    //新增请求方式过滤器 -- wdl
    .filter('routeType', function () {
        return function (value) {
            console.log(typeof value);
            var status = "";
            switch (value) {
                case 1 :
                case "1":
                    status = "GET";
                    break;
                case 2 :
                case "2":
                    status = "POST";
                    break;
                case 3 :
                case "3":
                    status = "PUT";
                    break;
                case 4 :
                case "4":
                    status = "DELETE";
                    break
            }
            return status;
        }
    })
;