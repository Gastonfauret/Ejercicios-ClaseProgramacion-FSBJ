import "./styles.css";

let i: number;
let serie: number[] = [];

for (i = 0; i < 100; i++) {
  switch (i) {
    case 0:
    case 1:
      serie[i] = i;
      break;
    case 2:
      serie[i] = i - 1;
      break;
    default:
      serie[i] = serie[i - 2] + serie[i - 1];
      break;
  }
}
console.log(serie);
