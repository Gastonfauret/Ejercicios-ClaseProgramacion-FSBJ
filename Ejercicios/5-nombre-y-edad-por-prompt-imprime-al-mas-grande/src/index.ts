import "./styles.css";

//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

//Se Declaran los arrays que se van a usar.
//Nombre de tipo string y longitud de 3 elementos.
//Edad de tipo number y longitud de 3 elementos.
let nombre: string[] = new Array(3);
let edad: number[] = new Array(3);

//Se inicia el ciclo for que asignara cada valor a su array.
for (let i = 0; i < 3; i++) {
  //Por prompt asignamos el primer valor en la posicion 0 del array "nombre".
  //E ira aumentando su posicion.
  nombre[i] = prompt(`Ingrese el nombre:\nNombre ${i + 1} de 3`);
  //Por prompt asignamos el primer valor en la posicion 0 del array "edad".
  //E ira aumentando su posicion.
  edad[i] = Number(prompt(`Ingrese la edad de ${nombre[i]}:`));
}
//Ciclo Condicional, que mide cual valor del arreglo "edad" es mayor.
//E imprime el resultado en consola.
if (edad[0] > edad[1] && edad[2]) {
  console.log(
    `${nombre[0]} es el Mayor de los 3.\nYa que tiene ${edad[0]} años.`
  );
} else if (edad[1] > edad[0] && edad[2]) {
  console.log(
    `${nombre[1]} es el Mayor de los 3.\nYa que tiene ${edad[1]} años.`
  );
} else if (edad[2] > edad[0] && edad[1]) {
  console.log(
    `${nombre[2]} es el Mayor de los 3.\nYa que tiene ${edad[2]} años.`
  );
}
