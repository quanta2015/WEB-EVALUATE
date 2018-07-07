var state = 0;
(function(jq, g) {
    var arr = {
        'list':[
        {
            'begin': '2018-7-4',
            'end': '2018-7-10',
            // 'state': 0   
        },
        {
            'begin': '2018-7-6',
            'end': '2018-7-21',
            // 'state': 1   
        }
    ]},
        //获取模板
        jsRenderTpl = $.templates('#testTmpl'),
        //末班与数据结合
        finalTpl = jsRenderTpl(arr);

        $("#list").html(finalTpl);
})(jQuery, window);




$(function(){
    getData();
});

function getData(){
    var state = $.query.get("state");

    $("#state").text(state);
    if(state==1){
        $("#tit").text("作业状态：已完成");
    }
    else if(state==0){
        $("#tit").text("作业状态：未完成");
    }
}




 $().ready(function() {
    console.log("search");

    $.ajax({
        url:'../php/task_search.php',
        type:"GET",
        data:'',
        success: function(data) {
           console.log(data);
             var obj = JSON.parse(data);
             console.log(obj);
             console.log(obj.data[1]);
           
        }
    });
});
