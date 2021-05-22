'use strict';

const open = document.querySelector('.open');
const closes = document.querySelector('.close');
const nav = document.querySelector('nav');
const changeImg = document.querySelectorAll('.sub__cards img');

let img = ['deep-earth','night-arcade','soccer-team','grid',
          'from-above','pocket-borealis','curiosity','fisheye'];

console.log(changeImg);

if(window.matchMedia('(max-width: 769px)').matches) {
  changeImg.forEach((one,index) => {
    one.src = `../images/mobile/image-${img[index]}.jpg`
  })
}




open.addEventListener('click',function() {
  nav.style.left = 0;
})

closes.addEventListener('click',function() {
  nav.style.left = '100%';
})