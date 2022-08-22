import "./styles.css";

let total: number = 0;
let promedio: number = 0;
let nota: number = 0;
let contador: number = 0;

for (contador = 0; contador < 10; contador++) {
  nota = Number(prompt("ingrese la nota: "));
  total += nota;
}
promedio = total / 10;
console.log("el promedio " + promedio);