import "./styles.css"; //Archivo de enlace de las propiedades css.

let i; // Declaracion de la variable "i", la que nos iterara en el ciclo for.
let dado: string = "dado"; // Declaramos la variable "dado", asignamos tipo y valor (este ultimo debido a que despues cambiara).
let cantidadDados: number; // Declaracion de variable y asignacion de tipo.
let probabilidad: number = 0; // Declaracion de variable, asignacion de tipo y valor.

cantidadDados = Number(prompt("Ingrese Cantidad de dados:")); // Pedimos por prompt un numero y lo almacenamos en la variable "cantidadDados".

if (cantidadDados < 0) {
  // Declaramos una condicional: cuando cantidadDados sea menor a 0, entonces:
  console.log("Dato Ingresado Incorrecto. Intente Nuevamente"); // Imprime mensaje en consola.
} else {
  // Si cantidadDados es igual o mayor a cero, entonces:
  for (i = 1; i <= cantidadDados; i++) {
    // Iniciamos ciclo for: i comienza con valor 1, finaliza cuando "cantidadDados" sea igual o mayor a i y sumamos a i valor 1.
    probabilidad = 6 ** i; // Creamos el algoritmo: En cada iteracion 6 sera multiplicado la cantidad de veces por si mismo, que sea el valor de i.
  }
  if (cantidadDados === 1) {
    // Declaramos una condicional: cuando cantidadDados sea estrictamente igual a 1, entonces:
    dado; // La variable de tipo string "dado" mantendra su valor "dado".
  }
  if (cantidadDados > 1) {
    // Si cantidadDados es mayor a 1, entonces:
    dado = "dados"; // La variable de tipo string "dado", cambiara su valor a "dados" (Esto es por la interpolacion, que en consola se lea "dados" si la cantidad ingresada es mayor a 1).
  }

  console.log(
    `La Probabilidad de sacar un 6 con ${cantidadDados} ${dado} es de 1 en ${probabilidad} intentos`
  );
} // Imprime mensaje en consola.
