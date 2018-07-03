$(function () {
    // nav收缩展开
    $('.nav-item>a').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        } else {
            $('.nav').removeClass('nav-mini');
        }
    });
    var leftIsHiden = true; /*控制切换菜单*/
    $('#nav_left').on('click', function () {
        if (leftIsHiden) {
            $('.nav').animate({
                left: '-=205px'
            });
            $('#nav_icon1').hide();
            $('#nav_icon2').hide();
            $('#nav_icon3').show();

        } else {
            $('#nav_icon3').hide();
        }
        leftIsHiden = !leftIsHiden;
    });
    var rightIsHiden = false;
    $('#nav_icon3').on('click', function () {
        if (!rightIsHiden) {
            $('.nav').animate({
                left: '+=205px'
            });
            $('#nav_icon1').show();
            $('#nav_icon2').show();
            $('#nav_icon3').hide();

        }
        rightIsHiden = !rightIsHiden;
    });

});
