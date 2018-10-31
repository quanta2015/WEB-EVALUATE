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


var stdObj, classes, homeworks, myclass, select;

var categories=[];
var series = [{
   name: '自我评价',
   data: []
           }, {
   name: '小组评价',
   data: []
           }, {
   name: '教师评价',
   data: []
           } 
]

//初始化渲染
$(document).ready(function() {
    $.ajax({
        url: '../php/final_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取学生数据
            // console.log(data);
            stdObj = JSON.parse(data);
            console.log(stdObj);
            stdObj_data = stdObj;
            // console.log(stdObj_data);
            // for (var i = 0; i < stdObj_data.data.length; i++) {
            //     if((stdObj_data.data)[i].groupGrade) (stdObj_data.data)[i].groupGrade = Math.round((stdObj_data.data)[i].groupGrade);
            //     var result = Math.round((stdObj_data.data)[i].studentGrade * (stdObj_data.data)[i].s_percent*1.0 / 100 + (stdObj_data.data)[i].teacherGrade * (stdObj_data.data)[i].t_percent*1.0 / 100 + (stdObj_data.data)[i].groupGrade * (stdObj_data.data)[i].g_percent*1.0 / 100);
            //     (stdObj_data.data)[i].totalGrade = Math.round(result);
            //     console.log((stdObj_data.data)[i]);
            // }
            stdObj_data.data.map(item => {
                item.groupGrade = Math.round(item.groupGrade);
                item.totalGrade = item.groupGrade * 1.0 * item.g_percent / 100 
                + item.selfGrade * 1.0 * item.s_percent / 100 
                + item.teacherGrade * 1.0 * item.t_percent / 100;
                return item
            })

            //获取模版
            var jsRenderTpl = $.templates('#theTmplx');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdObj_data.data);
            $('.boxx').html(finalTpl);
        }
    });
   $.ajax({
        url: '../php/groupeval_search.php',
        type: 'get',
        async: false,
        success: function (data) {
            console.log(data);
            select = JSON.parse(data); 
            console.log(select.data);

            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl1 = jsRenderTpl(select.data);
            $('.box').html(finalTpl1);

             //获取模版
            var jsRenderTpl = $.templates('#tmp');
            //模版与数据结合
            var finalTpl = jsRenderTpl(select.data);
            $('#list').html(finalTpl);

            for(var i = 0; i < select.data.length; i++) {
                categories.push(select.data[i].student.name);
                series[0].data.push(select.data[i].s_pgrade);
                series[1].data.push(select.data[i].g_pgrade);
                series[2].data.push(select.data[i].t_pgrade);
            }
            console.log(series);     
        }
    });
   
    $.ajax({
        url: '../php/class_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取所有班级
           // console.log(data);
            classes = JSON.parse(data);
            // console.log(classes);
            var context;
            if (classes.code == 0) {
                for (var i = 0; i < classes.data.length; i++)
                    context = context + "<option>" + classes.data[i].class_name + "</option>";
                context = context + "<option selected=\"select\">全部班级</option>";
                $("#classSlct").html(context);
            } else if (classes.code == 77) $("#classSlct").html("<option>没有班级</option>");
            else if (classes.code == 22)  myclass = classes.msg;
        }
    });

    $.ajax({
        url: '../php/task_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取所有作业
            homeworks = JSON.parse(data);
            // console.log(homeworks);
                var context;
    for (var i = 0; i < homeworks.data.length; i++) 

            context = context + "<option>" + homeworks.data[i].task_title + "</option>";

    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);

        }


    });
var chart = Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '堆叠条形图'
    },
    xAxis: {
        categories
    },
    yAxis: {
        min: 0,
        max:300,
        title: {
            text: '成绩图表'
        }
    },
    legend: {
        /* 图例显示顺序反转
         * 这是因为堆叠的顺序默认是反转的，可以设置 
         * yAxis.reversedStacks = false 来达到类似的效果 
         */
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series
});




});
    //二级联动
$("#classSlct").change(function() {
    var context;
    for (var i = 0; i < homeworks.data.length; i++) {
        console.log(homeworks.data[i].publish_class);
        if (homeworks.data[i].publish_class == $("#classSlct").val()||$("#classSlct").val()=="全部班级") {
            context = context + "<option>" + homeworks.data[i].task_title + "</option>";
        }
    }
    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);
});



//查询
$("#minisearch").click(function() {
    var newstdObj=new Array();
    var newselect=new Array();
        for (var i = 0; i < select.data.length; i++){
            if((select.data[i].task_title == $("#taskSlct").val()||$("#taskSlct").val() == "全部作业")
                &&(select.data[i].user_class == $("#classSlct").val()||$("#classSlct").val() == "全部班级" ||select.data[i].user_class == myclass))
        

               newstdObj.push(select.data[i]);
        }

    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdObj);
    $('.box').html(finalTpl);

    var newstdObjx=new Array();
        for (var i = 0; i < stdObj.data.length; i++){
            if((stdObj.data[i].task_title == $("#taskSlct").val()||$("#taskSlct").val() == "全部作业")
                &&(stdObj.data[i].user_class == $("#classSlct").val()||$("#classSlct").val() == "全部班级" ||stdObj.data[i].user_class == myclass))
        

               newstdObjx.push(stdObj.data[i]);
        }

    //获取模版
    var jsRenderTpl = $.templates('#theTmplx');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdObjx);
    $('.boxx').html(finalTpl);

    for (var i = 0; i < select.data.length; i++){
        if((select.data[i].task_title == $("#taskSlct").val()||$("#taskSlct").val() == "全部作业")
            &&(select.data[i].user_class == $("#classSlct").val()||$("#classSlct").val() == "全部班级" ||select.data[i].user_class == myclass))
            newselect.push(select.data[i]);
        }
        //获取模版
        var jsRenderTpl = $.templates('#tmp');
        //模版与数据结合
        var finalTpl = jsRenderTpl(newselect);
        $('#list').html(finalTpl);
        categories.splice(0,categories.length);
        series[0].data.splice(0,series[0].data.length);
        series[1].data.splice(0,series[1].data.length);
        series[2].data.splice(0,series[2].data.length);
        for(var i=0;i<newselect.length;i++){
            categories.push(newselect[i].student.name);
            series[0].data.push(newselect[i].s_pgrade);
            series[1].data.push(newselect[i].g_pgrade);
            series[2].data.push(newselect[i].t_pgrade);
        }
        console.log(series);

var chart = Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '堆叠条形图'
    },
    xAxis: {
        categories
    },
    yAxis: {
        min: 0,
        max:300,
        title: {
            text: '成绩图表'
        }
    },
    legend: {
        /* 图例显示顺序反转
         * 这是因为堆叠的顺序默认是反转的，可以设置 
         * yAxis.reversedStacks = false 来达到类似的效果 
         */
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series
});



});


// var categories = ['章薇', '叶艳洁', '蔡雅洁', '陶娣', '杨德杰', '章薇', '叶艳洁', '蔡雅洁', '陶娣', '杨德杰']
// var series = [{
//    name: '自我评价',
//    data: [10, 15, 20, 25, 30, 10, 15, 20, 25, 30]
//            }, {
//    name: '小组评价',
//    data: [10, 15, 20, 25, 30, 10, 15, 20, 25, 30]
//            }, {
//    name: '教师评价',
//    data: [10, 15, 20, 25, 30, 10, 15, 20, 25, 30]
//            }]



