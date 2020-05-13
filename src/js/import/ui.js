
$('.mobile-open-slide').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.mobile-slide').slideToggle();
  if($(this).hasClass('active')) {
    $(this).text('Less categories');
  } else{
    $(this).text('More categories');
  }
});



//video
$('.video a').on('click', function(event) {
  event.preventDefault();
  $(this).fadeToggle();
  $(this).parents('.video').find('video').get(0).play();
  $(this).parents('.video').find('video').attr('controls', 'controls');
});
