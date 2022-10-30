import "./styles.css";

// El jardín infantil necesita un programa para poder asignar cursos a las aulas.
// Se cuentan con tres aulas: Azul, Verde y Amarilla.
// Cada aula cuenta con una capacidad diferente (es decir, un número de bancos).
// La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30.
// Dado un número de infantes ingresado por el usuario,
//el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
//La salida del algoritmo es el color que identifica al aula asignada.

// Ejemplo: si la cantidad de personas de un curso es 34, entonces el aula a asignar será la Verde.
// El aula Amarilla no puede ser asignada porque la cantidad de personas es menor a la cantidad de bancos disponibles.
// El aula Azul es descartada porque quedan más bancos inutilizados que en el aula Verde (6 versus 1).

//Declaramos, asignamos tipo y longitud de los arreglos coorespondientes a cada salita.
const blueClassroom: number[] = new Array(40); //Salita Azul.
const greenClassroom: number[] = new Array(35); //Salita Verde.
const yellowClassroom: number[] = new Array(30); //Salita Amarilla.

//Pedimos por prompt la cantidad de Alumnos y los guardamos en la variable kidsNumber.
const kidsNumber: number = Number(prompt("Ingrese Cantidad de Alumnos: "));

//Declaramos la funcion que seleccionara a los alumnos segun la cantidad.
//Le pasamos por parametros los arreglos de las salitas.
function classroomSelector(
  blueClassroom: number,
  yellowClassroom: number,
  greenClassroom: number
) {
  //Condicional If: Si la cantidadde alumnos es mayor a cero y menos a la cantidad de la salita Azul
  //(Que es la que mayor cantidad de alumnos soporta), entonces:
  if (kidsNumber > 0 && kidsNumber <= blueClassroom.length) {
    //Condicional, Si el numero de alumnos es mayor a la capacidad del la salita verde
    // y menor o igual a la capacidad de la salita Azul, entonces:
    if (
      kidsNumber > greenClassroom.length &&
      kidsNumber <= blueClassroom.length
    ) {
      //Mensaje de Bienvenida en Consola.
      console.log(`Bienvenides a la Salita Azul`);
    } //Condicional, Si el numero de alumnos es mayor a la capacidad del la salita amarilla
    // y menor o igual a la capacidad de la salita verde, entonces:
    else if (
      kidsNumber > yellowClassroom.length &&
      kidsNumber <= greenClassroom.length
    ) {
      //Mensaje de Bienvenida en Consola.
      console.log(`Bienvenides a la Salita Verde`);
    }
    //Condicional If, si la cantidad de Alumnos es menor o igual a la capacidad de la salita amarilla, entonces:
    else if (kidsNumber <= yellowClassroom.length) {
      //Mensaje de Bienvenida en Consola.
      console.log(`Bienvenides a la Salita Amarilla`);
    }
  }
  //Si no se da las condiciones de la linea 32, entonces:
  else {
    ////Mensaje de Bienvenida en Consola.
    console.log(`El numero ingresado es incorrecto`);
  }
}
//Llamado de la Funcion, y pasamos los valores de los parametros.
classroomSelector(blueClassroom, yellowClassroom, greenClassroom);
