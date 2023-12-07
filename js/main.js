gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

gsap.from('.offer__text, .offer__links', {
  duration: 1,
  delay: 1,
  opacity: 0
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

gsap.from('.vector__left, .vector__right, .rays', {
  rotate: '-20deg',
  duration: 1,
  opacity: 0,
  delay: 1
})

///////////////////////////////////

gsap.fromTo(
  '.about__top',
  {y: 700, opacity: 0},
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.about__content',
      start: '80 center',
      end: 'bottom 90%',
      toggleActions: 'play none none reverse'
    }
  }
)

gsap.fromTo(
  '.about__text',
  {y: 700, opacity: 0},
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.about__content',
      start: '300 center',
      toggleActions: 'play none none reverse'
    }
  }
)

gsap.fromTo(
  '.about__bottom',
  {y: 700, opacity: 0},
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.about__content',
      start: '500 center',
      toggleActions: 'play none none reverse'
    }
  }
)

///////////////////////////////////

gsap.fromTo(
  '.about__top',
  {opacity: 1},
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about__content',
      start: '600 center',
      end: '130% bottom',
      scrub: true
    }
  }
)

gsap.fromTo(
  '.about__text',
  {opacity: 1},
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about__content',
      start: '700 center',
      end: '140% bottom',
      scrub: true
    }
  }
)

gsap.fromTo(
  '.about__bottom',
  {opacity: 1},
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about__content',
      start: '850 center',
      end: '160% bottom',
      scrub: true
    }
  }
)
//////////////////////////////////

gsap.fromTo(
  '.choice__title-span',
  {opacity: 0},
  {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.choice__title-span',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.choice__title-span__lines',
  {rotate: '-45deg'},
  {
    rotate: '0deg',
    duration: 1,
    scrollTrigger: {
      trigger: '.choice__title-span',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.choice__title-span__crown',
  {rotate: '45deg'},
  {
    rotate: '0deg',
    duration: 1,
    scrollTrigger: {
      trigger: '.choice__title-span',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.choice__title-span__oval-top',
  {rotate: '15deg'},
  {
    rotate: '0deg',
    duration: 1,
    scrollTrigger: {
      trigger: '.choice__title-span',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.choice__title-span__oval-bottom',
  {rotate: '-15deg'},
  {
    rotate: '0deg',
    duration: 1,
    scrollTrigger: {
      trigger: '.choice__title-span',
      start: 'center center'
    }
  }
)
//////////////////////////////////

gsap.fromTo(
  '.condition__title',
  {opacity: 0},
  {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.condition__title',
      start: 'center center',
      markers: true
    }
  }
)

gsap.fromTo(
  '.condition__title-marks',
  {rotate: '35deg', y: '-50'},
  {
    rotate: 0,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.condition__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.condition__title-stripe',
  {rotate: '-25deg', x: '-100', y: '20'},
  {
    rotate: 0,
    x: 0,
    y: 10,
    duration: 1,
    scrollTrigger: {
      trigger: '.condition__title',
      start: 'center center'
    }
  }
)
//////////////////////////////////
gsap.fromTo(
  '.reviews__title-span__heart',
  {rotate: '-25deg', opacity: 0},
  {
    opacity: 1,
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.reviews__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.reviews__title-span__eye',
  {rotate: '-15deg', opacity: 0},
  {
    opacity: 1,
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.reviews__title',
      start: 'center center'
    }
  }
)
//////////////////////////////////
//locations
gsap.fromTo(
  '.location__title',
  {opacity: 0},
  {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.location__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.mountains',
  {rotate: '35deg'},
  {
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.location__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.line__places',
  {rotate: '-45deg'},
  {
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.location__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.photocard',
  {rotate: '35deg'},
  {
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.location__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.oval__places',
  {x: '50', y: '50'},
  {
    x: 0,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.location__title',
      start: 'center center'
    }
  }
)
//////////////////////////////////
//places
gsap.fromTo(
  '.places__inner',
  {opacity: 0},
  {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.places__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.places__img-heart',
  {rotate: '-90deg'},
  {
    rotate: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.places__title',
      start: 'center center'
    }
  }
)
gsap.fromTo(
  '.places__img-mountains',
  {rotate: '30deg'},
  {
    rotate: '-15deg',
    duration: 1,
    scrollTrigger: {
      trigger: '.places__title',
      start: 'center center'
    }
  }
)
gsap.fromTo(
  '.places__img-photocard',
  {rotate: '60deg', y: '-100'},
  {
    rotate: '-26deg',
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.places__title',
      start: 'center center'
    }
  }
)

gsap.fromTo(
  '.places__span-img',
  {rotate: '30deg', y: '50'},
  {
    rotate: 0,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.places__title',
      start: 'center center'
    }
  }
)

//////////////////////////////////
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
}

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 2
})

const btmMenu = document.querySelector('.header__burger-btn')
const menuActive = document.querySelector('.header__menu-content')

const activeMenu = () => {
  menuActive.classList.toggle('menu__active')
  btmMenu.classList.toggle('header__burger-btn__active')
}

btmMenu.addEventListener('click', activeMenu)
