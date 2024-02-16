var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var toggleButton = document.getElementById("toggleButton");
ctx.moveTo(0, 0);
var performDrawRequest = 0;
var drawInterval = 100;
function drawLine() {
    ctx.lineTo(getRandomNumber(1920), getRandomNumber(1080));
    ctx.stroke();
}

function startDrawing() {
    if (performDrawRequest == 0) {
        toggleButton.innerHTML = "Stop";
        performDrawRequest = setInterval(drawLine, drawInterval);
    } else if (performDrawRequest != 0) {
        toggleButton.innerHTML = "Start";
        stopDrawing();
    }
}

function stopDrawing() {
    clearInterval(performDrawRequest)
    performDrawRequest = 0;
}

function getRandomNumber(num) {
    let rnd = Math.floor(Math.random() * num)
    return rnd
}