class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
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

    for (var e of entregado) {
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
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
