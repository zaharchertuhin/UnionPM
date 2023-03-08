// import { drawLevel3 } from "/js/level3";
//
// drawLevel3();


document.getElementById('nextLevelBtn').addEventListener('click', function () {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
  drawLevel2();
}, false);

let container = document.getElementById('js-container');
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

function newPos() {
  paddleX = slider.value - 25;
}

function drawLevel2() {
  document.querySelector('#gameWin').style.display = 'none';
  // document.querySelector('#pos').style.display = 'block';
  let oldCanv = document.getElementById('myCanvas');
  container.removeChild(oldCanv);
  let canv = document.createElement('canvas');
  canv.id = 'myCanvas';
  canv.width = 380;
  canv.height = 550;
  container.appendChild(canv);
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

export {drawLevel2};

