const button = document.querySelector('.arrows')

const textHidden = document.querySelector('.hidden')

const textHiddens = document.querySelector('.hiddens')

const text = document.querySelector('.read-more')

const textHiddene = document.querySelector('.hiddene')

const readMoreText = document.querySelector('.main__read-more__text')

button.onclick = function () {
  textHiddens.classList.toggle('active')
  textHidden.classList.toggle('_active')
  textHiddene.classList.toggle('__active')
  button.classList.toggle('active')
  if (text.textContent == 'Читать далее') {
    text.textContent = 'Скрыть'
  } else {
    text.textContent = 'Читать далее'
  }
}

// window.addEventListener('load', () => {
//   if (window.matchMedia('(max-width: 759px)').matches) {
//     button.addEventListener('click', () => {
//       textHiddens.classList.toggle('active')
//       textHidden.classList.toggle('_active')
//       textHiddene.classList.toggle('__active')
//       button.classList.toggle('active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   } else if (window.matchMedia('(max-width: 1390)').matches) {
//     button.addEventListener('click', () => {
//       textHidden.classList.toggle('_active')
//       textHiddene.classList.toggle('__active')
//       button.classList.toggle('active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   } else if (window.matchMedia('(min-width: 1391)').matches) {
//     button.addEventListener('click', () => {
//       button.classList.toggle('active')
//       textHiddene.classList.toggle('__active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   }
// })

// window.addEventListener('resize', () => {
//   if (window.matchMedia('(max-width: 759px)').matches) {
//     button.addEventListener('click', () => {
//       textHiddens.classList.toggle('active')
//       textHidden.classList.toggle('_active')
//       textHiddene.classList.toggle('__active')
//       button.classList.toggle('active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   } else if (window.matchMedia('(max-width: 1390)').matches) {
//     button.addEventListener('click', () => {
//       textHidden.classList.toggle('_active')
//       textHiddene.classList.toggle('__active')
//       button.classList.toggle('active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   } else if (window.matchMedia('(min-width: 1391)').matches) {
//     button.addEventListener('click', () => {
//       button.classList.toggle('active')
//       textHiddene.classList.toggle('__active')
//       if (text.textContent == 'Читать далее') {
//         text.textContent = 'Скрыть'
//       } else {
//         text.textContent = 'Читать далее'
//       }
//     })
//   }
// })
