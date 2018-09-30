var arr = [{
    'task_title':1,
    'task_content': '今天也宇宙无敌百无禁忌万夫莫敌超级喜欢你Today, the universe is invincible, and the enemy is super fond of you.今天也宇宙无敌百无禁忌万夫莫敌超级喜欢你',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-04 00:00:00',
    'end_date': '2018-09-30 00:00:00',
    'total_tag':'1'
    },
    {
    'task_title':2,
    'task_content': 'the enemy is super fond of you.',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-04 00:00:00',
    'end_date': '2018-9-21 22:00:00',
    'total_tag':'1'  
    },
    {
    'task_title':3,
    'task_content': '要和你 跋涉红尘 看山清水秀 要和你 淋暴雨倾盆 也听风雨细柔',
    'user_name':'李阳老师',
    'publish_date': '2018-09-06 00:00:00',
    'end_date': '2018-9-27 00:00:00',
    'total_tag':'1'  
    },
    {
    'task_title':4,
    'task_content': '你会不会突然的出现，在转角的偶然遇见...你会不会突然的出现，在转角的偶然遇见...你会不会突然的出现，在转角的偶然遇见...你会不会突然的出现，在转角的偶然遇见...你会不会突然的出现，在转角的偶然遇见...',
    'user_name':'毛婕老师',
    'publish_date': '2018-09-26 00:00:00',
    'end_date': '2018-10-01 00:00:00',
    'total_tag':'1'  
    },
    {
    'task_title':5,
    'task_content': '床前明月光，疑是地上霜，举头望明月，低头思故乡',
    'user_name':'李阳老师',
    'publish_date': '2018-09-06 00:00:00',
    'end_date': '2018-10-02 00:00:00',
    'total_tag':'1'  
    }
    ]
    

//获取模版
var jsRenderTpl = $.templates('#testTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);


// document.getElementById("list").onmouseover = function(e){
//     e = e || window.event;
//     var target = e.srcElement || e.target;
//     console.log(target);
//     console.log(target.tagName);
//     console.log($(this).index());
//     console.log($(this).attr("name"));
//     console.log($(this).val());
//     var ul=target.parentNode;
//     var liList = ul.getElementsByTagName("li");
//     // console.log(liList[0]);
//     var j = document.getElementsByName("head");
//     // console.log(j);
//     var children;
//     if(target.tagName.toLowerCase() === "li") {
//         console.log(1);
//         children = this.children;
//         console.log(children.length);
        
//         var i = 0;
//         var len  = children.length;
//         for(;i<len;i++){
//             if(target == children[i]) {
//                 console.log(i);
//                 return;
//             }
//         }
//     }
// }

// $("#b").mouseenter(function(){
//     console.log($(this).index());
// })
// $(".lookLi").mouseover(function(){
//     var i = $(this).attr("name");
//     console.log(i);
// })

// document.getElementById("b").onmouseover = function(e){
//     var target1 = e.currentTarget;
//     console.log(target1);
//     var target2 = e.target;
//     console.log(target2);
//     // var bol = $(e.target).parents().is("float_boxid");
//     var children = this.children;
//     console.log(children[0]);
//     var i = $(target2).attr("name");
//     console.log(i);
//     console.log($(this).attr("name"));
//     console.log($(this).val());
//     console.log($(this).index());
//     for(var i=0;i<children.length;i++){
//         if(target2 == children[i]){
//             console.log(i);
//             return;
//         }
//     }
// }

//漂浮框形式
// var all = document.getElementsByName("float_box");
// function display(){  
//     for(var i=0;i<arr.length;i++)

//         all[i].style.display="block";
// }
// function disappear(){
//      for(var i=0;i<arr.length;i++)
//         // i = $("#content").val($(this)).attr("name"); 
//         all[i].style.display="none";
// }



// for(var j=0;j<arr.length;++j){
//     $("#content").mouseover(function(){
//         j = $(this).attr("name");
//         console.log(j);
//         console.log(arr2[j-1]);
//     }) 
// }


//显示开始与截止时间
function showTime(){
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
$(function(){
    showTime();
    var jsRenderTpl = $.templates('#testTmpl');
    var finalTpl = jsRenderTpl(arr);
    $('.box').html(finalTpl);
})


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
        var i = $(this).attr("name");
        url = "homework.html?i="+i;//此处拼接内容
        window.location.href = url;
    });       
    //按钮点击事件
    /*function jump(){
    url = "homework.html?i="+i+"&s="+s;//此处拼接内容
    window.location.href = url;
    }*/
});