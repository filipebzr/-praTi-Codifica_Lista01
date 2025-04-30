let nota = prompt("Digite sua nota: ");
nota = parseFloat(nota); 

if (nota < 5) {
    console.log("Reprovado.");
}
else if (nota < 7) {
    console.log("Recuperação.");
}
else if (nota < 10) {
    console.log("Aprovado.");
}
else {
    console.log("Nota inválida.");
}