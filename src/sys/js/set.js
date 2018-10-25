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
    console.log(arr1);
    $('.box1').html(finalTpl1);


    var jsRenderTpl = $.templates('#theTmpl2');
    var finalTpl2 = jsRenderTpl(arr2);
    console.log(arr2);
    $('.box2').html(finalTpl2);

    var jsRenderTpl = $.templates('#theTmpl3');
    var finalTpl3 = jsRenderTpl(arr3);
    console.log(arr3);
    $('.box3').html(finalTpl3);

    var jsRenderTpl = $.templates('#theTmpl4');
    var finalTpl4 = jsRenderTpl(arr4);
    console.log(arr4);
    $('.box4').html(finalTpl4);
}



$(document).ready(function() {
    console.log(1);
    $.ajax({
        url: '../php/detail_search.php',
        type: 'get',
        // async: false,
        success: function(data) {
            console.log(data);
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
    console.log(arr1);
    $('.box1').html(finalTpl1);


    var jsRenderTpl = $.templates('#theTmpl2');
    var finalTpl2 = jsRenderTpl(arr2);
    console.log(arr2);
    $('.box2').html(finalTpl2);

    var jsRenderTpl = $.templates('#theTmpl3');
    var finalTpl3 = jsRenderTpl(arr3);
    console.log(arr3);
    $('.box3').html(finalTpl3);

    var finalTpl4 = jsRenderTpl(arr4);
    console.log(arr4);
    $('.box4').html(finalTpl4);
        }
    });


   $(document).on('click','.savenowbtn',function(){
    console.log(1111);
    var i = $(this).attr("id");
    console.log(i);
    var changeCont = new Object();
    changeCont.tid = i;
    for(var k = 0; k < evastandard.length; k++) {
        if(evastandard[k].id == i){
            changeCont.table_name = evastandard[k].table_name;
            changeCont.table_title = evastandard[k].item_title;
        }
    }
    changeCont.item_content = $("#content"+i).val();
    changeCont.item_point = $("#point"+i).val();
    console.log(changeCont);
    var changeObj = new Object();
    changeObj.id = i;
    changeObj.content = changeCont;
    changeObj.operate = 1;
    console.log(changeObj);
    changeArr.push(changeObj);
   })

//     $(".savenowbtn").click(function() {
//     console.log(1111);
//     var i = $(this).attr("id");
//     console.log(i);
//     var changeCont = new Object();
//     changeCont.tid = i;
//     for(var k = 0; k < evastandard.length; k++) {
//         if(evastandard[k].id == i){
//             changeCont.table_name = evastandard[k].table_name;
//             changeCont.table_title = evastandard[k].item_title;
//         }
//     }
//     changeCont.item_content = $("#content"+i).val();
//     changeCont.item_point = $("#point"+i).val();
//     console.log(changeCont);
//     var changeObj = new Object();
//     changeObj.id = i;
//     changeObj.content = changeCont;
//     changeObj.operate = 1;
//     console.log(changeObj);
//     changeArr.push(changeObj);
// });

});



$("#standardSure").click(function() {
    console.log(changeArr);
    $.ajax({
        url: '../php/set_detail.php',
        type: 'POST',
        async: false,
        data: JSON.stringify(changeArr),
        success: function(data) {
            console.log(data);
        }
    });
})


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
