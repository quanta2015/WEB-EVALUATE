(function(jq, g) {

  var arr = [{
      'begin': '2018-7-4',
      'end': '2018-7-10',
      'state': 1
    }, {
      'begin': '2018-7-11',
      'end': '2018-7-21',
      'state': 0
    }],
    //获取模板
    jsRenderTpl = $.templates('#testTmpl'),
    //末班与数据结合
    finalTpl = jsRenderTpl(arr);

  $("#list").html(finalTpl);
})(jQuery, window);