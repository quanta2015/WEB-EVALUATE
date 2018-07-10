var a = 0;//标志，判断是否为homework提交跳转
var i = 0;//数组下标

//jsrender渲染
var arr = [
{
    'publisher':'毛婕老师',
    'content':'这项研究关注的是持续的社会经济调查与智商的遗传关系。年龄在2岁和16岁之间的孩子被评估了九次，并通过混合家长管理、网站和电话为基础进行测试。发表在情报杂志中的结果显示，有着富裕家庭背景的两岁儿童有更多的机会在智商测试上获得更高的分数，而且随着时间的推移和经验的丰富会获得更高的收入。伦敦大学金史密斯学院的索菲·冯·斯塔姆医生接了这项研究说：“我们在这段时间已经知道，那些处于低社会经济地位（SES）的儿童的智力测试平均比高社会经济地位的儿童糟糕，但智力与SES的发展关系并不是如前所述。我们的调查在建立着关系，强调了SES和IQ之间的联系。我们希望我们的发现将会推动未来研究的具体机制和因素。”',
    'begin': '2018-7-4',
    'end': '2018-7-10',
    'state': 0 
},
{
    'publisher':'毛婕老师',
    'content':'这项研究关注的是持续的社会经济调查与智商的遗传关系。年龄在2岁和16岁之间的孩子被评估了九次，并通过混合家长管理、网站和电话为基础进行测试。发表在情报杂志中的结果显示，有着富裕家庭背景的两岁儿童有更多的机会在智商测试上获得更高的分数，而且随着时间的推移和经验的丰富会获得更高的收入。伦敦大学金史密斯学院的索菲·冯·斯塔姆医生接了这项研究说：“我们在这段时间已经知道，那些处于低社会经济地位（SES）的儿童的智力测试平均比高社会经济地位的儿童糟糕，但智力与SES的发展关系并不是如前所述。我们的调查在建立着关系，强调了SES和IQ之间的联系。我们希望我们的发现将会推动未来研究的具体机制和因素。”',
    'begin': '2018-7-6',
    'end': '2018-7-21',
    'state': 0
},
{
    'publisher':'毛婕老师',
    'content':'这项研究关注的是持续的社会经济调查与智商的遗传关系。年龄在2岁和16岁之间的孩子被评估了九次，并通过混合家长管理、网站和电话为基础进行测试。发表在情报杂志中的结果显示，有着富裕家庭背景的两岁儿童有更多的机会在智商测试上获得更高的分数，而且随着时间的推移和经验的丰富会获得更高的收入。伦敦大学金史密斯学院的索菲·冯·斯塔姆医生接了这项研究说：“我们在这段时间已经知道，那些处于低社会经济地位（SES）的儿童的智力测试平均比高社会经济地位的儿童糟糕，但智力与SES的发展关系并不是如前所述。我们的调查在建立着关系，强调了SES和IQ之间的联系。我们希望我们的发现将会推动未来研究的具体机制和因素。”',
    'begin': '2018-7-7',
    'end': '2018-7-21',
    'state': 0
},
{
    'publisher':'毛婕老师',
    'content':'这项研究关注的是持续的社会经济调查与智商的遗传关系。年龄在2岁和16岁之间的孩子被评估了九次，并通过混合家长管理、网站和电话为基础进行测试。发表在情报杂志中的结果显示，有着富裕家庭背景的两岁儿童有更多的机会在智商测试上获得更高的分数，而且随着时间的推移和经验的丰富会获得更高的收入。伦敦大学金史密斯学院的索菲·冯·斯塔姆医生接了这项研究说：“我们在这段时间已经知道，那些处于低社会经济地位（SES）的儿童的智力测试平均比高社会经济地位的儿童糟糕，但智力与SES的发展关系并不是如前所述。我们的调查在建立着关系，强调了SES和IQ之间的联系。我们希望我们的发现将会推动未来研究的具体机制和因素。”',
    'begin': '2018-7-8',
    'end': '2018-7-21',
    'state': 0 
}
];

var template = $.templates('#testTmpl');
var htmlOutput = template.render(arr);
$(".box").html(htmlOutput);

var s = new Array();//状态数组
for(var i=0;i<arr.length;++i){
    s[i] = arr[i].state;
}

//按钮点击事件
$(".Btn_blue").click(function() {
    i = $(this).attr("name");
    jump();
})
function jump(){
    url = "homework.html?i="+i+"&s="+s;//此处拼接内容
    window.location.href = url;
}
$(".btn_detail").click(function(){

})
//  $(function() {
//     $('#details h5.demand').bind('mouseover', function() {
//         $(this).next().slideDown();
//     }).bind('mouseout', function() {
//         $(this).next().slideUpa);
//     });
// });

var oP = document.getElementById('demoP');
    var oBtn = document.getElementById('demoBtn');
    var allContent = oP.innerHTML;                   //存放所有内容
    oP.innerHTML = oP.innerHTML.substr(0,15);        //截取前100个字符
oBtn.onclick=function(){
    //oP.innerHTML = allContent;                    //显示所有内容
    alert(allContent);
}

    

$(function(){
    a = $.query.get("a");
    if(a==1){
        getData();
    }
});
function getData(){
    var state = $.query.get("state");
    var head = $.query.get("i");
    s = $.query.get("arr");
    s[head-1] = state;
    for(var i=0;i<arr.length;++i){
        arr[i].state = s[(i+1)*2-2];
    }
    var template = $.templates('#testTmpl');
    var htmlOutput = template.render(arr);
    $(".box").html(htmlOutput);
    $(".Btn_blue").click(function() {
        i = $(this).attr("name");
        url = "homework.html?i="+i+"&s="+s;//此处拼接内容
        window.location.href = url;
})
}

//后端接口
//  $().ready(function() {
//    // console.log("search");

//     $.ajax({
//         url:'../php/task_search.php',
//         type:"GET",
//         data:'',
//         success: function(data) {
//            console.log(data);
//              var obj = JSON.parse(data);
//              console.log(obj);

//         }
//     });
// });

