function get(){
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("confirm_password").value;
    if(p1 == p2){
        alert("修改成功");
    }
    else{
        alert("两次密码不一致");
    }
}

$("#submit").click(function () {

    $.ajax({
        url: '../../php/pwdChange.php',
        type: "POST",
        data: $('#content-main').serialize(),

        success: function (data) {
            console.log(data);
            var obj = JSON.parse(data);
            if (obj.code == 0) {
                toastr.success('密码修改成功');
            } else if (obj.code == 99) {
                toastr.warning('密码修改失败');
            } else if (obj.code == 1) {
                toastr.waring('两次密码不一致');
            } else if (obj.code == 55){
                toastr.error('数据库连接失败');
            }
        }
    });
});
