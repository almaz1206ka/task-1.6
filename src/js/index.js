import '../scss/style.scss'

import '../scss/menu_320.scss'

import '../scss/menu_360.scss'

import '../js/swiper'

const btnOpenMenu = document.querySelector('.btn')
console.log(btnOpenMenu)

const btnCloseMenu = document.querySelector('.btn_close')

const closeMenu = document.querySelector('.menu__burger')

const openMenu = document.querySelector('.wrapper')
console.log(openMenu)

btnOpenMenu.addEventListener('click', () => {
  openMenu.classList.add('inactive')
  closeMenu.classList.add('active')
})

btnCloseMenu.addEventListener('click', () => {
  openMenu.classList.remove('inactive')
  closeMenu.classList.remove('active')
})
