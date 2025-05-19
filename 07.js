const quantidade = parseInt(prompt("Quantas maçãs foram compradas?"));
let preco = quantidade < 12 ? 0.3 : 0.25;
const total = quantidade * preco;
console.log(`Total: R$${total.toFixed(2)}`);