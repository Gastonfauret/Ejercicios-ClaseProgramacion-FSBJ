import "./styles.css";

//Consigna:
// Sumar los elementos de cada una de las posiciones
// de dos vectores y guardar el resultado en otro vector.
// El arreglo tiene dimensión 6 y los números de los dos
// vectores los carga el usuario.

//Declaracion de constantes y arrays.
const arreglo1: number[] = new Array(6);
const i: number = 0;
const arreglo2: number[] = new Array(6);
const j: number = 0;
const arreglo3: number[] = new Array(6);
const a: number = 0;

//Ciclo for que pide valores por prompt y los guarda por indice en el " arreglo1".
for (i = 0; i < arreglo1.length; i++) {
  arreglo1[i] = Number(
    prompt(`Ingrese 6 Numeros para el Arreglo nro 1.\nNumero ${i + 1} de 6`)
  );
}

//Ciclo for que pide valores por prompt y los guarda por indice en el " arreglo2".
for (let j = 0; j < arreglo2.length; j++) {
  arreglo2[j] = Number(
    prompt(`Ingrese 6 Numeros para el Arreglo nro 2.\nNumero ${j + 1} de 6`)
  );
}

//Metodo (funcion) que suma los valores de los indices de los arreglos anteriores y lo almacena en un nuevo arreglo (arreglo3).
function sumaIndices() {
  for (let a = 0; a < arreglo3.length; a++) {
    arreglo3[a] = arreglo1[a] + arreglo2[a];
  }
  //Imprime en consola los valores de los 3 arreglos.
  console.log(arreglo1);
  console.log(arreglo2);
  console.log(arreglo3);
}

//Llamada de la funcion.
sumaIndices();
