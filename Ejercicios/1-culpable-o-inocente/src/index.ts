import "./styles.css";

// Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
// •	En caso afirmativo el usuario responderá si
// •	En caso contrario responderá no.
// •	Si el usuario responde si se escribirá por el documento «irás a la cárcel».
// •	Si el usuario responde no se escribirá por el documento web «irás a casa».
// •	En cualquier caso en el documento web se escribirá «la documentación por favor».

//Declaracion de las variables que usaremos.
const name = document.getElementById("name");
const sentence = document.getElementById("sentence");
const btnSend = document.getElementById("btnSend");
const result = document.getElementById("result");

//Declaracion de la Etiqueta que nos permitira escribir en pantalla el resultado.
result.innerHTML;

//Se le agrega un escuchador de eventos al boton (click).
btnSend.addEventListener("click", () => {
  //Sentencia condicional: Si se ingresa un valor estrictamente igual a "yes":
  if (sentence.value === "yes") {
    //Le asigna un texto a "result y lo imprime en pantalla."
    result.innerHTML = `You Mr./Mrs ${name.value} go to jail`;
  } 
  //Sentencia condicional: Si se ingresa un valor estrictamente igual a "no":
  else if (sentence.value === "no") {
    //Le asigna un texto a "result y lo imprime en pantalla."
    result.innerHTML = `You Mr./Mrs ${name.value} go home`;
  } 
  //Sentencia condicional: Si se ingresa un valor distinto a "yes" y "no":
  else if (sentence.value !== "yes" && "no") {
    //Le asigna un texto a "result y lo imprime en pantalla."
    result.innerHTML = `Documentation, Please`;
  });
