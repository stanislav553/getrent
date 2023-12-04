gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

gsap.from('.offer__text, .offer__links', {
  duration: 1,
  delay: 1,
  opacity: 0,
  delay: 1
})

gsap.from('.offer__title-line', {
  rotate: '-10deg',
  duration: 1,
  opacity: 0,
  delay: 1
})

gsap.from('.sun', {
  rotate: '60deg',
  duration: 1,
  opacity: 0,
  delay: 1
})

gsap.from('.lightnings', {
  rotate: '20deg',
  top: '-18%',
  duration: 1,
  opacity: 0,
  delay: 1
})

gsap.from('.offer__lines', {
  rotate: '-20deg',
  duration: 1,
  opacity: 0,
  delay: 1
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
//////////////////////////////////////////////////////////////////////////////////

if (window.screen.width > 1180) {
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
}

//////////////////////////////////////////////////////////////////////////////////

const tr = gsap.timeline()
tr.to('.location__section-four', {x: '-400%'}, {x: 0})
tr.to('.location__section-three', {x: '-400%'}, {x: 0})
tr.to('.location__section-two', {x: '-400%'}, {x: 0})
tr.to('.location__section-one', {x: '-400%'}, {x: 0})
tr.to('.location__main', {x: '-400%'}, {x: 0})

ScrollTrigger.create({
  animation: tr,
  trigger: '.locations__content',
  start: 'top top',
  end: 'bottom',
  scrub: 1,
  pin: true
})
//////////////////////////////////////////////////////////////////////////////////

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1
})
// ScrollTrigger.normalizeScroll(true)

const btmMenu = document.querySelector('.header__burger-btn')
const menuActive = document.querySelector('.header__menu-content')

const activeMenu = () => {
  menuActive.classList.toggle('menu__active')
  btmMenu.classList.toggle('header__burger-btn__active')
}

btmMenu.addEventListener('click', activeMenu)

//////////////////////////////////////////////////////////////////////////////////

gsap.to('.anim', {
  scrollTrigger: {
    trigger: '.about__content',
    start: 'top 90%',
    end: 'bottom 20%',
    scrub: true
  },
  opacity: 1,
  top: 0,
  duration: 2
})

gsap.to('.about__text', {
  scrollTrigger: {
    trigger: '.about__content',
    start: 'top 90%',
    end: 'bottom 20%',
    scrub: true
  },
  opacity: 1,
  top: 0,
  duration: 2
})

gsap.to('.about__bottom', {
  scrollTrigger: {
    trigger: '.about__content',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true
  },
  opacity: 1,
  top: 0,
  duration: 2
})

//////////////////////////////////////////////////////////////////////////////////
