
//飘浮框
document.getElementById("b").onmouseover = function(e){
    var target2 = e.target;
    // var bol = $(e.target).parents().is("float_boxid");
    var children = this.children;
    for(var i=0;i<children.length;i++){
        if(target2 == children[i]){
            j = i;
            return;
        }
    }
    var all = document.getElementsByName("float_box");
    all[j].style.display="block";
}
document.getElementById("b").onmouseout = function(e){
    var all = document.getElementsByName("float_box");
    all[j].style.display="none";
}


//显示开始与截止时间
function showTime(arr){
    for(var i=0;i<arr.length;++i){
        var date1 = dayjs(arr[i].end_date);
        var date2 = dayjs(arr[i].publish_date);
        var date3 = dayjs().format("YYYY-MM-DD HH:mm:ss");
        var days1 = date1.diff(date3, 'days'); 
        var days2 = -date2.diff(date3, 'days'); 
        var hours1 = date1.diff(date3, 'hours')-days1*24;
        var hours2 = -date2.diff(date3, 'hours')-days1*24;

        if(days2 == 0){
            arr[i].publish_date = "已经发布 "+hours2+" 小时";
        }
        else{
            arr[i].publish_date = "已经发布 "+days2+" 天";
        }
        if(days1 <= 0){
            arr[i].end_date = "还剩 "+hours1+" 小时";
            if(hours1 <= 0){
                arr[i].end_date = "已截止";
                arr.splice(i,1);//删除已截止的作业
                i = i-1;
            }
        }
        else{
            arr[i].end_date = "还剩 "+days1+" 天";
        }
    }
}


//后端传输数据
$(function(){
    var obj;
    $.ajax({
        url:'../php/task_search.php',
        type:"GET",
        data:'',
        async:false,
        success: function(data) {
            console.log(data);
            obj = JSON.parse(data);
            console.log(obj);
            var template = $.templates('#testTmpl');
            htmlOutput = template.render(obj.data);
            $(".boxx").html(htmlOutput);
        }   
    });

    showTime(obj);
    var jsRenderTpl = $.templates('#testTmpl');
    var finalTpl = jsRenderTpl(obj.data);
    $('.boxx').html(finalTpl);


    var j=0;


 $(".Btn_blue").click(function() {
     
        var i = $(this).attr("name");
           console.log(obj.data[i]);
        url = "homework.html?i="+i+"&task_content="+obj.data[i]["task_content"];//此处拼接内容
      window.location.href = url;
    });  
});


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
