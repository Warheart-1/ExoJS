import Glide from '@glidejs/glide'

const glide = new Glide('.multi', {
    type: 'carousel',
    autoplay: 3500,
    perView: 3
  })

glide.mount()

