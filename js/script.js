var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  