import "./styles.css";

// Realizar una página con un script que calcule el valor de la letra de un número de
// DNI (Documento nacional de indentidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// •	El número debe tener entre 7 y 8 digitos sin puntos
// •	Debemos calcular el resto de la división entera entre el número y el número 23. E.g: 31391317 mod 23 = 20
// •	Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// •	Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// •	Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

//Declaracion de variables que vamos a usar.
const dni: number = document.getElementById("dni");
const btnSend = document.getElementById("btnSend");
const result: string = document.getElementById("result");
const resultArray: string = document.getElementById("resultArray");
let modul: number;

//Declaracion de Arreglo que contendra las letras a asignar en el nuevo arreglo.
const num: string[] = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];

//Declaracion de nuevo array, que contendra las letras asignadas.
//El mismo sera de tamaño, asignado por el modulo obtenido, segun la division declarada.
const newArray: string[] = new Array(modul);

//Declaramos el parrafo para asignarle un texto mas adelante.
result.innerHTML;

//Agregamos un escuchador evento al boton, cuando hagamos "click".
btnSend.addEventListener("click", () => {
  //Obtenemos el modulo del numero de dni asignao y lo guardamos en la variable "modul".
  modul = dni.value % 23;
  //Imprimimos en pantalla el resultado obtenido.
  result.innerHTML = `The Result is: ${modul}.`;

  //Generamos un ciclo for, para asignar las letras al nuevo arreglo, segun la longitud del mismo.
  //Que estara dada por la longitud de valor de "modul".
  for (let i = 0; i < modul; i++) {
    //Asignamos cada elemento del indice correspondiente, al nuevo arreglo.
    newArray[i] = num[i];
  }
  //Imprimimos en pantalla los elementos del nuevo arreglo.
  resultArray.innerHTML = `The Result of the Array is: ${newArray}.`;
});
