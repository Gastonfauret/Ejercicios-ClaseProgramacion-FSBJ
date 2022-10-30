import "./styles.css";

let num: number = 0;
let serie: number[] = [];

function contar(num: number) {
  if (num === 100) {
    return serie;
  } else if (num === 0 || num === 1) {
    serie[num] = num;
  } else if (num === 2) {
    serie[num] = num - 1;
  } else {
    serie[num] = serie[num - 1] + serie[num - 2];
  }
  contar(num + 1);
}
contar(num);
console.log(serie);
