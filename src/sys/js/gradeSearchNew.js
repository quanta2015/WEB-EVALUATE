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


var stdObj, classes, homeworks,myclass;
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
                console.log(item.totalGrade)
                return item
            })

            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdObj_data.data);
            $('.box').html(finalTpl);
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
            console.log(classes);
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
            console.log(homeworks);
                var context;
    for (var i = 0; i < homeworks.data.length; i++) 

            context = context + "<option>" + homeworks.data[i].task_title + "</option>";

    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);

        }


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
});



//查询
$("#minisearch").click(function() {
    var newstdObj=new Array();
        for (var i = 0; i < stdObj.data.length; i++){
            if((stdObj.data[i].task_title == $("#taskSlct").val()||$("#taskSlct").val() == "全部作业")
                &&(stdObj.data[i].user_class == $("#classSlct").val()||$("#classSlct").val() == "全部班级" ||stdObj.data[i].user_class == myclass))
        

               newstdObj.push(stdObj.data[i]);
        }

    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdObj);
    $('.box').html(finalTpl);
});