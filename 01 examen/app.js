
function update() {
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  document.getElementById("aLabel").innerHTML = a;
  document.getElementById("bLabel").innerHTML = b;
  document.getElementById("cLabel").innerHTML = c;
  let discriminante = Math.pow(b, 2) - (4 * a * c);
  if (discriminante >= 0) {
    let resultado1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let resultado2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    document.getElementById("resultado1").innerHTML = resultado1.toFixed(2);
    document.getElementById("resultado2").innerHTML = resultado2.toFixed(2);
  } else {
    document.getElementById("resultado1").innerHTML = "No hay solucion real";
    document.getElementById("resultado2").innerHTML = "No hay solucion real";
  }
  document.getElementById("ecuacion").innerHTML = a + "x^2 + " + b + "x + " + c + " = 0";
}