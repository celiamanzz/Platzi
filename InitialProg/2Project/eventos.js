document.addEventListener("keyup", drawKeyboard); // pointer

var key = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWith = 3;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

function drawKeyboard(evento) {
  var color = "red";
  var movement = 10;

  switch (evento.keyCode) {
    case key.DOWN:
      dibujarLinea(color, x, y, x, y + movement, papel);
      y += movement;
      break;

    case key.UP:
      dibujarLinea(color, x, y, x, y - movement, papel);
      y -= movement;

      break;

    case key.RIGHT:
      dibujarLinea(color, x, y, x + movement, y, papel);
      x += movement;
      break;

    case key.LEFT:
      dibujarLinea(color, x, y, x - movement, y, papel);
      x -= movement;
      break;
  }
}
