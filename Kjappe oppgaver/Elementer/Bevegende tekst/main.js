var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var performMoveRequest = 0;
var moveInterval = 1000 / 60;
var canvXposition = 0;
var canvYposition = 50;
var circleGoRight = true;
var textSpeed = 5;
var fontSize = 50;
ctx.font = fontSize + "px Arial";

performMoveRequest = setInterval(moveText, moveInterval);

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}
function moveText() {
    clearCanvas();
    ctx.beginPath();
    wallCollision();
    ctx.fillText("Emil", canvXposition, canvYposition);
    ctx.fill();
    ctx.stroke();
}
function wallCollision() {
    console.log(canvXposition, c.width);
    if (canvXposition >= c.width - (fontSize * 2)) {
        circleGoRight = false;
    } else if (canvXposition <= 0) {
        circleGoRight = true;
    }
    if (circleGoRight) {
        canvXposition += textSpeed
    } else if (!circleGoRight) {
        canvXposition -= textSpeed
    }
}