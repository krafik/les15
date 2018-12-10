'use strict';

function form() {
  let message = {
    loadding: 'Загррузка...',
    soccess: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    formF = document.querySelector('#form'),
    input = form.getElementsByTagName('input'),
    statusMessege = document.createElement('div'),
    inputFormB = formF.getElementsByTagName('input');
    statusMessege.classList.add('status');
    

  input[0].addEventListener('keypress', (e) => {
    if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
      e.preventDefault();
    }
  });
  inputFormB[1].addEventListener('keypress', (e) => {
    if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
      e.preventDefault();
    }
  });

  function sendForm(a) {
    a.addEventListener('submit', function (event) {
      event.preventDefault();
      a.appendChild(statusMessege);
      let formData = new FormData(a);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urrlencoded');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              //
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              // 
              resolve();
            } else {
              // 
              reject();
            }
          };
          request.send(formData);
        });
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
        setTimeout(function(){
          statusMessege.innerHTML = '';
        }, 2000);
      }
      

      postData(formData)
        .then(() => statusMessege.innerHTML = message.loadding)
        .then(() => statusMessege.innerHTML = message.soccess)
        .catch(() => statusMessege.innerHTML = message.failure)
        .then(clearInput);
    });
  }
  sendForm(form);
  sendForm(formF);

}

module.exports = form;