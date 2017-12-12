$(document).ready(function () {

  // Parallax Scrolling
  var scale = 0.4;
  function parallaxScroll() {
    if ($(window).width() <= 1023 || $(window).height() <= 719) {
      console.log($(window).height())
      console.log("parallax: off")
    } else {
      var scrollTop = $(window).scrollTop();

      $('.parallax, .parallax2').each(function () {
        $(this).css('top', Math.round(((0 - scrollTop) * scale)) + 'px');
      });
    }
  }

  // Smooth Scrolling
  $(function () {
    let offSetScale = $(window).width() <= 1023 || $(window).height() <= 719 ? 0 : 285;
    $('a[href*=\\#]:not([href=\\#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - offSetScale
          }, 1500);
          return false;
        }
      }
    })
  });

  // Function Calls 
  $(window).bind('scroll', function () {
    parallaxScroll();
  });
  parallaxScroll();

  window.addEventListener('load', e => {
    $(window).width() <= 1023 || $(window).height() <= 719 ? $('.toggle-nav').attr('href', '#portfolio') : $('.toggle-nav').attr('href', '#about');
  })

  window.addEventListener('resize', e => {
    $(window).width() <= 1023 || $(window).height() <= 719 ? $('.toggle-nav').attr('href', '#portfolio') : $('.toggle-nav').attr('href', '#about');;
  })

});