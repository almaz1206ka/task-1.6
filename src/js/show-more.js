const show = document.querySelector('.show')

const showMoreTech = document.querySelectorAll('.technical__info__768')

const showMore = document.querySelector('.show-more')

const showMoreBrands = document.querySelectorAll('.brands__768')

const showMoreTextTech = document.querySelector('.show-more__text-tech')

const showMoreTextRepair = document.querySelector('.show-more__text-repair')

console.log(showMoreTextTech)
console.log(showMoreBrands)

// window.addEventListener('resize', () => {
//   if (window.screen.width <= '1390') {
//     showMoreTech.forEach((item, index) => {
//       if (index >= 3) {
//         item.classList.add('hidden')
//       }
//     })
//     show.addEventListener('click', () => {
//       showMoreTech.forEach((item, index) => {
//         if (index >= 3) {
//           item.classList.toggle('active')
//           console.log(item)
//         }
//       })
//     })
//   } else {
//     showMoreTech.forEach((item, index) => {
//       if (index >= 4) {
//         item.classList.add('hidden')
//       }
//     })
//     show.addEventListener('click', () => {
//       showMoreTech.forEach((item, index) => {
//         if (index >= 4) {
//           item.classList.toggle('active')
//         }
//       })
//     })
//   }
// })

// window.addEventListener('load', () => {
//   if (window.screen.width <= '1390') {
//     showMoreTech.forEach((item, index) => {
//       if (index >= 3) {
//         item.classList.add('hidden')
//       }
//     })
//     show.addEventListener('click', () => {
//       showMoreTech.forEach((item, index) => {
//         if (index >= 3) {
//           item.classList.toggle('active')
//         }
//         console.log(item)
//       })
//     })
//   } else {
//     showMoreTech.forEach((item, index) => {
//       if (index >= 4) {
//         item.classList.add('hidden')
//       }
//     })
//     show.addEventListener('click', () => {
//       showMoreTech.forEach((item, index) => {
//         if (index >= 4) {
//           item.classList.toggle('active')
//         }
//         console.log(item)
//       })
//     })
//   }
// })

show.onclick = function () {
  if (showMoreTextTech.textContent == 'Показать ещё') {
    showMoreTextTech.textContent = 'Скрыть'
  } else {
    showMoreTextTech.textContent = 'Показать ещё'
  }

  showMoreTech.forEach((item, index) => {
    if (index > 2) {
      item.classList.toggle('hidden')
    }
  })
}

showMoreTech.forEach((item, index) => {
  if (index > 2) {
    item.classList.add('hidden')
  }
})

showMore.onclick = function () {
  if (showMoreTextRepair.textContent == 'Скрыть') {
    showMoreTextRepair.textContent = 'Показать ещё'
  } else {
    showMoreTextRepair.textContent = 'Скрыть'
  }

  showMoreBrands.forEach((item, index) => {
    if (index > 3) {
      item.classList.toggle('hidden')
    }
  })
}

showMoreBrands.forEach((item, index) => {
  if (index > 2) {
    item.classList.add('hidden')
  }
})
