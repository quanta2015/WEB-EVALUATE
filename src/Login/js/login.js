
$(function() {
  /*登录信息验证*/
  $("#username_hide").focus(function() {
    var username = $(this).val();
    if (username == '输入账号') {
      $(this).val('');
    }
  });
  $("#username_hide").focusout(function() {
    var username = $(this).val();
    if (username == '') {
      $(this).val('输入账号');
    }
  });
  $("#password_hide").focus(function() {
    var username = $(this).val();
    if (username == '输入密码') {
      $(this).val('');
    }
  });
  $("#password_hide").focusout(function() {
    var username = $(this).val();
    if (username == '') {
      $(this).val('输入密码');
    }
  });
  $("#code_hide").focus(function() {
    var username = $(this).val();
    if (username == '输入验证码') {
      $(this).val('');
    }
  });
  $("#code_hide").focusout(function() {
    var username = $(this).val();
    if (username == '') {
      $(this).val('输入验证码');
    }
  });
  $(".login_error").Validform({
    tiptype: function(msg, o, cssctl) {
      var objtip = $(".error_box");
      cssctl(objtip, o.type);
      objtip.text(msg);
    },
    ajaxPost: true
  });
});