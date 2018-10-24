// var total, groupGrade,sum = 0, select, categories=[], series;
// var a = {
//  name:'nihao' ,
//  grade:'' ,
//  id:''
// };
// a.name = 'hello';
// console.log(a);
// var k = {

//  teacher:'',
//  student:'',
//  group: [],
//  task_title:'',
//  totalGrade: '',
//  user_class:''
// };
// var  finalSelect =[];
// // var categories=[];
// // var series = [{
// //    name: '自我评价',
// //    data: []
// //            }, {
// //    name: '小组评价',
// //    data: []
// //            }, {
// //    name: '教师评价',
// //    data: []
// //            }];

// $(document).ready(function () {
//   $.ajax({
//     url: '../php/groupeval_search.php',
//     type: 'get',
//     async: false,

//     success: function (data) {

//       select= JSON.parse(data); 
//       console.log(select.data);



//     }

//   });
//   for (var i = 0; i < select.data.length; i++) {
//     if (select.data[i].role == 1) {
//       console.log(select.data[i]);
//       a.name = select.data[i].user_name;
//       a.grade = select.data[i].totalGrade;
//       a.id = select.data[i].evalute_user;
//       k.teacher=a;
//       console.log(a);      
//     }
//     if (select.data[i].role == 2) {

//       a.name = select.data[i].user_name;
//       a.grade = select.data[i].totalGrade;
//       a.id = select.data[i].evalute_user;

//       k.student=a;
//       k.task_title = select.data[i].task_title;
//       k.user_class=select.data[i].publish_class;
//       console.log(a);
//     }
//     if (select.data[i].role == 3) {



//       a.name = select.data[i].user_name;
//       a.grade = select.data[i].totalGrade;
//       a.id = select.data[i].evalute_user;
//       sum += a.grade;
//       k.group.push(a);
//       console.log(a);


//     }

//     // if((i+1)!=select.data.length){  
//     //   if (select.data[i].doTask_id != select.data[i + 1].doTask_id) {
//     //    total = k.teacher.grade * select.data[i].t_percent + k.student.grade * select.data[i].s_percent + sum * select.data[i].g_percent / select.data[i].group_num;
//     //    k.totalGrade = total;
//     //    console.log(k);
//     //    finalSelect.push(k);
//     //    sum = 0;
//     //    k.group.splice(0,k.group.length);


//     //  }}
//     //  else{
//     //    total = k.teacher.grade * select.data[i].t_percent + k.student.grade * select.data[i].s_percent + sum * select.data[i].g_percent / select.data[i].group_num;
//     //    k.totalGrade = total;
//     //    finalSelect.push(k);
//     //    console.log(k);
//     //    sum = 0;
//     //    k.group.splice(0,k.group.length);

//     //  }


//    }    
//    console.log(finalSelect);
//    var html = $("#tmp").render(finalSelect);
//    $("#list").append(html);
//  });


// console.log(finalSelect);
// var chart = Highcharts.chart('container', {
//   chart: {
//     type: 'bar'
//   },
//   title: {
//     text: '堆叠条形图'
//   },
//   xAxis: {
//     categories
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: ''
//     }
//   },
//   legend: {
//         /* 图例显示顺序反转
//          * 这是因为堆叠的顺序默认是反转的，可以设置 
//          * yAxis.reversedStacks = false 来达到类似的效果 
//          */
//          reversed: true
//        },
//        plotOptions: {
//         series: {
//           stacking: 'normal'
//         }
//       },
//       series
//     });
// //var finalSelect = [{
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90,
// //    'user_class':
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}, {
// //
// //    'teacher': {
// //
// //        'name': '猫姐',
// //        'grade': 90,
// //        'id': 12
// //    },
// //    'student': {
// //
// //        'name': 'zhang',
// //        'grade': 10,
// //        'id': 123
// //    },
// //    'group': [{
// //
// //        'name': 'tao',
// //        'grade': 11,
// //        'id': 123
// //}, {
// //
// //        'name': '蔡雅洁',
// //        'grade': 12,
// //        'id': 123
// //}, {
// //
// //        'name': '叶艳洁',
// //        'grade': 120,
// //        'id': 11
// //}],
// //    'task_title': 'asda1',
// //    'totalGrade': 90
// //}]
// //var html = $("#tmp").render(finalSelect);
// //$("#list").append(html);


$(document).ready(function () {
  $.ajax({
    url: '../php/groupeval_search.php',
    type: 'get',
    async: false,
    success: function (data) {
      console.log
      select= JSON.parse(data); 
      console.log(select.data);}
      
  });
  var i = 0,temp,length;
      var final_arr = [];
      var allInfor = new Object();
      while(i < select.data.length) {

        temp=i;
        num=select.data[i].group_num;
        length=num+2+temp;
        for(i; i < length;i++){
          if(i%num==0){
            allInfor.tea_name=select.data[i].user_name;
            allInfor.tea_grade=select.data[i].totalGrade;
            allInfor.task_title=select.data[i].task_title;
          }
          else if(i%num==1){
            allInfor.self_name=select.data[i].user_name;
            allInfor.self_grade=select.data[i].totalGrade;
            allInfor.self_id=select.data[i].user_number;
            allInfor.class_name=select.data[i].publish_class;
          } 
          else{
            var groupmenber = new Object();
            groupmenber.name = select.data[i].user_name;
            groupmenber.grade = select.data[i].totalGrade;
            allInfor.group = [];
            allInfor.group.push(groupmenber);
          }
        }
        final_arr.push(allInfor);
      }
      console.log(final_arr);
    
});
