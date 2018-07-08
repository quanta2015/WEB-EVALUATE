var arr = new Array();//状态数组

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
                i = $("#head").text();
                arr[i-1] = "1";
                url = "student.html?state=1"+"&i="+i+"&a=1"+"&arr="+arr;//此处拼接内容
                window.location.href = url;
            } 
        }
    });
});



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
