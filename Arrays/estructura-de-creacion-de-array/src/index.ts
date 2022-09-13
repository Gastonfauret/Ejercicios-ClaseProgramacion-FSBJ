import "./styles.css";

//Declaracion de Array:
//1 Declaracion de variable (let, const, var).
//2 Nombre que llevara el array (num).
//3 Tipos de lementos que contendra el array (number).
//4 Corchetes.
//5 Signo de asignacion de valores (=)
//6 Asignacion de elementos al array.

const num: number[] = [20, 14, 8, 0, 5, 19, 24];
console.log(num);

//Para recorrer los elementos del array.
//Usamos un ciclo for:
//i comienza en 0, termina cuando ya no haya elementos (num.length = largo de num).
// y suma uno en cada iteracion.
// "${i}" es el Indice o posicion de cada elemento.
// "${num[i]}" es cada elemento y [i] es la posicion del elemento.

for (let i = 0; i < num.length; i++) {
console.log(`En Indice: ${i}. Elemento: ${num[i]}.`);
}