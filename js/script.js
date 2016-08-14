var painted;
var content;
var winningCombinations;
var theCanvas;
var c, cxt;
var flag = true;
var turn = 0;
var squaresFilled = 0;
window.onload = function() {
        painted = new Array();
        content = new Array();
        winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [0, 4, 8],
            [2, 5, 8],
            [1, 4, 7],
            [2, 4, 6]
        ]; //All possible combinations for a 3x3 tic-tac-toe
        for (var l = 0; l <= 8; l++) {
            painted[l] = false;
            content[l] = '';
        }
    }
    //Function when a canvas clicked will draw on canvas  and check the winning combinations

function canvasClicked(canvasNumber) {
    if (flag) {
        theCanvas = "canvas" + canvasNumber; //Getting the canvas id number
        c = document.getElementById(theCanvas);
        cxt = c.getContext("2d"); // context to draw in the x and y coordinates
        if (painted[canvasNumber - 1] == false) { //painted[canvasNumber-1] == false means that canvas is empty and we can start drawing
            if (turn % 2 == 0) {
                // Drawing X using stroke
                cxt.beginPath();
                cxt.moveTo(10, 10);
                cxt.lineTo(40, 40);
                cxt.moveTo(40, 10);
                cxt.lineTo(10, 40);
                cxt.lineWidth = 3;
                cxt.strokeStyle = "blue";
                cxt.stroke();
                cxt.closePath();
                content[canvasNumber - 1] = 'X';
            } else {
                // Drawing O
                cxt.beginPath();
                cxt.arc(25, 25, 20, 0, Math.PI * 2, true);
                cxt.lineWidth = 3;
                cxt.strokeStyle = "orange";
                cxt.stroke();
                cxt.closePath();
                content[canvasNumber - 1] = 'O';
            }
            turn++; //Counting the turns
            painted[canvasNumber - 1] = true; // Checking if the canvas is filled or not
            squaresFilled++;
            checkForWinner(content[canvasNumber - 1]); // Function to check the winning combinations
        }
    } else {
        document.getElementById("danger").innerHTML = ("GAME OVER!");
    }
}

function checkForWinner(symbol) {
        var bool = false;
        for (var a = 0; a < winningCombinations.length; a++) {
            if (content[winningCombinations[a][0]] == symbol && content[
                winningCombinations[a][1]] == symbol && content[
                winningCombinations[a][2]] == symbol) {
                bool = true; // if condition satisfies bool is set to true
            }
        }
        if (bool == true) {
            document.getElementById("success").innerHTML = symbol + " Won!";
            flag = false;
        } else {
            if (squaresFilled == 9) {
                document.getElementById("info").innerHTML = ("It's a draw!");
            }
        }
    }
    // To reload the window onClick()

function playAgain() {
    location.reload(true);
}