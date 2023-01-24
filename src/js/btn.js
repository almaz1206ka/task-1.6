const btnOpenMenu = document.querySelector('.btn')

const btnCloseMenu = document.querySelector('.btn_close')

const closeMenu = document.querySelector('.menu__burger')

const openMenu = document.querySelector('.wrapper')

const feedback = document.querySelector('.feedback__container')

const btnOpenFeed = document.querySelectorAll('.feed')

const btnCloseFeed = document.querySelector('.close-feed')

const btnCloseCall = document.querySelector('.close-call')

const btnOpenCall = document.querySelectorAll('.call')

const callFeed = document.querySelector('.call__feedback')

btnOpenMenu.onclick = function () {
  closeMenu.classList.add('active')
  openMenu.classList.add('inactive')
}

closeMenu.onclick = function () {
  closeMenu.classList.remove('active')
  openMenu.classList.remove('inactive')
}

btnOpenFeed.forEach((items) => {
  items.onclick = function () {
    feedback.classList.add('open')
    openMenu.classList.add('inactive')
    closeMenu.classList.add('inactive')
    closeMenu.classList.remove('active')
  }
})

btnCloseFeed.onclick = function () {
  feedback.classList.remove('open')
  openMenu.classList.remove('inactive')
  closeMenu.classList.remove('inactive')
  closeMenu.classList.remove('active')
}

btnOpenCall.forEach((items) => {
  items.onclick = function () {
    callFeed.classList.add('open')
    openMenu.classList.add('inactive')
    closeMenu.classList.remove('active')
  }
})

btnCloseCall.onclick = function () {
  callFeed.classList.remove('open')
  openMenu.classList.remove('inactive')
  closeMenu.classList.remove('inactive')
  closeMenu.classList.remove('active')
}

// window.addEventListener('resize', () => {
//   if (window.screen.width <= '1395') {
//     btnOpenFeed.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         feedback.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnOpenCall.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         callFeed.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseCall.addEventListener('click', () => {
//       callFeed.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })

//     btnOpenMenu.addEventListener('click', () => {
//       closeMenu.classList.add('active')
//       openMenu.classList.add('inactive')
//     })

//     btnCloseMenu.addEventListener('click', () => {
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })

//     btnCloseFeed.addEventListener('click', () => {
//       feedback.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//   } else if (window.screen.width >= '1396') {
//     btnOpenFeed.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         feedback.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseFeed.addEventListener('click', () => {
//       feedback.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//     btnOpenCall.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         callFeed.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseCall.addEventListener('click', () => {
//       callFeed.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//   }
// })

// window.addEventListener('load', () => {
//   if (window.screen.width <= '1395') {
//     btnOpenMenu.addEventListener('click', () => {
//       openMenu.classList.add('inactive')
//       closeMenu.classList.add('active')
//     })
//     btnOpenFeed.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         feedback.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseMenu.addEventListener('click', () => {
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//     btnCloseFeed.addEventListener('click', () => {
//       feedback.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//     btnOpenCall.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         callFeed.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseCall.addEventListener('click', () => {
//       callFeed.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//   } else if (window.screen.width >= '1397') {
//     btnOpenFeed.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         feedback.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseFeed.addEventListener('click', () => {
//       feedback.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//     btnOpenCall.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         callFeed.classList.add('open')
//         openMenu.classList.add('inactive')
//         closeMenu.classList.add('inactive')
//         closeMenu.classList.remove('active')
//       })
//     })

//     btnCloseCall.addEventListener('click', () => {
//       callFeed.classList.remove('open')
//       openMenu.classList.remove('inactive')
//       closeMenu.classList.remove('inactive')
//       closeMenu.classList.remove('active')
//     })
//   }
// })
