import "./styles.css";
// Construya un algoritmo que según el número de
//mes muestre el nombre de dicho mes
//¿Cómo se puede hacer?

//Se declaran las constante a usar.
const monthInput = document.getElementById("monthInput") as HTMLInputElement;
const monthPara = document.getElementById("monthPara") as HTMLParagraphElement;
//Se declara el Boton que enviara los datos.
const btnGetMonth = document.getElementById("btnGetMonth");

//Se le asigna al Boton un escuchardor de eventos, en este caso un "click".
btnGetMonth.addEventListener("click", () =>
  //Se llama a la Funcion (definida mas abajo) y se le asigna un parametro.
  //Se convierte el valor ingresado en el input en numero.
  findOutMonth(Number(monthInput.value))
);

// Se declara la funcion y se le asigna un parametro, aun sin valor. 
// El valor se asigna cuando se la llama (linea de codigo 16).
function findOutMonth(month: number): void {
  //Se declara el array, se le asigna su tipo, que sera de tipo "string", 
  //y se le asigna valores, en este caso los doce mes del año.
  const meses: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  //Se imprime en consola el indice (ubicacion del mes en el array), y se le resta 1
  //Debido a que el array siempre arranca en la ubicacion cero.
  console.log(meses[month - 1]);
}

