import "./styles.css"; //Etiqueta de enlace del archivo "style.css".

let rotulo = document.getElementById("rotulo"); //Toma el primer texto y lo pone en la variable "rotulo"
let btnEnv = document.getElementById("btnEnv"); //Toma el boton y lo pone en la variable "btnEnv"

rotulo.innerHTML = "Ingrese la clave. <br/> Usted posee tres intentos: "; //Toma el contenido de "rotulo" para poder modificarlo mas abajo.

btnEnv.addEventListener("click", () => {
  //"Escucha" el Evento de hacer "Click" en el boton y le asina funciones.
  let contador: number = 1; // Declara la variable "contador" y le asigan tipo y valor.
  let claveIngresada: string; // Declara la variable "claveIngresada" y le asigan su tipo.
  while (contador <= 3 && claveIngresada !== "eureka") {
    //Se declara el ciclo "while": Mientras contador sea menor o igual a 3 y "claveIngresada" se diferente a "eureka", entonces:
    claveIngresada = prompt("Introduzca la clave"); // Se le asigna a la variable "claveIngresada" en valor ingresado por prompt.
    contador++; // la variable contador incrementa su valor en 1.
  }
  if (claveIngresada === "eureka") {
    //Condicion: Si "claveIngresada" es estrictamente igual a "eureka", entonces:
    rotulo.innerHTML = "Clave Correcta. <br/> Bienvenido/a"; //Sobreescribe el "rotulo" para mostrar en pantalla el mensaje "Clave Correcta. Bienvenido/a". la etiqueta <br/> asigna un salto de linea.
    console.log("Clave valida. Bienvenido/a"); // Muestra el mismo mensaje, pero en la consola.
  } else {
    //Si no son validas las anteriores condiciones, entonces:
    rotulo.innerHTML = "Clave Incorrecta. <br/> Ya no tenes mas intentos"; //Sobreescribe el "rotulo" para mostrar en pantalla el mensaje "Clave Incorrecta. Ya no tenes mas intentos". la etiqueta <br/> asigna un salto de linea.
    console.log("Ya no tenes mas intentos"); //// Muestra el mismo mensaje, pero en la consola.
  }
});
