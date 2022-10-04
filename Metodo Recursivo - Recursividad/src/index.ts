//Metodo Recursivo o Recursividad.

//El Metodo Recursivo o Recursividad es una funcion que se llama a si misma dentro de la misma
//funcion, para asi generar un ciclo (similar al for).
//El caso base es la condición que le dice a la función cuando dejar de llamarse a sí misma.
//Si no le dices a la función cuándo detenerse, entonces sucederá algo llamado stackoverflow:
//(Traduccion Literal: Desbordamiento de Pila).
//La pila(stack) se va a llenar con funciones que se están llamando,
//pero que no regresan ni se quitan de la pila.

//Fuente: (https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/).
//Video(https://www.youtube.com/watch?v=IQLW2b2hpTM&list=PPSV).

//----------------------------------------------------------------------------------------
//Ejemplos:

// Ciclo For Tradicional.

//La siguiente funcion contiene un ciclo for que disminuye en 1 en cada iteracion.
function contar(num: number) {
  // Funcion con su parametro y su tipo.
  for (let i = num; i <= 1; i--) {
    // Ciclo for: i arranca en 10 y va disminuyendo en 1 en cada iteracion.
    console.log(i); //Imprime en consola el valor de i en cada iteracion.
  }
}
contar(10); // Se llama a la funcion y se le pasa su parametro numerico.

//----------------------------------------------------------------------------------------
// Recursivo.
// Misma funcion que el ejercicio anterior. Disminuye en 1 el valor de num en cada iteracion.
function contar(num: number) {
  // Funcion con su parametro y su tipo.
  if (num === 0) {
    // Condicional para detener el programa: Cuando num llegue a 0 (arranca en 10).
    return; // Cuando num llega a 0, retorna los valores de cada iteracion.
  }
  console.log(num); //Imprime en consola el valor de i en cada iteracion.
  contar(num - 1); // La funcion se llama a si misma para generar la iteracion, y en cada iteracion resta su valor en 1 cada vez.
}
contar(10); //Se llama a la funcion y se le asigna valor al parametro numerico.

//----------------------------------------------------------------------------------------

//Funcion Factorial

// El resultado factorial de un numero, es la multiplicacion de sus numeros anteriores.
//Por ejemplo, el resultado factorial de 3 es 6 (3 * 2 * 1).
// El factorial de 6 es 720 (6 * 5 * 4 * 3 * 2 * 1).

//Con Ciclo For.

function factorial(num: number) {
  // Funcion con su parametro y su tipo.
  //
  if (num === 0 || num === 1) {
    //Ciclo Condicional: Si num es igual a 0 o 1.
    console.log(1); //Imprime en consola 1.
    return; //Se detiene la ejecucion y retorno el valor 1.
  }
  let resultado: number = 1; //Declaramos la variable que contendra los numeros en cada iteracion y asinamos su tipo.

  for (let i = num; i > 0; i--) {
    //Ciclo for: i inicia con valor de num, y va disminuyendo en 1.
    resultado *= i; //Resultado hace la multiplicacion y la guarda.
  }
  console.log(resultado); //Se imprime el resultado en consola.
}
factorial(6); //Se llama a la funcion y se le asigna valor al parametro numerico.

//----------------------------------------------------------------------------------------

//Con Recursivo.

function factorial(num: number) {
  // Funcion con su parametro y su tipo.
  let resultado: number = 1; //Declaramos la variable que contendra los numeros en cada iteracion y asinamos su tipo.

  if (num === 0 || num === 1) {
    //Ciclo Condicional: Si num es igual a 0 o 1.
    resultado = 1; //Asigna valor a la variable.
  } else {
    // Si no se cumple la primer condicional, entonces:
    resultado = num * factorial(num - 1); // Se llama a la funcion, se genera la multiplicacion y se guarda el resultado en la variable.
  }
  return resultado; //Al terminar el ciclo, devuelve el valor de resultado.
}
console.log(factorial(6)); //Se llama a la funcion, se le asigna valor al parametro y se imprime en consola el valor de la variable resultado.

//----------------------------------------------------------------------------------------
