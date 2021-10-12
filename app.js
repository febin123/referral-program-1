$(window).scroll(function() {
    if ($(this).scrollTop() >= 450) {        // If page is scrolled more than 50px
        $('.fixed-btn').fadeIn(200);    // Fade in the arrow
    } else {
        $('.fixed-btn').fadeOut(200);   // Else fade out the arrow
    }
  });