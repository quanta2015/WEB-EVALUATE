$(document).ready(function() {
	//查找老师所有的班级
	$.ajax({
		url: '../php/class_search.php',
		type: "post",
		async: false,
		success: function(data) {
			classes = JSON.parse(data);
			var context;
			if(classes.code == 0) {
				for(var i = 0; i < classes.data.length; i++)
					$("#clsCh").append("<option>" + classes.data[i].class_name + "<option>");	
			}
			else if(classes.code == 77)
				$("#clsCh").append("<option> 没有班级 </option>");
		}
	});
	//查询指定班级的任务
	$("#minisearch").click(function {
		$.ajax({
			url: '../php/task_search.php',
			type: 'post',
			async: false,
			data: {class: $("#clsCh").val()},
			success: function(data) {
				obj = JSON.parse(data);
				var template = $.template("testTmpl");
				htmlOutput = template.render(obj.data);
				$(".box").html(htmlOutput);
			}
		})
	});
});

