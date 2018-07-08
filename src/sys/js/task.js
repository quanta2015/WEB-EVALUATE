$(document).ready(function () {
    //班级下拉菜单设置
    var clsname = ['软工162', '软工161', '物联网161', '物联网162'];
    var clsval;

    for (i = 0, len = clsname.length; i < len; i++) {
        clsval = clsname[i];
        $("#clsCh").append("<option>" + clsval + "</option>");
    }
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
    });


});



$("#submit").click(function(){
    console.log("fabu");

    $.ajax({
        url:'../php/publish.php',
        type:"POST",
        data:$('#content-main').serialize(),
        success: function(data) {
           console.log(data);
           
        }
    });
});
