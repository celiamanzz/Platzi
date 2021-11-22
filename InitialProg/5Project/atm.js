var images = [];
images["50"] = "50.jpg";
images["20"] = "20.jpg";
images["10"] = "10.jpg";
class Billete {
  constructor(v, c) {
    this.image = new Image();
    this.valor = v;
    this.cantidad = c;
    this.image.src = images[this.valor];
  }
}

function muestraFotoBillete(imagen) {
  f.innerHTML += "<img src=" + imagen.src + ">";

  //f.appendChild(imagen);
}

function entregarDinero() {
  var cash = document.getElementById("dinero");
  dinero = parseInt(cash.value); //ojo meterle el valor no la caja

  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - bi.valor * papeles;
    }
  }

  if (dinero > 0) {
    r.innerHTML = "Lo siento no me da el dinero";
  } else {
    console.log(entregado);
    // TODO: cambiar nombre a las varibles, hacer resize de las images
    for (var e of entregado) {
      for (var i = 0; i < e.cantidad; i++) {
        muestraFotoBillete(e.image);
      }
      f.innerHTML += "<br /><hr />";

      if (e.cantidad > 0) {
        r.innerHTML =
          r.innerHTML +
          e.cantidad +
          " billetes de " +
          e.valor +
          "EUR" +
          "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
var dinero;
var division = 0;
var papeles = 0;

caja.push(new Billete(50, 30));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 20));

var r = document.getElementById("resultado");
var f = document.getElementById("fotos");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
