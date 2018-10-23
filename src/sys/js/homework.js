var id = 0;

$(document).ready(function(){
    getData();
});

//点击返回按钮
$("#return_s").click(function(e){
    window.location.href="student.html";
});

function back(){
    window.location.href="student.html";
}


function getData(){
    var task_content = $.query.get("task_content");
    var dotask_id = $.query.get("dotask_id");
    var title = $.query.get("task_title");
    var dotask = document.getElementById("dotask");
    dotask.value = dotask_id;
    id = dotask_id;
    $("#head").text(title);
    $("#txt1").text(task_content);
}

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





