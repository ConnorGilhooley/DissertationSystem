  $(function(){
  $('.slideshow > :gt(0)').hide();
  setInterval(function(){$('.slideshow > :first-child').fadeOut().next().fadeIn().end().appendTo('.slideshow');}, 3000);
  });