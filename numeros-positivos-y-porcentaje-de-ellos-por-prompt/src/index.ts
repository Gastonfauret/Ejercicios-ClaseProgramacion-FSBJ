import "./styles.css";

let totalNums: number = 0; //Se declara la Variable "totalNumbs", se le asigna su tipo y su valor.
let positiveNums: number = 0; //Se declara la Variable "positiveNumbs", se le asigna su tipo y su valor.
let newNums: number = Number(prompt("Ingrese un numero: ")); //Se pide al usuario un numero por prompt y se guarda su valor en la variable "newNumbs".

while (newNums !== 0) {
  // Se declara el ciclo "while": Si newNums es distinto a 0, entonces:
  if (newNums > 0) {
    // Si newNumbs es mayor a cero, entonces:
    positiveNums++; // A positiveNumbs se le incrementa el valor en 1.
  }
  totalNums++; // A totalNumbs se le incrementa su valor en 1.
  newNums = Number(prompt("Ingrese un Numero: ")); // Se pide nuevamente que ingrese el valor, y vuelve a iterar.
}
const positiveNumbsPercent: number = (positiveNums * 100) / totalNums; // Se declara la constante positveNumbsPercente, se le asigna su tipo y su valor es igual al algoritmo para deteminar el porcentaje de numero positivos obtenidos.
console.log(
  `Positivos: ${positiveNums} / Porcentaje de Positivos: ${positiveNumbsPercent}` // Se imprime en consola el resultado.
);
