var arr = [
	{
		'taskID': '001',
		'stdID':'2016210405054',
		'class':'软工162',
		'name':'陶娣',
		'isEvalute':'0'
	},
	{
		'taskID': '001',
		'stdID':'2016210405050',
		'class':'软工162',
		'name':'叶艳洁',
		'isEvalute':'1'
	}
];
//获取模版
var jsRenderTpl = $.templates('#theTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);