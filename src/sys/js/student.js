
//按钮点击事件
$(".Btn_blue").click(function() {
    i = $(this).attr("name");
    jump();
})
function jump(){
    url = "homework.html?i="+i+"&s="+s;//此处拼接内容
    window.location.href = url;
}
$(".btn_detail").click(function(){

})


$(function(){
var template = $.templates('#testTmpl');


    console.log("search");

     $.ajax({
         url:'../php/task_search.php',
         type:"GET",
         data:'',
         success: function(data) {
            console.log(data);
              var obj = JSON.parse(data);
              console.log(obj);
               htmlOutput = template.render(obj.data);
            $(".box").html(htmlOutput);

         }
     });

});



