let soma = 0;
let contador = 0;
let input;

do {
    input = parseFloat(prompt("Digite um número (0 para sair):"));
    if (input !== 0) {
        soma += input;
        contador++;
    }
} while (input !== 0);

if (contador > 0) {
    console.log(`Média: ${soma / contador}`);
} else {
    console.log("Nenhum número foi inserido.");
}