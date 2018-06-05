
$(document).ready(function() {
  var $bd_tab_li = $('#bd_tab ul li');
  $bd_tab_li.hover(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    var index = $bd_tab_li.index(this);
    $('div.bd_tab_box > div').eq(index).show().siblings().hide();
  });
});