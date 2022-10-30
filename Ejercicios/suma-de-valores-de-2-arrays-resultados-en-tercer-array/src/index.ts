import "./styles.css";

// Hacer la suma de dos arreglos y dejarlo en otro arreglo
// La dimensión de los arreglos es solicitada al usuario
// Los dos arreglos son cargados al azar.

//Se declaran los 3 arreglos:
//El primero que contendra la longitud de todos los arreglos.
const array1: number[] = new Array(
  Number(prompt(`Ingrese la longitud de los Arrays`))
);
//El segundo arreglo, misma longitud.
const array2: number[] = new Array(array1.length);
//El tercero que contendra la suma de los elementos de los indices de los dos primeros arreglos.
const array3: number[] = new Array(array1.length);

//Declaramos la funcion, que hara la suma de los dos primeros arrays
//y devolvera el resultado en un tercer a-rray.
function arraySum(array1: number, array2: number, array3: number) {
  //Ciclo for que llenara los dos primeros arreglos con numero aleatorios.
  for (let i: number = 0; i < array1.length; i++) {
    //Valores aleatorios, ubicados por indice en el primer array.
    array1[i] = Math.floor(Math.random() * 10);
    //Valores aleatorios, ubicados por indice en el primer array.
    array2[i] = Math.floor(Math.random() * 10);
    //Suma de los valores de los indices de los arrays 1 y 2,
    //dan valor a los elementos del array nro 3, ubicados por indice.
    array3[i] = array1[i] + array2[i];
  }
  //Imprime Mensajes en consola.
  console.log(`Array nro 1: ${array1}`);
  console.log(`Array nro 2: ${array2}`);
  console.log(`Array nro 3: ${array3}`);
}
//Se llama a la funcion y se le pasa los valores de los parametros.
arraySum(array1, array2, array3);
