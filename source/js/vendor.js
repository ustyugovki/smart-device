// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const swiper1 = new Swiper('.swiper1', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next1',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next2',
    clickable: true,
  },
});

const swiper3 = new Swiper('.swiper3', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next3',
    clickable: true,
  },
});
