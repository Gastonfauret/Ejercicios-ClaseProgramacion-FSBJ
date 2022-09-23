import "./styles.css";

//Realiza un script que cuente el número de vocales que tiene un texto.

//Se define el array que contendra los parametros, en este caso vocales.
const vocales: string[] = ["a", "e", "i", "o", "u"];
//se define la variable que contara las vocales.
let vocal: number = 0;
//Pedimos al usuario que ingrese palabra/frase y la asignamos a la variable "palabra".
const palabra = prompt("Ingrese palabra o frase, por favor:");
//A la variable "palabra" la convertimos a minuscula y la asignamos a la variable "palabraMin".
const palabraMin: string = palabra.toLowerCase();

//Iniciamos el ciclo for: por cada letra en "palabraMin", entonces:
for (let letra of palabraMin) {
  //Condicional if: Si alguna letra en "palabraMin", incluya (includes),
  //el contenido del array "vocales"(las vocales en la linea de codigo 6).
  if (vocales.includes(letra)) {
    //A la Variable "vocal" aumenta en 1.
    vocal++;
  }
}
//Imprime mensaje en consola con los valores de las vocales (vocal).
console.log(`La Palabra dada tiene ${vocal} vocales.`);
