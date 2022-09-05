import "./styles.css"; //Archi que importa las caracteristicas de css, por primera vez usados.

//Se declaran las variables de los Rotulos.
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
//Se asignan los valores a los rotulos.
rotulo1.innerHTML = "Ingrese un numero";
rotulo2.innerHTML = "Ingrese otro numero";
rotulo3.innerHTML = "Elija su operación";

//Se "trae" el boton y se asigna a una nueva variable.
let btnEnv = document.getElementById("btnEnv");

//Se asigna el escuchador de eventos al boton.
btnEnv.addEventListener("click", () => {

  //Se asignan los valores de los datos a una variable.
  let dato1: number = document.getElementById("dato1").value;
  let dato2: number = document.getElementById("dato2").value;
  let operacion: string = document.getElementById("operacion").value;
  let resultado = document.getElementById("resultado");
  //Se declara la variable que designara el patron del dibujo (Dibuja Lineas).
  let linea = "-";
  // Se declara el ciclo for, que repetira el patron de dibujo.
  for (let i = 0; i <= 40; i++) {
    linea = linea + "-"; // La ecuacion que dibujara las lineas, arriba y abajo del resultado.
  }
  if (operacion === "sumar") { // Se declaran y asignan las funciones, en este caso "sumar".
    console.log(linea); // Impresion del dibujo "Lineas", en consola.
    resultado.innerHTML = "el resultado es: " + (Number(dato1) + Number(dato2)); // Asigna un valor a resultado.
    console.log("el resultado es: ", Number(dato1) + Number(dato2)); // Imprime en consola el resultado con su mensaje correspondiente.
    console.log(linea); // Impresion del dibujo "Lineas", en consola.
  } else if (operacion === "restar") { // Se declara y asigna la funcion, en este caso "restar".
    console.log(linea); // Impresion del dibujo "Lineas", en consola.
    resultado.innerHTML = "el resultado es: " + (Number(dato1) - Number(dato2)); // Asigna un valor a resultado.
    console.log("el resultado es: ", Number(dato1) - Number(dato2)); // Imprime en consola el resultado con su mensaje correspondiente.
    console.log(linea); // Impresion del dibujo "Lineas", en consola.
  }
});
