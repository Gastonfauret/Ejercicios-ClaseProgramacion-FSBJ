import "./styles.css";

let base = document.getElementById("base");
let height = document.getElementById("height");
let btnSend = document.getElementById("btnSend");
let area: number;

function areaCalc(base, height) {
  area = (base * height) / 2;
  console.log(`El Area del Triangulo es ${area}`);
}

btnSend.addEventListener("click", () => {
  areaCalc(base.value, height.value);
});
