//const originalPrice = 100;
//const discount = 15;

//const discountedPrice = (originalPrice * (100 - discount)) / 100;

function calcularPrecio(precio, descuento) {
  const porcentajeDesc = 100 - descuento;
  const precioConDesc = (precio * porcentajeDesc) / 100;

  return precioConDesc;
}

function buttonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  const finalPrice = calcularPrecio(priceValue, discountValue);

  const result = document.getElementById("Result");
  result.innerText = "The final price is " + finalPrice + " EUR";
}
