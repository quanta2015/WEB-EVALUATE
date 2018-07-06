        $(document).ready(function() {
          var clsname = ['软工162', '软工161', '物联网161', '物联网162'];
          var clsval;
          for (i = 0, len = clsname.length; i < len; i++) {
            clsval = clsname[i];
            $("#clsCh").append("<option>" + clsval + "</option>");
          }
        });