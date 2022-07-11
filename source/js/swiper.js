import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const mainSlider = new Swiper('.main-slider', {
  speed: 500,
  effect: 'fade',
  pagination: {
      el: '.main-slider__pagination',
      clickable: true,
      renderBullet: function (index, className, text) {
          switch(index){
              case 0: text='DOGIE&nbsp;COIN';break;
              case 1: text='ПАДЕНИЕ';break;
              case 2: text='ВОЗВРАЩЕНИЕ';break;
            }
          return `<span class="${className}">${text}</span>`;
      },
  },
});
