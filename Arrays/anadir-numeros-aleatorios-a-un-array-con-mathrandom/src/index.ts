import "./styles.css";

// Llenar un array de 10 posiciones con números
// aleatorios entre 0 y 99
// Para obtener números aleatorios crear una función
// Azar, que se base en las funciones disponibles en el
// paquete Math:
// -Math.random() devuelve un nro al azar entre 0 y 1.

//Se declara, se asigna su tipo y se le asigna longitud al nuevo array.
const numAle: number = new Array(10);

//Se inicia el ciclo for.
for (let i = 0; i < 10; i++) {
  //Funcion Math.random: Nos muestra numeros aleatorios decimales entre el cero(incluido) y uno (no incluido).
  //Al multiplicar ese numero por 100, siempre nos dara numeros de dos cifras.
  //Funcion Math.round: redondea los numeros decimales al mas proximo.
  //Guardamos el valor dado en la constante "azar".
  const azar = Math.round(Math.random() * 100);
  //Vamos añadiendo el numero obtenido en el array en la primera posicion(numAle[0]).
  //El segundo numero en la segunda posicion(numAle[1]) y asi sucesivamente.
  numAle[i] = azar;
}
//Imprimimos en mensaje en consola.
console.log(
  `El arreglo contiene 10 Elementos. \nLos Mismo son los siguientes: \n${numAle}`
);
