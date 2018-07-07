var state = 0;
   
// (function(jq, g) {
//     var arr = [
//         {
//             'begin': '2018-7-4',
//             'end': '2018-7-10',
//             'state': 0   
//         },
//         {
//             'begin': '2018-7-6',
//             'end': '2018-7-21',
//             'state': 0   
//         }

//     ], 
//     //获取模板
//     jsRenderTpl = $.templates('#testTmpl'),
//     //模板与数据结合
//     finalTpl = jsRenderTpl(arr);
    
//     $("#list").html(finalTpl);
//     getData();
// })(jQuery, window);
var arr = [
{
    'begin': '2018-7-4',
    'end': '2018-7-10',
    'state': 0   
},
{
    'begin': '2018-7-6',
    'end': '2018-7-21',
    'state': 0   
}
];
var html = $("#testTmpl").render(arr); 
$(".box").html(html);

// var arr2 = [];
//     $.each(arr,function(i,obj){
//         var c = {};
//         $.each(obj,function(key,val){
//             if(key == 'state'){
//                 c[key] = val.slice(val.length-num,val.length);
//             }else{
//                 c[key]=val;
//             }
//         });
//         arr.push(c);
//     })


$(function(){
    getData();
});

function getData(){
    var state = $.query.get("state");

    if(state==1){
        $("#tit").text("作业状态：已完成");
        $("#ac").text("查看");
    }
    else if(state==0){
        $("#tit").text("作业状态：未完成");
        $("#ac").text("去完成");
    }
}


$(function(){
    head = $("#head").text();
    $("#ac").on("click",function(){jump();});
});
function jump(){
    url = "homework.html?head="+head;//此处拼接内容
    window.location.href = url;
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
