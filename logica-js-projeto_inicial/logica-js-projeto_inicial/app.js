alert("Boas vindas, ao jogo número secreto");

let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 1000");
  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(
    `Isso ai, você descobriu o númeor secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
  );
