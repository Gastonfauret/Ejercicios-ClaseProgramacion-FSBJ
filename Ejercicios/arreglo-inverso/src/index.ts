import "./styles.css";

// Almacene en un arreglo de tamaño N los números ingresados
// por el usuario.
// La dimensión N también es ingresada por el usuario.
// Muestre los números del arreglo pero del último al primero.

//Declaramos la constante, asignamos su tipo y por prompt pedimos al usuario el valor de la misma.
const longitud: number = Number(prompt("Ingrese Longitud del Arreglo:"));
//Declaramos el arreglo, asigamos su tipo y contendra la longitud elegida por prompt.
const arreglo: number[] = new Array(longitud);
//Declaramos el arreglo que contendra el arreglo invertido, asignamos su tipo y su longitud.
let arregloInverso: number[] = new Array(longitud);
//Declaramos las variables que haran de iteradores de los ciclos for, y asigamos su tipo.
let i: number;
let j: number = 0;

//Iniciamos el ciclo for que asignara los valores, pedidos por prompt, al arreglo original.
for (i = 0; i < longitud; i++) {
  arreglo[i] = Number(
    prompt(
      `Ingresos los Numeros que contendra el Arreglo:\n Numero ${
        i + 1
      } de ${longitud}`
    )
  );
}

//Iniciamos el ciclo for que asignara los valores, pedidos por prompt, inviertiendo los indices de los valores.
for (i = longitud - 1; i >= 0; i--) {
  arregloInverso[j] = arreglo[i];
  j++;
}

//Imprimimos en consola los arreglos obtenidos.
console.log(arreglo);
console.log(arregloInverso);
