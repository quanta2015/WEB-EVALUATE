    //check框选中数量
    var ckNum = 0;
    //定义数组
    var stdInfor = [{
        number: "2016210405050",
        name: "p桃"
        }, {
        number: "2016210405057",
        name: "薇薇"
        }, {
        number: "2016210405054",
        name: "朱丽叶"
        }, {
        number: "2016210405061",
        name: "蔡阿狗"
        }, ];
    var html = $("#stdTmpl").render(stdInfor);
    $("#list").append(html);
    //全选
    var isCheckAll = false;


    function stdAdd() {
        bootbox.prompt({
            size: "small",
            title: "请输入所加学生名称",
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
                    stdInfor.push({
                        name: result
                    });
                    for (i = 0, tmp = stdInfor.length; i < tmp; i++) {
                        $("#std-items").remove();
                    }

                    var html = $("#stdTmpl").render(stdInfor);
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
                            $("div#std-items").remove();
                            stdInfor.splice(0, stdInfor.length);
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
                                num = 0;
                                $("input[type='checkbox']").each(function () {
                                    if (this.checked) {
                                        tmp = $(this).parent().next().text();
                                        stdInfor.splice(tmp - num - 1, 1);
                                        num++;
                                    }
                                });
                                $("div#std-items").remove();
                                toastr.success('已成功删除');
                                html = $("#stdTmpl").render(stdInfor);
                                $("#list").append(html);

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
                    stdInfor.splice(n - 1, 1);
                    toastr.success('已成功删除');
                    html = $("#stdTmpl").render(stdInfor);
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

