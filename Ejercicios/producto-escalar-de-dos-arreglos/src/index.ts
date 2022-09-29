import "./styles.css";

// Cargue dos arreglos de dimensión N números
// (la cantidad es ingresada por el usuario)
// Calcule el producto escalar entre los dos arreglos.

//Se declara la Variable que contendra la longitud del arreglo.
const n: number = Number(prompt(`Ingrese Longitud:`));
//Declaramos 2 arreglos, asignamos su tipo y le damos la longitud que obtuvimos en la linea anterior.
const v1: number[] = new Array(n);
const v2: number[] = new Array(n);
let producto: number[] = new Array(n);
//Declaramos y asignamos tipo de la variable que usaremos en el ciclo for.
let i: number;
//Declaramos la variable que contendra el resultado final
let resultado: number = 0;

//Iniciamos ciclo for del arreglo v1, y obtenemos sus elementos por prompt.
for (i = 0; i < n; i++) {
  v1[i] = Number(
    prompt(`Ingrese los Numeros del arreglo v1.\n Numero ${i + 1} de ${n}.`)
  );
}

//Iniciamos ciclo for del arreglo v2, y obtenemos sus elementos por prompt.
for (i = 0; i < n; i++) {
  v2[i] = Number(
    prompt(`Ingrese los Numeros del arreglo v2.\n Numero ${i + 1} de ${n}.`)
  );
}
console.log(v1); //Imprimimos en consola los elementos de v1.
console.log(v2); //Imprimimos en consola los elementos de v2.

//Creamos una funcion para hacer la suma de la multiplicacion
//de los indices de ambos arreglos
//y lo imprimimos en consola.
function sumaNros() {
  for (i = 0; i < n; i++) {
    producto[i] = +v1[i] * v2[i];
    resultado += producto[i];
  }
  console.log(resultado);
}
//Llamamos a la funcion.
sumaNros();
