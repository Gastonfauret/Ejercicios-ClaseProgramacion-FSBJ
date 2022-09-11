import "./styles.css";

// Se Inicializa el array, se le asigna su tipo y se le asigna valores.
const nums: number[] = [1, 2, 3];
//Se imprime en consola el valor del Array.
console.log(nums);

// Se Inicializa el array, se le asigna su tipo, por ahora esta vacio.
const nombres: string[] = [];
// Se le asigna el primer valor en la Posicion "0".
nombres[0] = "Marcelo";
// Se le asigna el segundo valor en la Posicion "1".
nombres[1] = "Gaston";
// Se imprime en consola los valores.
console.log(nombres);

// Funcion "push" agrega elementos al final del array.
nums.push(3);
// Pueden ser muchos y de diferente tipo.
//En este caso (numero, string, valor booleano).
nums.push(5, "Carlos", true);

//Estructura basica de declarar un array. 
// Se declara Nombre, tipo = new Array(y el tamaño del mismo)
const meses: string[] = new Array(0);
// Se imprime en consola, array vacio.
console.log(meses);

// Se le añade los 4 primeros meses.
meses.push("Enero", "Febrero", "Marzo", "Abril");
// Se imprime en consola.
console.log(meses);

