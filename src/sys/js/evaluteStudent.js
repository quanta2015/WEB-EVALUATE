var groupNumber, stdstdObj;
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
        //选择作业框选项初始化 
         
                var context;
                for (var i = 0; i <stdstdObj.data.length; i++)
            context = context + "<option>" +stdstdObj.data[i].task_title + "</option>";
      
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
    url = "evaluteDetailStd.html?dotask_id="+doTask_id+"&role="+role;
    window.location.href = url;
    console.log(doTask_id);
}; 
