Array.from(document.querySelectorAll('.card__nav-btn')).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle('change')
  }
})
