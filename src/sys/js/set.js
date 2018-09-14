$(function() { 
	//获取class为caname的元素 
	$(".t2").click(function() { 
		var td = $(".t1"); 
		var txt = td.text(); 
		var input = $("<input type='text' value='" + txt + "'/>"); 
		td.html(input); 
		input.click(function() { return false; }); 
		//获取焦点 
		input.trigger("focus"); 
		//文本框失去焦点后提交内容，重新变为文本 
		input.blur(function() { 
			var newtxt = $(this).val(); 
		//判断文本有没有修改 
		if (newtxt != txt) { 
			td.html(newtxt); 
		} 
		else 
		{ 
			td.html(newtxt); 
		} 
	}); 
	}); 
});

$("#pectSure").click(function() {
	var teaPect = document.getElementByID('teacherPect').value;
	var grpPect = document.getElementByID('groupPect').value;
	var myPect = document.getElementByID('selfPect').value;
	$.ajax({
		url:"../php/set.php",
		type: "POST",
		data: {teacherPect: JSON.stringify(teaPect), groupPect: JSON.stringify(grpPect), selfPect: JSON.stringify(myPect)},
		success: function(data) {
			console.log(data);
		}
	});
});

$("#groupnumSure").click(function() {
	var grpnum = document.getElementByID('groupNum').value;
	$.ajax({
		url:"../php/set.php",
		type: "POST",
		data: {groupNum: JSON.stringify(grpnum)},
		success: function(data) {
			console.log(data);
		}
	});
});           
