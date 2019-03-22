  /* Navigation active state */

  $('.main-nav .nav-link').on('click', function () {
    $('.main-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });