// import anime from 'animejs'

anime({
  targets: '#dual-left',
  translateX: '-1vw',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: 4,
  rotate: 360
})

anime({
  targets: '#dual-right',
  translateX: 20,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: 4,
  scale: 0,
  rotate: 360
})

anime({
  targets: 'svg path',
  fill: [
    {value: '#f88199'},
    {value: '#fdb134'},
    {value: '#afccdf'}
  ],
  direction: 'alternate'
})
