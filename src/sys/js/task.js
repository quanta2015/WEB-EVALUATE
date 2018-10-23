  toastr.options.positionClass = 'toast-top-center';
$(document).ready(function () {
    //班级下拉菜单设置
    //查找老师所有的班级
    $.ajax({
        url: '../php/class_search.php',
        type: "POST",
        async: false,
        success: function (data) {

            classes = JSON.parse(data);
            console.log(classes);
            var context;
            if (classes.code == 0) {
                for (var i = 0; i < classes.data.length; i++)
                    $("#clsCh").append("<option>" + classes.data[i].class_name + "</option>");
            } else if (classes.code == 77) $("#clsCh").append("<option> 没有班级 </option>");


        }

    });
    //退出登录
    //    $.ajax({
    //        url: '../php/signouts.php',
    //        type: "POST",
    //        success: function (data) {
    //            result = JSON.parse(data);
    //            if (result.code == 0) {
    //                alert("退出成功！")
    //            } else if {
    //
    //            };
    //
    //        }
    //    });
    //开始时间和截止时间设置
    $('input[name="daterange"]').daterangepicker({
        locale: {
            format: 'YYYY/MM/DD HH:mm:ss',
            applyLabel: '确定',
            cancelLabel: '取消',
            fromLabel: '起始时间',
            toLabel: '结束时间',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        },
        minDate: '2018/01/01 00:00:00', //最小时间
        showDropdowns: true,
        showWeekNumbers: true, //是否显示第几周
        dateLimit: {
            days: 300
        }, //起止时间的最大间隔
        timePicker: true,
        timePickerIncrement: 1, //时间的增量，单位为分钟
        timePicker12Hour: false,
        opens: 'right', //日期选择框的弹出位置
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary blue',
        cancelClass: 'btn-small',
        format: 'YYYY/MM/DD HH:mm:ss', //控件中from和to 显示的日期格式MM/DD/YYYY
        separator: '-',
        defaultDate: new Date(),
    })




    $("#submit").click(function () {
        $.ajax({
            url: '../php/publish.php',
            type: "POST",
            data: {
                class: $("#clsCh").val(),
                title: $("#taskTitle").val(),
                daterange: $("#daterange").val(),
                task: $("#taskRequest").val(),
                s_percent: $("#s_percent").val(),
                g_percent: $("#g_percent").val(),
                t_percent: $("#t_percent").val(),
                group_num: $("#group_num").val()

            },

            success: function (data) {
                console.log(data);
                var obj = JSON.parse(data);
                if (obj.code == 0) {
                    toastr.success('已成功发布任务');
                } else if (obj.code == 80) {
                    toastr.warning('存在空输入');
                } else if (obj.code == 20) {
                    toastr.warning('发布失败');

                } else if (obj.code == 55) {
                    toastr.error('数据库连接失败');
                }

            }
        })
    });


});

function cancel() {
    $.ajax({
        url: '../php/signout.php',
        type: "POST",
        success: function (data) {
            result = JSON.parse(data);
            if (result.code == 0) {
                alert("退出成功");
                window.location.href = "../index.html";
            } else {
                alert("退出失败！");
            };

        }

    })

}
