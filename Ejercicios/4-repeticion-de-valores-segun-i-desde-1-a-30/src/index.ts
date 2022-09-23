import "./styles.css";

// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666

//Se declaran las variables a usar.
let i: number;
let num: string;

//Se inicia el ciclo for que iterara los valores hasta 30.
for (i = 1; i <= 30; i++) {
  //La funcion "repeat", duplica y concatena un string segun el valor que le demos.
  //En este caso el valor de i.
  num = String(i).repeat(i);
  //Se imprime en consola el resultado obtenido.
  console.log(num);
}
