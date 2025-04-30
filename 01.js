let numero = prompt("Digite um número: ");
numero = parseInt(numero); 
if (numero % 2 == 0) {
    console.log(`O ${numero} é par.`);
} else {
    console.log(`O ${numero} é impar.`);
}