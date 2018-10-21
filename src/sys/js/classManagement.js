    //check框选中数量
    var ckNum = 0;
    var isCheckAll = false;
    //  var clsNm = [];
    //  var clsId = [];
    var selcId = [];
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
                if (result) {
                    $.ajax({
                        url: '../php/class_set.php',
                        type: "POST",
                        data: {
                            do: '0',
                            class_name: result,
                        },
                        success: function (data) {
                            //                            console.log(data);
                            //                            clsNm.push({
                            //                                name: result
                            //                            });
                            //                            clsId.push({
                            //                                id: clsId.length
                            //                            })
                            // for (i = 0, tmp = classes.data.length; i < tmp; i++) {
                            //     $("#cls-items").remove();
                            // }
                              window.location.reload();

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
                            $.ajax({
                                url: '../php/class_set.php',
                                type: "POST",
                                data: {
                                    do: '1',
                                    class_id: 1
                                },
                                success: function () {
                                    $("#cls-items").remove();
                                    //  clsNm.splice(0, clsNm.length);
                                    //  clsId.splice(0, clsId.length);
                                    toastr.success('已成功删除');
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
                                var j = 0;
                                $("input[type='checkbox']").each(function () {
                                    if (this.checked) {
                                        tmp = $(this).parent().next().text();
                                        selcId.push(tmp);

                                        //  clsNm.splice(tmp - num - 1, 1);
                                        // selcId[j] = clsId.splice(tmp - num - 1, 1);
                                        num++;
                                        // j++;
                                    }
                                });

                                $.ajax({
                                    url: '../php/class_set.php',
                                    type: "POST",
                                    data: {
                                        do: 1,
                                        class_id: selcId
                                    },
                                    success: function (data) {
                                        console.log(selcId);
                                        console.log(data);
                                        $("div#cls-items").remove();
                                        toastr.success('已成功删除');

                                        html = $("#clsTmpl").render(classes.data);
                                        $("#list").append(html);
                                        //  selcId.splice(0, selcId.length);

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
                    $.ajax({
                        url: '../php/class_set.php',
                        type: "POST",
                        data: {
                            dp: '1',
                            class_id: n
                        },
                        success: function (data) {
                            console.log(data);
                            if (data.code == 0) {
                                $("div#cls-items").remove();
                                toastr.success('已成功删除');
                                html = $("#clsTmpl").render(classes.data);
                                $("#list").append(html);
                            } else
                                toastr.success('删除失败');


                        }
                    })

                }
            }


        })
    }
