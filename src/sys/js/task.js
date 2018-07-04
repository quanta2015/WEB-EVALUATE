        $(init)

        function init() {
            $(".btn").on('click', doSubmit)
            $('.dropdown-toggle').dropdown()
            $('#startDatetimepicker').datetimepicker();
            $('#endDatetimepicker').datetimepicker();

            let clsArr = ['软工162', '物联网161', '物联网162']
            clsArr.forEach((v) => {
                $('#u-cls li').append(`<a role="menuitem" tabindex="-1" href="#">${v}</a>`)
            })
        }

        function doSubmit() {

        }
