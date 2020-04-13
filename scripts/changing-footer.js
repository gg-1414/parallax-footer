document.addEventListener("DOMContentLoaded", function() {
  const placeholder = document.querySelector('.placeholder')
  const footer = document.querySelector('footer')

  const footerHeight = document.querySelector('.footer-height')

  // On DOM Content Load, set placeholder height to be equal to footer height
  updateHeight()

  updateText()

  window.addEventListener('resize', onResize)

  // On window resize, update placeholder height to be equal to footer height
  function onResize() {
    updateHeight()

    // change .footer-height text
    updateText()
  }

  function updateHeight() {
    // Placeholder should always match footer height
    placeholder.style.height = `${footer.offsetHeight}px`
  }

  function updateText() {
    footerHeight.innerText = `${footer.offsetHeight}px`
  }
})

