var total, groupGradeSum = 0;
var a = {

    'name': ,
    'grade': ,
    'id':
};
var k = {

    'teacher': ,
    'student': ,
    'group': [],
    'task_title': ,
    'totalGrade': ''
}
var finalSelect = [];

$(document).ready(function () {
    $.ajax({
        url: '../php/groupeval_search.php',
        type: 'get',
        async: false,

        success: function (data) {
            allObj = JSON.parse(data);

        }

    });
});

for (var i = 0; i < select.length; i++) {
    if (select[i].role == 1) {

        a.grade = select[i].totalGrade;
        a.id = select[i].evalute_user;
        a.task_title = select[i].task_title;
        k.teacher.push(a);

    }
    if (select[i].role == 2) {

        a.name = select[i].user_name;
        a.grade = select[i].totalGrade;
        a.id = select[i].evalute_user;
        k.student.push(a);

    }
    if (select[i].role == 3) {
        sum += a.grade;

        a.name = select[i].user_name;
        a.grade = select[i].totalGrade;
        a.id = select[i].evalute_user;
        k.task_title = select[i].task_title;

        k.group.push(a);

    }
    if (select[i].dotask_id != select[i + 1].dotask_id) {
        total = k.teacher.grade * select[i].t_percent + k.student.grade * select[i].s_percent + sum * select[i].g_percent / select[i].group_num;
        k.totalGrade = total;
        finalSelect.push(k);
        sum = 0;

    }


}
//var finalSelect = [{
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}, {
//
//    'teacher': {
//
//        'name': '猫姐',
//        'grade': 90,
//        'id': 12
//    },
//    'student': {
//
//        'name': 'zhang',
//        'grade': 10,
//        'id': 123
//    },
//    'group': [{
//
//        'name': 'tao',
//        'grade': 11,
//        'id': 123
//}, {
//
//        'name': '蔡雅洁',
//        'grade': 12,
//        'id': 123
//}, {
//
//        'name': '叶艳洁',
//        'grade': 120,
//        'id': 11
//}],
//    'task_title': 'asda1',
//    'totalGrade': 90
//}]
//var html = $("#tmp").render(finalSelect);
//$("#list").append(html);
