import "./styles.css";

// Desarrolle un algoritmo que permita cargar alumnos y sus
// notas en los tres trimestres se debe permitir obtener el
// promedio anual (es decir, de sus tres notas) de un alumno
// (ingresado por el usuario) luego de resolverlo, pensar en
// aprovechar métodos y discutir como representar la información.

//Declaramos las variables que usaremos y traemos las funciones desde el archivo html.
const nombre: string = document.getElementById("nombre");
const primerTrimestre: number = document.getElementById("primerTrimestre");
const segundoTrimestre: number = document.getElementById("segundoTrimestre");
const tercerTrimestre: number = document.getElementById("tercerTrimestre");
let resultados: string = document.getElementById("resultados");
//Traemos el boton que enviara los datos.
const boton = document.getElementById("boton");

//Constriumos una funcion que hara la cuenta y mostrara en pantalla el resultado.
function promedio() {
  const promedio: number =
    (Number(primerTrimestre.value) +
      Number(segundoTrimestre.value) +
      Number(tercerTrimestre.value)) /
    3;
  resultados.innerText = `Alumno: ${nombre.value}.\n\nNota Primer Trimestre: ${primerTrimestre.value}.\n\nNota Segundo Trimestre: ${segundoTrimestre.value}.\n\nNota Tercer Trimestre: ${tercerTrimestre.value}.\n\nPromedio Anual: ${promedio}.`;
}
//Le añadimos un escuchardor al boton, y le añadimos el llamado de la funcion.
boton.addEventListener("click", () => {
  promedio();
});
