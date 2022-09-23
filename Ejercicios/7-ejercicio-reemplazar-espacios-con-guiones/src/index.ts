import "./styles.css";

const palabra: string = prompt("ingrese palabra, por favor:");
let variable: string = "";
let i;

for (i = 0; i < palabra.length; i++) {
  variable += palabra[i] + "-";
}
console.log(variable);
