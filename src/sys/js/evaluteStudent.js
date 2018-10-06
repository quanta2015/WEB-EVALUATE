var groupNumber, stdstdObj;

$("#groupnumSure").click(function() {
	groupNumber = document.getElementById('groupNum').value;
});
//初始化渲染
$(document).ready(function() {
	//选择作业框选项初始化
	$.ajax({
        url: '../php/task_search.php',
        type: 'get',
        async: false,
        success: function(data) {
            //获取所有班级
            homeworks = JSON.parse(data);
            console.log(homeworks);
            if (homeworks.code == 0) {
                var context;
                for (var i = 0; i < homeworks.data.length; i++){
                    if(homeworks.data[i].publish_class == nowclass)
                        context = context + "<option>" + homeworks.data[i].task_title + "</option>";
                }
                context = context + "<option selected=\"select\">全部作业</option>";
                $("#taskSlct").html(context);
            } else if (homeworks.code == 77) $("#taskSlct").html("<option>没有作业</option>");
        }
    });
    // promise('../php/task_search.php', 'get', false, " ", getAllClass);
    //渲染学生任务
    // $.ajax({
    // 	url: '../php/randgroup.php',
    // 	type: 'get',
    // 	async: false,
    // 	success: function(data) {
    //         stdstdObj = JSON.parse(data);
    //         console.log(stdstdObj.data);
    //         //获取模版
    //         var jsRenderTpl = $.templates('#theTmpl');
    //         //模版与数据结合
    //         var finalTpl = jsRenderTpl(stdstdObj.data);
    //         $('.box').html(finalTpl);
    // 	}
    // })
    // promise('../php/tevalute_search.php', 'POST', false, {role: "1"}, evaluteInit);
    $.ajax({
        url: '../php/tevalute_search.php',
        type: 'POST',
        async: false,
        data: {role: 2},
        success: function(data) {
            //获取学生数据
            console.log(data);
            stdstdObj = JSON.parse(data);
            console.log(stdstdObj.data);
            //获取模版
            var jsRenderTpl = $.templates('#theTmpl');
            //模版与数据结合
            var finalTpl = jsRenderTpl(stdstdObj.data);
            $('.box').html(finalTpl);
        }
    });
});

//查询效果
$("#minisearch").click(function() {
	var newstdstdObj = [];
	for(var i = 0; i < stdstdObj.data.length; i++) {
		if(stdstdObj.data[i].task_title == $("#taskSlct").val())
			newstdstdObj.push(stdstdObj.data[i]);
	}
    //重新渲染
    console.log(newstdstdObj);
    //获取模版
    var jsRenderTpl = $.templates('#theTmpl');
    //模版与数据结合
    var finalTpl = jsRenderTpl(newstdstdObj);
    $('.box').html(finalTpl);
})
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
