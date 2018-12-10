'use strict';
function timer(){
  let deadLine = '2018-12-12';

  function getTimeRemeining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), //разница между датами. кол-во миллисекун,
      s = Math.floor((t / 1000) % 60).toString(),
      m = Math.floor((t / 1000 / 60) % 60).toString(),
      // h = Math.floor((t / (1000 * 60 * 60)));
      h = Math.floor((t / 1000 / 60 / 60) % 24).toString();
    // d = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'h': h,
      'm': m,
      's': s,
      // 'd': d
    };

  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      // days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemeining(endtime);
      // days.textContent = t.d;
      // console.log(t.h);
      if (t.h.length < 2) {
        hours.textContent = '0' + t.h;
      } else {
        hours.textContent = t.h;
      }
      if (t.m.length < 2) {
        minutes.textContent = '0' + t.m;
      } else {
        minutes.textContent = t.m;
      }
      if (t.s.length < 2) {
        seconds.textContent = '0' + t.s;
      } else {
        seconds.textContent = t.s;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

      }
    }
  }
  setClock('timer', deadLine);
}

module.exports = timer;