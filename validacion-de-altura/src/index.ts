import "./styles.css"; //Etiqueta de enlace de archivo css
let btnEnv = document.getElementById("btnEnviar"); //Toma el boton y lo pone en la variable "btnEnv"
let dato = document.getElementById("dato"); //Toma lo que se ingresa en la caja y lo pone en la variable "dato"
let rotulo = document.getElementById("rotulo"); //Toma el primer texto y lo pone en la variable "rotulo"
rotulo.innerHTML = "Indique la altura de la persona en cm: "; // Toma el Lugar del rotulo y le asigna un texto.
btnEnv.addEventListener("click", () => {
  //Escucha el Evento de hacer "Click" en el boton y le asina funciones.
  let alturaPermitida: number = 129; // Declara la Variable alturaPermitida y le asigna un valor para ser tomado como parametro.
  let alturaPersona: number = dato.value; //Asigna el valor ingresado en la caja "dato" y lo asigna a la variable alturaPersona.
  if (alturaPersona <= alturaPermitida) {
    //Declara una condicional: Si alturaPersona es menor o igual a alturaPermitida, entonces:
    console.log("Hace falta medir al menos 130 cm para ingresar"); //Mensaje en Consola
    console.log(
      "La persona mide",
      `${alturaPersona}`,
      " cm no puede subir al juego"
    ); //Mensaje en Consola
  } else {
    console.log("La persona puede subir al juego"); //Mensaje en Consola
  }
});
