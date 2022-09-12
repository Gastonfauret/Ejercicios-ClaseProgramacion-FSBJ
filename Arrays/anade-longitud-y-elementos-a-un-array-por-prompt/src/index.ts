import "./styles.css";

// Construya un algoritmo que tenga un arreglo
// de dimensión deseada por el usuario y llénelo
// con los nombres que el usuario desee
// Crear un arreglo de las posiciones que desee
// el usuario y llenarlo con nombres de personas.

const longArray: number = Number(prompt("Ingrese longitud de Arreglo:"));
const nombres: string[] = new Array(longArray);

for (let i = 0; i < longArray; i++) {
  nombres[i] = prompt(`Ingrese el nombre que quiere poner en el lugar ${i}:`);
}
for (let indice = 0; indice < longArray; indice++) {}
console.log(nombres);
