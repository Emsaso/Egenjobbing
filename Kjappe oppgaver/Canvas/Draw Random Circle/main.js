var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var toggleButton = document.getElementById("toggleButton");
var performDrawRequest = 0;
var drawInterval = 200;

function drawCircle() {
    clearCanvas();
    ctx.beginPath();
    let circleSize = 50;
    let cHeight = getRandomNumber(1080 - circleSize * 2) + circleSize;
    let cWidth = getRandomNumber(1920 - circleSize * 2) + circleSize;
    let cStart = 0;
    let cEnd = 2 * Math.PI;
    ctx.lineWidth = circleSize / 10;
    ctx.arc(cWidth, cHeight, circleSize, cStart, cEnd);
    ctx.fill();
    ctx.stroke();
}

function startDrawing() {
    ctx.strokeStyle = `#${getRandomNumber(255)}${getRandomNumber(255)}${getRandomNumber(255)}`;
    ctx.fillStyle = `#${getRandomNumber(255)}${getRandomNumber(255)}${getRandomNumber(255)}`;

    if (performDrawRequest == 0) {
        toggleButton.innerHTML = "Stop";
        performDrawRequest = setInterval(drawCircle, drawInterval);
    } else if (performDrawRequest != 0) {
        toggleButton.innerHTML = "Start";
        stopDrawing();
    }
}

function stopDrawing() {
    clearInterval(performDrawRequest)
    performDrawRequest = 0;
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function getRandomNumber(max) {
    let rnd = Math.floor(Math.random() * max)
    return rnd
}