import "./styles.css";

const nombres: string[] = new Array(2);
const numeros: number[] = new Array(3);

for (let i = 0; i < 2; i++) {
  nombres[i] = prompt("Ingrese Nombre deseado: ");
}

for (let i = 0; i < 3; i++) {
  numeros[i] = prompt("Ingrese Numero deseado: ");
}

console.log(
  `El Array llamado "nombres" contiene ${nombres.length} elementos: ${nombres}`
);

console.log(
  `El Array llamado "numeros" contiene ${numeros.length} elementos: ${numeros}`
);
