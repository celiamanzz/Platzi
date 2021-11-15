var d = document.getElementById("dibujito");

var txt = document.getElementById("txt_box");
var but = document.getElementById("button");
but.addEventListener("click", dibujoPorClick ); //boton 

var lienzo = d.getContext("2d");

dibujarLinea("#AAF", 0, 0, 0, 300);
dibujarLinea("#AAF", 0, 300, 300, 300);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    // Importante! 
    //Toda variable declarada dentro de una funcion no se puede usar fuera de las llaves
    var value = txt.value; 
    parseInt(value);
    alert("No toques");

var lineas = value;
var space = d.width / value;
var l = 0;
var xi = 0;
var yi = space*l;
var yf = 300;
var xf = space*(l + 1);

//while(l < lineas){
//    dibujarLinea("grey", xi, yi, xf, yf);
 //   l ++;
//}

for (let l = 0; l < lineas; l++) {
    dibujarLinea("grey", xi, yi, xf, yf);
}
}
