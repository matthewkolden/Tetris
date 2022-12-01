// Declare Variables

//  Board Variables
const rows = 20;
const columns = 10;
const board = [];

//  DOM Variables
const scoreEl = document.getElementById("score");
const startBtnEl = document.getElementById("start-btn");
const gameBoardEl = document.getElementById("game-grid");

gameBoardEl.width = 400;
gameBoardEl.height = 800;
const ctx = gameBoardEl.getContext("2d");

//  Tetromino Variables
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
const shapes = {
    I: [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    J: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    L: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],

    O: [
        [1, 1],
        [1, 1]
    ],

    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],

    T: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],

}

const blockSize = 40;
const empty = 0;

//  Game Variables
let startScore = 0;



// Functions

function createBlock (xVal, yVal, color) {
    ctx.fillStyle = color;
    ctx.fillRect(xVal * blockSize, yVal * blockSize, blockSize, blockSize);
}

function falling(xVal, yVal) {
    setInterval(() => {
        ctx.clearRect(xVal * blockSize, yVal * blockSize, blockSize, blockSize);
        ctx.translate(0, blockSize);     
        createBlock(((columns/2) - 1), 0, colors[0]);
    }, 1000);
}

// Event Listeners

// Game starts when start button is clicked
startBtnEl.addEventListener("click", () => {
    // Tetromino is created, shape is determined in order
    createBlock(((columns/2) - 1), 0, colors[0]);
    // Tetromino starts falling
    falling(((columns/2) - 1), 0);
    // Tetromino stops when making contact
})

document.addEventListener("keydown", (key) => {
    if(key.code == "KeyA" && x <= 400) {
        x -= blockSize;
    }
    if(key.code == "KeyD" && x >= 0) {
        x += blockSize;
    }
    if(key.code == "KeyS" && y <= 800) {
        y -= blockSize;
    }
});

// startBtnEl.addEventListener("click", () => {
//     drawBlock(x, y)

// })
// ctx.fillRect(x, y, 40, 40);


//     if(key.code === "ArrowUp") {

//     }
//     ctx.clearRect(400, 800, 40, 40);
//     ctx.fillRect(x, y, 40, 40);
//     console.log(key.code)
// })

