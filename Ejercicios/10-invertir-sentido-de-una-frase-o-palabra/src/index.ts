import "./styles.css";

// Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const btnEnviar = document.getElementById("btnEnviar");
const resultado: string = document.getElementById("resultado");
let i: number;

for (i = 0; i <= frase.length; i++) {}

btnEnviar.addEventListener("click", () => {
  const frase: string = document.getElementById("frase");
  const arregloFrase = Array.from(frase.value).reverse().join("");
  resultado.innerHTML = `La frase dada es: "${frase.value}".<br>He Invertida seria asi: "${arregloFrase}"`;
});
