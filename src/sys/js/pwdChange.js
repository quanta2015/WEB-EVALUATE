$("#submit").click(function () {

        if($('#password').val()==$('#confirm_password').val()){
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

    else{
         alert("两次密码不一致");
    }

 
});
