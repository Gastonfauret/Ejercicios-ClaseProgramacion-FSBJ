import "./styles.css";

/*Cree un arreglo con una longitud deseada.
Llene el arreglo con numero al azar usando el metodo Math.random 
y Math.floor para convertirlos en numeros enteros. 
Intente el mismo usando 3 diferentes maneras:
Ciclo for, Ciclo While y Metodo Recursivo */

//Se crea un nuevo arreglo, se le designa su tipo y se le asigna su longitud.
const array: number[] = new Array(5);
//Se declara la variable que usaremos para iterar en cada metodo.
let i: number;

//Ciclo For:

//Ciclo for que llenara el arreglo con numeros al azar.
//Se Definen los parametros del ciclo.
for (i = 0; i < array.length; i++) {
  // Estas funciones crean nros aleatorios(Math.random) y redondea hacia abajo (Math.floor), para obtener un nro entero.
  array[i] = Math.floor(Math.random() * 10);
}
//Se imprime en consola el resultado final.
console.log(`Array con For: ${array}`);

//Ciclo While:

//Ciclo while que llenara el arreglo con numeros al azar.
//Se define el corte del ciclo.
while (i < array.length) {
  // Estas funciones crean nros aleatorios(Math.random) y redondea hacia abajo (Math.floor), para obtener un nro entero.
  array[i] = Math.floor(Math.random() * 10);
  //En cada iteracion, se le suma un valor a i.
  i++;
}
//Se imprime en consola el resultado final.
console.log(`Array con While: ${array}`);

//Metodo Recursivo:

//Se declara la funcion, que asignara los numeros aleatorios al array.
//Pasamos un parametro y asignamos su tipo
function arrayRecursivo(i: number) {
  //Asignamos el caso base que cortara el ciclo.
  if (i <= array.length) return array;
  //Mientras no se cumpla lo de arriba, se asignara un valor aleatorio a cada indice del array.
  else {
    array[i] = Math.floor(Math.random() * 10);
    //El llamado a si mismo de la funcion
    //con parametro que sumara un valor a i, para lograr la iteracion.
    arrayRecursivo(i++);
  }
}
//Se imprime en consola el resultado final.
console.log(`Array con metodo recursivo: ${array}`);
