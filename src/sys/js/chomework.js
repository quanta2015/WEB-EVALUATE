$(function() {
  var dotask_id = $.query.get("dotask_id");
  $.ajax({
    url: '../php/upload.php',
    type: "POST",
    data:{ dotask_id: dotask_id},
    success: function(data) {
      obj = JSON.parse(data);
      var doc = document.getElementsByName('doc');
      var ppt = document.getElementsByName('ppt');
      var vedio = document.getElementsByName('vedio');
      doc.value = obj.doc_url;
      ppt.value = obj.ppt_url;
      vedio.value = obj.vedio_url;
    });
});
