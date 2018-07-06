

$("#login-button").click(function(){
     document.getElementById('pwd').style.display='none';
      document.getElementById('number').style.display='none';
    $.ajax({
        url:'php/login.php',
        type:"POST",
        data:$('#login').serialize(),
        success: function(data) {
           console.log(data);
           var obj = JSON.parse(data);
           if(obj.code == 0){
            if(obj.data.user_role == 0)
             window.location.href = 'pages/task.html';
           }
           if(obj.code == 70){
            document.getElementById('number').style.display='inline';
            document.getElementById('number').innerHTML="账号不能为空";
           }
           if(obj.code == 80){
            document.getElementById('pwd').style.display='inline';
            document.getElementById('number').innerHTML="密码不能为空";
           }
            if(obj.code == 88){
            document.getElementById('number').style.display='inline';
            document.getElementById('number').innerHTML="账号不存在";
           }
            if(obj.code == 99){
            document.getElementById('pwd').style.display='inline';
            document.getElementById('pwd').innerHTML="密码错误";
           }


        }
    });
});
