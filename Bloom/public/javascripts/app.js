$('.main-nav a').each(function() {
  if ($(this).attr('href') === window.location.pathname) {
    $(this).addClass('current-tab');
  }
});
