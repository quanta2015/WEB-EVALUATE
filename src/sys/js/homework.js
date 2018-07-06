$(document).on("click", "#submit", function (e) {
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
                // alert('点击了确认按钮');
                // location.href="student.html?state=1";
                url = "student.html?state=1";//此处拼接内容
                window.location.href = url;
            } 
        }
    });
});
