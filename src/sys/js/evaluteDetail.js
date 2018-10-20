var arr = [{
        'part': '一、教学设计(单项25分)',
        'content': ['目标设计', '内容分析',
            '学情分析', '教学过程设计',
            '教学过程设计', '教学过程设计',
            '教学过程设计', '教学过程设计',
            '教学过程设计', '延伸设计',
            '文档规范', '设计创新'
        ],
        'standard': ['教学目标清楚、具体，易于理解，便于实施，行为动词使用正确，阐述规范；符合课标要求、学科特点和学生实际；体现对知识、能力与创新思维等方面的要求',
            '教学内容前后知识点关系、地位、作用描述准确，重点、难点分析清楚',
            '学生认知特点和水平表述恰当，学习习惯和能力分析合理',
            '教学主线描述清晰，教学内容处理符合课程标准要求，具有较强的系统性和逻辑性',
            '教学重点突出，点面结合，深浅适度；难点清楚，把握准确；化难为易，处理恰当',
            '教学方法清晰适当，符合教学对象要求，有利教学内容完成、难点解决和重点突出',
            '教学辅助手段准备与使用清晰无误，教具及现代化教学手段运用恰当',
            '内容充实精要，适合学生水平；结构合理，过渡自然，便于操作；理论联系实际，注重教学互动，启发学生思考及问题解决',
            '注重形成性评价及生成性问题解决和利用',
            '课时分配科学、合理；辅导与答疑设置合理，练习、作业、讨论安排符合教学目标，有助强化学生反思、理解和问题解决',
            '文字、符号、单位和公式符合标准规范；语言简洁、明了，字体、图表运用适当；文档结构完整，布局合理，格式美观',
            '教学方案的整体设计富有创新性，较好体现课程改革的理念和要求；教学方法选择适当，教学过程设计有突出的特色'
        ],
        'grade': ['3', '2', '2', '2', '2', '2', '1', '3', '1', '2', '2', '3']
    },
    {
        'part': '二、多媒体课件制作(单项15分)',
        'content': ['科学性', '教育性', '技术性', '技术性', '艺术性'],
        'standard': ['课件取材适宜，内容科学、正确、规范课件演示符合现代教育理念',
            '课件设计新颖，能体现教学设计思想；知识点结构清晰，能调动学生的学习热情',
            '课件制作和使用上恰当运用多媒体效果',
            '操作简便、快捷，交流方便，适于教学',
            '画面设计具有较高艺术性，整体风格相对统一'
        ],
        'grade': ['4', '6', '1.5', '1.5', '2']
    },
    {
        'part': '三、即席讲演(单项15分)',
        'content': ['讲演内容', '语言艺术', '思维艺术', '仪表形象', '讲演时间'],
        'standard': ['主题鲜明切题，内容充实、针对性强;问题分析到位，解决策略得当、新颖，说服力强;论据贴切，符合实际，阐释充分;内容构架结构严谨、层次分明、条理清晰',
            '普通话(英语发音)标准，用语规范，节奏处理得当，说服力强',
            '思维敏捷，逻辑清晰；灵活而有效地调整、组织讲演内容',
            '神态自然，动作适度，与讲演内容吻合',
            '时间在2-3分钟之间，不超时'
        ],
        'grade': ['5', '3', '3', '3', '1']
    },
    {
        'part': '四、模拟上课·板书(单项45分)',
        'content': ['教学目标', '教学内容', '教学方法', '教学过程', '教学素质', '教学效果', '教学创新', '板书内容匹配', '板书构图', '板书书写'],
        'standard': ['目标设置明确，符合课标要求和学生实际',
            '重点内容讲解明白，教学难点处理恰当，关注学生已有知识和经验，注重学生能力培养，强调课堂交流互动，知识阐释正确',
            '按新课标的教学理念处理教学内容以及教与学、知识与能力的关系，较好落实教学目标；突出自主、探究、合作学习方式，体现多元化学习方法；实现有效师生互动',
            '教学整体安排合理，环节紧凑，层次清晰；创造性使用教材；教学特色突出；恰当使用多媒体课件辅助教学，教学演示规范',
            '教态自然亲切、仪表举止得体，注重目光交流，教学语言规范准确、生动简洁',
            '按时完成教学任务，教学目标达成度高',
            '教学过程富有创意；能创造性的使用教材；教学方法灵活多样，有突出的特色',
            '反映教学设计意图，突显重点、难点，能调动学生主动性和积极性',
            '构思巧妙，富有创意，构图自然，形象直观，教学辅助作用显著',
            '书写快速流畅，字形大小适度，清楚整洁，美观大方，规范正确'
        ],
        'grade': ['3', '5', '7', '7', '4', '4', '5', '4', '4', '2']
    },
];
//获取模版
var jsRenderTpl = $.templates('#theTmpl');
//模版与数据结合
var finalTpl = jsRenderTpl(arr);
$('.box').html(finalTpl);


//var submit = document.getElementById("submit_grade");
/*submit.onclick = function(e) {
	 var detail_grade = document.getElementsByName('grade');
	// var range = document.getElementsByName('range');
	// for(var i = 0; i < range.length; i++) {
	// 	console.log(1);
	// 	console.log(range[i].innerHTML);
	// }
	var total_grade = 0;
	for(var i = 0; i < detail_grade.length; i++) {
		if(detail_grade[i].value != " " && !isNaN(detail_grade[i].value)) {
			// console.log(parseInt(detail_grade[i].value));
			total_grade += parseInt(detail_grade[i].value);
		}
	}
	// console.log(total_grade);
}
*/
$(function() {
        var id = GetQueryString("dotask_id");
        $.ajax({
            url: 'url_search.php',
            type: "POST",
            data:{dotask_id: id},
            success: function(data) {
                url_arr = JSON.parse(data);
                document.getElementById('word_url').href = url_arr.data.word_url;
                document.getElementById('ppt_url').href = url_arr.data.ppt_url;
                document.getElementById('video_url').href = url_arr.data.video_url;
            }
        });
        $.ajax({
            url: '../php/evalute_search.php',
            type: "POST",
            data:{ dotask_id: id},
            //   async:false,
            success: function(data) {
    
              obj = JSON.parse(data);
                     if(obj.code == 0){
              nowgrade = JSON.parse(obj.data[0].grade);
              var detail_grade = document.getElementsByName('grade');
         for (var i = 0; i < detail_grade.length; i++)
          detail_grade[i].value= nowgrade[i];
            }
        }
            
        });

 $("#submit_grade").click(function() {
        var detail_grade = document.getElementsByName('grade');
        var grade = [];
        var total = 0;

        var role = GetQueryString("role");
        for (var i = 0; i < detail_grade.length; i++) {
            if (detail_grade[i].value != " " && !isNaN(detail_grade[i].value)) {
                grade[i] = detail_grade[i].value;
                total = total + Number(detail_grade[i].value);
                grade.length++;
            }
        }
        grade[i] = total;
        console.log(1);
        console.log(total);
        console.log(JSON.stringify(grade));
        $.ajax({
            url: '../php/evalute.php',
            type: "POST",
            data: { grade: JSON.stringify(grade), role: role, dotask: id, length: grade.length },
            //   async:false,
            success: function(data) {
                console.log(data);
                // obj = JSON.parse(data);
                //  consolse.log(obj);

            }
        });
    })
});


function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function cancel() {
    $.ajax({
        url: '../php/signout.php',
        type: "POST",
        success: function (data) {
            result = JSON.parse(data);
            if (result.code == 0) {
                alert("退出成功");
                window.location.href = "../index.html";
            } else {
                alert("退出失败！");
            };

        }

    })

}

