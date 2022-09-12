import "./styles.css";

// Construya un algoritmo que tenga un arreglo de
// dimensión 5 y llénelo con los números que el usuario
// desee.
// Muestre los números del arreglo al usuario.

const numDeseado: number[] = []; //Se declara el Array: Se asigna su nombre de constante y su tipo.

for (let i = 0; i < 5; i++) {
  // Se declara el cicle qu--un-e nos permitira el ingreso de 5 numeros.
  //Se declara la funcion "prompt" que nos pedira los numeros,
  //convirtiendo estos a numero y guardamos esos valores en la constante numUsuario.
  const numUsuario = Number(
    prompt(`Ingrese Numero deseado. Numero ${i + 1} de 5:`)
  );
  numDeseado.push(numUsuario); //Añadimos los numeros dados por prompt y los añadimos al array vacio con la funcion "push".
}
//Mostramos un mensaje en consola con los elementos del array conseguidos.
console.log(`El Arreglo contiene los siguientes elementos: ${numDeseado}`);
