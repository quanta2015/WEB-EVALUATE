
var arr = [{
    'task_title': '今天也宇宙无敌百无禁忌万夫莫敌超级喜欢你Today, the universe is invincible, and the enemy is super fond of you.朱正廷XTHEO-朱正廷',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-04 00:00:00',
    'end_date': '2018-09-28 00:00:00',
    'total_tag':'1'
    },
    {
    'task_title': 'the enemy is super fond of you.朱正廷XTHEO-朱正廷',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-04 00:00:00',
    'end_date': '2018-09-20 00:00:00',
    'total_tag':'1'  
    }
    ]
    

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
    url = "homework.html?i="+i+"&s="+s;//此处拼接内容
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





// $(function(){  
//     for(var j=0;j<arr.length;++j){  
//  52   +         arr[j].content = arr[j].content.substr(0,15);  
//  53   +         var template = $.templates('#testTmpl');  
//  54   +         var htmlOutput = template.render(arr);  
//  55   +         $(".box").html(htmlOutput);  
//  56   +     }  
//  57   +     //详情点击事件  
//  58   +     $(".btn_detail").click(function(){  
//  59   +         j = $(this).attr("name");  
//  60   +         alert(arr2[j-1]);  
//  61   +     });  
//  62   +     //去完成点击事件  
//  63   +     $(".Btn_blue").click(function() {  
//  64   +         i = $(this).attr("name");  
//  65   +         jump();  
//  66   +     })  
//  67   +     function jump(){  
//  68   +         url = "homework.html?i="+i+"&s="+s;//此处拼接内容  
//  69   +         window.location.href = url;  
//  70   +     }  


// var arr2 = new Array();//作业内容数组
// for(var i=0;i<arr.length;++i){
//     arr2[i] = arr[i].task_title;
// }
//  $(function(){
//     var x = Array();
//     var time = Array();
//     for(var j=0;j<arr.length;++j){
//         // time[j] = document.getElementById("nowtime");
//         // x[j] = document.getElementById('endtime').innerHTML;
//         // var show = moment(x[j], "YYYY-MM-DD HH:mm:ss").fromNow();  
//         // time[j].innerHTML = show;
//         document.getElementById("nowtime").innerHTML = show;
//         console.log(j);
//         console.log(x[j]);
//         console.log(show);
//         // $("#nowtime").html(show);
//     }
//  })


function showTime(){
    const date1 = dayjs(document.getElementById('endtime').innerHTML);
    var date2 = dayjs().format("YYYY-MM-DD HH:mm:ss");
    var months = date1.diff(date2, 'months');
    var days = date1.diff(date2, 'days'); 
    var hours = date1.diff(date2, 'hours')-days*24;
    var minutes = date1.diff(date2, 'minutes')-days*24*60-hours*60;
    var seconds = date1.diff(date2, 'second')-days*24*3600-hours*3600-minutes*60;

    document.getElementById("nowtime").innerHTML = days+"days  "+("0"+hours).substr(-2)+":"+("0"+minutes).substr(-2)+":"+("0"+seconds).substr(-2);
    
}
setInterval("showTime()",1000);



var arr2 = new Array();//作业内容数组
for(var i=0;i<arr.length;++i){
    arr2[i] = arr[i].task_title;

} 

// for(var j=0;j<arr.length;++j){
//     $("#content").mouseover(function(){
//         j = $(this).attr("name");
//         console.log(j);
//         console.log(arr2[j-1]);
//     }) 
// }
