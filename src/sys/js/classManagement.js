    //check框选中数量
    var ckNum = 0;
    var isCheckAll = false;
    //  var clsNm = [];
    //  var clsId = [];
    var selcId = [];
    var selcNum=[];
    toastr.options.positionClass = 'toastr-top-left';


    $(document).ready(function () {

        $.ajax({
            url: '../php/class_search.php',
            type: 'get',
            async: false,
            success: function (data) {

                classes = JSON.parse(data);
                console.log(classes);
                var i;
                var html = $("#clsTmpl").render(classes.data);
                $("#list").append(html);

            }

        });
    });




    function clsAdd() {
        bootbox.prompt({
            size: "small",
            title: "请输入所加班级名称",
            buttons: {
                confirm: {
                    label: '增加',
                    className: 'btn-danger'

                },
                cancel: {
                    label: '取消',
                    className: 'btn-success'
                }
            },
            callback: function (result) {
                console.log(result);
                $("div#cls-items").remove();
                if (result) {
                    $.ajax({
                        url: '../php/class_set.php',
                        type: "POST",
                        data: {
                            do: '0',
                            class_name: result,
                        },
                        success: function (data) {
                           classes.data.push({
                            class_id:data,
                            class_name:result
                        });

                        var html = $("#clsTmpl").render(classes.data);
                        $("#list").append(html);
                            
                        }
                    })


                }
            }
        })
    }
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
    function clsMulRemove() {
        if (classes.data.length) {
            if (isCheckAll) {
                bootbox.confirm({
                    message: "确认删除全部数据吗?",
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
                               $("div#cls-items").remove();
                            for (i =0, tmp = classes.data.length; i <tmp; i++) {
                                selcId.push(classes.data[i].class_id);
                                
                            }
                            classes.data.splice(0,classes.data.length);
                            $.ajax({
                                url: '../php/class_set.php',
                                type: "POST",
                                data: {
                                    do: '1',
                                    class_id: selcId
                                },
                                success: function () {
                                     selcId.splice(0,selcId.length);
                                    toastr.success('已成功删除');
                                    isCheckAll=false;
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
                console.log(ckNum);
                if (ckNum == 0) {
                    toastr.warning('未选中任何班级');
                } else {
                    bootbox.confirm({
                        message: "确认删除所选班级吗?",
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
                                var num = 0;
                                $("input[type='checkbox']").each(function () {
                                    if (this.checked) {
                                        tmp = $(this).parent().next().text();
                                        console.log(tmp);
                                        selcId.push(classes.data[tmp-1].class_id);
                                        selcNum.push(tmp-1);
                                        num++;
                                        
                                    }
                                });
                                for(var k=(selcNum.length-1);k>=0;k--){
                                    classes.data.splice(selcNum[k],1);
                                }



                                $.ajax({
                                    url: '../php/class_set.php',
                                    type: "POST",
                                    data: {
                                        do: 1,
                                        class_id: selcId
                                    },
                                    success: function (data) {
                                        
                                        $("div#cls-items").remove();
                                        toastr.success('已成功删除');

                                        html = $("#clsTmpl").render(classes.data);
                                        $("#list").append(html);
                                         selcId.splice(0,selcId.length);
                                         selcNum.splice(0,selcNum.length);

                                    }
                                })



                            }
                        }

                    });
                }


            }
        }
    }

    function clsRemove(n) {

        bootbox.confirm({
            message: "确认删除此班级吗?",
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

                                $("div#cls-items").remove();
                            selcId[0]=classes.data[n-1].class_id;
                    classes.data.splice(n-1,1);
                     html = $("#clsTmpl").render(classes.data);
                                $("#list").append(html);
                    $.ajax({
                        url: '../php/class_set.php',
                        type: "POST",
                        data: {
                            do: '1',
                            class_id: selcId
                        },
                        success: function (data) {
                            console.log(data);
                            if (data.code == 0) {
                                selcId.splice(0,selcId.length);
                                toastr.success('已成功删除');
                               
                            } else
                                toastr.success('删除失败');


                        }
                    })

                }
            }


        })
    }
