


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

   $(".btn_detail").click(function(){
           var i = $(this).attr("name");
         if( $('#short'+i).attr("style") == "display:none"){
         $('#short'+i).attr("style","display:inline");
         $('#detail'+i).attr("style","display:none")}
         else{
          $('#short'+i).attr("style","display:none");
         $('#detail'+i).attr("style","display:inline")}



         ;})

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






