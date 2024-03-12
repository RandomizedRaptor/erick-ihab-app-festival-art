const swiper = new Swiper('.swiper-screenshots', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    breakpoints: {
        1200: {
        slidesPerView: 2,
        spaceBetween: 25,
      }},
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});