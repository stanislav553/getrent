gsap.to('.offer__title-line, .sun, .lightnings', {
  rotate: 0,
  duration: 2
})

gsap.to('.lightnings', {
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

const tl = gsap.timeline()
tl.to('.choice__bottom', {x: '-100%'}, {x: 0})
tl.to('.choice__top', {x: '-100%'}, {x: 0})

ScrollTrigger.create({
  animation: tl,
  trigger: '.choice__content',
  start: 'top top',
  end: 'bottom',
  scrub: 1,
  pin: true
})

const ts = gsap.timeline()
ts.to('.condition__bottom', {x: '-200%'}, {x: 0})
ts.to('.condition__center', {x: '-200%'}, {x: 0})
ts.to('.condition__top', {x: '-300%'}, {x: 0})

ScrollTrigger.create({
  animation: ts,
  trigger: '.condition__content',
  start: 'top top',
  end: 'bottom',
  scrub: 1,
  pin: true
})
