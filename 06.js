const A = parseInt(prompt("Digite o lado A:"));
const B = parseInt(prompt("Digite o lado B:"));
const C = parseInt(prompt("Digite o lado C:"));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os lados não formam um triângulo");
}