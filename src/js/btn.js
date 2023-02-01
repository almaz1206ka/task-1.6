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

window.addEventListener('resize', () => {
  if (window.innerWidth < 1400) {
    btnOpenMenu.onclick = function () {
      closeMenu.classList.add('active')
      openMenu.classList.add('inactive')
    }

    closeMenu.onclick = function (event) {
      event.stopImmediatePropagation()
      closeMenu.classList.remove('active')
      openMenu.classList.remove('inactive')
    }

    btnOpenFeed.forEach((items) => {
      items.onclick = function (event) {
        event.stopImmediatePropagation()
        feedback.classList.add('open')
        openMenu.classList.add('inactive')
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
  } else {
    btnOpenCall.forEach((items) => {
      items.onclick = function () {
        callFeed.classList.add('open')
        openMenu.classList.add('inactive')
        closeMenu.classList.add('inactive')
      }
    })

    btnCloseCall.onclick = function () {
      callFeed.classList.remove('open')
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
    }
    btnOpenFeed.forEach((items) => {
      items.onclick = function () {
        feedback.classList.add('open')
        openMenu.classList.add('inactive')
        closeMenu.classList.add('inactive')
      }
    })

    btnCloseFeed.onclick = function () {
      feedback.classList.remove('open')
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
    }
  }
})

window.addEventListener('load', () => {
  if (window.innerWidth < 1400) {
    // if (
    //   openMenu.classList.contains('inactive') &&
    //   closeMenu.classList.contains('active') &&
    //   feedback.classList.contains('open') &&
    //   callFeed.classList.contains('open')
    // ) {
    //   window.onclick = function () {
    //     openMenu.classList.remove('inactive')
    //     closeMenu.classList.remove('active')
    //     feedback.classList.remove('open')
    //     callFeed.classList.remove('open')
    //   }
    // }

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
        closeMenu.classList.remove('inactive')
        openMenu.classList.toggle('inactive')
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
        closeMenu.classList.add('inactive')
      }
    })

    btnCloseCall.onclick = function () {
      callFeed.classList.remove('open')
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
    }
  } else {
    btnOpenCall.forEach((items) => {
      items.onclick = function () {
        callFeed.classList.add('open')
        openMenu.classList.add('inactive')
        closeMenu.classList.add('inactive')
      }
    })

    btnCloseCall.onclick = function () {
      callFeed.classList.remove('open')
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
    }
    btnOpenFeed.forEach((items) => {
      items.onclick = function () {
        feedback.classList.add('open')
        openMenu.classList.add('inactive')
        closeMenu.classList.add('inactive')
      }
    })

    btnCloseFeed.onclick = function () {
      feedback.classList.remove('open')
      openMenu.classList.remove('inactive')
      closeMenu.classList.remove('inactive')
    }
  }
})
