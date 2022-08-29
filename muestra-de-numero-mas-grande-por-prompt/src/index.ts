import "./styles.css";

let num: number = Number(prompt("Ingrese un Numero: "));
let numMax: number = num;
while (num !== 0) {
  if (num > numMax) {
    numMax = num;
  }
  num = Number(prompt("Ingrese un Numero: "));
}
console.log(`El numero maximo de la secuencia es: ${numMax}`);
