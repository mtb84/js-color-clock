'use strict';


const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(today, time);

document.querySelector('.clock-display').textContent = time;

setTimeout(function () {
    location.reload();
}, 1000);

