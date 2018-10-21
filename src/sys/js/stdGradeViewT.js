  var chart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: '堆叠条形图'
      },
      xAxis: {
          categories: ['章薇', '叶艳洁', '蔡雅洁', '陶娣', '杨德杰']
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          /* 图例显示顺序反转
           * 这是因为堆叠的顺序默认是反转的，可以设置 
           * yAxis.reversedStacks = false 来达到类似的效果 
           */
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: '自我评价',
          data: [10, 15, 20, 25, 30]
            }, {
          name: '小组评价',
          data: [10, 15, 20, 25, 30]
            }, {
          name: '教师评价',
          data: [10, 15, 20, 25, 30]
            }]
  });
  toastr.options.positionClass = 'toastr-top-left';


  $(document).ready(function () {
      //班级下拉菜单设置
      //查找老师所有的班级
      $.ajax({
          url: '../php/class_search.php',
          type: "POST",
          async: false,
          success: function (data) {

              classes = JSON.parse(data);
              console.log(classes);
              var context;
              if (classes.code == 0) {
                  for (var i = 0; i < classes.data.length; i++)
                      $("#clsCh").append("<option>" + classes.data[i].class_name + "</option>");
              } else if (classes.code == 77) $("#clsCh").append("<option> 没有班级 </option>");


          }

      });
      $.ajax({
          url: '../php/task_search.php',
          type: "POST",
          async: false,
          data: {
              class: $("#classSlct").val()
          },
          success: function (data) {

              homeworks = JSON.parse(data);
              console.log(homeworks);
              //渲染作业列表
              if (homeworks.code == 0) {
                  var context;
                  for (var i = 0; i < homeworks.data.length; i++)
                      context = context + "<option>" + homeworks.data[i].task_title + "</option>";
                  context = context + "<option>全部</option>";
                  $('#taskSlct').html(context);
              } else if (homeworks.code == 77) $('#taskSlct').html("<option>没有作业</option>");

          }
      });
  });
