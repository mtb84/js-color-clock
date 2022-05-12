(function() {


'use strict';

let isHovering = false;

document.querySelector('.clock').addEventListener('mouseover', () => isHovering = true);
document.querySelector('.clock').addEventListener('mouseout', () => isHovering = false);


setInterval(function () {
    const now = new Date();

    let hours = now.getHours();

    if(hours < 10) {
        hours = '0' + hours;
    } else {
        hours = '' + hours;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0` + minutes;
    } else {
        minutes = `` + minutes;
    }

    let seconds = now.getSeconds();
    if(seconds < 10) {
        seconds = `0` + seconds;
    } else {
        seconds = `` + seconds;
    }
    const time = hours + `:` + minutes + `:` + seconds;
    document.querySelector('.clock-display').textContent = time;
    
    document.querySelector(`.clock-progress-bar`).style.width = 14 * seconds / 60 + `rem`;

    let hexSeconds = now.getSeconds().toString(16);
    let hexMinutes = now.getMinutes().toString(16);
    let hexHours = now.getHours().toString(16);

    if(hexSeconds.length === 1) {
        hexSeconds += hexSeconds;
    }

    if(hexMinutes.length === 1) {
        hexMinutes += hexMinutes;
    }

    if(hexHours.length === 1) {
        hexHours += hexHours;
    }

    const hexCode = '#' + hexHours + hexMinutes + hexSeconds;

    document.querySelector(`.clock`).style.background = hexCode;

    if(isHovering) {
        const time = hexHours + `:` + hexMinutes + `:` + hexSeconds;
        document.querySelector('.clock-display').textContent = time;
    } else {
        const time = hours + `:` + minutes + `:` + seconds;
        document.querySelector('.clock-display').textContent = time;
    }


}, 1000);

})();