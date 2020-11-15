var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor==pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent = "Try Again";
            }
            }
        );
    }
}
setUpSquares();

function makeColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}