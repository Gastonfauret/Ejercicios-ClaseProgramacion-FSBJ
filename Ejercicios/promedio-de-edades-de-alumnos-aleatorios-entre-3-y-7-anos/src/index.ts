import "./styles.css";

// El DT de los infantiles del equipo de fútbol desea saber el promedio
// de la edad de los chicos La edad de los chicos va de 3 a 7 años.
// Las edades son cargadas al azar (use la función aleatorio(menorValor,
// mayorValor), es decir aleatorio(3,7)) Muestre todas las edades y el
// promedio de las mismas.

//Declaramos el arreglo que contendra las edades de los niños.
//La longitud es ingresada por el Usuario.
const kidsAges: number[] = new Array(
  Number(prompt("Ingrese Cantidad de Niños: "))
);

//Declaramos la funcion que llenara el arregle, hara la suma y el promedio de las edades de los niños.
//LA misma contiene 3 parametros.
function averageSum(menorValor: number, mayorValor: number, sum: number) {
  //Ciclo for que llenara el arreglo con las edades de manera aleatoria.
  for (let i: number = 0; i < kidsAges.length; i++) {
    //Asignamos los valores aleatorios por el indice del arreglo.
    kidsAges[i] = Math.floor(
      Math.random() * (mayorValor - menorValor) + menorValor
    );
    //Guardamos y sumamos los valores asignados en cada iteracion.
    sum += kidsAges[i];
  }
  //Realizamos el promedio de las edades.
  const average: number = Math.floor(sum / kidsAges.length);
  //Imprimimos mensaje en consola.
  console.log(kidsAges);
  //Imprimimos mensaje en consola.
  console.log(`El Promedio de los Niños es ${average}`);
}
//Llamado de la funcion y asiganamos valores a los parametros.
averageSum(3, 7, 0);
