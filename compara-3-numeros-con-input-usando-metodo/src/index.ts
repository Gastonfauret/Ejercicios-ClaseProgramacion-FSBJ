//Se definen y Asignan las Variables.
let numero1 = document.getElementById("dato1");
let numero2 = document.getElementById("dato2");
let numero3 = document.getElementById("dato3");
let numMax: number;
// Se trae el boton y se lo asina a una variable.
let btnEnv = document.getElementById("btnEnviar");

//Se declara la funcion, y se le asigna funciones.
function comparar(): void {
  //Se declaran las variables que contendran los valores introducidos en los imputs.
  let dato1: number = Number(numero1.value);
  let dato2: number = Number(numero2.value);
  let dato3: number = Number(numero3.value);
  //Se declaran las condicionales.
  if (dato1 > dato2 && dato1 > dato3) {
    numMax = dato1;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (dato2 > dato1 && dato2 > dato3) {
    numMax = dato2;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (dato3 > dato1 && dato3 > dato2) {
    numMax = dato3;
    console.log(`El Numero Maximo es ${numMax}`);
  }
  if (dato1 === dato2 || dato1 === dato3 || dato2 === dato3) {
    console.log("Dos o mas Numeros son Iguales");
  }
}
//Se le asigna un "escuchador" al boton.
btnEnv.addEventListener("click", () => {
  //Se llama a la funcion. Cuando se aprete el boton enviar, entra en funcionamiento la funcion.
  comparar();
});
