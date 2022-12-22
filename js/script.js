$(document).ready(function(){

    $('.navbar').hide();
  
    $(function () {
      $(window).scrollLeft(function () {
  
        if ($(this).scrollTop() > 140) {
          $('.navbar').fadeIn();
        } else {
          $('.navbar').fadeOut();
        }
      });
    });
  });