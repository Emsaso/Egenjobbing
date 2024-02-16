var container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
var tbl = document.createElement("table");
container.appendChild(tbl);
var multiplier = document.createElement("input");
var multiplierOutput = document.createElement("p");
multiplier.value = 10;
multiplier.max = 30;
multiplier.min = 3;
multiplier.type = "range";
multiplier.oninput = function () {
    createTable();
}
multiplierOutput.innerHTML = multiplier.value + " * " + multiplier.value; 
container.appendChild(multiplier);
container.appendChild(multiplierOutput);
createTable();
function createTable() {
    tbl.innerHTML = "";
    tbl.style.fontSize = `${21 / multiplier.value}em`
    var headerRow = document.createElement("tr");
    tbl.appendChild(headerRow);
    multiplierOutput.innerHTML = multiplier.value + " * " + multiplier.value; 
    for (let rowindex = 0; rowindex <= multiplier.value; rowindex++) {
        var tHead = document.createElement("th");
        rowindex == 0 ? tHead.innerHTML = "" : tHead.innerHTML = rowindex;
        tHead.style.height = `${100 / multiplier.value}%`
        tHead.style.width = `${100 / multiplier.value}%`
        headerRow.appendChild(tHead);
        var paragraphRow = document.createElement("tr");
        tbl.appendChild(paragraphRow);
        for (let colindex = 0; colindex <= multiplier.value; colindex++) {
            if (rowindex != 0) {
                var tCol = document.createElement("td");
                colindex == 0 ? tCol.innerHTML = rowindex * 1 : tCol.innerHTML = rowindex * colindex;
                tCol.style.height = `${100 / multiplier.value}%`
                tCol.style.width = `${100 / multiplier.value}%`
                paragraphRow.appendChild(tCol);
            }
        }
    }
}