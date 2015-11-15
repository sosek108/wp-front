/**
 * Created by sosek108 on 14.11.15.
 */
var slider = document.getElementById('slider');
var current = 0;


//prepare buttons
var leftButton = document.createElement('div');
leftButton.setAttribute('id', 'left');
leftButton.onclick = turnLeft;
var rightButton = document.createElement('div');
rightButton.setAttribute('id', 'right');
rightButton.onclick = turnRight;

//prepare pagination
var pagination = document.createElement('div');
pagination.setAttribute('id', 'pagination');

pagination.innerHTML = '';

//append them
slider.appendChild(pagination);
slider.appendChild(leftButton);
slider.appendChild(rightButton);

//prepare screens
var screens = slider.getElementsByTagName('img');

pagination.offsetWidth = screens.length * 18;
//set positions
for (var i= 0; i < screens.length; i++) {
    screens[i].style.left = i * slider.offsetWidth;
    var page = document.createElement('div');
    if (i == current)
        page.setAttribute('class', i + ' active');
    else
        page.setAttribute('class', i);

    page.onclick = function() {
        goToSpecific(parseInt(this.getAttribute('class')));
    };
    pagination.appendChild(page);
}
//turn right
function turnRight() {
    if (current != screens.length-1) {
        goToSpecific(current+1);
    }
}
function turnLeft() {
    if (current != 0) {
        goToSpecific(current-1);
    }
}

function goToSpecific(number) {
    var toRotate = parseInt(number) - parseInt(current);
    if (toRotate) {
        for (var i= 0; i < screens.length; i++) {
            screens[i].style.left = (parseInt(screens[i].style.left) - toRotate * slider.offsetWidth);
        }
        document.getElementsByClassName(number)[0].classList.toggle('active');
        document.getElementsByClassName(current)[0].classList.toggle('active');
    }
    current = number;
}
var interval;

var start = function() {
    interval = setInterval(function() {
        var next = 0;
        if (current != screens.length-1) {
            next = current + 1;
        }
        goToSpecific(next);
    }, 2000);
};
start();

slider.onmouseover = function() {
    clearInterval(interval);
};
slider.onmouseout = start;