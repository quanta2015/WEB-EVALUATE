var id = 0;

$(document).ready(function(){
    getData();
    
    //点击提交按钮
    $("#submit").click(function(e){
        if($('#doc')[0].files[0]==null||$('#ppt')[0].files[0]==null||$('#mp4')[0].files[0]==null)
            alert("必须完成三项才能提交作业");
        else{
            bootbox.confirm({
                message: "确认提交作业？",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-myStyle'
                    }
                },
                callback: function(result) {
                    if(result) {

                        var formData = new FormData();
                        formData.append("fileupload[]",$('#doc')[0].files[0]);
                        formData.append("fileupload[]",$('#ppt')[0].files[0]);
                        formData.append("fileupload[]",$('#mp4')[0].files[0]);
                        formData.append("dotask_id",id);

                    //向后端传值
                    $.ajax({
                        type:"POST",
                        url: '../php/upload.php',
                        data: formData,
                        cache: false,
                        processData: false,
                        contentType: false,
                        async: false,
                        dataType: 'json',
                        success: function (data) {
                            console.log(data);
                            var obj = JSON.parse(data);
                            console.log(obj);
                        }
                    });


                    url = "student.html";//此处拼接内容
                    window.location.href = url;
                } 
            }
        });
        }
    });
    //点击返回按钮
    $("#return_s").click(function(e){
        i = $("#head").text();
        window.location.href="student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;
    });
})

function back(){
    i = $("#head").text();
    window.location.href="student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;
}


function getData(){

    var task_content = $.query.get("task_content");
    var dotask_id = $.query.get("dotask_id");
    var title = $.query.get("task_title");

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





