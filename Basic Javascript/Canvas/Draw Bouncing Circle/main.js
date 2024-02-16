var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var toggleButton = document.getElementById("toggleButton");
var performDrawRequest = 0;
var drawInterval = 1000 / 60;
var circleGoUp = false;
var circleGoRight = true;
var cXposition = 50;
var cYposition = 250;
var circleSize = 50;
var cStart = 0;
var cEnd = 2 * Math.PI;
var circleSpeed = 5;
ctx.strokeStyle = `#000000`;
ctx.fillStyle = `rgb(50,0,0)`;

function startDrawing() {
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

function increaseSpeed() {
    if (circleSpeed < 20) circleSpeed *= 1.05;
    if (circleSpeed > 20) circleSpeed = 20;
    addColorBasedOnPosition();
}

function addColorBasedOnPosition() {
    let red = 50;
    let grn = 0;
    let blu = 0;
    // red = Math.floor(255 * (cXposition / c.width))
    // grn = Math.floor(255 * (cYposition / c.height))
    // blu = Math.floor(255 * (((cXposition - cYposition) / 100 ) % 1))
    red = (255 * (circleSpeed / 20)) % 256
    console.log(red);
    ctx.fillStyle = `rgb(${red},${grn},${blu})`;
}

function drawCircle() {
    clearCanvas();
    ctx.beginPath();
    ctx.lineWidth = circleSize / 10;
    wallCollision();
    ctx.arc(cXposition + circleSize, cYposition + circleSize, circleSize, cStart, cEnd);
    ctx.fill();
    ctx.stroke();
}

function wallCollision() {

    if (cXposition > c.width - circleSize * 2) {
        circleGoRight = false;
        increaseSpeed();
    } else if (cXposition < 0) {
        circleGoRight = true;
        increaseSpeed();
    }

    if (cYposition > c.height - circleSize * 2) {
        circleGoUp = true;
        increaseSpeed();
    } else if (cYposition < 0) {
        circleGoUp = false;
        increaseSpeed();
    }

    if (circleGoRight) {
        cXposition += circleSpeed;
    } else if (!circleGoRight) {
        cXposition -= circleSpeed
    }

    if (!circleGoUp) {
        cYposition += circleSpeed;
    } else if (circleGoUp) {
        cYposition -= circleSpeed
    }
}