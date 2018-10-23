$(function() {
  var task_content = $.query.get("task_content");
  var title = $.query.get("task_title");
  var dotask_id = $.query.get("dotask_id");

  $("#head").text(title);
  $("#txt1").text(task_content);

  //点击返回按钮
  $("#return_s").click(function(e){
    window.location.href="student.html";
  });

  var url_arr=[];
  $.ajax({
    url: '../php/dotaskurl_search.php',
    type: "POST",
    data:{dotask_id: dotask_id},
    success: function(data) {
      url_arr = JSON.parse(data);
      console.log(url_arr.data);
      document.getElementById('doc').href = "../php/"+url_arr.data[0].doc_url;
      document.getElementById('ppt').href = "../php/"+url_arr.data[0].ppt_url;
      document.getElementById('video').href = "../php/"+url_arr.data[0].video_url;
    }
  });
});

