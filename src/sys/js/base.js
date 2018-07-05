        $().ready(function () {

            $("#form").validate({
                rules: {
                    name: "required",
                    pwd: "required",

                },
                messages: {
                    name: "请输入您的账号",
                    pwd: {
                        required: "请输入密码"
                    }
                }
            });
        });

        //// RegExp
        //function performRequest(url, method, data, successCallback, errorCallback, completeCallback) {
        //  var method = method || "POST"
        //  var url = url || "/"
        //  var data = data || {}
        //  var success = successCallback || function(result) {
        //    console.log("call '" + url + "' successfully")
        //  }
        //  var error = errorCallback || function(err) {
        //    console.log("call '" + url + "' failed, because " + err.responseText)
        //  }
        //  var complete = completeCallback || function(e){
        //    console.log("call '" + url + "' completed")
        //  }
        //
        //  if (method == "POST") {
        //    data = JSON.stringify(data)
        //  }
        //
        //  $.ajax({
        //    method: method,
        //    url: url,
        //    data: data,
        //    dataType: "json",
        //    contentType: "application/json",
        //    success: success,
        //    error: error,
        //    complete: complete
        //  })
        //}
        //
        //function getURLParameter(sParam) {
        //  var sPageURL = window.location.search.substring(1)
        //  var sURLVariables = sPageURL.split('&')
        //  for (var i = 0; i < sURLVariables.length; i++) {
        //    var sParameterName = sURLVariables[i].split('=')
        //    if (sParameterName[0] == sParam) {
        //      return sParameterName[1]
        //    }
        //  }
        //
        //  return undefined
        //}
        //
        //function showError(err) {
        //  $('#notice .alert .message').text('[' + err.code + '] ' + errMap[err.code] || err.message)
        //  $('#notice .alert').removeClass('alert-success').addClass('alert-danger').show()
        //}
