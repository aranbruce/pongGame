// Variables

var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
var ballRadius = 10;

var player1Score = 0;
var player2Score = 0;


var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x:mouseX,
    y:mouseY
  };
}


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

  //tracking mouse movement
  canvas.addEventListener('mousemove',
    function(evt) {
      var mousePos = calculateMousePos(evt);
      paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
    });
}

function computerMovement() {
  var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
  if(paddle2YCenter < ballY - (PADDLE_HEIGHT/4)) {
    paddle2Y += 8;
  }
  else if(paddle2YCenter > ballY + (PADDLE_HEIGHT/4)) {
    paddle2Y -=8;
  }
  else {
    paddle2Y += 0;
  }
}

// Reset the ball
function ballReset() {
  ballSpeedX = - ballSpeedX;
  ballX = (canvas.width + ballRadius)/2;
  ballY = (canvas.height + ballRaduys)/2;
}

function moveEverything() {
    computerMovement();
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // ball bounces off left side of canvas
    if(ballX - ballRadius < 0) {
      if(ballY > paddle1Y &&
        ballY < (paddle1Y + PADDLE_HEIGHT)) {
          ballSpeedX = - ballSpeedX
        }
          else {
            player2Score ++;
            ballReset();
        }
    }

    // ball bounces off right side of canvas
    if(ballX + ballRadius > canvas.width) {
      if(ballY > paddle2Y &&
        ballY < (paddle2Y + PADDLE_HEIGHT)) {
          ballSpeedX = - ballSpeedX
        }
          else {
            player1Score ++;
            ballReset();
        }
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

  // left paddle
  colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

  // right paddle
  colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

  // red ball
  colorCircle(ballX, ballY, 10, 'white')

  // Text for scores
  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, 600, 100);
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
