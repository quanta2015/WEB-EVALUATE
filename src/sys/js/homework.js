(function(jq, g) {

    var data = [{
        'number': '001',
        'title': '教学设计',
        'content': '根据给定题目，设计完整的一套教学方案。',
        'publisher':'毛婕老师'
        },
        {
        'number': '002',
        'title': '多媒体课件',
        'content': '根据教学设计内容制作课件，制作平台不限。',
        'publisher':'毛婕老师'    
        },
        {
        'number': '003',
        'title': '即席讲演',
        'content': '根据试题进行讲演，模拟课堂，时间不超过3分钟。',
        'publisher':'毛婕老师'    
        }
    ]
        //获取模板
        jsRenderTpl = $.templates('#j-specCard'),
        //末班与数据结合
        finalTpl = jsRenderTpl(data);

        $('.box').html(finalTpl);

})(jQuery, window);


