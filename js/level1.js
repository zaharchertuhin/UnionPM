let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let brickCount = 3;
let brickWidth = 50;
let brickHeight = 15;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let score = 0;

let bricks = [];
for (let i = 0; i < brickCount; i++) {
  bricks[i] = {x: 0, y: 0, status: 1};

}

let coords = [{x: 100, y: 200,}, {x: 200, y: 100,}, {x: 150, y: 150,}];

function win() {
  alert("YOU WIN, CONGRATS!");
  drawLevel2();
  score = 0;
  console.log("Win")
}

canvas.addEventListener('click', function(event) {
  x = event.pageX - canvas.offsetLeft;
  y = event.pageY - canvas.offsetTop;
  for (let c = 0; c < brickCount; c++) {

    let element = bricks[c];

    if (y > element.y  && y < element.y + brickHeight
      && x > element.x  && x < element.x + brickWidth) {
      console.log("Brick clicked "+ "x: " + element.x+ " : y " + element.y)
      score++;
      element.status = 0;
      if(score === bricks.length){
        win();
      }
    }
  }

}, false);

function drawBricks1() {
  for (let c = 0; c < brickCount; c++) {
    if (bricks[c].status === 1) {
      let brickX = coords[c].x + brickOffsetLeft;
      let brickY = coords[c].y + brickOffsetTop;
      bricks[c].x = brickX;
      bricks[c].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks1();
  drawScore();
  requestAnimationFrame(draw);
}

draw();
