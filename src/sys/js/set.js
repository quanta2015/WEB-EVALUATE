var arr1 = [{id:1, tid:1, table_name:'教学设计', item_order:1, item_title:'目标设计', item_content:'教学目标清楚、具体，易于理解，便于实施，行为动词使用正确，阐述规范；符合课标要求、学科特点和学生实际；体现对知识、能力与创新思维等方面的要求', item_point:3}, 
            {id:2, tid:1, table_name:'教学设计', item_order:2, item_title:'内容分析', item_content:'教学内容前后知识点关系、地位、作用描述准确，重点、难点分析清楚', item_point:2}];

var arr2 = [{id:13, tid:2, table_name:'多媒体课件制作', item_order:1, item_title:'科学性', item_content:'课件取材适宜，内容科学、正确、规范 课件演示符合现代教育理念', item_point:4},
            {id:14, tid:2, table_name:'多媒体课件制作', item_order:2, item_title:'教育性', item_content:'课件设计新颖，能体现教学设计思想；知识点结构清晰，能调动学生的学习热情', item_point:6}];

//获取模版
var jsRenderTpl = $.templates('#theTmpl1');
//模版与数据结合
var finalTpl1 = jsRenderTpl(arr1);
$('.box1').html(finalTpl1);

//获取模版
var jsRenderTpl = $.templates('#theTmpl2');
//模版与数据结合
var finalTpl2 = jsRenderTpl(arr2);
$('.box2').html(finalTpl2);













function getAllClass(data) {
    classes = JSON.parse(data);
    var context;
    if (classes.code == 0) {
        for (var i = 0; i < classes.data.length; i++)
            $("#clsCh").append("<option>" + classes.data[i].class_name + "<option>");
    } else if (classes.code == 77)
        $("#clsCh").append("<option> 没有班级 </option>");
}

function setInit(data) {
    evastandard = JSON.parse(data);
    var arr1, arr2, arr3, arr4;
    for (var i = 0; i < evastandard.data.length; i++) {
        if (evastandard.data[i].tid == 1) {
            arr1.push(evastandard.data[i]);
        } else if (evastandard.data[i].tid == 2) {
            arr2.push(evastandard.data[i]);
        } else if (evastandard.data[i].tid == 3) {
            arr2.push(evastandard.data[i]);
        } else if (evastandard.data[i].tid == 4) {
            arr2.push(evastandard.data[i]);
        }
    }
    var jsRenderTpl = $.templates('#theTmpl1');
    var finalTpl1 = jsRenderTpl(arr1);
    $('.box1').html(finalTpl1);

    var jsRenderTpl = $.templates('#theTmpl2');
    var finalTpl2 = jsRenderTpl(arr2);
    $('.box2').html(finalTpl2);

    var jsRenderTpl = $.templates('#theTmpl3');
    var finalTpl3 = jsRenderTpl(arr3);
    $('.box3').html(finalTpl3);

    var jsRenderTpl = $.templates('#theTmpl4');
    var finalTpl4 = jsRenderTpl(arr4);
    $('.box4').html(finalTpl4);

}

$(document).ready(function() {
    //查找老师所有的班级
    promise('../php/class_search.php', 'get', false, " ", getAllClass);
    promise('../php/set.php', 'get', false, " ", setInit);
});