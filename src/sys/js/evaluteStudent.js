var groupNumber, stdstdObj;
var user_class;
var role = 3;

$("#groupnumSure").click(function() {
	groupNumber = document.getElementById('groupNum').value;
});
//初始化渲染
$(document).ready(function() {



    $.ajax({
        url: '../php/tevalute_search.php',
        type: 'POST',
        async: false,
        data: {role: 3},
        success: function(data) {
            //获取学生数据
            //console.log(data);
            stdstdObj = JSON.parse(data);
            //console.log(stdstdObj.data);
            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdstdObj.data);
            $('.box').html(finalTpl);
          }
    });

    $.ajax({
        url: '../php/class_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            user_class = JSON.parse(data);
            console.log(user_class);
        }
    });

    $.ajax({
        url: '../php/task_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //console.log(data);
            var taskArr = JSON.parse(data);
            var context;
            for(var i = 0; i < taskArr.data.length; i++) {
                if(taskArr.data[i].publish_class == user_class.msg) {
                    context = context + "<option>" + taskArr.data[i].task_title + "</option>";
                }
            }
            context = context + "<option selected=\"select\">全部作业</option>";
            $("#taskSlct").html(context);
        }
    });
});

//查询效果
$("#minisearch").click(function() {
	var newstdstdObj = [];
	for(var i = 0; i < stdstdObj.data.length; i++) {
		if(stdstdObj.data[i].task_title == $("#taskSlct").val()|| $("#taskSlct").val()=="全部作业")
			newstdstdObj.push(stdstdObj.data[i]);
	}
    //重新渲染
    console.log(newstdstdObj);
    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdstdObj);
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

};

function method() {
    var doTask_id = $(this).attr("id");
    console.log($(this).attr("id"));
    var task_title;
    for(var i = 0; i < stdstdObj.data.length; i++) {
        if(doTask_id == stdstdObj.data[i].doTask_id)
            task_title = stdstdObj.data[i].task_title;
    }
    url = "evaluteDetailStd.html?dotask_id="+doTask_id+"&role="+role+"&task_title="+task_title;
    window.location.href = url;
    console.log(doTask_id);
}; 
