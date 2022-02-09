const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee']

const content = document.querySelector('.page__content')

let i = 0

Array.from(document.querySelectorAll('.navbar__link')).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`
})

document.querySelector('.navbar__icon--open').addEventListener('click', () => {
  content.classList.add('change')
})

document.querySelector('.navbar__icon--close').addEventListener('click', () => {
  content.classList.remove('change')
})
