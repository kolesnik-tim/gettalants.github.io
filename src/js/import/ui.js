
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
