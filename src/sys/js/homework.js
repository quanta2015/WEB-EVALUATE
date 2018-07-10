var arr = new Array();//状态数组

//点击提交按钮
$(document).on("click", "#submit", function (e) {
    console.log(1);
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
                i = $("#head").text();
                arr[i-1] = "1";
                url = "student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;//此处拼接内容
                window.location.href = url;
            } 
        }
    });
});

//点击返回按钮
$(document).ready(function(){
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

    for(var j=0;j<((s.length+1)/2);++j){
        arr[j] = s[(j+1)*2-2];
    }
    $("#head").text(i);
}


