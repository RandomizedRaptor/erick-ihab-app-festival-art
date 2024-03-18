const mySwiper = new Swiper(".swiper-screenshots", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  watchSlidesProgress: true,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_filters = new Swiper(".swiper-filters", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 2,
});

const swiper_featured = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  slidesPerView: 2.5,
  freeMode: true,
  spaceBetween: 80,
});
