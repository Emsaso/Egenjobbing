var ctr = document.getElementById("counter");
var btn = document.getElementById("toggle-button");
var intervalInit = 0;
var startTime = 0;
var currentTime = 0;
var totalTime = 0;
const zeroPad = (num) => String(num).padStart(2, '0')


function toggleTimer() {
    if (intervalInit == 0) {
        btn.innerHTML = "Stop";
        startTime = new Date().getTime();
        intervalInit = setInterval(startTimer, 100);
    } else {
        btn.innerHTML = "Start";
        stopTimer();
    }
}

function startTimer() {
    currentTime = new Date().getTime();;
    totalTime = currentTime - startTime;
    // let MM = totalTime % 1000;
    let ss = Math.floor(totalTime / 1000 % 60);
    let mm = Math.floor(totalTime / 1000 / 60 % 60);
    let hh = Math.floor(totalTime / 1000 / 60 / 60);
    ctr.innerHTML = `${zeroPad(hh)}:${zeroPad(mm)}:${zeroPad(ss)}`
}

function stopTimer() {

    clearInterval(intervalInit)
    intervalInit = 0;
}