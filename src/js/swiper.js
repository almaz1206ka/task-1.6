import '../../node_modules/swiper'

import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/modules/pagination/pagination.scss'

let repairSwiper = document.querySelector('.swiper-repair')
let technicalSwiper = document.querySelector('.swiper__technical')
let priceSwiper = document.querySelector('.swiper__price')

window.addEventListener('resize', () => {
  if (window.innerWidth <= 700) {
    if ('swiper-wrapper'.length > 0) {
      let repairSwiper = new Swiper('.swiper-repair', {
        modules: [Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })

      let technicalSwiper = new Swiper('.swiper-technical', {
        modules: [Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination__technical',
          type: 'bullets',
          clickable: true
        }
      })

      let priceSwiper = new Swiper('.swiper-price', {
        modules: [Pagination],
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination__price',
          type: 'bullets',
          clickable: true
        }
      })
    } else {
      brandsSwiper.destroy()
      technicalSwiper.destroy()
      priceSwiper.destroy()
    }
  } else if (window.innerWidth >= 701) {
    if ('swiper-wrappers'.length > 0) {
    }
  }
})

window.addEventListener('load', () => {
  if (window.innerWidth <= '700') {
    if ('swiper-wrapper'.length > 0) {
      let repairSwiper = new Swiper('.swiper-repair', {
        modules: [Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination__repair',
          type: 'bullets',
          clickable: true
        }
      })

      let technicalSwiper = new Swiper('.swiper-technical', {
        modules: [Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination__technical',
          type: 'bullets',
          clickable: true
        }
      })

      let priceSwiper = new Swiper('.swiper-price', {
        modules: [Pagination],
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 16,
        Pagination: {
          el: '.swiper-pagination__price',
          type: 'bullets',
          clickable: true
        }
      })
    } else {
      brandsSwiper.destroy()
      technicalSwipe.destroy()
      priceSwiper.destroy()
    }
  } else if (window.innerWidth >= '701') {
    if ('wiper-wrappers'.length > 0) {
    }
  }
})

// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 768 && repairSwiper.dataset.mobile == 'false') {
//     myRepairSwiper = new Swiper('.repair__container', {
//       modules: [Pagination],
//       // slidesPerView: 1.3,
//       loop: true,
//       spaceBetween: 16,
//       pagination: {
//         el: '.swiper-pagination__repair',
//         clickable: true
//       }
//     })
//     repairSwiper.dataset.mobile = 'true'
//   }
//   if (window.innerWidth > 768) {
//     repairSwiper.dataset.mobile = 'false'
//     if (repairSwiper.classList.contains('.swiper-initializet')) {
//       myRepairSwiper.destroy()
//     }
//   }
// })
