document.addEventListener("DOMContentLoaded", function() {
  const placeholder = document.querySelector('.placeholder')
  const footer = document.querySelector('footer')

  let placeholderTop,
      ticking
      
  window.addEventListener('resize', onResize)

  // On DOM Content Load, set placeholder height to be equal to footer height
  updateHolderHeight()
  checkFooterHeight()

  // On window resize, update placeholder height to be equal to footer height
  function onResize() {
    updateHolderHeight()
    checkFooterHeight()
  }

  // Placeholder should always match footer height
  function updateHolderHeight() {
    placeholder.style.height = `${footer.offsetHeight}px`
  }

  function checkFooterHeight() {
    if (footer.offsetHeight > window.innerHeight) { // Check if footer is taller than window height
      window.addEventListener('scroll', onScroll) 
      footer.style.bottom = 'unset'
      footer.style.top = '0px'
    } else { // If footer height is not greater than window height, bottom is 0 for normal parllax 
      window.removeEventListener('scroll', onScroll)
      footer.style.top = 'unset'
      footer.style.bottom = '0px'
    }
  }

  function onScroll() {
    placeholderTop = Math.round(placeholder.getBoundingClientRect().top) 
    requestTick()
  }

  function requestTick() {
    if (!ticking) requestAnimationFrame(updateBasedOnScroll)
    ticking = true
  }

  function updateBasedOnScroll() {
    // Reset the tick so we can capture the next onScroll
    ticking = false

    // When main content disappears from view, start to move footer up 
    // in conjunction with placeholder top value (in relation to viewport)
    if (placeholderTop <= 0) {  
      footer.style.top = `${placeholderTop}px` // match footer top value with placeholder's top value
    }
  }
})

