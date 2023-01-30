const show = document.querySelector('.show')

const showMoreTextTech = document.querySelector('.show-more__text-tech')

const showMoreTech = document.querySelectorAll('.technical__info__768')

const showMore = document.querySelector('.show-more')

const showMoreTextRepair = document.querySelector('.show-more__text-repair')

const showMoreBrands = document.querySelectorAll('.brands__768')

window.addEventListener('resize', () => {
  if (window.innerWidth < 1000) {
    for (let i = 1; i < showMoreBrands.length; i++) {
      if (i > 2 && showMoreBrands[i].classList.contains('brands__768')) {
        showMoreBrands[i].classList.add('brands__768_hidden')
      } else if (showMoreBrands[i].classList.contains('brands__768_hidden')) {
        showMoreBrands[i].classList.remove('brands__768_hidden')
      }
    }
    for (let i = 1; i < showMoreTech.length; i++) {
      if (i > 2 && showMoreTech[i].classList.contains('technical__info__768')) {
        showMoreTech[i].classList.add('technical__info__768_hidden')
      } else if (
        showMoreTech[i].classList.contains('technical__info__768_hidden')
      ) {
        showMoreTech[i].classList.remove('technical__info__768_hidden')
      }
    }
  } else {
    for (let i = 1; i < showMoreBrands.length; i++) {
      if (i > 3 && showMoreBrands[i].classList.contains('brands__768')) {
        showMoreBrands[i].classList.add('brands__768_hidden')
      } else if (showMoreBrands[i].classList.contains('brands__768_hidden')) {
        showMoreBrands[i].classList.remove('brands__768_hidden')
      }
    }
    for (let i = 1; i < showMoreTech.length; i++) {
      if (i > 3 && showMoreTech[i].classList.contains('technical__info__768')) {
        showMoreTech[i].classList.add('technical__info__768_hidden')
      } else if (
        showMoreTech[i].classList.contains('technical__info__768_hidden')
      ) {
        showMoreTech[i].classList.remove('technical__info__768_hidden')
      }
    }
  }
})

window.addEventListener('load', () => {
  if (window.innerWidth < 1000) {
    for (let i = 1; i < showMoreBrands.length; i++) {
      if (i > 2 && showMoreBrands[i].classList.contains('brands__768')) {
        showMoreBrands[i].classList.add('brands__768_hidden')
      } else if (showMoreBrands[i].classList.contains('brands__768_hidden')) {
        showMoreBrands[i].classList.remove('brands__768_hidden')
      }
    }
    for (let i = 1; i < showMoreTech.length; i++) {
      if (i > 2 && showMoreTech[i].classList.contains('technical__info__768')) {
        showMoreTech[i].classList.add('technical__info__768_hidden')
      } else if (
        showMoreTech[i].classList.contains('technical__info__768_hidden')
      ) {
        showMoreTech[i].classList.remove('technical__info__768_hidden')
      }
    }
  } else {
    for (let i = 1; i < showMoreBrands.length; i++) {
      if (i > 3 && showMoreBrands[i].classList.contains('brands__768')) {
        showMoreBrands[i].classList.add('brands__768_hidden')
      } else if (showMoreBrands[i].classList.contains('brands__768_hidden')) {
        showMoreBrands[i].classList.remove('brands__768_hidden')
      }
    }
    for (let i = 1; i < showMoreTech.length; i++) {
      if (i > 3 && showMoreTech[i].classList.contains('technical__info__768')) {
        showMoreTech[i].classList.add('technical__info__768_hidden')
      } else if (
        showMoreTech[i].classList.contains('technical__info__768_hidden')
      ) {
        showMoreTech[i].classList.remove('technical__info__768_hidden')
      }
    }
  }
})

showMore.onclick = function () {
  showMore.classList.toggle('active')
  showMoreBrands.forEach((item, index) => {
    if (index > 3) {
      item.classList.toggle('active')
    }
  })
  if (showMoreTextRepair.textContent == 'Скрыть') {
    showMoreTextRepair.textContent = 'Показать ещё'
  } else {
    showMoreTextRepair.textContent = 'Скрыть'
  }
}

show.onclick = function () {
  show.classList.toggle('active')
  showMoreTech.forEach((item) => {
    if (item.classList.contains('technical__info__768_hidden')) {
      item.classList.toggle('active')
    }
  })
  if (showMoreTextTech.textContent == 'Скрыть') {
    showMoreTextTech.textContent = 'Показать ещё'
  } else {
    showMoreTextTech.textContent = 'Скрыть'
  }
}
