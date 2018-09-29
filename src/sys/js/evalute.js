var stdObj, classes, homeworks;
//初始化渲染
$(document).ready(function() {
    $.ajax({
        url: '../php/tevalute_search.php',
        type: 'POST',
        async: false,
        data: {role: "1"},
        success: function(data) {
            //获取学生数据
            console.log(data);
            stdObj = JSON.parse(data);
            console.log(stdObj.data);
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
                context = context + "<option>全部班级</option>";
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
            if (homeworks.code == 0) {
                var context;
                for (var i = 0; i < homeworks.data.length; i++)
                    context = context + "<option>" + homeworks.data[i].task_title + "</option>";
                context = context + "<option>全部作业</option>";
                $("#taskSlct").html(context);
            } else if (homeworks.code == 77) $("#taskSlct").html("<option>没有作业</option>");
        }
    });
});

//二级联动
$("#classSlct").change(function() {
    $.ajax({
        url: '../php/task_search.php',
        type: "POST",
        async: false,
        data: { class: $("#classSlct").val() },
        success: function(data) {
            homeworks = JSON.parse(data);
            console.log(homeworks);
            if (homeworks.code == 0) {
                var context;
                for (var i = 0; i < homeworks.data.length; i++)
                    context = context + "<option>" + homeworks.data[i].task_title + "</option>";
                context = context + "<option>全部作业</option>";
                $("#taskSlct").html(context);
            } else if (homeworks.code == 77) $("#taskSlct").html("<option>没有作业</option>");
        }
    });
});

//查询
$("minisearch").click(function() {
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