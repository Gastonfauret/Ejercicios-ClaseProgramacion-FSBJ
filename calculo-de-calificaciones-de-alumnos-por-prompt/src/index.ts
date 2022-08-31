import "./styles.css"; //Archivo de enlace de propiedades css.

let i; //Se declara variable que nos servira de "iterador".
let cantidadAlumnos: number = 2; //Se declara la variable "cantidadAlumno" que sera la cantidad de iteracion del ciclo for.
let alumno; //Se declara variable "alumno".
let notaFinal: number; //Se declara variable "notaFinal" y se le asigna su tipo.
let notaPractica: number; //Se declara variable "notaPractica" y se le asigna su tipo.
let notaProblema: number; //Se declara variable "notaProblema" y se le asigna su tipo.
let notaTeorica: number; //Se declara variable "notaTeorica" y se le asigna su tipo.

for (i = 1; i <= cantidadAlumnos; i++) { // Inicializamos el ciclo for: i comienza en 1, termina segun la cantidad que le asignemos a "cantidadAlumnos" y en cada iteracion se suma 1.
  alumno = prompt("Ingrese Nombre del Alumno:"); //Se pide un dato por prompt y se guarda en la variable "alumno".
  notaPractica = Number(prompt("Ingrese Nota de la parte Practica:")); //Se pide un segundo dato por prompt y se guarda en la variable "notaPractica".
  notaProblema = Number(prompt("Ingrese Nota de la parte de Problemas:")); //Se pide un tercer dato por prompt y se guarda en la variable "notaProblema".
  notaTeorica = Number(prompt("Ingrese Nota de la parte Teorica:")); //Se pide un tercer dato por prompt y se guarda en la variable "notaTeorica".
  if (notaPractica > 0 && // Teniendo datos, se declara una condicion: Si "notaPractica" es mayor a cero y
    notaPractica <= 10 && // "notaPractica" es menor o igual a 10 y
    notaProblema > 0 && // "notaProblema" es mayor a cero y
    notaProblema <= 10 && //"notaProblema" es menor o igual a 10 y
    notaTeorica > 0 && //"notaTeorica" es mayor a cero y
    notaTeorica <= 10 //"notaTeorica" es menor o igual a 10.
  ) {
    notaFinal = notaProblema * 2 + notaPractica * 10 + (100 * notaTeorica) / 40; // Se genera el algoritmo que nos dara el resultado final y lo almacenamos en la variable "notaFinal".

    console.log(`Alumno: ${alumno}`); // Mensaje en Consola.
    console.log(`Nota Parte Practica: ${notaPractica}`); // Mensaje en Consola.
    console.log(`Nota Parte de Problemas: ${notaProblema}`); // Mensaje en Consola.
    console.log(`Nota Parte Teorica: ${notaTeorica}`); // Mensaje en Consola.
    console.log(`La nota Final del Alumno es: ${notaFinal}`); // Mensaje en Consola.
  } else { // De no cumplirse alguna de las condiciones en el if anterior, recae en else.
    console.log("Dato ingresado Incorrecto. Pruebe Nuevamente."); // Mensaje en Consola.
  }
}
