var stdObj, classes, homeworks;
var role = 1;
//初始化渲染
$(document).ready(function() {
    $.ajax({
        // url: '../php/tevalute_search.php',
        // type: 'POST',
        // async: false,
        // data: {role: "1"},
        // success: function(data) {
        //     //获取学生数据
        //     stdObj = JSON.parse(data);
        //     console.log(stdObj.data);
        //     //获取模版
        //     var jsRenderTpl = $.templates('#theTmpl');
        //     //模版与数据结合
        //     var finalTpl = jsRenderTpl(stdObj.data);
        //     $('.box').html(finalTpl);
        // }
        url: '../php/final_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取学生数据
            //console.log(data);
            stdObj = JSON.parse(data);
            console.log(stdObj);
            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdObj.data);
            $('.box').html(finalTpl);
        }
    });
    $.ajax({

    })
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

        }
    });
   $.ajax({
        url:'../php/task_search.php',
        type:"GET",
        data:'',
        async:false,
        success: function(data) {
        //    console.log(data);
            homeworks = JSON.parse(data);
            console.log( homeworks);
          var context;
    for(var i = 0; i <  homeworks.data.length; i++) 
 
            context = context + "<option>" + homeworks.data[i].task_title + "</option>";
 
    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);
        }   
    });
});
//二级联动
$("#classSlct").change(function() {
    var context;
    for(var i = 0; i <  homeworks.data.length; i++) 
        if( homeworks.data[i].publish_class == $("#classSlct").val()|| $("#classSlct").val()=="全部班级")
            context = context + "<option>" + homeworks.data[i].task_title + "</option>";
 
    context = context + "<option selected=\"select\">全部作业</option>";
    $("#taskSlct").html(context);
});

//查询
$("#minisearch").click(function() {

 var newstdObj=new Array();
        for (var i = 0; i < stdObj.data.length; i++){
            if((stdObj.data[i].task_title == $("#taskSlct").val()||$("#taskSlct").val() == "全部作业")
                &&(stdObj.data[i].user_class == $("#classSlct").val()||$("#classSlct").val() == "全部班级" ))
        

               newstdObj.push(stdObj.data[i]);
        }
    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdObj);
    $('.box').html(finalTpl);
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

function method() {
    var doTask_id = $(this).attr("id");
    console.log($(this).attr("id"));
    var task_title;
    for(var i = 0; i < stdObj.data.length; i++) {
        if(doTask_id == stdObj.data[i].doTask_id)
            task_title = stdObj.data[i].task_title;
    }
    url = "evaluteDetail.html?dotask_id="+doTask_id+"&role="+role+"&task_title="+task_title;
    window.location.href = url;
    console.log(doTask_id);
};

// function managementPage(pagesize) {
//     var obj = $('pagination').twbsPagination({
//         totalPages: pagesize,//总页数
//         startPage: 1,//起始页
//         visiblePages: pagesize>5?5:pagesize,//展示页数，超出5页展示5页，未超出时展示总页数
//         initiateStartPageClick: true,
//         hideOnlyOnePage: true,//只有一页时不展示分页
//         onPageClick:function (event,page) {//点击页面事件，回调函数，只能使用ajax异步加载，暂时未发现能够直接在前端操作data的方法。
//             $(this).addClass("active").siblings().removeClass("active");
 
//             var start = (page - 1)*5+1;
//             var end = page*5+1;
//             var param = {
//                 'start':start,
//                 'end':end
//             };
//             ds.manageSystem(manageSystemUrl,param);//异步加载的方法，主要需要将起始页与结束页带回后台
//         }
//     });
//     obj.data();//加载分页样式
// }
