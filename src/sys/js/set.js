var changeArr = [];
var evastandard = [];
var arr1 = [], arr2 = [], arr3 = [], arr4 = [];
function setInit(data) {
    changeArr.splice(0, changeArr.length);
    evastandard.splice(0, changeArr.length);
    evastandard = JSON.parse(data);
    arr1.splice(0, arr1.length);
    arr2.splice(0, arr2.length);
    arr3.splice(0, arr3.length);
    arr4.splice(0, arr4.length);
    for (var i = 0; i < evastandard.data.length; i++) {
        if (evastandard.data[i].tid == 1) {
            arr1.push(evastandard.data[i]);
        }
        if (evastandard.data[i].tid == 2) {
            arr2.push(evastandard.data[i]);
        }
        if (evastandard.data[i].tid == 3) {
            arr3.push(evastandard.data[i]);
        }
        if (evastandard.data[i].tid == 4) {
            arr4.push(evastandard.data[i]);
        }
    }
    var jsRenderTpl = $.templates('#theTmpl1');
    var finalTpl1 = jsRenderTpl(arr1);
    document.getElementById("tab1").title = arr1[0].table_name;
    // console.log(arr1);
    $('.box1').html(finalTpl1);


    var jsRenderTpl = $.templates('#theTmpl2');
    var finalTpl2 = jsRenderTpl(arr2);
    // console.log(arr2);
    $('.box2').html(finalTpl2);

    var jsRenderTpl = $.templates('#theTmpl3');
    var finalTpl3 = jsRenderTpl(arr3);
    // console.log(arr3);
    $('.box3').html(finalTpl3);

    var jsRenderTpl = $.templates('#theTmpl4');
    var finalTpl4 = jsRenderTpl(arr4);
    // console.log(arr4);
    $('.box4').html(finalTpl4);
}

function createli() {

}



$(document).ready(function() {
    $.ajax({
        url: '../php/detail_search.php',
        type: 'get',
        // async: false,
        success: function(data) {
            setInit(data);
        }
    });

   $(document).on('click','.savenowbtn',function(){
    var i = $(this).attr("id");
    var changeCont = new Object();
    for(var k = 0; k < evastandard.data.length; k++) {
        if(evastandard.data[k].id == i){
            changeCont.tid = evastandard.data[k].tid;
            changeCont.table_name = evastandard.data[k].table_name;
        }
    }
    changeCont.item_title = $("#title"+i).val();
    changeCont.item_content = $("#content"+i).val();
    changeCont.item_point = $("#point"+i).val();
    // var changeObj = new Object();
    // changeObj.id = i;
    // changeObj.content = changeCont;
    // changeObj.operate = 1;
    // changeArr.push(changeObj);
    // console.log(changeArr);
    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: i, content: JSON.stringify(changeCont), operate: 1},
        success: function(data) {
            console.log(data);
        }
    });
   });

   $(document).on('click','.deletenowbtn',function(){
    var i = $(this).attr("id");
    var changeObj = new Object();
    changeObj.id = i;
    changeObj.content = " ";
    changeObj.operate = 3;
    changeArr.push(changeObj);
    console.log(changeArr);
    $("#only"+i).remove();
    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: i, content: " ", operate: 3},
        success: function(data) {
            console.log(data);
        }
    });
   });
   
   $("#add1").click(function () {
    $("#myModalLabel1").text("教学设计");
    $('#myModal1').modal();
   });

   $("#add2").click(function () {
    $("#myModalLabel2").text("多媒体课件制作");
    $('#myModal2').modal();
   });

   $("#add3").click(function () {
    $("#myModalLabel3").text("即席演讲");
    $('#myModal3').modal();
   });

   $("#add4").click(function () {
    $("#myModalLabel4").text("模拟上课板书设计");
    $('#myModal4').modal();
   });

    $("#item_add1").click(function () {
    var changeCont = new Object();

    changeCont.table_name = $("#myModalLabel1").text();
    changeCont.item_title = $("#iitem_title1").val();
    changeCont.item_content = $("#iitem_content1").val();
    changeCont.item_point = $("#iitem_point1").val();
    changeCont.tid = 1;
    console.log(changeCont);

    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: " ", content: JSON.stringify(changeCont), operate: 2},
        success: function(data) {
            console.log(data);
        }
    });
 });

   $("#item_add2").click(function () {
    var changeCont = new Object();

    changeCont.table_name = $("#myModalLabel2").text();
    changeCont.item_title = $("#iitem_title2").val();
    changeCont.item_content = $("#iitem_content2").val();
    changeCont.item_point = $("#iitem_point2").val();
    changeCont.tid = 2;
    console.log(changeCont);

    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: " ", content: JSON.stringify(changeCont), operate: 2},
        success: function(data) {
            console.log(data);
        }
    });
 });

   $("#item_add3").click(function () {
    var changeCont = new Object();

    changeCont.table_name = $("#myModalLabel3").text();
    changeCont.item_title = $("#iitem_title3").val();
    changeCont.item_content = $("#iitem_content3").val();
    changeCont.item_point = $("#iitem_point3").val();
    changeCont.tid = 3;
    console.log(changeCont);

    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: " ", content: JSON.stringify(changeCont), operate: 2},
        success: function(data) {
            console.log(data);
        }
    });
 });

   $("#item_add4").click(function () {
    var changeCont = new Object();

    changeCont.table_name = $("#myModalLabel4").text();
    changeCont.item_title = $("#iitem_title4").val();
    changeCont.item_content = $("#iitem_content4").val();
    changeCont.item_point = $("#iitem_point4").val();
    changeCont.tid = 4;
    console.log(changeCont);

    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: {id: " ", content: JSON.stringify(changeCont), operate: 2},
        success: function(data) {
            console.log(data);
        }
    });
 });

});



// $("#standardSure").click(function() {
//     console.log(changeArr);
//     $.ajax({
//         url: '../php/set_detail.php',
//         type: 'POST',
//         async: false,
//         data: JSON.stringify(changeArr),
//         success: function(data) {
//             console.log(data);
//         }
//     });
// })


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
