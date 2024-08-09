// ==== Menu ====

const navMenu = document.querySelector('.header');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

// menuOpen.addEventListener('click', (e) => {
//     e.preventDefault();
//     navMenu.classList.add('open');
// });
// menuClose.addEventListener('click', (e) => {
//     e.preventDefault();
//     navMenu.classList.remove('open');
// });
// document.addEventListener('keypress', function(event) {
//     event.preventDefault();
//     if(event.keyCode == 32){
//     navMenu.classList.toggle('open');
//     }
// });

// =========== СЛАЙДЕРЫ ===============

if(document.querySelector('.home__slider')){
    new Swiper('.home__slider', {
    autoplay: true,
    loop: true,
    spaceBetween: 600,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
  });
}

if(document.querySelector('.care__slider')){
      new Swiper('.care__slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    pagination: {
      el: '.care__paginations',
    },
    navigation: {
      nextEl: '.care__next',
      prevEl: '.care__prev',
    },
  });
}