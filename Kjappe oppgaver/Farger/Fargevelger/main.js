var squareItem = document.getElementsByClassName("square")[0];
var circleItem = document.getElementsByClassName("circle")[0];
var triangleItem = document.getElementsByClassName("triangle")[0];

function squareRandomColorChange() {
    let r = getRandomColor();
    let g = getRandomColor();
    let b = getRandomColor();
    squareItem.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function circleRandomColorChange() {
    let r = getRandomColor();
    let g = getRandomColor();
    let b = getRandomColor();
    circleItem.style.backgroundColor = `rgb(${r},${g},${b})`;

}
function triangleRandomColorChange() {
    let r = getRandomColor();
    let g = getRandomColor();
    let b = getRandomColor();
    triangleItem.style.borderBottom = `200px solid rgb(${r},${g},${b})`;

}
function everythingRandomColorChange() {
    let r = getRandomColor();
    let g = getRandomColor();
    let b = getRandomColor();
    squareItem.style.backgroundColor = `rgb(${r},${g},${b})`;
    circleItem.style.backgroundColor = `rgb(${r},${g},${b})`;
    triangleItem.style.borderBottom = `200px solid rgb(${r},${g},${b})`;
}

function getRandomColor() {
    let rnd = Math.floor(Math.random() * 256);
    return rnd;
}

var red1 = document.getElementById("red-sel1");
var green1 = document.getElementById("grn-sel1");
var blue1 = document.getElementById("blu-sel1");
var red2 = document.getElementById("red-sel2");
var green2 = document.getElementById("grn-sel2");
var blue2 = document.getElementById("blu-sel2");

function getExampleColor1() {
    let btn = document.getElementById("select-color-button");
    btn.style.backgroundColor = `rgb(${red1.value},${green1.value},${blue1.value})`
    btn.style.color = `rgb(${(parseInt(red1.value) + 128) % 256},${(parseInt(green1.value) + 128) % 256},${(parseInt(blue1.value) + 128) % 256})`
    red2.value = red1.value;
    green2.value = green1.value;
    blue2.value = blue1.value;
}
function getExampleColor2() {
    let btn = document.getElementById("select-color-button");
    btn.style.backgroundColor = `rgb(${red2.value},${green2.value},${blue2.value})`
    btn.style.color = `rgb(${(parseInt(red2.value) + 128) % 256},${(parseInt(green2.value) + 128) % 256},${(parseInt(blue2.value) + 128) % 256})`
    red1.value = red2.value;
    green1.value = green2.value;
    blue1.value = blue2.value;
}


function everythingSelectedColorChange() {
    squareItem.style.backgroundColor = `rgb(${red1.value},${green1.value},${blue1.value})`;
    circleItem.style.backgroundColor = `rgb(${red1.value},${green1.value},${blue1.value})`;
    triangleItem.style.borderBottom = `200px solid rgb(${red1.value},${green1.value},${blue1.value})`;
}