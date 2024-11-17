$(window).on('resize', function() {
    if ($(window).width() >= 768 && $(window).width() <= 1024) {
      $('#tablet-overlay').show();
    } else {
      $('#tablet-overlay').hide();
    }
  });