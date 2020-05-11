import Swiper from 'swiper';


//home payment
var swiper = new Swiper('.swiper-payment', {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination-payment',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
      slidesPerGroup: 7,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    }
  }
});
