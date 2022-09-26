import "./styles.css";

// Crea una función que reciba 2 parámetros, precio e iva,
// y devuelva el precio con iva incluido. Si no recibe el iva,
// aplicará el 21 por ciento por defecto.

const precio = document.getElementById("precio");
const btnEnviar = document.getElementById("btnEnviar");
const result = document.getElementById("result");

result.innerHTML;

function ivaDefault() {
  const ivaDefaultResult: number = precio.value * 0.1;
  const precioDefaultTotal: number = precio.value - ivaDefaultResult;
  result.innerHTML = `El descuento sera de 10% ya que el monto no supera los $1000.<br>Total a Pagar $${precioDefaultTotal}`;
}

function ivaEspecial() {
  const ivaEspecialResult: number = precio.value * 0.21;
  const precioEspecialTotal: number = precio.value - ivaEspecialResult;
  result.innerHTML = `El descuento sera de 21% ya que superaste los $1000 en tu compra.<br>Total a Pagar $${precioEspecialTotal}`;
}

function precioNulo() {
  result.innerHTML = `Ha Ingresado un monto incorrecto.<br>Por favor, Verifique he intente nuevamente`;
}

btnEnviar.addEventListener("click", () => {
  if (precio.value >= 1000) {
    ivaEspecial(precio.value);
  } else if (precio.value < 1000 && precio.value > 0) {
    ivaDefault(precio.value);
  } else if (precio.value <= 0) {
    precioNulo(precio.value);
  }
});
