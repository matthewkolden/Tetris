// Declare Variables
const rows = 20;
const columns = 10;

const scoreEl = document.getElementById("score");
const startBtnEl = document.getElementById("start-btn");

const gameBoardEl = document.getElementById("game-grid");
gameBoardEl.width = 400;
gameBoardEl.height = 800;

const ctx = gameBoardEl.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 40, 40);


// Functions

// Event Listeners
// startBtnEl.addEventListener("click", () => {
//     drawBlock(x, y)

// })
// ctx.fillRect(x, y, 40, 40);

// document.addEventListener("keydown", (key) => {
//     if(key.code == "KeyA" && x <= 400) {
//         x -= 40;
//     }
//     if(key.code == "KeyD" && x >= 0) {
//         x += 40;
//     }
//     if(key.code == "KeyS" && y <= 800) {
//         y -= 40;
//     }
    // if(key.code === "ArrowUp") {

    // }
//     ctx.clearRect(400, 800, 40, 40);
//     ctx.fillRect(x, y, 40, 40);
//     console.log(key.code)
// })