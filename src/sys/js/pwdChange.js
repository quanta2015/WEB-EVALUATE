function get(){
	var p1 = document.getElementById("password").value;
	var p2 = document.getElementById("confirm_password").value;
	if(p1 == p2){
		alert("修改成功");
        window.location.href = "student.html";
	}
	else{
		alert("两次密码不一致");
		window.location.href = "pwdChange.html";
	}
}