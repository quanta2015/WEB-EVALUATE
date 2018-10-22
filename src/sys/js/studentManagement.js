 toastr.options.positionClass = 'toastr-top-left';
 //check框选中数量
 var ckNum = 0;
 //定义数组
 var stdInfor = [];
 //选择id
 var selcId = [];
 //选择下标
 var selcIn = [];

 //获得传参班级
       
 // var url = location.search;      
 // var strs = [];      
 // var obj = new Object();      
 // if (url.indexOf("?") != -1) {         
 //     var str = url.substr(1);         
 //     strs = str.split("&");         
 //     for (var i = 0; i < strs.length; i++) {            
 //         obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);         
 //     }      
 // } 
//  function GetQueryString(name)
// {
//      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//      var r = window.location.search.substr(1).match(reg);
//      if(r!=null)return  unescape(r[2]); return null;
// }
     
var clsName = $.query.get("clsName");
console.log(clsName);
 $(document).ready(function () {

     $.ajax({
         url: '../php/student_search.php',
         type: 'post',
         async: false,
         data:{class:clsName},
         success: function (data) {
               console.log(data);
             std = JSON.parse(data);
             console.log(std);
            for (var i = 0; i < std.data.length; i++) {
             //    if (std.data[i].student_class == clsName) {
                     stdInfor.push({
                         id: std.data[i].user_number,
                         name: std.data[i].user_name
                     });
            //     }
//
             }
             var html = $("#stdTmpl").render(stdInfor);
             $("#list").append(html);

         }

     });
 });
 //
 //
 // var stdInfor = [{
 //
 //     id: "2016210405050",
 //     name: "p桃"
 //        }, {
 //
 //     id: "2016210405057",
 //     name: "薇薇"
 //        }, {
 //
 //     id: "2016210405054",
 //     name: "朱丽叶"
 //        }, {
 //
 //     id: "2016210405061",
 //     name: "蔡阿狗"
 //        }, ];
 // var html = $("#stdTmpl").render(stdInfor);
 // $("#list").append(html);
 //全选
 var isCheckAll = false;
 $("#std_add").click(function () {

     $("div#std-items").remove();
     $.ajax({
         url: '../php/student_search.php',
         type: "POST",
         data: {
             student_class: $("#class_name").val(),
             student_id: $("#std_num").val(),
             student_name: $("#std_name").val(),
         },
         success: function (data) {
             stdInfor.push({
                 id: $("#std_num").val(),
                 name: $("#std_name").val(),
             });

             var html = $("#stdTmpl").render(stdInfor);
             $("#list").append(html);

         }
     });
 });



 $("#btn_add").click(function () {
     $("#myModalLabel").text("新增学生信息");
     $('#myModal').modal();

 });

 //check框
 function swapCheck() {
     if (isCheckAll) {
         $("input[type='checkbox']").each(function () {
             this.checked = false;
         });
         isCheckAll = false;
     } else {
         $("input[type='checkbox']").each(function () {
             this.checked = true;
         });
         isCheckAll = true;
     }
 }
 //多选删除
 function stdMulRemove() {
     if (stdInfor.length) {
         if (isCheckAll) {
             bootbox.confirm({
                 message: "确认删除全部学生吗?",
                 buttons: {
                     cancel: {
                         label: '取消',
                         className: 'btn-success'
                     },
                     confirm: {
                         label: '删除',
                         className: 'btn-danger'
                     }
                 },
                 callback: function (result) {
                     if (!result) {
                         toastr.success('已成功取消');

                     } else {
                         /*for (int i = 0; i < stdInfor.length; i++) {
                             selcId.push(stdInfor[i].id);
                         }
                         stdInfor.splice(0, stdInfor.length);
*/
                         $.ajax({
                             url: '../php/student_set.php',
                             type: "POST",
                             data: {
                                 do: '1',
                                 student_id: selcId
                             },
                             success: function () {
                                 $("div#std-items").remove();
                                 selcId.splice(0, selcId.length);
                                 toastr.success('已成功删除');
                                 isCheckAll = false;
                             }
                         })

                     }
                 }

             });
         } else {
             ckNum = 0;
             $("input[type='checkbox']").each(function () {
                 if (this.checked) {
                     ckNum++;
                 }
             });
             if (ckNum == 0) {
                 toastr.warning('未选中任何学生');
             } else {
                 bootbox.confirm({
                     message: "确认删除所选学生吗?",
                     buttons: {
                         cancel: {
                             label: '取消',
                             className: 'btn-success'
                         },
                         confirm: {
                             label: '删除',
                             className: 'btn-danger'
                         }
                     },
                     callback: function (result) {
                         if (!result) {
                             toastr.success('已成功取消');

                         } else {

                             $("input[type='checkbox']").each(function () {
                                 if (this.checked) {
                                     tmp = $(this).parent().next().text();
                                     selcId.push(stdInfor[tmp - 1].id);
                                     selcIn.push(tmp - 1);

                                 }
                             });
                             for (var k = (selcIn.length - 1); k >= 0; k--) {
                                 stdInfor.data.splice(selcIn[k], 1);
                             }
                             $.ajax({
                                 url: '../php/student_set.php',
                                 type: "POST",
                                 data: {
                                     do: '1',
                                     student_id: selcId
                                 },
                                 success: function () {
                                     $("div#std-items").remove();
                                     toastr.success('已成功删除');
                                     html = $("#stdTmpl").render(stdInfor);
                                     $("#list").append(html);
                                     selcId.splice(0, selcId.length);
                                     selcIn.splice(0, selcIn.length);
                                 }
                             })




                         }
                     }

                 });
             }


         }
     }
 }

 function stdRemove(n) {
     bootbox.confirm({
         message: "确认删除此学生吗?",
         buttons: {
             cancel: {
                 label: '取消',
                 className: 'btn-success'
             },
             confirm: {
                 label: '删除',
                 className: 'btn-danger'
             }
         },
         callback: function (result) {
             if (!result) {
                 toastr.success('已成功取消');

             } else {

                 $("div#std-items").remove();
                 selcId.push(stdInfor[n - 1].id);
                 stdInfor.splice(n - 1, 1);
                 html = $("#stdTmpl").render(stdInfor);
                 $("#list").append(html);
                 $.ajax({
                     url: '../php/student_set.php',
                     type: "POST",
                     data: {
                         do: '1',
                         student_id: selcId
                     },
                     success: function (data) {
                         console.log(data);
                         if (data.code == 0) {
                             selcId.splice(0, selcId.length);
                             toastr.success('已成功删除');

                         } else
                             toastr.success('删除失败');


                     }
                 })
             }
         }

     });

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

