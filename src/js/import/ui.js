
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
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).parents('.video').find('video').get(0).play();
  } else{
    $(this).parents('.video').find('video').get(0).pause();
  }
});
