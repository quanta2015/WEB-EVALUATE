var a = 0;//标志，判断是否为homework提交跳转
var i = 0;//数组下标

//jsrender渲染
var arr = [
{
    'publisher':'毛婕老师',
    'content':'做一个温暖的人，快乐并懂得如何快乐。快乐并感染身边的人快乐，尽力做到最好。',
    'begin': '2018-7-4',
    'end': '2018-7-10',
    'state': 0 
},
{
    'publisher':'毛婕老师',
    'content':'人生只有走出来的美丽，没有等出来的辉煌，天再高又怎样，踮起脚尖就能更接近阳光。',
    'begin': '2018-7-6',
    'end': '2018-7-21',
    'state': 0
},
{
    'publisher':'毛婕老师',
    'content':'生命中最重要的人，或许当你在身边的时候，能感觉到的也只是淡淡的温暖而已，并不比一杯热茶更显著。但当你失去的时候，整个世界瞬间荒芜。只知道我们总是在战胜空间，却对时间无能为力',
    'begin': '2018-7-7',
    'end': '2018-7-21',
    'state': 0
},
{
    'publisher':'毛婕老师',
    'content':'人约三月草未莘，间关探搡几回闻，仙槎一叶偏入凡，子衔降珠伴露生，唯有早春最知惜，朱唇贝齿启语箴，正是白紵鸢肩倚，廷风拂扬觅无痕。',
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
var arr2 = new Array;//作业内容数组
for(var j=0;j<arr.length;++j){
    arr2[j] = arr[j].content;
}
$(function(){
    for(var j=0;j<arr.length;++j){
        arr[j].content = arr[j].content.substr(0,15);
        var template = $.templates('#testTmpl');
        var htmlOutput = template.render(arr);
        $(".box").html(htmlOutput);
    }
    //详情点击事件
    $(".btn_detail").click(function(){
        j = $(this).attr("name");
        alert(arr2[j-1]);
    });
    //去完成点击事件
    $(".Btn_blue").click(function() {
        i = $(this).attr("name");
        jump();
    })
    function jump(){
        url = "homework.html?i="+i+"&s="+s;//此处拼接内容
        window.location.href = url;
    }
})



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
   // console.log("search");

    $.ajax({
        url:'../php/task_search.php',
        type:"GET",
        data:'',
        success: function(data) {
           console.log(data);
             var obj = JSON.parse(data);
             console.log(obj);

        }
    });
});

