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

/*      
                        document.getElementById("click1").onclick=function(){
                            var text=document.getElementById("t1");
                            var val=text.innerHTML;
                            text.innerHTML="<input type='text' id='m' value="+val+" />";
                            document.getElementById("m").addEventListener("blur",function(e){
                                text.innerHTML=document.getElementById("m").value;
                            });
                        };
                        */                       
