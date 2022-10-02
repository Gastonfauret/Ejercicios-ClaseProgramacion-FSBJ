import "./styles.css";

//Metodo que iguala dos arrays.
function metodo1(x: String, y: number) { //Deberia asignarse "string".
  let ax; //No se le asigno tipo.
  ax = arr[x]; //arra[] no esta declarado, va a dar valor null.
  arr[x] = arr[];//arr[], no tiene indice de asignacion.
  arr[y] = ax;
}

function metodo2(v: number[], s: number) : void { //Number[] no es asignable, se deberia declarar antes.
  let i: number, d: number;
  i == 0 //Para asignarse deberia tener solo "=". Con "==" compara dos valores.
  d = s - 1 // No recibe parametro "s".
  while (i < d){//No funciona, no itera, los valores no se suman ni restan.
  metodo1(v, i, d); //Tiene 3 parametros y arriba solo recibe 2.
    i = i + 1;
    d = d - 1; //"d" no tiene valor asignado.
    }
  return v; //Como esta puesto void, no es necesario el return.
  //la variable "v" no se modifica, va a retornar igual.
}
//Metodo2: No es llamado, por ende no se le pasa parametros.