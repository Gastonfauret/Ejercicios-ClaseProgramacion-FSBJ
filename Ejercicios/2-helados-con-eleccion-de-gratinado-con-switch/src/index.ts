import "./styles.css";

let pedido: string = document.getElementById("pedido");
const btnEnviar = document.getElementById("btnEnviar");
const recibo = document.getElementById("recibo");
const heladoComun: number = 3.0;
const oreo: number = 1;
const kitKat: number = 1.5;
const chipsChocolate: number = 0.95;
const brownie: number = 0.75;
let total: number = 0;

recibo.innerHTML;

btnEnviar.addEventListener("click", () => {
  switch (pedido.value) {
    case "1":
      total = heladoComun + oreo;
      recibo.innerHTML = `Helado Comun + Gratinado "Oreo".<br>Total $ ${total}.`;
      break;
    case "2":
      total = heladoComun + kitKat;
      recibo.innerHTML = `Helado Comun + Gratinado "Kit Kat"<br>Total $ ${total}.`;
      break;
    case "3":
      recibo.innerHTML = `No tenemos ese gratinado, Lo sentimos`;
      break;
    case "4":
      total = heladoComun + chipsChocolate;
      recibo.innerHTML = `Helado Comun + Gratinado "Chips de Chocolate"<br>Total $ ${total}`;
      break;
    default:
      recibo.innerHTML = "Por favor, elija un Sabor de Gratinado Valido.";
  }
});
