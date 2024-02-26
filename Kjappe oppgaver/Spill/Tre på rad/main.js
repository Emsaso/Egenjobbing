let square = document.getElementsByClassName("square");
let playerOneTurn = true;
let multiplayerEnabled = false;

function resetBoard() {
    for (let i = 0; i < square.length; i++) {
        square[i].innerHTML = "";
    }
}

function startWithBot() {
    resetBoard();
    multiplayerEnabled = false;
}

function startWithTwo() {
    resetBoard();
    multiplayerEnabled = true;
}

function flipSquare(e) {
    if (playerOneTurn) {
        if (e.innerHTML == "") {
            e.innerHTML = "X";
            setTimeout(() => {
                checkVictory();
            }, 500);
            playerOneTurn = !playerOneTurn;
            if (!multiplayerEnabled) {
                setTimeout(() => {
                    flipSquare();
                }, 500);
            }
        }
    } else {
        if (!multiplayerEnabled) {
            let rnd;
            for (let i = 0; i < 9; i++) {
                rnd = Math.floor(Math.random() * i)
            }
            if (square[rnd].innerHTML == "") {
                square[rnd].innerHTML = "O";
                checkVictory();
                playerOneTurn = !playerOneTurn;
            } else {
                flipSquare();
            }
        } else {

            if (e.innerHTML == "") {
                e.innerHTML = "O";
                checkVictory();
                playerOneTurn = !playerOneTurn;
            }
        }
    }
}

function checkVictory() {
    let victories = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < victories.length; i++) {
        // console.log(victories[i]);
        if (square[victories[i][0]].innerHTML == square[victories[i][1]].innerHTML &&
            square[victories[i][1]].innerHTML == square[victories[i][2]].innerHTML &&
            square[victories[i][0]].innerHTML == "X") {
            alert("Player 1 wins");
            resetBoard();
        } else if (square[victories[i][0]].innerHTML == square[victories[i][1]].innerHTML &&
            square[victories[i][1]].innerHTML == square[victories[i][2]].innerHTML &&
            square[victories[i][0]].innerHTML == "O") {
            alert("Player 2 wins");
            resetBoard();
        }
    }
}