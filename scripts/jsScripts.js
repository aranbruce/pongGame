// Variables

var canvas;
var canvasContext;
var ballX = 50;

// Stops script loading before page has finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawEverything();
}

function drawEverything() {
  console.log("called drawEverything");
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(225,210,200,200);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(canvas.width/2,200,50,25);
}
