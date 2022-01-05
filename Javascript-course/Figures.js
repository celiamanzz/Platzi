console.group("Cuadrado");
const squareside = 5;
console.log("Each square side is: " + squareside + " cm");

const squareperimeter = 4 * squareside;
console.log("The square perimeter is: " + squareperimeter + " cm");

const squarearea = squareside * squareside;
console.log("The square area is: " + squarearea + " cm");
console.groupEnd();

function perimeterSquare(side) {
  return 4 * side;
}

function areaSquare(side) {
  return side * side;
}

function calculatePerimeterSquare() {
  var input = document.getElementById("InputSquare");
  var value = input.value;
  var perimeter = perimeterSquare(value);
  alert(perimeter);
}

function calculateAreaSquare() {
  var input = document.getElementById("InputSquare");
  var value = input.value;
  var area = areaSquare(value);
  alert(area);
}
