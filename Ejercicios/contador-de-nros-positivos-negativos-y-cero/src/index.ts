import "./styles.css";

// Almacene en un arreglo de dimensión N números (la
// cantidad es ingresada por el usuario).
// Muestre cuántos números son positivos,
// cuántos son negativos y cuántos ceros hay.

//Declaramos la constante que contendra la longitud ingresada por el usuario.
const num: number = Number(prompt(`Ingrese Longitud de Arreglo:`));
//Declaramos el arreglo y su longitud sera la ingresada por el usuario.
const arregloNum: number[] = new Array(num);
//Declaramos las variables que contendran los numeros segun su valor.
let cero: number = 0;
let negativo: number = 0;
let positivo: number = 0;
//Declaramos la variable que iterara en el ciclo for.
let i: number;

//Iniciamos el ciclo for:
for (i = 0; i < num; i++) {
  //Pedimos al usuario numeros aleatorios y lo almacenamos en el arreglo.
  arregloNum[i] = Number(
    prompt(`Ingrese un numero:\n Numero ${i + 1} de ${num}`)
  );
  //Ciclo condicional, segun el valor del numero dado.
  if (arregloNum[i] < 0) {
    //Si el valor es menor a "0".
    negativo++; //Variable "negativo" incrementa su valor.
  } else if (arregloNum[i] === 0) {
    //Si el valor es estrictamente igual a "0".
    cero++; //Variable "cero" incrementa su valor.
  } //Si no se dado ninguno de los anteriores:
  else positivo++; //Variable "positivo" incrementa su valor.
}

//Imprimimos un mensaje en la consola.
console.log(
  `El arreglo contiene ${num} numeros:\n${positivo} Positivos.\n${negativo} Negativos.\n${cero} Ceros.`
);
