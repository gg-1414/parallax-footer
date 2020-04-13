document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('#sneak-peak')
  const sections = document.querySelectorAll('main section')

  button.onclick = onClick

  function onClick() {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].classList.contains('active')) {
        sections[i].classList.remove('active')
      } else {
        sections[i].classList.add('active')
      }
    }
  }
})