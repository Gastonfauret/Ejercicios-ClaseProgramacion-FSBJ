import "./styles.css";

// Para tener control de la gente que hay en una disco el gerente quiere saber
// cuantas personas de diferentes edades han entrado.
// No se han permitido la entrada a menores de 18 ni mayores de 40.
// Para la carga de los datos se usa la función aleatorio
// (use la función aleatorio(menorValor,mayorValor), es decir aleatorio (19,40))
// Se sabe que la cantidad total de personas dentro del local es de 270
// Se quiere saber:
//   - Cuántas personas son menores de 21 años.
//   - Cuántas personas mayores o igual a 21 años.
//   - Cuántas personas en total.

//Se declara el array que almacenara las personas habilitadas a ingresar a la disco.
//Capacidad: 270 Personas.
const people: number[] = new Array(270);
//Se declara, asigna tipo e inicializa, 
//la variable que se usara de contador de las personas menores a 21 años.
const minor: number = 0;
//Se declara, asigna tipo e inicializa, 
//la variable que se usara de contador de las personas igual o mayores a 21 años.
const major: number = 0;

//declaramos la funcion que hara de contador de personas, con 6 parametros.
function peopleSelector(
  people: number,
  i: number,
  menorValor: number,
  maximoValor: number,
  minor: number,
  major: number
) {
  //Ciclo for que guardara en el array las edades de las personas.
  for (i = 0; i < people.length; i++) {
    //Se designa parametros para la designacion aleatoria de las edades pertimidas,
    //Que se guardara en el array, por su indice.
    people[i] = Math.floor(Math.random() * (maximoValor - menorValor) + menorValor));
    //Condicional If: Si la persona es menor a 21, entonces:
    if (people[i] < 21) {
      //El contador minor incrementa su valor en 1.
      minor++;
    } 
    //Condicional Else If: Si la persona es mayor o igual a 21, entonces:
    else if (people[i] >= 21) {
      //El contador major incrementa su valor en 1.
      major++;
    }
  }
  //Se imprimen los resultados en la consola.
  console.log(people);  
  console.log(`Cantidad de Persona: ${people.length}`);
  console.log(`Menores a 21 años: ${minor}`);
  console.log(`Mayores a 21 años: ${major}`);
}
//Se llama a la funcion y se le asignan distinrtos valores a los parametros.
peopleSelector(people, 0, 19, 40, 0, 0);
