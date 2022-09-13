import "./styles.css";

// Construya un algoritmo que sume todos los
// elementos de un arreglo de tamaño N
// La dimensión del arreglo es ingresada por el
// usuario.
// Los elementos (números) del arreglo son
// ingresados por el usuario.

//Declaramos la variable que nos pedira por "prompt" la longitud del array.
const longitud = Number(prompt("Ingrese Longitud de Arreglo:"));
//Declaramos un nuevo array y le añadimos la variable "longitud", que pedimos en la linea anterior.
const numeros = new Array(longitud);
//Declaramos la variable que usaremos para almacenar la suma de los elementos y le asignamos valor 0.
let sumaNumeros = 0;

//Iniciamos el ciclo for.
for (let i = 0; i < longitud; i++) {
  //Solicitamos los valores por prompt y los añadimos al array, comenzando en la posicion 0.
  numeros[i] = Number(
    prompt(`Ingrese numero deseado. \nNumero ${i} de ${longitud}`)
  );
  //Sumamos los valores dados en cada iteracion y lo almacenamos en la variable "sumaNumeros".
  sumaNumeros += numeros[i];
}
//Imprimimos en consola distintos mensajes.
console.log(`El arreglo tiene una longitud de ${longitud} elementos.`);
console.log(`El arregle contiene los siguientes elementos: ${numeros}`);
console.log(`La Suma Total de los Elementos del Arreglo es ${sumaNumeros}`);
