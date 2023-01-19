const button = document.querySelector('.arrows')

const textHidden = document.querySelector('.hidden')

const textHiddens = document.querySelector('.hiddens')

window.addEventListener('load', () => {
  if (window.innerWidth <= '759') {
    button.addEventListener('click', () => {
      if (textHiddens.style.display == 'inline-block') {
        textHiddens.style.display = 'none'
      } else {
        textHiddens.style.display = 'inline-block'
      }
    })
  } else if (window.innerWidth >= '760') {
    button.addEventListener('click', () => {
      if (textHidden.style.display == 'contents') {
        textHidden.style.display = 'none'
      } else {
        textHidden.style.display = 'contents'
      }
    })
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= '759') {
    button.addEventListener('click', () => {
      if (textHiddens.style.display == 'inline-block') {
        textHiddens.style.display = 'none'
      } else {
        textHiddens.style.display = 'inline-block'
      }
    })
  } else if (window.innerWidth >= '760') {
    button.addEventListener('click', () => {
      if (textHidden.style.display == 'contents') {
        textHidden.style.display = 'none'
      } else {
        textHidden.style.display = 'contents'
      }
    })
  }
})
