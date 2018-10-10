// var arr = [
// {
//     'task_title':'作业1',
//     'user_num':'1',
//     'user_class':'软工162',
//     'user_name':'陶娣',
//     'selfGrade':98,
//     'groupGrade':85,
//     'teacherGrade':90,
//     'totalGrade':90
// },
// {
//     'task_title':'作业2',
//     'user_num':'1',
//     'user_class':'软工162',
//     'user_name':'陶娣',
//     'selfGrade':98,
//     'groupGrade':85,
//     'teacherGrade':90,
//     'totalGrade':90
// },
// {
//     'task_title':'作业1',
//     'user_num':'2',
//     'user_class':'软工161',
//     'user_name':'叶艳洁',
//     'selfGrade':98,
//     'groupGrade':85,
//     'teacherGrade':90,
//     'totalGrade':90
// },
// {
//     'task_title':'作业2',
//     'user_num':'2',
//     'user_class':'软工161',
//     'user_name':'叶艳洁',
//     'selfGrade':"",
//     'groupGrade':"",
//     'teacherGrade':90,
//     'totalGrade':""
// },
// ]
// //获取模版
// var jsRenderTpl = $.templates('#theTmpl');
// //模版与数据结合
// var finalTpl = jsRenderTpl(arr);
// $('.box').html(finalTpl);



//  var classes, homeworks; //返回的班级信息存储在classes，对应班级作业在homeworks
//  $(document).ready(function() {
//     //查找老师所有的班级
//      $.ajax({
//            url: '../php/class_search.php',
//              type: "POST",
//             async: false,
//              success: function(data) {

//                 classes = JSON.parse(data);
//                 console.log(classes);
//                  var context;
//                 if (classes.code == 0) {
//                     for (var i = 0; i < classes.data.length; i++)
//                        context = context + "<option>" + classes.data[i].class_name + "</option>";
//                     context = context + "<option>全部</option>";
//                    $('#classSlct').html(context);
//                 } else if (classes.code == 77) $('#classSlct').html("没有班级");


//              }

//          }),
//          //查找指定班级的所有作业
//         $.ajax({
//              url: '../php/task_search.php',
//              type: "POST",
//             async: false,
//             data: { class: $("#classSlct").val() },
//              success: function(data) {

//                 homeworks = JSON.parse(data);
//                  console.log(homeworks);
//                 //渲染作业列表
//                  if (homeworks.code == 0) {
//                      var context;
//                      for (var i = 0; i < homeworks.data.length; i++)
//                         context = context + "<option>" + homeworks.data[i].task_title + "</option>";
//                    context = context + "<option>全部</option>";
//                     $('#taskSlct').html(context);
//                  } else if (homeworks.code == 77) $('#taskSlct').html("<option>没有作业</option>");

//             }
//         });

//     $('#classSlct').change(function() {
//          $.ajax({
//              url: '../php/task_search.php',
//             type: "POST",
//             async: false,
//             data: { class: $("#classSlct").val() },
//             success: function(data) {
//                  homeworks = JSON.parse(data);
//                 console.log(homeworks);
//                  if (homeworks.code == 0) {
//                      var context;
//                     for (var i = 0; i < homeworks.data.length; i++)
//                      context = context + "<option>" + homeworks.data[i].task_title + "</option>";
//                     context = context + "<option>全部</option>";
//                      $('#taskSlct').html(context);
//                } else if (homeworks.code == 77) $('#taskSlct').html("<option>没有作业</option>");

//             }


//          });

//      })


//  })

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
            // if (homeworks.code == 0) {
            //     var context;
            //     for (var i = 0; i < homeworks.data.length; i++)
            //         context = context + "<option>" + homeworks.data[i].task_title + "</option>";
            //     context = context + "<option selected=\"select\">全部作业</option>";
            //     $("#taskSlct").html(context);
            // } else if (homeworks.code == 77) $("#taskSlct").html("<option>没有作业</option>");
        }
    });
});

//二级联动
$("#classSlct").change(function() {
    var context;
    for(var i = 0; i < homeworks.data.length; i++) {
        if(homeworks.data[i].publish_class == $("#classSlct").val()){
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