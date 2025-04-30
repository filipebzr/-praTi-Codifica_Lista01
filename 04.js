let opcao = prompt(
    "Escolha uma opção:\n" +
    "1 - Dizer Olá\n" +
    "2 - Mostrar a data atual\n" +
    "3 - Sair"
);

switch (opcao) {
    case "1":
        console.log("Olá, usuário!");
        break;

    case "2":
        const dataAtual = new Date();
        console.log("Data atual: " + dataAtual.toLocaleString());
        break;

    case "3":
        console.log("Saindo do programa...");
        break;

    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}
