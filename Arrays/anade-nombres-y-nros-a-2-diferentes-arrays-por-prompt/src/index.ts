import "./styles.css";

//Se declara el nombre, tipo y longitud de los nuevos arrays.
//El array "nombres" contendra 2 elementos.
const nombres: string[] = new Array(2);
//El array numeros contendra 3 elementos.
const numeros: number[] = new Array(3);

//Iniciamos un ciclo for.
//Lo que hara este ciclo es pedirnos un nombres e ira ubicandolos en los diferentes indices del array.
//El primer nombre sera ubicado en en el indice 0, ya que i vale 0 (nombres[i=0]).
//En su segunda iteracion, i valdra 1(nombres[i=1]), entonces ubicara el segundo nombre en la posicion 1.
//Y asi hasta que se corte el ciclo.
for (let i = 0; i < 2; i++) {
  nombres[i] = prompt("Ingrese Nombre deseado: ");
}

//Aca pasa lo mismo que en el ejemplo anterior.
//Nos pedira un numero y lo ubicara en las posiciones 0, 1 y 2 (Ya que detiene el ciclo en 3).
for (let i = 0; i < 3; i++) {
  numeros[i] = prompt("Ingrese Numero deseado: ");
}

//Imprimira un mensaje en consola, del array llamado "nombres", con su longitud y sus elementos.
console.log(
  `El Array llamado "nombres" contiene ${nombres.length} elementos: ${nombres}`
);

//Imprimira un mensaje en consola, del array llamado "numeros", con su longitud y sus elementos.
console.log(
  `El Array llamado "numeros" contiene ${numeros.length} elementos: ${numeros}`
);
