window.onload = iniciar;

function iniciar(){
}
function calculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.querySelector('input[name="operator"]:checked').value;
  let result;

  if (operator === "Sumar") {
    result = num1 + num2;
  } else if (operator === "Restar") {
    result = num1 - num2;
  } else if (operator === "Multiplicar") {
    result = num1 * num2;
  } else if (operator === "Dividir") {
    result = num1 / num2;
  }

  alert("El resultado es: " + result);  // realizado 

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
