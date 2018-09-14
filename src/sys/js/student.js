
var arr = {
    'task_title': '珍珠糖今天也宇宙无敌百无禁忌万夫莫敌超级喜欢你Today, the universe is invincible, and the enemy is super fond of you.朱正廷XTHEO-朱正廷',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-04 00:00:00',
    'end_date': '2018-09-28 00:00:00',
    'total_tag':'1'
} 
//获取模版
var jsRenderTpl = $.templates('#testTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);




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
            $(".box").html(htmlOutput);
        }   
    });

   $(".Btn_blue").click(function() {
    i = $(this).attr("name");
        url = "homework.html?i="+i;//此处拼接内容
        window.location.href = url;
    });       //按钮点击事件

/*function jump(){
    url = "homework.html?i="+is;//此处拼接内容
    window.location.href = url;
}
$(".btn_detail").click(function(){

})*/
    

});


function display(){
    document.getElementById("float_box").style.display="block"; 
}
function disappear(){
    document.getElementById("float_box").style.display="none"; 
}

var time = document.getElementById("nowtime");
var x = document.getElementById('endtime').innerHTML;
var show = moment(x, "YYYY-MM-DD HH:mm:ss").fromNow(); 
time.innerHTML = show;