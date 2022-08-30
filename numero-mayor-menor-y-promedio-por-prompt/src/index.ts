import "./styles.css";

let num: number; //Se declara la variable "num", sin asignarle valor.
let numMinimo: number = 0; //Se declara la variable "numMinimo" y se le asigna valor 0.
let numMaximo: number = 0; //Se declara la variable "numMaximo" y se le asigna valor 0.
let sumNumero: number = 0; //Se declara la variable "sumNumero" y se le asigna valor 0.
let contadorNum: number = 0; //Se declara la variable "contadorNum" y se le asigna valor 0.
let promedio: number; // //Se declara la variable "promedio", sin asignarle valor.

while (num !== 0) {
  // Se inicia el ciclo while: Mientras "num" sea distinto de 0, entonces:
  contadorNum++; // Cuenta la cantidad de numero ingresados por prompt.
  num = Number(prompt("Ingrese un Numero: ")); //Se pide el ingreso de un numero y se guarda en la variable "num".
  if (num > numMaximo) {
    //Condicional: Si "num" es mayor a "numMaximo", entonces:
    numMaximo = num; // Se le asigna su valor.
  }
  if (num < numMinimo) {
    //Condicional: Si "num" es menor a "numMinimo", entonces:
    numMinimo = num; // Se le asigna su valor.
  }
  sumNumero += num; // Se van sumando los "num" asignados por prompt y se guardan en la variable "sumNumero".
  promedio = sumNumero / contadorNum; // Se divide "sumNumero"(Suma de los valores de los numeros asignados por prompt con "contadorNum"(cantidad de numeros ingresados por prompt)).
}
console.log(`El numero Maximo ingresado es ${numMaximo}`); //Se muestra en consola el numero mayor.
console.log(`El numero Minimo ingresado es ${numMinimo}`); //Se muestra en consola el numero menor.
console.log(`El promedio de los Numeros ingresado es ${promedio}`); //Se muestra en consola el numero promedio.
