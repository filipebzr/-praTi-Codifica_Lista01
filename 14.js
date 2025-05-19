const numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 2; i <= numero; i++) {
    fatorial *= i;
}

console.log(`Fatorial de ${numero}: ${fatorial}`);