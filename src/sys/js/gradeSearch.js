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


var stdObj, classes, homeworks;
//初始化渲染
$(document).ready(function() {
    $.ajax({
        url: '../php/final_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取学生数据
            console.log(data);
            stdObj = JSON.parse(data);
            console.log(stdObj.data);

            for (var i = 0; i < stdObj.data.length; i++) {
                var result = stdObj.data[i].student * stdObj.data[i].s_percent / 100 + stdObj.data[i].teacher * stdObj.data[i].t_percent / 100 + stdObj.data[i].group * stdObj.data[i].g_percent / 100;
                stdObj.data[i].totalGrade = result;
            }
            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdObj.data);
            $('.box').html(finalTpl);
        }
    });
    $.ajax({
        url: '../php/class_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取所有班级
            console.log(data);
            classes = JSON.parse(data);
            console.log(classes);
            var context;
            if (classes.code == 0) {
                for (var i = 0; i < classes.data.length; i++)
                    context = context + "<option>" + classes.data[i].class_name + "</option>";
                context = context + "<option selected=\"select\">全部班级</option>";
                $("#classSlct").html(context);
            } else if (classes.code == 77) $("#classSlct").html("<option>没有班级</option>");
        }
    });
    $.ajax({
        url: '../php/task_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取所有作业
            homeworks = JSON.parse(data);
            console.log(homeworks);
        }
    });
});

//二级联动
$("#classSlct").change(function() {
    var context;
    for (var i = 0; i < homeworks.data.length; i++) {
        if (homeworks.data[i].publish_class == $("#classSlct").val()) {
            context = context + "<option>" + homeworks.data[i].task_title + "</option>";
        }
    }
    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);
});

//查询
$("#minisearch").click(function() {
    var newstdObj = [];
    if ($("#classSlct").val() == "全部班级" && $("#taskSlct").val() == "全部作业") {
        newstdObj = stdObj.data;
    } else if ($("#classSlct").val() == "全部班级" && $("#taskSlct").val() != "全部作业") {
        for (var i = 0; i < stdObj.data.length; i++)
            if (stdObj.data[i].task_title == $("#task_title").val())
                newstdObj.push(stdObj.data[i]);
    } else if ($("#classSlct").val() != "全部班级" && $("#taskSlct").val() == "全部作业") {
        for (var i = 0; i < stdObj.data.length; i++)
            if (stdObj.data[i].user_class == $("#classSlct").val())
                newstdObj.push(stdObj.data[i]);
    } else {
        for (var i = 0; i < stdObj.data.length; i++)
            if (stdObj.data[i].user_class == $("#classSlct").val() && stdObj.data[i].task_title == $("#taskSlct").val())
                newstdObj.push(stdObj.data[i]);
    }
    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdObj);
    $('.box').html(finalTpl);
});