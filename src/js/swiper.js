import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperReviews = new Swiper('.reviewsSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 4.2,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
});
