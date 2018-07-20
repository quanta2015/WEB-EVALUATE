var arr = {
	'stdID':'2016210405050',
	'name':'叶艳洁',
	'grade_self': 100,
	'grade_team': 95,
	'grade_teacher': 90,
	'score': 95
};
//获取模版
var jsRenderTpl = $.templates('#theTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);