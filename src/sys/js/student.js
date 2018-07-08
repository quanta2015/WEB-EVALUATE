var a = 0;//标志，判断是否为homework提交跳转
var i = 0;//数组下标

//jsrender渲染
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
},
{
    'begin': '2018-7-7',
    'end': '2018-7-21',
    'state': 0
},
{
    'begin': '2018-7-8',
    'end': '2018-7-21',
    'state': 0 
}
];
var template = $.templates('#testTmpl');
var htmlOutput = template.render(arr);
$(".box").html(htmlOutput);

var s = new Array();//状态数组
for(var i=0;i<arr.length;++i){
    s[i] = arr[i].state;
}

//按钮点击事件
$(".Btn_blue").click(function() {
    i = $(this).attr("name");
    console.log(i);
    jump();
})
function jump(){
    url = "homework.html?i="+i+"&s="+s;//此处拼接内容
    window.location.href = url;
}


$(function(){
    a = $.query.get("a");
    if(a==1){
        getData();
    }
});
function getData(){
    var state = $.query.get("state");
    var head = $.query.get("i");
    s = $.query.get("arr");
    s[head-1] = state;
    for(var i=0;i<arr.length;++i){
        arr[i].state = s[(i+1)*2-2];
    }
    var template = $.templates('#testTmpl');
    var htmlOutput = template.render(arr);
    $(".box").html(htmlOutput);
    $(".Btn_blue").click(function() {
        i = $(this).attr("name");
        url = "homework.html?i="+i+"&s="+s;//此处拼接内容
        window.location.href = url;
})
}

//后端接口
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

