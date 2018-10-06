    //check框选中数量
    var ckNum = 0;
    //定义数组
    var clsInfor = [{
        name: "软工161"
        }, {

        name: "软工162"
        }, {
        name: "物联网162"
        }];
    var html = $("#clsTmpl").render(clsInfor);
    $("#list").append(html);
    //全选
    var isCheckAll = false;
//     //悬浮框的位置
//     toastr.options.positionClass = 'toast-bottom-right';


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
                    clsInfor.push({
                        name: result
                    });
                    for (i = 0, tmp = clsInfor.length; i < tmp; i++) {
                        $("#cls-items").remove();
                    }

                    var html = $("#clsTmpl").render(clsInfor);
                    $("#list").append(html);

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
        if (clsInfor.length) {
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
                            clsInfor.splice(0, clsInfor.length);
                            toastr.success('已成功删除');
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
                                num = 0;
                                $("input[type='checkbox']").each(function () {
                                    if (this.checked) {
                                        tmp = $(this).parent().next().text();
                                        clsInfor.splice(tmp - num - 1, 1);
                                        num++;
                                    }
                                });
                                $("div#cls-items").remove();
                                toastr.success('已成功删除');
                                html = $("#clsTmpl").render(clsInfor);
                                $("#list").append(html);

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
                    clsInfor.splice(n - 1, 1);
                    toastr.success('已成功删除');
                    html = $("#clsTmpl").render(clsInfor);
                    $("#list").append(html);
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

