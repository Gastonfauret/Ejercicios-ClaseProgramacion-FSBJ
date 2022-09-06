//Se definen y Asignan las Variables.
let numero1 = document.getElementById("dato1");
let numero2 = document.getElementById("dato2");
let numero3 = document.getElementById("dato3");
let numMax: number;
// Se trae el boton y se lo asigna a una variable.
let btnEnv = document.getElementById("btnEnviar");

//Se declara la funcion, y se le asigna funciones.
function comparar(numero1, numero2, numero3) {
  //Se declaran las condicionales.
  if (numero1 > numero2 && numero1 > numero3) {
    numMax = numero1;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (numero2 > numero1 && numero2 > numero3) {
    numMax = numero2;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (numero3 > numero1 && numero3 > numero2) {
    numMax = numero3;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    console.log("Dos o mas Numeros son Iguales");
  }
}
//Se le asigna un "escuchador" al boton.
btnEnv.addEventListener("click", () => {
  //Se llama a la funcion. Cuando se aprete el boton enviar, entra en funcionamiento la funcion.
  comparar(numero1.value, numero2.value, numero3.value);
});
