'use strict';

function modal() {
  //вызываем поп ап
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    btn = document.querySelectorAll('.description-btn');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

  });

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }
  //первая попытка
  // for (let i in btn){
  //   btn[i].addEventListener('click',  () => {
  //     overlay.style.display = 'block';
  //     this.classList.add('more-splash');
  //     document.body.style.overflow = 'hidden';
  //   });
  // }

  //2я попытка
  // for (let i of btn) {
  //   i.addEventListener('ckick', () => {
  //     console.log('done');
  //   });

  // }
}
module.exports = modal;