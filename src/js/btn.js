const btnOpenMenu = document.querySelector('.btn')
console.log(btnOpenMenu)

const btnCloseMenu = document.querySelector('.btn_close')

const closeMenu = document.querySelector('.menu__burger')

const openMenu = document.querySelector('.wrapper')
console.log(openMenu)

window.addEventListener('resize', () => {
  if (window.screen.width <= 1400) {
    btnOpenMenu.addEventListener('click', () => {
      closeMenu.classList.add('active')
      openMenu.classList.add('inactive')
    })
    btnCloseMenu.addEventListener('click', () => {
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('active')
    })
  } else if (window.screen.width >= 1400) {
    openMenu.classList.contains('')
    closeMenu.classList.contains('')
  }
})

window.addEventListener('load', () => {
  if (window.screen.width <= 1400) {
    btnOpenMenu.addEventListener('click', () => {
      openMenu.classList.add('inactive')
      closeMenu.classList.add('active')
    })
    btnCloseMenu.addEventListener('click', () => {
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('active')
    })
  } else if (window.screen.width >= 1400) {
    openMenu.classList.contains('')
    closeMenu.classList.contains('')
  }
})
