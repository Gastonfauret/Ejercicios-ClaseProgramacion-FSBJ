import "./styles.css";

const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7]; //Se declara el Arreglo a Usar y se le asigna elementos.
const arregloInvertido: number[] = []; //Se declara el Arreglo vacio a Usar para invertir el arreglo original.

function invertir(i: number, j: number) {
  //Se declara la funcion "invertir" y se le pasa 2 parametros.
  if (j < 0) {
    //Caso base del Metodo recursivo: Corta cuando "j" se menor a cero.
    return arregloInvertido; //Si se cumple lo anterior: Devuelve el arreglo y corta el ciclo.
  } else {
    //Si no sucede lo anterior, entonces:
    arregloInvertido[i] = arreglo[j]; //Se le asigna a "arregloInvertido"(en posicion "0") los valores invertidos de "arreglo"(Ultima posicion).
    i++; //En el siguiente ciclo "i" valdra un valor siguiente ascedente. (valia 0, luego 1, despues 2, etc.)
    j--; //En el siguiente ciclo "j" valdra un valor menos descedente. (valia 6, luego 5, despues 4, etc.)
  }
  invertir(i, j); //El llamado del metodo a si mismo, con sus parametros.
}
invertir(0, arreglo.length - 1); //Se llama a la funcion y se le pasa los valores de los parametros.
console.log(arreglo); //Imprime el arreglo original.
console.log(arregloInvertido); //Imprime el arreglo original invertido.

//Hola Bebito Fiu Fiu. Luego de darle vueltas lo saque. Te lo mando para que lo veas,
//ya que me dijiste que estabas medio perdido en recursividad.
//Fijate que en el repositorio de Github tengo varios ejericios de recursividad.
