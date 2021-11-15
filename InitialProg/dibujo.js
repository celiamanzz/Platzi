var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;

var i = 0;

while(i < lineas){
  dibujarlinea("pink", 0, 0, 10, 300);
  l = l+1;
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
