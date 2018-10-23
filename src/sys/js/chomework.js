$(function() {
  var dotask_id = $.query.get("dotask_id");
  $.ajax({
    url: '../php/upload.php',
    type: "POST",
    data:{ dotask_id: dotask_id},
    success: function(data) {
      obj = JSON.parse(data);
      var doc = document.getElementById("doc");
      var ppt = document.getElementById("ppt");
      var vedio = document.getElementById("vedio");
      doc.innerHTML = obj.doc_url;
      ppt.innerHTML = obj.ppt_url;
      vedio.innerHTML = obj.vedio_url;
    }
  });
});

