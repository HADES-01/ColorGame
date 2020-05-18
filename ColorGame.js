let numOfSquares = 6;
let colors = [];
let pickedColor;
const colorDisplay = document.getElementById("colorDisplay");
let squares = document.querySelectorAll(".square");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const easybtn = document.getElementById("easybtn");
const hardbtn = document.getElementById("hardbtn");
let modebtns = document.querySelectorAll(".mode");

init();

function init(){
    for(let i = 0; i < modebtns.length; i++){
        modebtns[i].addEventListener("click", function () {
            modebtns[0].classList.remove("selected");
            modebtns[1].classList.remove("selected");
            this.classList.add("selected");
            numOfSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        })
    }
        resetButton.addEventListener("click", reset);
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?"
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "WRONG";
            }
        });
    }
    reset();
}
function changeColors(color) {
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(x) {
    let arr = [];
    for(let i = 0; i < x; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}