import '../../node_modules/swiper'

import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper.scss'

import 'swiper/modules/pagination/pagination.scss'

import 'swiper/modules/navigation/navigation.scss'

const swiper = new Swiper('.swiper-repair', {
  modules: [Pagination, Navigation],
  slidesPerView: 1.3,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination__repair',
    type: 'bullets',
    clickable: true
  }
})

const mySwiper = new Swiper('.swiper-technical', {
  modules: [Pagination],
  slidesPerView: 1.3,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination__technical',
    type: 'bullets',
    clickable: true
  }
})

const priceSwiper = new Swiper('.swiper-price', {
  modules: [Pagination],
  slidesPerView: 1.2,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination__price',
    type: 'bullets',
    clickable: true
  }
})
