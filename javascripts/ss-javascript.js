$(document).ready(function() {
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);
    return false;
  });
});
