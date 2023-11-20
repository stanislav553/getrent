gsap.to('.offer__title-line, .offer__sun, .offer__lightnings', {
  rotate: 0,
  duration: 2
})

gsap.to('.offer__lightnings', {
  top: '-12%',
  duration: 2
})

gsap.to('.offer__lines', {
  rotate: 0,
  duration: 2
})

window.onscroll = function () {
  if (window.scrollY >= 200) {
    gsap.to('.offer__service-items', {
      opacity: 1,
      duration: 2
    })

    gsap.to('.offer__service-item', {
      duration: 2,
      backdropFilter: 'blur(12px)'
    })
  }
}
