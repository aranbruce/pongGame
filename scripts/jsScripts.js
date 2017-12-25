// Variables

var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
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
    ballY += ballSpeedY;

    // ball bounces off left side of canvas
    if(ballX - ballRadius < 0) {
      ballSpeedX = - ballSpeedX;
    }

    // ball bounces off right side of canvas
    if(ballX + ballRadius > canvas.width) {
      ballSpeedX = - ballSpeedX;
    }

    // ball bounces off top of canvas
    if(ballY - ballRadius < 0) {
      ballSpeedY = - ballSpeedY;
    }

    // ball bounces off bottom of canvas
    if(ballY + ballRadius > canvas.height) {
      ballSpeedY = - ballSpeedY;
    }
}

function drawEverything() {
  // black background
  colorRect(0,0,canvas.width,canvas.height,'black');

  // left padel
  colorRect(0,210,10,100,'white');

  // red ball
  colorCircle(ballX, ballY, 10, 'white')

}

// draw and color a circle
function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

// draw and color a rectangle
function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY,width,height);
}
