import "./styles.css";

//Replique la siguiente figura:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

//Se declara la longitud de las figuras.
let size: number = 8;
//Se declara tipo y valor de la variable "chessBoard", en este caso estara vacio.
let chessBoard: string = "";
//Se inicia el primer ciclo for que contendra el ciclo completo.
for (let y: number = 0; y < size; y++) {
  //Se inicia el segundo ciclo for que imprimira cada fila de la figura.
  for (let x: number = 0; x < size; x++) {
    //Ciclo condicional: Si cada espacio (x + y) es par:
    if ((x + y) % 2 === 0) {
      //Imprimra un espacio.
      chessBoard += " ";
    }
    //Si no se da la condicion de arriba:
    else {
      //Imprimira un "#".
      chessBoard += "#";
    }
  }
  //En cada iteracion de fila, hara un salto de la misma.
  chessBoard += "\n";
}
//Imprime en consola el resultado.
console.log(chessBoard);
