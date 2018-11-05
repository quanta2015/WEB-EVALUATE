
$(".final").click(function () {

        if($('#password').val()==$('#confirm_password').val() && $('#password').val() ){
          $.ajax({
        url: '../php/pwdChange.php',
        type: "POST",
        data: {newpassword:$('#password').val()},

        success: function (data) {
            console.log(data);
            var obj = JSON.parse(data);
            if (obj.code == 0) {
                toastr.success('密码修改成功');
            } else if (obj.code == 99) {
                toastr.warning('密码修改失败');
            } else if (obj.code == 55){
                toastr.error('数据库连接失败');
            }
        }
    });
    }
     else if (!($('#password').val())){
          alert("密码不能为空！");
     }
    else{
         alert("两次密码不一致");
    }

 
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
