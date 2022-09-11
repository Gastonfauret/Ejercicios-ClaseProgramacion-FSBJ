import "./styles.css";

//Este Programa lo que hace es Imprimir en consola numeros del 1 al 30, las
//veces del valor del propia numero. Si es uno imprime: 1.
// Si es dos, imprime: 22. Si es tres, imprime: 333. Y asi sucesivamente.

//Inicializamos las variables, sin tipo ni valor.
let i;
let num;
let numTotal;

// Se declara el ciclo for:
//i arranca en 1,
//se detiene cuando i sea igual o menos a 30,
//y i va creciendo en uno.
for (i = 1; i <= 30; i++) {
  // Covertimos a i en un string.
  num = String(i);
  // La funcion repeat repite un string las veces que le indiques.
  //En este caso, el valor de i que va a ir incrementando en 1 cada iteracion.
  numTotal = num.repeat(i);
  // En cada vuelta imprime el valor de i(de uno en uno), repetido por el mismo numero.
  console.log(numTotal);
}
