import Swiper, { Navigation, Pagination } from 'swiper'

let brandsSwiper
let technicalSwiper
let priceSwiper

const repair = document.querySelector('.repair__container')
const technical = document.querySelector('.technical__container')
const price = document.querySelector('.price__container')

window.addEventListener('resize', () => {
  if (window.innerWidth <= '500') {
    if ('swiper-wrapper'.length > 0) {
      let brandsSwiper = new Swiper('.repair__container', {
        modules: [Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })

      let technicalSwiper = new Swiper('.technical__container', {
        modules: { Navigation, Pagination },
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16
      })

      let priceSwiper = new Swiper('.price__container', {
        modules: { Navigation, Pagination },
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 16
      })
    } else {
      brandsSwiper.destroy()
      technicalSwipe.destroy()
      priceSwiper.destroy()
    }
  } else if (window.innerWidth >= '700') {
    if ('wiper-wrappers'.length > 0) {
    }
  }
})

window.addEventListener('load', () => {
  if (window.innerWidth <= '500') {
    if ('swiper-wrapper'.length > 0) {
      let brandsSwiper = new Swiper('.repair__container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        breakpoints: {
          760: {
            enabled: false
          }
        }
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        //   clickable: true
        // }
      })

      let technicalSwiper = new Swiper('.technical__container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16
      })

      let priceSwiper = new Swiper('.price__container', {
        modules: [Navigation, Pagination],
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 16
      })
    } else {
      brandsSwiper.destroy()
      technicalSwiper.destroy()
      priceSwiper.destroy()
    }
  } else if (window.innerWidth >= '700') {
    if ('wiper-wrappers'.length > 0) {
    }
  }
})
