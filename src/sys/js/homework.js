var id = 0;

$(document).ready(function(){
    getData();

    //点击提交按钮
    $("#submit").click(function(e){
        console.log(id);
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
                    url = "student.html";//此处拼接内容
                    window.location.href = url;

                    //向后端传值
                    $.ajax({
                        type:"POST",
                        url: '../php/upload.php',
                        data: {
                            id: id,//dotask_id
                            doc_url: $("#doc").val(),
                            ppt_url: $("#ppt").val(),
                            video_url: $("#mp4").val()
                        },

                        success: function (data) {
                            console.log(data);
                            var obj = JSON.parse(data);
                            console.log(obj);
                            // if (obj.code == 0) {
                            //     toastr.success('已成功提交作业');
                            // } else if (obj.code == 35) {
                            //     toastr.warning('存在空输入');
                            // } else if (obj.code == 20) {
                            //     toastr.warning('提交失败');
                            // } else if (obj.code == 55) {
                            //     toastr.error('数据库连接失败');
                            // } else if (obj.code == 53) {
                            //     toastr.error('不是允许的文件类型');
                            // } else if (obj.code == 68) {
                            //     toastr.error('文件超过允许的大小');
                            // }
                        }
                    });
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




$("#doc").fileinput({
    uploadUrl:'/../../homework',//上传的地址
    alloweFileExtensions:['doc','docx','pdf','ppt','pptx','mp4','avi','flv','wmv','mov','zip','rar','7z'],//后缀
    enctype: 'multipart/form-data',
    dropZoneTitle: "请通过拖拽文件放到这里"
}).on("fileuploaded",function(event,data,previewId,index){
    $("#modal1").modal("hide");
    var data = data.response.lstOrderImport;
    if(data==undefined){
        toastr.error('文件格式类型不正确');
        return;
    }
})
.on("filebatchselected",function(event,files){
    $(this).fileinput("upload");
});

