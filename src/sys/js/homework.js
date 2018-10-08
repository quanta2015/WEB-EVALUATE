var arr = new Array();//状态数组

$(document).ready(function(){
    //点击提交按钮
    $("#submit").click(function(e){
        bootbox.confirm({
            message: "确认提交作业？",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'.
                    $.ajax({
                        type:"POST",
                        url: '../php/upload.php',
                        data: {
                            task_id: $("#head").val()

                        },

                        success: function (data) {
                            console.log(data);
                            var obj = JSON.parse(data);
                            if (obj.code == 0) {
                                toastr.success('已成功提交作业');
                            } else if (obj.code == 80) {
                                toastr.warning('存在空输入');
                            } else if (obj.code == 20) {
                                toastr.warning('提交失败');
                            } else if (obj.code == 55) {
                                toastr.error('数据库连接失败');
                            }
                        }
                    })
                },
                cancel: {
                    label: 'No',
                    className: 'btn-myStyle'
                }
            },
            callback: function(result) {
                if(result) {
                    i = $("#head").text();
                    arr[i-1] = "1";
                url = "student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;//此处拼接内容
                window.location.href = url;
                } 
            }
        });
    });
    //点击返回按钮
    $("#return_s").click(function(e){
        i = $("#head").text();
        window.location.href="student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;;
    });
})

function back(){
    i = $("#head").text();
    window.location.href="student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;
}


$(function(){
    getData();
});

function getData(){
    var i = $.query.get("i");
    var s = $.query.get("s");
    var task_content = $.query.get("task_content");

    for(var j=0;j<((s.length+1)/2);++j){
        arr[j] = s[(j+1)*2-2];
    }
    $("#head").text(i);
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

