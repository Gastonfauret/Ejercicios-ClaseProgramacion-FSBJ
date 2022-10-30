import "./styles.css";

// Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
// Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
// La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
// La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada.

//Declaramos, inicalizamos y asignamos longitud del arreglo.
const line: number[] = new Array(12);

//Declaramos la funcion que asignara los lugares a la fila (ocupado o libre) de forma aleatoria.
//Contara estos lugares y los mostrara en consola.
//Pasamos tres parametros: arreglo, contador de bustacas ocupadas y contador de butacas libres.
function seatCounter(line: number[], ocuppiedSeat: number, freeSeat: number) {
  for (let i: number = 0; i < line.length; i++) {
    //Ciclo For, que recorrera el array.
    line[i] = Math.floor(Math.random() * 2); //Llena el array con nros aleatorios: 0 y 1.
    //Condicion, line[i] es 0.
    if (line[i] === 0) {
      //La variable se incrementa en uno.
      freeSeat++;
      //Condicion, line[i] es 1.
    } else if (line[i] === 1) {
      //La variable se incrementa en uno.
      ocuppiedSeat++;
    }
  }
  //Imprime en consola el array.
  console.log(line);
  //Imprime mensaje en consola.
  console.log(
    `Los asientos ocupados de la fila son ${ocuppiedSeat} de ${line.length}`
  );
  //Imprime mensaje en consola.
  console.log(
    `Los asientos libres de la fila son ${freeSeat} de ${line.length}`
  );
}
//Llamado de la funcion, con los valores de los parametros.
seatCounter(line, 0, 0);
