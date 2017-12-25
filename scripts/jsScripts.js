// Variables

var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;
var ballRadius = 10;

// Stops script loading before page has finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  // refresh rate
  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);
}

function moveEverything() {
    ballX += ballSpeedX;

    // ball bounces off left side of canvas
    if(ballX - ballRadius < 0) {
      ballSpeedX = - ballSpeedX;
    }

    // ball bounces off right side of canvas
    if(ballX + ballRadius > canvas.width) {
      ballSpeedX = - ballSpeedX;
    }
}

function drawEverything() {
  // black background
  colorRect(0,0,canvas.width,canvas.height,'black');

  // left padel
  colorRect(0,210,10,100,'white');

  // red ball
  canvasContext.fillStyle = 'red';
  canvasContext.beginPath();
  canvasContext.arc(ballX, 100, ballRadius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY,width,height);
}
