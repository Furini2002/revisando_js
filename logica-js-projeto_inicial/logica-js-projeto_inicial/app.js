alert ("Boas vindas, ao jogo número secreto");

let numeroSecreto = 29;
console.log(numeroSecreto);

let chute = prompt("Escolha um número entre 1 e 30");

if(numeroSecreto == chute){
alert(`Isso ai, você descobriu o númeor secreto ${numeroSecreto}`);
} else{
    alert("Você errou :(")
}