var images = [];
images["Cauchin"] = "cerdo.png";
images["Pokacho"] = "pollo.png";
images["Tocinauro"] = "vaca.png";

class Pakiman {
  constructor(nombre, vida, ataque) {
    this.image = new Image();
    this.vida = vida;
    this.ataque = ataque;
    this.nombre = nombre;

    this.image.src = images[this.nombre];
  }

  hablar() {
    alert(this.nombre);
  }

  mostrar() {
    document.body.appendChild(this.image);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30)); //añade el valor a la ultima posicion del array
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var indices of coleccion) {
  //la variable of en vez de in me muestra todo el objeto
  // en vez de in que es el indice

  indices.mostrar();
}
