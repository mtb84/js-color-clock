'use strict';

// console log the current time on page load -

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(today, time);

document.querySelector('.clock-display').textContent = time;


