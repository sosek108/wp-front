/**
 * Created by sosek108 on 13.11.15.
 */

    //get elements
    var hours, minutes, seconds;
    hours = document.getElementById('hours');
    minutes = document.getElementById('minutes');
    seconds = document.getElementById('seconds');

    setInterval(function(){
        var data = timeLeft();
        hours.innerHTML = data.hours;
        minutes.innerHTML = data.minutes;
        seconds.innerHTML = data.seconds;
    }, 1000);


function timeLeft() {
    var curDate = new Date();
    var target = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+1);
    var count = Math.abs(target.getTime() - curDate.getTime());

    count = Math.floor(count / 1000); //seconds
    var seconds = count % 60;

    count = Math.floor(count / 60); //minutes
    var minutes = count % 60;

    var hours = Math.floor(count / 60);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}