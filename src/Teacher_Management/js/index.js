/**
 * 
 * @authors Xuan0216 (849651526@qq.com)
 * @date    2018-06-03 16:47:10
 * @version $1.0$
 */

// Web font
WebFont.load({
  google: {
    "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700", "Asap+Condensed:500"]
  },
  active: function() {
    sessionStorage.fonts = true;
  }
});

// Page Loader
$(window).on('load', function() {
  $('body').removeClass('m-page--loading');
});