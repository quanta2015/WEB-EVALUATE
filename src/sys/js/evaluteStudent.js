var arr = [{
        'taskID': '001',
        'stdID': '2016210405054',
        'class': '软工162',
        'name': '陶娣',
        'isEvalute': '0'
    },
    {
        'taskID': '001',
        'stdID': '2016210405050',
        'class': '软工162',
        'name': '叶艳洁',
        'isEvalute': '1'
    },
    {
        'taskID': '001',
        'stdID': '2016210405057',
        'class': '软工162',
        'name': '章薇',
        'isEvalute': '1'
    },
    {
        'taskID': '001',
        'stdID': '2016210405060',
        'class': '软工162',
        'name': '蔡雅洁',
        'isEvalute': '0'
    }
];
//获取模版
var jsRenderTpl = $.templates('#theTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);

// var classes, homeworks; //返回的班级信息存储在classes，对应班级作业在homeworks
// $(document).ready(function() {
//     //查找老师所有的班级
//     $.ajax({
//             url: '../php/class_search.php',
//             type: "POST",
//             async: false,
//             success: function(data) {

//                 classes = JSON.parse(data);
//                 console.log(classes);
//                 var context;
//                 if (classes.code == 0) {
//                     for (var i = 0; i < classes.data.length; i++)
//                         context = context + "<option>" + classes.data[i].class_name + "</option>";
//                     context = context + "<option>全部</option>";
//                     $('#classSlct').html(context);
//                 } else if (classes.code == 77) $('#classSlct').html("没有班级");


//             }

//         }),
//         //查找指定班级的所有作业
//         $.ajax({
//             url: '../php/task_search.php',
//             type: "POST",
//             async: false,
//             data: { class: $("#classSlct").val() },
//             success: function(data) {

//                 homeworks = JSON.parse(data);
//                 console.log(homeworks);
//                 //渲染作业列表
//                 if (homeworks.code == 0) {
//                     var context;
//                     for (var i = 0; i < homeworks.data.length; i++)
//                         context = context + "<option>" + homeworks.data[i].task_title + "</option>";
//                     context = context + "<option>全部</option>";
//                     $('#taskSlct').html(context);
//                 } else if (homeworks.code == 77) $('#taskSlct').html("<option>没有作业</option>");

//             }
//         });

//     $('#classSlct').change(function() {
//         $.ajax({
//             url: '../php/task_search.php',
//             type: "POST",
//             async: false,
//             data: { class: $("#classSlct").val() },
//             success: function(data) {

//                 homeworks = JSON.parse(data);
//                 console.log(homeworks);
//                 if (homeworks.code == 0) {
//                     var context;
//                     for (var i = 0; i < homeworks.data.length; i++)
//                         context = context + "<option>" + homeworks.data[i].task_title + "</option>";
//                     context = context + "<option>全部</option>";
//                     $('#taskSlct').html(context);
//                 } else if (homeworks.code == 77) $('#taskSlct').html("<option>没有作业</option>");

//             }


//         });

//     })


// })