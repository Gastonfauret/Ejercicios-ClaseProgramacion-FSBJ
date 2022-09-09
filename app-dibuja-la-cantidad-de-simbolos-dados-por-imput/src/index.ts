import "./styles.css";

//Traemos el Boton y asignamos a la variable.
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Captura de dato en el primer imput y asignamos su valor a la variable.
  let cantidad: number = document.getElementById("dato1").value;
  //Captura de dato en el segundo imput y asignamos su valor a la variable.
  let simbolo: number = document.getElementById("dato2").value;

  let x: number,
    linea: string = ""; //Se declaran y asigna tipo a dos variables en una misma linea de codigo.
  for (x = 1; x <= cantidad; x++) {
    // Se inicia un ciclo for, que imprimira la "cantidad" de veces lo indicado abajo:
    linea += simbolo; // Aqui se construye la cantidad que imprimira el valor de la variable "simbolo".
  }
  console.log(linea); // Imprime el valor de "linea" en consola.
});
